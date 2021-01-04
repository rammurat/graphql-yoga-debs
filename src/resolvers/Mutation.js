import { v4 as uuidv4 } from 'uuid';

const Mutation = {
    createUser(parent, args, {db}) {
        const isUserExist = db.allUsers.some((user) => { return user.email === args.data.email})

        if(isUserExist) {
            throw new Error('User already exist')
        }

        // add new user and return 
        const user = {
            id: uuidv4(),
            name: args.data.name,
            email: args.data.email,
            age: args.data.age
        }

        db.allUsers.push(user)
        return user;
    },
    createProduct(parent, args, {db, pubsub}) {
        const isUserExist = db.allUsers.some((user) => { return user.id === args.data.author})
        
        if(!isUserExist) {
            throw new Error('User does not exist')
        }

        // add new user and return 
        const product = {
            id: uuidv4(),
            title: args.data.title,
            body: args.data.body,
            published: args.data.published,
            author: args.data.author
        }

        db.allProducts.push(product)
        pubsub.publish('product', {
            product : {
                mutation: 'CREATED',
                data: product
            }
        })

        return product;
    },
    createReview(parent, args, {db, pubsub}) {
        const isUserExist = db.allUsers.find((user) => { return user.id === args.data.author})
        const isProductExist = db.allProducts.find((product) => { return product.id === args.data.product})

        if(!isUserExist || !isProductExist) {
            throw new Error("Can't find user or product.")
        }

        // add new user and return 
        const review = {
            id: uuidv4(),
            text: args.data.text,
            author: args.data.author,
            product: args.data.product
        }

        db.allReviews.push(review)
        pubsub.publish(`review ${args.data.product}`, {review})

        return review;
    },
    deleteUser(parent, args, {db}){
        // remove user
        const index = db.allUsers.findIndex((user) => user.id === args.id)
        if(index === -1){
            throw new Error('User not found')
        }
        const newUsers = db.allUsers.splice(index, 1)

        // remove all products related to the user
        db.allProducts = db.allProducts.filter((product) => {
            const match = (product.author === args.id)

            if(match) {
                // remove all comments related to the user
                db.allReviews = db.allReviews.filter((review) => review.product !== product.id)
            }

            return !match
        })

        db.allReviews = db.allReviews.filter((review) => review.author !== args.id)

        return newUsers[0]
    },
    deleteProduct(parent, args, {db, pubsub}){
        // remove user
        const index = db.allProducts.findIndex((product) => product.id === args.id)
        if(index === -1){
            throw new Error('Product not found')
        }

        // remove product
        const [product] = db.allProducts.splice(index, 1)

        // remove all comments related to the user
        db.allReviews = db.allReviews.filter((review) => review.product !== args.id)

        pubsub.publish('product', {
            product : {
                mutation: 'DELETED',
                data: product
            }
        })

        return product
    },
    deleteReview(parent, args, {db}){
        // remove user
        const index = db.allReviews.findIndex((review) => review.id === args.id)
        if(index === -1){
            throw new Error('Comment not found')
        }

        // remove product
        const newComments = db.allReviews.splice(index, 1) 
        return newComments[0]
    },
    updateUser(parent, args, {db}) {
        const user = db.allUsers.find((user) => { return user.id === args.id})

        if(!user) {
            throw new Error('User does not exist')
        }

        // update user name
        if(typeof args.data.name === 'string') {
            user.name = args.data.name
        }

        // update user email
        if(typeof args.data.email === 'string') {
            const emailTaken = db.allUsers.some((user) => { return user.email === args.data.email})
            
            if(emailTaken) {
                throw new Error('Email taken')
            }

            user.email = args.data.email
        }

        // update user age
        if(typeof args.data.age !== 'undefined') {
            user.age = args.data.age
        }

        return user;
    },
    updateProduct(parent, args, {db, pubsub}) {
        const product = db.allProducts.find((product) => { return product.id === args.id})

        if(!product) {
            throw new Error('Product does not exist')
        }

        // update product title
        if(typeof args.data.title === 'string') {
            product.title = args.data.title
        }

        // update product body
        if(typeof args.data.body === 'string') {
            product.body = args.data.body
        }

        // update product published state
        if(typeof args.data.published === 'boolean') {
            product.published = args.data.published
        }

        // trigger subscription 
        pubsub.publish('product', {
            product : {
                mutation: 'UPDATED',
                data: product
            }
        })

        return product;
    },
    updateReview(parent, args, {db}) {
        const review = db.allReviews.find((review) => { return review.id === args.id})

        if(!review) {
            throw new Error('Comment does not exist')
        }

        // update review text
        if(typeof args.data.text === 'string') {
            review.text = args.data.text
        }

        return review;
    }
}

export default Mutation
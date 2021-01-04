const Query = {
    allUsers(parent, args, {db}) {
        return db.allUsers
    },
    allProducts(parent, args, {db}) {
        if(!args.query) {
            return db.allProducts
        }

        return db.allProducts.filter((prod) => {
            return prod.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    products(parent, args, {db}) {
        if(!args.query) {
            return db.allProducts
        }

        return db.allProducts.filter((product) => {
            return product.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    allReviews(parent, args, {db}) {
        return db.allReviews
    },
    allCategories(parent, args, {db}) {
        return db.allCategories
    },
    allSubCategories(parent, args, {db}) {
        return db.allSubCategories
    },
    allSubSubCategories(parent, args, {db}) {
        return db.allSubSubCategories
    }
}

export default Query
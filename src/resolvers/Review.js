
const Review = {
    product(parent, args, {db}) {
        return db.allProducts.find((product) => {
            return product.id === parent.product
        })
    },
    author(parent, args, {db}) {
        return db.allUsers.find((user) => {
            return user.id === parent.author
        })
    }
}

export default Review
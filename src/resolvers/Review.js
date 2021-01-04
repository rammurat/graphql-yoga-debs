
const Review = {
    product(parent, args, {db}) {
        return db.allProducts.find((product) => {
            return product.id === parent.product
        })
    }
}

export default Review
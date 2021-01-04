const Product = {
    reviews(parent, args, {db}) {
        return db.allReviews.filter((review) => {
            return review.product === parent.id
        })
    }
}

export default Product
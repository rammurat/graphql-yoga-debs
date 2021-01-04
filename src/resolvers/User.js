const User = {
    reviews(parent, args, {db}) {
        return db.allReviews.filter((review) => {
            return review.author === parent.id
        })
    }
}

export default User
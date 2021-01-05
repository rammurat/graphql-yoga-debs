const User = {
    reviews(parent, args, {db}) {
        return db.allReviews.filter((review) => {
            return review.author === parent.id
        })
    },
    role(parent, args, {db}) {
        return db.allUserRoles.find((roles) => {
            return roles.id === parent.role
        })
    }
}

export default User
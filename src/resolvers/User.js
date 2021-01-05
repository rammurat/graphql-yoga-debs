const User = {
    reviews(parent, args, {db}) {
        return db.allReviews.filter((review) => {
            return review.author === parent.id
        })
    },
    role(parent, args, {db}) {
        return db.allUserRoles.find((role) => {
            return role.role === parent.id
        })
    }
}

export default User
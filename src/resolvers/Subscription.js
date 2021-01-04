const Subscription = {
    review: {
        subscribe(parent, {postId}, {db, pubsub}, info)   {
            const product = db.allProducts.find((product) => product.id === postId)

            if(!product) {
                throw Error('product not found')
            }

            return pubsub.asyncIterator(`review ${postId}`)
        }
    },
    product: {
        subscribe(parent, {postId}, {pubsub}, info)   {
            return pubsub.asyncIterator('product')
        }
    }
}

export default Subscription
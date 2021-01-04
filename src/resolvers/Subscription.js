const Subscription = {
    review: {
        subscribe(parent, {productId}, {db, pubsub}, info)   {
            const product = db.allProducts.find((product) => product.id === productId)

            if(!product) {
                throw Error('product not found')
            }

            return pubsub.asyncIterator(`review ${productId}`)
        }
    },
    product: {
        subscribe(parent, {productId}, {pubsub}, info)   {
            return pubsub.asyncIterator('product')
        }
    }
}

export default Subscription
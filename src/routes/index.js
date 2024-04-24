const homeRouter = require('./homeRouter')
const productRouter = require('./productRouter')
const paymentRouter = require('./paymentRouter')
const cancelRouter = require('./cancelRouter')
const successRouter = require('./successRouter')

function route(app){
    app.use('/', homeRouter)

    app.use('/product', productRouter)

    app.use('/payment', paymentRouter)

    app.use('/cancel', cancelRouter)

    app.use('/success', successRouter)

}

module.exports = route
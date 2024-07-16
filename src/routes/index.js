const homeRouter = require('./homeRouter')
const productRouter = require('./productRouter')
const loginRouter = require('./loginRouter')
const signupRouter = require('./signupRouter')
const policyRouter = require('./policyRouter')

function route(app){
    app.use('/', homeRouter)

    app.use('/login', loginRouter)

    app.use('/signup', signupRouter)

    app.use('/product', productRouter)

    app.use('/policy', policyRouter)

}

module.exports = route
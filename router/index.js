const productsRouter = require('./products')
const cartRouter = require('./cart')
const ctspRouter = require('./ctsp')
const sitePouter = require('./site')
const userRouter = require('./user')

function route(app) {

    app.use('/products', productsRouter)
    app.use('/cart', cartRouter)
    app.use('/user', userRouter)
    app.use('/ctsp', ctspRouter)
    app.use('/', sitePouter)


}

module.exports = route
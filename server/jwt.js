/**
 * Created by ever on 2019/12/20.
 */
const expressJwt = require('express-jwt')
const {secretKey} = require('./constant/constant')

const jwtAuth = expressJwt({
    secret: secretKey,
    credentialsRequired: true
}).unless({
    path: ['/user/login', '/user/register']
})

module.exports = jwtAuth
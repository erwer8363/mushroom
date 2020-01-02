/**
 * Created by ever on 2019/12/11.
 */
const express = require('express')
const jwt = require('jsonwebtoken')
const {secretKey} = require('./constant/constant')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const jwtAuth = require('./jwt')
const _filter = {'pwd': 0, '__v': 0}
Router.use(jwtAuth)
Router.use((req, res, next) => {
    console.log('每个请求都走这里吗, 我很好奇...我想知道', req.headers)
    next()
})
// 获取用户列表
Router.get('/list', (req, res) => {
    // User.deleteMany({}, (err, doc) => {
    // })
    const {type} = req.query
    console.log('获取到的type是...', type)
    User.find({type}, _filter, (err, doc) => {
        if (err) {
            return res.json({code: 1})
        }
        return res.json({code: 0, data: doc})
    })
})

Router.post('/update', (req, res) => {
    const {userid} = req.cookies
    if (!userid) {
        return res.json({code: 1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid, body, (err, doc) => {
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type
        }, body)
        return res.json({code: 0, data})
    })
    console.log(req.body)
})

Router.post('/register', (req, res) => {
    const {user, pwd, type} = req.body
    User.findOne({user}, (err, doc) => {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
    })
    const userModel = new User({user, type, pwd: md5Pwd(pwd)})
    userModel.save((err, doc) => {
        if (err) {
            return res.json({code: 1, msg: '后端出错了'})
        }
        const {user, type, _id} = doc
        const tokenObj = {
            user
        }
        const token = jwt.sign(tokenObj, secretKey, {
            expiresIn: 60 * 60 * 24
        })
        res.cookie('userid', _id)
        return res.json({code: 0, data: {user, type, _id}, token})
    })
})

Router.post('/login', (req, res) => {
    const {user, pwd} = req.body
    User.findOne({user, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
        if (err) {
            return res.json({code: 1, msg: '后端出错了'})
        }
        if (doc) {
            const tokenObj = {
                user
            }
            const token = jwt.sign(tokenObj, secretKey, {
                expiresIn: 60 * 60 * 24
            })
            res.cookie('userid', doc._id)
            return res.json({code: 0, data: doc, token})
        } else {
            return res.json({code: 1, msg: '用户名或密码错误'})
        }
    })
})

Router.get('/info', (req, res) => {
    console.log('获取到信息是..', req.cookies)
    let {userid} = req.cookies
    if (!userid) {
        return res.json({code: 1})
    }
    User.findById(userid, _filter).exec((err, doc) => {
        if (err) {
            return res.json({code: 1, msg: '后端出错了'})
        }
        if (doc) {
            return res.json({code: 0, data: doc})
        }
    })
})

function md5Pwd($ManagerPassword) {
    $ManagerPassword = utils.md5($ManagerPassword);
    const $Salt = $ManagerPassword.substr(-1, 3);
    $ManagerPassword = utils.hmac('sha256', $ManagerPassword, $Salt);
    return $ManagerPassword;
}

module.exports = Router

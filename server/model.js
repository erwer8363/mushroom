/**
 * Created by ever on 2019/12/11.
 */

// 链接MongoDB,并且使用imooc这个集合
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL, {useNewUrlParser: true})
mongoose.connection.on('connected', () => {
    console.log('connected successfully')
})
//建立表,MongoDB,有文档,字段的概念
const models = {
    user: {
        user: {type: String, require: true},
        pwd: {type: String, require: true},
        type: {type: String, require: true},
        avatar: {type: String},
        desc: {type: String},
        title: {type: String},
        company: {type: String},
        money: {type: String}
    },
    chat: {}
}
Object.entries(models).forEach(([key, value]) => {
    mongoose.model(key, new mongoose.Schema(value))
})

module.exports = {
    getModel(name) {
        return mongoose.model(name)
    }
}
// const User = mongoose.model('user', new mongoose.Schema({
//     user: {type: String, require: true},
//     age: {type: Number, require: true}
// }))
// User.create({
//     user: 'xiaohua',
//     age: 10
// }, (err, doc) => {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })
// User.remove({age: 18}, (err, res) => {
//     console.log(res)
// })
// User.update({user: 'xiaoming'}, {'$set': {age: 26}}, (err, res) => {
//     console.log(res)
// })
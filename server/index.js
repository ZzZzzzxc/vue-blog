//创建Express应用程序
const express = require('express')
const app = express()
//使用中间件
//内置的解析中间件，确保客户端返回的数据的可靠性
app.use(express.json())
//CORS跨域的中间件
app.use(require('cors')())
//静态资源托管
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/', express.static(__dirname + '/web'))

//设置一个密钥
app.set('secret', 'i2u34y12oi3u4y8')
//将实例app注入模块内
require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

var history = require('connect-history-api-fallback')
app.use('/',history());

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})
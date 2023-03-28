const EXPRESS=require('express')
const app=EXPRESS()

const listStoryR=require("./router/listStory")
const listAnnR=require("./router/announcementList")
const forumList=require("./router/forumList")
const novelView=require("./router/novelView")
const novelDetail=require("./router/novelDetail")
const userInfo=require("./router/userInfo")
const image=require("./router/image")
const Login=require("./router/login")

//中间件配置
//适应Post请求
app.use(EXPRESS.json())
//适应get请求
app.use(EXPRESS.urlencoded({extended:false}))

//静态文件托管
// app.use('/static',EXPRESS.static("static"))

//路由中间件
app.use("/",listStoryR)
app.use("/",listAnnR)
app.use("/",forumList)
app.use("/",novelView)
app.use("/",userInfo)
app.use("/",novelDetail)
app.use("/",image)
app.use("/",Login)

app.get("/",(req, res)=>{
    res.send(`<div style="position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);">
                    <h1>welcome this project</h1>
                    <div>post-llist</div>
                    <ul style="list-style: none;padding-left: 0;">
                        <li><a href="https://express-vercel-ruby.vercel.app/forumList">/forumList</a></li>
                        <li><a href="https://express-vercel-ruby.vercel.app/listStory">/listStory</a></li>
                        <li><a href="https://express-vercel-ruby.vercel.app//novelView">/novelView</a></li>
                    </ul>
                    </div>
    `)
})

app.listen(3001,()=>{
    console.log('服务器启动成功')
})
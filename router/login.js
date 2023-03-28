const Express = require("express");
const Token=require("../utils/jwt")

const router=Express.Router()

router.post("/login",(req, res)=>{
    console.log(`接收到数据,用户名：${req.body.username},密码：${req.body.password}`)
    if (req.body.username=="root"&&req.body.password=="123"){
        let jwtToken=Token.sign({id: '1023', username:'root', admin: true})
        console.log(jwtToken)
        res.send("1")
    }else{
        res.send("0")
    }
})

module.exports=router

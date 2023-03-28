const EXPRESS=require("express")
const router=EXPRESS.Router()

let userInfo={
    userID:0,
    username:"测试账号",
    wealth:1000,
    lev:4,
    exp:1069,
    fans:0,
    post:0,
    restTime:365,
}

router.post("/userInfo",(req, res)=>{
    console.log("发送用户账号信息")
    res.send(userInfo)
})

module.exports=router
const EXPRESS=require('express')
const router=EXPRESS.Router()
//小说论坛
let forumList=[
    {
        type:1,//小说论坛
        forumId:0,
        name:"香格里拉",
        img:"/static/photos/other-210519183821-BenC.jpg",
        info:"倘若说世上存在有一百部神作，那么屎作的数目便是其十倍之多。Bug、Error、模型崩坏、自相矛盾的剧本……阴影覆盖于这类大众所忌讳与后悔购买的游戏之上。有一名少年格外喜爱那类屎作，他因为一个小小的契机，而向大众所认可的神作发起挑战自此，以少年为中心的游戏与现实都开始发生变化。但是少年今日也在对神作的规格而惊叹不已。「遭敌率居然在常识范围内，这是神作吗……」"
    },
    {
        type:1,//小说论坛
        forumId:1,
        name:"叹息的亡灵想引退",
        img:"/static/photos/other-220213234448-nf59.jpg",
        info:"误会系喜剧！！！官方简介别看了字多！直接看可怜的小可爱，受害人小缇（女主？笑）给出的简介！------MASTER是神！！！------青梅竹马6人组成的实力超群却又恶名昭著的宝藏猎人队伍里只有主角一人没有天赋没有才能？但他却是行走的天灾，欠债十位数被富婆逼婚，到处搞事让恶人背锅，各种引发让人哭笑不得的混沌场景，连神都拿他没有办法，他的背后究竟潜藏着什么样的力量？？？前排主观排雷：纯喜剧，无恋爱，无牛，无悲伤场景（主角方）。"
    }
]
//独立论坛
let independentList=[
    {
        type:2,//独立论坛
        forumId: 4,
        name:"真白萌猫猫咖啡店",
        img:"/static/photos/other-210922193623-dSLZ.jpg",
        info:"真白萌 综合讨论区 文明交流，勿争吵引战，谢绝政治等敏感话题。禁止无意义纯水。"
    },
    {
        type:2,//独立论坛
        forumId:3,
        name:"烤肉区",
        img:"/static/photos/other-210616185305-u9it.jpg",
        info:"不想申请开版和独立论坛的翻译可以丢在这里。新来的翻译注意置顶帖，发书时及时在书目帖内登记。"
    }
]
router.get('/forumList',(req, res)=>{
    console.log('拦截get,准备发送',forumList)
    res.send(forumList)
})
//post拦截
router.post('/forumList',(req, res)=>{
    console.log('拦截post')
    if (req.body.type===1){
        res.send(forumList)
    }else{
        res.send(independentList)
    }
})
module.exports=router
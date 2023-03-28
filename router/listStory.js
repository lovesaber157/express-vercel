const Express = require("express");
const router=Express.Router()

//要返回数据
let listStory=[
    {
        classify:0,
        novelId:955,
        title:"圣者的荆途",
        author:"谷羽(sniskl)",
        tags:[
            "异世界","百合","R17","TS","治愈"
        ],
        words:54574,
        translators:"",
        chapter:[
            "第一章 恐惧的开始",
            "第二章 绝望的侵犯",
            "第三章 奴隶的身份",
            "第四章 两人的初次接触",
            "第五章 身体的拥抱",
            "第六章 鼓起的勇气",
            "第七章 内衣的更换",
            "第八章 家人的笑容",
            "第九章 心意的交通",
            "第十章 夜晚的握手",
        ],
        hots:{
            commentsMath:37,
            likeMath:553,
            collectionMath:92
        },
        ImageName:"novel-default.jpg",
        limit:4
    },
    {
        classify:1,
        novelId:729,
        title:"关于转生成日式幻想黄油路人这件事",
        author:"鉄鋼怪人",
        tags:[
            "异世界","穿越/转生","异能/超自然","病娇"
        ],
        words:361344,
        translators:[
            "列斯兰卡","Survie"
        ],
        chapter:[
            "第一章 关于教程都还没开始就被逼到绝境的事",
            "第二章 关于安全区偶尔也会因游戏事件而消失的事",
            "第三章 关于孩子所持有的憧憬终究是像麻疹一般短暂的事",
        ],
        hots:{
            commentsMath:3101,
            likeMath:23459,
            collectionMath:3913
        },
        ImageName:"other-220213234448-nf59.jpg",
        limit:""
    }
]

//APP请求拦截
//get拦截
router.get('/listStory',(req, res)=>{
    console.log('拦截get')
    res.send(listStory)
})
//post拦截
router.post('/listStory',(req, res)=>{
    console.log('拦截post')
    let classify=req.body.classify
    if (classify===2) {
        res.send(listStory)
    }
    let newList=[]
    if (classify===1){
        for (let i of listStory){
            if (i.classify===1){
                newList.push(i)
            }
        }
        res.send(newList)
    }
    if (classify===0){
        for (let i of listStory){
            if (i.classify===0){
                newList.push(i)
            }
        }
        res.send(newList)
    }
})
module.exports=router
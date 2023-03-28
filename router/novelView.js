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
        introduction:"无趣且悠闲的假期进行中，时常听着音乐，偶尔读些名著，随后晒着日光睡下，日复着，仅此而已。但有一刻，在睡前的迷糊中，似乎听见了某人的求助声……——隔开——啊，啊，啊……啊……啊！！！！！！！——F……花Q！！！！——（Fuck应该没拼错，是u不是a？但保险起见，用花Q吧——不想退界面搜——懒……不，写好几个字也不算呀……嗯……诶？……我见这么长干嘛？啊……）啊，啊对！！可想起来了，是那啥，对，第九章。真甜蜜想赞美太阳，重试数次四零四，重投仍是死令死，但不论生气也好，郁闷也罢，我全然不在意了，因为我明白了，在这既短又长的受挫之程中，我终于明白了！！哈，哈，哈！哈哈哈哈哈！！和谐啊！！作者我，鸽子我，不能过的稿我不过了！！！哈哈哈哈哈哈哈哈哈哈哈哈！！！！！然后呢——哼哼，哼哼哼，没想到吧，想不到吧，肯定就是知道也只能无用地趴在沙滩上看我吧？！！你那副羡慕嫉妒我的表情！！和谐哟！！！读者的第一次，是在我的主页哒！！！！！哈哈哈哈哈哈！！！！！！！在此时的心情，宛如懵懂的童贞在看到顶级的本后于翌日凌晨，穿上新内裤迎接斩年的日出一般平静又愉悦。实在，boki至极。——————嗯，好了，以上纯属发颠，请勿在意。只一言，第九章因不可抗力，于主页观看。",
        hots:{
            commentsMath:37,
            likeMath:553,
            collectionMath:92,
            lookMath:1598
        },
        ImageSrc:"/static/photos/novel-default.jpg",
        limit:4,
        state:1,
        address: ""
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
        introduction:`全名：关于转生成和风幻想致郁限制级游戏的无名战斗员但周围的女性全是不妙的家伙所以不妙的预感拉满的事
看来转生成和风幻想游戏的无名路人了
……而且，游戏类型还是色情怪诞的高级阴郁游戏
                        
译者吐槽：关于日轻用标题写故事这件事，顺便特意找原作封面顺便看到漫画后明白这个为什么没人翻译了……`,
        hots:{
            commentsMath:3101,
            likeMath:23459,
            collectionMath:3913,
            lookMath:8764
        },
        ImageSrc:"/static/photos/other-220213234448-nf59.jpg",
        address:" https://syosetu.org/novel/232822/",
        limit:"",
        state:1,
    }
]

//APP请求拦截
//get拦截
router.get('/novelView',(req, res)=>{
    console.log('拦截get')
    res.send(listStory)
})
//post拦截
router.post('/novelView',(req, res)=>{
    console.log('拦截post')
    let novelId=req.body.novelId
    for (let i of listStory){
        if (i.novelId==novelId){
            res.send(i)
        }
    }
})
module.exports=router
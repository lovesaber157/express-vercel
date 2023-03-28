const EXPRESS=require('express')
const fs=require("fs")
const Router=EXPRESS.Router()

let novelList=[
    {
        //小说类型
        classify:0,
        //小说ID
        novelId:729,
        //小说名
        title:"虽然我孤独又阴角，但我的女朋友可爱到爆炸",
        //作者
        author:"スタジオ.Ｔ",
        //翻译者
        translators:"四季一年夏之寄",
        //翻译者ID
        translatorsID:"10356",
        //标签
        tags:[
            "恋爱喜剧","校园","完结","纯爱"
        ],
        //评论数
        commentMath:186,
        //点赞数
        likeMath:5857,
        //收藏数
        collectionMath:604,
        //阅读数
        lookMath:1975,
        //限制等级
        limit:null,
        //原作地址
        address:"https://kakuyomu.jp/works/1177354054916166602",
        //状态
        state:1,
        briefly:"钟白鸣巳（かねしろなるみ）是一名孤独阴暗的高中生，每逢午休就会去厕所吃午饭。某天，在偶然没有上锁的屋顶上，他与同样形单影只的三船二叶（みふねふたば）相遇了。「我们一起吃吧」，由一句话开始的青春恋爱故事。※本书不默许和鼓励任何违反法律法规的行为。（不许感谢翻译、签到等无意义评论出没，遇见就正义制裁）",
        chapter:[
            {
                boxName:"相遇的季节",
                boxchapter:[
                    {
                        c_id:66071,
                        c_Name:"1.我们一起吃吧",
                        //观看花费
                        c_spend:0,
                        //小说时间
                        c_time:[
                            //创建时间
                            "2023-02-07 16:00:35",
                            //更新时间
                            "2023-02-12 11:47:09"
                        ]
                    },
                    {
                        c_id:66072,
                        c_Name:"2.午休啥的最受不了了",
                        //观看花费
                        c_spend:0,
                        //小说时间
                        c_time:[
                            //创建时间
                            "2023-02-07 16:02:44",
                            //更新时间
                            "2023-02-15 23:32:53"
                        ]
                    }
                ]
            }
        ],
        imgname:"storeimg10.jpeg"
    }
]

Router.post('/getNovelDetail',(req, res)=>{
    console.log("接受参数:"+req.body.novelId)
    for (let i of novelList){
        if (i.novelId==req.body.novelId){
            res.send(i)
        }
    }
    res.status(404).send()
})

module.exports=Router
const EXPRESS=require('express')
const router=EXPRESS.Router()

let announcementList=[
    {
        annid:20,
        title:"[2023.01.01] 用户指引与常见问题解答",
        author:'名纸',
        time:"2月前",
        thumbnail:"给我认真看，上面提到的问题再问就把你们都变成猫娘 ",
        show:false,
        innerText:`<p>欢迎你来到真白大家庭！</p><p>详细规则都在这里，遇到问题请随时翻开这本手册吧</p><p>>>>真白萌论坛使用指南（<a href="https://masi.ro/n83">masi.ro/n83</a>）<<<</p><p>下面简要回答一些常见问题：</p><p>1、怎么搜索小说？</p><p>侧边栏 --> 小说论坛 --> 全部小说 / 日轻 / 原创</p><p>2、怎么进入论坛（社交、联系管理）？</p><p>侧边栏 --> 小说论坛 --> 小说论坛 / 独立论坛</p><p>独立论坛包括咖啡店、烤肉区、办事处、需求意见反馈、小说生肉推荐、翻译警察记事本、日语学习&翻译交流等等不同区域。</p><p>3、为什么有些小说显示“小孩子不能看”？</p><p>用户等级不够，无法查看部分小说。</p><p>4、如何提升等级、赚取金币？</p><p>见论坛使用指南（<a href="https://masi.ro/n83">masi.ro/n83</a>）</p><p>5、昵称不满意想要修改</p><p>去蛋池抽改名卡或其他道具。</p><p>6、收藏品有什么用？</p><p>未开发的决斗系统、论坛的pve系统、rpg系统会有用，目前没用。</p><p>7、真白萌的小组织汇总？</p><p>论坛、qq、discord，都看这里（链接）<a href="https://masiro.me/admin/announcementPage?ann_id=69">https://masiro.me/admin/announcementPage?ann_id=69</a></p><p>7、还是有很多不懂的地方</p><p>去看论坛使用指南（一定要至少看一遍）、论坛问人（太傻会被打）、自己探索侧边栏。</p><p>0、为什么论坛那么多猫？</p><p>你也想变成猫？</p><p>-1、对论坛非常不满，觉得还是原来的好，以及 ESJ 的内鬼</p><p>麻烦报上ID，我这就把你们变成猫娘。 </p>`
    },
    {
        annid:75,
        time:"2月前",
        author:"咸菜萝卜煲",
        title:"[2022.04.20] 新书申请指南（原创审核要求6k字数以上）",
        thumbnail:"原创申请规则再次大修改！详见https://masi.ro/n83",
        show:false,
        innerText:`<p></p><p>&nbsp;&nbsp;</p><p><b>1. 原创审核新规定</b></p><p><br></p><p>鉴于原创心血来潮挖坑又不填的情况过多，标点误用严重影响部分审核的血压值，现决定提高原创申请门槛。</p><p>1）申请字数要求6000字或以上。</p><p>2）标点符号使用规范恰当，如避免用“。。。”等奇形怪状的用法表示省略号，避免全文只有感叹号没有句号结尾等。具体作品的标准，简体中文作品参见《中华人民共和国国家标准GB/T15834-2011标点符号用法》，繁体中文作品参见《重訂標點符號手冊》修訂版，最终审核结果以审核结果为准。</p><p><font color="#c24f4a">3）原创作品申请时，请在【试阅】栏目的最上面放上剧情大纲，然后再放试阅正文。大纲要求阐述主要角色与势力信息，并对后续剧情走向有较为明确的方向。</font></p><p><font color="#c24f4a">4）为避免大量挖坑不填或坑太多导致更新速度过于缓慢，申请原创作品时，请确认自己手上处于连载中状态的其他原创文不超过2个，且不要一次申请多个小说。</font></p><p><font color="#c24f4a">5）建议想发文的先到同人或者原创论坛发，等确定有人看了再申请，并在申请时附上链接。</font></p><p><font color="#c24f4a">6）本站非同人/原创小说网站，任何原创/同人作品随时可能删除或被拒绝申请（全看心情），请各位自己做好备份或在其他站点另外发布。</font></p><p><br></p><p>&nbsp;另出于对画师原创作品的尊重，避免产生不必要的纠纷，也为了减少图文无关读者欺诈的情况，望各<b>​翻译、原创作者</b>自行审查所用<b>​封面</b>，<b><font color="#c24f4a"><u>避免未经许可直接使用来源于网络的图像作品</u></font></b>。</p><p>请尽量使用原作封面、插画或是二创同人作品，当然也可获取画师授权，或是自行绘制封面。</p><p>届时会不定期派遣强力网图鉴定者重拳出击，若封面过于眼熟，将会收获一次警告，二次下架处分。</p><p><br></p><p><b>2. 搬运旧论坛的书到新论坛</b></p><p><br></p><p>a. 请在申请理由处附上旧论坛的链接，没有链接的申请一般不会被通过。同时如果翻译ID更改，请注明自己在原版块的身份。</p><p>b. 如果搬运者不是原译者，则需要取得原译者的同意，并在申请理由处声明这一点。</p><p>c. 在现阶段，所有旧论坛的小说不论篇幅长短，在搬运到新论坛时都是独立的小说版块，搬运者可以给小说版加上短篇Tag&nbsp;</p><p><br></p><p><b>3. 在新真白萌开设新书的翻译版块</b></p><p><br></p><p>a. 请在申请理由处附上试译链接，我们推荐把试译发到独立论坛「烤肉区」版块（<a href="https://masi.ro/f154" target="_blank">masi.ro/f154</a>），试译至少需要1500字。</p><p>b. 通过申请的标准是：译文没有翻译错误，能够反映原文意思，并且不生硬（即准确，生动，流畅）。如果你附上了该附上的说明信息，申请却依旧被驳回，则很可能是译文质量不达标。质量不达标的译文极有可能无法通过申请。</p><p>c. 一些关于翻译质量的建议：</p><p>① 论坛里的人气小说（点赞/收藏榜前列的作品，或首页横幅推荐的作品）可以作为参照依据，用来判断自己的译文是否在质量上达标；</p><p>② 翻译完一段文本之后再读一遍译文，通常可以找到许多还需要修改的地方。翻译和阅读的时间间隔越大，读的时候越出声投入，则检查的效果就越好；</p><p>③ 如果在翻译质量问题上需要寻求帮助，也可以加QQ群242127188，联系管理员“真白萌权限申请助手”&nbsp;；或者加飒君日语群43277985，联系热心老翻译飒君。</p><p><br></p><p><b>&nbsp;4. 获取一个版块的翻译权限，与别人一起管理板块</b></p><p><br></p><p>a. 这个操作需要在小说目录页点击小说封面才能看到申请按钮。</p><p>b. 如果是旧论坛版块且在旧坛已有此版块权限的翻译，请注明原论坛ID，并联系认识的管理员。</p><p>c. 如为新翻译或者此版块的新翻译，则详见<a href="https://masi.ro/c42335" target="_blank">masi.ro/c42335</a></p><p><br></p><p><b>5. 在申请权限时遇到问题，需要联系管理员</b></p><p>a. 请加QQ群242127188，把问题叙述给管理员「真白萌权限申请助手」&nbsp; &nbsp;</p><p><br></p><p><b>6. 翻译审核标准的细则</b></p><p>试译至少需要1500字，具体判断标准如下：</p><p>译文通顺流畅，准确无误=直接通过</p><p>译文准确无误，不通顺流畅=通过并建议修改</p><p>译文有3处以内小的翻译错误=通过并建议修改</p><p>译文有1处明显影响句意或涉及上下文的翻译错误=否决并建议修改</p><p>译文显示译者日语能力不过关=否决</p><p><br></p><p>流畅通顺的定义：译文使用的语言与日常口语接近，不存在日常口语不使用的结构和词汇。</p><p>&nbsp;每翻译300字就休息5分钟，然后把翻译完成的部分出声阅读一遍，这样可以方便地检查出许多影响流畅通顺的问题。&nbsp;</p><p>以下属于没有达到流畅通顺要求的例子：&nbsp;</p><p>嬉しそうに笑っている雛ちゃん。 私はそんな彼女になでなでしてあげた。 开心地笑着的雏酱。对这样的她，我在她的头上摸摸了。</p><p>小的翻译错误：指没有影响句子的大意，也没有对上下文产生严重影响，但译者对原文含义理解错误的情况。&nbsp;</p><p>&nbsp;（范例待补）</p><p>大的翻译错误：指改变了句子原意，或与上下文产生矛盾，或有严重语病，使读者在理解句意时产生困难的情况。&nbsp;</p><p>（范例待补）&nbsp;</p><p><br></p><p></p><p><br></p><p></p><p><br></p><p></p><p><br></p><p></p><p><br></p><p></p><p><br></p><p></p><p><br>&nbsp;&nbsp;</p></div>`
    },
    {
        annid:78,
        author:"天门冬",
        time:"2月前",
        title:"[2022.12.28]接坑申请指南（翻译审核要求1.5k字数以上）",
        thumbnail:"",
        show:false,
        innerText: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p></p><p><b>此操作为申请已有书区的权限，并非申请开设新书。</b></p><p><br></p><p>操作步骤：</p><p>1）取得现版主同意，或者起码联系现版主；</p><p><b>泥潭众多鸽子失踪，我们不要求百分百全得联系上，但请尽可能去联系。</b></p><p>2）在<b>小说目录页</b>点击<b>小说封面</b>才能看到申请按钮，点击申请，申请理由<b>附上试翻的链接</b>；</p><p>　　试翻要求<b>至少1500字</b>，并附上原文方便审核。可以发到「独立论坛-烤肉区」板块（也就是下一行的链接）或者自家的小说论坛，方便审核管理员审查，<b>审核标准与申请新书相同</b>。<br></p><p>&nbsp;<a href="https://masi.ro/f154" target="_blank" style="background-color: rgb(255, 255, 255);">https://masi.ro/f154</a></p><p>&nbsp;3）申请理由说明情况。‍‌‌‌‌‌‍‌‍‍‌‌‌‍‌‍‍&nbsp;</p><p><b>审核由全站管理负责，“申请理由”填写过于简单会让人觉得不明所以。</b></p><p><br></p><p>其他未尽事宜（比如版主失踪，申请理由忘记放链接，补充说明等等）请到<b>办事处发帖</b>。</p><p>&nbsp;办事处链接：<a href="https://masi.ro/f111" target="_blank" style="background-color: rgb(255, 255, 255);">https://masi.ro/f111</a></p></div>`
    },
    {
        annid:77,
        author: "Cerallin",
        time:"4月前",
        title: "[2022.11.10] 泥潭更新日志",
        thumbnail:"",
        show:false,
        innerText: `<p/><div class="comment-escape"><ol><li>新增功能：Markdown编辑器按钮、小说数据展示。</li><li>从多个角度优化泥潭，提升泥潭加载速度。</li></ol><p>更多内容<b>​</b>​请点击<a href="//masi.ro/p23486" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255);">这里</a>。</p></div><p/>`
    },
    {
        annid: 69,
        author: "天门冬",
        time:"1年前",
        title: "[2021.12.17]真白萌小组织",
        thumbnail:"Q群和discord群",
        show:false,
        innerText: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><b>&nbsp;真白萌的小组织</b></p><p>1. QQ水群：<font color="#000000">申请入群</font>太多应付不过来，见咖啡馆置顶</p><p>2. 原创作者QQ群：111756196（仅原创作者</p><p>3. Discord群：https://discord.gg/dkvTGSBxf9</p><p><font color="#eeece0">4. 泥潭黑幕群</font></p><p><br></p><p>泥潭民间组织[<b>非官方</b>]</p><p>1. 飒君的翻译互助QQ群：981169953</p><p>（仅限真白翻译进群，需在<a href="https://masi.ro/p6902" target="_blank">飒君的帖</a>里留言）</p><p>2. 飒君的日语自学QQ群：43277985</p><p>&nbsp;&nbsp;</p><p><b>站内传送门</b></p><p>真白萌综合讨论区：<a href="https://masiro.me/admin/forumList?type=2" target="_blank">点击链接</a>
　即侧边栏的“小说论坛”-“独立论坛”&nbsp;</p><p>综合讨论/聊天（咖啡店）：<a href="https:///masi.ro/f25" target="_blank">点击链接</a>&nbsp;
办事处：<a href="https:///masi.ro/f111" target="_blank">点击链接</a>&nbsp;
烤肉区：<a href="https:///masi.ro/f154" target="_blank">点击链接</a></p><p>&nbsp;</p><p></p><p>注意：不能水贴哦～</p>`
    },
    {
        annid: 51,
        author: 'Cerallin',
        time:'2年前',
        title: "[2021-07-29] Markdown 编辑器更新",
        thumbnail: "编辑器更新。 新增阅读选项去除样式。",
        show:false,
        innerText:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<p></p><div data-v-37b429e7="" class="comment-escape"><ol><li>阅读设置新增“去除样式”选项，当你看到有小说字小有白边的时候不妨试试哦~</li><li>Markdown 编辑器更新</li></ol><ol></ol><ul><li>广泛的 MD 语法（大概是全部吧）</li><li>@其他用户</li><li>图片上传</li><li>Latex 数学公式<del>？有必要么</del></li></ul><span title="g(\\varepsilon) = \\frac{1}{exp[(\\varepsilon - \\varepsilon_f) / kT] + 1}"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><annotation encoding="application/x-tex">g(\\varepsilon) = \\frac{1}{exp[(\\varepsilon - \\varepsilon_f) / kT] + 1}
</annotation></semantics></math></span><span aria-hidden="true" class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault" style="margin-right: 0.03588em;">g</span><span class="mopen">(</span><span class="mord mathdefault">ε</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 2.29355em; vertical-align: -0.972108em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.32144em;"><span style="top: -2.314em;"><span class="pstrut" style="height: 3em;"></span><span class="mord"><span class="mord mathdefault">e</span><span class="mord mathdefault">x</span><span class="mord mathdefault">p</span><span class="mopen">[</span><span class="mopen">(</span><span class="mord mathdefault">ε</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mord"><span class="mord mathdefault">ε</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.336108em;"><span style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight" style="margin-right: 0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.286108em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mord">/</span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span><span class="mord mathdefault" style="margin-right: 0.13889em;">T</span><span class="mclose">]</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mord">1</span></span></span><span style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span style="top: -3.677em;"><span class="pstrut" style="height: 3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.972108em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></span><ul><li>Spoiler <details open="open"><summary>点我展开</summary></details></li></ul><div>教学：<a href="https://masi.ro/p6279" target="_blank" style="background-color: rgb(255, 255, 255);">masi.ro/p6279</a></div></div><p></p><p><br></p>`
    }
]

router.post("/announcementList",(req, res)=>{
    console.log("请求发送公告列表-post")
    res.send(announcementList)
})
router.get("/announcementList",(req, res)=>{
    console.log("请求发送公告列表-get")
    res.send(announcementList)
})

router.post('/announcementList/detail',(req, res)=>{
    let ann={}
    for (let i of announcementList){
        if (i.annid==req.body.annId){
            ann=i
            break
        }
    }
    console.log(ann)
    res.send(ann)
})
module.exports=router
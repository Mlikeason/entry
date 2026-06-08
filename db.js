const DB=[
// ══════════════════════════════════════
// CONFUSABLES (70)
// ══════════════════════════════════════
{id:'critical-crucial-cruel',type:'confusable',title:'critical · crucial · cruel',brief:'批判 / 关键 / 残忍 — 三个完全不同的方向',words:[
{word:'critical',def:'批判性的；危急的',note:'强调分析判断或紧急状态',examples:['critical thinking','critical condition','critical of the plan']},
{word:'crucial',def:'至关重要的，决定性的',note:'缺了就完蛋，不可或缺',examples:['a crucial decision','This is crucial']},
{word:'cruel',def:'残忍的，冷酷的',note:'跟前两个完全无关，只是长得像',examples:['a cruel joke','Don\'t be cruel']}
],trap:'"He is critical" = 他情况危急 / 他很挑剔，不是"他很关键"。关键 = crucial 或 key。'},
{id:'affect-effect',type:'confusable',title:'affect · effect',brief:'动词"影响" vs 名词"效果"',words:[
{word:'affect',def:'影响（动词）',note:'A for Action — affect 是动作',examples:['The rain affected our plans','How does this affect you?']},
{word:'effect',def:'效果，结果（名词）',note:'E for End result — effect 是结果',examples:['The effect was immediate','side effects','cause and effect']}
],trap:'effect 偶尔做动词="实现"（effect change），但极罕见。记住 affect=动词 effect=名词 就够了。'},
{id:'complement-compliment',type:'confusable',title:'complement · compliment',brief:'补充搭配 vs 赞美恭维',words:[
{word:'complement',def:'补充，搭配',note:'complement = complete，使完整',examples:['The wine complements the cheese','They complement each other']},
{word:'compliment',def:'赞美，恭维',note:'说好话',examples:['She complimented my work','Take it as a compliment']}
],trap:'complimentary = 免费赠送的！complementary = 互补的。形容词也容易混。'},
{id:'principal-principle',type:'confusable',title:'principal · principle',brief:'主要的 / 校长 vs 原则',words:[
{word:'principal',def:'主要的（adj）/ 校长（n）',note:'the main one',examples:['the principal reason','school principal']},
{word:'principle',def:'原则，准则（永远是名词）',note:'a rule',examples:['a matter of principle','design principles','in principle']}
],trap:'principAL = A person. principLE = a ruLE.'},
{id:'discrete-discreet',type:'confusable',title:'discrete · discreet',brief:'离散的 vs 谨慎的 — 发音完全一样',words:[
{word:'discrete',def:'离散的，独立的',note:'数学/技术用语',examples:['discrete data points','discrete components']},
{word:'discreet',def:'谨慎的，低调的',note:'社交用语，保密不张扬',examples:['Please be discreet','a discreet inquiry']}
],trap:'发音完全相同 /dɪˈskriːt/。设计师常用 discrete（离散元素），社交场合用 discreet（低调行事）。'},
{id:'assure-ensure-insure',type:'confusable',title:'assure · ensure · insure',brief:'向人保证 / 确保发生 / 买保险',words:[
{word:'assure',def:'向某人保证',note:'后面一定跟人',examples:['I assure you it\'s fine','Let me assure you']},
{word:'ensure',def:'确保某事发生',note:'后面跟事情',examples:['ensure the door is locked','to ensure quality']},
{word:'insure',def:'投保，上保险',note:'跟钱和风险有关',examples:['Is your car insured?','insure against loss']}
],trap:'assure 对象是人（让人放心），ensure 对象是事（让事情发生）。'},
{id:'adapt-adopt',type:'confusable',title:'adapt · adopt',brief:'改造适应 vs 采纳接受',words:[
{word:'adapt',def:'适应；改编',note:'修改已有的来适应新情况',examples:['adapt to the environment','adapt for mobile']},
{word:'adopt',def:'采纳；收养',note:'接受全新的东西',examples:['adopt a new strategy','widely adopted']}
],trap:'adapt = 改（已有的），adopt = 接受（新的）。'},
{id:'economic-economical',type:'confusable',title:'economic · economical',brief:'经济学的 vs 省钱的',words:[
{word:'economic',def:'经济的，经济学的',note:'跟经济体系、政策有关',examples:['economic growth','economic crisis']},
{word:'economical',def:'节约的，划算的',note:'跟省钱效率有关',examples:['an economical car','economical use of space']}
],trap:'economic crisis ✓（经济危机）economical crisis ✗。省钱用 economical。'},
{id:'sensible-sensitive',type:'confusable',title:'sensible · sensitive',brief:'明智的 vs 敏感的 — 最容易搞反',words:[
{word:'sensible',def:'明智的，合理的',note:'形容人靠谱务实',examples:['a sensible decision','Be sensible']},
{word:'sensitive',def:'敏感的',note:'容易受影响',examples:['sensitive skin','a sensitive topic']}
],trap:'中文"敏感"= sensitive，"理性/明智"= sensible。sensible = 有sense的 = 明智的。'},
{id:'continual-continuous',type:'confusable',title:'continual · continuous',brief:'反复发生（有间断）vs 不间断',words:[
{word:'continual',def:'频繁反复的',note:'有间隔，一次又一次',examples:['continual interruptions','continual complaints']},
{word:'continuous',def:'持续不断的',note:'没有中断',examples:['continuous noise','continuous monitoring']}
],trap:'continuous rain = 一直在下。continual rain = 下下停停反复来。'},
{id:'imply-infer',type:'confusable',title:'imply · infer',brief:'暗示（说者）vs 推断（听者）',words:[
{word:'imply',def:'暗示，言下之意',note:'说话者的动作',examples:['Are you implying I\'m wrong?','The data implies a trend']},
{word:'infer',def:'推断，推理',note:'听者的动作',examples:['I inferred from his tone...','What can we infer?']}
],trap:'方向相反！Speaker implies, Listener infers.'},
{id:'precede-proceed',type:'confusable',title:'precede · proceed',brief:'在前面 vs 继续进行',words:[
{word:'precede',def:'在…之前，先于',note:'pre = before',examples:['preceded by a brief intro','the preceding chapter']},
{word:'proceed',def:'继续，进行',note:'pro = forward',examples:['proceed with the plan','proceed to gate 5']}
],trap:'precedent（先例）来自 precede。procedure（程序）来自 proceed。'},
{id:'adverse-averse',type:'confusable',title:'adverse · averse',brief:'不利的（事物）vs 反感的（人）',words:[
{word:'adverse',def:'不利的，有害的',note:'描述外部条件',examples:['adverse weather','adverse effects']},
{word:'averse',def:'反感的，不乐意的',note:'描述人的态度',examples:['risk-averse','not averse to the idea']}
],trap:'risk-averse ✓ risk-adverse ✗。averse 描述人，adverse 描述事。'},
{id:'elicit-illicit',type:'confusable',title:'elicit · illicit',brief:'引出（动词）vs 非法的（形容词）',words:[
{word:'elicit',def:'引出，引发',note:'让隐藏的浮出水面',examples:['elicit a response','elicit information']},
{word:'illicit',def:'非法的，不正当的',note:'= illegal',examples:['illicit drugs','illicit trade']}
],trap:'词性不同：elicit 是动词，illicit 是形容词。'},
{id:'comprise-compose',type:'confusable',title:'comprise · compose',brief:'包含（大→小）vs 组成（小→大）',words:[
{word:'comprise',def:'包含，由…组成',note:'大的 comprise 小的',examples:['The team comprises 5 people','comprises 12 chapters']},
{word:'compose',def:'组成，构成',note:'小的 compose 大的，常被动',examples:['composed of 5 people','composed of H and O']}
],trap:'"is comprised of" 有争议。最安全：comprises X 或 is composed of X。'},
{id:'farther-further',type:'confusable',title:'farther · further',brief:'物理距离 vs 抽象程度',words:[
{word:'farther',def:'更远（物理距离）',note:'far 的比较级，实际距离',examples:['farther down the road','How much farther?']},
{word:'further',def:'更进一步（抽象）',note:'程度、进展',examples:['further discussion','further information','look into it further']}
],trap:'口语中 further 可以通吃两种用法，但 farther 只用于物理距离。'},
{id:'historic-historical',type:'confusable',title:'historic · historical',brief:'历史性的（重要）vs 历史的（相关）',words:[
{word:'historic',def:'具有历史意义的',note:'值得被记住的',examples:['a historic moment','a historic victory']},
{word:'historical',def:'与历史有关的',note:'关于历史这个学科',examples:['historical data','historical research','historical fiction']}
],trap:'historic event = 改变历史的大事。historical event = 历史上发生过的事。'},
{id:'stationary-stationery',type:'confusable',title:'stationary · stationery',brief:'静止不动的 vs 文具',words:[
{word:'stationary',def:'静止的，不动的',note:'站着不动 — stationAry',examples:['remain stationary','a stationary bike']},
{word:'stationery',def:'文具，信纸',note:'写字用的 — stationEry',examples:['office stationery','stationery shop']}
],trap:'记忆：stationEry 的 E = Envelope（信封），文具。stationAry 的 A = At rest（静止）。'},
{id:'personal-personnel',type:'confusable',title:'personal · personnel',brief:'个人的 vs 人事/员工',words:[
{word:'personal',def:'个人的，私人的',note:'重音在第一音节',examples:['personal opinion','personal space']},
{word:'personnel',def:'人事部门；全体员工',note:'重音在第三音节',examples:['personnel department','military personnel']}
],trap:'发音不同！personal /ˈpɜːrsənl/ vs personnel /ˌpɜːrsəˈnel/。很多人读成一样。'},
{id:'conscience-conscious',type:'confusable',title:'conscience · conscious',brief:'良心（名词）vs 有意识的（形容词）',words:[
{word:'conscience',def:'良心，道德感',note:'内心的道德判断',examples:['a guilty conscience','in good conscience']},
{word:'conscious',def:'有意识的，清醒的',note:'aware，知道的',examples:['conscious decision','self-conscious','barely conscious']}
],trap:'conscience 是名词（良心），conscious 是形容词（有意识的）。词性不同。'},
{id:'desert-dessert',type:'confusable',title:'desert · dessert',brief:'沙漠 / 抛弃 vs 甜点',words:[
{word:'desert',def:'沙漠（n）/ 抛弃（v）',note:'一个 s — 沙漠很干，少一个',examples:['the Sahara Desert','desert the army']},
{word:'dessert',def:'甜点',note:'两个 s — 甜点要多来一份',examples:['What\'s for dessert?','dessert menu']}
],trap:'记忆：dessert 两个 s，因为甜点（Sweet Stuff）你想要更多。'},
{id:'loose-lose',type:'confusable',title:'loose · lose',brief:'松的 vs 失去 — 拼写高频错误',words:[
{word:'loose',def:'松的，宽松的（形容词）',note:'跟 goose 押韵 /luːs/',examples:['loose fit','a loose screw','set loose']},
{word:'lose',def:'失去，输掉（动词）',note:'跟 choose 押韵 /luːz/',examples:['lose your keys','lose the game','nothing to lose']}
],trap:'loose 是形容词（松的），lose 是动词（丢失）。发音也不同：s vs z。'},
{id:'quiet-quite',type:'confusable',title:'quiet · quite',brief:'安静的 vs 相当 — 最后两个字母相反',words:[
{word:'quiet',def:'安静的',note:'qui-ET，重音在后',examples:['a quiet room','Keep quiet','quiet confidence']},
{word:'quite',def:'相当，十分',note:'一个音节 /kwaɪt/',examples:['quite good','quite a challenge','not quite']}
],trap:'拼写对调：quiet = qui+et, quite = qui+te。发音完全不同。'},
{id:'accept-except',type:'confusable',title:'accept · except',brief:'接受 vs 除了',words:[
{word:'accept',def:'接受',note:'ac- = toward，迎向',examples:['accept the offer','widely accepted']},
{word:'except',def:'除了，排除',note:'ex- = out，排出去',examples:['everyone except me','except for the price']}
],trap:'accept = 收进来，except = 排出去。方向相反。'},
{id:'advice-advise',type:'confusable',title:'advice · advise',brief:'建议（名词）vs 建议（动词）',words:[
{word:'advice',def:'建议（名词）',note:'不可数，读 /ədˈvaɪs/',examples:['a piece of advice','take my advice']},
{word:'advise',def:'建议（动词）',note:'读 /ədˈvaɪz/',examples:['I\'d advise caution','Please advise']}
],trap:'advice 是名词用 c，advise 是动词用 s。跟 practice/practise 同一规律。'},
{id:'breath-breathe',type:'confusable',title:'breath · breathe',brief:'呼吸（名词）vs 呼吸（动词）',words:[
{word:'breath',def:'呼吸（名词）',note:'短元音 /brɛθ/',examples:['take a deep breath','out of breath']},
{word:'breathe',def:'呼吸（动词）',note:'长元音 /briːð/，多了 e',examples:['breathe deeply','hard to breathe']}
],trap:'名词 breath 没有 e，动词 breathe 多一个 e。发音也不同。'},
{id:'eminent-imminent',type:'confusable',title:'eminent · imminent',brief:'杰出的 vs 即将发生的',words:[
{word:'eminent',def:'杰出的，著名的',note:'E = Excellent',examples:['an eminent scholar','eminent domain']},
{word:'imminent',def:'即将发生的',note:'I = Incoming',examples:['imminent danger','an imminent deadline']}
],trap:'eminent 描述人（杰出），imminent 描述事（即将到来）。'},
{id:'moral-morale',type:'confusable',title:'moral · morale',brief:'道德的 vs 士气',words:[
{word:'moral',def:'道德的（adj）/ 寓意（n）',note:'重音在第一音节',examples:['moral values','the moral of the story']},
{word:'morale',def:'士气，精神状态',note:'重音在第二音节 /məˈræl/',examples:['team morale','boost morale']}
],trap:'moral 讲对错，morale 讲心情。发音重音不同。'},
{id:'perspective-prospective',type:'confusable',title:'perspective · prospective',brief:'视角 vs 预期的/未来的',words:[
{word:'perspective',def:'视角，观点',note:'per = through，透过来看',examples:['from my perspective','put things in perspective']},
{word:'prospective',def:'预期的，未来的',note:'pro = forward，向前看',examples:['prospective clients','prospective buyers']}
],trap:'perspective = 怎么看（观点），prospective = 将来的（潜在客户）。'},
{id:'thorough-through-though',type:'confusable',title:'thorough · through · though',brief:'彻底的 vs 通过 vs 虽然',words:[
{word:'thorough',def:'彻底的，详尽的',note:'/ˈθʌrə/ 两个音节',examples:['a thorough review','thorough research']},
{word:'through',def:'通过，穿过',note:'/θruː/ 一个音节',examples:['walk through the door','go through the process']},
{word:'though',def:'虽然，不过',note:'/ðoʊ/ 一个音节',examples:['It\'s hard, though','even though']}
],trap:'三个词发音完全不同，但拼写让人抓狂。thorough 最长 = 最彻底。'},
{id:'weather-whether',type:'confusable',title:'weather · whether',brief:'天气 vs 是否',words:[
{word:'weather',def:'天气',note:'有 a = 有air = 天气',examples:['nice weather','weather forecast']},
{word:'whether',def:'是否',note:'= if，表示选择',examples:['whether or not','whether to go']}
],trap:'发音几乎一样。weather 跟天气有关，whether 跟选择有关。'},
{id:'cite-site-sight',type:'confusable',title:'cite · site · sight',brief:'引用 vs 场地 vs 视觉',words:[
{word:'cite',def:'引用，举例',note:'学术/法律用语',examples:['cite a source','cite an example']},
{word:'site',def:'地点，网站',note:'一个地方',examples:['construction site','website']},
{word:'sight',def:'视力，景象',note:'看见的东西',examples:['a beautiful sight','out of sight','love at first sight']}
],trap:'三个词发音完全一样 /saɪt/。只能靠语境。'},
{id:'coarse-course',type:'confusable',title:'coarse · course',brief:'粗糙的 vs 课程/路线',words:[
{word:'coarse',def:'粗糙的，粗俗的',note:'多了一个 a',examples:['coarse texture','coarse language']},
{word:'course',def:'课程；路线；当然',note:'of course!',examples:['online course','main course','of course']}
],trap:'coarse 有 a = 粗糙（rough）。course 没有 a = 课程/路线。'},
{id:'formerly-formally',type:'confusable',title:'formerly · formally',brief:'以前 vs 正式地',words:[
{word:'formerly',def:'以前，从前',note:'former + ly',examples:['formerly known as','formerly a teacher']},
{word:'formally',def:'正式地',note:'formal + ly',examples:['formally announced','formally dressed']}
],trap:'formerly = 时间上的"从前"。formally = 方式上的"正式"。'},
{id:'alternate-alternative',type:'confusable',title:'alternate · alternative',brief:'交替的 vs 替代选项',words:[
{word:'alternate',def:'交替的（adj）/ 交替（v）',note:'轮流、每隔一个',examples:['alternate days','alternate between A and B']},
{word:'alternative',def:'替代选项（n）/ 另一种的（adj）',note:'另一个选择',examples:['an alternative plan','no alternative']}
],trap:'alternate = 轮流来（A-B-A-B）。alternative = 另一个选择（A or B?）。'},
{id:'eligible-illegible',type:'confusable',title:'eligible · illegible',brief:'有资格的 vs 字迹模糊的',words:[
{word:'eligible',def:'有资格的，符合条件的',note:'E = Entitled（有资格）',examples:['eligible to vote','eligible candidates']},
{word:'illegible',def:'（字迹）难以辨认的',note:'il + legible = 不可读',examples:['illegible handwriting','almost illegible']}
],trap:'eligible = 你够格。illegible = 你的字看不清。'},
{id:'emigrate-immigrate',type:'confusable',title:'emigrate · immigrate',brief:'移出（离开）vs 移入（到达）',words:[
{word:'emigrate',def:'移居国外，移出',note:'E = Exit，离开原籍',examples:['emigrate from China','emigrated in 2015']},
{word:'immigrate',def:'移入，迁入',note:'I = Into，进入新国',examples:['immigrate to Singapore','immigrant population']}
],trap:'emigrate = exit（出去），immigrate = in（进来）。视角问题。'},
{id:'prescribe-proscribe',type:'confusable',title:'prescribe · proscribe',brief:'开处方/规定 vs 禁止',words:[
{word:'prescribe',def:'开处方；规定',note:'pre = before，提前安排好',examples:['prescribe medication','prescribed reading']},
{word:'proscribe',def:'禁止，取缔',note:'pro = against（这里），反对',examples:['proscribed organizations','proscribed behavior']}
],trap:'prescribe = 叫你做的。proscribe = 叫你别做的。一字之差，意思相反。'},
{id:'credible-creditable',type:'confusable',title:'credible · creditable',brief:'可信的 vs 值得称赞的',words:[
{word:'credible',def:'可信的，可靠的',note:'你相不相信',examples:['a credible witness','hardly credible']},
{word:'creditable',def:'值得称赞的，不错的',note:'做得好不好',examples:['a creditable performance','creditable effort']}
],trap:'credible = 可信度。creditable = 表现值得认可。两个都是正面词但含义不同。'},
{id:'contempt-content-contend',type:'confusable',title:'contempt · content · contend',brief:'轻蔑 vs 内容/满意 vs 竞争',words:[
{word:'contempt',def:'轻蔑，藐视',note:'看不起',examples:['treat with contempt','contempt of court']},
{word:'content',def:'内容（n）/ 满意的（adj）',note:'两个发音：内容 /ˈkɒntent/，满意 /kənˈtent/',examples:['content strategy','feel content']},
{word:'contend',def:'竞争；主张',note:'争',examples:['contend for the title','I contend that...']}
],trap:'三个词拼写相近但领域完全不同。注意 content 的两个发音和两个含义。'},

// ── NEW CONFUSABLES ──
{id:'lay-lie',type:'confusable',title:'lay · lie',brief:'放置（及物）vs 躺下（不及物）— 英语母语者也搞混',words:[
{word:'lay',def:'放置，搁下（及物，需要宾语）',note:'lay-laid-laid',examples:['Lay the book on the table','She laid her coat down']},
{word:'lie',def:'躺下（不及物）/ 说谎',note:'lie-lay-lain（躺）/ lie-lied-lied（说谎）',examples:['I need to lie down','He lay on the grass yesterday']}
],trap:'最坑的地方：lie 的过去式是 lay！所以 "He lay down" = 他躺下了（过去式），不是放下。'},
{id:'allusion-illusion-delusion',type:'confusable',title:'allusion · illusion · delusion',brief:'暗指 vs 幻觉 vs 妄想',words:[
{word:'allusion',def:'暗指，典故',note:'allude to = 含蓄提到',examples:['an allusion to Shakespeare','make an allusion']},
{word:'illusion',def:'幻觉，错觉',note:'看上去是但其实不是',examples:['optical illusion','an illusion of control']},
{word:'delusion',def:'妄想，错误信念',note:'真的相信了那个假象',examples:['delusions of grandeur','under the delusion that']}
],trap:'illusion = 你知道是假的（错觉）。delusion = 你以为是真的（妄想）。'},
{id:'flout-flaunt',type:'confusable',title:'flout · flaunt',brief:'蔑视规则 vs 炫耀',words:[
{word:'flout',def:'公然违反，蔑视',note:'无视规则',examples:['flout the rules','flout convention']},
{word:'flaunt',def:'炫耀，卖弄',note:'故意展示',examples:['flaunt your wealth','if you\'ve got it, flaunt it']}
],trap:'flout = 违反（规则），flaunt = 炫耀（财富）。flout the law ✓，flaunt the law ✗。'},
{id:'wary-weary',type:'confusable',title:'wary · weary',brief:'警惕的 vs 疲惫的',words:[
{word:'wary',def:'警惕的，小心的',note:'= cautious，提防着',examples:['wary of strangers','be wary of scams']},
{word:'weary',def:'疲惫的，厌倦的',note:'= tired，累了',examples:['weary travelers','grow weary of the routine']}
],trap:'wary = 小心（带防备），weary = 很累（带厌倦）。一个字母之差。'},
{id:'ingenious-ingenuous',type:'confusable',title:'ingenious · ingenuous',brief:'巧妙的 vs 天真坦率的',words:[
{word:'ingenious',def:'巧妙的，有独创性的',note:'genius 在里面',examples:['an ingenious solution','ingenious design']},
{word:'ingenuous',def:'天真的，坦率的',note:'没有城府',examples:['an ingenuous smile','too ingenuous for politics']}
],trap:'ingenious = 聪明巧妙。ingenuous = 天真单纯。disingenuous = 不真诚的。'},
{id:'uninterested-disinterested',type:'confusable',title:'uninterested · disinterested',brief:'没兴趣 vs 公正无私',words:[
{word:'uninterested',def:'没兴趣的，不感兴趣的',note:'= bored，不想了解',examples:['uninterested in politics','completely uninterested']},
{word:'disinterested',def:'公正的，无私的',note:'没有利益关系 = impartial',examples:['a disinterested observer','disinterested advice']}
],trap:'disinterested ≠ 不感兴趣！disinterested = 没有利益冲突，公正客观。'},
{id:'practical-practicable',type:'confusable',title:'practical · practicable',brief:'实际的 vs 可行的',words:[
{word:'practical',def:'实际的，务实的',note:'接地气，不是理论的',examples:['practical experience','a practical person']},
{word:'practicable',def:'可行的，行得通的',note:'技术上能做到',examples:['as soon as practicable','a practicable solution']}
],trap:'practical 描述态度和方法。practicable 描述方案能不能做。'},
{id:'incredible-incredulous',type:'confusable',title:'incredible · incredulous',brief:'难以置信的（事）vs 怀疑的（人）',words:[
{word:'incredible',def:'难以置信的，惊人的',note:'形容事情本身',examples:['incredible speed','an incredible story']},
{word:'incredulous',def:'怀疑的，不信的',note:'形容人的反应',examples:['an incredulous look','she was incredulous']}
],trap:'incredible = 这件事太惊人了。incredulous = 这个人表示不信。'},
{id:'industrial-industrious',type:'confusable',title:'industrial · industrious',brief:'工业的 vs 勤奋的',words:[
{word:'industrial',def:'工业的',note:'跟制造、工厂有关',examples:['industrial design','industrial revolution']},
{word:'industrious',def:'勤奋的，勤劳的',note:'形容人努力',examples:['an industrious worker','industrious students']}
],trap:'industrial 描述行业，industrious 描述人。工业设计 = industrial design。'},
{id:'explicit-implicit',type:'confusable',title:'explicit · implicit',brief:'明确的 vs 含蓄的 — 方向相反',words:[
{word:'explicit',def:'明确的，直白的',note:'说出来了，不留模糊',examples:['explicit instructions','explicit content']},
{word:'implicit',def:'含蓄的，暗示的',note:'没说但暗含的',examples:['implicit trust','implicit bias','implicit agreement']}
],trap:'explicit = 白纸黑字说清楚。implicit = 没说但心里都懂。'},
{id:'defuse-diffuse',type:'confusable',title:'defuse · diffuse',brief:'化解紧张 vs 扩散',words:[
{word:'defuse',def:'化解（紧张局势）；拆弹',note:'de + fuse = 去掉引信',examples:['defuse the situation','defuse a bomb']},
{word:'diffuse',def:'扩散（v）/ 分散的（adj）',note:'散开来',examples:['diffuse light','diffuse the scent','diffuse knowledge']}
],trap:'defuse = 让事情不爆炸。diffuse = 让东西散开。'},
{id:'device-devise',type:'confusable',title:'device · devise',brief:'设备（名词）vs 想出（动词）',words:[
{word:'device',def:'设备，装置（名词）',note:'读 /dɪˈvaɪs/',examples:['mobile device','a clever device']},
{word:'devise',def:'想出，设计（动词）',note:'读 /dɪˈvaɪz/',examples:['devise a plan','devise a strategy']}
],trap:'device 名词用 c，devise 动词用 s。跟 advice/advise 同一规律。'},
{id:'judicial-judicious',type:'confusable',title:'judicial · judicious',brief:'司法的 vs 明智的',words:[
{word:'judicial',def:'司法的，法律的',note:'跟法院法官有关',examples:['judicial review','judicial system']},
{word:'judicious',def:'明智的，审慎的',note:'有判断力的',examples:['a judicious decision','judicious use of resources']}
],trap:'judicial = 法院的（制度层面）。judicious = 有判断力的（个人层面）。'},
{id:'persecute-prosecute',type:'confusable',title:'persecute · prosecute',brief:'迫害 vs 起诉',words:[
{word:'persecute',def:'迫害，骚扰',note:'不公正地对待',examples:['persecute minorities','persecuted for beliefs']},
{word:'prosecute',def:'起诉，检控',note:'法律程序',examples:['prosecute the offender','will be prosecuted']}
],trap:'persecute = 非法迫害。prosecute = 合法起诉。'},
{id:'militate-mitigate',type:'confusable',title:'militate · mitigate',brief:'不利于 vs 缓解',words:[
{word:'militate',def:'对…不利，妨碍',note:'militate against = 构成不利因素',examples:['militate against success','factors that militate against']},
{word:'mitigate',def:'缓解，减轻',note:'让坏事没那么坏',examples:['mitigate risk','mitigate the damage']}
],trap:'militate against = 产生不利影响。mitigate = 减轻影响。方向相反。'},
{id:'council-counsel',type:'confusable',title:'council · counsel',brief:'议会/委员会 vs 建议/律师',words:[
{word:'council',def:'委员会，议会',note:'一群人组成的组织',examples:['city council','student council']},
{word:'counsel',def:'建议（n/v）/ 律师',note:'给指导',examples:['legal counsel','counsel someone','seek counsel']}
],trap:'council = 组织（理事会）。counsel = 建议或律师。发音一样。'},
{id:'assent-ascent',type:'confusable',title:'assent · ascent',brief:'同意 vs 上升',words:[
{word:'assent',def:'同意，赞成',note:'点头说好',examples:['nod in assent','give your assent','royal assent']},
{word:'ascent',def:'上升，攀登',note:'往上走',examples:['the ascent of Everest','a steep ascent']}
],trap:'assent = 同意（跟 consent 近义）。ascent = 上升（跟 descent 反义）。'},
{id:'flammable-inflammable',type:'confusable',title:'flammable · inflammable',brief:'两个都是"可燃的"！',words:[
{word:'flammable',def:'可燃的',note:'会着火',examples:['flammable materials','highly flammable']},
{word:'inflammable',def:'可燃的（= flammable）',note:'in- 这里不是否定！是加强',examples:['inflammable gases','inflammable liquids']}
],trap:'最坑的一对：inflammable 不是"不可燃"！in- 在这里是加强语气。不可燃 = non-flammable。'},
{id:'famous-infamous-notorious',type:'confusable',title:'famous · infamous · notorious',brief:'著名 vs 臭名昭著',words:[
{word:'famous',def:'著名的',note:'中性偏正面',examples:['a famous actor','world-famous']},
{word:'infamous',def:'声名狼藉的',note:'因为坏事出名',examples:['an infamous criminal','the infamous incident']},
{word:'notorious',def:'臭名昭著的',note:'因负面特征广为人知',examples:['notorious for being late','a notorious liar']}
],trap:'famous = 好的出名。infamous/notorious = 坏的出名。'},
{id:'amiable-amicable',type:'confusable',title:'amiable · amicable',brief:'友善的（人）vs 友好的（关系/协议）',words:[
{word:'amiable',def:'友善的，和蔼的',note:'描述人的性格',examples:['an amiable host','always amiable']},
{word:'amicable',def:'友好的，和睦的',note:'描述关系/安排',examples:['an amicable divorce','amicable settlement']}
],trap:'amiable 描述人。amicable 描述双方关系或协议。'},
{id:'luxuriant-luxurious',type:'confusable',title:'luxuriant · luxurious',brief:'茂盛的 vs 奢华的',words:[
{word:'luxuriant',def:'茂盛的，繁茂的',note:'生长旺盛',examples:['luxuriant vegetation','luxuriant hair']},
{word:'luxurious',def:'奢华的，豪华的',note:'expensive，享受型',examples:['a luxurious hotel','luxurious lifestyle']}
],trap:'luxuriant = 植物/头发很茂盛。luxurious = 东西很贵很享受。'},
{id:'coherent-cohesive',type:'confusable',title:'coherent · cohesive',brief:'连贯的 vs 有凝聚力的',words:[
{word:'coherent',def:'连贯的，条理清晰的',note:'逻辑说得通',examples:['a coherent argument','barely coherent']},
{word:'cohesive',def:'有凝聚力的，团结的',note:'紧密结合在一起',examples:['a cohesive team','cohesive design']}
],trap:'coherent = 逻辑通顺（写作/说话）。cohesive = 紧密团结（团队/设计）。'},

// ══════════════════════════════════════
// CALQUES (70)
// ══════════════════════════════════════
{id:'bijiao',type:'calque',title:'"比较" 不需要翻译',brief:'中文语气词 ≠ 英文 relatively',chinese:'这个比较难',chinglish:'This is relatively difficult.',natural:'This is pretty hard.',
explanation:'"比较"在中文里软化语气，避免太绝对。但英文的 relatively/comparatively 是正式程度副词，口语里反而生硬。',
more:[{zh:'我比较忙',bad:'I am comparatively busy.',good:'I\'m pretty busy.'},{zh:'这个比较贵',bad:'This is relatively expensive.',good:'This is kind of pricey.'},{zh:'他比较厉害',bad:'He is relatively capable.',good:'He\'s really good.'}]},
{id:'suiran-danshi',type:'calque',title:'"虽然…但是" 只能选一个',brief:'although 和 but 不能同时出现',chinese:'虽然贵，但是质量好',chinglish:'Although it\'s expensive, but the quality is good.',natural:'Although it\'s expensive, the quality is good.',
explanation:'中文里"虽然"和"但是"成对使用。英文里 although 和 but 功能重复，只能选一个。',
more:[{zh:'虽然很累但是值得',bad:'Although tired, but it\'s worth it.',good:'Although I\'m tired, it\'s worth it.'},{zh:'虽然不完美但够用',bad:'Although not perfect, but good enough.',good:'It\'s not perfect, but it\'s good enough.'}]},
{id:'fangbian',type:'calque',title:'"方便" ≠ convenient',brief:'convenient 太正式，日常有更自然的说法',chinese:'你明天下午方便吗？',chinglish:'Is it convenient for you tomorrow afternoon?',natural:'Does tomorrow afternoon work for you?',
explanation:'"方便"在中文无处不在，但 convenient 偏正式。日常说 work for you / available / free 更自然。',
more:[{zh:'什么时候方便？',bad:'When is it convenient?',good:'When works for you?'},{zh:'不方便说话',bad:'It\'s not convenient to talk.',good:'I can\'t really talk right now.'}]},
{id:'qishi',type:'calque',title:'"其实" 不等于 actually',brief:'actually 暗示纠正，频繁使用像在反驳',chinese:'其实我觉得蓝色更好',chinglish:'Actually, I think blue is better.',natural:'I think blue might work better.',
explanation:'"其实"在中文引出个人看法，但英文的 actually 带"你说的不对"的纠正意味。频繁使用让人觉得你在不停反驳。',
more:[{zh:'其实这个不难',bad:'Actually this is not difficult.',good:'This isn\'t that hard, really.'},{zh:'其实我之前做过',bad:'Actually I\'ve done this before.',good:'I\'ve done this before, actually. (放后面语气柔和)'}]},
{id:'chabuduo',type:'calque',title:'"差不多" 不只是 almost',brief:'英文里每种含义有不同表达',chinese:'这两个方案差不多',chinglish:'These two plans are almost the same.',natural:'These two are pretty similar.',
explanation:'"差不多"含义丰富：接近完成、大致相同、差不多行了。英文有 nearly done / pretty similar / close enough / roughly。别只用 almost。',
more:[{zh:'差不多做完了',bad:'Almost finished.',good:'Nearly done. / Just about there.'},{zh:'差不多可以了',bad:'It\'s almost OK.',good:'That\'ll do. / Close enough.'}]},
{id:'buhaoyisi',type:'calque',title:'"不好意思" ≠ sorry',brief:'过度 sorry 显得没自信',chinese:'不好意思，请问一下',chinglish:'Sorry, can I ask you a question?',natural:'Hey, quick question —',
explanation:'"不好意思"是社交润滑剂 ≈ 打扰一下。但英文 sorry 是正式道歉，频繁说会传递"我做错了"的信号。用 excuse me / hey / quick question。',
more:[{zh:'不好意思打扰一下',bad:'Sorry to bother you.',good:'Hey, do you have a sec?'},{zh:'不好意思让你久等了',bad:'Sorry to make you wait.',good:'Thanks for waiting.（道歉转感谢）'}]},
{id:'bang-wo',type:'calque',title:'"帮我" 不需要 help me',brief:'英文请求不需要经过"帮"',chinese:'你能帮我开一下窗户吗？',chinglish:'Can you help me open the window?',natural:'Could you open the window?',
explanation:'中文"帮我做X"是客气说法。英文直接说 Could you do X? 就很礼貌了。加 help me 反而像在求人。',
more:[{zh:'帮我看看这个文件',bad:'Help me look at this file?',good:'Could you take a look at this?'},{zh:'帮我转发一下',bad:'Help me forward this?',good:'Could you forward this?'}]},
{id:'yiban-laishuo',type:'calque',title:'"一般来说" ≠ generally speaking',brief:'日常口语不需要这么正式的开头',chinese:'一般来说我七点起床',chinglish:'Generally speaking, I wake up at 7.',natural:'I usually wake up at 7.',
explanation:'"一般来说"在中文是口语，但 generally speaking 在英文很正式。日常用 usually / normally / typically。',
more:[{zh:'一般来说周五不开会',bad:'Generally speaking, no meetings on Fridays.',good:'We usually skip meetings on Fridays.'},{zh:'一般来说要两天',bad:'Generally speaking, it takes two days.',good:'It usually takes about two days.'}]},
{id:'yinggai',type:'calque',title:'"应该" ≠ should（给建议时）',brief:'should 比你以为的更强硬',chinese:'你应该试试这家餐厅',chinglish:'You should try this restaurant.',natural:'You might want to try this restaurant.',
explanation:'"应该"在中文可以是温和建议，但英文 should 有指导/要求意味。给建议时用 might want to / could / have you considered。',
more:[{zh:'你应该用蓝色',bad:'You should use blue.',good:'What about trying blue?'},{zh:'你应该早点走',bad:'You should leave earlier.',good:'You might want to head out early.'}]},
{id:'jianyi',type:'calque',title:'"建议你做X" 语法陷阱',brief:'suggest 后面不接 someone to do',chinese:'我建议你改一下颜色',chinglish:'I suggest you to change the color.',natural:'I\'d suggest changing the color.',
explanation:'suggest 后面不能跟 someone to do。正确：suggest doing / suggest that sb do。更自然：what about / how about / why not。',
more:[{zh:'我建议你再想想',bad:'I suggest you to think again.',good:'Why not sleep on it?'},{zh:'建议大家提前到',bad:'I suggest everyone to arrive early.',good:'I\'d suggest arriving a bit early.'}]},
{id:'kaixin',type:'calque',title:'"开心" 不只是 happy',brief:'英文有比 happy 丰富得多的快乐表达',chinese:'听到这个消息我很开心',chinglish:'I\'m very happy to hear this.',natural:'That\'s great to hear!',
explanation:'glad（礼貌）、pleased（满意）、thrilled（激动）、excited（兴奋）、delighted（很高兴）、stoked（口语超开心）。不要永远用 happy。',
more:[{zh:'见到你很开心',bad:'I\'m very happy to see you.',good:'So good to see you!'},{zh:'项目做成了很开心',bad:'I\'m happy the project succeeded.',good:'I\'m thrilled about how it turned out.'}]},
{id:'zenme-shuo',type:'calque',title:'"怎么说" ≠ how to say',brief:'"how to say" 是翻译腔经典标志',chinese:'这个…怎么说…就是很重要',chinglish:'This... how to say... is very important.',natural:'This is... well, it\'s really important.',
explanation:'"怎么说"是中文的思考填充语。英文对应 um / well / I mean / what\'s the word。说 how to say 像在做翻译练习。',
more:[{zh:'怎么说呢，不太合适',bad:'How to say, it\'s not suitable.',good:'I mean, it doesn\'t quite work.'},{zh:'这个怎么说…',bad:'This one, how to say...',good:'What\'s the word... / It\'s kind of...'}]},
{id:'yingwen-buhao',type:'calque',title:'"我的英文不好" 别这么说',brief:'自我贬低在英文文化里不加分',chinese:'不好意思我的英文不好',chinglish:'Sorry, my English is not good.',natural:'Bear with me — English isn\'t my first language.',
explanation:'中文里谦虚是美德，但英文中过度自我贬低显得不自信。如果确实需要提示对方，用更中性的说法。',
more:[{zh:'我英文不太好请见谅',bad:'Please forgive my poor English.',good:'English isn\'t my first language, so let me know if anything\'s unclear.'},{zh:'我英文比较差',bad:'My English is very bad.',good:'I\'m still working on my English.'}]},
{id:'yali-da',type:'calque',title:'"压力大" ≠ pressure is big',brief:'英文的 pressure 不用 big 修饰',chinese:'最近工作压力很大',chinglish:'Recently my work pressure is very big.',natural:'I\'ve been pretty stressed at work lately.',
explanation:'中文"压力大"直译成 pressure is big 不地道。英文说 stressed / under a lot of pressure / swamped / overwhelmed。',
more:[{zh:'别给自己太大压力',bad:'Don\'t give yourself too big pressure.',good:'Don\'t put too much pressure on yourself.'},{zh:'压力大到睡不着',bad:'Pressure is so big I can\'t sleep.',good:'I\'m so stressed I can\'t sleep.'}]},
{id:'jiayou',type:'calque',title:'"加油" 怎么翻译',brief:'没有万能翻译，看语境选表达',chinese:'明天面试加油！',chinglish:'Tomorrow interview, fighting!',natural:'Good luck with your interview tomorrow!',
explanation:'"加油"是中文万能鼓励语，但英文没有一个词能对应。看语境：鼓励 = You got this / Go for it；加油打气 = Keep it up / Hang in there；祝好运 = Good luck。',
more:[{zh:'加油你可以的',bad:'Add oil! You can do it!',good:'You got this!'},{zh:'最后一圈了加油',bad:'Last round, fighting!',good:'Last lap — come on!'}]},
{id:'suibian',type:'calque',title:'"随便" ≠ whatever',brief:'中文的客气在英文里变成了态度差',chinese:'吃什么？随便。',chinglish:'What to eat? Whatever.',natural:'I\'m easy — you pick.',
explanation:'"随便"在中文是客气（我都行你选），但英文 whatever 是不耐烦/不在乎的语气。说 I\'m easy / I\'m flexible / anything works / you choose。',
more:[{zh:'坐哪里？随便',bad:'Where to sit? Whatever.',good:'Anywhere\'s fine.'},{zh:'你决定吧，我随便',bad:'You decide, I\'m whatever.',good:'Up to you — I\'m flexible.'}]},
{id:'mafan-ni',type:'calque',title:'"麻烦你" ≠ trouble you',brief:'trouble 在英文里比"麻烦"重得多',chinese:'麻烦你帮我拿一下',chinglish:'Sorry to trouble you, please help me take this.',natural:'Could you grab this for me?',
explanation:'"麻烦你"在中文很轻，类似"请"。但 trouble you 在英文里显得很郑重，像在说"我知道这很为难你"。日常直接 Could you...? 就好。',
more:[{zh:'麻烦传一下盐',bad:'Sorry to trouble you, pass the salt.',good:'Could you pass the salt?'},{zh:'麻烦你签个字',bad:'Trouble you to sign here.',good:'Could you sign here, please?'}]},
{id:'zhuyi-shenti',type:'calque',title:'"注意身体" ≠ pay attention to your body',brief:'直译听起来很奇怪',chinese:'你要注意身体啊',chinglish:'You should pay attention to your body.',natural:'Take care of yourself.',
explanation:'"注意身体"是中文常见关心语。英文说 take care / look after yourself / get some rest。"Pay attention to your body" 听起来像医学建议。',
more:[{zh:'工作忙也要注意身体',bad:'Even if busy, pay attention to body.',good:'Don\'t forget to take care of yourself.'},{zh:'天冷了注意身体',bad:'Weather cold, attention body.',good:'Stay warm out there!'}]},
{id:'wo-xian-zou',type:'calque',title:'"我先走了" ≠ I go first',brief:'英文的告别方式不同',chinese:'那我先走了啊',chinglish:'Then I go first.',natural:'I should get going. / I\'ll head out.',
explanation:'"先走"在中文是客气的告别。英文不说 go first（这意味着排队/走前面）。说 head out / get going / take off / make a move。',
more:[{zh:'不早了我先走了',bad:'It\'s late, I go first.',good:'It\'s getting late — I should head out.'},{zh:'我有事先走一步',bad:'I have things, go first.',good:'I\'ve gotta run. Catch you later!'}]},
{id:'mei-guanxi',type:'calque',title:'"没关系" 的多种场景',brief:'never mind / it\'s fine / no worries 用法不同',chinese:'没关系没关系',chinglish:'Never mind, never mind.',natural:'No worries! / It\'s all good.',
explanation:'"没关系"在中文覆盖很多场景。英文要分：别人道歉→ No worries / It\'s fine；安慰→ It\'s okay / Don\'t worry about it；拒绝后客气→ That\'s alright。',
more:[{zh:'（对方道歉后）没关系',bad:'Never mind.',good:'No worries at all!'},{zh:'（安慰对方）没关系的',bad:'It doesn\'t matter.',good:'Don\'t worry about it — it happens.'}]},
{id:'xinku-le',type:'calque',title:'"辛苦了" 无法直译',brief:'英文没有对等表达，要换个角度',chinese:'大家辛苦了',chinglish:'Everyone has worked hard.',natural:'Thanks everyone — great work today.',
explanation:'"辛苦了"是中文独有的体谅语。英文没有直接对应。视场景用：感谢→ Thanks for your hard work；赞赏→ Great job / Well done；关心→ You\'ve earned a break。',
more:[{zh:'今天辛苦你了',bad:'Today you worked hard.',good:'Thanks for handling that today.'},{zh:'出差辛苦了',bad:'Business trip hard work.',good:'Hope the trip wasn\'t too rough.'}]},
{id:'youkong',type:'calque',title:'"有空" ≠ have free time',brief:'have free time 太直白，英文有更自然的说法',chinese:'你有空吗？',chinglish:'Do you have free time?',natural:'Are you free? / Are you around?',
explanation:'"有空"直译成 have free time 不算错但略生硬。英文说 Are you free? / Available? / Got a minute?',
more:[{zh:'有空一起吃饭',bad:'If you have free time, eat together.',good:'Let\'s grab a meal sometime.'},{zh:'这周有空吗',bad:'This week have free time?',good:'Are you free this week?'}]},
{id:'qingwen',type:'calque',title:'"请问" 大多数时候不需要',brief:'过度礼貌反而显得生硬',chinese:'请问这个怎么用？',chinglish:'May I ask, how to use this?',natural:'How do I use this?',
explanation:'"请问"在中文是礼貌开头。英文直接问问题就已经足够礼貌了。除非是很正式的场合，不需要加 May I ask。',
more:[{zh:'请问洗手间在哪',bad:'May I ask where is the washroom?',good:'Where\'s the restroom?'},{zh:'请问您贵姓',bad:'May I ask your noble surname?',good:'What\'s your name? / And you are...?'}]},
{id:'ni-mang-ba',type:'calque',title:'"你忙吧" ≠ you be busy',brief:'中文客气话换个角度表达',chinese:'好的那你忙吧',chinglish:'OK then you be busy.',natural:'I\'ll let you go. / I won\'t keep you.',
explanation:'"你忙吧"是中文礼貌结束对话。英文从"我"的角度说：I\'ll let you go（我放你走）/ I won\'t keep you（我不耽误你了）。',
more:[{zh:'行那你忙吧不打扰了',bad:'OK you busy, won\'t disturb.',good:'Alright, I\'ll let you get back to it.'}]},
{id:'dui-bu-dui',type:'calque',title:'"对不对" ≠ right or not right',brief:'英文的附加疑问有更自然的方式',chinese:'这样做对不对？',chinglish:'Doing like this, right or not right?',natural:'Is this right? / Am I on the right track?',
explanation:'中文"对不对""是不是""好不好"的正反疑问结构英文没有。英文用 tag question：..., right? / ..., isn\'t it? 或者直接问 Is this correct?',
more:[{zh:'你是说明天对不对',bad:'You mean tomorrow, right or not right?',good:'You mean tomorrow, right?'},{zh:'这样OK不OK',bad:'Like this OK not OK?',good:'Does this work?'}]},
{id:'liaojie',type:'calque',title:'"了解" ≠ understand（每次都用）',brief:'understand 太重了，轻量确认有更好的词',chinese:'好的了解了',chinglish:'OK, understood.',natural:'Got it. / Makes sense.',
explanation:'"了解"在中文是轻量确认词。但 understood 在英文偏正式/军事化。日常确认用 Got it / Makes sense / Sure / I see。',
more:[{zh:'我了解了谢谢',bad:'I understand, thank you.',good:'Got it, thanks!'},{zh:'了解了解',bad:'Understand understand.',good:'Ah I see, I see.'}]},
{id:'de-hua',type:'calque',title:'"的话" 导致过度使用 if',brief:'不是每个"如果/的话"都需要翻译',chinese:'方便的话帮我看看',chinglish:'If it is convenient, if you can, help me look.',natural:'Could you take a look when you get a chance?',
explanation:'中文"的话"是条件软化语气词，不一定需要翻译成 if。英文可以用 when you get a chance / if possible / feel free to 等更自然的表达。',
more:[{zh:'可以的话明天回复我',bad:'If possible, if you can, reply tomorrow.',good:'Could you get back to me by tomorrow?'},{zh:'有兴趣的话可以看看',bad:'If you have interest, you can look.',good:'Check it out if you\'re interested.'}]},
{id:'hai-hao',type:'calque',title:'"还好" ≠ still OK',brief:'"还好"的真实含义比你以为的复杂',chinese:'工作怎么样？还好吧。',chinglish:'How\'s work? Still OK.',natural:'How\'s work? Not bad. / Can\'t complain.',
explanation:'"还好"可以表示"马马虎虎""幸好""还行"。英文里 not bad / it\'s alright / can\'t complain / could be worse 更自然。still OK 听起来像在说"目前还没出问题"。',
more:[{zh:'还好赶上了',bad:'Still OK, caught up.',good:'Good thing I made it in time.'},{zh:'味道还好',bad:'Taste is still OK.',good:'It\'s decent. / Not bad.'}]},
{id:'neng-bu-neng',type:'calque',title:'"能不能" 不用说两遍',brief:'英文不需要正反疑问',chinese:'你能不能帮个忙？',chinglish:'Can you or cannot help a favor?',natural:'Could you do me a favor?',
explanation:'中文"能不能""要不要""行不行"的正反结构在英文中不存在。直接用 Can you / Could you / Would you 就好。',
more:[{zh:'你要不要来',bad:'You want or not want to come?',good:'Want to come?'},{zh:'这样行不行',bad:'Like this can or cannot?',good:'Will this work?'}]},
{id:'dagai',type:'calque',title:'"大概" 不用每次都说 probably',brief:'probably 的确定程度比"大概"高',chinese:'大概要两个小时',chinglish:'Probably need two hours.',natural:'About two hours. / Roughly two hours.',
explanation:'"大概"在中文是模糊估计。但 probably 在英文表示70-80%确定，比"大概"确定得多。估计数量用 about / around / roughly。',
more:[{zh:'大概五点到',bad:'Probably arrive at five.',good:'I\'ll be there around five.'},{zh:'大概花了一百块',bad:'Probably spent 100.',good:'It was about 100 bucks.'}]},
{id:'youyisi',type:'calque',title:'"有意思" 不全是 interesting',brief:'interesting 用多了像在敷衍',chinese:'这个有意思',chinglish:'This is interesting.',natural:'That\'s cool. / That\'s pretty neat.',
explanation:'"有意思"在中文是真诚的赞赏。但英文 interesting 用太多会听起来像在敷衍或者不置可否。可以用 cool / neat / fun / fascinating / love that。',
more:[{zh:'你这个想法有意思',bad:'Your idea is interesting.',good:'That\'s a cool idea. / I love that idea.'},{zh:'这部电影挺有意思的',bad:'This movie is quite interesting.',good:'This movie is really fun.'}]},
{id:'laidejilaibuji',type:'calque',title:'"来得及" ≠ can make it in time',brief:'英文有更简洁的说法',chinese:'现在出发来得及吗',chinglish:'If leave now, can make it in time?',natural:'Can we still make it if we leave now?',
explanation:'"来得及/来不及"在中文很常用。英文用 make it（来得及）或 too late（来不及），但句式更简洁。',
more:[{zh:'来不及了别等了',bad:'Can not make it in time, don\'t wait.',good:'We\'re not gonna make it — let\'s go.'},{zh:'还来得及别急',bad:'Still can make it in time, don\'t rush.',good:'We\'ve got time — no rush.'}]},
{id:'nage',type:'calque',title:'"那个/这个" 作填充语',brief:'中文的"那个"在英文里有对应的自然填充',chinese:'我觉得那个…就是…',chinglish:'I think that one... just is...',natural:'I think... you know... it\'s basically...',
explanation:'中文用"那个""这个""就是"做思考时的填充语。英文对应：um / you know / like / I mean / so basically。千万不要说 that one / this one 当填充。',
more:[{zh:'那个…你知道吗',bad:'That one... you know?',good:'So, um... you know what I mean?'}]},
{id:'shi-zheyang-de',type:'calque',title:'"是这样的" ≠ it is like this',brief:'中文开场白英文不需要',chinese:'是这样的，我想跟你说个事',chinglish:'It is like this, I want to tell you something.',natural:'So here\'s the thing —',
explanation:'"是这样的"在中文是引出话题的开场白。英文不需要这个铺垫。直接说 So / Here\'s the thing / The thing is。',
more:[{zh:'事情是这样的',bad:'The thing is like this.',good:'So here\'s what happened.'},{zh:'情况是这样的',bad:'The situation is like this.',good:'Here\'s the deal.'}]},
{id:'duo-he-reshui',type:'calque',title:'"多喝热水" 的文化差异',brief:'这句话在英文里没有对应，也不应该直译',chinese:'感冒了？多喝热水',chinglish:'You have a cold? Drink more hot water.',natural:'Hope you feel better soon. Get some rest.',
explanation:'"多喝热水"是中文关心的默认回复，但在英文文化里会让人困惑（西方人一般不喝热水）。表达关心说 Feel better soon / Get some rest / Take it easy。',
more:[{zh:'不舒服的话多喝热水',bad:'If uncomfortable, drink more hot water.',good:'Take it easy and get some rest.'}]},

// ── NEW CALQUES ──
{id:'chi-yao',type:'calque',title:'"吃药" ≠ eat medicine',brief:'英文是 take medicine，不是 eat',chinese:'你吃药了没有？',chinglish:'Did you eat medicine?',natural:'Did you take your medicine?',
explanation:'中文用"吃"搭配药物，但英文药物用 take：take medicine / take pills / take vitamins。eat 只用于食物。',
more:[{zh:'每天吃三次药',bad:'Eat medicine three times a day.',good:'Take your medicine three times a day.'},{zh:'记得吃维生素',bad:'Remember to eat vitamins.',good:'Don\'t forget to take your vitamins.'}]},
{id:'wan-shouji',type:'calque',title:'"玩手机" ≠ play phone',brief:'play 只搭配游戏，不搭配手机',chinese:'他一直在玩手机',chinglish:'He keeps playing phone.',natural:'He\'s been on his phone the whole time.',
explanation:'中文"玩手机"是万能搭配，但英文 play 只用于游戏（play games）。看手机说 be on my phone / scroll / check my phone。',
more:[{zh:'别玩手机了',bad:'Stop playing phone.',good:'Put your phone down. / Get off your phone.'},{zh:'玩手机玩到两点',bad:'Play phone until 2am.',good:'I was on my phone till 2am.'}]},
{id:'kan-qingkuang',type:'calque',title:'"看情况" ≠ look at the situation',brief:'英文有更自然的简短表达',chinese:'去不去看情况吧',chinglish:'Go or not go, look at the situation.',natural:'It depends. / We\'ll see.',
explanation:'"看情况"在中文很自然。英文不需要真的说"看情况"，用 it depends / we\'ll see / let\'s play it by ear 更地道。',
more:[{zh:'能不能做到看情况',bad:'Can do or not, look at situation.',good:'It depends on how things go.'},{zh:'看情况再决定',bad:'Look at situation then decide.',good:'Let\'s wait and see.'}]},
{id:'kai-hui',type:'calque',title:'"开会" ≠ open a meeting',brief:'meeting 不用"开"',chinese:'下午要开会',chinglish:'This afternoon need to open a meeting.',natural:'I have a meeting this afternoon.',
explanation:'中文"开会"是固定搭配，但英文不说 open a meeting。说 have a meeting / be in a meeting / attend a meeting。',
more:[{zh:'我在开会',bad:'I am opening a meeting.',good:'I\'m in a meeting.'},{zh:'今天不用开会',bad:'Today no need to open meeting.',good:'No meetings today.'}]},
{id:'man-man-lai',type:'calque',title:'"慢慢来" ≠ slowly slowly come',brief:'英文有专门的短语',chinese:'不着急，慢慢来',chinglish:'Not urgent, slowly slowly.',natural:'No rush. Take your time.',
explanation:'"慢慢来"是中文安慰人不要急。英文说 take your time / no rush / no hurry / there\'s no need to rush。',
more:[{zh:'慢慢吃不着急',bad:'Slowly eat, not urgent.',good:'Take your time — no rush.'},{zh:'慢慢学就好了',bad:'Slowly learn is OK.',good:'Just take it at your own pace.'}]},
{id:'ni-juede-ne',type:'calque',title:'"你觉得呢" ≠ you feel?',brief:'"觉得"不等于 feel',chinese:'这个方案你觉得呢？',chinglish:'This plan, you feel?',natural:'What do you think about this?',
explanation:'中文"觉得"覆盖 think 和 feel。英文里征求意见用 think，表达情感用 feel。"你觉得呢？"= What do you think?',
more:[{zh:'你觉得哪个好',bad:'Which one you feel good?',good:'Which one do you prefer?'},{zh:'我觉得不太行',bad:'I feel not very OK.',good:'I don\'t think that\'ll work.'}]},
{id:'shuo-shihua',type:'calque',title:'"说实话" ≠ speak real words',brief:'英文有固定表达',chinese:'说实话我不太喜欢',chinglish:'Speak real words, I don\'t really like it.',natural:'To be honest, I\'m not a fan.',
explanation:'"说实话"对应 to be honest / honestly / frankly。不要逐字翻译成 speak real/true words。',
more:[{zh:'说实话有点失望',bad:'Speak truth, a bit disappointed.',good:'Honestly, I\'m a little disappointed.'},{zh:'说实话我没听懂',bad:'Speak real words, I didn\'t understand.',good:'To be honest, I didn\'t quite follow.'}]},
{id:'you-daoli',type:'calque',title:'"有道理" ≠ have reason',brief:'英文有更自然的认同方式',chinese:'你说得有道理',chinglish:'What you said has reason.',natural:'That makes sense. / Good point.',
explanation:'"有道理"表示认同对方逻辑。英文说 that makes sense / good point / fair point / you\'re right。',
more:[{zh:'这个有道理',bad:'This has reason.',good:'That\'s a fair point.'},{zh:'你说的有道理但是…',bad:'Your words have reason but...',good:'That makes sense, but...'}]},
{id:'suan-le',type:'calque',title:'"算了" ≠ calculate',brief:'不同语气下有不同翻译',chinese:'算了算了不说了',chinglish:'Calculate, calculate, don\'t say.',natural:'Forget it. / Never mind.',
explanation:'"算了"表示放弃或不计较。英文看语气：放弃 = forget it / drop it；不计较 = never mind / let it go；无奈 = whatever。',
more:[{zh:'算了不去了',bad:'Calculate, not go.',good:'Forget it, I\'m not going.'},{zh:'算了没事',bad:'Calculate, no thing.',good:'Never mind, it\'s fine.'}]},
{id:'gai-tian',type:'calque',title:'"改天" ≠ change day',brief:'英文有固定搭配',chinese:'改天再约',chinglish:'Change day meet again.',natural:'Let\'s do it another time.',
explanation:'"改天"= another time / some other time / another day。不要翻成 change day。',
more:[{zh:'改天请你吃饭',bad:'Change day invite you eat.',good:'I\'ll take you out for dinner sometime.'},{zh:'今天不行改天吧',bad:'Today cannot, change day.',good:'I can\'t today — how about another time?'}]},
{id:'zenme-ban',type:'calque',title:'"怎么办" ≠ how to do',brief:'英文里问的是 what，不是 how',chinese:'这可怎么办啊',chinglish:'How to do?',natural:'What should we do? / What now?',
explanation:'中文"怎么办"直译是 how to do，但英文问的是 what：What should I do? / What do we do now? / Now what?',
more:[{zh:'来不及了怎么办',bad:'Can\'t make it, how to do?',good:'We\'re running late — what should we do?'},{zh:'手机丢了怎么办',bad:'Phone lost, how to do?',good:'I lost my phone — what do I do?'}]},
{id:'xiguan-le',type:'calque',title:'"习惯了" ≠ habit',brief:'habit 是名词，"习惯了"需要动词短语',chinese:'没关系我习惯了',chinglish:'No problem, I habit.',natural:'It\'s fine — I\'m used to it.',
explanation:'"习惯了"= I\'m used to it / I\'m accustomed to it。habit 是名词（习惯），不能直接当动词用。',
more:[{zh:'慢慢就习惯了',bad:'Slowly will habit.',good:'You\'ll get used to it.'},{zh:'我已经习惯早起了',bad:'I already habit wake up early.',good:'I\'m used to getting up early now.'}]},
{id:'fang-xin',type:'calque',title:'"放心" ≠ put your heart down',brief:'英文的安慰方式不同',chinese:'你放心我会处理好的',chinglish:'You put heart down, I will handle well.',natural:'Don\'t worry — I\'ve got it.',
explanation:'"放心"在中文是让人安心。英文说 don\'t worry / rest assured（正式）/ I\'ve got this / trust me。',
more:[{zh:'放心吧没问题',bad:'Put heart, no problem.',good:'Don\'t worry, it\'ll be fine.'},{zh:'你放心去吧',bad:'You put heart go.',good:'Go ahead — I\'ll hold things down here.'}]},
{id:'tai-keqi',type:'calque',title:'"太客气了" ≠ too polite',brief:'客气在英文里用不同方式表达',chinese:'你太客气了',chinglish:'You are too polite.',natural:'You\'re too kind. / You didn\'t have to!',
explanation:'"太客气了"表示感激对方的好意。英文说 you\'re too kind / that\'s so nice of you / you really didn\'t have to。too polite 在英文里不是夸奖。',
more:[{zh:'太客气了别破费',bad:'Too polite, don\'t waste money.',good:'You really shouldn\'t have!'},{zh:'你太客气了谢谢',bad:'You too polite, thanks.',good:'That\'s so sweet of you — thank you!'}]},
{id:'kaolv-kaolv',type:'calque',title:'"考虑考虑" 的委婉拒绝',brief:'I\'ll think about it 在英文里也是软拒绝',chinese:'好的我考虑考虑',chinglish:'OK I consider consider.',natural:'Let me think about it.',
explanation:'"考虑考虑"在中文经常是委婉拒绝。有趣的是 I\'ll think about it 在英文里也常被理解为软拒绝。如果真的在考虑，加具体时间：Let me sleep on it / I\'ll get back to you by Friday。',
more:[{zh:'我再考虑一下',bad:'I again consider.',good:'Let me think it over.'},{zh:'让我考虑考虑',bad:'Let me consider consider.',good:'Give me some time to mull it over.'}]},
{id:'bu-keqi',type:'calque',title:'"不客气" ≠ don\'t be polite',brief:'英文有很多种说"不用谢"',chinese:'不客气！',chinglish:'Don\'t be polite!',natural:'No problem! / You\'re welcome! / Anytime!',
explanation:'"不客气"直译 don\'t be polite 在英文里太生硬。说 you\'re welcome / no problem / of course / anytime / happy to help。',
more:[{zh:'不客气不客气',bad:'Don\'t polite don\'t polite.',good:'Of course! / Don\'t mention it.'},{zh:'不用客气',bad:'No need polite.',good:'Please, it\'s nothing.'}]},
{id:'mei-xiangdao',type:'calque',title:'"没想到" ≠ didn\'t think',brief:'didn\'t think 有否定意味',chinese:'没想到这么好吃',chinglish:'Didn\'t think so delicious.',natural:'I didn\'t expect it to be this good!',
explanation:'"没想到"表示惊喜。英文说 I didn\'t expect / I\'m surprised / who knew。didn\'t think 在英文里偏否定，像"我不觉得"。',
more:[{zh:'没想到你会来',bad:'Didn\'t think you come.',good:'What a nice surprise! I didn\'t expect you!'},{zh:'没想到这么快',bad:'Didn\'t think so fast.',good:'That was faster than I expected!'}]},
{id:'shenme-yisi',type:'calque',title:'"什么意思" 的语气陷阱',brief:'What do you mean 可能听起来有攻击性',chinese:'你这是什么意思？',chinglish:'What is your meaning?',natural:'What do you mean? / I\'m not sure I follow.',
explanation:'"什么意思"在中文可以是好奇也可以是质疑。英文 What do you mean? 语气偏质问。温和版：I\'m not sure I follow / Could you clarify? / How so?',
more:[{zh:'这个词什么意思',bad:'This word what meaning?',good:'What does this word mean?'},{zh:'你这话什么意思',bad:'Your words what meaning?',good:'What exactly do you mean by that?'}]},
{id:'ni-xian',type:'calque',title:'"你先" ≠ you first',brief:'让路要说 after you 或 go ahead',chinese:'你先请',chinglish:'You first please.',natural:'After you. / Go ahead.',
explanation:'"你先"在中文是礼让。英文说 after you / go ahead / please, go first（这个可以但不常用）。you first 语法上没问题但不够自然。',
more:[{zh:'你先上车',bad:'You first get on.',good:'After you.'},{zh:'你先说',bad:'You first speak.',good:'Go ahead — you first.'}]},
{id:'bie-jieyi',type:'calque',title:'"别介意" ≠ don\'t border mind',brief:'英文的安慰方式更具体',chinese:'说得不对的地方别介意',chinglish:'If say wrong place, don\'t mind.',natural:'Don\'t take it personally if I say something off.',
explanation:'"别介意"表示"别往心里去"。英文说 don\'t take it personally / no offense / hope you don\'t mind。',
more:[{zh:'我直说了别介意',bad:'I straight say, don\'t mind.',good:'I\'ll be direct — hope you don\'t mind.'},{zh:'别介意他的话',bad:'Don\'t mind his words.',good:'Don\'t take what he said to heart.'}]},
{id:'da-zhe',type:'calque',title:'"打折" ≠ hit discount',brief:'"打折"有专门的英文表达',chinese:'这个打八折',chinglish:'This hit eight discount.',natural:'This is 20% off.',
explanation:'中文"打八折"= 付80%。英文倒过来说 20% off（减掉20%）。也可以说 on sale / discounted / marked down。',
more:[{zh:'双十一打五折',bad:'Double eleven hit five discount.',good:'50% off for Singles\' Day.'},{zh:'你们打折吗',bad:'You hit discount?',good:'Do you have any deals? / Is this on sale?'}]},
{id:'xia-ci-qing-ni',type:'calque',title:'"下次请你" ≠ next time invite you eat',brief:'英文的请客表达',chinese:'今天我请，下次你来',chinglish:'Today I invite, next time you come.',natural:'My treat today — you can get the next one.',
explanation:'"请客"不用 invite（invite 是邀请出席）。请吃饭 = my treat / I\'ll get this / it\'s on me。',
more:[{zh:'今天我请客',bad:'Today I invite guest.',good:'It\'s on me today.'},{zh:'这顿我请',bad:'This meal I invite.',good:'I\'ve got this one.'}]},
{id:'gei-mianzi',type:'calque',title:'"给面子" 没有直译',brief:'面子文化在英文里需要换个角度说',chinese:'给我个面子',chinglish:'Give me a face.',natural:'Do me this favor. / Help me out here.',
explanation:'"面子"是中文社交核心概念。英文没有对应词。给面子 ≈ do me a favor / back me up / cut me some slack。丢面子 ≈ embarrass / lose credibility。',
more:[{zh:'别让我丢面子',bad:'Don\'t let me lose face.',good:'Don\'t put me in an awkward spot.'},{zh:'看在我的面子上',bad:'Look at my face.',good:'Do it as a personal favor to me.'}]},
{id:'chang-jianshi',type:'calque',title:'"长见识了" ≠ grow knowledge',brief:'英文有更自然的感叹方式',chinese:'今天真是长见识了',chinglish:'Today really grow knowledge.',natural:'I learned something new today. / You learn something new every day.',
explanation:'"长见识"表示开了眼界。英文说 I learned something new / that\'s eye-opening / I had no idea / well, you learn something new every day。',
more:[{zh:'跟你聊天长见识',bad:'Chat with you grow knowledge.',good:'I always learn something from talking to you.'},{zh:'活到老长到老见识',bad:'Live old grow old knowledge.',good:'Every day\'s a school day.'}]},
{id:'xia-ci-zai-shuo',type:'calque',title:'"下次再说" ≠ next time again say',brief:'英文的推迟方式不同',chinese:'这个不急，下次再说吧',chinglish:'This not urgent, next time again say.',natural:'No rush — we can figure it out later.',
explanation:'"下次再说"表示暂时搁置。英文说 we\'ll deal with it later / let\'s put a pin in that / we\'ll cross that bridge when we come to it。',
more:[{zh:'这事下次再说',bad:'This thing next time again say.',good:'Let\'s table that for now.'},{zh:'不着急下次再说',bad:'Not urgent, next time say.',good:'There\'s no rush — we can revisit it later.'}]},
{id:'fa-piqi',type:'calque',title:'"发脾气" ≠ send temper',brief:'temper 的用法和中文不同',chinese:'老板今天发脾气了',chinglish:'Boss today sent temper.',natural:'The boss lost his temper today.',
explanation:'"发脾气"= lose one\'s temper / blow up / get angry / snap。中文"发"在这里不译为 send。',
more:[{zh:'别发脾气',bad:'Don\'t send temper.',good:'Don\'t lose your temper. / Calm down.'},{zh:'她很少发脾气',bad:'She rarely sends temper.',good:'She rarely gets angry.'}]},

// ══════════════════════════════════════
// REGISTER (60)
// ══════════════════════════════════════
{id:'utilize-use',type:'register',title:'utilize → use',brief:'99% 场景 use 就够了',formal:'utilize',natural:'use',
explanation:'utilize 是 use 的书面正式版。日常交流用 use 都更自然。过度使用 utilize 听起来像在念论文。',
exBad:'We utilize this tool on a daily basis.',exGood:'We use this tool every day.',whenFormal:'学术论文、或强调"充分利用"：utilize resources = 充分利用资源。'},
{id:'commence-start',type:'register',title:'commence → start',brief:'日常直接说 start',formal:'commence',natural:'start',
explanation:'commence 极其正式，有仪式感。日常用 start 或 begin。',
exBad:'The meeting will commence at 10 AM.',exGood:'The meeting starts at 10.',whenFormal:'正式仪式：The ceremony will now commence. 法律：work shall commence on...'},
{id:'purchase-buy',type:'register',title:'purchase → buy',brief:'日常说 buy 或 get',formal:'purchase',natural:'buy',
explanation:'purchase 是商务/法律正式用语。日常说 buy，更口语说 get / pick up。',
exBad:'I purchased a new laptop yesterday.',exGood:'I bought a new laptop yesterday.',whenFormal:'合同发票：purchase order。电商界面：complete your purchase（名词可以）。'},
{id:'regarding-about',type:'register',title:'regarding → about',brief:'邮件和对话用 about 更自然',formal:'regarding',natural:'about',
explanation:'regarding 是公文开头的正式用语。口语和普通邮件用 about 更自然。',
exBad:'I want to discuss regarding the timeline.',exGood:'I want to talk about the timeline.',whenFormal:'正式邮件主题行：Regarding your inquiry of June 1。'},
{id:'prior-to-before',type:'register',title:'prior to → before',brief:'对话和普通写作用 before',formal:'prior to',natural:'before',
explanation:'prior to 是 before 的书面正式版。日常完全用 before。',
exBad:'Prior to the meeting, I reviewed the docs.',exGood:'Before the meeting, I went through the docs.',whenFormal:'法律：prior to execution of this agreement。学术：prior to the experiment。'},
{id:'obtain-get',type:'register',title:'obtain → get',brief:'日常说 get，口语说 grab',formal:'obtain',natural:'get',
explanation:'obtain 是正式的"获取"。日常用 get。很口语用 grab。',
exBad:'I need to obtain approval from my manager.',exGood:'I need to get approval from my manager.',whenFormal:'学术：Data was obtained from participants. 官方：obtain a visa。'},
{id:'sufficient-enough',type:'register',title:'sufficient → enough',brief:'日常说 enough',formal:'sufficient',natural:'enough',
explanation:'sufficient 正式书面。口语说 sufficient 像在做报告。',
exBad:'Do we have sufficient budget for this?',exGood:'Do we have enough budget for this?',whenFormal:'技术文档：sufficient memory allocation。学术：sufficient evidence。'},
{id:'demonstrate-show',type:'register',title:'demonstrate → show',brief:'日常用 show 或 walk through',formal:'demonstrate',natural:'show',
explanation:'demonstrate 用于正式演示或学术论证。日常说 show，演示说 walk you through。',
exBad:'Let me demonstrate the new feature.',exGood:'Let me show you the new feature.',whenFormal:'学术：The data demonstrates a strong correlation. 正式演示会。'},
{id:'facilitate-help',type:'register',title:'facilitate → help',brief:'corporate jargon 的典型代表',formal:'facilitate',natural:'help / make easier',
explanation:'facilitate 是企业黑话中最常见的词之一。日常说 help / make easier / support。',
exBad:'I\'ll facilitate the transition process.',exGood:'I\'ll help with the transition.',whenFormal:'正式提案：facilitate cross-team collaboration。会议记录。'},
{id:'endeavor-try',type:'register',title:'endeavor → try',brief:'日常说 try 或 work on',formal:'endeavor',natural:'try',
explanation:'endeavor 极其正式。日常说 try / work on / aim to。',
exBad:'We endeavor to provide excellent service.',exGood:'We try to give great service.',whenFormal:'公司使命宣言、政府声明。几乎不在口语中使用。'},
{id:'inquire-ask',type:'register',title:'inquire → ask',brief:'ask 在任何场景都OK',formal:'inquire',natural:'ask',
explanation:'inquire 是 ask 的书面版。日常邮件和对话用 ask。',
exBad:'I\'d like to inquire about the status.',exGood:'I wanted to ask about the status.',whenFormal:'客服系统：For inquiries, contact... 正式信函。'},
{id:'subsequent-next',type:'register',title:'subsequent → next / later',brief:'日常说 next 或 following',formal:'subsequent',natural:'next',
explanation:'subsequent 是学术/法律用语。日常说 next / following / later。',
exBad:'In subsequent meetings, we discussed...',exGood:'In later meetings, we talked about...',whenFormal:'学术论文：subsequent analysis revealed... 法律：subsequent to the agreement。'},
{id:'terminate-end',type:'register',title:'terminate → end / stop',brief:'terminate 听起来很严肃',formal:'terminate',natural:'end / stop',
explanation:'terminate 带有"强制终止"的意味。日常说 end / stop / wrap up。',
exBad:'We decided to terminate the project.',exGood:'We decided to end the project.',whenFormal:'法律：terminate the contract。技术：terminate the process。HR：terminate employment。'},
{id:'transmit-send',type:'register',title:'transmit → send',brief:'日常用 send',formal:'transmit',natural:'send',
explanation:'transmit 是技术/科学用语（传输信号、传播疾病）。日常传文件用 send / share。',
exBad:'I\'ll transmit the document to you.',exGood:'I\'ll send you the document.',whenFormal:'技术：transmit data / transmit a signal。医学：transmit the virus。'},
{id:'approximately-about',type:'register',title:'approximately → about',brief:'日常说 about 或 around',formal:'approximately',natural:'about',
explanation:'approximately 是精确的学术用语。日常说 about / around / roughly。',
exBad:'There were approximately 50 people.',exGood:'There were about 50 people.',whenFormal:'科学论文：approximately 3.14。正式报告中需要精确但留余量时。'},
{id:'acquire-get',type:'register',title:'acquire → get / pick up',brief:'日常说 get 或 learn',formal:'acquire',natural:'get',
explanation:'acquire 是正式的"获得/习得"。日常说 get / pick up / learn。',
exBad:'She acquired a new skill last month.',exGood:'She picked up a new skill last month.',whenFormal:'商业：acquire a company。学术：language acquisition。'},
{id:'numerous-many',type:'register',title:'numerous → many / lots of',brief:'口语说 many 或 a lot of',formal:'numerous',natural:'many',
explanation:'numerous 是 many 的正式版。口语用 many / a lot of / tons of。',
exBad:'We received numerous complaints.',exGood:'We got a lot of complaints.',whenFormal:'学术：numerous studies have shown... 正式报告。'},
{id:'reside-live',type:'register',title:'reside → live',brief:'日常说 live',formal:'reside',natural:'live',
explanation:'reside 极其正式，法律/官方用语。日常说 live / stay。',
exBad:'I currently reside in Singapore.',exGood:'I live in Singapore.',whenFormal:'法律文件：the party residing at... 正式表格。'},
{id:'implement-do',type:'register',title:'implement → do / set up',brief:'根据语境用更具体的动词',formal:'implement',natural:'do / set up / build',
explanation:'implement 是项目管理常用词，但在很多场景下可以用更具体的词替代：set up / build / put in place / roll out。',
exBad:'We need to implement this solution.',exGood:'We need to set this up. / Let\'s build this out.',whenFormal:'项目提案：implement the strategy。在商务语境中 implement 比日常对话中更常见，但仍可简化。'},
{id:'modify-change',type:'register',title:'modify → change / tweak',brief:'日常说 change 或 tweak',formal:'modify',natural:'change',
explanation:'modify 偏技术/正式。日常说 change / tweak / adjust / update。',
exBad:'We need to modify the design.',exGood:'We need to tweak the design.',whenFormal:'技术文档：modify the configuration。合同：modify the terms。'},
{id:'indicate-show',type:'register',title:'indicate → show / suggest',brief:'日常用 show 或 suggest',formal:'indicate',natural:'show',
explanation:'indicate 是学术/正式写作常用词。日常说 show / suggest / point to。',
exBad:'The results indicate a problem.',exGood:'The results show there\'s a problem.',whenFormal:'学术：The data indicates a trend. 路标：The sign indicates the exit.'},
{id:'assist-help',type:'register',title:'assist → help',brief:'help 在任何场景都更自然',formal:'assist',natural:'help',
explanation:'assist 是 help 的正式版，常见于客服用语。日常说 help / give a hand / pitch in。',
exBad:'How may I assist you today?',exGood:'How can I help?',whenFormal:'客服：We\'re here to assist you. 医疗：assisted living.'},
{id:'currently-now',type:'register',title:'currently → now',brief:'口语和邮件说 now 或 right now',formal:'currently',natural:'now',
explanation:'currently 是 now 的正式版。日常邮件和对话用 now / right now / at the moment。',
exBad:'I\'m currently working on the report.',exGood:'I\'m working on the report now.',whenFormal:'简历：Currently employed at... 正式通知。'},
{id:'initiate-start',type:'register',title:'initiate → start / kick off',brief:'日常说 start 或 kick off',formal:'initiate',natural:'start',
explanation:'initiate 是正式的"发起"。日常说 start / kick off / get going / set up。',
exBad:'Let\'s initiate the review process.',exGood:'Let\'s kick off the review.',whenFormal:'正式流程：initiate proceedings。技术：initiate a connection。'},
{id:'possess-have',type:'register',title:'possess → have / own',brief:'日常说 have',formal:'possess',natural:'have',
explanation:'possess 是 have 的法律/书面版。日常说 have / own / carry。',
exBad:'She possesses great communication skills.',exGood:'She has great communication skills.',whenFormal:'法律：possess illegal substances。正式评估：possess the required qualifications。'},

// ── NEW REGISTER ──
{id:'ascertain-find-out',type:'register',title:'ascertain → find out',brief:'日常说 find out 或 figure out',formal:'ascertain',natural:'find out',
explanation:'ascertain 是法律/调查用语。日常说 find out / figure out / work out。',
exBad:'We need to ascertain the cause of the issue.',exGood:'We need to find out what\'s causing this.',whenFormal:'法律：ascertain the facts. 正式调查报告。'},
{id:'consequently-so',type:'register',title:'consequently → so',brief:'日常说 so 或 as a result',formal:'consequently',natural:'so',
explanation:'consequently 是学术连接词。口语和日常写作用 so / as a result / because of this。',
exBad:'The server crashed; consequently, all data was lost.',exGood:'The server crashed, so we lost all the data.',whenFormal:'学术论文：Consequently, the hypothesis was rejected. 正式报告。'},
{id:'constitute-make-up',type:'register',title:'constitute → make up / be',brief:'日常说 make up 或直接 is',formal:'constitute',natural:'make up',
explanation:'constitute 是正式/法律用语。日常说 make up / account for / is basically。',
exBad:'This constitutes a violation of the policy.',exGood:'This is basically a policy violation.',whenFormal:'法律：This constitutes a breach of contract. 学术分析。'},
{id:'convey-tell',type:'register',title:'convey → tell / get across',brief:'日常说 tell 或 say',formal:'convey',natural:'tell / say',
explanation:'convey 偏书面正式。日常说 tell / say / get across / pass on / share。',
exBad:'I\'d like to convey my gratitude.',exGood:'I want to say thanks. / I really appreciate it.',whenFormal:'正式信函：Please convey my regards. 外交场合。'},
{id:'deem-think',type:'register',title:'deem → think / consider',brief:'日常说 think 或 consider',formal:'deem',natural:'think',
explanation:'deem 是法律/官方用语，意为"认为、视为"。日常用 think / consider / see as。',
exBad:'Management deemed it necessary to restructure.',exGood:'Management thought it was time to restructure.',whenFormal:'法律：deemed to have accepted. 官方声明。'},
{id:'dispatch-send',type:'register',title:'dispatch → send / ship',brief:'日常用 send',formal:'dispatch',natural:'send',
explanation:'dispatch 正式/物流用语。日常说 send / ship / get it out。',
exBad:'We will dispatch your order within 24 hours.',exGood:'We\'ll send your order out within 24 hours.',whenFormal:'物流：dispatched from warehouse. 紧急行动：dispatch a team.'},
{id:'expedite-speed-up',type:'register',title:'expedite → speed up',brief:'日常说 speed up 或 fast-track',formal:'expedite',natural:'speed up',
explanation:'expedite 是商务/官方用语。日常说 speed up / fast-track / rush / hurry up。',
exBad:'Could you expedite the review process?',exGood:'Could you speed up the review?',whenFormal:'签证：expedited processing. 商务邮件中可以用。'},
{id:'furnish-give',type:'register',title:'furnish → give / provide',brief:'日常说 give 或 provide',formal:'furnish',natural:'give',
explanation:'furnish（提供）极其正式。日常说 give / provide / share / send over。注意：furnish 也可以指"装修家具"。',
exBad:'Please furnish all relevant documents.',exGood:'Please send us the relevant documents.',whenFormal:'法律：furnish proof of identity. 合同：furnish a report.'},
{id:'garner-get',type:'register',title:'garner → get / attract',brief:'日常说 get 或 win',formal:'garner',natural:'get',
explanation:'garner 是新闻/书面用语。日常说 get / attract / win / pick up / earn。',
exBad:'The campaign garnered significant attention.',exGood:'The campaign got a lot of attention.',whenFormal:'新闻：garnered widespread support. 学术：garnered acclaim.'},
{id:'leverage-use',type:'register',title:'leverage → use / tap into',brief:'corporate jargon 高频词',formal:'leverage',natural:'use / tap into',
explanation:'leverage 是商业黑话。日常说 use / make the most of / tap into / take advantage of。',
exBad:'We should leverage our existing user base.',exGood:'We should make the most of our existing users.',whenFormal:'商业提案中很常见，但仍属黑话。能用 use 替代就替代。'},
{id:'necessitate-need',type:'register',title:'necessitate → need / require',brief:'日常说 need 或 require',formal:'necessitate',natural:'need',
explanation:'necessitate 极其正式。日常说 need / require / mean we have to / call for。',
exBad:'The situation necessitates immediate action.',exGood:'The situation needs immediate action.',whenFormal:'学术：This necessitates further investigation. 法律。'},
{id:'notify-tell',type:'register',title:'notify → tell / let know',brief:'日常说 tell 或 let you know',formal:'notify',natural:'tell / let know',
explanation:'notify 偏正式/官方。日常说 tell / let you know / give you a heads-up。',
exBad:'I will notify you of the results.',exGood:'I\'ll let you know how it goes.',whenFormal:'官方通知：You will be notified by email. 系统：notify the admin.'},
{id:'optimal-best',type:'register',title:'optimal → best',brief:'日常说 best 或 ideal',formal:'optimal',natural:'best',
explanation:'optimal 是技术/学术用语。日常说 best / ideal / most efficient。',
exBad:'What\'s the optimal time to schedule the call?',exGood:'When\'s the best time for a call?',whenFormal:'工程：optimal performance. 学术：optimal conditions.'},
{id:'paramount-top',type:'register',title:'paramount → top / most important',brief:'日常说 most important 或 top priority',formal:'paramount',natural:'most important',
explanation:'paramount 极其正式庄重。日常说 most important / top priority / crucial / key。',
exBad:'Safety is of paramount importance.',exGood:'Safety is the top priority.',whenFormal:'法律声明/官方政策。用来强调最高优先级。'},
{id:'procure-get',type:'register',title:'procure → get / buy',brief:'日常说 get 或 buy',formal:'procure',natural:'get / buy',
explanation:'procure 是采购/正式获取用语。日常说 get / buy / source / pick up。',
exBad:'We need to procure additional supplies.',exGood:'We need to get more supplies.',whenFormal:'采购：procurement department. 政府：procure goods and services.'},
{id:'prohibit-ban',type:'register',title:'prohibit → ban / not allow',brief:'日常说 ban 或 not allowed',formal:'prohibit',natural:'ban / not allow',
explanation:'prohibit 是法律/规定用语。日常说 ban / not allowed / can\'t / against the rules。',
exBad:'Smoking is prohibited in this area.',exGood:'No smoking here. / You can\'t smoke here.',whenFormal:'法规告示：Prohibited by law. 这种正式场景下 prohibit 完全合适。'},
{id:'remuneration-pay',type:'register',title:'remuneration → pay / salary',brief:'日常说 pay 或 salary',formal:'remuneration',natural:'pay',
explanation:'remuneration 是 HR/法律用语。日常说 pay / salary / compensation / what they\'re paying。',
exBad:'The remuneration for this role is competitive.',exGood:'The pay is competitive.',whenFormal:'招聘 JD：remuneration package. 合同：agreed remuneration.'},
{id:'substantiate-prove',type:'register',title:'substantiate → back up / prove',brief:'日常说 back up 或 prove',formal:'substantiate',natural:'back up / prove',
explanation:'substantiate 是法律/学术用语，意为"提供证据支持"。日常说 back up / prove / support / show evidence。',
exBad:'Can you substantiate your claims?',exGood:'Can you back that up?',whenFormal:'法律：substantiate the allegations. 学术论文。'},
{id:'validate-check',type:'register',title:'validate → check / confirm',brief:'日常说 check 或 confirm',formal:'validate',natural:'check / confirm',
explanation:'validate 偏技术/正式。日常说 check / confirm / make sure / verify。',
exBad:'Please validate your email address.',exGood:'Please confirm your email.',whenFormal:'技术：validate the input. 心理：validate someone\'s feelings（这个用法很自然）。'},
{id:'disseminate-share',type:'register',title:'disseminate → share / spread',brief:'日常说 share 或 put out',formal:'disseminate',natural:'share / spread',
explanation:'disseminate 是学术/机构用语。日常说 share / spread / put out / send around / get the word out。',
exBad:'We need to disseminate this information.',exGood:'We need to get the word out.',whenFormal:'学术：disseminate research findings. 政策：disseminate guidelines.'},
{id:'elucidate-explain',type:'register',title:'elucidate → explain / spell out',brief:'日常说 explain 或 clarify',formal:'elucidate',natural:'explain',
explanation:'elucidate 极其正式/学术。日常说 explain / clarify / spell out / shed light on / break down。',
exBad:'Allow me to elucidate the matter.',exGood:'Let me explain. / Let me break it down.',whenFormal:'学术写作：to elucidate the mechanism. 几乎不在口语中使用。'},
{id:'stipulate-require',type:'register',title:'stipulate → require / say',brief:'日常说 require 或 say',formal:'stipulate',natural:'require / say',
explanation:'stipulate 是合同/法律用语，意为"规定、明确要求"。日常说 require / say / ask for / spell out。',
exBad:'The contract stipulates a 30-day notice period.',exGood:'The contract says you need to give 30 days\' notice.',whenFormal:'合同：as stipulated herein. 法规：the law stipulates.'},
{id:'compensate-pay',type:'register',title:'compensate → pay / make up for',brief:'日常说 pay 或 make up for',formal:'compensate',natural:'pay / make up for',
explanation:'compensate 偏正式。金钱补偿说 pay / reimburse。弥补错误说 make up for / make it right。',
exBad:'We will compensate you for the inconvenience.',exGood:'We\'ll make it up to you.',whenFormal:'法律：compensate for damages. HR：compensation package.'},
{id:'consolidate-combine',type:'register',title:'consolidate → combine / bring together',brief:'日常说 combine 或 merge',formal:'consolidate',natural:'combine / pull together',
explanation:'consolidate 偏商务/正式。日常说 combine / merge / pull together / bring together。',
exBad:'We need to consolidate our resources.',exGood:'We need to pull our resources together.',whenFormal:'财务：consolidated report. 商业战略：consolidate market position.'},
{id:'deteriorate-get-worse',type:'register',title:'deteriorate → get worse',brief:'日常说 get worse 或 go downhill',formal:'deteriorate',natural:'get worse',
explanation:'deteriorate 偏医学/正式。日常说 get worse / go downhill / fall apart / decline。',
exBad:'The situation has deteriorated significantly.',exGood:'Things have gotten a lot worse.',whenFormal:'医学：the patient\'s condition deteriorated. 正式报告。'},
{id:'elaborate-explain',type:'register',title:'elaborate → go into detail / say more',brief:'日常说 tell me more 或 go on',formal:'elaborate',natural:'say more / go into detail',
explanation:'elaborate 偏正式。日常说 say more about that / go into detail / expand on that / tell me more。',
exBad:'Could you elaborate on your proposal?',exGood:'Could you say more about that?',whenFormal:'会议/正式讨论中 elaborate 可以用。面试：Care to elaborate?'},
{id:'formulate-come-up-with',type:'register',title:'formulate → come up with',brief:'日常说 come up with 或 put together',formal:'formulate',natural:'come up with',
explanation:'formulate 偏正式/学术。日常说 come up with / put together / work out / draft。',
exBad:'We need to formulate a strategy.',exGood:'We need to come up with a plan.',whenFormal:'科学：formulate a hypothesis. 政策：formulate guidelines.'},
{id:'scrutinize-look-at',type:'register',title:'scrutinize → look closely at',brief:'日常说 look closely at 或 go through',formal:'scrutinize',natural:'look closely at',
explanation:'scrutinize 偏正式/调查语境。日常说 look closely at / go through / go over / check carefully / review。',
exBad:'We should scrutinize every detail.',exGood:'We should go through every detail carefully.',whenFormal:'审计：scrutinize the accounts. 新闻：scrutinized by the public.'},
{id:'collaborate-work-together',type:'register',title:'collaborate → work together',brief:'日常说 work together 或 team up',formal:'collaborate',natural:'work together',
explanation:'collaborate 虽然不算很正式，但在日常对话中 work together / team up / partner up 更自然。',
exBad:'We should collaborate on this project.',exGood:'Let\'s work on this together.',whenFormal:'商务邮件和项目管理中 collaborate 完全可以用。'},
{id:'supplement-add',type:'register',title:'supplement → add to / on top of',brief:'日常说 add to 或 on top of',formal:'supplement',natural:'add to',
explanation:'supplement 偏学术/营养品领域。日常说 add to / on top of / along with / back up with。',
exBad:'We should supplement the report with more data.',exGood:'We should add more data to the report.',whenFormal:'医学：dietary supplements. 学术：supplement the existing research.'},
{id:'underpin-support',type:'register',title:'underpin → support / be the basis of',brief:'日常说 support 或 behind',formal:'underpin',natural:'support / behind',
explanation:'underpin 是学术/分析用语。日常说 support / behind / at the core of / drive。',
exBad:'These values underpin our strategy.',exGood:'These values are behind everything we do.',whenFormal:'学术：the theory that underpins this approach. 经济分析。'},
{id:'aggregate-total',type:'register',title:'aggregate → total / all together',brief:'日常说 total 或 altogether',formal:'aggregate',natural:'total',
explanation:'aggregate 是统计/技术用语。日常说 total / combined / altogether / overall。',
exBad:'The aggregate revenue exceeded expectations.',exGood:'Total revenue beat expectations.',whenFormal:'数据分析：aggregate data. 财务：in aggregate.'},
{id:'exemplify-show',type:'register',title:'exemplify → show / be a great example of',brief:'日常说 show 或 is a good example',formal:'exemplify',natural:'show',
explanation:'exemplify 偏学术/书面。日常说 show / is a good example of / capture / embody。',
exBad:'This project exemplifies our commitment to quality.',exGood:'This project really shows our commitment to quality.',whenFormal:'学术论文：This case exemplifies the trend. 正式演讲。'},
{id:'inaugurate-launch',type:'register',title:'inaugurate → launch / open',brief:'日常说 launch 或 open',formal:'inaugurate',natural:'launch / open / kick off',
explanation:'inaugurate 极其正式/典礼用语。日常说 launch / open / kick off / start up / unveil。',
exBad:'We will inaugurate the new office next week.',exGood:'We\'re opening the new office next week.',whenFormal:'总统就职：inaugurated as president. 重大设施剪彩。'},

// ── FINAL ADDITIONS ──
{id:'appraise-apprise',type:'confusable',title:'appraise · apprise',brief:'评估 vs 通知',words:[
{word:'appraise',def:'评估，鉴定',note:'judge the value',examples:['appraise the property','performance appraisal']},
{word:'apprise',def:'通知，告知',note:'let someone know',examples:['apprise them of the situation','keep me apprised']}
],trap:'appraise = 给出评价。apprise = 给出信息。'},
{id:'censor-censure',type:'confusable',title:'censor · censure',brief:'审查删减 vs 公开谴责',words:[
{word:'censor',def:'审查，删改',note:'删掉不合适的内容',examples:['censor the press','censored content']},
{word:'censure',def:'谴责，正式批评',note:'公开表示反对',examples:['a vote of censure','censured by the committee']}
],trap:'censor = 动剪刀（删改）。censure = 动嘴巴（批评）。'},
{id:'compliant-complacent',type:'confusable',title:'compliant · complacent',brief:'合规服从的 vs 自满的',words:[
{word:'compliant',def:'合规的，服从的',note:'按规矩来',examples:['fully compliant','GDPR-compliant']},
{word:'complacent',def:'自满的，沾沾自喜的',note:'觉得已经够好了',examples:['don\'t get complacent','complacent about safety']}
],trap:'compliant = 好的（遵守规则）。complacent = 危险的（放松警惕）。'},
{id:'canvas-canvass',type:'confusable',title:'canvas · canvass',brief:'帆布/画布 vs 拉票/征求意见',words:[
{word:'canvas',def:'帆布，画布',note:'物理材料',examples:['canvas bag','oil on canvas']},
{word:'canvass',def:'征求意见，拉票',note:'到处去问',examples:['canvass for votes','canvass opinions']}
],trap:'canvas 少一个 s = 布料。canvass 多一个 s = 到处拉票。'},
{id:'tortuous-torturous',type:'confusable',title:'tortuous · torturous',brief:'曲折的 vs 折磨人的',words:[
{word:'tortuous',def:'曲折的，复杂的',note:'弯弯绕绕',examples:['a tortuous path','tortuous negotiations']},
{word:'torturous',def:'折磨人的，痛苦的',note:'= like torture',examples:['a torturous experience','torturous heat']}
],trap:'tortuous = 路很弯（复杂）。torturous = 人很惨（折磨）。'},
{id:'dependable-dependent',type:'confusable',title:'dependable · dependent',brief:'可靠的 vs 依赖的',words:[
{word:'dependable',def:'可靠的，靠得住的',note:'你可以依赖他',examples:['a dependable colleague','dependable service']},
{word:'dependent',def:'依赖的，取决于的',note:'需要依赖别人',examples:['dependent on funding','a dependent child']}
],trap:'dependable = 别人可以靠你（褒义）。dependent = 你得靠别人（中性）。'},

{id:'kan-bu-chulai',type:'calque',title:'"看不出来" ≠ look not out come',brief:'英文表达看不出区别用 can\'t tell',chinese:'完全看不出来',chinglish:'Totally look not out come.',natural:'I can\'t even tell. / You can\'t tell at all.',
explanation:'"看不出来"是结果补语结构，英文没有对应。用 can\'t tell / wouldn\'t know / hard to notice。',
more:[{zh:'看不出来她化妆了',bad:'Can\'t look out she put makeup.',good:'You can\'t even tell she\'s wearing makeup.'},{zh:'修好了完全看不出来',bad:'Fixed, totally look not out.',good:'You\'d never know it was broken.'}]},
{id:'pa-shenme',type:'calque',title:'"怕什么" ≠ afraid what',brief:'中文的反问鼓励需要换个说法',chinese:'怕什么，大不了重来',chinglish:'Afraid what? Big not finished start again.',natural:'What\'s there to lose? Worst case, we start over.',
explanation:'"怕什么"在中文是鼓励人不要怕。英文说 what\'s there to lose / what\'s the worst that could happen / go for it。',
more:[{zh:'怕什么直接去问',bad:'Afraid what, directly go ask.',good:'Just go ask — what\'s the worst that could happen?'},{zh:'有什么好怕的',bad:'Have what good afraid?',good:'There\'s nothing to worry about.'}]},
{id:'zhaogu-ziji',type:'calque',title:'"照顾好自己" 直译太重',brief:'take care 就够了',chinese:'你在外面照顾好自己',chinglish:'You at outside take good care of yourself.',natural:'Take care out there.',
explanation:'"照顾好自己"在中文很常用。英文 take care 就够了，不需要加 good 或 of yourself。完整版 take care of yourself 也可以但不必每次都说。',
more:[{zh:'一个人要照顾好自己',bad:'One person must take good care of yourself.',good:'Look after yourself.'},{zh:'出门在外照顾好自己',bad:'Go out at outside, take good care.',good:'Stay safe out there.'}]},
{id:'chu-chai',type:'calque',title:'"出差" ≠ go out difference',brief:'business trip 是固定搭配',chinese:'下周我要出差',chinglish:'Next week I need go out difference.',natural:'I\'m going on a business trip next week.',
explanation:'"出差"= go on a business trip / travel for work。不要逐字翻译。',
more:[{zh:'你经常出差吗',bad:'You often go out difference?',good:'Do you travel much for work?'},{zh:'出差回来了',bad:'Go out difference come back.',good:'I\'m back from my trip.'}]},
{id:'xie-xie-guanxin',type:'calque',title:'"谢谢关心" ≠ thanks for caring',brief:'caring 的语感和"关心"不完全对等',chinese:'谢谢你的关心',chinglish:'Thank you for your caring.',natural:'That\'s sweet of you. / Thanks for checking in.',
explanation:'"关心"在中文很日常，但 caring 在英文偏正式或亲密。日常感谢关心说 thanks for asking / that\'s nice of you / I appreciate you checking in。',
more:[{zh:'谢谢大家的关心',bad:'Thanks for everyone\'s caring.',good:'Thanks for all the kind words.'},{zh:'谢谢你一直关心我',bad:'Thank you always caring me.',good:'I really appreciate you always looking out for me.'}]},
{id:'sheng-qi',type:'calque',title:'"生气" ≠ born air / produce gas',brief:'生气的正确翻译',chinese:'别生气了',chinglish:'Don\'t born air.',natural:'Don\'t be upset. / Don\'t be mad.',
explanation:'"生气"= angry / upset / mad。千万不要逐字翻译成 born air 或 produce gas（产生气体）。',
more:[{zh:'他生我的气了',bad:'He born my air.',good:'He\'s upset with me.'},{zh:'别跟他生气不值得',bad:'Don\'t with him born air, not worth.',good:'Don\'t let him get to you — it\'s not worth it.'}]},

{id:'allocate-assign',type:'register',title:'allocate → set aside / assign',brief:'日常说 set aside 或 put towards',formal:'allocate',natural:'set aside / assign',
explanation:'allocate 是预算/资源管理用语。日常说 set aside / put towards / assign / earmark。',
exBad:'We need to allocate more budget to marketing.',exGood:'We need to put more budget towards marketing.',whenFormal:'财务报告：allocate funds. 项目管理：allocate resources.'},
{id:'delineate-outline',type:'register',title:'delineate → outline / spell out',brief:'日常说 outline 或 lay out',formal:'delineate',natural:'outline / spell out',
explanation:'delineate 极其正式/学术。日常说 outline / spell out / lay out / map out / define。',
exBad:'Let me delineate the project scope.',exGood:'Let me outline what\'s in scope.',whenFormal:'学术：delineate the boundaries. 法律：delineate responsibilities.'},
{id:'relinquish-give-up',type:'register',title:'relinquish → give up / let go of',brief:'日常说 give up 或 hand over',formal:'relinquish',natural:'give up / let go of',
explanation:'relinquish 极其正式/法律。日常说 give up / let go of / hand over / step down from。',
exBad:'She relinquished her position.',exGood:'She stepped down from her role.',whenFormal:'法律：relinquish ownership. 政治：relinquish power.'},
{id:'exacerbate-make-worse',type:'register',title:'exacerbate → make worse',brief:'日常说 make worse 或 add fuel to',formal:'exacerbate',natural:'make worse',
explanation:'exacerbate 是新闻/正式用语。日常说 make worse / add fuel to the fire / aggravate / pile on。',
exBad:'The delay will exacerbate the problem.',exGood:'The delay is just going to make things worse.',whenFormal:'医学：exacerbate symptoms. 新闻：exacerbate tensions.'},
{id:'proliferate-spread',type:'register',title:'proliferate → spread / pop up everywhere',brief:'日常说 spread 或 pop up',formal:'proliferate',natural:'spread / pop up',
explanation:'proliferate 是学术/新闻用语。日常说 spread / pop up everywhere / keep coming / multiply。',
exBad:'Misinformation has proliferated online.',exGood:'Misinformation has been spreading like crazy online.',whenFormal:'学术：cells proliferate. 政策分析：weapons proliferation.'},
{id:'culminate-lead-to',type:'register',title:'culminate → lead to / end with',brief:'日常说 lead to 或 end up',formal:'culminate',natural:'lead to / end with',
explanation:'culminate 偏正式/叙事。日常说 lead to / end with / end up / build up to / come down to。',
exBad:'Months of work culminated in a successful launch.',exGood:'Months of work paid off — we launched successfully.',whenFormal:'正式叙述：culminated in a historic agreement. 学术论文。'}
];

const DB=[
// ══════════════════════════════════════
// CONFUSABLES (70)
// ══════════════════════════════════════
{id:'critical-crucial-cruel',type:'confusable',title:'critical · crucial · cruel',brief:'批判 / 关键 / 残忍 — 三个完全不同的方向',words:[
{word:'critical',pron:'/ˈkrɪtɪkəl/',def:'批判性的；危急的',note:'强调分析判断或紧急状态',examples:['critical thinking','critical condition','critical of the plan']},
{word:'crucial',pron:'/ˈkruːʃəl/',def:'至关重要的，决定性的',note:'缺了就完蛋，不可或缺',examples:['a crucial decision','This is crucial']},
{word:'cruel',pron:'/ˈkruːəl/',def:'残忍的，冷酷的',note:'跟前两个完全无关，只是长得像',examples:['a cruel joke','Don\'t be cruel']}
],trap:'"He is critical" = 他情况危急 / 他很挑剔，不是"他很关键"。关键 = crucial 或 key。'},
{id:'affect-effect',type:'confusable',title:'affect · effect',brief:'动词"影响" vs 名词"效果"',words:[
{word:'affect',pron:'/əˈfɛkt/',def:'影响（动词）',note:'A for Action — affect 是动作',examples:['The rain affected our plans','How does this affect you?']},
{word:'effect',pron:'/ɪˈfɛkt/',def:'效果，结果（名词）',note:'E for End result — effect 是结果',examples:['The effect was immediate','side effects','cause and effect']}
],trap:'effect 偶尔做动词="实现"（effect change），但极罕见。记住 affect=动词 effect=名词 就够了。'},
{id:'complement-compliment',type:'confusable',title:'complement · compliment',brief:'补充搭配 vs 赞美恭维',words:[
{word:'complement',pron:'/ˈkɑːmpləmənt/',def:'补充，搭配',note:'complement = complete，使完整',examples:['The wine complements the cheese','They complement each other']},
{word:'compliment',pron:'/ˈkɑːmpləmənt/',def:'赞美，恭维',note:'说好话',examples:['She complimented my work','Take it as a compliment']}
],trap:'complimentary = 免费赠送的！complementary = 互补的。形容词也容易混。'},
{id:'principal-principle',type:'confusable',title:'principal · principle',brief:'主要的 / 校长 vs 原则',words:[
{word:'principal',pron:'/ˈprɪnsəpəl/',def:'主要的（adj）/ 校长（n）',note:'the main one',examples:['the principal reason','school principal']},
{word:'principle',pron:'/ˈprɪnsəpəl/',def:'原则，准则（永远是名词）',note:'a rule',examples:['a matter of principle','design principles','in principle']}
],trap:'principAL = A person. principLE = a ruLE.'},
{id:'discrete-discreet',type:'confusable',title:'discrete · discreet',brief:'离散的 vs 谨慎的 — 发音完全一样',words:[
{word:'discrete',pron:'/dɪˈskriːt/',def:'离散的，独立的',note:'数学/技术用语',examples:['discrete data points','discrete components']},
{word:'discreet',pron:'/dɪˈskriːt/',def:'谨慎的，低调的',note:'社交用语，保密不张扬',examples:['Please be discreet','a discreet inquiry']}
],trap:'发音完全相同 /dɪˈskriːt/。设计师常用 discrete（离散元素），社交场合用 discreet（低调行事）。'},
{id:'assure-ensure-insure',type:'confusable',title:'assure · ensure · insure',brief:'向人保证 / 确保发生 / 买保险',words:[
{word:'assure',pron:'/əˈʃʊr/',def:'向某人保证',note:'后面一定跟人',examples:['I assure you it\'s fine','Let me assure you']},
{word:'ensure',pron:'/ɪnˈʃʊr/',def:'确保某事发生',note:'后面跟事情',examples:['ensure the door is locked','to ensure quality']},
{word:'insure',pron:'/ɪnˈʃʊr/',def:'投保，上保险',note:'跟钱和风险有关',examples:['Is your car insured?','insure against loss']}
],trap:'assure 对象是人（让人放心），ensure 对象是事（让事情发生）。'},
{id:'adapt-adopt',type:'confusable',title:'adapt · adopt',brief:'改造适应 vs 采纳接受',words:[
{word:'adapt',pron:'/əˈdæpt/',def:'适应；改编',note:'修改已有的来适应新情况',examples:['adapt to the environment','adapt for mobile']},
{word:'adopt',pron:'/əˈdɑːpt/',def:'采纳；收养',note:'接受全新的东西',examples:['adopt a new strategy','widely adopted']}
],trap:'adapt = 改（已有的），adopt = 接受（新的）。'},
{id:'economic-economical',type:'confusable',title:'economic · economical',brief:'经济学的 vs 省钱的',words:[
{word:'economic',pron:'/ˌɛkəˈnɑːmɪk/',def:'经济的，经济学的',note:'跟经济体系、政策有关',examples:['economic growth','economic crisis']},
{word:'economical',pron:'/ˌɛkəˈnɑːmɪkəl/',def:'节约的，划算的',note:'跟省钱效率有关',examples:['an economical car','economical use of space']}
],trap:'economic crisis ✓（经济危机）economical crisis ✗。省钱用 economical。'},
{id:'sensible-sensitive',type:'confusable',title:'sensible · sensitive',brief:'明智的 vs 敏感的 — 最容易搞反',words:[
{word:'sensible',pron:'/ˈsɛnsəbəl/',def:'明智的，合理的',note:'形容人靠谱务实',examples:['a sensible decision','Be sensible']},
{word:'sensitive',pron:'/ˈsɛnsətɪv/',def:'敏感的',note:'容易受影响',examples:['sensitive skin','a sensitive topic']}
],trap:'中文"敏感"= sensitive，"理性/明智"= sensible。sensible = 有sense的 = 明智的。'},
{id:'continual-continuous',type:'confusable',title:'continual · continuous',brief:'反复发生（有间断）vs 不间断',words:[
{word:'continual',pron:'/kənˈtɪnjuəl/',def:'频繁反复的',note:'有间隔，一次又一次',examples:['continual interruptions','continual complaints']},
{word:'continuous',pron:'/kənˈtɪnjuəs/',def:'持续不断的',note:'没有中断',examples:['continuous noise','continuous monitoring']}
],trap:'continuous rain = 一直在下。continual rain = 下下停停反复来。'},
{id:'imply-infer',type:'confusable',title:'imply · infer',brief:'暗示（说者）vs 推断（听者）',words:[
{word:'imply',pron:'/ɪmˈplaɪ/',def:'暗示，言下之意',note:'说话者的动作',examples:['Are you implying I\'m wrong?','The data implies a trend']},
{word:'infer',pron:'/ɪnˈfɜːr/',def:'推断，推理',note:'听者的动作',examples:['I inferred from his tone...','What can we infer?']}
],trap:'方向相反！Speaker implies, Listener infers.'},
{id:'precede-proceed',type:'confusable',title:'precede · proceed',brief:'在前面 vs 继续进行',words:[
{word:'precede',pron:'/prɪˈsiːd/',def:'在…之前，先于',note:'pre = before',examples:['preceded by a brief intro','the preceding chapter']},
{word:'proceed',pron:'/prəˈsiːd/',def:'继续，进行',note:'pro = forward',examples:['proceed with the plan','proceed to gate 5']}
],trap:'precedent（先例）来自 precede。procedure（程序）来自 proceed。'},
{id:'adverse-averse',type:'confusable',title:'adverse · averse',brief:'不利的（事物）vs 反感的（人）',words:[
{word:'adverse',pron:'/ˈædvɜːrs/',def:'不利的，有害的',note:'描述外部条件',examples:['adverse weather','adverse effects']},
{word:'averse',pron:'/əˈvɜːrs/',def:'反感的，不乐意的',note:'描述人的态度',examples:['risk-averse','not averse to the idea']}
],trap:'risk-averse ✓ risk-adverse ✗。averse 描述人，adverse 描述事。'},
{id:'elicit-illicit',type:'confusable',title:'elicit · illicit',brief:'引出（动词）vs 非法的（形容词）',words:[
{word:'elicit',pron:'/ɪˈlɪsɪt/',def:'引出，引发',note:'让隐藏的浮出水面',examples:['elicit a response','elicit information']},
{word:'illicit',pron:'/ɪˈlɪsɪt/',def:'非法的，不正当的',note:'= illegal',examples:['illicit drugs','illicit trade']}
],trap:'词性不同：elicit 是动词，illicit 是形容词。'},
{id:'comprise-compose',type:'confusable',title:'comprise · compose',brief:'包含（大→小）vs 组成（小→大）',words:[
{word:'comprise',pron:'/kəmˈpraɪz/',def:'包含，由…组成',note:'大的 comprise 小的',examples:['The team comprises 5 people','comprises 12 chapters']},
{word:'compose',pron:'/kəmˈpoʊz/',def:'组成，构成',note:'小的 compose 大的，常被动',examples:['composed of 5 people','composed of H and O']}
],trap:'"is comprised of" 有争议。最安全：comprises X 或 is composed of X。'},
{id:'farther-further',type:'confusable',title:'farther · further',brief:'物理距离 vs 抽象程度',words:[
{word:'farther',pron:'/ˈfɑːrðər/',def:'更远（物理距离）',note:'far 的比较级，实际距离',examples:['farther down the road','How much farther?']},
{word:'further',pron:'/ˈfɜːrðər/',def:'更进一步（抽象）',note:'程度、进展',examples:['further discussion','further information','look into it further']}
],trap:'口语中 further 可以通吃两种用法，但 farther 只用于物理距离。'},
{id:'historic-historical',type:'confusable',title:'historic · historical',brief:'历史性的（重要）vs 历史的（相关）',words:[
{word:'historic',pron:'/hɪˈstɔːrɪk/',def:'具有历史意义的',note:'值得被记住的',examples:['a historic moment','a historic victory']},
{word:'historical',pron:'/hɪˈstɔːrɪkəl/',def:'与历史有关的',note:'关于历史这个学科',examples:['historical data','historical research','historical fiction']}
],trap:'historic event = 改变历史的大事。historical event = 历史上发生过的事。'},
{id:'stationary-stationery',type:'confusable',title:'stationary · stationery',brief:'静止不动的 vs 文具',words:[
{word:'stationary',pron:'/ˈsteɪʃənɛri/',def:'静止的，不动的',note:'站着不动 — stationAry',examples:['remain stationary','a stationary bike']},
{word:'stationery',pron:'/ˈsteɪʃənɛri/',def:'文具，信纸',note:'写字用的 — stationEry',examples:['office stationery','stationery shop']}
],trap:'记忆：stationEry 的 E = Envelope（信封），文具。stationAry 的 A = At rest（静止）。'},
{id:'personal-personnel',type:'confusable',title:'personal · personnel',brief:'个人的 vs 人事/员工',words:[
{word:'personal',pron:'/ˈpɜːrsənəl/',def:'个人的，私人的',note:'重音在第一音节',examples:['personal opinion','personal space']},
{word:'personnel',pron:'/ˌpɜːrsəˈnɛl/',def:'人事部门；全体员工',note:'重音在第三音节',examples:['personnel department','military personnel']}
],trap:'发音不同！personal /ˈpɜːrsənl/ vs personnel /ˌpɜːrsəˈnel/。很多人读成一样。'},
{id:'conscience-conscious',type:'confusable',title:'conscience · conscious',brief:'良心（名词）vs 有意识的（形容词）',words:[
{word:'conscience',pron:'/ˈkɑːnʃəns/',def:'良心，道德感',note:'内心的道德判断',examples:['a guilty conscience','in good conscience']},
{word:'conscious',pron:'/ˈkɑːnʃəs/',def:'有意识的，清醒的',note:'aware，知道的',examples:['conscious decision','self-conscious','barely conscious']}
],trap:'conscience 是名词（良心），conscious 是形容词（有意识的）。词性不同。'},
{id:'desert-dessert',type:'confusable',title:'desert · dessert',brief:'沙漠 / 抛弃 vs 甜点',words:[
{word:'desert',pron:'/ˈdɛzərt/',def:'沙漠（n）/ 抛弃（v）',note:'一个 s — 沙漠很干，少一个',examples:['the Sahara Desert','desert the army']},
{word:'dessert',pron:'/dɪˈzɜːrt/',def:'甜点',note:'两个 s — 甜点要多来一份',examples:['What\'s for dessert?','dessert menu']}
],trap:'记忆：dessert 两个 s，因为甜点（Sweet Stuff）你想要更多。'},
{id:'loose-lose',type:'confusable',title:'loose · lose',brief:'松的 vs 失去 — 拼写高频错误',words:[
{word:'loose',pron:'/luːs/',def:'松的，宽松的（形容词）',note:'跟 goose 押韵 /luːs/',examples:['loose fit','a loose screw','set loose']},
{word:'lose',pron:'/luːz/',def:'失去，输掉（动词）',note:'跟 choose 押韵 /luːz/',examples:['lose your keys','lose the game','nothing to lose']}
],trap:'loose 是形容词（松的），lose 是动词（丢失）。发音也不同：s vs z。'},
{id:'quiet-quite',type:'confusable',title:'quiet · quite',brief:'安静的 vs 相当 — 最后两个字母相反',words:[
{word:'quiet',pron:'/ˈkwaɪət/',def:'安静的',note:'qui-ET，重音在后',examples:['a quiet room','Keep quiet','quiet confidence']},
{word:'quite',pron:'/kwaɪt/',def:'相当，十分',note:'一个音节 /kwaɪt/',examples:['quite good','quite a challenge','not quite']}
],trap:'拼写对调：quiet = qui+et, quite = qui+te。发音完全不同。'},
{id:'accept-except',type:'confusable',title:'accept · except',brief:'接受 vs 除了',words:[
{word:'accept',pron:'/ækˈsɛpt/',def:'接受',note:'ac- = toward，迎向',examples:['accept the offer','widely accepted']},
{word:'except',pron:'/ɪkˈsɛpt/',def:'除了，排除',note:'ex- = out，排出去',examples:['everyone except me','except for the price']}
],trap:'accept = 收进来，except = 排出去。方向相反。'},
{id:'advice-advise',type:'confusable',title:'advice · advise',brief:'建议（名词）vs 建议（动词）',words:[
{word:'advice',pron:'/ədˈvaɪs/',def:'建议（名词）',note:'不可数，读 /ədˈvaɪs/',examples:['a piece of advice','take my advice']},
{word:'advise',pron:'/ədˈvaɪz/',def:'建议（动词）',note:'读 /ədˈvaɪz/',examples:['I\'d advise caution','Please advise']}
],trap:'advice 是名词用 c，advise 是动词用 s。跟 practice/practise 同一规律。'},
{id:'breath-breathe',type:'confusable',title:'breath · breathe',brief:'呼吸（名词）vs 呼吸（动词）',words:[
{word:'breath',pron:'/brɛθ/',def:'呼吸（名词）',note:'短元音 /brɛθ/',examples:['take a deep breath','out of breath']},
{word:'breathe',pron:'/briːð/',def:'呼吸（动词）',note:'长元音 /briːð/，多了 e',examples:['breathe deeply','hard to breathe']}
],trap:'名词 breath 没有 e，动词 breathe 多一个 e。发音也不同。'},
{id:'eminent-imminent',type:'confusable',title:'eminent · imminent',brief:'杰出的 vs 即将发生的',words:[
{word:'eminent',pron:'/ˈɛmɪnənt/',def:'杰出的，著名的',note:'E = Excellent',examples:['an eminent scholar','eminent domain']},
{word:'imminent',pron:'/ˈɪmɪnənt/',def:'即将发生的',note:'I = Incoming',examples:['imminent danger','an imminent deadline']}
],trap:'eminent 描述人（杰出），imminent 描述事（即将到来）。'},
{id:'moral-morale',type:'confusable',title:'moral · morale',brief:'道德的 vs 士气',words:[
{word:'moral',pron:'/ˈmɔːrəl/',def:'道德的（adj）/ 寓意（n）',note:'重音在第一音节',examples:['moral values','the moral of the story']},
{word:'morale',pron:'/məˈræl/',def:'士气，精神状态',note:'重音在第二音节 /məˈræl/',examples:['team morale','boost morale']}
],trap:'moral 讲对错，morale 讲心情。发音重音不同。'},
{id:'perspective-prospective',type:'confusable',title:'perspective · prospective',brief:'视角 vs 预期的/未来的',words:[
{word:'perspective',pron:'/pərˈspɛktɪv/',def:'视角，观点',note:'per = through，透过来看',examples:['from my perspective','put things in perspective']},
{word:'prospective',pron:'/prəˈspɛktɪv/',def:'预期的，未来的',note:'pro = forward，向前看',examples:['prospective clients','prospective buyers']}
],trap:'perspective = 怎么看（观点），prospective = 将来的（潜在客户）。'},
{id:'thorough-through-though',type:'confusable',title:'thorough · through · though',brief:'彻底的 vs 通过 vs 虽然',words:[
{word:'thorough',pron:'/ˈθɜːroʊ/',def:'彻底的，详尽的',note:'/ˈθʌrə/ 两个音节',examples:['a thorough review','thorough research']},
{word:'through',pron:'/θruː/',def:'通过，穿过',note:'/θruː/ 一个音节',examples:['walk through the door','go through the process']},
{word:'though',pron:'/ðoʊ/',def:'虽然，不过',note:'/ðoʊ/ 一个音节',examples:['It\'s hard, though','even though']}
],trap:'三个词发音完全不同，但拼写让人抓狂。thorough 最长 = 最彻底。'},
{id:'weather-whether',type:'confusable',title:'weather · whether',brief:'天气 vs 是否',words:[
{word:'weather',pron:'/ˈwɛðər/',def:'天气',note:'有 a = 有air = 天气',examples:['nice weather','weather forecast']},
{word:'whether',pron:'/ˈwɛðər/',def:'是否',note:'= if，表示选择',examples:['whether or not','whether to go']}
],trap:'发音几乎一样。weather 跟天气有关，whether 跟选择有关。'},
{id:'cite-site-sight',type:'confusable',title:'cite · site · sight',brief:'引用 vs 场地 vs 视觉',words:[
{word:'cite',pron:'/saɪt/',def:'引用，举例',note:'学术/法律用语',examples:['cite a source','cite an example']},
{word:'site',pron:'/saɪt/',def:'地点，网站',note:'一个地方',examples:['construction site','website']},
{word:'sight',pron:'/saɪt/',def:'视力，景象',note:'看见的东西',examples:['a beautiful sight','out of sight','love at first sight']}
],trap:'三个词发音完全一样 /saɪt/。只能靠语境。'},
{id:'coarse-course',type:'confusable',title:'coarse · course',brief:'粗糙的 vs 课程/路线',words:[
{word:'coarse',pron:'/kɔːrs/',def:'粗糙的，粗俗的',note:'多了一个 a',examples:['coarse texture','coarse language']},
{word:'course',pron:'/kɔːrs/',def:'课程；路线；当然',note:'of course!',examples:['online course','main course','of course']}
],trap:'coarse 有 a = 粗糙（rough）。course 没有 a = 课程/路线。'},
{id:'formerly-formally',type:'confusable',title:'formerly · formally',brief:'以前 vs 正式地',words:[
{word:'formerly',pron:'/ˈfɔːrmərli/',def:'以前，从前',note:'former + ly',examples:['formerly known as','formerly a teacher']},
{word:'formally',pron:'/ˈfɔːrməli/',def:'正式地',note:'formal + ly',examples:['formally announced','formally dressed']}
],trap:'formerly = 时间上的"从前"。formally = 方式上的"正式"。'},
{id:'alternate-alternative',type:'confusable',title:'alternate · alternative',brief:'交替的 vs 替代选项',words:[
{word:'alternate',pron:'/ˈɔːltərneɪt/',def:'交替的（adj）/ 交替（v）',note:'轮流、每隔一个',examples:['alternate days','alternate between A and B']},
{word:'alternative',pron:'/ɔːlˈtɜːrnətɪv/',def:'替代选项（n）/ 另一种的（adj）',note:'另一个选择',examples:['an alternative plan','no alternative']}
],trap:'alternate = 轮流来（A-B-A-B）。alternative = 另一个选择（A or B?）。'},
{id:'eligible-illegible',type:'confusable',title:'eligible · illegible',brief:'有资格的 vs 字迹模糊的',words:[
{word:'eligible',pron:'/ˈɛlɪdʒəbəl/',def:'有资格的，符合条件的',note:'E = Entitled（有资格）',examples:['eligible to vote','eligible candidates']},
{word:'illegible',pron:'/ɪˈlɛdʒəbəl/',def:'（字迹）难以辨认的',note:'il + legible = 不可读',examples:['illegible handwriting','almost illegible']}
],trap:'eligible = 你够格。illegible = 你的字看不清。'},
{id:'emigrate-immigrate',type:'confusable',title:'emigrate · immigrate',brief:'移出（离开）vs 移入（到达）',words:[
{word:'emigrate',pron:'/ˈɛmɪɡreɪt/',def:'移居国外，移出',note:'E = Exit，离开原籍',examples:['emigrate from China','emigrated in 2015']},
{word:'immigrate',pron:'/ˈɪmɪɡreɪt/',def:'移入，迁入',note:'I = Into，进入新国',examples:['immigrate to Singapore','immigrant population']}
],trap:'emigrate = exit（出去），immigrate = in（进来）。视角问题。'},
{id:'prescribe-proscribe',type:'confusable',title:'prescribe · proscribe',brief:'开处方/规定 vs 禁止',words:[
{word:'prescribe',pron:'/prɪˈskraɪb/',def:'开处方；规定',note:'pre = before，提前安排好',examples:['prescribe medication','prescribed reading']},
{word:'proscribe',pron:'/proʊˈskraɪb/',def:'禁止，取缔',note:'pro = against（这里），反对',examples:['proscribed organizations','proscribed behavior']}
],trap:'prescribe = 叫你做的。proscribe = 叫你别做的。一字之差，意思相反。'},
{id:'credible-creditable',type:'confusable',title:'credible · creditable',brief:'可信的 vs 值得称赞的',words:[
{word:'credible',pron:'/ˈkrɛdəbəl/',def:'可信的，可靠的',note:'你相不相信',examples:['a credible witness','hardly credible']},
{word:'creditable',pron:'/ˈkrɛdɪtəbəl/',def:'值得称赞的，不错的',note:'做得好不好',examples:['a creditable performance','creditable effort']}
],trap:'credible = 可信度。creditable = 表现值得认可。两个都是正面词但含义不同。'},
{id:'contempt-content-contend',type:'confusable',title:'contempt · content · contend',brief:'轻蔑 vs 内容/满意 vs 竞争',words:[
{word:'contempt',pron:'/kənˈtɛmpt/',def:'轻蔑，藐视',note:'看不起',examples:['treat with contempt','contempt of court']},
{word:'content',pron:'/ˈkɑːntɛnt/',def:'内容（n）/ 满意的（adj）',note:'两个发音：内容 /ˈkɒntent/，满意 /kənˈtent/',examples:['content strategy','feel content']},
{word:'contend',pron:'/kənˈtɛnd/',def:'竞争；主张',note:'争',examples:['contend for the title','I contend that...']}
],trap:'三个词拼写相近但领域完全不同。注意 content 的两个发音和两个含义。'},

// ── NEW CONFUSABLES ──
{id:'lay-lie',type:'confusable',title:'lay · lie',brief:'放置（及物）vs 躺下（不及物）— 英语母语者也搞混',words:[
{word:'lay',pron:'/leɪ/',def:'放置，搁下（及物，需要宾语）',note:'lay-laid-laid',examples:['Lay the book on the table','She laid her coat down']},
{word:'lie',pron:'/laɪ/',def:'躺下（不及物）/ 说谎',note:'lie-lay-lain（躺）/ lie-lied-lied（说谎）',examples:['I need to lie down','He lay on the grass yesterday']}
],trap:'最坑的地方：lie 的过去式是 lay！所以 "He lay down" = 他躺下了（过去式），不是放下。'},
{id:'allusion-illusion-delusion',type:'confusable',title:'allusion · illusion · delusion',brief:'暗指 vs 幻觉 vs 妄想',words:[
{word:'allusion',pron:'/əˈluːʒən/',def:'暗指，典故',note:'allude to = 含蓄提到',examples:['an allusion to Shakespeare','make an allusion']},
{word:'illusion',pron:'/ɪˈluːʒən/',def:'幻觉，错觉',note:'看上去是但其实不是',examples:['optical illusion','an illusion of control']},
{word:'delusion',pron:'/dɪˈluːʒən/',def:'妄想，错误信念',note:'真的相信了那个假象',examples:['delusions of grandeur','under the delusion that']}
],trap:'illusion = 你知道是假的（错觉）。delusion = 你以为是真的（妄想）。'},
{id:'flout-flaunt',type:'confusable',title:'flout · flaunt',brief:'蔑视规则 vs 炫耀',words:[
{word:'flout',pron:'/flaʊt/',def:'公然违反，蔑视',note:'无视规则',examples:['flout the rules','flout convention']},
{word:'flaunt',pron:'/flɔːnt/',def:'炫耀，卖弄',note:'故意展示',examples:['flaunt your wealth','if you\'ve got it, flaunt it']}
],trap:'flout = 违反（规则），flaunt = 炫耀（财富）。flout the law ✓，flaunt the law ✗。'},
{id:'wary-weary',type:'confusable',title:'wary · weary',brief:'警惕的 vs 疲惫的',words:[
{word:'wary',pron:'/ˈwɛri/',def:'警惕的，小心的',note:'= cautious，提防着',examples:['wary of strangers','be wary of scams']},
{word:'weary',pron:'/ˈwɪri/',def:'疲惫的，厌倦的',note:'= tired，累了',examples:['weary travelers','grow weary of the routine']}
],trap:'wary = 小心（带防备），weary = 很累（带厌倦）。一个字母之差。'},
{id:'ingenious-ingenuous',type:'confusable',title:'ingenious · ingenuous',brief:'巧妙的 vs 天真坦率的',words:[
{word:'ingenious',pron:'/ɪnˈdʒiːniəs/',def:'巧妙的，有独创性的',note:'genius 在里面',examples:['an ingenious solution','ingenious design']},
{word:'ingenuous',pron:'/ɪnˈdʒɛnjuəs/',def:'天真的，坦率的',note:'没有城府',examples:['an ingenuous smile','too ingenuous for politics']}
],trap:'ingenious = 聪明巧妙。ingenuous = 天真单纯。disingenuous = 不真诚的。'},
{id:'uninterested-disinterested',type:'confusable',title:'uninterested · disinterested',brief:'没兴趣 vs 公正无私',words:[
{word:'uninterested',pron:'/ʌnˈɪntrəstɪd/',def:'没兴趣的，不感兴趣的',note:'= bored，不想了解',examples:['uninterested in politics','completely uninterested']},
{word:'disinterested',pron:'/dɪsˈɪntrəstɪd/',def:'公正的，无私的',note:'没有利益关系 = impartial',examples:['a disinterested observer','disinterested advice']}
],trap:'disinterested ≠ 不感兴趣！disinterested = 没有利益冲突，公正客观。'},
{id:'practical-practicable',type:'confusable',title:'practical · practicable',brief:'实际的 vs 可行的',words:[
{word:'practical',pron:'/ˈpræktɪkəl/',def:'实际的，务实的',note:'接地气，不是理论的',examples:['practical experience','a practical person']},
{word:'practicable',pron:'/ˈpræktɪkəbəl/',def:'可行的，行得通的',note:'技术上能做到',examples:['as soon as practicable','a practicable solution']}
],trap:'practical 描述态度和方法。practicable 描述方案能不能做。'},
{id:'incredible-incredulous',type:'confusable',title:'incredible · incredulous',brief:'难以置信的（事）vs 怀疑的（人）',words:[
{word:'incredible',pron:'/ɪnˈkrɛdəbəl/',def:'难以置信的，惊人的',note:'形容事情本身',examples:['incredible speed','an incredible story']},
{word:'incredulous',pron:'/ɪnˈkrɛdʒələs/',def:'怀疑的，不信的',note:'形容人的反应',examples:['an incredulous look','she was incredulous']}
],trap:'incredible = 这件事太惊人了。incredulous = 这个人表示不信。'},
{id:'industrial-industrious',type:'confusable',title:'industrial · industrious',brief:'工业的 vs 勤奋的',words:[
{word:'industrial',pron:'/ɪnˈdʌstriəl/',def:'工业的',note:'跟制造、工厂有关',examples:['industrial design','industrial revolution']},
{word:'industrious',pron:'/ɪnˈdʌstriəs/',def:'勤奋的，勤劳的',note:'形容人努力',examples:['an industrious worker','industrious students']}
],trap:'industrial 描述行业，industrious 描述人。工业设计 = industrial design。'},
{id:'explicit-implicit',type:'confusable',title:'explicit · implicit',brief:'明确的 vs 含蓄的 — 方向相反',words:[
{word:'explicit',pron:'/ɪkˈsplɪsɪt/',def:'明确的，直白的',note:'说出来了，不留模糊',examples:['explicit instructions','explicit content']},
{word:'implicit',pron:'/ɪmˈplɪsɪt/',def:'含蓄的，暗示的',note:'没说但暗含的',examples:['implicit trust','implicit bias','implicit agreement']}
],trap:'explicit = 白纸黑字说清楚。implicit = 没说但心里都懂。'},
{id:'defuse-diffuse',type:'confusable',title:'defuse · diffuse',brief:'化解紧张 vs 扩散',words:[
{word:'defuse',pron:'/diːˈfjuːz/',def:'化解（紧张局势）；拆弹',note:'de + fuse = 去掉引信',examples:['defuse the situation','defuse a bomb']},
{word:'diffuse',pron:'/dɪˈfjuːz/',def:'扩散（v）/ 分散的（adj）',note:'散开来',examples:['diffuse light','diffuse the scent','diffuse knowledge']}
],trap:'defuse = 让事情不爆炸。diffuse = 让东西散开。'},
{id:'device-devise',type:'confusable',title:'device · devise',brief:'设备（名词）vs 想出（动词）',words:[
{word:'device',pron:'/dɪˈvaɪs/',def:'设备，装置（名词）',note:'读 /dɪˈvaɪs/',examples:['mobile device','a clever device']},
{word:'devise',pron:'/dɪˈvaɪz/',def:'想出，设计（动词）',note:'读 /dɪˈvaɪz/',examples:['devise a plan','devise a strategy']}
],trap:'device 名词用 c，devise 动词用 s。跟 advice/advise 同一规律。'},
{id:'judicial-judicious',type:'confusable',title:'judicial · judicious',brief:'司法的 vs 明智的',words:[
{word:'judicial',pron:'/dʒuːˈdɪʃəl/',def:'司法的，法律的',note:'跟法院法官有关',examples:['judicial review','judicial system']},
{word:'judicious',pron:'/dʒuːˈdɪʃəs/',def:'明智的，审慎的',note:'有判断力的',examples:['a judicious decision','judicious use of resources']}
],trap:'judicial = 法院的（制度层面）。judicious = 有判断力的（个人层面）。'},
{id:'persecute-prosecute',type:'confusable',title:'persecute · prosecute',brief:'迫害 vs 起诉',words:[
{word:'persecute',pron:'/ˈpɜːrsɪkjuːt/',def:'迫害，骚扰',note:'不公正地对待',examples:['persecute minorities','persecuted for beliefs']},
{word:'prosecute',pron:'/ˈprɑːsɪkjuːt/',def:'起诉，检控',note:'法律程序',examples:['prosecute the offender','will be prosecuted']}
],trap:'persecute = 非法迫害。prosecute = 合法起诉。'},
{id:'militate-mitigate',type:'confusable',title:'militate · mitigate',brief:'不利于 vs 缓解',words:[
{word:'militate',pron:'/ˈmɪlɪteɪt/',def:'对…不利，妨碍',note:'militate against = 构成不利因素',examples:['militate against success','factors that militate against']},
{word:'mitigate',pron:'/ˈmɪtɪɡeɪt/',def:'缓解，减轻',note:'让坏事没那么坏',examples:['mitigate risk','mitigate the damage']}
],trap:'militate against = 产生不利影响。mitigate = 减轻影响。方向相反。'},
{id:'council-counsel',type:'confusable',title:'council · counsel',brief:'议会/委员会 vs 建议/律师',words:[
{word:'council',pron:'/ˈkaʊnsəl/',def:'委员会，议会',note:'一群人组成的组织',examples:['city council','student council']},
{word:'counsel',pron:'/ˈkaʊnsəl/',def:'建议（n/v）/ 律师',note:'给指导',examples:['legal counsel','counsel someone','seek counsel']}
],trap:'council = 组织（理事会）。counsel = 建议或律师。发音一样。'},
{id:'assent-ascent',type:'confusable',title:'assent · ascent',brief:'同意 vs 上升',words:[
{word:'assent',pron:'/əˈsɛnt/',def:'同意，赞成',note:'点头说好',examples:['nod in assent','give your assent','royal assent']},
{word:'ascent',pron:'/əˈsɛnt/',def:'上升，攀登',note:'往上走',examples:['the ascent of Everest','a steep ascent']}
],trap:'assent = 同意（跟 consent 近义）。ascent = 上升（跟 descent 反义）。'},
{id:'flammable-inflammable',type:'confusable',title:'flammable · inflammable',brief:'两个都是"可燃的"！',words:[
{word:'flammable',pron:'/ˈflæməbəl/',def:'可燃的',note:'会着火',examples:['flammable materials','highly flammable']},
{word:'inflammable',pron:'/ɪnˈflæməbəl/',def:'可燃的（= flammable）',note:'in- 这里不是否定！是加强',examples:['inflammable gases','inflammable liquids']}
],trap:'最坑的一对：inflammable 不是"不可燃"！in- 在这里是加强语气。不可燃 = non-flammable。'},
{id:'famous-infamous-notorious',type:'confusable',title:'famous · infamous · notorious',brief:'著名 vs 臭名昭著',words:[
{word:'famous',pron:'/ˈfeɪməs/',def:'著名的',note:'中性偏正面',examples:['a famous actor','world-famous']},
{word:'infamous',pron:'/ˈɪnfəməs/',def:'声名狼藉的',note:'因为坏事出名',examples:['an infamous criminal','the infamous incident']},
{word:'notorious',pron:'/noʊˈtɔːriəs/',def:'臭名昭著的',note:'因负面特征广为人知',examples:['notorious for being late','a notorious liar']}
],trap:'famous = 好的出名。infamous/notorious = 坏的出名。'},
{id:'amiable-amicable',type:'confusable',title:'amiable · amicable',brief:'友善的（人）vs 友好的（关系/协议）',words:[
{word:'amiable',pron:'/ˈeɪmiəbəl/',def:'友善的，和蔼的',note:'描述人的性格',examples:['an amiable host','always amiable']},
{word:'amicable',pron:'/ˈæmɪkəbəl/',def:'友好的，和睦的',note:'描述关系/安排',examples:['an amicable divorce','amicable settlement']}
],trap:'amiable 描述人。amicable 描述双方关系或协议。'},
{id:'luxuriant-luxurious',type:'confusable',title:'luxuriant · luxurious',brief:'茂盛的 vs 奢华的',words:[
{word:'luxuriant',pron:'/lʌɡˈʒʊriənt/',def:'茂盛的，繁茂的',note:'生长旺盛',examples:['luxuriant vegetation','luxuriant hair']},
{word:'luxurious',pron:'/lʌɡˈʒʊriəs/',def:'奢华的，豪华的',note:'expensive，享受型',examples:['a luxurious hotel','luxurious lifestyle']}
],trap:'luxuriant = 植物/头发很茂盛。luxurious = 东西很贵很享受。'},
{id:'coherent-cohesive',type:'confusable',title:'coherent · cohesive',brief:'连贯的 vs 有凝聚力的',words:[
{word:'coherent',pron:'/koʊˈhɪrənt/',def:'连贯的，条理清晰的',note:'逻辑说得通',examples:['a coherent argument','barely coherent']},
{word:'cohesive',pron:'/koʊˈhiːsɪv/',def:'有凝聚力的，团结的',note:'紧密结合在一起',examples:['a cohesive team','cohesive design']}
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
{word:'appraise',pron:'/əˈpreɪz/',def:'评估，鉴定',note:'judge the value',examples:['appraise the property','performance appraisal']},
{word:'apprise',pron:'/əˈpraɪz/',def:'通知，告知',note:'let someone know',examples:['apprise them of the situation','keep me apprised']}
],trap:'appraise = 给出评价。apprise = 给出信息。'},
{id:'censor-censure',type:'confusable',title:'censor · censure',brief:'审查删减 vs 公开谴责',words:[
{word:'censor',pron:'/ˈsɛnsər/',def:'审查，删改',note:'删掉不合适的内容',examples:['censor the press','censored content']},
{word:'censure',pron:'/ˈsɛnʃər/',def:'谴责，正式批评',note:'公开表示反对',examples:['a vote of censure','censured by the committee']}
],trap:'censor = 动剪刀（删改）。censure = 动嘴巴（批评）。'},
{id:'compliant-complacent',type:'confusable',title:'compliant · complacent',brief:'合规服从的 vs 自满的',words:[
{word:'compliant',pron:'/kəmˈplaɪənt/',def:'合规的，服从的',note:'按规矩来',examples:['fully compliant','GDPR-compliant']},
{word:'complacent',pron:'/kəmˈpleɪsənt/',def:'自满的，沾沾自喜的',note:'觉得已经够好了',examples:['don\'t get complacent','complacent about safety']}
],trap:'compliant = 好的（遵守规则）。complacent = 危险的（放松警惕）。'},
{id:'canvas-canvass',type:'confusable',title:'canvas · canvass',brief:'帆布/画布 vs 拉票/征求意见',words:[
{word:'canvas',pron:'/ˈkænvəs/',def:'帆布，画布',note:'物理材料',examples:['canvas bag','oil on canvas']},
{word:'canvass',pron:'/ˈkænvəs/',def:'征求意见，拉票',note:'到处去问',examples:['canvass for votes','canvass opinions']}
],trap:'canvas 少一个 s = 布料。canvass 多一个 s = 到处拉票。'},
{id:'tortuous-torturous',type:'confusable',title:'tortuous · torturous',brief:'曲折的 vs 折磨人的',words:[
{word:'tortuous',pron:'/ˈtɔːrtʃuəs/',def:'曲折的，复杂的',note:'弯弯绕绕',examples:['a tortuous path','tortuous negotiations']},
{word:'torturous',pron:'/ˈtɔːrtʃərəs/',def:'折磨人的，痛苦的',note:'= like torture',examples:['a torturous experience','torturous heat']}
],trap:'tortuous = 路很弯（复杂）。torturous = 人很惨（折磨）。'},
{id:'dependable-dependent',type:'confusable',title:'dependable · dependent',brief:'可靠的 vs 依赖的',words:[
{word:'dependable',pron:'/dɪˈpɛndəbəl/',def:'可靠的，靠得住的',note:'你可以依赖他',examples:['a dependable colleague','dependable service']},
{word:'dependent',pron:'/dɪˈpɛndənt/',def:'依赖的，取决于的',note:'需要依赖别人',examples:['dependent on funding','a dependent child']}
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
exBad:'Months of work culminated in a successful launch.',exGood:'Months of work paid off — we launched successfully.',whenFormal:'正式叙述：culminated in a historic agreement. 学术论文。'},
// ── REGISTER BATCH 2 (100) ──
{id:'anticipate-expect',type:'register',title:'anticipate → expect',brief:'日常说 expect',formal:'anticipate',natural:'expect',
explanation:'anticipate 暗示"预先采取行动应对"，但大多数人只是想说"预计/觉得会"。日常用 expect 更自然，口语甚至可以说 figure / think。',
exBad:'I anticipate the delivery arriving tomorrow.',exGood:'I expect the delivery tomorrow.',whenFormal:'商业策略：anticipate market changes. 军事：anticipate the enemy\'s move.'},
{id:'comprehend-understand',type:'register',title:'comprehend → understand',brief:'日常说 understand 或 get',formal:'comprehend',natural:'understand',
explanation:'comprehend 带有"深刻理解全貌"的正式感。日常对话说 understand，更口语说 get / follow。"I can\'t comprehend" 像在写侦探小说。',
exBad:'I cannot comprehend why he did that.',exGood:'I don\'t understand why he did that.',whenFormal:'学术：comprehend the full implications. 哲学：comprehend the nature of existence.'},
{id:'concur-agree',type:'register',title:'concur → agree',brief:'日常说 agree',formal:'concur',natural:'agree',
explanation:'concur 是法官写判词、学者写论文时用的词。日常说 I agree 就好。说 I concur 听起来像在 cosplay 大法官。',
exBad:'I concur with your assessment.',exGood:'I agree with you.',whenFormal:'法律：The justices concurred. 医学：The specialists concurred on the diagnosis.'},
{id:'perceive-notice',type:'register',title:'perceive → notice / see',brief:'日常说 notice 或 see',formal:'perceive',natural:'notice / see',
explanation:'perceive 是心理学/哲学用词，强调认知层面的感知。日常就说 notice / see / pick up on。不要把 perceive 当 see 用。',
exBad:'I perceived a change in her mood.',exGood:'I noticed she seemed different.',whenFormal:'学术：how consumers perceive the brand. 心理学：perceive reality differently.'},
{id:'recollect-remember',type:'register',title:'recollect → remember',brief:'日常说 remember',formal:'recollect',natural:'remember',
explanation:'recollect 是维多利亚时代小说里的词。日常说 remember，口语说 recall 也行但 remember 更自然。',
exBad:'I cannot recollect where I put my keys.',exGood:'I can\'t remember where I put my keys.',whenFormal:'文学叙述：As I recollect, it was a rainy evening. 法庭证词：To the best of my recollection...'},
{id:'reiterate-say-again',type:'register',title:'reiterate → say again / repeat',brief:'日常说 say again 或 repeat',formal:'reiterate',natural:'say again / repeat',
explanation:'reiterate 是正式发言用的"再次强调"。朋友间聊天说 "Let me reiterate" 像在开新闻发布会。日常用 say again / repeat / just to be clear。',
exBad:'I want to reiterate that the deadline is Friday.',exGood:'Just to be clear — the deadline is Friday.',whenFormal:'演讲：I want to reiterate our commitment. 外交：reiterate our position.'},
{id:'solicit-ask-for',type:'register',title:'solicit → ask for',brief:'日常说 ask for',formal:'solicit',natural:'ask for',
explanation:'solicit 是法律/商务用语（solicit feedback = 征求意见）。日常说 ask for / look for / get。而且 solicit 还有"拉客"的意思，用错场景很尴尬。',
exBad:'I\'d like to solicit your opinion.',exGood:'I\'d like to get your opinion.',whenFormal:'商务：solicit proposals / bids. 法律：solicit legal counsel.'},
{id:'adhere-follow',type:'register',title:'adhere → follow / stick to',brief:'日常说 follow 或 stick to',formal:'adhere',natural:'follow / stick to',
explanation:'adhere 是规章制度里"遵守"的正式表达。日常说 follow / stick to / go by。说 "adhere to the plan" 像在念公司手册。',
exBad:'Please adhere to the guidelines.',exGood:'Please follow the guidelines.',whenFormal:'合同：adhere to the terms. 法规：adhere to safety standards.'},
{id:'alleviate-ease',type:'register',title:'alleviate → ease / help with',brief:'日常说 ease 或 help with',formal:'alleviate',natural:'ease / help with',
explanation:'alleviate 是医学/政策文本常见的"缓解"。日常说 ease / help with / take the edge off。"alleviate my headache" 像在写医学报告。',
exBad:'This will alleviate the problem.',exGood:'This should help with the problem.',whenFormal:'医学：alleviate symptoms. 政策：alleviate poverty.'},
{id:'augment-increase',type:'register',title:'augment → add to / boost',brief:'日常说 add to 或 boost',formal:'augment',natural:'add to / boost',
explanation:'augment 是技术/学术用语。日常说 add to / boost / bump up / grow。说"augment your income"不如说"boost your income"自然。',
exBad:'I need to augment my skills.',exGood:'I need to build up my skills.',whenFormal:'技术：augmented reality. 军事：augment the forces.'},
{id:'cease-stop',type:'register',title:'cease → stop / quit',brief:'日常说 stop',formal:'cease',natural:'stop / quit',
explanation:'cease 是法律/军事级别的"停止"。日常说 stop / quit。"Cease and desist" 是律师函专用，日常说 "cease doing that" 像在下最后通牒。',
exBad:'Please cease making that noise.',exGood:'Please stop making that noise.',whenFormal:'法律：cease and desist. 军事：ceasefire. 正式公告：cease operations.'},
{id:'concede-admit',type:'register',title:'concede → admit / give in',brief:'日常说 admit 或 give in',formal:'concede',natural:'admit / give in',
explanation:'concede 是辩论/政治用词，暗示"不情愿地承认"。日常说 admit / give you that / okay fine。',
exBad:'I concede that you have a point.',exGood:'Okay, I\'ll give you that.',whenFormal:'政治：concede the election. 辩论：concede a point.'},
{id:'diminish-shrink',type:'register',title:'diminish → shrink / get smaller',brief:'日常说 shrink 或 drop',formal:'diminish',natural:'shrink / get smaller',
explanation:'diminish 是书面语，适合描述抽象事物变少。日常说 shrink / get smaller / drop / go down。',
exBad:'Our supplies have diminished.',exGood:'Our supplies are running low.',whenFormal:'学术：diminishing returns. 正式报告：diminished capacity.'},
{id:'disclose-reveal',type:'register',title:'disclose → tell / share / reveal',brief:'日常说 tell 或 share',formal:'disclose',natural:'tell / share',
explanation:'disclose 是法律/合规用语（信息披露）。日常说 tell / share / let someone know。说 "I need to disclose something" 像在做证人陈述。',
exBad:'He refused to disclose his salary.',exGood:'He didn\'t want to share his salary.',whenFormal:'法律：disclose conflicts of interest. 财务：disclose financial information.'},
{id:'encounter-run-into',type:'register',title:'encounter → run into / come across',brief:'日常说 run into 或 come across',formal:'encounter',natural:'run into / come across',
explanation:'encounter 带有"遭遇"的正式/文学感。日常碰到人说 run into / bump into，碰到问题说 come across / hit。',
exBad:'I encountered several issues today.',exGood:'I ran into a few issues today.',whenFormal:'探险叙述：encounter wild animals. 正式报告：encounter resistance.'},
{id:'enhance-improve',type:'register',title:'enhance → improve / make better',brief:'日常说 improve 或 make better',formal:'enhance',natural:'improve / make better',
explanation:'enhance 是产品文案和技术文档的最爱。日常说 improve / make better / step up / boost。你不会说"enhance my cooking skills"。',
exBad:'We need to enhance the user experience.',exGood:'We need to make the user experience better.',whenFormal:'技术：image enhancement. 商务提案：enhance productivity.'},
{id:'erroneous-wrong',type:'register',title:'erroneous → wrong / incorrect',brief:'日常说 wrong',formal:'erroneous',natural:'wrong',
explanation:'erroneous 是法律和学术论文里"错误的"。日常就说 wrong / incorrect / off。说 "That\'s erroneous" 像在法庭上反驳证词。',
exBad:'Your assumption is erroneous.',exGood:'Your assumption is wrong.',whenFormal:'法律：erroneous judgment. 学术：erroneous conclusions.'},
{id:'fundamental-basic',type:'register',title:'fundamental → basic / key',brief:'日常说 basic 或 key',formal:'fundamental',natural:'basic / key',
explanation:'fundamental 有"根本性的、基础性的"正式含义。日常说 basic / key / core / main。但注意 fundamental 在学术语境很常见且合适。',
exBad:'There\'s a fundamental problem with this plan.',exGood:'There\'s a basic problem with this plan.',whenFormal:'学术：fundamental research. 哲学：fundamental rights.'},
{id:'illuminate-clear-up',type:'register',title:'illuminate → clear up / shed light on',brief:'日常说 clear up 或 explain',formal:'illuminate',natural:'clear up / shed light on',
explanation:'illuminate 做"阐明"讲时极其书面。日常说 clear up / shed light on / explain。物理意义的"照亮"倒是可以用。',
exBad:'Could you illuminate this issue for me?',exGood:'Could you clear this up for me?',whenFormal:'学术演讲：illuminate the relationship between X and Y. 物理意义：illuminate the room.'},
{id:'impede-slow-down',type:'register',title:'impede → slow down / get in the way',brief:'日常说 slow down 或 block',formal:'impede',natural:'slow down / get in the way',
explanation:'impede 是法律/正式语境的"阻碍"。日常说 slow down / block / get in the way / hold up。',
exBad:'Don\'t let this impede your progress.',exGood:'Don\'t let this slow you down.',whenFormal:'法律：impede an investigation. 正式报告：impede economic growth.'},
{id:'inadvertently-by-accident',type:'register',title:'inadvertently → by accident / accidentally',brief:'日常说 by accident',formal:'inadvertently',natural:'by accident / accidentally',
explanation:'inadvertently 是新闻报道里的"无意中"。日常说 by accident / accidentally / by mistake / without meaning to。',
exBad:'I inadvertently deleted the file.',exGood:'I accidentally deleted the file.',whenFormal:'法律：inadvertently disclosed confidential information. 新闻：inadvertently caused...'},
{id:'incorporate-include',type:'register',title:'incorporate → include / add in',brief:'日常说 include 或 add',formal:'incorporate',natural:'include / add in',
explanation:'incorporate 是商务/学术用语，有"整合融入"的含义。日常说 include / add / throw in / work in。',
exBad:'We should incorporate your suggestions.',exGood:'We should work in your suggestions.',whenFormal:'商业：incorporate a company. 学术：incorporate findings into the framework.'},
{id:'magnitude-size',type:'register',title:'magnitude → size / scale',brief:'日常说 size 或 scale',formal:'magnitude',natural:'size / scale',
explanation:'magnitude 是天文学/地震学用语（星等、震级）。日常表示"大小/程度"说 size / scale / how big / how much。',
exBad:'You don\'t understand the magnitude of this problem.',exGood:'You don\'t realize how big this problem is.',whenFormal:'地震学：magnitude 7.0. 天文：magnitude of a star. 数学：order of magnitude.'},
{id:'predominantly-mostly',type:'register',title:'predominantly → mostly / mainly',brief:'日常说 mostly',formal:'predominantly',natural:'mostly / mainly',
explanation:'predominantly 是统计和学术用语。日常说 mostly / mainly / for the most part。说 "predominantly sunny" 像在读论文。',
exBad:'The audience was predominantly young.',exGood:'Most of the audience was young.',whenFormal:'学术：predominantly female sample. 人口统计：predominantly urban areas.'},
{id:'prerequisite-must-have',type:'register',title:'prerequisite → must-have / requirement',brief:'日常说 requirement 或 must',formal:'prerequisite',natural:'must-have / requirement',
explanation:'prerequisite 是学术/行政用语（先修课程）。日常说 requirement / must / need / something you need first。',
exBad:'A degree is a prerequisite for this job.',exGood:'You need a degree for this job.',whenFormal:'大学课程：prerequisite course. 正式申请：prerequisites for admission.'},
{id:'proficient-good-at',type:'register',title:'proficient → good at / skilled in',brief:'日常说 good at',formal:'proficient',natural:'good at / skilled in',
explanation:'proficient 是简历和能力评估表上的词。日常说 good at / skilled / know your way around。面试可以用，聊天不要用。',
exBad:'She\'s proficient in Excel.',exGood:'She\'s really good at Excel.',whenFormal:'简历：proficient in Python. 评估：demonstrated proficiency in...'},
{id:'rectify-fix',type:'register',title:'rectify → fix / sort out',brief:'日常说 fix 或 sort out',formal:'rectify',natural:'fix / sort out',
explanation:'rectify 是客服邮件和法律文件里的"纠正"。日常说 fix / sort out / put right / deal with。',
exBad:'We need to rectify this error immediately.',exGood:'We need to fix this right away.',whenFormal:'正式投诉回复：We will rectify the situation. 法律：rectify the record.'},
{id:'reimburse-pay-back',type:'register',title:'reimburse → pay back / cover',brief:'日常说 pay back',formal:'reimburse',natural:'pay back / cover',
explanation:'reimburse 是财务/保险用语。朋友之间说 pay back / cover / spot you。"I\'ll reimburse you" 对朋友说太见外了。',
exBad:'I\'ll reimburse you for lunch.',exGood:'I\'ll pay you back for lunch.',whenFormal:'公司报销：reimburse travel expenses. 保险：reimburse medical costs.'},
{id:'replenish-refill',type:'register',title:'replenish → refill / stock up',brief:'日常说 refill 或 top up',formal:'replenish',natural:'refill / stock up',
explanation:'replenish 是库存管理和护肤品广告用语。日常说 refill / top up / stock up / get more。',
exBad:'We need to replenish our supplies.',exGood:'We need to stock up on supplies.',whenFormal:'库存管理：replenish inventory. 美容品牌：replenish skin moisture.'},
{id:'subsequently-then',type:'register',title:'subsequently → then / after that',brief:'日常说 then',formal:'subsequently',natural:'then / after that',
explanation:'subsequently 是学术论文里的时间连接词。日常说 then / after that / later / next。一个 then 能解决的事别用 subsequently。',
exBad:'He graduated and subsequently moved to London.',exGood:'He graduated and then moved to London.',whenFormal:'法律叙述：subsequently filed a claim. 学术：subsequently analyzed the data.'},
{id:'sustain-keep-up',type:'register',title:'sustain → keep up / maintain',brief:'日常说 keep up 或 maintain',formal:'sustain',natural:'keep up / maintain',
explanation:'sustain 在正式语境指"维持/承受"。日常说 keep up / maintain / keep going。sustainable 倒是环保语境常用且已被接受。',
exBad:'It\'s hard to sustain this level of effort.',exGood:'It\'s hard to keep this up.',whenFormal:'环保：sustainable development. 医学：sustain injuries. 经济：sustain growth.'},
{id:'adjacent-next-to',type:'register',title:'adjacent → next to / nearby',brief:'日常说 next to',formal:'adjacent',natural:'next to / nearby',
explanation:'adjacent 是数学/房产/城市规划用语。日常说 next to / nearby / right by / beside。口语里说 adjacent 像在念地图说明书。',
exBad:'The pharmacy is adjacent to the supermarket.',exGood:'The pharmacy is right next to the supermarket.',whenFormal:'数学：adjacent angles. 房地产：adjacent property. 城市规划：adjacent lots.'},
{id:'amenable-open-to',type:'register',title:'amenable → open to / up for',brief:'日常说 open to 或 up for',formal:'amenable',natural:'open to / up for',
explanation:'amenable 是正式会议用语（"如果你愿意的话"）。日常说 open to / up for / down for / cool with。',
exBad:'Are you amenable to rescheduling?',exGood:'Are you open to rescheduling?',whenFormal:'商务谈判：amenable to negotiation. 法律：amenable to the court\'s jurisdiction.'},
{id:'apparatus-setup',type:'register',title:'apparatus → equipment / setup',brief:'日常说 equipment 或 setup',formal:'apparatus',natural:'equipment / setup',
explanation:'apparatus 是实验室和消防队用语。日常说 equipment / setup / gear / stuff / rig。说 "fitness apparatus" 不如说 "gym equipment"。',
exBad:'We need the proper apparatus for this.',exGood:'We need the right equipment for this.',whenFormal:'科学实验：laboratory apparatus. 消防：breathing apparatus. 政治：state apparatus.'},
{id:'benevolent-kind',type:'register',title:'benevolent → kind / generous',brief:'日常说 kind 或 generous',formal:'benevolent',natural:'kind / generous',
explanation:'benevolent 是文学/慈善用语，带有居高临下的善意。日常夸人善良就说 kind / generous / thoughtful / sweet。',
exBad:'She\'s a very benevolent person.',exGood:'She\'s a really kind person.',whenFormal:'慈善：benevolent organization. 文学：benevolent ruler. 历史：benevolent dictatorship.'},
{id:'circumvent-get-around',type:'register',title:'circumvent → get around / avoid',brief:'日常说 get around 或 avoid',formal:'circumvent',natural:'get around / avoid',
explanation:'circumvent 是法律/安全用语（绕过规则/系统）。日常说 get around / avoid / dodge / sidestep / find a way around。',
exBad:'We need to circumvent this restriction.',exGood:'We need to find a way around this.',whenFormal:'法律：circumvent regulations. 网络安全：circumvent security measures.'},
{id:'commensurate-matching',type:'register',title:'commensurate → matching / in line with',brief:'日常说 matching 或 worth',formal:'commensurate',natural:'matching / in line with',
explanation:'commensurate 是薪酬谈判和正式文件里的"相称的"。日常说 matching / in line with / worth / fair for。',
exBad:'The salary is commensurate with experience.',exGood:'The pay matches your experience.',whenFormal:'招聘启事：salary commensurate with experience. 法律：damages commensurate with losses.'},
{id:'conducive-good-for',type:'register',title:'conducive → good for / helps with',brief:'日常说 good for',formal:'conducive',natural:'good for / helps with',
explanation:'conducive 是教育学和管理学用语。日常说 good for / helps with / great for。"conducive to learning" 写论文很好，聊天太正式。',
exBad:'This environment is conducive to productivity.',exGood:'This is a great environment to get work done.',whenFormal:'教育：conducive to learning. 管理学：conditions conducive to growth.'},
{id:'conjecture-guess',type:'register',title:'conjecture → guess / theory',brief:'日常说 guess 或 hunch',formal:'conjecture',natural:'guess / theory',
explanation:'conjecture 是数学和学术用语（如哥德巴赫猜想）。日常说 guess / theory / hunch / feeling。',
exBad:'That\'s merely conjecture.',exGood:'That\'s just a guess.',whenFormal:'数学：Goldbach\'s conjecture. 学术：remains a matter of conjecture.'},
{id:'corroborate-back-up',type:'register',title:'corroborate → back up / confirm',brief:'日常说 back up 或 confirm',formal:'corroborate',natural:'back up / confirm',
explanation:'corroborate 是法律/新闻用语（佐证）。日常说 back up / confirm / support / match。说 "Can you corroborate?" 像在审讯。',
exBad:'Can anyone corroborate his story?',exGood:'Can anyone back up his story?',whenFormal:'法律：corroborate the testimony. 新闻：corroborated by multiple sources.'},
{id:'curtail-cut-back',type:'register',title:'curtail → cut back / limit',brief:'日常说 cut back 或 limit',formal:'curtail',natural:'cut back / limit',
explanation:'curtail 是政策和预算用语。日常说 cut back / limit / scale back / rein in / put a cap on。',
exBad:'We need to curtail our spending.',exGood:'We need to cut back on spending.',whenFormal:'政策：curtail civil liberties. 预算：curtail expenditures.'},
{id:'deficiency-lack',type:'register',title:'deficiency → lack / shortage',brief:'日常说 lack 或 not enough',formal:'deficiency',natural:'lack / shortage',
explanation:'deficiency 是医学（维生素缺乏）和质量检查用语。日常说 lack / shortage / not enough / gap。',
exBad:'There\'s a deficiency of skilled workers.',exGood:'There aren\'t enough skilled workers.',whenFormal:'医学：vitamin D deficiency. 质量管理：identify deficiencies.'},
{id:'designate-pick',type:'register',title:'designate → pick / name / choose',brief:'日常说 pick 或 choose',formal:'designate',natural:'pick / choose',
explanation:'designate 是行政/官方用语（指定/任命）。日常说 pick / choose / name / assign / set aside。',
exBad:'We\'ll designate someone to lead the project.',exGood:'We\'ll pick someone to lead the project.',whenFormal:'行政：designated driver. 规划：designated area. 官方任命：designate a successor.'},
{id:'detrimental-bad-for',type:'register',title:'detrimental → bad for / harmful',brief:'日常说 bad for',formal:'detrimental',natural:'bad for / harmful',
explanation:'detrimental 是报告和论文用语。日常说 bad for / harmful / damaging。"Staying up late is detrimental" 不如直接说 "is bad for you"。',
exBad:'Smoking is detrimental to your health.',exGood:'Smoking is bad for your health.',whenFormal:'法律：detrimental reliance. 学术：detrimental effects on the environment.'},
{id:'deviate-stray',type:'register',title:'deviate → stray / go off track',brief:'日常说 go off track',formal:'deviate',natural:'stray / go off track',
explanation:'deviate 是质量管理和统计学用语（偏差）。日常说 stray / go off track / wander / get sidetracked。',
exBad:'Let\'s not deviate from the topic.',exGood:'Let\'s not go off topic.',whenFormal:'统计：standard deviation. 质量管理：deviate from specifications. 航空：deviate from the flight path.'},
{id:'discrepancy-difference',type:'register',title:'discrepancy → difference / gap / mismatch',brief:'日常说 difference 或 gap',formal:'discrepancy',natural:'difference / gap',
explanation:'discrepancy 是审计和数据分析用语。日常说 difference / gap / mismatch / mix-up。',
exBad:'There\'s a discrepancy between these two numbers.',exGood:'These two numbers don\'t match.',whenFormal:'审计：accounting discrepancy. 数据分析：discrepancies in the data.'},
{id:'efficacy-effectiveness',type:'register',title:'efficacy → effectiveness / how well it works',brief:'日常说 how well it works',formal:'efficacy',natural:'effectiveness',
explanation:'efficacy 是药物临床试验专用词。日常说 effectiveness / how well it works。说 "the efficacy of this cleaning product" 像在念药品说明书。',
exBad:'The efficacy of this method is questionable.',exGood:'I\'m not sure how well this works.',whenFormal:'医学：vaccine efficacy. 药物研究：demonstrate efficacy in clinical trials.'},
{id:'emulate-copy',type:'register',title:'emulate → copy / follow / be like',brief:'日常说 copy 或 follow',formal:'emulate',natural:'copy / follow',
explanation:'emulate 是"以……为榜样"的正式表达。日常说 copy / follow / be like / take after。技术领域的 emulator 倒是正常用语。',
exBad:'I want to emulate his success.',exGood:'I want to follow in his footsteps.',whenFormal:'技术：emulate a system. 正式表扬：a leader worth emulating.'},
{id:'encompass-cover',type:'register',title:'encompass → cover / include',brief:'日常说 cover 或 include',formal:'encompass',natural:'cover / include',
explanation:'encompass 是学术/商务用语，有"全面包含"之意。日常说 cover / include / take in / deal with。',
exBad:'This report encompasses all departments.',exGood:'This report covers all departments.',whenFormal:'学术：the study encompasses three decades. 商务提案：our services encompass...'},
{id:'endorse-back',type:'register',title:'endorse → back / support / recommend',brief:'日常说 recommend 或 back',formal:'endorse',natural:'back / support / recommend',
explanation:'endorse 是政治背书和品牌代言用语。朋友间推荐东西说 recommend / vouch for / back。说 "I endorse this restaurant" 像在做广告。',
exBad:'I fully endorse this product.',exGood:'I totally recommend this.',whenFormal:'政治：endorse a candidate. 商业：celebrity endorsement. 银行：endorse a check.'},
{id:'enumerate-list',type:'register',title:'enumerate → list / go through',brief:'日常说 list 或 go through',formal:'enumerate',natural:'list / go through',
explanation:'enumerate 是法律和学术用语（逐项列举）。日常说 list / go through / run through / name / count。',
exBad:'Let me enumerate the reasons.',exGood:'Let me go through the reasons.',whenFormal:'法律：enumerate the rights. 学术：enumerate all possible cases. 编程：enumerate over a list.'},
{id:'extraneous-unneeded',type:'register',title:'extraneous → extra / unneeded / irrelevant',brief:'日常说 extra 或 irrelevant',formal:'extraneous',natural:'extra / unneeded',
explanation:'extraneous 是编辑和学术用语（无关的、多余的）。日常说 extra / unneeded / irrelevant / beside the point。',
exBad:'Remove any extraneous details.',exGood:'Take out anything that\'s not needed.',whenFormal:'法律：extraneous evidence. 写作指导：remove extraneous information.'},
{id:'henceforth-from-now-on',type:'register',title:'henceforth → from now on',brief:'日常说 from now on',formal:'henceforth',natural:'from now on',
explanation:'henceforth 是中世纪法律宣言用语。日常说 from now on / going forward / starting now。说 henceforth 像在颁布皇家法令。',
exBad:'Henceforth, we will use the new system.',exGood:'From now on, we\'ll use the new system.',whenFormal:'法律文件：henceforth referred to as "the Buyer". 正式声明：henceforth prohibited.'},
{id:'impending-upcoming',type:'register',title:'impending → upcoming / coming',brief:'日常说 coming 或 upcoming',formal:'impending',natural:'upcoming / coming',
explanation:'impending 暗示"即将到来的（通常是坏事）"——impending doom。如果不是坏事，日常就说 upcoming / coming / coming up。',
exBad:'The impending meeting has me stressed.',exGood:'The meeting coming up has me stressed.',whenFormal:'文学：impending doom. 新闻：impending crisis / hurricane.'},
{id:'imperative-crucial',type:'register',title:'imperative → must / crucial / really important',brief:'日常说 really important 或 must',formal:'imperative',natural:'must / really important',
explanation:'imperative 是政策文件用语（当务之急）。日常说 really important / crucial / a must / we have to。说 "It\'s imperative" 像在做国情咨文。',
exBad:'It\'s imperative that we finish today.',exGood:'We really need to finish today.',whenFormal:'政策：it is imperative to act now. 语法术语：imperative mood.'},
{id:'incur-face',type:'register',title:'incur → face / get hit with',brief:'日常说 face 或 get',formal:'incur',natural:'face / get hit with',
explanation:'incur 是财务/法律用语（招致费用/损失）。日常说 face / get hit with / end up with / rack up。',
exBad:'You may incur additional charges.',exGood:'You might get extra charges.',whenFormal:'财务：incur expenses / costs. 法律：incur liability. 银行：incur a penalty.'},
{id:'juxtapose-compare',type:'register',title:'juxtapose → put side by side / compare',brief:'日常说 compare 或 put next to',formal:'juxtapose',natural:'put side by side / compare',
explanation:'juxtapose 是艺术评论和文学分析用语。日常说 compare / put next to / put side by side / line up。',
exBad:'Let\'s juxtapose these two designs.',exGood:'Let\'s put these two designs side by side.',whenFormal:'艺术评论：juxtapose light and shadow. 文学分析：the author juxtaposes wealth and poverty.'},
{id:'lucrative-profitable',type:'register',title:'lucrative → profitable / pays well',brief:'日常说 pays well 或 good money',formal:'lucrative',natural:'profitable / pays well',
explanation:'lucrative 是商业新闻用语。日常说 pays well / good money / profitable。"a lucrative opportunity" 可以简化为 "a great opportunity"。',
exBad:'That sounds like a lucrative deal.',exGood:'That sounds like it pays really well.',whenFormal:'商业报道：a lucrative market. 投资：lucrative returns.'},
{id:'meticulous-careful',type:'register',title:'meticulous → careful / thorough / detail-oriented',brief:'日常说 careful 或 thorough',formal:'meticulous',natural:'careful / thorough',
explanation:'meticulous 是简历和推荐信用语。日常夸人仔细说 careful / thorough / detail-oriented / picky（带点幽默）。',
exBad:'She\'s very meticulous about her work.',exGood:'She\'s really careful about her work.',whenFormal:'推荐信：meticulous attention to detail. 学术：meticulous research methodology.'},
{id:'mitigate-lessen',type:'register',title:'mitigate → reduce / lessen / limit',brief:'日常说 reduce 或 limit',formal:'mitigate',natural:'reduce / lessen',
explanation:'mitigate 是风险管理和法律用语。日常说 reduce / lessen / limit / cut down on / soften the blow。',
exBad:'We need to mitigate the risk.',exGood:'We need to reduce the risk.',whenFormal:'法律：mitigating circumstances. 风险管理：mitigate potential losses. 环保：mitigate climate change.'},
{id:'nominal-token',type:'register',title:'nominal → small / token / minimal',brief:'日常说 small 或 token',formal:'nominal',natural:'small / token',
explanation:'nominal 是经济学/财务用语（名义上的/很少的）。日常说 small / tiny / token / symbolic。"nominal fee" 可以说 "small fee"。',
exBad:'There\'s a nominal charge for the service.',exGood:'There\'s a small fee for the service.',whenFormal:'经济学：nominal GDP vs real GDP. 财务：nominal value. 工程：nominal dimensions.'},
{id:'notwithstanding-despite',type:'register',title:'notwithstanding → despite / even though',brief:'日常说 despite 或 even though',formal:'notwithstanding',natural:'despite / even though',
explanation:'notwithstanding 是法律合同用语，比 despite 还正式。日常说 despite / even though / regardless。说 notwithstanding 像在念合同条款。',
exBad:'Notwithstanding the delay, we finished on time.',exGood:'Even though we had a delay, we still finished on time.',whenFormal:'法律合同：notwithstanding the foregoing. 官方文件：notwithstanding any other provision.'},
{id:'obsolete-outdated',type:'register',title:'obsolete → outdated / old',brief:'日常说 outdated 或 old',formal:'obsolete',natural:'outdated / old',
explanation:'obsolete 有"完全淘汰、不再使用"的技术含义。日常说 outdated / old / out of date / ancient（夸张）。obsolete 适合描述技术/设备。',
exBad:'This method is obsolete.',exGood:'This method is outdated.',whenFormal:'技术：obsolete technology. 军事：obsolete weapons systems.'},
{id:'pertain-relate-to',type:'register',title:'pertain → relate to / be about / have to do with',brief:'日常说 relate to 或 be about',formal:'pertain',natural:'relate to / be about',
explanation:'pertain 是法律和行政用语。日常说 relate to / be about / have to do with / concern。',
exBad:'This rule pertains to all employees.',exGood:'This rule applies to everyone.',whenFormal:'法律：laws pertaining to... 行政：documents pertaining to the case.'},
{id:'plausible-reasonable',type:'register',title:'plausible → reasonable / makes sense',brief:'日常说 makes sense 或 could be',formal:'plausible',natural:'reasonable / makes sense',
explanation:'plausible 是学术论证用语（听起来合理的、可信的）。日常说 makes sense / sounds right / could be / reasonable。',
exBad:'That\'s a plausible explanation.',exGood:'That makes sense.',whenFormal:'学术：a plausible hypothesis. 法律：plausible deniability.'},
{id:'preclude-rule-out',type:'register',title:'preclude → rule out / prevent',brief:'日常说 rule out 或 prevent',formal:'preclude',natural:'rule out / prevent',
explanation:'preclude 是法律/学术用语（排除可能性）。日常说 rule out / prevent / stop / keep from / make impossible。',
exBad:'This doesn\'t preclude other options.',exGood:'This doesn\'t rule out other options.',whenFormal:'法律：preclude from testifying. 学术：does not preclude the possibility that...'},
{id:'pursuant-to-following',type:'register',title:'pursuant to → following / based on / under',brief:'日常说 based on 或 under',formal:'pursuant to',natural:'following / based on',
explanation:'pursuant to 是法律合同中"根据/依照"的意思。日常绝对不会用到这个词。说 based on / under / in line with / following。',
exBad:'Pursuant to our agreement, payment is due.',exGood:'Based on our agreement, payment is due.',whenFormal:'法律合同：pursuant to Section 5. 政府文件：pursuant to the Act.'},
{id:'ramification-consequence',type:'register',title:'ramification → consequence / result / fallout',brief:'日常说 consequence 或 result',formal:'ramification',natural:'consequence / result',
explanation:'ramification 暗示复杂的连锁后果。日常说 consequence / result / fallout / what happens / ripple effect。',
exBad:'Consider the ramifications of this decision.',exGood:'Think about what could happen if we do this.',whenFormal:'政策分析：legal ramifications. 商业：financial ramifications of the merger.'},
{id:'rationale-reason',type:'register',title:'rationale → reason / thinking',brief:'日常说 reason 或 thinking',formal:'rationale',natural:'reason / thinking',
explanation:'rationale 是商务和学术用语（根本理由/依据）。日常说 reason / reasoning / thinking / logic behind it。',
exBad:'What\'s the rationale behind this change?',exGood:'What\'s the reason for this change?',whenFormal:'商务提案：the rationale for this strategy. 学术：provide a rationale for your methodology.'},
{id:'redundant-unnecessary',type:'register',title:'redundant → unnecessary / extra / not needed',brief:'日常说 unnecessary 或 extra',formal:'redundant',natural:'unnecessary / extra',
explanation:'redundant 在英式英语还有"被裁员"的意思（made redundant）。表示"多余的"日常说 unnecessary / extra / not needed / overkill。',
exBad:'This step is redundant.',exGood:'This step isn\'t needed.',whenFormal:'工程：redundant systems (备份系统). 英式HR：made redundant. 写作：redundant words.'},
{id:'robust-strong',type:'register',title:'robust → strong / solid',brief:'日常说 strong 或 solid',formal:'robust',natural:'strong / solid',
explanation:'robust 是科技和咨询公司最爱的 buzzword。日常说 strong / solid / reliable / powerful。"robust solution" 在 PPT 里见太多了。',
exBad:'We need a robust solution.',exGood:'We need a solid solution.',whenFormal:'工程：robust design. 统计：robust analysis. 红酒品鉴：robust flavor（这个倒可以用）.'},
{id:'salient-key',type:'register',title:'salient → key / main / important',brief:'日常说 key 或 main',formal:'salient',natural:'key / main',
explanation:'salient 是学术论文和军事用语（salient points = 要点）。日常说 key / main / important / the big ones。',
exBad:'The salient features of this plan are...',exGood:'The key features of this plan are...',whenFormal:'学术写作：the most salient finding. 军事：salient (突出部).'},
{id:'sporadic-on-and-off',type:'register',title:'sporadic → on and off / here and there',brief:'日常说 on and off',formal:'sporadic',natural:'on and off / here and there',
explanation:'sporadic 是新闻报道用语（零星的）。日常说 on and off / here and there / every now and then / scattered。',
exBad:'We\'ve had sporadic rain all week.',exGood:'It\'s been raining on and off all week.',whenFormal:'新闻：sporadic violence / protests. 医学：sporadic cases of the disease.'},
{id:'stringent-strict',type:'register',title:'stringent → strict / tight',brief:'日常说 strict 或 tight',formal:'stringent',natural:'strict / tight',
explanation:'stringent 是法规和标准用语。日常说 strict / tight / tough / rigid。"stringent requirements" 可以说 "strict requirements"。',
exBad:'The company has stringent policies.',exGood:'The company has really strict policies.',whenFormal:'法规：stringent safety standards. 金融：stringent lending criteria.'},
{id:'superfluous-extra',type:'register',title:'superfluous → extra / too much / over the top',brief:'日常说 extra 或 too much',formal:'superfluous',natural:'extra / too much',
explanation:'superfluous 是编辑和学术用语。日常说 extra / too much / over the top / overkill / we don\'t need that。',
exBad:'These decorations are superfluous.',exGood:'These decorations are a bit much.',whenFormal:'写作编辑：remove superfluous words. 哲学/逻辑：superfluous assumptions.'},
{id:'tangible-concrete',type:'register',title:'tangible → concrete / real / actual',brief:'日常说 real 或 concrete',formal:'tangible',natural:'concrete / real',
explanation:'tangible 是商务/法律用语（有形的/实际的）。日常说 real / concrete / actual / something you can see / measurable。',
exBad:'We need tangible results.',exGood:'We need real results.',whenFormal:'法律：tangible assets. 商务：tangible benefits. 会计：tangible vs intangible.'},
{id:'ubiquitous-everywhere',type:'register',title:'ubiquitous → everywhere / all over the place',brief:'日常说 everywhere',formal:'ubiquitous',natural:'everywhere',
explanation:'ubiquitous 是科技评论和学术写作的爱用词。日常说 everywhere / all over the place / you see them everywhere。',
exBad:'Smartphones are ubiquitous nowadays.',exGood:'Smartphones are everywhere now.',whenFormal:'学术：ubiquitous computing. 科技评论：the ubiquitous smartphone.'},
{id:'viable-workable',type:'register',title:'viable → workable / doable / realistic',brief:'日常说 workable 或 doable',formal:'viable',natural:'workable / doable',
explanation:'viable 是商务和科学用语（可行的/可存活的）。日常说 workable / doable / realistic / could work。',
exBad:'Is this plan viable?',exGood:'Could this plan actually work?',whenFormal:'商务：viable business model. 生物：viable cells / organism.'},
{id:'volatile-unpredictable',type:'register',title:'volatile → unpredictable / unstable / all over the place',brief:'日常说 unpredictable 或 wild',formal:'volatile',natural:'unpredictable / unstable',
explanation:'volatile 是金融/化学用语（波动的/挥发性的）。日常说 unpredictable / unstable / all over the place / wild / up and down。',
exBad:'The situation is quite volatile.',exGood:'Things are pretty unpredictable right now.',whenFormal:'金融：volatile markets. 化学：volatile compounds. 政治：volatile region.'},
{id:'warrant-call-for',type:'register',title:'warrant → call for / deserve / justify',brief:'日常说 call for 或 deserve',formal:'warrant',natural:'call for / deserve',
explanation:'warrant 做动词是"值得/有理由"的正式说法。日常说 call for / deserve / justify / be worth it。注意它还有"逮捕令"的名词义。',
exBad:'This situation warrants further investigation.',exGood:'This is worth looking into more.',whenFormal:'法律：issue a warrant. 正式报告：the evidence warrants concern.'},
{id:'proximity-closeness',type:'register',title:'proximity → closeness / how close / nearness',brief:'日常说 how close 或 near',formal:'proximity',natural:'closeness / how close',
explanation:'proximity 是房地产和城市规划用语。日常说 how close / near / nearby / within walking distance。',
exBad:'The proximity to the train station is a plus.',exGood:'Being so close to the train station is a plus.',whenFormal:'房地产：proximity to amenities. 军事：in close proximity (其实 close 就够了).'},
{id:'succinct-brief',type:'register',title:'succinct → short / brief / to the point',brief:'日常说 short 或 brief',formal:'succinct',natural:'short / brief / to the point',
explanation:'succinct 本身就是个文绉绉的词来形容"简洁"——有点反讽。日常说 short / brief / to the point / snappy。',
exBad:'Please keep your answer succinct.',exGood:'Keep it short.',whenFormal:'写作指导：a succinct summary. 学术评价：a succinct and well-argued paper.'},
{id:'perpetuate-keep-going',type:'register',title:'perpetuate → keep going / keep alive',brief:'日常说 keep going 或 keep alive',formal:'perpetuate',natural:'keep going / keep alive',
explanation:'perpetuate 是社会评论用语（perpetuate stereotypes = 延续刻板印象）。日常说 keep going / keep alive / carry on / pass on。',
exBad:'This perpetuates a harmful myth.',exGood:'This keeps a harmful myth alive.',whenFormal:'社会学：perpetuate inequality. 文化评论：perpetuate stereotypes.'},
{id:'ambiguous-unclear',type:'register',title:'ambiguous → unclear / vague / confusing',brief:'日常说 unclear 或 vague',formal:'ambiguous',natural:'unclear / vague',
explanation:'ambiguous 是语言学/法律用语（有歧义的）。日常说 unclear / vague / confusing / wishy-washy / could go either way。',
exBad:'His instructions were ambiguous.',exGood:'His instructions were unclear.',whenFormal:'法律：ambiguous clause. 语言学：ambiguous sentence. 哲学：morally ambiguous.'},
{id:'analogous-similar',type:'register',title:'analogous → similar / like',brief:'日常说 similar 或 like',formal:'analogous',natural:'similar / like',
explanation:'analogous 是科学/学术用语（类比的）。日常说 similar / like / same kind of thing / comparable。',
exBad:'This is analogous to what happened last year.',exGood:'This is similar to what happened last year.',whenFormal:'生物学：analogous structures. 学术：analogous to the situation in Europe.'},
{id:'articulate-express',type:'register',title:'articulate → express / put into words / say clearly',brief:'日常说 express 或 say clearly',formal:'articulate',natural:'express / put into words',
explanation:'articulate 做动词是"清晰表达"的正式说法。日常说 express / put into words / say clearly / spell out。做形容词（he\'s very articulate）倒是正常用法。',
exBad:'She articulated her concerns.',exGood:'She expressed her concerns clearly.',whenFormal:'正式演讲：articulate a vision. 做形容词：an articulate speaker（这个可以日常用）.'},
{id:'chronicle-record',type:'register',title:'chronicle → record / document / track',brief:'日常说 record 或 document',formal:'chronicle',natural:'record / document',
explanation:'chronicle 是新闻/历史叙述用语。日常说 record / document / track / keep a log / write down。',
exBad:'She chronicled her travels in a blog.',exGood:'She wrote about her travels on her blog.',whenFormal:'历史写作：chronicle the events of the war. 新闻：The Times chronicled the scandal.'},
{id:'compel-force',type:'register',title:'compel → force / push / make',brief:'日常说 force 或 make',formal:'compel',natural:'force / push / make',
explanation:'compel 是法律用语（强制）。日常说 force / push / make / pressure / have no choice。"I feel compelled" 有时日常也用但很正式。',
exBad:'The evidence compelled us to reconsider.',exGood:'The evidence made us reconsider.',whenFormal:'法律：compel testimony. 正式写作：feel compelled to speak out.'},
{id:'contemplate-think-about',type:'register',title:'contemplate → think about / consider',brief:'日常说 think about',formal:'contemplate',natural:'think about / consider',
explanation:'contemplate 有"深思/冥想"的文学意味。日常说 think about / consider / mull over / sleep on it。说 "I\'m contemplating lunch" 有幽默效果，但平时别用。',
exBad:'I\'m contemplating a career change.',exGood:'I\'m thinking about changing careers.',whenFormal:'哲学：contemplate the meaning of life. 文学：sat and contemplated the horizon.'},
{id:'impeccable-flawless',type:'register',title:'impeccable → perfect / flawless / spotless',brief:'日常说 perfect 或 amazing',formal:'impeccable',natural:'perfect / flawless',
explanation:'impeccable 是时尚评论和正式赞美用语。日常夸人说 perfect / amazing / on point / spot-on。"impeccable taste" 虽然常见但偏书面。',
exBad:'Her presentation was impeccable.',exGood:'Her presentation was perfect.',whenFormal:'时尚：impeccable style. 推荐信：impeccable professionalism.'},
{id:'pinnacle-peak',type:'register',title:'pinnacle → peak / top / height',brief:'日常说 peak 或 top',formal:'pinnacle',natural:'peak / top',
explanation:'pinnacle 是文学/演讲用语（巅峰）。日常说 peak / top / height / best / prime。',
exBad:'She reached the pinnacle of her career.',exGood:'She\'s at the peak of her career.',whenFormal:'演讲：the pinnacle of achievement. 文学：the pinnacle of human civilization.'},
{id:'propensity-tendency',type:'register',title:'propensity → tendency / habit of',brief:'日常说 tendency 或 habit',formal:'propensity',natural:'tendency / habit of',
explanation:'propensity 是心理学和学术用语。日常说 tendency / habit / tend to / have a thing for。',
exBad:'He has a propensity for exaggeration.',exGood:'He tends to exaggerate.',whenFormal:'学术：propensity to consume. 心理学：propensity for risk-taking.'},
{id:'resilient-tough',type:'register',title:'resilient → tough / bounces back / strong',brief:'日常说 tough 或 bounces back',formal:'resilient',natural:'tough / bounces back',
explanation:'resilient 是心理学/工程用语（有韧性的）。日常说 tough / bounces back / strong / can handle it / doesn\'t give up。',
exBad:'She\'s incredibly resilient.',exGood:'She\'s really tough — she always bounces back.',whenFormal:'心理学：resilient children. 工程：resilient materials. 政策：resilient infrastructure.'},
{id:'trajectory-path',type:'register',title:'trajectory → path / direction / where it\'s heading',brief:'日常说 path 或 direction',formal:'trajectory',natural:'path / direction',
explanation:'trajectory 是物理学/航空用语（轨迹）。被商务人士用来说职业发展方向太多了。日常说 path / direction / where things are going。',
exBad:'His career trajectory is impressive.',exGood:'His career path has been really impressive.',whenFormal:'物理学：trajectory of a projectile. 商务正式：growth trajectory.'},
{id:'truncate-cut-short',type:'register',title:'truncate → cut short / shorten / trim',brief:'日常说 cut short 或 shorten',formal:'truncate',natural:'cut short / shorten',
explanation:'truncate 是数据库/数学/技术用语。日常说 cut short / shorten / trim / cut off。',
exBad:'We need to truncate the list.',exGood:'We need to shorten the list.',whenFormal:'数据库：truncate a table. 数学：truncate to two decimal places.'},
{id:'unprecedented-never-seen',type:'register',title:'unprecedented → never seen before / first-ever',brief:'日常说 never seen before',formal:'unprecedented',natural:'never seen before / first-ever',
explanation:'unprecedented 是新闻报道最滥用的词之一（尤其2020年后）。日常说 never seen before / first-ever / like nothing before / unheard of。',
exBad:'This is an unprecedented situation.',exGood:'We\'ve never seen anything like this.',whenFormal:'法律：unprecedented ruling. 新闻标题：unprecedented levels of... (虽然用烂了但确实是标准用法).'},
{id:'verbose-wordy',type:'register',title:'verbose → wordy / long-winded / too long',brief:'日常说 wordy 或 too long',formal:'verbose',natural:'wordy / long-winded',
explanation:'verbose 是编程和写作评论用语。日常说 wordy / long-winded / too long / goes on and on / rambling。用 verbose 来说别人啰嗦本身就有点啰嗦。',
exBad:'Your email was a bit verbose.',exGood:'Your email was a bit long.',whenFormal:'编程：verbose mode / verbose logging. 写作指导：avoid verbose prose.'},
{id:'acquiesce-go-along',type:'register',title:'acquiesce → go along / give in / agree reluctantly',brief:'日常说 go along with 或 give in',formal:'acquiesce',natural:'go along / give in',
explanation:'acquiesce 是外交和法律用语（默许/勉强同意）。日常说 go along with / give in / cave / go with it / just let it happen。',
exBad:'She acquiesced to their demands.',exGood:'She gave in to their demands.',whenFormal:'外交：acquiesce to the terms. 法律：acquiescence implies consent.'},
{id:'remnant-leftover',type:'register',title:'remnant → leftover / what\'s left / remains',brief:'日常说 leftover 或 what\'s left',formal:'remnant',natural:'leftover / what\'s left',
explanation:'remnant 是历史/文学用语（遗迹/残余）。日常说 leftover / what\'s left / remains / bits and pieces。',
exBad:'These are remnants of the old system.',exGood:'These are leftovers from the old system.',whenFormal:'历史：remnants of an ancient civilization. 零售：fabric remnants (布料边角料).'},
{id:'diligent-hardworking',type:'register',title:'diligent → hardworking / dedicated',brief:'日常说 hardworking',formal:'diligent',natural:'hardworking / dedicated',
explanation:'diligent 是老师评语和推荐信用语。日常夸人勤奋说 hardworking / dedicated / puts in the work / hustles。',
exBad:'She\'s a very diligent student.',exGood:'She works really hard.',whenFormal:'推荐信：a diligent and conscientious worker. 法律：due diligence.'},

// ── CONFUSABLES BATCH 2 (100) ──
{id:'beside-besides',type:'confusable',title:'beside · besides',brief:'在旁边 vs 除…之外',words:[
{word:'beside',pron:'/bɪˈsaɪd/',def:'在…旁边（介词，表位置）',note:'beside = by the side，旁边',examples:['Come sit beside me.','The printer is beside the window.']},
{word:'besides',pron:'/bɪˈsaɪdz/',def:'除…之外（还有）；而且',note:'besides 多了 s，多了一层意思——"还有"',examples:['Besides English, she speaks French.','Besides, we don\'t have the budget for it.']}
],trap:'beside 只表物理位置，besides 表"此外/除了"。写邮件说"除了这个问题还有…"用 besides，不要用 beside。'},
{id:'rise-raise',type:'confusable',title:'rise · raise',brief:'自己升起 vs 举起/提高',words:[
{word:'rise',pron:'/raɪz/',def:'上升，升起（不及物动词，无需宾语）',note:'太阳自己 rise，不需要谁举它',examples:['The sun rises in the east.','Prices have risen sharply this quarter.']},
{word:'raise',pron:'/reɪz/',def:'举起，提高，抚养（及物动词，需要宾语）',note:'raise 需要对象：raise your hand / raise a child',examples:['Please raise your hand if you have questions.','They raised the price by 10%.']}
],trap:'中文"涨价"既可以是自涨（rise）也可以是人为涨（raise），注意区分主语是否施加动作。'},
{id:'costume-custom',type:'confusable',title:'costume · custom',brief:'服装 vs 习俗/定制',words:[
{word:'costume',pron:'/ˈkɑːstuːm/',def:'（特定场合的）服装，戏服',note:'costume → 联想 cosplay，穿的衣服',examples:['She wore a Halloween costume to the office party.','The actors are trying on their costumes.']},
{word:'custom',pron:'/ˈkʌstəm/',def:'习俗；惯例；（形容词）定制的',note:'custom = 习惯做的事，引申为定制',examples:['It\'s a local custom to remove shoes indoors.','We ordered custom furniture for the new office.']}
],trap:'costume 是名词（衣服），custom 是名词（习俗）或形容词（定制的）。中国学生容易拼混，注意 costume 有 -ume 结尾。'},
{id:'efficient-effective',type:'confusable',title:'efficient · effective',brief:'高效率的 vs 有效果的',words:[
{word:'efficient',pron:'/ɪˈfɪʃənt/',def:'效率高的，省时省力的',note:'efficient 强调过程——花最少的资源',examples:['She\'s an efficient worker who never wastes time.','This engine is more fuel-efficient.']},
{word:'effective',pron:'/ɪˈfɛktɪv/',def:'有效的，能达到预期效果的',note:'effective 强调结果——能不能达到目的',examples:['The new policy was effective in reducing costs.','This medicine is effective against headaches.']}
],trap:'efficient 看过程（怎么做），effective 看结果（有没有用）。一个方案可以 effective 但不 efficient（有用但费劲）。'},
{id:'electric-electronic-electrical',type:'confusable',title:'electric · electronic · electrical',brief:'用电的 · 电子的 · 电气的',words:[
{word:'electric',pron:'/ɪˈlɛktrɪk/',def:'用电的，电动的（直接用电驱动）',note:'electric = 直接靠电跑的：electric car',examples:['We bought an electric car last month.','The stage had an electric atmosphere.']},
{word:'electronic',pron:'/ɪˌlɛkˈtrɑːnɪk/',def:'电子的（含芯片、电路等）',note:'electronic = 有电子元件的：electronic device',examples:['Please submit the electronic version of the report.','Electronic payments are widely accepted here.']},
{word:'electrical',pron:'/ɪˈlɛktrɪkəl/',def:'与电相关的（泛指电气领域）',note:'electrical = 跟电这个领域有关的：electrical engineer',examples:['He studied electrical engineering in college.','There\'s an electrical fault in the building.']}
],trap:'electric 强调"用电驱动"，electronic 强调"含电子芯片"，electrical 是最宽泛的"与电有关的"。'},
{id:'exhausted-exhaustive',type:'confusable',title:'exhausted · exhaustive',brief:'筋疲力尽的 vs 详尽的',words:[
{word:'exhausted',pron:'/ɪɡˈzɔːstɪd/',def:'精疲力竭的；用尽的',note:'exhaust 耗尽 → exhausted 被耗尽了 → 累坏了',examples:['I\'m exhausted after the 12-hour flight.','Our budget is completely exhausted.']},
{word:'exhaustive',pron:'/ɪɡˈzɔːstɪv/',def:'详尽的，彻底的，无遗漏的',note:'-ive 表"具有…性质的" → 把所有可能都穷尽',examples:['We conducted an exhaustive review of all candidates.','The report provides an exhaustive list of risks.']}
],trap:'exhausted 是"累坏了"，exhaustive 是"面面俱到"。写邮件说"详细的调查"用 exhaustive，不是 exhausted。'},
{id:'respectable-respective-respectful',type:'confusable',title:'respectable · respective · respectful',brief:'体面的 · 各自的 · 恭敬的',words:[
{word:'respectable',pron:'/rɪˈspɛktəbəl/',def:'值得尊敬的；体面的；相当不错的',note:'-able = 值得…的 → 值得尊敬的',examples:['He comes from a respectable family.','She earned a respectable score on the exam.']},
{word:'respective',pron:'/rɪˈspɛktɪv/',def:'各自的，分别的',note:'respective = re-spect-ive，各人回头看自己的',examples:['Please return to your respective departments.','They went to their respective offices after the meeting.']},
{word:'respectful',pron:'/rɪˈspɛktfəl/',def:'恭敬的，有礼貌的',note:'-ful = 充满…的 → 充满尊敬的',examples:['Students should be respectful to their teachers.','He maintained a respectful tone throughout the debate.']}
],trap:'respective 最常被误用。它表示"各自的"，跟"尊敬"无关。Please go to your respective seats = 请各回各的座位。'},
{id:'considerable-considerate',type:'confusable',title:'considerable · considerate',brief:'相当大的 vs 体贴的',words:[
{word:'considerable',pron:'/kənˈsɪdərəbəl/',def:'相当大的，相当多的',note:'-able = 值得考虑的 → 大到值得注意',examples:['We spent a considerable amount on marketing.','There has been considerable improvement this quarter.']},
{word:'considerate',pron:'/kənˈsɪdərət/',def:'体贴的，考虑周到的',note:'-ate = 具有…特质的 → 为别人着想的',examples:['It was considerate of you to hold the door.','She\'s always considerate of other people\'s feelings.']}
],trap:'considerable 说"量大"，considerate 说"人好"。a considerable person 是"重要人物"不是"体贴的人"。'},
{id:'imaginary-imaginative',type:'confusable',title:'imaginary · imaginative',brief:'虚构的 vs 有想象力的',words:[
{word:'imaginary',pron:'/ɪˈmædʒɪnɛri/',def:'虚构的，想象中的，不存在的',note:'imaginary = 只在脑子里的，不真实的',examples:['The child has an imaginary friend.','The threat turned out to be imaginary.']},
{word:'imaginative',pron:'/ɪˈmædʒɪnətɪv/',def:'有想象力的，有创意的',note:'imaginative = 擅长想象的，褒义',examples:['She proposed an imaginative solution to the problem.','The designer is known for imaginative use of color.']}
],trap:'imaginary 是贬义/中性（不真实），imaginative 是褒义（有创造力）。说人有创意用 imaginative，不要用 imaginary。'},
{id:'comparable-comparative',type:'confusable',title:'comparable · comparative',brief:'可比较的 vs 比较的/相对的',words:[
{word:'comparable',pron:'/ˈkɑːmpərəbəl/',def:'可比较的；类似的，相当的',note:'comparable = 可以放在一起比的',examples:['The two products are comparable in quality.','She earns a salary comparable to her peers.']},
{word:'comparative',pron:'/kəmˈpærətɪv/',def:'比较的；相对的',note:'comparative = 用来做比较的（学术/分析用语）',examples:['We did a comparative analysis of both vendors.','He\'s a comparative newcomer to the industry.']}
],trap:'comparable 强调"水平相当，可以类比"，comparative 强调"比较这个动作/方法"。'},
{id:'literal-literary-literate',type:'confusable',title:'literal · literary · literate',brief:'字面的 · 文学的 · 有读写能力的',words:[
{word:'literal',pron:'/ˈlɪtərəl/',def:'字面的，逐字的；确实的',note:'literal = letter（字母）→ 按字面意思来',examples:['That\'s the literal translation from Chinese.','It was a literal disaster—the building collapsed.']},
{word:'literary',pron:'/ˈlɪtərɛri/',def:'文学的，文学性的',note:'literary = literature → 跟文学有关的',examples:['She has a literary writing style.','He won a prestigious literary award.']},
{word:'literate',pron:'/ˈlɪtərət/',def:'有读写能力的；精通的',note:'literate = 能读能写的 → 有文化的',examples:['Most adults in Singapore are literate in at least two languages.','You need to be digitally literate in today\'s workplace.']}
],trap:'literal 是"字面的"，literary 是"文学的"，literate 是"识字/精通的"。三个词都源自 liter-（字母），但含义差异大。'},
{id:'classic-classical',type:'confusable',title:'classic · classical',brief:'经典的 vs 古典的',words:[
{word:'classic',pron:'/ˈklæsɪk/',def:'经典的，一流的，典型的',note:'classic = 经久不衰的好东西',examples:['That\'s a classic mistake beginners make.','The movie is a classic—everyone should watch it.']},
{word:'classical',pron:'/ˈklæsɪkəl/',def:'古典的（尤指古希腊罗马或古典音乐）',note:'classical = 古典时代/古典风格的',examples:['She studied classical music at the conservatory.','The building features classical architecture.']}
],trap:'classic car 是"经典老爷车"（好东西），classical music 是"古典音乐"（时代风格）。'},
{id:'confident-confidential',type:'confusable',title:'confident · confidential',brief:'自信的 vs 机密的',words:[
{word:'confident',pron:'/ˈkɑːnfɪdənt/',def:'自信的，有把握的',note:'confident = confide + -ent → 对自己有信心',examples:['I\'m confident we\'ll meet the deadline.','She gave a confident presentation to the board.']},
{word:'confidential',pron:'/ˌkɑːnfɪˈdɛnʃəl/',def:'机密的，保密的',note:'confidential = confide + -ential → 私下说的 → 保密的',examples:['This document is strictly confidential.','Please treat this information as confidential.']}
],trap:'confident 说人（自信的），confidential 说信息（保密的）。邮件标 confidential 表示"机密"，别写成 confident。'},
{id:'convenient-conventional',type:'confusable',title:'convenient · conventional',brief:'方便的 vs 传统的',words:[
{word:'convenient',pron:'/kənˈviːniənt/',def:'方便的，便利的',note:'convenient = 来（ven）到一起 → 凑手，方便',examples:['Is 3 PM convenient for you?','The hotel is in a convenient location near the station.']},
{word:'conventional',pron:'/kənˈvɛnʃənəl/',def:'传统的，常规的',note:'conventional = convention（惯例）→ 按老规矩来的',examples:['We should explore options beyond conventional methods.','He has a rather conventional approach to management.']}
],trap:'convenient 是"方便的"，conventional 是"传统的"。两个词拼写接近但意思完全不同。'},
{id:'temporary-contemporary',type:'confusable',title:'temporary · contemporary',brief:'临时的 vs 当代的/同时代的',words:[
{word:'temporary',pron:'/ˈtɛmpərɛri/',def:'临时的，暂时的',note:'tempor（时间）+ ary → 只持续一段时间的',examples:['This is a temporary solution until we find a better one.','She got a temporary job during the summer.']},
{word:'contemporary',pron:'/kənˈtɛmpərɛri/',def:'当代的；同时代的',note:'con（共同）+ tempor（时间）→ 同一时代的',examples:['The gallery features contemporary art.','Shakespeare and Cervantes were contemporaries.']}
],trap:'temporary 强调"短暂/临时"，contemporary 强调"当代/同期"。contemporary design 是"当代设计"不是"临时设计"。'},
{id:'worthless-worthwhile',type:'confusable',title:'worthless · worthwhile',brief:'毫无价值的 vs 值得的',words:[
{word:'worthless',pron:'/ˈwɜːrθləs/',def:'毫无价值的，没用的',note:'worth + less（没有）→ 没有价值的',examples:['The old currency is now worthless.','Don\'t waste time on worthless arguments.']},
{word:'worthwhile',pron:'/ˌwɜːrθˈwaɪl/',def:'值得的，有价值的',note:'worth + while（时间）→ 值得花时间的',examples:['It\'s a worthwhile investment for the long term.','The training was worthwhile—I learned a lot.']}
],trap:'worthless 和 worthwhile 意思完全相反！worthless = 没价值，worthwhile = 很值得。'},
{id:'price-prize',type:'confusable',title:'price · prize',brief:'价格 vs 奖品',words:[
{word:'price',pron:'/praɪs/',def:'价格，代价',note:'price = 要你付多少钱',examples:['What\'s the price of this laptop?','We paid a high price for that mistake.']},
{word:'prize',pron:'/praɪz/',def:'奖品，奖赏',note:'prize = 赢了才拿到的好东西',examples:['She won first prize in the design competition.','The Nobel Prize is the highest honor in science.']}
],trap:'price 是你要付的（价格），prize 是你能赢的（奖品）。中国学生容易拼混 -ice 和 -ize。'},
{id:'shade-shadow',type:'confusable',title:'shade · shadow',brief:'荫凉 vs 影子',words:[
{word:'shade',pron:'/ʃeɪd/',def:'阴凉处；遮光物；色度',note:'shade = 大面积的阴凉，让你凉快的地方',examples:['Let\'s sit in the shade of that tree.','This shade of blue matches our brand color.']},
{word:'shadow',pron:'/ˈʃædoʊ/',def:'影子，阴影；跟踪',note:'shadow = 特定物体投下的轮廓形状',examples:['His shadow grew longer as the sun set.','The scandal cast a shadow over his career.']}
],trap:'shade 是大面积"荫凉"（sit in the shade），shadow 是物体投下的"影子"（轮廓）。'},
{id:'acquire-inquire',type:'confusable',title:'acquire · inquire',brief:'获得 vs 询问',words:[
{word:'acquire',pron:'/əˈkwaɪər/',def:'获得，取得，收购',note:'ac（去）+ quire（寻求）→ 去找来 → 获得',examples:['The company acquired a startup last year.','She acquired fluency in English through years of practice.']},
{word:'inquire',pron:'/ɪnˈkwaɪər/',def:'询问，调查',note:'in（向内）+ quire（寻求）→ 深入问 → 询问',examples:['I\'d like to inquire about the job opening.','She inquired whether the meeting had been rescheduled.']}
],trap:'acquire 是"拿到手"，inquire 是"张嘴问"。写邮件 I\'d like to inquire about... 是询问，不是获取。'},
{id:'assume-presume',type:'confusable',title:'assume · presume',brief:'假设（无依据）vs 推测（有依据）',words:[
{word:'assume',pron:'/əˈsuːm/',def:'假设，假定（没有证据）；承担',note:'assume = 没证据就当真了',examples:['Don\'t assume everyone agrees with you.','She assumed the role of team lead last month.']},
{word:'presume',pron:'/prɪˈzuːm/',def:'推测，推定（基于一定证据）',note:'pre（预先）+ sume → 有理由提前判断',examples:['I presume you\'ve read the report since you were at the meeting.','Dr. Livingstone, I presume?']}
],trap:'assume 是"无根据地假定"（常含贬义），presume 是"有理由地推测"。assume the worst = 往最坏了想。'},
{id:'bare-bear',type:'confusable',title:'bare · bear',brief:'赤裸的 vs 承受/熊',words:[
{word:'bare',pron:'/bɛr/',def:'赤裸的，光秃秃的；仅仅的',note:'bare = 什么都没穿/没覆盖的',examples:['He walked on the beach with bare feet.','The room was bare—no furniture at all.']},
{word:'bear',pron:'/bɛr/',def:'承受，忍受；携带；熊',note:'bear = 扛住 / 忍住 / 那个大动物',examples:['I can\'t bear the noise anymore.','Please bear in mind that the deadline is Friday.']}
],trap:'bare 是"赤裸/光秃"，bear 是"承受/忍受"。bare with me 是错的，应该是 bear with me（请多包涵）。'},
{id:'deny-refuse-decline',type:'confusable',title:'deny · refuse · decline',brief:'否认 · 拒绝 · 婉拒',words:[
{word:'deny',pron:'/dɪˈnaɪ/',def:'否认，否定（事实或指控）',note:'deny = 说"那不是真的"',examples:['He denied any involvement in the scandal.','She denied the accusation firmly.']},
{word:'refuse',pron:'/rɪˈfjuːz/',def:'拒绝（态度较强硬）',note:'refuse = 说"我不干"，比较直接',examples:['He refused to sign the contract.','She refused the offer without hesitation.']},
{word:'decline',pron:'/dɪˈklaɪn/',def:'婉拒，谢绝（较礼貌）；下降',note:'decline = 优雅地说"不"',examples:['I\'m afraid I must decline your invitation.','Sales declined by 15% last quarter.']}
],trap:'deny 否认事实，refuse 硬拒，decline 婉拒。职场邮件推荐用 decline（更礼貌）。'},
{id:'expand-extend-expend',type:'confusable',title:'expand · extend · expend',brief:'扩大 · 延伸 · 花费',words:[
{word:'expand',pron:'/ɪkˈspænd/',def:'扩大，扩展（体积、规模变大）',note:'expand = 向外膨胀',examples:['We plan to expand our team next quarter.','The company is expanding into Asian markets.']},
{word:'extend',pron:'/ɪkˈstɛnd/',def:'延伸，延长（长度、时间拉长）',note:'extend = 往外拉长',examples:['Can we extend the deadline by one week?','The contract has been extended for another year.']},
{word:'expend',pron:'/ɪkˈspɛnd/',def:'花费，消耗（资源、精力）',note:'expend = expense 的动词，花钱/花精力',examples:['We expended a lot of energy on this project.','Don\'t expend resources on low-priority tasks.']}
],trap:'expand 是面积/规模变大，extend 是长度/时间变长，expend 是花费/消耗。'},
{id:'preserve-reserve-conserve',type:'confusable',title:'preserve · reserve · conserve',brief:'保存 · 预留 · 节约',words:[
{word:'preserve',pron:'/prɪˈzɜːrv/',def:'保存，保护（使不被破坏）',note:'pre（预先）+ serve（保持）→ 提前保护好',examples:['We must preserve these historical buildings.','The museum works to preserve ancient artifacts.']},
{word:'reserve',pron:'/rɪˈzɜːrv/',def:'预留，预订；储备',note:'re（再）+ serve（保持）→ 留着以后用',examples:['I\'d like to reserve a table for two.','We should reserve some budget for emergencies.']},
{word:'conserve',pron:'/kənˈsɜːrv/',def:'节约，保护（自然资源）',note:'con（共同）+ serve → 大家一起省着用',examples:['We need to conserve water during the drought.','Please conserve energy by turning off lights.']}
],trap:'preserve 侧重"保护不被毁"，reserve 侧重"留着备用"，conserve 侧重"节约使用"。'},
{id:'propose-suppose',type:'confusable',title:'propose · suppose',brief:'提议 vs 假设/认为',words:[
{word:'propose',pron:'/prəˈpoʊz/',def:'提议，建议；求婚',note:'pro（向前）+ pose → 摆到前面 → 提出来',examples:['I propose we postpone the launch by two weeks.','He proposed to her on Valentine\'s Day.']},
{word:'suppose',pron:'/səˈpoʊz/',def:'假设，认为；（be supposed to）应该',note:'sup（下面）+ pose → 放在下面当基础 → 假设',examples:['I suppose you\'re right about the timeline.','You\'re supposed to submit the report by Friday.']}
],trap:'propose 是主动"提议"，suppose 是"假设/认为"。be supposed to = 应该做某事。'},
{id:'recall-remind',type:'confusable',title:'recall · remind',brief:'回忆起 vs 提醒',words:[
{word:'recall',pron:'/rɪˈkɔːl/',def:'回忆起，记起；召回',note:'re（再）+ call（叫）→ 再叫回来 → 想起来',examples:['I can\'t recall his name at the moment.','The manufacturer recalled the defective products.']},
{word:'remind',pron:'/rɪˈmaɪnd/',def:'提醒（某人某事）',note:'re + mind → 让你再想起来 → 提醒你',examples:['Please remind me to call the client at 3 PM.','This reminds me of a similar project we did.']},
],trap:'recall 是自己想起来，remind 是别人让你想起来。I recall = 我记起来了，remind me = 提醒我。'},
{id:'access-assess',type:'confusable',title:'access · assess',brief:'进入/获取 vs 评估',words:[
{word:'access',pron:'/ˈæksɛs/',def:'进入，获取；通道，权限',note:'access = 走进去 / 拿到',examples:['You need a badge to access the server room.','Do you have access to the shared drive?']},
{word:'assess',pron:'/əˈsɛs/',def:'评估，评定',note:'assess = 坐下来仔细看看值多少 / 怎么样',examples:['We need to assess the risks before proceeding.','The manager will assess your performance quarterly.']}
],trap:'access 是"进入/获取"（一个 s），assess 是"评估"（两个 s）。发音和拼写都容易混。'},
{id:'aboard-abroad',type:'confusable',title:'aboard · abroad',brief:'在船/飞机上 vs 在国外',words:[
{word:'aboard',pron:'/əˈbɔːrd/',def:'在（船、飞机、火车）上',note:'a + board → 上了板（船板）→ 上了车/船',examples:['Welcome aboard Flight SQ321.','All passengers are now aboard.']},
{word:'abroad',pron:'/əˈbrɔːd/',def:'在国外，到国外',note:'a + broad → 到广阔的地方 → 出国',examples:['She studied abroad in the UK for two years.','Our company has operations abroad.']}
],trap:'aboard 是"上了交通工具"，abroad 是"在国外"。go aboard = 登船，go abroad = 出国。'},
{id:'angel-angle',type:'confusable',title:'angel · angle',brief:'天使 vs 角度',words:[
{word:'angel',pron:'/ˈeɪndʒəl/',def:'天使',note:'angel 中间是 gel，天使像果冻一样软萌',examples:['She\'s been an angel—helping us with everything.','The painting depicts an angel with golden wings.']},
{word:'angle',pron:'/ˈæŋɡəl/',def:'角度，角；观点',note:'angle 中间是 gle，像一个尖角',examples:['Let\'s approach this problem from a different angle.','The two lines meet at a 90-degree angle.']}
],trap:'angel（天使）和 angle（角度）只是字母 e 和 l 位置互换，中国学生打字时经常拼错。'},
{id:'dairy-diary',type:'confusable',title:'dairy · diary',brief:'乳制品 vs 日记',words:[
{word:'dairy',pron:'/ˈdɛri/',def:'乳制品；乳品店',note:'dairy = d + airy，奶牛在空旷（airy）的牧场',examples:['She avoids dairy products due to lactose intolerance.','The dairy section is at the back of the supermarket.']},
{word:'diary',pron:'/ˈdaɪəri/',def:'日记；日程本',note:'diary = di + ary，每日（di = day）记录',examples:['She writes in her diary every night.','Let me check my diary for available slots.']}
],trap:'dairy（乳制品）和 diary（日记）字母顺序不同。dairy = ai 在前，diary = ia 在前。'},
{id:'dose-doze',type:'confusable',title:'dose · doze',brief:'剂量 vs 打盹',words:[
{word:'dose',pron:'/doʊs/',def:'（药的）剂量，一剂',note:'dose 有 s → 吃 s（药）',examples:['Take one dose of this medicine after each meal.','A small dose of humor helps in presentations.']},
{word:'doze',pron:'/doʊz/',def:'打盹，小睡',note:'doze 有 z → zzz 打瞌睡',examples:['He dozed off during the afternoon meeting.','I had a quick doze on the sofa.']}
],trap:'dose 是药的剂量（s 像药片），doze 是打瞌睡（z 像打呼 zzz）。'},
{id:'crash-crush',type:'confusable',title:'crash · crush',brief:'撞毁 vs 压碎/迷恋',words:[
{word:'crash',pron:'/kræʃ/',def:'碰撞，坠毁；崩溃；速成',note:'crash = 猛烈撞上去，砰！',examples:['The app crashed again during the demo.','He took a crash course in Python before the project.']},
{word:'crush',pron:'/krʌʃ/',def:'压碎，碾碎；迷恋',note:'crush = 慢慢压扁',examples:['Don\'t crush the box—there are fragile items inside.','She has a crush on the new colleague.']}
],trap:'crash 是猛烈撞击（车祸、系统崩溃），crush 是用力压碎（或对人心动）。'},
{id:'wander-wonder',type:'confusable',title:'wander · wonder',brief:'闲逛 vs 想知道/惊叹',words:[
{word:'wander',pron:'/ˈwɑːndər/',def:'闲逛，漫步；走神',note:'wander = w + and + er，这里那里走',examples:['We wandered around the old town for hours.','Sorry, my mind wandered during the meeting.']},
{word:'wonder',pron:'/ˈwʌndər/',def:'想知道；惊叹；奇迹',note:'wonder = 心里画问号，好奇',examples:['I wonder if we could move the meeting to Tuesday.','The Great Wall is one of the wonders of the world.']}
],trap:'wander 是用脚走（闲逛），wonder 是用脑想（好奇）。I wonder... 是邮件中委婉提问的好用句式。'},
{id:'later-latter',type:'confusable',title:'later · latter',brief:'后来 vs 后者',words:[
{word:'later',pron:'/ˈleɪtər/',def:'后来，稍后（时间上的晚）',note:'later = late 的比较级 → 更晚',examples:['Let\'s discuss this later.','She arrived later than expected.']},
{word:'latter',pron:'/ˈlætər/',def:'后者（两者中的第二个）',note:'latter 对应 former（前者）',examples:['Between React and Vue, I prefer the latter.','The latter half of the year was more profitable.']}
],trap:'later 是时间上的"稍后"，latter 是顺序上的"后者"（与 former 前者对应）。'},
{id:'attend-attain',type:'confusable',title:'attend · attain',brief:'出席 vs 达到',words:[
{word:'attend',pron:'/əˈtɛnd/',def:'出席，参加；注意',note:'attend = 到场 → 出席',examples:['Will you attend the conference next week?','Please attend to this urgent matter.']},
{word:'attain',pron:'/əˈteɪn/',def:'达到，获得（目标、水平）',note:'attain = at + tain（拿住）→ 够到了 → 达成',examples:['She attained a senior position within five years.','Very few people attain true mastery of a second language.']}
],trap:'attend 是"出席/参加"，attain 是"达到/获得"。attend a goal 是错的，应该是 attain a goal。'},
{id:'contact-contract-contrast',type:'confusable',title:'contact · contract · contrast',brief:'联系 · 合同 · 对比',words:[
{word:'contact',pron:'/ˈkɑːntækt/',def:'联系，接触；联系人',note:'con + tact（触碰）→ 碰到一起 → 联系',examples:['Please contact me if you have any questions.','She\'s my main contact at the client company.']},
{word:'contract',pron:'/ˈkɑːntrækt/',def:'合同，合约；收缩',note:'con + tract（拉）→ 拉到一起签字 → 合同',examples:['We signed a two-year contract with the vendor.','The deadline is stated in the contract.']},
{word:'contrast',pron:'/ˈkɑːntræst/',def:'对比，对照；反差',note:'contra（相反）+ st → 相反地站 → 对比',examples:['The report contrasts Q1 and Q2 performance.','In contrast to last year, sales are up.']}
],trap:'三个词长得像但意思完全不同：contact 联系，contract 合同，contrast 对比。'},
{id:'medal-metal',type:'confusable',title:'medal · metal',brief:'奖牌 vs 金属',words:[
{word:'medal',pron:'/ˈmɛdəl/',def:'奖牌，奖章',note:'medal = 比赛赢了挂脖子上的那块牌',examples:['She won a gold medal at the Olympics.','The team received medals for their achievement.']},
{word:'metal',pron:'/ˈmɛtəl/',def:'金属',note:'metal = 铁、铜、铝这类材料',examples:['The frame is made of metal.','Heavy metal music isn\'t for everyone.']}
],trap:'medal（奖牌）和 metal（金属）只差一个字母。奖牌是 medal，金属是 metal。'},
{id:'causal-casual',type:'confusable',title:'causal · casual',brief:'因果的 vs 随意的',words:[
{word:'causal',pron:'/ˈkɔːzəl/',def:'因果的，有因果关系的',note:'causal = cause（原因）+ al → 跟原因有关的',examples:['There\'s no causal relationship between the two variables.','We need to establish a causal link before drawing conclusions.']},
{word:'casual',pron:'/ˈkæʒuəl/',def:'随意的，休闲的；临时的',note:'casual = 没那么正式的',examples:['Friday is casual dress day at our office.','It was just a casual remark—don\'t read too much into it.']}
],trap:'causal 是学术词（因果关系），casual 是日常词（休闲随意）。两词发音拼写极近，注意 u 的位置。'},
{id:'career-carrier',type:'confusable',title:'career · carrier',brief:'职业 vs 运营商/搬运者',words:[
{word:'career',pron:'/kəˈrɪr/',def:'职业，事业',note:'career = 你这辈子干的事',examples:['She\'s building a career in UX design.','A career change at 40 takes courage.']},
{word:'carrier',pron:'/ˈkæriər/',def:'运营商；搬运工具；携带者',note:'carrier = carry 的名词 → 搬东西的',examples:['Which mobile carrier do you use?','The aircraft carrier arrived at port.']}
],trap:'career 是职业生涯，carrier 是运送/承载的东西。mobile carrier = 运营商，不是 mobile career。'},
{id:'cease-seize',type:'confusable',title:'cease · seize',brief:'停止 vs 抓住',words:[
{word:'cease',pron:'/siːs/',def:'停止，终止',note:'cease = 一切都静下来了 → 停',examples:['The factory will cease operations next month.','They agreed to cease hostilities immediately.']},
{word:'seize',pron:'/siːz/',def:'抓住，夺取；没收',note:'seize = 猛地抓住',examples:['We must seize this opportunity before it\'s gone.','Customs officers seized the illegal goods.']}
],trap:'cease 是"停"，seize 是"抓"。意思完全相反的力度——一个松手，一个抓紧。'},
{id:'idle-idol',type:'confusable',title:'idle · idol',brief:'空闲的 vs 偶像',words:[
{word:'idle',pron:'/ˈaɪdəl/',def:'空闲的，闲置的；懒散的',note:'idle = 没事干，闲着',examples:['The machine has been idle for two weeks.','Don\'t leave your computer idle—log out.']},
{word:'idol',pron:'/ˈaɪdəl/',def:'偶像，崇拜对象',note:'idol = 你崇拜的人',examples:['Steve Jobs is her idol in the design world.','The pop idol has millions of fans.']}
],trap:'idle（空闲的）和 idol（偶像）发音几乎一样但拼写不同，意思完全不同。'},
{id:'marital-martial',type:'confusable',title:'marital · martial',brief:'婚姻的 vs 军事的',words:[
{word:'marital',pron:'/ˈmærɪtəl/',def:'婚姻的',note:'marital = marry → 跟结婚有关的',examples:['Marital status: single, married, or divorced.','They sought marital counseling.']},
{word:'martial',pron:'/ˈmɑːrʃəl/',def:'军事的，武术的',note:'martial = Mars（战神）→ 跟打仗有关的',examples:['He practiced martial arts for twenty years.','The government declared martial law.']}
],trap:'marital 是婚姻的（填表常见 marital status），martial 是军事的（martial arts 武术）。只差 i 和 h 的位置。'},
{id:'minor-miner',type:'confusable',title:'minor · miner',brief:'次要的/未成年人 vs 矿工',words:[
{word:'minor',pron:'/ˈmaɪnər/',def:'次要的，较小的；未成年人；辅修',note:'minor = mini → 小的 → 次要的',examples:['It\'s a minor issue—don\'t worry about it.','She chose psychology as her minor in college.']},
{word:'miner',pron:'/ˈmaɪnər/',def:'矿工',note:'miner = mine（矿）+ r → 在矿里干活的人',examples:['Coal miners face serious health risks.','The miners were rescued after three days underground.']}
],trap:'minor（次要的/未成年人）和 miner（矿工）发音完全一样，但拼写和意思不同。'},
{id:'peak-peek',type:'confusable',title:'peak · peek',brief:'顶峰 vs 偷看',words:[
{word:'peak',pron:'/piːk/',def:'顶峰，高峰；最高点',note:'peak = 山尖尖 → 最高点',examples:['Traffic reaches its peak around 6 PM.','We\'re at peak capacity—no more bookings.']},
{word:'peek',pron:'/piːk/',def:'偷看，窥视',note:'peek = 悄悄看一眼',examples:['She took a peek at the exam results.','Can I peek at your notes before the meeting?']}
],trap:'peak 是最高点（peak hours 高峰期），peek 是偷看一眼。sneak peek = 先睹为快。'},
{id:'plain-plane',type:'confusable',title:'plain · plane',brief:'朴素的/平原 vs 飞机/平面',words:[
{word:'plain',pron:'/pleɪn/',def:'朴素的，简单的；平原；明显的',note:'plain = 平平的 → 朴素/明显',examples:['Let me make this plain: we need to cut costs.','She prefers plain clothes over flashy outfits.']},
{word:'plane',pron:'/pleɪn/',def:'飞机；平面；层面',note:'plane = 在平面上飞的 → 飞机',examples:['The plane lands at 8 PM.','On a theoretical plane, the idea works.']}
],trap:'plain 是"朴素/明显/平原"，plane 是"飞机/平面"。plain language = 简明语言。'},
{id:'pray-prey',type:'confusable',title:'pray · prey',brief:'祈祷 vs 猎物',words:[
{word:'pray',pron:'/preɪ/',def:'祈祷，祈求',note:'pray = 双手合十向上',examples:['They prayed for a successful product launch.','I pray this email finds you well.']},
{word:'prey',pron:'/preɪ/',def:'猎物；受害者',note:'prey = 被猎的对象',examples:['Scammers prey on vulnerable elderly people.','The eagle swooped down on its prey.']}
],trap:'pray 是祈祷（向上），prey 是猎物（被抓）。prey on = 捕食/欺骗弱者。'},
{id:'profit-prophet',type:'confusable',title:'profit · prophet',brief:'利润 vs 先知',words:[
{word:'profit',pron:'/ˈprɑːfɪt/',def:'利润，收益；受益',note:'profit = pro（向前）+ fit → 向前走的好处 → 利润',examples:['The company reported a 20% increase in profit.','You\'ll profit from reading this book.']},
{word:'prophet',pron:'/ˈprɑːfɪt/',def:'先知，预言者',note:'prophet = 能提前说出真相的人',examples:['He\'s no prophet—he just reads the data well.','The prophet warned of difficult times ahead.']}
],trap:'profit（利润）和 prophet（先知）发音很像。商业语境用 profit，宗教/预言语境用 prophet。'},
{id:'sweet-sweat',type:'confusable',title:'sweet · sweat',brief:'甜的 vs 汗水',words:[
{word:'sweet',pron:'/swiːt/',def:'甜的，甜蜜的',note:'sweet = 吃到嘴里甜甜的',examples:['That\'s so sweet of you to remember my birthday.','The dessert was too sweet for my taste.']},
{word:'sweat',pron:'/swɛt/',def:'汗水；出汗；辛苦',note:'sweat = 热了累了流的水',examples:['No sweat—I\'ll handle it.','Don\'t sweat the small stuff.']}
],trap:'sweet 是甜（ee 像笑脸），sweat 是汗（ea 像流下的汗）。No sweat = 没问题/小事一桩。'},
{id:'trail-trial',type:'confusable',title:'trail · trial',brief:'小路/痕迹 vs 审判/试用',words:[
{word:'trail',pron:'/treɪl/',def:'小路，踪迹；跟踪',note:'trail = 走过留下的痕迹 → 小路',examples:['We hiked along a mountain trail.','The company is trailing behind its competitors.']},
{word:'trial',pron:'/ˈtraɪəl/',def:'审判；试验，试用',note:'trial = try 的名词 → 尝试/审判',examples:['The free trial expires in 14 days.','The trial revealed new evidence.']}
],trap:'trail 是小路/痕迹，trial 是试用/审判。free trial = 免费试用，不是 free trail。'},
{id:'vain-vein-vane',type:'confusable',title:'vain · vein · vane',brief:'徒劳的/自负的 · 血管 · 风向标',words:[
{word:'vain',pron:'/veɪn/',def:'徒劳的；自负的',note:'vain = 白费了 / 太自恋了',examples:['All our efforts were in vain.','He\'s too vain to admit he was wrong.']},
{word:'vein',pron:'/veɪn/',def:'血管，静脉；风格',note:'vein = 身体里流血的管子',examples:['The nurse found a vein and drew blood.','Let\'s continue in this vein for the next section.']},
{word:'vane',pron:'/veɪn/',def:'风向标',note:'vane = 屋顶上随风转的那个',examples:['The weather vane pointed north.','Wind vanes are common on old farmhouses.']}
],trap:'三个词发音完全一样：vain（徒劳/自负），vein（血管），vane（风向标）。in vain = 徒劳。'},
{id:'waist-waste',type:'confusable',title:'waist · waste',brief:'腰 vs 浪费',words:[
{word:'waist',pron:'/weɪst/',def:'腰，腰部',note:'waist = 身体中间细的地方',examples:['The dress fits perfectly at the waist.','He measured his waist before ordering pants online.']},
{word:'waste',pron:'/weɪst/',def:'浪费；废物',note:'waste = 扔掉的/白花的',examples:['Don\'t waste time on unnecessary meetings.','We need to reduce waste in our production process.']}
],trap:'waist 是腰（ai = 腰身），waste 是浪费（a = 啊，白费了）。'},
{id:'steal-steel',type:'confusable',title:'steal · steel',brief:'偷 vs 钢铁',words:[
{word:'steal',pron:'/stiːl/',def:'偷窃；悄悄移动',note:'steal = 趁人不注意拿走',examples:['Someone stole my idea in the meeting.','She stole a glance at her phone during the presentation.']},
{word:'steel',pron:'/stiːl/',def:'钢铁；使坚强',note:'steel = 硬邦邦的金属',examples:['The bridge is made of steel and concrete.','Steel yourself for some tough feedback.']}
],trap:'steal（偷）和 steel（钢）发音一样但意思不同。steal the show = 抢风头。'},
{id:'staff-stuff',type:'confusable',title:'staff · stuff',brief:'员工 vs 东西',words:[
{word:'staff',pron:'/stæf/',def:'员工，工作人员',note:'staff = 帮你干活的一群人',examples:['We need to hire more staff for the new project.','The staff meeting is at 10 AM every Monday.']},
{word:'stuff',pron:'/stʌf/',def:'东西，材料；填充',note:'stuff = 各种杂七杂八的东西',examples:['Just leave your stuff on the desk.','I have a lot of stuff to do today.']}
],trap:'staff 是人（员工），stuff 是物（东西）。中国学生常把 staff 和 stuff 搞混，注意元音 a vs u。'},
{id:'sore-soar',type:'confusable',title:'sore · soar',brief:'疼痛的 vs 翱翔',words:[
{word:'sore',pron:'/sɔːr/',def:'疼痛的，酸痛的',note:'sore = 碰了就疼的地方',examples:['My throat is sore—I think I\'m catching a cold.','It\'s a sore point for him, so don\'t bring it up.']},
{word:'soar',pron:'/sɔːr/',def:'翱翔；猛增',note:'soar = 像鸟一样飞得很高',examples:['The eagle soared above the mountains.','Prices soared after the announcement.']}
],trap:'sore 是疼（sore throat 喉咙痛），soar 是飞/猛涨（prices soar 价格飙升）。'},
{id:'sole-soul',type:'confusable',title:'sole · soul',brief:'唯一的/鞋底 vs 灵魂',words:[
{word:'sole',pron:'/soʊl/',def:'唯一的；鞋底',note:'sole = solo → 只有一个的',examples:['She is the sole owner of the company.','The sole purpose of this meeting is to align on priorities.']},
{word:'soul',pron:'/soʊl/',def:'灵魂，心灵',note:'soul = 人最深处的东西',examples:['She poured her heart and soul into the project.','Not a soul knew about the secret plan.']}
],trap:'sole 是唯一的/鞋底，soul 是灵魂。the sole reason = 唯一的原因。'},
{id:'suit-suite',type:'confusable',title:'suit · suite',brief:'西装/适合 vs 套房/套件',words:[
{word:'suit',pron:'/suːt/',def:'西装；适合；诉讼',note:'suit = 一套正装 / 合适',examples:['He wore a suit to the interview.','Whatever suits you best—I\'m flexible.']},
{word:'suite',pron:'/swiːt/',def:'套房；套件（软件/家具）',note:'suite = suit + e → 加了 e 变成"一整套"',examples:['We booked a suite at the hotel for the client.','The Adobe Creative Suite includes Photoshop and Illustrator.']}
],trap:'suit /suːt/ 是西装/适合，suite /swiːt/ 是套房/套件。发音不同！suite 读起来像 sweet。'},
{id:'flour-floor',type:'confusable',title:'flour · floor',brief:'面粉 vs 地板/楼层',words:[
{word:'flour',pron:'/flaʊər/',def:'面粉',note:'flour = 做面包用的白色粉末',examples:['We need flour to make the dough.','The recipe calls for two cups of flour.']},
{word:'floor',pron:'/flɔːr/',def:'地板，地面；楼层',note:'floor = 脚踩的那个平面',examples:['The office is on the 15th floor.','She dropped the files on the floor.']}
],trap:'flour 是面粉（ou 像一碗面粉），floor 是地板/楼层（oo 像两只脚站着）。'},
{id:'stare-stair',type:'confusable',title:'stare · stair',brief:'盯着看 vs 楼梯',words:[
{word:'stare',pron:'/stɛr/',def:'盯着看，凝视',note:'stare = 眼睛直直地看过去',examples:['Don\'t stare at your phone during meetings.','She stared at the screen in disbelief.']},
{word:'stair',pron:'/stɛr/',def:'楼梯，台阶',note:'stair = 一级一级往上走的',examples:['Take the stairs instead of the elevator.','She fell down the stairs and hurt her ankle.']}
],trap:'stare 是盯着看（are = 你在看），stair 是楼梯（air = 台阶间的空气）。'},
{id:'story-storey',type:'confusable',title:'story · storey',brief:'故事 vs 楼层',words:[
{word:'story',pron:'/ˈstɔːri/',def:'故事，经历；新闻报道',note:'story = 有人物有情节的叙述',examples:['That\'s a long story—I\'ll tell you over lunch.','The news story went viral overnight.']},
{word:'storey',pron:'/ˈstɔːri/',def:'（建筑物的）楼层（英式拼法）',note:'storey = 建筑的一层（美式用 story）',examples:['The building is a five-storey office block.','They live on the top storey of the apartment.']}
],trap:'story 是故事，storey 是楼层（英式）。新加坡用英式拼法 storey。美式英语楼层也写作 story。'},
{id:'urban-urbane',type:'confusable',title:'urban · urbane',brief:'城市的 vs 文雅的',words:[
{word:'urban',pron:'/ˈɜːrbən/',def:'城市的，都市的',note:'urban = 跟城市有关的',examples:['Urban areas tend to have better public transport.','She studies urban planning at university.']},
{word:'urbane',pron:'/ɜːrˈbeɪn/',def:'文雅的，温文尔雅的',note:'urbane = 城里人的做派 → 有教养的',examples:['He\'s an urbane gentleman with impeccable manners.','Her urbane wit charmed everyone at the dinner.']}
],trap:'urban 是"城市的"（日常词），urbane 是"文雅的"（书面词）。多一个 e，意思大不同。'},
{id:'popular-populous',type:'confusable',title:'popular · populous',brief:'受欢迎的 vs 人口多的',words:[
{word:'popular',pron:'/ˈpɑːpjələr/',def:'受欢迎的，流行的',note:'popular = 很多人喜欢的',examples:['This feature is very popular among our users.','He\'s a popular manager—everyone likes working with him.']},
{word:'populous',pron:'/ˈpɑːpjələs/',def:'人口稠密的',note:'populous = popul（人民）+ ous → 人很多的',examples:['China and India are the most populous countries.','Singapore is one of the most populous cities in the world.']}
],trap:'popular 是受欢迎，populous 是人多。a popular city = 热门城市，a populous city = 人口大城市。'},
{id:'simulate-stimulate',type:'confusable',title:'simulate · stimulate',brief:'模拟 vs 刺激',words:[
{word:'simulate',pron:'/ˈsɪmjəleɪt/',def:'模拟，仿真',note:'simulate = similar → 做一个像真的一样的',examples:['We used software to simulate the user experience.','The test simulates real-world conditions.']},
{word:'stimulate',pron:'/ˈstɪmjəleɪt/',def:'刺激，激发',note:'stimulate = 戳一下让它动起来',examples:['The new policy aims to stimulate economic growth.','Coffee stimulates the nervous system.']}
],trap:'simulate 是假装/模拟（simulation 模拟），stimulate 是激发/刺激（stimulus 刺激物）。'},
{id:'statue-status-statute',type:'confusable',title:'statue · status · statute',brief:'雕像 · 状态 · 法规',words:[
{word:'statue',pron:'/ˈstætʃuː/',def:'雕像，塑像',note:'statue = 站在那里不动的人形 → 雕像',examples:['The Statue of Liberty is a famous landmark.','There\'s a statue of the founder in the lobby.']},
{word:'status',pron:'/ˈstætəs/',def:'状态，地位',note:'status = 现在是什么情况',examples:['What\'s the status of the project?','She achieved senior status within three years.']},
{word:'statute',pron:'/ˈstætʃuːt/',def:'法规，法令',note:'statute = state（国家）制定的规则',examples:['The statute prohibits discrimination in hiring.','According to the statute, the fine is $5,000.']}
],trap:'statue 雕像，status 状态，statute 法规。三个词看起来像，但意思完全不同。project status = 项目状态。'},
{id:'sympathetic-synthetic',type:'confusable',title:'sympathetic · synthetic',brief:'同情的 vs 合成的',words:[
{word:'sympathetic',pron:'/ˌsɪmpəˈθɛtɪk/',def:'同情的，有同情心的',note:'sym（共同）+ pathetic（感受）→ 一起感受 → 同情',examples:['She was sympathetic to his difficult situation.','The manager gave a sympathetic response to the complaint.']},
{word:'synthetic',pron:'/sɪnˈθɛtɪk/',def:'合成的，人造的',note:'syn（一起）+ thetic（放）→ 拼在一起造的 → 人造的',examples:['The jacket is made of synthetic fabric.','Synthetic data is used to train the AI model.']}
],trap:'sympathetic 是有同情心的，synthetic 是人造合成的。两词看起来像但意思完全不同。'},
{id:'reign-rein',type:'confusable',title:'reign · rein',brief:'统治 vs 缰绳/控制',words:[
{word:'reign',pron:'/reɪn/',def:'统治，在位期间',note:'reign = king 统治 → g 像王冠',examples:['Queen Victoria\'s reign lasted over 60 years.','He reigned as CEO for a decade.']},
{word:'rein',pron:'/reɪn/',def:'缰绳；控制',note:'rein = 拉马用的绳子 → 控制',examples:['We need to rein in our spending.','She gave free rein to her creativity.']}
],trap:'reign 是统治（g = 国王 king），rein 是缰绳/控制。rein in = 控制住，free rein = 放手去做。'},
{id:'receipt-recipe',type:'confusable',title:'receipt · recipe',brief:'收据 vs 食谱',words:[
{word:'receipt',pron:'/rɪˈsiːt/',def:'收据，收条',note:'receipt = receive 的凭证 → 收到东西的证明',examples:['Please keep the receipt for reimbursement.','I\'ll email you the receipt after payment.']},
{word:'recipe',pron:'/ˈrɛsɪpi/',def:'食谱，配方；秘诀',note:'recipe = 教你怎么做菜的步骤',examples:['Can you share the recipe for that cake?','That\'s a recipe for disaster.']}
],trap:'receipt 是收据（买完东西给你的小票），recipe 是食谱（教你做菜的）。a recipe for success = 成功的秘诀。'},
{id:'rational-rationale',type:'confusable',title:'rational · rationale',brief:'理性的 vs 根本原因/理由',words:[
{word:'rational',pron:'/ˈræʃənəl/',def:'理性的，合理的（形容词）',note:'rational = 用理性思考的',examples:['Let\'s make a rational decision based on data.','That doesn\'t seem like a rational approach.']},
{word:'rationale',pron:'/ˌræʃəˈnæl/',def:'根本原因，理由（名词）',note:'rationale = 背后的道理和逻辑',examples:['What\'s the rationale behind this design change?','Please explain the rationale for choosing this vendor.']}
],trap:'rational 是形容词（理性的），rationale 是名词（理由）。邮件常用 What\'s the rationale? = 理由是什么？'},
{id:'potent-potential',type:'confusable',title:'potent · potential',brief:'强效的 vs 潜在的',words:[
{word:'potent',pron:'/ˈpoʊtənt/',def:'强效的，有力的',note:'potent = 力量很强的',examples:['This is a potent argument against the proposal.','The drug is extremely potent—use with caution.']},
{word:'potential',pron:'/pəˈtɛnʃəl/',def:'潜在的，可能的；潜力',note:'potential = 还没爆发但有可能的',examples:['We see potential in this market.','There are potential risks we haven\'t considered.']}
],trap:'potent 是"已经很强"，potential 是"有可能变强"。potent 是现在就厉害，potential 是将来可能厉害。'},
{id:'interior-inferior',type:'confusable',title:'interior · inferior',brief:'内部的 vs 低劣的',words:[
{word:'interior',pron:'/ɪnˈtɪriər/',def:'内部的，室内的；内部',note:'interior = inner → 里面的',examples:['The interior design of the office is very modern.','He moved to an interior role away from client-facing work.']},
{word:'inferior',pron:'/ɪnˈfɪriər/',def:'低劣的，次等的；下级的',note:'inferior = 在下面的 → 不如别人的',examples:['This material is inferior to what we usually use.','She refuses to accept inferior quality from vendors.']}
],trap:'interior 是"里面的"（室内设计），inferior 是"差的/低等的"。两词只差两个字母但意思不同。'},
{id:'intent-intense',type:'confusable',title:'intent · intense',brief:'意图/专注的 vs 强烈的',words:[
{word:'intent',pron:'/ɪnˈtɛnt/',def:'意图，目的；专注的',note:'intent = 心里打算做的事',examples:['What\'s the intent behind this feature?','She was intent on finishing the report tonight.']},
{word:'intense',pron:'/ɪnˈtɛns/',def:'强烈的，剧烈的；紧张的',note:'intense = 程度非常非常高的',examples:['The competition is intense in this market.','He gave her an intense look across the table.']}
],trap:'intent 是"意图/目的"（user intent 用户意图），intense 是"强烈的/激烈的"。'},
{id:'instinct-distinct',type:'confusable',title:'instinct · distinct',brief:'本能 vs 明显的/不同的',words:[
{word:'instinct',pron:'/ˈɪnstɪŋkt/',def:'本能，直觉',note:'instinct = 不用学就会的反应',examples:['My instinct tells me this deal isn\'t right.','Trust your design instinct on this one.']},
{word:'distinct',pron:'/dɪˈstɪŋkt/',def:'明显的，清晰的；不同的',note:'distinct = dis（分开）→ 分得很清楚 → 明显',examples:['There\'s a distinct difference between the two proposals.','The product has three distinct advantages.']}
],trap:'instinct 是本能（in 向内），distinct 是明显的/不同的（dis 分开）。'},
{id:'generous-genuine',type:'confusable',title:'generous · genuine',brief:'慷慨的 vs 真诚的',words:[
{word:'generous',pron:'/ˈdʒɛnərəs/',def:'慷慨的，大方的',note:'generous = 愿意给别人很多的',examples:['That\'s a very generous offer—thank you.','She\'s generous with her time and expertise.']},
{word:'genuine',pron:'/ˈdʒɛnjuɪn/',def:'真正的，真诚的；正品的',note:'genuine = 货真价实的，不是装的',examples:['He showed genuine interest in our project.','Is this a genuine leather bag or synthetic?']}
],trap:'generous 是大方慷慨，genuine 是真心真意。generous concern = 热心关心，genuine concern = 真心关心。'},
{id:'fatal-vital',type:'confusable',title:'fatal · vital',brief:'致命的 vs 至关重要的',words:[
{word:'fatal',pron:'/ˈfeɪtəl/',def:'致命的，灾难性的',note:'fatal = fate（命运）→ 要命的',examples:['One fatal flaw brought down the entire system.','The bug caused a fatal error in production.']},
{word:'vital',pron:'/ˈvaɪtəl/',def:'至关重要的，必不可少的',note:'vital = vita（生命）→ 跟生命一样重要的',examples:['Quality assurance is vital to our process.','It\'s vital that we meet the deadline.']}
],trap:'fatal 是"致死的/灾难性的"（坏事），vital 是"至关重要的"（好事）。fatal error = 致命错误。'},
{id:'domestic-dominant',type:'confusable',title:'domestic · dominant',brief:'国内的/家庭的 vs 主导的',words:[
{word:'domestic',pron:'/dəˈmɛstɪk/',def:'国内的；家庭的',note:'domestic = domus（家）→ 家里的/国内的',examples:['Domestic flights are cheaper than international ones.','They hired a domestic helper for the household.']},
{word:'dominant',pron:'/ˈdɑːmɪnənt/',def:'主导的，占优势的',note:'dominant = dominate → 统治别人的 → 主导的',examples:['Apple is the dominant player in the premium phone market.','Blue is the dominant color in this design.']}
],trap:'domestic 是"国内的/家庭的"，dominant 是"主导的/占优势的"。domestic market = 国内市场。'},
{id:'compile-comply',type:'confusable',title:'compile · comply',brief:'编译/汇编 vs 遵守',words:[
{word:'compile',pron:'/kəmˈpaɪl/',def:'编译；汇编，收集',note:'compile = com（一起）+ pile（堆）→ 把东西堆一起 → 汇编',examples:['Please compile the data into a single report.','The code won\'t compile—there\'s a syntax error.']},
{word:'comply',pron:'/kəmˈplaɪ/',def:'遵守，服从',note:'comply = com（完全）+ ply（满足）→ 完全满足要求',examples:['All employees must comply with the new policy.','The product complies with international safety standards.']}
],trap:'compile 是"汇编/编译"，comply 是"遵守"。comply with = 遵守…规定。'},
{id:'compel-compete',type:'confusable',title:'compel · compete',brief:'迫使 vs 竞争',words:[
{word:'compel',pron:'/kəmˈpɛl/',def:'迫使，强迫',note:'compel = com + pel（推）→ 硬推着你做',examples:['The evidence compelled us to change our strategy.','I felt compelled to speak up about the issue.']},
{word:'compete',pron:'/kəmˈpiːt/',def:'竞争，比赛',note:'compete = com + pete（追求）→ 大家一起追 → 竞争',examples:['We compete with three major players in this space.','The two teams will compete for the contract.']}
],trap:'compel 是"强迫"（被逼的），compete 是"竞争"（主动争的）。'},
{id:'collaborate-corroborate',type:'confusable',title:'collaborate · corroborate',brief:'合作 vs 证实',words:[
{word:'collaborate',pron:'/kəˈlæbəreɪt/',def:'合作，协作',note:'co + labor（劳动）→ 一起干活 → 合作',examples:['Let\'s collaborate on this presentation.','The two teams collaborated across time zones.']},
{word:'corroborate',pron:'/kəˈrɑːbəreɪt/',def:'证实，确证',note:'cor + robor（力量）→ 加强证据的力量 → 证实',examples:['The data corroborates our hypothesis.','Can anyone corroborate his account of what happened?']}
],trap:'collaborate 是"合作"（一起工作），corroborate 是"证实"（证据支持）。两词很长且形似。'},
{id:'conceive-perceive-deceive',type:'confusable',title:'conceive · perceive · deceive',brief:'构想 · 感知 · 欺骗',words:[
{word:'conceive',pron:'/kənˈsiːv/',def:'构想，想出；怀孕',note:'con（完全）+ ceive（拿）→ 在脑子里拿出来 → 构想',examples:['I can\'t conceive of a better solution.','The project was conceived by the design team.']},
{word:'perceive',pron:'/pərˈsiːv/',def:'感知，察觉；认为',note:'per（通过）+ ceive → 通过感官接收 → 感知',examples:['Customers perceive our brand as premium.','She perceived a subtle change in his tone.']},
{word:'deceive',pron:'/dɪˈsiːv/',def:'欺骗，蒙骗',note:'de（离开）+ ceive → 把你带偏 → 骗你',examples:['Don\'t be deceived by the low price—quality matters.','Appearances can deceive.']}
],trap:'三个 -ceive 词：conceive 构想，perceive 感知，deceive 欺骗。前缀决定含义。'},
{id:'confirm-conform',type:'confusable',title:'confirm · conform',brief:'确认 vs 遵从/符合',words:[
{word:'confirm',pron:'/kənˈfɜːrm/',def:'确认，证实',note:'confirm = con + firm（坚定）→ 让事情变确定',examples:['Can you confirm the meeting time?','I\'d like to confirm my reservation.']},
{word:'conform',pron:'/kənˈfɔːrm/',def:'遵从，符合；顺从',note:'conform = con + form（形式）→ 跟着形式走 → 符合',examples:['The design must conform to accessibility standards.','She refused to conform to social expectations.']}
],trap:'confirm 是"确认"（邮件高频词），conform 是"符合/遵从"。confirm a booking vs conform to standards。'},
{id:'confront-comfort',type:'confusable',title:'confront · comfort',brief:'面对/质问 vs 安慰/舒适',words:[
{word:'confront',pron:'/kənˈfrʌnt/',def:'面对，对抗；质问',note:'con + front（前面）→ 正面怼上去',examples:['We need to confront this issue head-on.','She confronted her manager about the unfair treatment.']},
{word:'comfort',pron:'/ˈkʌmfərt/',def:'安慰；舒适',note:'com + fort（力量）→ 给你力量 → 安慰',examples:['He tried to comfort her after the bad news.','The hotel offers all the comforts of home.']}
],trap:'confront 是"直面/对抗"（硬的），comfort 是"安慰/舒适"（软的）。意思相反但拼写接近。'},
{id:'curious-furious',type:'confusable',title:'curious · furious',brief:'好奇的 vs 狂怒的',words:[
{word:'curious',pron:'/ˈkjʊriəs/',def:'好奇的；奇怪的',note:'curious = 像猫一样想知道',examples:['I\'m curious about how the algorithm works.','That\'s curious—the numbers don\'t add up.']},
{word:'furious',pron:'/ˈfjʊriəs/',def:'狂怒的，暴怒的',note:'furious = fury（狂怒）→ 气炸了',examples:['The client was furious about the delayed delivery.','She was furious when she discovered the error.']}
],trap:'curious 是好奇（正面），furious 是暴怒（负面）。中国学生因发音相似容易混淆。'},
{id:'moral-mortal',type:'confusable',title:'moral · mortal',brief:'道德的 vs 凡人的/致命的',words:[
{word:'moral',pron:'/ˈmɔːrəl/',def:'道德的；寓意',note:'moral = 关于对错的判断',examples:['It\'s a moral obligation to report safety issues.','The moral of the story is: always back up your files.']},
{word:'mortal',pron:'/ˈmɔːrtəl/',def:'凡人的，终有一死的；致命的',note:'mortal = mort（死）→ 会死的 → 凡人',examples:['We\'re all mortal—don\'t take work too seriously.','The company suffered a mortal blow to its reputation.']}
],trap:'moral 是道德的（道德标准），mortal 是致命的/凡人的（mortal enemy = 死敌）。'},
{id:'precious-previous',type:'confusable',title:'precious · previous',brief:'珍贵的 vs 之前的',words:[
{word:'precious',pron:'/ˈprɛʃəs/',def:'珍贵的，宝贵的',note:'precious = price → 贵得不得了 → 珍贵',examples:['Time is precious—let\'s not waste it.','These files contain precious data we can\'t afford to lose.']},
{word:'previous',pron:'/ˈpriːviəs/',def:'之前的，先前的',note:'previous = pre（前）+ vious → 在前面的 → 之前的',examples:['As mentioned in my previous email...','She has previous experience in project management.']}
],trap:'precious 是"珍贵的"，previous 是"之前的"。previous email = 上一封邮件，不是 precious email。'},
{id:'patient-patent',type:'confusable',title:'patient · patent',brief:'耐心的/病人 vs 专利',words:[
{word:'patient',pron:'/ˈpeɪʃənt/',def:'耐心的；病人',note:'patient = 能等的人 / 等着治的人',examples:['Please be patient—the update will take a few minutes.','The hospital treats over 500 patients daily.']},
{word:'patent',pron:'/ˈpætənt/',def:'专利；明显的',note:'patent = 公开给你看的独占权利 → 专利',examples:['We filed a patent for the new technology.','It was a patent violation of the agreement.']}
],trap:'patient 是耐心/病人，patent 是专利。file a patent = 申请专利，be patient = 耐心点。'},
{id:'content-context',type:'confusable',title:'content · context',brief:'内容/满足的 vs 上下文',words:[
{word:'content',pron:'/ˈkɑːntɛnt/',def:'内容；满足的',note:'content = 容器里装的东西 → 内容',examples:['The content of the report needs updating.','She seems content with her current role.']},
{word:'context',pron:'/ˈkɑːntɛkst/',def:'上下文，语境；背景',note:'context = con + text（文本）→ 文字周围的环境',examples:['You need to understand the context before making a decision.','Taken out of context, that quote sounds terrible.']}
],trap:'content 是"内容"或"满足的"，context 是"上下文/背景"。Please provide more context = 请提供更多背景。'},
{id:'altar-alter',type:'confusable',title:'altar · alter',brief:'祭坛 vs 改变',words:[
{word:'altar',pron:'/ˈɔːltər/',def:'祭坛，圣坛',note:'altar = 教堂里那个台子',examples:['They exchanged vows at the altar.','He wouldn\'t sacrifice quality at the altar of speed.']},
{word:'alter',pron:'/ˈɔːltər/',def:'改变，修改',note:'alter = alternative → 变成另一个样子',examples:['We need to alter the design based on user feedback.','The tailor altered the suit to fit perfectly.']}
],trap:'altar 是祭坛（名词），alter 是改变（动词）。alter a plan = 修改计划。'},
{id:'born-borne',type:'confusable',title:'born · borne',brief:'出生的 vs 承受的/传播的',words:[
{word:'born',pron:'/bɔːrn/',def:'出生的，天生的',note:'born = 生出来的',examples:['She was born in Singapore.','He\'s a born leader.']},
{word:'borne',pron:'/bɔːrn/',def:'承受的；由…传播的（bear 的过去分词）',note:'borne = bear（承受）的过去分词',examples:['The costs will be borne by the company.','Water-borne diseases are a major concern.']}
],trap:'born 是"出生"（be born），borne 是"承受/传播"（be borne by / air-borne）。'},
{id:'dual-duel',type:'confusable',title:'dual · duel',brief:'双重的 vs 决斗',words:[
{word:'dual',pron:'/ˈduːəl/',def:'双重的，双重的',note:'dual = duo（二）→ 两个的',examples:['She plays a dual role as designer and researcher.','The phone has a dual-camera setup.']},
{word:'duel',pron:'/ˈduːəl/',def:'决斗；竞争',note:'duel = 两个人对着干 → 决斗',examples:['The debate turned into a verbal duel.','The two companies are in a duel for market share.']}
],trap:'dual 是"双重的"（dual citizenship 双重国籍），duel 是"决斗"。'},
{id:'elusive-illusive',type:'confusable',title:'elusive · illusive',brief:'难以捉摸的 vs 幻觉的',words:[
{word:'elusive',pron:'/ɪˈluːsɪv/',def:'难以捉摸的，难以实现的',note:'elusive = elude（逃避）→ 你抓不住的',examples:['The answer remains elusive.','Success can be elusive without the right strategy.']},
{word:'illusive',pron:'/ɪˈluːsɪv/',def:'虚幻的，产生幻觉的',note:'illusive = illusion（幻觉）→ 不真实的',examples:['The illusive promise of easy money trapped many investors.','The oasis turned out to be illusive—just a mirage.']}
],trap:'elusive 是"抓不住的"（真实但难得到），illusive 是"虚假的"（根本不存在）。'},
{id:'gorilla-guerrilla',type:'confusable',title:'gorilla · guerrilla',brief:'大猩猩 vs 游击队',words:[
{word:'gorilla',pron:'/ɡəˈrɪlə/',def:'大猩猩',note:'gorilla = 那个大黑猩猩',examples:['The 800-pound gorilla in the room is our competitor.','Gorillas are gentle giants despite their size.']},
{word:'guerrilla',pron:'/ɡəˈrɪlə/',def:'游击队（员）；游击式的',note:'guerrilla = 西班牙语"小战争" → 游击战',examples:['They used guerrilla marketing tactics to build buzz.','Guerrilla warfare relies on surprise attacks.']}
],trap:'gorilla 是大猩猩，guerrilla 是游击队。guerrilla marketing = 游击营销（低成本创意推广）。'},
{id:'hangar-hanger',type:'confusable',title:'hangar · hanger',brief:'飞机库 vs 衣架',words:[
{word:'hangar',pron:'/ˈhæŋər/',def:'飞机库，机棚',note:'hangar = 装飞机的大房子（ar 结尾）',examples:['The plane was moved into the hangar for maintenance.','The airport has three aircraft hangars.']},
{word:'hanger',pron:'/ˈhæŋər/',def:'衣架',note:'hanger = hang（挂）+ er → 用来挂衣服的',examples:['Put your coat on the hanger by the door.','We need more hangers in the closet.']}
],trap:'hangar 是飞机库（-ar），hanger 是衣架（-er）。cliffhanger = 悬念。'},
{id:'heroin-heroine',type:'confusable',title:'heroin · heroine',brief:'海洛因 vs 女英雄',words:[
{word:'heroin',pron:'/ˈhɛroʊɪn/',def:'海洛因（毒品）',note:'heroin = 没有 e → 不好的东西',examples:['Heroin is one of the most addictive substances.','The film explores the impact of heroin addiction.']},
{word:'heroine',pron:'/ˈhɛroʊɪn/',def:'女英雄，女主角',note:'heroine = 有 e → 有灵魂的 → 女英雄',examples:['She\'s the heroine of the story.','The heroine overcomes all obstacles to save her team.']}
],trap:'heroin 是海洛因（毒品），heroine 是女英雄。少一个 e 意思天差地别，写作时务必注意。'},
{id:'human-humane',type:'confusable',title:'human · humane',brief:'人类的 vs 人道的',words:[
{word:'human',pron:'/ˈhjuːmən/',def:'人类的；人',note:'human = 跟人这个物种有关的',examples:['Human error caused the system outage.','She\'s only human—mistakes happen.']},
{word:'humane',pron:'/hjuːˈmeɪn/',def:'人道的，仁慈的',note:'humane = human + e → 有人性光辉的',examples:['The company promotes humane treatment of animals.','We need a more humane approach to layoffs.']}
],trap:'human 是"人类的"（human resources 人力资源），humane 是"人道的"（有同情心的）。'},
{id:'pedal-peddle',type:'confusable',title:'pedal · peddle',brief:'踏板 vs 兜售',words:[
{word:'pedal',pron:'/ˈpɛdəl/',def:'踏板；踩踏板',note:'pedal = ped（脚）→ 用脚踩的板',examples:['She pedaled her bicycle to work every day.','Press the brake pedal slowly.']},
{word:'peddle',pron:'/ˈpɛdəl/',def:'兜售，贩卖',note:'peddle = 走来走去卖东西',examples:['Street vendors peddle their goods near the station.','Don\'t peddle misinformation to the team.']}
],trap:'pedal 是踏板（用脚踩），peddle 是兜售（到处卖）。soft-pedal = 轻描淡写。'},
{id:'cue-queue',type:'confusable',title:'cue · queue',brief:'提示 vs 队列',words:[
{word:'cue',pron:'/kjuː/',def:'提示，暗号；球杆',note:'cue = 给你一个信号，该你上了',examples:['That\'s my cue to start the presentation.','Take your cue from the senior designer in the room.']},
{word:'queue',pron:'/kjuː/',def:'队列，排队',note:'queue = 一堆 ueue 排着队',examples:['There\'s a long queue at the immigration counter.','Your request has been added to the queue.']}
],trap:'cue 是提示/信号，queue 是排队/队列。right on cue = 正好在这时候。queue up = 排队。'},
{id:'drought-draught',type:'confusable',title:'drought · draught',brief:'干旱 vs 草稿/生啤/穿堂风',words:[
{word:'drought',pron:'/draʊt/',def:'干旱，旱灾',note:'drought = dry → 干到不行',examples:['The drought lasted for three months.','There\'s a drought of talent in the industry.']},
{word:'draught',pron:'/dræft/',def:'草稿（=draft）；生啤；穿堂风',note:'draught = draft 的英式拼法',examples:['I\'ll have a draught beer, please.','Close the window—there\'s a draught.']}
],trap:'drought 是干旱，draught 是 draft 的英式拼法（草稿/生啤/穿堂风）。拼写极其接近。'},
{id:'peal-peel',type:'confusable',title:'peal · peel',brief:'钟声 vs 剥皮',words:[
{word:'peal',pron:'/piːl/',def:'（钟声）鸣响；一阵（笑声等）',note:'peal = 钟声响亮地传开',examples:['Peals of laughter echoed through the office.','The church bells pealed at noon.']},
{word:'peel',pron:'/piːl/',def:'剥皮，剥落；果皮',note:'peel = 把外面那层皮扒掉',examples:['Please peel the oranges for the fruit platter.','The paint is starting to peel off the walls.']}
],trap:'peal 是钟声/一阵声响，peel 是剥皮。peals of laughter = 一阵阵笑声。'},
{id:'hoard-horde',type:'confusable',title:'hoard · horde',brief:'囤积 vs 一大群',words:[
{word:'hoard',pron:'/hɔːrd/',def:'囤积，储藏；储藏物',note:'hoard = 偷偷藏起来很多东西',examples:['People began to hoard supplies during the crisis.','She discovered a hoard of old design files on the server.']},
{word:'horde',pron:'/hɔːrd/',def:'一大群（人），部落',note:'horde = 乌压压一大群人涌过来',examples:['Hordes of shoppers crowded the mall during the sale.','A horde of tourists descended on the small town.']}
],trap:'hoard 是"囤积"（动词/名词），horde 是"一大群人"。hoard supplies = 囤货。'},
{id:'perpetrate-perpetuate',type:'confusable',title:'perpetrate · perpetuate',brief:'犯（罪）vs 使永久化',words:[
{word:'perpetrate',pron:'/ˈpɜːrpətreɪt/',def:'犯（罪行），做（坏事）',note:'perpetrate → perpetrator 犯罪者',examples:['The fraud was perpetrated by a former employee.','Who perpetrated this terrible design decision?']},
{word:'perpetuate',pron:'/pərˈpɛtʃueɪt/',def:'使永久化，使持续',note:'perpetuate = perpetual（永久的）→ 让它一直持续下去',examples:['We shouldn\'t perpetuate outdated stereotypes.','This policy perpetuates inequality in the workplace.']}
],trap:'perpetrate 是"犯罪/做坏事"，perpetuate 是"使持续存在"。两个词很长且形似，注意区分。'},
{id:'foul-fowl',type:'confusable',title:'foul · fowl',brief:'犯规的/恶臭的 vs 家禽',words:[
{word:'foul',pron:'/faʊl/',def:'犯规的；恶臭的；恶劣的',note:'foul = 又臭又犯规',examples:['There\'s a foul smell coming from the kitchen.','He was in a foul mood all day.']},
{word:'fowl',pron:'/faʊl/',def:'家禽，禽类',note:'fowl = 鸡鸭鹅这些鸟类',examples:['The restaurant specializes in roast fowl.','They raise fowl on their farm.']}
],trap:'foul 是"恶臭/犯规"，fowl 是"家禽"。foul play = 犯规行为/谋杀嫌疑。'},

// ── CALQUES BATCH 2 (100) ──
{id:'ting-hua',type:'calque',title:'"听话" ≠ listen to words',brief:'中文的乖巧概念英文没有直译',chinese:'小时候要听话',chinglish:'When young, must listen to words.',natural:'Be good. / Do as you\'re told.',
explanation:'"听话"形容人顺从、乖巧，英文没有"听+话"的组合。形容小孩乖 = be good / well-behaved。形容大人顺从 = obedient / compliant。',
more:[{zh:'这孩子很听话',bad:'This child very listens to words.',good:'This kid is really well-behaved.'},{zh:'你怎么不听话',bad:'Why don\'t you listen to words?',good:'Why won\'t you listen?'}]},
{id:'chi-ku',type:'calque',title:'"吃苦" ≠ eat bitterness',brief:'英文用不同的比喻',chinese:'年轻人要能吃苦',chinglish:'Young people must can eat bitterness.',natural:'Young people need to be able to handle hardship.',
explanation:'"吃苦"是中文独有的比喻。英文说 endure hardship / tough it out / handle adversity / go through hard times。',
more:[{zh:'他从小就能吃苦',bad:'He from small can eat bitterness.',good:'He\'s been through a lot since he was a kid.'},{zh:'吃苦耐劳',bad:'Eat bitterness endure labor.',good:'Hard-working and resilient.'}]},
{id:'re-nao',type:'calque',title:'"热闹" ≠ hot noisy',brief:'热闹的正面含义英文要分场景翻',chinese:'这个地方很热闹',chinglish:'This place is very hot and noisy.',natural:'This place is really lively.',
explanation:'"热闹"是正面的——人多、有气氛、有活力。英文用 lively / buzzing / bustling / vibrant / happening。不要翻成 hot + noisy。',
more:[{zh:'春节很热闹',bad:'Spring Festival is hot and noisy.',good:'Chinese New Year is so festive.'},{zh:'去凑个热闹',bad:'Go gather some hot noisy.',good:'Let\'s go check it out.'}]},
{id:'da-bao',type:'calque',title:'"打包" ≠ hit package',brief:'打包带走有专门的英文说法',chinese:'吃不完打包吧',chinglish:'Can\'t finish eating, hit package.',natural:'Let\'s get the rest to go. / Can I get a box?',
explanation:'"打包"在餐厅里 = get a box / get it to go / take it home / doggy bag。打包行李 = pack / pack up。',
more:[{zh:'麻烦打包一下',bad:'Trouble hit package.',good:'Could I get a box for this, please?'},{zh:'这个可以打包吗',bad:'This can hit package?',good:'Can I take this to go?'}]},
{id:'aa-zhi',type:'calque',title:'"AA制" 怎么翻译',brief:'英文有好几种说法',chinese:'今天AA吧',chinglish:'Today AA system.',natural:'Let\'s split the bill.',
explanation:'"AA制"在英文里说 split the bill / go Dutch / go halves。AA 这个缩写在英文中没有这个含义。',
more:[{zh:'我们AA好了',bad:'We AA OK.',good:'Let\'s just split it.'},{zh:'每次都AA',bad:'Every time all AA.',good:'We always go Dutch.'}]},
{id:'xiao-qi',type:'calque',title:'"小气" ≠ small air',brief:'形容吝啬有专门的词',chinese:'他这个人很小气',chinglish:'He this person very small air.',natural:'He\'s really stingy. / He\'s so cheap.',
explanation:'"小气"= stingy / cheap / tight / miserly。不是"小+气"的直译。注意 cheap 在美式英语中很常用。',
more:[{zh:'别那么小气嘛',bad:'Don\'t so small air.',good:'Don\'t be so cheap!'},{zh:'他小气到请客都不愿意',bad:'He small air to invite guest not willing.',good:'He\'s so cheap he won\'t even treat us to a meal.'}]},
{id:'jia-ban',type:'calque',title:'"加班" ≠ add class',brief:'加班有固定英文表达',chinese:'今晚又要加班',chinglish:'Tonight again need add class.',natural:'I have to work late tonight. / I\'m working overtime tonight.',
explanation:'"加班"= work overtime / work late / stay late / put in extra hours。跟 class（课堂）没关系。',
more:[{zh:'加班到几点',bad:'Add class until what time?',good:'How late are you working?'},{zh:'周末加班',bad:'Weekend add class.',good:'Working over the weekend.'}]},
{id:'xia-ban',type:'calque',title:'"下班" ≠ down class',brief:'英文没有"下班"这个精确概念',chinese:'你几点下班',chinglish:'You what time down class?',natural:'What time do you get off? / When do you finish work?',
explanation:'"下班"= get off work / finish work / clock out / wrap up for the day。英文文化中"下班"的概念边界比中文模糊。',
more:[{zh:'我下班了',bad:'I down class.',good:'I\'m done for the day.'},{zh:'下班后一起吃饭',bad:'After down class together eat.',good:'Want to grab dinner after work?'}]},
{id:'shang-huo',type:'calque',title:'"上火" 在英文中没有对应概念',brief:'这是中医概念，英文描述症状就好',chinese:'最近上火了',chinglish:'Recently I got fire up.',natural:'I\'ve had some mouth ulcers lately. / My throat is sore.',
explanation:'"上火"是中医概念，英文没有对应。不要翻成 fire 或 hot。直接描述症状：sore throat / mouth ulcers / breakout / inflammation。',
more:[{zh:'吃多了辣会上火',bad:'Eat too much spicy will up fire.',good:'Too much spicy food gives me a sore throat.'},{zh:'喝凉茶降火',bad:'Drink cold tea to lower fire.',good:'I\'m having herbal tea to cool down.'}]},
{id:'tao-yan',type:'calque',title:'"讨厌" 的轻重要分清',brief:'hate 比"讨厌"重得多',chinese:'讨厌！你干嘛呢',chinglish:'Hate! What are you doing!',natural:'Stop it! / Ugh, what are you doing!',
explanation:'"讨厌"在中文有撒娇和真恼怒两种语气。英文 hate 太重了。撒娇说 stop it / you\'re so annoying（笑着说）。真烦说 that\'s annoying / ugh。',
more:[{zh:'讨厌死了',bad:'Hate to death!',good:'That\'s so annoying!'},{zh:'你好讨厌哦（撒娇）',bad:'You very hateful.',good:'Oh, stop it! (playfully)'}]},
{id:'da-dianhua',type:'calque',title:'"打电话" ≠ hit phone',brief:'打不需要翻译成 hit',chinese:'我给你打电话',chinglish:'I hit phone to you.',natural:'I\'ll give you a call. / I\'ll call you.',
explanation:'中文里"打"是万能动词，但"打电话"= call / give someone a call / ring someone / phone someone。',
more:[{zh:'你打过电话了吗',bad:'You hit phone already?',good:'Did you call them?'},{zh:'别打电话，发信息',bad:'Don\'t hit phone, send message.',good:'Don\'t call — just text me.'}]},
{id:'shang-ban',type:'calque',title:'"上班" ≠ go up class',brief:'上班的自然说法',chinese:'你明天上班吗',chinglish:'You tomorrow go up class?',natural:'Are you working tomorrow?',
explanation:'"上班"= go to work / be at work / work。英文动词直接用 work。',
more:[{zh:'我在上班',bad:'I am going up class.',good:'I\'m at work.'},{zh:'不想上班',bad:'Don\'t want go up class.',good:'I don\'t feel like going to work.'}]},
{id:'kai-wanxiao',type:'calque',title:'"开玩笑" ≠ open joke',brief:'"开"不翻译成 open',chinese:'你在开玩笑吧',chinglish:'You are opening joke?',natural:'You\'re kidding, right? / Are you serious?',
explanation:'"开玩笑"= joke / kid / mess around / pull someone\'s leg。英文的 joke 本身就是动词。',
more:[{zh:'我没有开玩笑',bad:'I didn\'t open joke.',good:'I\'m not kidding.'},{zh:'他喜欢开玩笑',bad:'He likes to open jokes.',good:'He loves to joke around.'}]},
{id:'guang-jie',type:'calque',title:'"逛街" ≠ stroll street',brief:'英文的逛街说法',chinese:'周末去逛街吧',chinglish:'Weekend go stroll street.',natural:'Let\'s go shopping this weekend.',
explanation:'"逛街"不一定买东西，但英文最接近的是 go shopping / browse / walk around town / window shop（只看不买）。',
more:[{zh:'我就是出来逛逛',bad:'I just come out stroll stroll.',good:'I\'m just browsing. / Just looking around.'},{zh:'逛了一天什么都没买',bad:'Strolled one day nothing bought.',good:'I spent the whole day shopping and didn\'t buy a thing.'}]},
{id:'shui-bu-zhao',type:'calque',title:'"睡不着" 的结果补语不能直译',brief:'中文的"动词+不+结果"结构英文没有',chinese:'昨晚睡不着',chinglish:'Last night sleep not reach.',natural:'I couldn\'t fall asleep last night.',
explanation:'"睡不着"是中文结果补语结构。英文用 can\'t fall asleep / couldn\'t sleep / tossed and turned / was up all night。',
more:[{zh:'太兴奋了睡不着',bad:'Too excited sleep not reach.',good:'I was too excited to fall asleep.'},{zh:'喝了咖啡睡不着',bad:'Drank coffee sleep not arrive.',good:'The coffee kept me up.'}]},
{id:'zhao-bu-dao',type:'calque',title:'"找不到" ≠ find not arrive',brief:'又一个结果补语',chinese:'钥匙找不到了',chinglish:'Keys find not arrive.',natural:'I can\'t find my keys.',
explanation:'"找不到"= can\'t find。中文的结果补语"找+不+到"在英文里用 can\'t + 动词表达。',
more:[{zh:'工作找不到',bad:'Work find not arrive.',good:'I can\'t find a job.'},{zh:'找不到停车位',bad:'Find not arrive parking space.',good:'I can\'t find a parking spot.'}]},
{id:'da-zhaohui',type:'calque',title:'"打招呼" ≠ hit greetings',brief:'打招呼 = say hi / greet',chinese:'见面要打个招呼',chinglish:'Meet must hit a greeting.',natural:'You should at least say hi.',
explanation:'"打招呼"= say hi / greet someone / wave / nod / acknowledge someone。',
more:[{zh:'跟同事打个招呼',bad:'With colleague hit a greeting.',good:'Say hi to your coworkers.'},{zh:'他都不跟我打招呼',bad:'He doesn\'t even hit greeting with me.',good:'He doesn\'t even acknowledge me.'}]},
{id:'zuo-ke',type:'calque',title:'"做客" ≠ do guest',brief:'英文用 visit / come over',chinese:'欢迎来我家做客',chinglish:'Welcome come my home do guest.',natural:'You\'re welcome to come over anytime.',
explanation:'"做客"= visit / come over / stop by / drop by / be someone\'s guest。英文没有"做+客"这个搭配。',
more:[{zh:'今天去朋友家做客',bad:'Today go friend home do guest.',good:'I\'m visiting a friend today.'},{zh:'他来我们家做客',bad:'He come our home do guest.',good:'He came over for dinner.'}]},
{id:'peng-you-quan',type:'calque',title:'"朋友圈" ≠ friend circle',brief:'社交平台有对应的说法',chinese:'你看到我朋友圈了吗',chinglish:'You see my friend circle?',natural:'Did you see my WeChat post? / Did you see what I posted?',
explanation:'"朋友圈"= WeChat Moments / my feed / what I posted。在英文语境里说 friend circle 不会被理解为社交媒体。',
more:[{zh:'我发了个朋友圈',bad:'I sent a friend circle.',good:'I posted something on my feed.'},{zh:'他天天刷朋友圈',bad:'He every day brush friend circle.',good:'He\'s always scrolling through social media.'}]},
{id:'sa-jiao',type:'calque',title:'"撒娇" 在英文中没有一个词对应',brief:'需要描述行为而不是翻译概念',chinese:'她又在撒娇了',chinglish:'She again sprinkle cute.',natural:'She\'s being all cutesy. / She\'s acting cute to get her way.',
explanation:'"撒娇"是中文特有概念——用可爱/软弱姿态来撒赖。英文没有单词对应，要描述：act cute / pout / whine playfully / butter someone up / play the cute card。',
more:[{zh:'别跟我撒娇',bad:'Don\'t sprinkle cute with me.',good:'Don\'t give me that puppy face.'},{zh:'她很会撒娇',bad:'She good at sprinkle cute.',good:'She knows how to wrap people around her finger.'}]},
{id:'pi-qi',type:'calque',title:'"脾气好/脾气差" ≠ temper good/bad',brief:'脾气的搭配方式不同',chinese:'他脾气很好',chinglish:'His temper is very good.',natural:'He\'s really easy-going. / He\'s got a great temperament.',
explanation:'英文 temper 偏负面（lose one\'s temper = 发脾气）。脾气好 = easy-going / patient / even-tempered。脾气差 = short-tempered / hot-headed。',
more:[{zh:'她脾气不太好',bad:'Her temper not too good.',good:'She can be a bit short-tempered.'},{zh:'脾气来了挡不住',bad:'Temper comes can\'t block.',good:'When he gets angry, there\'s no stopping him.'}]},
{id:'dui-jie',type:'calque',title:'"对接" ≠ dock with',brief:'工作中的对接用 connect / coordinate',chinese:'你跟他们对接一下',chinglish:'You with them dock a bit.',natural:'Could you coordinate with them? / Loop in with them.',
explanation:'"对接"在职场中 = coordinate / sync up / connect / align / loop in。不要用 dock（那是船停靠）。',
more:[{zh:'我们需要跟客户对接',bad:'We need to dock with client.',good:'We need to sync up with the client.'},{zh:'对接人是谁',bad:'Dock person is who?',good:'Who\'s the point of contact?'}]},
{id:'luo-di',type:'calque',title:'"落地" ≠ land on ground',brief:'方案落地有专门的商务表达',chinese:'这个方案怎么落地',chinglish:'This plan how to land on ground?',natural:'How do we actually make this happen? / How do we execute this?',
explanation:'"落地"在商务中 = execute / implement / put into action / make it happen / roll out / ship it。不是物理着陆。',
more:[{zh:'想法很好但很难落地',bad:'Idea good but hard to land.',good:'Great idea, but hard to pull off in practice.'},{zh:'项目终于落地了',bad:'Project finally landed.',good:'The project is finally off the ground.'}]},
{id:'fu-neng',type:'calque',title:'"赋能" ≠ give energy',brief:'互联网黑话的英文翻译',chinese:'用AI赋能业务',chinglish:'Use AI to give energy to business.',natural:'Use AI to empower the business. / Enhance the business with AI.',
explanation:'"赋能"是中文互联网黑话 = empower / enable / enhance / supercharge / unlock。不是"给能量"。',
more:[{zh:'技术赋能创新',bad:'Technology give energy to innovation.',good:'Technology enables innovation.'},{zh:'我们要赋能一线团队',bad:'We must give energy to front-line team.',good:'We need to empower our front-line teams.'}]},
{id:'tou-nao-feng-bao',type:'calque',title:'"头脑风暴" 直译过来的借词',brief:'brainstorm 是动词也是名词',chinese:'我们来头脑风暴一下',chinglish:'We come brain storm a bit.',natural:'Let\'s brainstorm. / Let\'s throw some ideas around.',
explanation:'"头脑风暴"其实是 brainstorm 的中文翻译借回去的。英文直接说 brainstorm / bounce ideas / spitball / jam on ideas。',
more:[{zh:'下午开个头脑风暴',bad:'Afternoon open a brain storm.',good:'Let\'s have a brainstorm session this afternoon.'},{zh:'头脑风暴出了几个好点子',bad:'Brain storm out some good ideas.',good:'We came up with some good ideas from the brainstorm.'}]},
{id:'bi-huan',type:'calque',title:'"闭环" ≠ close circle',brief:'商务中的"闭环"',chinese:'这件事要闭环',chinglish:'This thing must close circle.',natural:'We need to close the loop on this.',
explanation:'"闭环"在商务中 = close the loop / follow through / wrap up。是指一个流程从开始到结束完整完成。',
more:[{zh:'跟客户闭环了吗',bad:'With client closed circle?',good:'Did you close the loop with the client?'},{zh:'这个反馈需要闭环',bad:'This feedback needs close circle.',good:'We need to follow through on this feedback.'}]},
{id:'dui-qi',type:'calque',title:'"对齐" ≠ face together',brief:'信息对齐 = get aligned / be on the same page',chinese:'我们先对齐一下信息',chinglish:'We first face together the information.',natural:'Let\'s get aligned on this. / Let\'s make sure we\'re on the same page.',
explanation:'"对齐"在互联网职场中 = align / get on the same page / sync up。不是设计软件中的对齐（那个倒是 align）。',
more:[{zh:'跟老板对齐一下方向',bad:'With boss face together the direction.',good:'Let\'s align with the boss on the direction.'},{zh:'目标没对齐',bad:'Goal not faced together.',good:'We\'re not aligned on our goals.'}]},
{id:'bu-hao-shuo',type:'calque',title:'"不好说" ≠ not good say',brief:'中文的模糊回答在英文中有对应',chinese:'这个不好说',chinglish:'This not good say.',natural:'Hard to say. / It\'s tough to tell.',
explanation:'"不好说"= hard to say / it\'s tough to tell / it could go either way / your guess is as good as mine。',
more:[{zh:'结果不好说',bad:'Result not good say.',good:'Hard to say how it\'ll turn out.'},{zh:'这种事不好说',bad:'This kind thing not good say.',good:'You never know with these things.'}]},
{id:'guo-fen',type:'calque',title:'"过分" ≠ over portion',brief:'表达程度过了有多种说法',chinese:'你也太过分了',chinglish:'You also too over portion.',natural:'That\'s way out of line. / That\'s too much.',
explanation:'"过分"= too much / out of line / over the top / excessive / going too far / crossing the line。看语气轻重选择。',
more:[{zh:'别太过分了',bad:'Don\'t too over portion.',good:'Don\'t push it.'},{zh:'他说的话太过分了',bad:'His words too over portion.',good:'What he said was way out of line.'}]},
{id:'xin-lei',type:'calque',title:'"心累" ≠ heart tired',brief:'心理疲惫英文这么说',chinese:'不是身体累是心累',chinglish:'Not body tired, is heart tired.',natural:'I\'m not physically tired — I\'m just mentally drained.',
explanation:'"心累"= mentally exhausted / emotionally drained / burned out / worn out。英文不说 heart tired。',
more:[{zh:'工作让我心累',bad:'Work makes my heart tired.',good:'Work is mentally exhausting.'},{zh:'心累不想说话',bad:'Heart tired don\'t want talk.',good:'I\'m drained — I don\'t feel like talking.'}]},
{id:'zhao-ji',type:'calque',title:'"着急" ≠ catch urgency',brief:'着急英文有多种表达',chinese:'别着急慢慢来',chinglish:'Don\'t catch urgency, slowly come.',natural:'Don\'t stress — take your time.',
explanation:'"着急"= anxious / stressed / worried / in a rush / panicking。看具体语境用不同的词。',
more:[{zh:'你着什么急',bad:'You catching what urgency?',good:'What\'s the rush?'},{zh:'着急也没用',bad:'Catch urgency also no use.',good:'Worrying won\'t help.'}]},
{id:'dan-xin',type:'calque',title:'"担心" 和 worry 的搭配区别',brief:'worry about 后面接事情不接人',chinese:'我很担心你',chinglish:'I very worry you.',natural:'I\'m worried about you.',
explanation:'"担心"= worried about / concerned about。注意 worry 做动词时不能直接接人：I worry about you ✓，I worry you ✗（这表示"我让你不安"）。',
more:[{zh:'别担心没事的',bad:'Don\'t worry about, no thing.',good:'Don\'t worry — it\'ll be fine.'},{zh:'我担心来不及',bad:'I worry come not in time.',good:'I\'m worried we won\'t make it in time.'}]},
{id:'hou-hui',type:'calque',title:'"后悔" ≠ after regret',brief:'regret 的用法比"后悔"复杂',chinese:'我真的很后悔',chinglish:'I really very after regret.',natural:'I really regret it.',
explanation:'"后悔"= regret（doing something）。注意 regret + doing = 后悔做过；regret + to do = 很遗憾要做。别搞反了。',
more:[{zh:'后悔没早点说',bad:'After regret didn\'t early say.',good:'I wish I\'d said something sooner.'},{zh:'你会后悔的',bad:'You will after regret.',good:'You\'ll regret it.'}]},
{id:'gao-xiao',type:'calque',title:'"搞笑" ≠ do funny',brief:'形容好笑有很多种说法',chinese:'你太搞笑了',chinglish:'You too do funny.',natural:'You\'re hilarious! / That\'s so funny!',
explanation:'"搞笑"= funny / hilarious / cracking me up。英文中 funny 就足够了。更强烈的可以说 hilarious / I\'m dying。',
more:[{zh:'这个视频太搞笑了',bad:'This video too do funny.',good:'This video is so funny — I can\'t stop laughing.'},{zh:'他故意搞笑',bad:'He on purpose do funny.',good:'He\'s doing it on purpose to be funny.'}]},
{id:'wu-nai',type:'calque',title:'"无奈" ≠ no capable',brief:'无可奈何英文有多种表达',chinese:'很无奈但没办法',chinglish:'Very no capable but no way.',natural:'It sucks, but there\'s nothing I can do.',
explanation:'"无奈"= there\'s nothing I can do / my hands are tied / I have no choice / it is what it is / I\'m stuck。',
more:[{zh:'无奈之下只能同意',bad:'No capable situation can only agree.',good:'I had no choice but to agree.'},{zh:'生活很无奈',bad:'Life is very no capable.',good:'Life doesn\'t always go your way.'}]},
{id:'shi-ying',type:'calque',title:'"适应" ≠ suitable respond',brief:'适应环境有专门的表达',chinese:'我还在适应新环境',chinglish:'I still suitable respond to new environment.',natural:'I\'m still getting used to the new environment.',
explanation:'"适应"= get used to / adjust to / adapt to / settle in / acclimate。"还在适应"= still adjusting / still settling in。',
more:[{zh:'你适应了吗',bad:'You suitable respond already?',good:'Have you settled in?'},{zh:'很快就适应了',bad:'Very fast suitable respond.',good:'I got used to it pretty quickly.'}]},
{id:'yan-qi',type:'calque',title:'"延期" ≠ extend period',brief:'推迟和延期有不同的说法',chinese:'会议延期了',chinglish:'Meeting extended period.',natural:'The meeting has been postponed.',
explanation:'"延期"= postponed（推迟到以后）/ delayed（被耽搁）/ pushed back（往后挪）/ rescheduled（重新安排）。',
more:[{zh:'项目延期了两周',bad:'Project extended period two weeks.',good:'The project has been pushed back two weeks.'},{zh:'婚礼延期了',bad:'Wedding extended period.',good:'The wedding has been postponed.'}]},
{id:'qing-jia',type:'calque',title:'"请假" ≠ ask holiday',brief:'请假有固定的英文搭配',chinese:'我明天想请假',chinglish:'I tomorrow want ask holiday.',natural:'I\'d like to take the day off tomorrow.',
explanation:'"请假"= take time off / take a day off / take leave / call in sick（病假）。请假条 = leave request。',
more:[{zh:'请了三天假',bad:'Asked three days holiday.',good:'I took three days off.'},{zh:'他请病假了',bad:'He asked sick holiday.',good:'He called in sick.'}]},
{id:'hong-bao',type:'calque',title:'"红包" ≠ red bag',brief:'红包概念需要解释不能直译',chinese:'过年发红包',chinglish:'New Year give red bag.',natural:'Give red envelopes during Chinese New Year.',
explanation:'"红包"在英文中通常直接说 red envelope / red packet / hongbao。这是文化概念，需要保留原样或简要解释。微信红包 = digital red packet。',
more:[{zh:'抢红包',bad:'Grab red bag.',good:'Claim a red packet. / Snag a red envelope.'},{zh:'发个红包吧',bad:'Send a red bag.',good:'Drop a red packet in the group chat.'}]},
{id:'shang-dang',type:'calque',title:'"上当" ≠ go up to be cheated',brief:'被骗英文有很多生动的说法',chinese:'我上当了',chinglish:'I went up cheated.',natural:'I got scammed. / I fell for it.',
explanation:'"上当"= got scammed / fell for it / got tricked / got ripped off / was taken for a ride。',
more:[{zh:'别上当',bad:'Don\'t go up cheat.',good:'Don\'t fall for it.'},{zh:'上当受骗',bad:'Go up receive cheat.',good:'Got conned / Got duped.'}]},
{id:'fan-zheng',type:'calque',title:'"反正" ≠ reverse positive',brief:'反正表示"不管怎样"',chinese:'反正我不去',chinglish:'Reverse positive I not go.',natural:'Either way, I\'m not going. / I\'m not going regardless.',
explanation:'"反正"= anyway / either way / regardless / no matter what / in any case。是非常高频的中文口语词。',
more:[{zh:'反正都一样',bad:'Reverse positive all same.',good:'It\'s all the same either way.'},{zh:'反正也来了',bad:'Reverse positive also came.',good:'Well, I\'m here anyway.'}]},
{id:'na-shou',type:'calque',title:'"拿手" ≠ take hand',brief:'擅长有更自然的说法',chinese:'这道菜是我的拿手菜',chinglish:'This dish is my take hand dish.',natural:'This is my specialty. / This is my signature dish.',
explanation:'"拿手"= good at / specialty / forte / strong suit。"拿手菜"= signature dish / specialty。',
more:[{zh:'他最拿手的是什么',bad:'His most take hand is what?',good:'What\'s he best at?'},{zh:'这个我不拿手',bad:'This I not take hand.',good:'This isn\'t my strong suit.'}]},
{id:'jian-wai',type:'calque',title:'"见外" ≠ see outside',brief:'太客气反而显得生分',chinese:'你跟我太见外了',chinglish:'You with me too see outside.',natural:'You don\'t have to be so formal with me. / We\'re close enough — you don\'t need to be so polite.',
explanation:'"见外"= being too formal / too polite / treating someone like a stranger。英文说 you don\'t have to be so formal / we\'re past that。',
more:[{zh:'别见外',bad:'Don\'t see outside.',good:'Don\'t be a stranger about it.'},{zh:'说谢谢就见外了',bad:'Saying thanks is see outside.',good:'No need to thank me — come on!'}]},
{id:'huo-da',type:'calque',title:'"活该" ≠ live should',brief:'幸灾乐祸的表达',chinese:'活该！谁让你不听',chinglish:'Live should! Who let you not listen.',natural:'Serves you right! That\'s what you get for not listening.',
explanation:'"活该"= serves you right / you had it coming / that\'s what you get / you asked for it。语气很重，慎用。',
more:[{zh:'活该被骂',bad:'Live should be scolded.',good:'He had it coming.'},{zh:'考试没过？活该不复习',bad:'Exam not pass? Live should not review.',good:'Failed the exam? That\'s what happens when you don\'t study.'}]},
{id:'la-hei',type:'calque',title:'"拉黑" ≠ pull black',brief:'社交媒体上屏蔽有专门说法',chinese:'我把他拉黑了',chinglish:'I pulled him black.',natural:'I blocked him.',
explanation:'"拉黑"= block / unfriend / remove。社交媒体语境下 block 是最准确的。',
more:[{zh:'被拉黑了',bad:'Got pulled black.',good:'I got blocked.'},{zh:'直接拉黑不解释',bad:'Directly pull black no explain.',good:'Just block them — no explanation needed.'}]},
{id:'pi-lao',type:'calque',title:'"疲劳" vs tired — 程度不同',brief:'tired 是日常累，fatigue 是医学/严重累',chinese:'开车别疲劳驾驶',chinglish:'Drive don\'t fatigue drive.',natural:'Don\'t drive when you\'re tired. / Don\'t drive drowsy.',
explanation:'"疲劳"有时对应 tired（日常）有时对应 fatigue（医学/严重）。日常说 tired / exhausted / worn out。',
more:[{zh:'最近很疲劳',bad:'Recently very fatigue.',good:'I\'ve been really tired lately.'},{zh:'视觉疲劳',bad:'Visual fatigue.',good:'My eyes are strained. / Eye strain.'}]},
{id:'ren-she',type:'calque',title:'"人设" ≠ person design',brief:'人设是社交媒体时代的概念',chinese:'他的人设崩了',chinglish:'His person design collapsed.',natural:'His whole image just fell apart. / His public persona crumbled.',
explanation:'"人设"= image / persona / brand / public image。"人设崩了"= image collapsed / was exposed / the mask came off。',
more:[{zh:'她的人设是学霸',bad:'Her person design is study bully.',good:'She\'s built her whole brand around being a top student.'},{zh:'不要凹人设',bad:'Don\'t press person design.',good:'Stop trying to force an image.'}]},
{id:'nei-juan',type:'calque',title:'"内卷" 怎么翻译',brief:'这个概念在英文里需要解释',chinese:'太卷了根本卷不动',chinglish:'Too roll, can\'t roll anymore.',natural:'The rat race is insane. / The competition is just brutal.',
explanation:'"内卷"= rat race / toxic competition / arms race / burnout culture。英文没有完美对应，但 rat race 最接近。也可以说 the grind。',
more:[{zh:'教育内卷太严重',bad:'Education inner roll too serious.',good:'The academic rat race is out of control.'},{zh:'不想卷了',bad:'Don\'t want to roll anymore.',good:'I\'m done with the rat race.'}]},
{id:'tang-ping',type:'calque',title:'"躺平" ≠ lie flat',brief:'躺平需要语境解释',chinese:'我决定躺平了',chinglish:'I decided to lie flat.',natural:'I\'ve decided to take it easy. / I\'m done trying so hard.',
explanation:'"躺平"= opt out of the rat race / coast / take it easy / do the bare minimum / quiet quitting。是对"内卷"的反抗。',
more:[{zh:'年轻人都想躺平',bad:'Young people all want lie flat.',good:'Young people just want to stop grinding.'},{zh:'躺不平又卷不动',bad:'Can\'t lie flat can\'t roll.',good:'Too burned out to grind, too anxious to chill.'}]},
{id:'ba-gua',type:'calque',title:'"八卦" ≠ eight trigrams',brief:'聊八卦 = gossip',chinese:'来八卦一下',chinglish:'Come eight trigrams a bit.',natural:'Let\'s catch up on the gossip. / Spill the tea.',
explanation:'"八卦"在日常中 = gossip / tea / the scoop / the dirt。"很八卦"= nosy / gossipy。',
more:[{zh:'她好八卦',bad:'She very eight trigrams.',good:'She\'s so nosy.'},{zh:'八卦新闻',bad:'Eight trigrams news.',good:'Celebrity gossip / Tabloid news.'}]},
{id:'kao-pu',type:'calque',title:'"靠谱" ≠ lean on score',brief:'靠谱 = reliable',chinese:'这个人很靠谱',chinglish:'This person very lean on score.',natural:'He\'s really reliable. / He\'s solid.',
explanation:'"靠谱"= reliable / dependable / solid / someone you can count on。"不靠谱"= unreliable / sketchy / flaky。',
more:[{zh:'你觉得靠谱吗',bad:'You feel lean on score?',good:'Do you think it\'s legit?'},{zh:'这个方案不靠谱',bad:'This plan not lean on score.',good:'This plan doesn\'t seem very solid.'}]},
{id:'jie-di-qi',type:'calque',title:'"接地气" ≠ connect ground air',brief:'接地气 = down to earth',chinese:'这个设计很接地气',chinglish:'This design very connect ground air.',natural:'This design is really down to earth. / This feels very grounded.',
explanation:'"接地气"= down to earth / grounded / relatable / practical / accessible。形容人、设计、方案贴近实际。',
more:[{zh:'他这个人很接地气',bad:'He this person very connect ground air.',good:'He\'s really down to earth.'},{zh:'产品要接地气',bad:'Product must connect ground air.',good:'The product needs to be relatable.'}]},
{id:'diu-lian',type:'calque',title:'"丢脸" ≠ lose face（语境区分）',brief:'lose face 偏正式，日常说 embarrassing',chinese:'在同事面前丢脸了',chinglish:'In front of colleagues lose face.',natural:'I totally embarrassed myself in front of my coworkers.',
explanation:'"丢脸"日常 = embarrassing / embarrassed myself / made a fool of myself。lose face 在英文中虽然存在但偏正式/跨文化语境。',
more:[{zh:'丢脸死了',bad:'Lose face die.',good:'That was so embarrassing — I wanted to disappear.'},{zh:'别让我丢脸',bad:'Don\'t let me lose face.',good:'Don\'t embarrass me.'}]},
{id:'kai-dao',type:'calque',title:'"开刀" ≠ open knife',brief:'做手术的正确说法',chinese:'他下周要开刀',chinglish:'He next week need open knife.',natural:'He\'s having surgery next week.',
explanation:'"开刀"= have surgery / have an operation / go under the knife（口语）。英文不说 open knife。',
more:[{zh:'开刀需要多久恢复',bad:'Open knife need how long recover?',good:'How long is the recovery after surgery?'},{zh:'大开刀',bad:'Big open knife.',good:'Major surgery.'}]},
{id:'che-pi',type:'calque',title:'"扯皮" ≠ pull skin',brief:'工作中的推诿扯皮',chinese:'两个部门一直在扯皮',chinglish:'Two departments always pulling skin.',natural:'The two departments keep passing the buck.',
explanation:'"扯皮"= pass the buck / finger-pointing / back and forth / bureaucratic runaround / dragging their feet。',
more:[{zh:'别扯皮了赶紧做',bad:'Don\'t pull skin, hurry do.',good:'Stop pointing fingers and just get it done.'},{zh:'这件事扯皮扯了一个月',bad:'This thing pull skin pulled one month.',good:'They\'ve been going back and forth on this for a month.'}]},
{id:'tui-dong',type:'calque',title:'"推动" ≠ push move',brief:'推动工作/项目的自然说法',chinese:'我们要推动这个项目',chinglish:'We must push move this project.',natural:'We need to drive this project forward.',
explanation:'"推动"= drive / push forward / move ahead with / advance / champion。是职场高频词。',
more:[{zh:'谁在推动这件事',bad:'Who is push moving this thing?',good:'Who\'s driving this?'},{zh:'很难推动',bad:'Very hard push move.',good:'It\'s hard to get traction on this.'}]},
{id:'da-ka',type:'calque',title:'"打卡" ≠ hit card',brief:'上班打卡和网红打卡翻译不同',chinese:'每天都要打卡',chinglish:'Every day must hit card.',natural:'I have to clock in every day.',
explanation:'上班打卡 = clock in / clock out / punch in / swipe in。网红打卡 = check in / visit a hot spot / snap a photo at。两个含义完全不同。',
more:[{zh:'忘了打卡了',bad:'Forgot hit card.',good:'I forgot to clock in.'},{zh:'这个餐厅很适合打卡',bad:'This restaurant good for hit card.',good:'This restaurant is super Instagrammable.'}]},
{id:'pao-le',type:'calque',title:'"跑了" 的多种含义',brief:'跑了不一定是 run away',chinese:'他跑了不干了',chinglish:'He run, not do.',natural:'He bailed. / He quit and left.',
explanation:'"跑了"看语境：逃跑 = ran away / fled；辞职走人 = quit / left / bailed；溜了 = took off / bounced / ghosted。',
more:[{zh:'客户跑了',bad:'Client run.',good:'The client bailed on us.'},{zh:'他跑哪去了',bad:'He run where go?',good:'Where did he go?'}]},
{id:'pei-ke-hu',type:'calque',title:'"陪客户" ≠ accompany client',brief:'accompany 太直译了',chinese:'今晚要陪客户吃饭',chinglish:'Tonight need accompany client eat meal.',natural:'I\'m taking a client out to dinner tonight.',
explanation:'"陪客户"= take a client out / wine and dine a client / entertain a client / host a client dinner。accompany 太生硬。',
more:[{zh:'陪客户喝酒',bad:'Accompany client drink alcohol.',good:'Taking clients out for drinks.'},{zh:'经常要陪客户应酬',bad:'Often need accompany client socialize.',good:'I\'m always entertaining clients.'}]},
{id:'mai-zhang',type:'calque',title:'"买账" ≠ buy the bill',brief:'买账 = buy it（相信/接受）',chinese:'客户不买账',chinglish:'Client not buy bill.',natural:'The client isn\'t buying it.',
explanation:'"买账"= buy it / go for it / be on board / be convinced。"不买账"= not buying it / not having it / not impressed。',
more:[{zh:'老板根本不买账',bad:'Boss totally not buy bill.',good:'The boss isn\'t having it at all.'},{zh:'消费者不买账',bad:'Consumer not buy bill.',good:'Consumers aren\'t going for it.'}]},
{id:'jie-guo',type:'calque',title:'"结果" 做转折词时不能直译',brief:'结果引出意外结果时不是 result',chinese:'准备了一天，结果白忙了',chinglish:'Prepared one day, result busy for nothing.',natural:'I spent the whole day getting ready, and it was all for nothing.',
explanation:'"结果"做转折连词 = and then / but then / turns out / in the end / only to find out。不是名词 result。',
more:[{zh:'等了半天结果不来了',bad:'Waited half day, result not come.',good:'I waited forever, and then they didn\'t even show up.'},{zh:'结果比想象的好',bad:'Result better than imagined.',good:'It turned out better than I expected.'}]},
{id:'xian-mu',type:'calque',title:'"羡慕" ≠ envy（太负面）',brief:'中文的羡慕是正面的，英文的 envy 偏负面',chinese:'好羡慕你啊',chinglish:'I so envy you.',natural:'I\'m so jealous! / That\'s amazing — I wish I could do that!',
explanation:'中文"羡慕"是正面的欣赏。英文 envy 偏负面（嫉妒）。口语中说 I\'m so jealous 其实是正面的（= 好羡慕）。也可以说 that\'s awesome / I wish I could。',
more:[{zh:'羡慕你可以在家工作',bad:'Envy you can at home work.',good:'You\'re so lucky you get to work from home!'},{zh:'别人的生活总是让人羡慕',bad:'Others\' life always make people envy.',good:'The grass is always greener on the other side.'}]},
{id:'bu-she-de',type:'calque',title:'"舍不得" 没有单词直译',brief:'需要根据语境选择不同说法',chinese:'舍不得丢掉',chinglish:'Reluctant heart not willing throw.',natural:'I can\'t bring myself to throw it away.',
explanation:'"舍不得"= can\'t bear to / can\'t bring myself to / hate to / don\'t want to let go of / too attached to。英文没有单词完美对应。',
more:[{zh:'舍不得你走',bad:'Can\'t give up heart you go.',good:'I hate to see you go.'},{zh:'舍不得花钱',bad:'Reluctant to spend money.',good:'I can\'t bring myself to spend that much.'}]},
{id:'tuo-yan-zheng',type:'calque',title:'"拖延症" ≠ delay disease',brief:'procrastination 是个正式但常用的词',chinese:'我有拖延症',chinglish:'I have delay disease.',natural:'I\'m such a procrastinator.',
explanation:'"拖延症"= procrastination。说 I\'m a procrastinator / I keep putting things off / I always leave things to the last minute。',
more:[{zh:'拖延症晚期',bad:'Delay disease late stage.',good:'I\'m a chronic procrastinator.'},{zh:'拖延症犯了',bad:'Delay disease occurred.',good:'I\'m procrastinating again.'}]},
{id:'zou-hou-men',type:'calque',title:'"走后门" ≠ walk back door',brief:'走关系/走后门在英文中的说法',chinese:'他是走后门进去的',chinglish:'He is walk back door enter.',natural:'He got in through connections. / He pulled some strings.',
explanation:'"走后门"= pull strings / use connections / get in through the back door（这个英文也有但不如中文常用）/ use nepotism / get a backdoor deal。',
more:[{zh:'没有关系别想走后门',bad:'No relationship don\'t think walk back door.',good:'Without connections, don\'t even bother trying to work the system.'},{zh:'走后门拿到名额',bad:'Walk back door get quota.',good:'Got a spot through connections.'}]},
{id:'ren-jian-bu-chai',type:'calque',title:'"人艰不拆" 网络用语没法直译',brief:'网络缩写需要意译',chinese:'人艰不拆你就别说了',chinglish:'People hard not break, you don\'t say.',natural:'Life\'s hard enough — don\'t rub it in.',
explanation:'"人艰不拆"=人生已经如此的艰难，有些事就不要拆穿了。英文可以说 life\'s hard enough / don\'t rub it in / let it go / spare them the truth。',
more:[{zh:'人艰不拆别问了',bad:'People hard not break, don\'t ask.',good:'Don\'t ask — some things are better left unsaid.'}]},
{id:'zhuang-bi',type:'calque',title:'"装" ≠ pretend (when showing off)',brief:'装腔作势有很多口语表达',chinese:'他就是在装',chinglish:'He just is pretending.',natural:'He\'s just showing off. / He\'s being pretentious.',
explanation:'"装"在口语中 = show off / be pretentious / act all fancy / try too hard / front / flex。看语境选用。',
more:[{zh:'别装了',bad:'Don\'t pretend.',good:'Drop the act. / Stop showing off.'},{zh:'装什么装',bad:'Pretend what pretend.',good:'Who are you trying to impress?'}]},
{id:'jiu-cuo',type:'calque',title:'"纠结" 在英文里怎么说',brief:'纠结 = torn / can\'t decide',chinese:'我好纠结',chinglish:'I very tangle.',natural:'I\'m so torn. / I can\'t make up my mind.',
explanation:'"纠结"= torn / can\'t decide / on the fence / going back and forth / agonizing over。形容人在两个选择间犹豫。',
more:[{zh:'别纠结了直接选',bad:'Don\'t tangle, directly choose.',good:'Stop going back and forth — just pick one.'},{zh:'这件事让我很纠结',bad:'This thing makes me very tangle.',good:'I\'ve been agonizing over this.'}]},
{id:'emo-le',type:'calque',title:'"emo了" 不等于 emotional',brief:'中文网络用的 emo 和英文的 emo 含义不同',chinese:'今天有点emo',chinglish:'Today a bit emo.',natural:'I\'m feeling kind of down today. / I\'m in my feels.',
explanation:'中文"emo"= 心情低落、感伤。英文 emo 指一种音乐/亚文化风格。表达心情低落说 feeling down / blue / in a mood / in my feels。',
more:[{zh:'深夜容易emo',bad:'Late night easy emo.',good:'Late nights always make me feel some type of way.'},{zh:'别emo了出来嗨',bad:'Don\'t emo, come out high.',good:'Stop moping — let\'s go out and have fun!'}]},
{id:'yang-mao',type:'calque',title:'"薅羊毛" ≠ pull sheep wool',brief:'薅羊毛 = score deals / hunt for bargains',chinese:'这个优惠可以薅一下羊毛',chinglish:'This coupon can pull sheep wool.',natural:'We should take advantage of this deal.',
explanation:'"薅羊毛"= score deals / game the system / take advantage of promotions / bargain hunt / stack coupons。英文没有对应的俚语。',
more:[{zh:'一起来薅羊毛',bad:'Together come pull sheep wool.',good:'Let me show you this deal we can take advantage of.'},{zh:'他很会薅羊毛',bad:'He good at pulling sheep wool.',good:'He\'s a pro at finding deals.'}]},
{id:'zhong-cao',type:'calque',title:'"种草" ≠ plant grass',brief:'种草/拔草是中文独有的消费概念',chinese:'被这个包种草了',chinglish:'Got planted grass by this bag.',natural:'I\'ve been eyeing this bag. / I\'m sold on this bag.',
explanation:'"种草"= want it now / sold on / put on my wishlist / can\'t stop thinking about。"拔草"= finally bought it / crossed it off my list。',
more:[{zh:'被小红书种草了',bad:'Got planted grass by Xiaohongshu.',good:'I saw it on Xiaohongshu and now I need it.'},{zh:'终于拔草了',bad:'Finally pulled out grass.',good:'I finally pulled the trigger on it.'}]},
{id:'da-gong-ren',type:'calque',title:'"打工人" ≠ hit work person',brief:'打工人是一种身份认同的自嘲',chinese:'打工人打工魂',chinglish:'Hit work person, hit work soul.',natural:'Just another day in the daily grind. / The hustle never stops.',
explanation:'"打工人"= worker / working stiff / office drone / wage earner。更准确地说是自嘲的"社畜"文化。英文可以说 the daily grind / the rat race / corporate life。',
more:[{zh:'打工人早安',bad:'Hit work person good morning.',good:'Rise and grind, everyone.'},{zh:'打工人没有假期',bad:'Hit work person no holiday.',good:'There\'s no such thing as time off when you\'re hustling.'}]},
{id:'fan-er',type:'calque',title:'"翻车" ≠ car flip',brief:'翻车 = flopped / went wrong',chinese:'这次直播翻车了',chinglish:'This livestream car flipped.',natural:'The livestream went totally wrong. / It was a disaster.',
explanation:'"翻车"= went wrong / flopped / blew up in their face / face-planted / was a train wreck。形容事情出了大纰漏。',
more:[{zh:'产品发布会翻车了',bad:'Product launch car flipped.',good:'The product launch was a disaster.'},{zh:'翻车现场',bad:'Car flip scene.',good:'It was a total dumpster fire.'}]},
{id:'bao-lei',type:'calque',title:'"暴雷" ≠ explode thunder',brief:'暴雷 = blow up / scandal broke',chinese:'那家公司暴雷了',chinglish:'That company exploded thunder.',natural:'That company just imploded. / The scandal broke.',
explanation:'"暴雷"= imploded / went bust / scandal broke / the other shoe dropped / blew up。指企业/个人负面消息被曝光。',
more:[{zh:'又一个理财产品暴雷了',bad:'Another finance product explode thunder.',good:'Another financial product just collapsed.'},{zh:'早就知道会暴雷',bad:'Early know will explode thunder.',good:'I knew it was going to blow up sooner or later.'}]},
{id:'jing-shen-nei-hao',type:'calque',title:'"精神内耗" ≠ spirit inside consume',brief:'精神内耗 = mental drain',chinese:'每天都在精神内耗',chinglish:'Every day spirit inside consuming.',natural:'I\'m mentally drained every day. / It\'s constant mental friction.',
explanation:'"精神内耗"= mental drain / overthinking / mental friction / emotional exhaustion。英文可以说 drained from overthinking。',
more:[{zh:'停止精神内耗',bad:'Stop spirit inside consume.',good:'Stop overthinking everything.'},{zh:'精神内耗比工作还累',bad:'Spirit inside consume more tired than work.',good:'The mental drain is worse than the actual work.'}]},
{id:'pua-le',type:'calque',title:'"被PUA了" 在英文语境中的说法',brief:'中文的 PUA 含义已经变了',chinese:'我被老板PUA了',chinglish:'I got PUA by boss.',natural:'My boss is gaslighting me. / My boss manipulates me.',
explanation:'中文"PUA"已泛化为"精神操控/打压"。英文对应 gaslighting（让你怀疑自己）/ manipulation / emotional abuse / negging（贬低式操控）。',
more:[{zh:'这就是职场PUA',bad:'This is workplace PUA.',good:'That\'s classic workplace manipulation.'},{zh:'别被PUA了',bad:'Don\'t get PUA.',good:'Don\'t let them gaslight you.'}]},
{id:'e-yi',type:'calque',title:'"恶意" ≠ evil meaning',brief:'恶意有多种翻译方式',chinese:'我没有恶意',chinglish:'I have no evil meaning.',natural:'I didn\'t mean any harm. / No offense intended.',
explanation:'"恶意"= ill will / malice / bad intentions / no offense。"没有恶意"= mean no harm / no offense / nothing personal。',
more:[{zh:'这不是恶意的',bad:'This is not evil meaning.',good:'I don\'t mean it in a bad way.'},{zh:'恶意竞争',bad:'Evil meaning competition.',good:'Cutthroat competition / Predatory practices.'}]},
{id:'pei-bu-shi',type:'calque',title:'"赔不是" ≠ compensate not yes',brief:'赔不是 = apologize',chinese:'你应该去赔不是',chinglish:'You should go compensate not yes.',natural:'You should go apologize.',
explanation:'"赔不是"= apologize / say sorry / make amends / make it right。更正式的可以说 offer an apology。',
more:[{zh:'他来赔不是了',bad:'He came to compensate not yes.',good:'He came to apologize.'},{zh:'赔不是也没用',bad:'Compensate not yes also no use.',good:'Apologizing won\'t fix this.'}]},
{id:'bie-tai-pin',type:'calque',title:'"别太拼了" ≠ don\'t too spell',brief:'表达"别太拼"的自然方式',chinese:'工作重要但别太拼了',chinglish:'Work important but don\'t too spell.',natural:'Work matters, but don\'t burn yourself out.',
explanation:'"拼"= push yourself / grind / hustle / go all out。"别太拼了"= don\'t burn yourself out / ease up / don\'t overdo it / pace yourself。',
more:[{zh:'你也太拼了',bad:'You also too spell.',good:'You\'re working way too hard.'},{zh:'拼一把',bad:'Spell one time.',good:'Let\'s give it our all. / Let\'s go all in.'}]},
{id:'zha-xin',type:'calque',title:'"扎心了" ≠ stab heart',brief:'扎心 = that hits hard / that hurts',chinese:'这话太扎心了',chinglish:'This words too stab heart.',natural:'That really hits hard. / Ouch, that stings.',
explanation:'"扎心"= hits home / stings / hurts / cuts deep / ouch。是指某句话戳中了痛处。',
more:[{zh:'扎心了老铁',bad:'Stab heart, old iron.',good:'That one hit different, bro.'},{zh:'别说了越说越扎心',bad:'Don\'t say, more say more stab heart.',good:'Stop — the more you talk, the worse it gets.'}]},
{id:'kai-che',type:'calque',title:'"开车" ≠ open vehicle（双关）',brief:'开车的日常含义和暗语含义',chinese:'我开车去',chinglish:'I open vehicle go.',natural:'I\'ll drive.',
explanation:'"开车"= drive。但在网络语境中"开车"也暗指讲段子或不正经内容。注意语境区分。日常出行直接说 drive / I\'ll drive / take the car。',
more:[{zh:'你开车还是我开车',bad:'You open vehicle or I open vehicle?',good:'Do you want to drive or should I?'},{zh:'开车来的',bad:'Open vehicle came.',good:'I drove here.'}]},
{id:'men',type:'calque',title:'"闷" ≠ boring（不完全对等）',brief:'闷有"无聊+压抑"的双重含义',chinese:'这个人很闷',chinglish:'This person very boring.',natural:'He\'s really quiet. / He doesn\'t say much.',
explanation:'"闷"形容人 = quiet / reserved / not very talkative。形容天气 = muggy / stuffy / humid。形容环境 = stuffy / dull。不完全等于 boring。',
more:[{zh:'天太闷了',bad:'Weather too boring.',good:'It\'s so muggy out.'},{zh:'别闷在家里',bad:'Don\'t boring at home.',good:'Don\'t stay cooped up at home.'}]},
{id:'diu-ren',type:'calque',title:'"丢人" ≠ throw person',brief:'丢人 = embarrassing / shameful',chinese:'丢人丢到家了',chinglish:'Throw person throw to home.',natural:'That was so embarrassing — I can\'t show my face.',
explanation:'"丢人"= embarrassing / shameful / humiliating / disgraceful。"丢人丢到家"= couldn\'t be more embarrassing / absolute disgrace。',
more:[{zh:'你不觉得丢人吗',bad:'You don\'t feel throw person?',good:'Aren\'t you embarrassed?'},{zh:'别丢人现眼了',bad:'Don\'t throw person appear eye.',good:'Stop making a fool of yourself.'}]},
{id:'ren-zhen',type:'calque',title:'"认真" ≠ recognize real',brief:'认真在英文中有很多翻译',chinese:'你太认真了',chinglish:'You too recognize real.',natural:'You\'re taking this too seriously.',
explanation:'"认真"= serious / careful / thorough / diligent。"别那么认真"= don\'t take it so seriously。"认真做"= put effort into / take seriously。',
more:[{zh:'认真工作',bad:'Recognize real work.',good:'Work diligently.'},{zh:'我是认真的',bad:'I am recognize real.',good:'I\'m serious. / I mean it.'}]},
{id:'da-rao',type:'calque',title:'"打扰" ≠ hit disturb',brief:'打扰的礼貌说法',chinese:'打扰一下',chinglish:'Hit disturb a moment.',natural:'Excuse me. / Sorry to interrupt.',
explanation:'"打扰"= disturb / interrupt / bother。但作为开场白不需要说 disturb。直接说 excuse me / sorry to bother you / do you have a sec。',
more:[{zh:'打扰了不好意思',bad:'Hit disturb, not good meaning.',good:'Sorry for the interruption.'},{zh:'我不想打扰你',bad:'I don\'t want hit disturb you.',good:'I don\'t want to bother you.'}]},
{id:'tong-yi',type:'calque',title:'"统一" ≠ unify（工作语境）',brief:'统一意见/口径有专门说法',chinese:'我们要统一口径',chinglish:'We must unify mouth size.',natural:'We need to get our story straight. / Let\'s align on the messaging.',
explanation:'"统一口径"= get our story straight / align on messaging。"统一意见"= reach a consensus / get on the same page。"统一"不一定用 unify。',
more:[{zh:'统一格式',bad:'Unify format.',good:'Let\'s standardize the format.'},{zh:'先统一一下想法',bad:'First unify the thinking.',good:'Let\'s get aligned first.'}]},
{id:'zou-xin',type:'calque',title:'"走心" ≠ walk heart',brief:'走心 = heartfelt / genuine / thoughtful',chinese:'这个礼物很走心',chinglish:'This gift very walk heart.',natural:'This gift is really thoughtful.',
explanation:'"走心"= heartfelt / thoughtful / genuine / put real thought into it。形容用了真心、很有诚意。',
more:[{zh:'这篇文章很走心',bad:'This article very walk heart.',good:'This article really speaks from the heart.'},{zh:'走心的设计',bad:'Walk heart design.',good:'A design with genuine thought behind it.'}]},
{id:'dao-mei',type:'calque',title:'"倒霉" ≠ fall mold',brief:'倒霉 = unlucky / bad luck',chinese:'今天太倒霉了',chinglish:'Today too fall mold.',natural:'Today has been terrible. / What a day.',
explanation:'"倒霉"= unlucky / having a bad day / bad luck / things went wrong / Murphy\'s law。',
more:[{zh:'倒霉催的',bad:'Fall mold push.',good:'Just my luck. / Of course this happened to me.'},{zh:'真倒霉',bad:'Really fall mold.',good:'What rotten luck.'}]},
{id:'jiao-qing',type:'calque',title:'"交情" ≠ hand feelings',brief:'交情 = history / relationship / go way back',chinese:'我们有交情',chinglish:'We have hand feelings.',natural:'We go way back. / We have history.',
explanation:'"交情"= history / relationship / bond / go way back / known each other for years。强调老朋友关系。',
more:[{zh:'看在多年交情的份上',bad:'Look at many years hand feelings.',good:'For old times\' sake.'},{zh:'没什么交情',bad:'Not much hand feelings.',good:'We\'re not that close. / I don\'t really know them.'}]},
{id:'gao-ding',type:'calque',title:'"搞定" ≠ do fixed',brief:'搞定 = done / handled / sorted',chinese:'搞定了！',chinglish:'Do fixed!',natural:'Done! / All sorted! / It\'s taken care of.',
explanation:'"搞定"= done / sorted / handled / taken care of / nailed it。非常实用的口语。',
more:[{zh:'你能搞定吗',bad:'You can do fixed?',good:'Can you handle it?'},{zh:'一小时搞定',bad:'One hour do fixed.',good:'Give me an hour — I\'ll get it done.'}]},
{id:'shi-qing-gao-da',type:'calque',title:'"把事情搞大" ≠ make thing do big',brief:'小事变大的说法',chinese:'别把事情搞大了',chinglish:'Don\'t make thing do big.',natural:'Don\'t blow this out of proportion. / Don\'t make a big deal out of it.',
explanation:'"把事情搞大"= blow out of proportion / make a big deal / escalate things / stir up trouble。',
more:[{zh:'他就喜欢把事情搞大',bad:'He likes to make things do big.',good:'He always blows things out of proportion.'},{zh:'事情已经搞大了',bad:'Thing already do big.',good:'Things have already gotten out of hand.'}]},
{id:'tui-guo',type:'calque',title:'"甩锅" ≠ swing pot',brief:'甩锅 = pass the blame',chinese:'别甩锅给我',chinglish:'Don\'t swing pot to me.',natural:'Don\'t pin this on me. / Don\'t throw me under the bus.',
explanation:'"甩锅"= pass the blame / throw under the bus / shift responsibility / pin it on someone / scapegoat。职场高频表达。',
more:[{zh:'他又在甩锅',bad:'He again swinging pot.',good:'He\'s deflecting blame again.'},{zh:'互相甩锅',bad:'Each other swing pot.',good:'They\'re just pointing fingers at each other.'}]},
{id:'zhan-wei',type:'calque',title:'"占位" ≠ occupy position',brief:'帮忙占座/占位的说法',chinese:'帮我占个位',chinglish:'Help me occupy a position.',natural:'Save me a seat.',
explanation:'"占位"= save a seat / hold a spot / reserve a place。日常最常说 save me a seat。',
more:[{zh:'这个位子有人占了',bad:'This seat someone occupied.',good:'This seat is taken.'},{zh:'先占个位子再点餐',bad:'First occupy position then order.',good:'Let\'s grab a table first, then order.'}]},
{id:'tou-teng',type:'calque',title:'"头疼" 做比喻时不是 headache',brief:'让人头疼的事英文也说 headache',chinese:'这个bug让我很头疼',chinglish:'This bug makes my head painful.',natural:'This bug is a real headache.',
explanation:'好消息：headache 在英文里也可以做比喻！但要注意搭配：a headache（名词）。不要说 my head hurts about the problem。',
more:[{zh:'最头疼的是沟通问题',bad:'Most head pain is communication problem.',good:'The biggest headache is the communication issue.'},{zh:'孩子让我很头疼',bad:'Child makes me head pain.',good:'The kids are driving me crazy.'}]},
{id:'la-chou',type:'calque',title:'"拉仇恨" ≠ pull hatred',brief:'拉仇恨 = flexing / rubbing it in',chinese:'你这是在拉仇恨',chinglish:'You this is pulling hatred.',natural:'You\'re just flexing now. / Way to rub it in.',
explanation:'"拉仇恨"= flexing / rubbing it in / making people jealous / showing off / bragging。是一种调侃。',
more:[{zh:'年终奖发了这么多，拉仇恨',bad:'Year-end bonus so much, pulling hatred.',good:'That bonus is insane — now you\'re just flexing.'},{zh:'别拉仇恨了',bad:'Don\'t pull hatred.',good:'Stop making us all jealous!'}]},
{id:'jiu-shi-shuo',type:'calque',title:'"就是说" ≠ that is say',brief:'口语填充语的翻译',chinese:'就是说嘛！',chinglish:'That is say!',natural:'Exactly! / That\'s what I\'m saying! / Right?!',
explanation:'"就是说"表示强烈认同。英文说 exactly / that\'s what I\'m saying / literally / right?! / for real。是社交媒体上很常见的反应。',
more:[{zh:'就是说啊谁不想呢',bad:'That is say, who not want?',good:'Literally! Who wouldn\'t want that?'},{zh:'就是说！太对了',bad:'That is say! Too correct.',good:'Exactly! Couldn\'t have said it better.'}]},
{id:'kou-zhao',type:'calque',title:'"口罩" ≠ mouth cover',brief:'口罩的标准翻译',chinese:'出门记得戴口罩',chinglish:'Go out remember wear mouth cover.',natural:'Don\'t forget your mask when you go out.',
explanation:'"口罩"= mask / face mask。不要翻成 mouth cover。"戴口罩"= wear a mask / put on a mask / mask up。',
more:[{zh:'口罩带了吗',bad:'Mouth cover brought?',good:'Got your mask?'},{zh:'摘口罩',bad:'Pick off mouth cover.',good:'Take off your mask.'}]},
{id:'gui-mi',type:'calque',title:'"闺蜜" ≠ boudoir secret',brief:'闺蜜 = bestie / BFF',chinese:'她是我闺蜜',chinglish:'She is my boudoir secret.',natural:'She\'s my bestie. / She\'s my best friend.',
explanation:'"闺蜜"= bestie / BFF (best friend forever) / best friend / ride or die（俚语）。英文中 bestie 最接近闺蜜的亲密感。',
more:[{zh:'跟闺蜜约了下午茶',bad:'With boudoir secret arranged afternoon tea.',good:'I\'m having afternoon tea with my bestie.'},{zh:'我们是十年闺蜜',bad:'We are ten year boudoir secret.',good:'We\'ve been best friends for ten years.'}]},
{id:'che-dan',type:'calque',title:'"扯淡" ≠ pull egg',brief:'扯淡 = BS / nonsense',chinese:'别扯淡了',chinglish:'Don\'t pull egg.',natural:'That\'s BS. / Cut the crap.',
explanation:'"扯淡"= nonsense / BS / rubbish / crap / baloney。表示不相信或觉得无意义。注意 BS 在职场中偏粗但很常用。',
more:[{zh:'听起来很扯',bad:'Sounds very pull.',good:'That sounds like total BS.'},{zh:'纯属扯淡',bad:'Pure is pull egg.',good:'Absolute nonsense.'}]},
{id:'pei-jiu',type:'calque',title:'"配" ≠ deserve/match（看语境）',brief:'"配"在中文里有好几种含义',chinese:'这个颜色很配你',chinglish:'This color very matches you.',natural:'This color looks great on you.',
explanation:'"配"可以是搭配（goes well with）、配得上（deserve）、适合（suits you）。不同含义不同翻译。',
more:[{zh:'你配得上更好的',bad:'You deserve match better.',good:'You deserve better.'},{zh:'这两个很配',bad:'These two very match.',good:'These two go really well together.'}]},

];

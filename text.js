/**
 * 互动古文教学平台 - 《归园田居（其三）》原文核心词解数据包
 */

const poemData = [
    // 第一句：种豆南山下，
    { text: "种", py: "zhòng", zh: "种植、栽种。", en: "to plant / to grow" },
    { text: "豆", py: "dòu", zh: "豆类作物，这里指黄豆或绿豆等。", en: "beans" },
    { text: "南山", py: "nán shān", zh: "指庐山。陶渊明隐居在庐山脚下。", en: "South Mountain (Mount Lu)", exam: true },
    { text: "下", py: "xià", zh: "山脚下、山下。", en: "below / at the foot of" },
    { text: "，", punc: true },

    // 第二句：草盛豆苗稀。
    { text: "草", py: "cǎo", zh: "野草、杂草。", en: "weeds" },
    { text: "盛", py: "shèng", zh: "茂盛、繁盛。", en: "flourishing / overgrown", exam: true },
    { text: "豆苗", py: "dòu miáo", zh: "豆类的幼苗。", en: "bean seedlings" },
    { text: "稀", py: "xī", zh: "稀疏、稀少。与"草盛"形成鲜明对比。", en: "sparse / thin", exam: true },
    { text: "。", punc: true },

    // 第三句：晨兴理荒秽，
    { text: "晨", py: "chén", zh: "清晨、早晨。", en: "morning / dawn" },
    { text: "兴", py: "xīng", zh: "起床、起来。", en: "to get up / to rise" },
    { text: "理", py: "lǐ", zh: "清理、整治。", en: "to tidy / to manage" },
    { text: "荒秽", py: "huāng huì", zh: "荒芜的田地中的杂草。秽：杂草。", en: "weeds in the wasteland", exam: true },
    { text: "，", punc: true },

    // 第四句：带月荷锄归。
    { text: "带月", py: "dài yuè", zh: "披着月光。形容早出晚归，劳作至夜晚。", en: "with the moon (working till night)", exam: true },
    { text: "荷", py: "hè", zh: "扛着、背着。读"hè"，意为肩负。", en: "to carry on the shoulder", exam: true },
    { text: "锄", py: "chú", zh: "锄头，农具。", en: "hoe" },
    { text: "归", py: "guī", zh: "回家、归来。", en: "to return home" },
    { text: "。", punc: true },

    // 第五句：道狭草木长，
    { text: "道", py: "dào", zh: "小路、道路。", en: "path / road" },
    { text: "狭", py: "xiá", zh: "狭窄、不宽阔。", en: "narrow" },
    { text: "草木", py: "cǎo mù", zh: "杂草和树木。", en: "grass and trees" },
    { text: "长", py: "zhǎng", zh: "生长、茂盛。读"zhǎng"。", en: "to grow / overgrown", exam: true },
    { text: "，", punc: true },

    // 第六句：夕露沾我衣。
    { text: "夕", py: "xī", zh: "傍晚、黄昏。", en: "evening / dusk" },
    { text: "露", py: "lù", zh: "露水。", en: "dew" },
    { text: "沾", py: "zhān", zh: "沾湿、浸湿。", en: "to moisten / to wet" },
    { text: "我衣", py: "wǒ yī", zh: "我的衣服。", en: "my clothes" },
    { text: "。", punc: true },

    // 第七句：衣沾不足惜，
    { text: "衣沾", py: "yī zhān", zh: "衣服被（露水）沾湿。", en: "clothes wet" },
    { text: "不足", py: "bù zú", zh: "不值得。", en: "not worth" },
    { text: "惜", py: "xī", zh: "惋惜、可惜。", en: "to regret / to pity", exam: true },
    { text: "，", punc: true },

    // 第八句：但使愿无违。
    { text: "但使", py: "dàn shǐ", zh: "只要让、只希望。", en: "as long as / if only" },
    { text: "愿", py: "yuàn", zh: "愿望、志向。指陶渊明归隐田园、远离官场的理想。", en: "wish / ideal (reclusive life)", exam: true },
    { text: "无违", py: "wú wéi", zh: "不违背、不辜负。", en: "not to betray / not to violate" },
    { text: "。", punc: true }
];

console.log("成功加载：text 原文数据包");

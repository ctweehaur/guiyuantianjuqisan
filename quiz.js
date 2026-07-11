/**
 * 互动古文教学平台 - 《归园田居（其三）》客观题数据包
 */

const quizQuestions = [
    {
        id: 1,
        text: "“草盛豆苗稀”中“盛”和“稀”的对比，说明了什么？",
        py: "cǎo shèng dòu miáo xī zhōng shèng hé xī de duì bǐ shuō míng le shén me",
        en: "What does the contrast between 'lush weeds' and 'sparse bean seedlings' indicate?",
        options: [
            {
                text: "诗人缺乏农耕经验，耕作效果不佳",
                py: "shī rén quē fá nóng gēng jīng yàn gēng zuò xiào guǒ bù jiā",
                en: "The poet lacks farming experience, resulting in poor cultivation",
                correct: true,
                explanation: "陶渊明早年做官，归隐后初次躬耕，缺乏务农经验，因此田地杂草丛生、豆苗稀疏。",
                explanationPy: "táo yuān míng zǎo nián zuò guān guī yǐn hòu chū cì gōng gēng quē fá wù nóng jīng yàn yīn cǐ tián dì zá cǎo cóng shēng dòu miáo xī shū",
                explanationEn: "Tao Yuanming had been an official before and lacked farming experience, hence the poor results."
            },
            {
                text: "诗人故意不认真种地，想让杂草生长",
                py: "shī rén gù yì bù rèn zhēn zhòng dì xiǎng ràng zá cǎo shēng zhǎng",
                en: "The poet deliberately neglects farming to let weeds grow",
                correct: false,
                explanation: "诗人并非故意荒废田地，而是真心实意地躬耕，只是缺乏经验导致豆稀草盛。",
                explanationPy: "shī rén bìng fēi gù yì huāng fèi tián dì ér shì zhēn xīn shí yì dì gōng gēng zhǐ shì quē fá jīng yàn dǎo zhì dòu xī cǎo shèng",
                explanationEn: "The poet did not deliberately neglect his fields; he was sincere in farming but lacked experience."
            },
            {
                text: "南山的土地本身不适合种豆",
                py: "nán shān de tǔ dì běn shēn bù shì hé zhòng dòu",
                en: "The land at South Mountain is not suitable for growing beans",
                correct: false,
                explanation: "诗中没有提及土地贫瘠的问题，“草盛”恰恰说明土地肥沃，只是诗人耕种不得法。",
                explanationPy: "shī zhōng méi yǒu tí jí tǔ dì pín jí de wèn tí cǎo shèng qià qià shuō míng tǔ dì féi wò zhǐ shì shī rén gēng zhòng bù dé fǎ",
                explanationEn: "The poem doesn't mention poor soil; 'lush weeds' actually suggests fertile soil, but poor farming technique."
            },
            {
                text: "诗人喜欢野草胜过豆苗",
                py: "shī rén xǐ huān yě cǎo shèng guò dòu miáo",
                en: "The poet prefers weeds over bean seedlings",
                correct: false,
                explanation: "诗人自然希望豆苗长得好，“草盛豆苗稀”是客观描述其农事结果，而非主观偏好。",
                explanationPy: "shī rén zì rán xī wàng dòu miáo zhǎng de hǎo cǎo shèng dòu miáo xī shì kè guān miáo shù qí nóng shì jié guǒ ér fēi zhǔ guān piān hǎo",
                explanationEn: "The poet certainly hoped for better bean growth; 'weeds lush, beans sparse' is an objective description, not preference."
            }
        ]
    },
    {
        id: 2,
        text: "“带月荷锄归”中“荷”字的正确读音和含义是什么？",
        py: "dài yuè hè chú guī zhōng hè zì de zhèng què dú yīn hé hán yì shì shén me",
        en: "What is the correct pronunciation and meaning of '荷' in this line?",
        options: [
            {
                text: "读 hè / 扛着、背着",
                py: "dú káng zhe bēi zhe",
                en: "Pronounced 'hè' / to carry on the shoulder",
                correct: true,
                explanation: "“荷”作动词时读 hè，意为肩负、扛着。诗人扛着锄头在月光下归来，画面宁静美好。",
                explanationPy: "hè zuò dòng cí shí dú yì wèi jiān fù káng zhe shī rén káng zhe chú tóu zài yuè guāng xià guī lái huà miàn níng jìng měi hǎo",
                explanationEn: "As a verb, '荷' is read as 'hè,' meaning to carry on the shoulder. The poet returns home carrying his hoe under the moonlight."
            },
            {
                text: "读 hé / 荷花",
                py: "dú hé huā",
                en: "Pronounced 'hé' / lotus flower",
                correct: false,
                explanation: "“荷”作名词指荷花时读 hé，但此处“荷锄”是动宾结构，意为“扛锄头”，应读 hè。",
                explanationPy: "hé zuò míng cí zhǐ hé huā shí dú dàn cǐ chù hè chú shì dòng bīn jié gòu yì wèi káng chú tóu yīng dú hè",
                explanationEn: "As a noun meaning 'lotus,' '荷' is read as 'hé,' but here it means 'carrying a hoe,' so the correct reading is 'hè.'"
            },
            {
                text: "读 hē / 负荷、承担",
                py: "dú fù hè chéng dān",
                en: "Pronounced 'hē' / to bear, to shoulder",
                correct: false,
                explanation: "“荷”读 hē 时通常用于“荷枪实弹”等词，但标准读音仍是 hè，hē 是误读。",
                explanationPy: "hē dú shí tōng cháng yòng yú hé qiāng shí dàn děng cí dàn biāo zhǔn dú yīn réng shì shì wù dú",
                explanationEn: "Some misread it as 'hē,' but the standard pronunciation for 'carry' is 'hè.'"
            },
            {
                text: "读 hé / 除草的工具",
                py: "dú chú cǎo de gōng jù",
                en: "Pronounced 'hé' / a weeding tool",
                correct: false,
                explanation: "“荷”无论读 hé 还是 hè 都指荷花或肩负，与“除草工具”无关。锄头本身才叫“锄”。",
                explanationPy: "hé wú lùn dú hái shì dōu zhǐ hé huā huò jiān fù yǔ chú cǎo gōng jù wú guān chú tóu běn shēn cái jiào chú",
                explanationEn: "The word doesn't mean 'weeding tool.' That's what '锄' (hoe) refers to."
            }
        ]
    },
    {
        id: 3,
        text: "“衣沾不足惜，但使愿无违”表达了诗人怎样的情感？",
        py: "yī zhān bù zú xī dàn shǐ yuàn wú wéi biǎo dá le shī rén zěn yàng de qíng gǎn",
        en: "What emotion does the last couplet express?",
        options: [
            {
                text: "不惧艰苦，坚守归隐田园的初心",
                py: "bù jù jiān kǔ jiān shǒu guī yǐn tián yuán de chū xīn",
                en: "Fearless of hardship, steadfast in the ideal of reclusion",
                correct: true,
                explanation: "诗人不怕衣服被露水沾湿，只求不违背自己归隐田园的初心，体现了他坚定的人生选择。",
                explanationPy: "shī rén bù pà yī fu bèi lù shuǐ zhān shī zhǐ qiú bù wéi bèi zì jǐ guī yǐn tián yuán de chū xīn tǐ xiàn le tā jiān dìng de rén shēng xuǎn zé",
                explanationEn: "The poet doesn't mind wet clothes, only that his reclusive ideal is not betrayed, showing his steadfast life choice."
            },
            {
                text: "抱怨农活太苦，想要放弃归隐",
                py: "bào yuàn nóng huó tài kǔ xiǎng yào fàng qì guī yǐn",
                en: "Complaining that farming is too hard and wanting to give up reclusion",
                correct: false,
                explanation: "恰恰相反，诗人不仅没有抱怨，反而用“不足惜”表达了对艰苦的不屑，显示了他坚定的归隐决心。",
                explanationPy: "qià qià xiāng fǎn shī rén bù jǐn méi yǒu bào yuàn fǎn ér yòng bù zú xī biǎo dá le duì jiān kǔ de bù xiè xiǎn shì le tā jiān dìng de guī yǐn jué xīn",
                explanationEn: "Quite the opposite! He uses 'not worth regretting' to show indifference to hardship, demonstrating firm determination."
            },
            {
                text: "感叹生活艰难，后悔辞官归隐",
                py: "gǎn tàn shēng huó jiān nán hòu huǐ cí guān guī yǐn",
                en: "Lamenting the hardship and regretting his decision to retire",
                correct: false,
                explanation: "诗人没有后悔，“但使愿无违”表明他唯一担心的是违背自己的愿望，而不是后悔归隐。",
                explanationPy: "shī rén méi yǒu hòu huǐ dàn shǐ yuàn wú wéi biǎo míng tā wéi yī dān xīn de shì wéi bèi zì jǐ de yuàn wàng ér bù shì hòu huǐ guī yǐn",
                explanationEn: "The poet shows no regret. The line shows his only concern is betraying his own ideal, not regretting retirement."
            },
            {
                text: "思念官场生活，想回去做官",
                py: "sī niàn guān chǎng shēng huó xiǎng huí qù zuò guān",
                en: "Missing official life and wanting to return to office",
                correct: false,
                explanation: "“愿”指的就是远离官场、归隐田园的愿望。如果思念官场，就违背了全诗的主旨。",
                explanationPy: "yuàn zhǐ de jiù shì yuǎn lí guān chǎng guī yǐn tián yuán de yuàn wàng rú guǒ sī niàn guān chǎng jiù wéi bèi le quán shī de zhǔ zhǐ",
                explanationEn: "The 'wish' refers precisely to leaving officialdom. Missing office would contradict the entire poem's theme."
            }
        ]
    },
    {

        id: 4,
        text: "这首诗中，诗人用什么具体细节来表现农耕生活的艰苦？",
        py: "zhè shǒu shī zhōng shī rén yòng shén me jù tǐ xì jié lái biǎo xiàn nóng gēng shēng huó de jiān kǔ",
        en: "What specific details does the poet use to show the hardship of farming life?",
        options: [
            {
                text: "“道狭草木长，夕露沾我衣”",
                py: "dào xiá cǎo mù zhǎng xī lù zhān wǒ yī",
                en: "Narrow paths with overgrown grass, dew wetting his clothes",
                correct: true,
                explanation: "道路狭窄、草木茂盛、夕露沾衣，这些细节生动地描绘了农耕环境的艰苦与诗人劳作至晚的辛劳。",
                explanationPy: "dào lù xiá zhǎi cǎo mù mào shèng xī lù zhān yī zhè xiē xì jié shēng dòng dì miáo huì le nóng gēng huán jìng de jiān kǔ yǔ shī rén láo zuò zhì wǎn de xīn láo",
                explanationEn: "Narrow paths, overgrown grass, and dew-wet clothes vividly depict the hardship of farming and late-night toil."
            },
            {
                text: "“种豆南山下，草盛豆苗稀”",
                py: "zhòng dòu nán shān xià cǎo shèng dòu miáo xī",
                en: "Planting beans at the foot of South Mountain, with sparse seedlings",
                correct: false,
                explanation: "这句主要表现的是耕作效果不佳，而非劳作的艰苦。艰苦体现在辛劳的过程而非结果。",
                explanationPy: "zhè jù zhǔ yào biǎo xiàn de shì gēng zuò xiào guǒ bù jiā ér fēi láo zuò de jiān kǔ jiān kǔ tǐ xiàn zài xīn láo de guò chéng ér fēi jié guǒ",
                explanationEn: "This line mainly shows poor farming results, not the hardship of the labor itself."
            },
            {
                text: "“晨兴理荒秽，带月荷锄归”",
                py: "chén xīng lǐ huāng huì dài yuè hè chú guī",
                en: "Rising at dawn and returning under the moon",
                correct: false,
                explanation: "这句表现的是诗人早出晚归的辛劳，也体现了辛苦。但题目问的是“具体细节”，“夕露沾衣”是更形象的细节描写。",
                explanationPy: "zhè jù biǎo xiàn de shì shī rén zǎo chū wǎn guī de xīn láo yě tǐ xiàn le xīn kǔ dàn tí mù wèn de shì jù tǐ xì jié xī lù zhān yī shì gèng xíng xiàng de xì jié miáo xiě",
                explanationEn: "This line shows early-to-rise and late-to-return toil, but 'dew wetting clothes' is a more concrete detail."
            },
            {
                text: "“衣沾不足惜，但使愿无违”",
                py: "yī zhān bù zú xī dàn shǐ yuàn wú wéi",
                en: "Clothes wet but not regretting, as long as the wish is fulfilled",
                correct: false,
                explanation: "这句表达的是诗人对归隐初心的坚守，表现的是精神追求而非农耕的具体艰苦细节。",
                explanationPy: "zhè jù biǎo dá de shì shī rén duì guī yǐn chū xīn de jiān shǒu biǎo xiàn de shì jīng shén zhuī qiú ér fēi nóng gēng de jù tǐ jiān kǔ xì jié",
                explanationEn: "This line expresses the poet's commitment to his reclusive ideal, showing spiritual pursuit rather than concrete farming hardship."
            }
        ]
    }
];

console.log("成功加载：quiz 客观题数据包");

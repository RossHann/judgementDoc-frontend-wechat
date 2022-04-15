var app = getApp()
var api = require('../../utils/api.js')

Page({
    data: {
        resultVisible: false,
        DocContent: '',
        curLength:0,
        result: {"success":true,"message":null,"content":[{"id":"text-1","content":"公诉机关河北省魏县人民检察院。\n被告人苗某甲，群众，农民。因涉嫌犯交通肇事罪于2014年5月5日到魏县公安局投案，次日被魏县公安局行政拘留，5月19日被魏县公安局刑事拘留，同年5月30日经魏县人民检察院批准逮捕，次由魏县公安局执行逮捕。现羁押于魏县看守所。\n辩护人许建忠，河北十力律师事务所律师。\n被告人段某甲，群众，农民。因涉嫌犯交通肇事罪于2014年8月29日被魏县公安局刑事拘留，同年9月9日经魏县人民检察院批准逮捕，次日由魏县公安局执行逮捕。现羁押于魏县看守所。\n辩护人杜宏宇、邢风丽，河北宏扬律师事务所律师。\n河北省魏县人民检察院以魏县院公诉刑诉（2014）147号起诉书指控被告人苗某甲、段某甲犯交通肇事罪，于2014年10月17日向本院提起公诉。本院依法组成合议庭，公开开庭进行了审理。魏县人民检察院指派检察员赵丽芳、郭凯出庭支持公诉，被告人苗某甲及其辩护人许建忠，被告人段某甲及其辩护人邢风丽等到庭参加诉讼。本案现已审理终结。\n","type":0,"relations":[]},{"id":"fact-1","content":"魏县人民检察院起诉书指控，2014年4月26日下午13时许，被告人段某甲明知自己的五征牌三轮汽车无牌照的情况下，仍指使被告人苗某甲驾驶无牌照五征牌三轮汽车去魏县双井镇前王圈村干活，当日19时许，被告人苗某甲驾驶该车沿丛峰线由西向东行使至魏县大辛庄乡王夹河村西段44KM＋950米处时，将前方段某乙驾驶的自行车撞倒，造成段某乙当场死亡，事故发生后，被告人苗某甲驾驶车辆逃离现场，后回到被告人段某甲住处，告诉段某甲事故发生的经过，被告人段某甲指使被告人苗某甲隐瞒事故发生的经过。","type":1,"relations":["law-1","law-5"],"count":1,"needs":[{"id":1666,"content":"第三条　“交通运输肇事后逃逸”，是指行为人具有本解释第二条第一款规定和第二款第（一）至（五）项规定的情形之一，在发生交通事故后，为逃避法律追究而逃跑的行为。","number":"第三条","crime":"","catalogId":222,"law":"最高人民法院关于审理交通肇事刑事案件具体应用法律若干问题的解释"},{"id":1722,"content":"第十四条　投保人允许的驾驶人驾驶机动车致使投保人遭受损害，当事人请求承保交强险的保险公司在责任限额范围内予以赔偿的，人民法院应予支持，但投保人为本车上人员的除外。","number":"第十四条","crime":"","catalogId":227,"law":"最高人民法院关于审理道路交通事故损害赔偿案件适用法律若干问题的解释"}]},{"id":"text-2","content":"","type":0,"relations":[]},{"id":"fact-2","content":"经魏县交通警察大队责任事故认定书认定，被告人苗某甲负事故的全部责任。","type":1,"relations":[],"count":2,"needs":[{"id":1664,"content":"第一条　从事交通运输人员或者非交通运输人员，违反交通运输管理法规发生重大交通事故，在分清事故责任的基础上，对于构成犯罪的，依照刑法第一百三十三条的规定定罪处罚。","number":"第一条","crime":"","catalogId":222,"law":"最高人民法院关于审理交通肇事刑事案件具体应用法律若干问题的解释"}]},{"id":"text-3","content":"","type":0,"relations":[]},{"id":"fact-3","content":"提供的主要证据：1、书证：破案经过、到案经过、现场资料、行政强制措施凭证、驾驶人信息查询结果单、驾驶证复印件，户籍证明及现实表现等；2、证人证言：证人张某甲、王某甲、郭某甲、段某丙等人的证言；3、被告人苗某甲、段某甲的供述与辩解；4、鉴定意见：法医学尸体检验分析意见书、痕迹检验意见书、交通事故道路责任认定书。","type":1,"relations":[],"count":3,"needs":[{"id":1149,"content":"第六十四条　代理诉讼的律师和其他诉讼代理人有权调查收集证据，可以查阅本案有关材料。查阅本案有关材料的范围和办法由最高人民法院规定。","number":"第六十四条","crime":"","catalogId":136,"law":"中华人民共和国民事诉讼法"}]},{"id":"text-4","content":"","type":0,"relations":[]},{"id":"fact-4","content":"指控被告人苗某甲、段某甲之行为触犯了《中华人民共和国刑法》第133条之规定，犯罪事实清楚，证据确实充分，应当以交通肇事罪追究其刑事责任。","type":1,"relations":["law-1","law-5"],"count":4,"needs":[{"id":646,"content":"第六十一条　【量刑的一般原则】对于犯罪分子决定刑罚的时候，应当根据犯罪的事实、犯罪的性质、情节和对于社会的危害程度，依照本法的有关规定判处。","number":"第六十一条","crime":"量刑的一般原则","catalogId":88,"law":"中华人民共和国刑法"}]},{"id":"text-5","content":"","type":0,"relations":[]},{"id":"fact-5","content":"请求依法判处。","type":1,"relations":[],"count":5,"needs":[{"id":646,"content":"第六十一条　【量刑的一般原则】对于犯罪分子决定刑罚的时候，应当根据犯罪的事实、犯罪的性质、情节和对于社会的危害程度，依照本法的有关规定判处。","number":"第六十一条","crime":"量刑的一般原则","catalogId":88,"law":"中华人民共和国刑法"}]},{"id":"text-6","content":"\n被告人苗某甲、段某甲对起诉书指控的犯罪事实供认不讳，无辩解意见。","type":0,"relations":[]},{"id":"text-7","content":"\n","type":0,"relations":[]},{"id":"fact-6","content":"被告人苗某甲的辩护人的辩护意见为：一，积极赔偿受害人家属，取得受害人家属的谅解；二、自动投案，具有自首情节；三、认罪态度较好，如实供述案情，当庭自愿认罪；四、被告人没有犯罪前科，系初犯、偶犯；五、事故认定书中可以看出受害人当场死亡。","type":1,"relations":["law-2","law-3"],"count":6,"needs":[{"id":16,"content":"第十六条　【人身损害赔偿】侵害他人造成人身损害的，应当赔偿医疗费、护理费、交通费等为治疗和康复支出的合理费用，以及因误工减少的收入。造成残疾的，还应当赔偿残疾生活辅助具费和残疾赔偿金。造成死亡的，还应当赔偿丧葬费和死亡赔偿金。","number":"第十六条","crime":"人身损害赔偿","catalogId":3,"law":"中华人民共和国侵权责任法"},{"id":552,"content":"第二百七十七条　【办理未成年人刑事案件的方针与原则】对犯罪的未成年人实行教育、感化、挽救的方针，坚持教育为主、惩罚为辅的原则。\n人民法院、人民检察院和公安机关办理未成年人刑事案件，应当保障未成年人行使其诉讼权利，保障未成年人得到法律帮助，并由熟悉未成年人身心特点的审判人员、检察人员、侦查人员承办。","number":"第二百七十七条","crime":"办理未成年人刑事案件的方针与原则","catalogId":64,"law":"中华人民共和国刑事诉讼法"},{"id":554,"content":"第二百七十九条　【未成年犯罪人情况调查】公安机关、人民检察院、人民法院办理未成年人刑事案件，根据情况可以对未成年犯罪嫌疑人、被告人的成长经历、犯罪原因、监护教育等情况进行调查。","number":"第二百七十九条","crime":"未成年犯罪人情况调查","catalogId":64,"law":"中华人民共和国刑事诉讼法"},{"id":1657,"content":"第一条　根据刑法第六十七条第一款的规定，犯罪以后自动投案，如实供述自己的罪行的，是自首。\n（一）自动投案，是指犯罪事实或者犯罪嫌疑人未被司法机关发觉，或者虽被发觉，但犯罪嫌疑人尚未受到讯问、未被采取强制措施时，主动、直接向公安机关、人民检察院或者人民法院投案。\n犯罪嫌疑人向其所在单位、城乡基层组织或者其他有关负责人员投案的；犯罪嫌疑人因病、伤或者为了减轻犯罪后果，委托他人先代为投案，或者先以信电投案的；罪行尚未被司法机关发觉，仅因形迹可疑，被有关组织或者司法机关盘问、教育后，主动交代自己的罪行的；犯罪后逃跑，在被通缉、追捕过程中，主动投案的；经查实确已准备去投案，或者正在投案途中，被公安机关捕获的，应当视为自动投案。\n并非出于犯罪嫌疑人主动，而是经亲友规劝、陪同投案的；公安机关通知犯罪嫌疑人的亲友，或者亲友主动报案后，将犯罪嫌疑人送去投案的，也应当视为自动投案。\n犯罪嫌疑人自动投案后又逃跑的，不能认定为自首。\n（二）如实供述自己的罪行，是指犯罪嫌疑人自动投案后，如实交代自己的主要犯罪事实。\n犯有数罪的犯罪嫌疑人仅如实供述所犯数罪中部分犯罪的，只对如实供述部分犯罪的行为，认定为自首。\n共","number":"第一条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"},{"id":1659,"content":"第三条　根据刑法第六十七条第一款的规定，对于自首的犯罪分子，可以从轻或者减轻处罚；对于犯罪较轻的，可以免除处罚。具体确定从轻、减轻还是免除处罚，应当根据犯罪轻重，并考虑自首的具体情节。","number":"第三条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"}]},{"id":"text-8","content":"","type":0,"relations":[]},{"id":"fact-7","content":"鉴于以上事实，请求法院依法判处缓刑。","type":1,"relations":[],"count":7,"needs":[{"id":646,"content":"第六十一条　【量刑的一般原则】对于犯罪分子决定刑罚的时候，应当根据犯罪的事实、犯罪的性质、情节和对于社会的危害程度，依照本法的有关规定判处。","number":"第六十一条","crime":"量刑的一般原则","catalogId":88,"law":"中华人民共和国刑法"}]},{"id":"text-9","content":"\n","type":0,"relations":[]},{"id":"fact-8","content":"被告人段某甲的辩护人的辩护意见为：一、该案被告人段某甲犯有交通肇事罪，属过失犯罪，主观罪过较轻，在该案中应对其从轻处罚；二、被告人段某甲当庭能如实供述自己的罪行，认罪态度较好，具有法定从轻或减轻处罚的情节，应从宽处罚；三、民事部分赔偿受害人亲属经济损失，现已和被害人亲属达成调解协议；四、被告人段某甲具备适用缓刑的条件。","type":1,"relations":["law-5","law-2"],"count":8,"needs":[{"id":2,"content":"第二条　侵害民事权益，应当依照本法承担侵权责任。\n本法所称民事权益，包括生命权、健康权、姓名权、名誉权、荣誉权、肖像权、隐私权、婚姻自主权、监护权、所有权、用益物权、担保物权、著作权、专利权、商标专用权、发现权、股权、继承权等人身、财产权益。","number":"第二条","crime":"","catalogId":2,"law":"中华人民共和国侵权责任法"},{"id":6,"content":"第六条　行为人因过错侵害他人民事权益，应当承担侵权责任。\n根据法律规定推定行为人有过错，行为人不能证明自己没有过错的，应当承担侵权责任。","number":"第六条","crime":"","catalogId":3,"law":"中华人民共和国侵权责任法"},{"id":15,"content":"第十五条　承担侵权责任的方式主要有：\n（一）停止侵害\n（二）排除妨碍\n（三）消除危险\n（四）返还财产\n（五）恢复原状\n（六）赔偿损失\n（七）赔礼道歉\n（八）消除影响、恢复名誉。\n以上承担侵权责任的方式，可以单独适用，也可以合并适用。","number":"第十五条","crime":"","catalogId":3,"law":"中华人民共和国侵权责任法"},{"id":16,"content":"第十六条　【人身损害赔偿】侵害他人造成人身损害的，应当赔偿医疗费、护理费、交通费等为治疗和康复支出的合理费用，以及因误工减少的收入。造成残疾的，还应当赔偿残疾生活辅助具费和残疾赔偿金。造成死亡的，还应当赔偿丧葬费和死亡赔偿金。","number":"第十六条","crime":"人身损害赔偿","catalogId":3,"law":"中华人民共和国侵权责任法"},{"id":554,"content":"第二百七十九条　【未成年犯罪人情况调查】公安机关、人民检察院、人民法院办理未成年人刑事案件，根据情况可以对未成年犯罪嫌疑人、被告人的成长经历、犯罪原因、监护教育等情况进行调查。","number":"第二百七十九条","crime":"未成年犯罪人情况调查","catalogId":64,"law":"中华人民共和国刑事诉讼法"},{"id":620,"content":"第三十六条　【赔偿经济损失与民事优先原则】由于犯罪行为而使被害人遭受经济损失的，对犯罪分子除依法给予刑事处罚外，并应根据情况判处赔偿经济损失。\n承担民事赔偿责任的犯罪分子，同时被判处罚金，其财产不足以全部支付的，或者被判处没收财产的，应当先承担对被害人的民事赔偿责任。","number":"第三十六条","crime":"赔偿经济损失与民事优先原则","catalogId":79,"law":"中华人民共和国刑法"},{"id":1657,"content":"第一条　根据刑法第六十七条第一款的规定，犯罪以后自动投案，如实供述自己的罪行的，是自首。\n（一）自动投案，是指犯罪事实或者犯罪嫌疑人未被司法机关发觉，或者虽被发觉，但犯罪嫌疑人尚未受到讯问、未被采取强制措施时，主动、直接向公安机关、人民检察院或者人民法院投案。\n犯罪嫌疑人向其所在单位、城乡基层组织或者其他有关负责人员投案的；犯罪嫌疑人因病、伤或者为了减轻犯罪后果，委托他人先代为投案，或者先以信电投案的；罪行尚未被司法机关发觉，仅因形迹可疑，被有关组织或者司法机关盘问、教育后，主动交代自己的罪行的；犯罪后逃跑，在被通缉、追捕过程中，主动投案的；经查实确已准备去投案，或者正在投案途中，被公安机关捕获的，应当视为自动投案。\n并非出于犯罪嫌疑人主动，而是经亲友规劝、陪同投案的；公安机关通知犯罪嫌疑人的亲友，或者亲友主动报案后，将犯罪嫌疑人送去投案的，也应当视为自动投案。\n犯罪嫌疑人自动投案后又逃跑的，不能认定为自首。\n（二）如实供述自己的罪行，是指犯罪嫌疑人自动投案后，如实交代自己的主要犯罪事实。\n犯有数罪的犯罪嫌疑人仅如实供述所犯数罪中部分犯罪的，只对如实供述部分犯罪的行为，认定为自首。\n共","number":"第一条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"},{"id":1659,"content":"第三条　根据刑法第六十七条第一款的规定，对于自首的犯罪分子，可以从轻或者减轻处罚；对于犯罪较轻的，可以免除处罚。具体确定从轻、减轻还是免除处罚，应当根据犯罪轻重，并考虑自首的具体情节。","number":"第三条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"},{"id":1689,"content":"第十七条　受害人遭受人身损害，因就医治疗支出的各项费用以及因误工减少的收入，包括医疗费、误工费、护理费、交通费、住宿费、住院伙食补助费、必要的营养费，赔偿义务人应当予以赔偿。\n受害人因伤致残的，其因增加生活上需要所支出的必要费用以及因丧失劳动能力导致的收入损失，包括残疾赔偿金、残疾辅助器具费、被扶养人生活费，以及因康复护理、继续治疗实际发生的必要的康复费、护理费、后续治疗费，赔偿义务人也应当予以赔偿。\n受害人死亡的，赔偿义务人除应当根据抢救治疗情况赔偿本条第一款规定的相关费用外，还应当赔偿丧葬费、被扶养人生活费、死亡补偿费以及受害人亲属办理丧葬事宜支出的交通费、住宿费和误工损失等其他合理费用。","number":"第十七条","crime":"","catalogId":223,"law":"最高人民法院关于审理人身损害赔偿案件适用法律若干问题的解释"}]},{"id":"text-10","content":"\n","type":0,"relations":[]},{"id":"fact-9","content":"经审理查明，2014年4月26日下午13时许，被告人段某甲明知自己的五征牌三轮汽车无牌照的情况下，仍指使被告人苗某甲驾驶无牌照五征牌三轮汽车去魏县双井镇前王圈村干活，当日19时许，被告人苗某甲驾驶与准驾车型不符的驾驶证驾驶无牌照三轮汽车上路，该车沿丛峰线由西向东行使至魏县大辛庄乡王夹河村西段44KM＋950米处时，将前方段某乙驾驶的自行车撞倒，造成段某乙当场死亡，事故发生后，被告人苗某甲驾驶车辆逃离现场，后回到被告人段某甲住处，告诉段某甲事故发生的经过，被告人段某甲指使被告人苗某甲隐瞒事故发生的经过。","type":1,"relations":["law-1","law-5"],"count":9,"needs":[{"id":1551,"content":"第十九条　驾驶机动车，应当依法取得机动车驾驶证。\n申请机动车驾驶证，应当符合国务院公安部门规定的驾驶许可条件；经考试合格后，由公安机关交通管理部门发给相应类别的机动车驾驶证。\n持有境外机动车驾驶证的人，符合国务院公安部门规定的驾驶许可条件，经公安机关交通管理部门考核合格的，可以发给中国的机动车驾驶证。\n驾驶人应当按照驾驶证载明的准驾车型驾驶机动车；驾驶机动车时，应当随身携带机动车驾驶证。\n公安机关交通管理部门以外的任何单位或者个人，不得收缴、扣留机动车驾驶证。","number":"第十九条","crime":"","catalogId":209,"law":"中华人民共和国道路交通安全法"},{"id":1666,"content":"第三条　“交通运输肇事后逃逸”，是指行为人具有本解释第二条第一款规定和第二款第（一）至（五）项规定的情形之一，在发生交通事故后，为逃避法律追究而逃跑的行为。","number":"第三条","crime":"","catalogId":222,"law":"最高人民法院关于审理交通肇事刑事案件具体应用法律若干问题的解释"},{"id":1722,"content":"第十四条　投保人允许的驾驶人驾驶机动车致使投保人遭受损害，当事人请求承保交强险的保险公司在责任限额范围内予以赔偿的，人民法院应予支持，但投保人为本车上人员的除外。","number":"第十四条","crime":"","catalogId":227,"law":"最高人民法院关于审理道路交通事故损害赔偿案件适用法律若干问题的解释"}]},{"id":"text-11","content":"\n","type":0,"relations":[]},{"id":"fact-10","content":"另查明，2014年5月5日下午，被告人苗某甲到魏县交通警察大队投案。","type":1,"relations":["law-2"],"count":10,"needs":[{"id":1657,"content":"第一条　根据刑法第六十七条第一款的规定，犯罪以后自动投案，如实供述自己的罪行的，是自首。\n（一）自动投案，是指犯罪事实或者犯罪嫌疑人未被司法机关发觉，或者虽被发觉，但犯罪嫌疑人尚未受到讯问、未被采取强制措施时，主动、直接向公安机关、人民检察院或者人民法院投案。\n犯罪嫌疑人向其所在单位、城乡基层组织或者其他有关负责人员投案的；犯罪嫌疑人因病、伤或者为了减轻犯罪后果，委托他人先代为投案，或者先以信电投案的；罪行尚未被司法机关发觉，仅因形迹可疑，被有关组织或者司法机关盘问、教育后，主动交代自己的罪行的；犯罪后逃跑，在被通缉、追捕过程中，主动投案的；经查实确已准备去投案，或者正在投案途中，被公安机关捕获的，应当视为自动投案。\n并非出于犯罪嫌疑人主动，而是经亲友规劝、陪同投案的；公安机关通知犯罪嫌疑人的亲友，或者亲友主动报案后，将犯罪嫌疑人送去投案的，也应当视为自动投案。\n犯罪嫌疑人自动投案后又逃跑的，不能认定为自首。\n（二）如实供述自己的罪行，是指犯罪嫌疑人自动投案后，如实交代自己的主要犯罪事实。\n犯有数罪的犯罪嫌疑人仅如实供述所犯数罪中部分犯罪的，只对如实供述部分犯罪的行为，认定为自首。\n共","number":"第一条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"},{"id":1659,"content":"第三条　根据刑法第六十七条第一款的规定，对于自首的犯罪分子，可以从轻或者减轻处罚；对于犯罪较轻的，可以免除处罚。具体确定从轻、减轻还是免除处罚，应当根据犯罪轻重，并考虑自首的具体情节。","number":"第三条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"}]},{"id":"text-12","content":"","type":0,"relations":[]},{"id":"fact-11","content":"被告人段某甲于2014年8月29日经口头传唤到魏县交通警察大队。","type":1,"relations":["law-2"],"count":11,"needs":[{"id":1657,"content":"第一条　根据刑法第六十七条第一款的规定，犯罪以后自动投案，如实供述自己的罪行的，是自首。\n（一）自动投案，是指犯罪事实或者犯罪嫌疑人未被司法机关发觉，或者虽被发觉，但犯罪嫌疑人尚未受到讯问、未被采取强制措施时，主动、直接向公安机关、人民检察院或者人民法院投案。\n犯罪嫌疑人向其所在单位、城乡基层组织或者其他有关负责人员投案的；犯罪嫌疑人因病、伤或者为了减轻犯罪后果，委托他人先代为投案，或者先以信电投案的；罪行尚未被司法机关发觉，仅因形迹可疑，被有关组织或者司法机关盘问、教育后，主动交代自己的罪行的；犯罪后逃跑，在被通缉、追捕过程中，主动投案的；经查实确已准备去投案，或者正在投案途中，被公安机关捕获的，应当视为自动投案。\n并非出于犯罪嫌疑人主动，而是经亲友规劝、陪同投案的；公安机关通知犯罪嫌疑人的亲友，或者亲友主动报案后，将犯罪嫌疑人送去投案的，也应当视为自动投案。\n犯罪嫌疑人自动投案后又逃跑的，不能认定为自首。\n（二）如实供述自己的罪行，是指犯罪嫌疑人自动投案后，如实交代自己的主要犯罪事实。\n犯有数罪的犯罪嫌疑人仅如实供述所犯数罪中部分犯罪的，只对如实供述部分犯罪的行为，认定为自首。\n共","number":"第一条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"},{"id":1659,"content":"第三条　根据刑法第六十七条第一款的规定，对于自首的犯罪分子，可以从轻或者减轻处罚；对于犯罪较轻的，可以免除处罚。具体确定从轻、减轻还是免除处罚，应当根据犯罪轻重，并考虑自首的具体情节。","number":"第三条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"}]},{"id":"text-13","content":"","type":0,"relations":[]},{"id":"fact-12","content":"2014年11月24日被告人苗某甲、段某甲方与受害人家属达成协议，被告人苗某甲、段某甲方赔偿被害人家属各项经济损失共计300000元，并取得被害人家属的谅解。","type":1,"relations":["law-3"],"count":12,"needs":[{"id":2,"content":"第二条　侵害民事权益，应当依照本法承担侵权责任。\n本法所称民事权益，包括生命权、健康权、姓名权、名誉权、荣誉权、肖像权、隐私权、婚姻自主权、监护权、所有权、用益物权、担保物权、著作权、专利权、商标专用权、发现权、股权、继承权等人身、财产权益。","number":"第二条","crime":"","catalogId":2,"law":"中华人民共和国侵权责任法"},{"id":6,"content":"第六条　行为人因过错侵害他人民事权益，应当承担侵权责任。\n根据法律规定推定行为人有过错，行为人不能证明自己没有过错的，应当承担侵权责任。","number":"第六条","crime":"","catalogId":3,"law":"中华人民共和国侵权责任法"},{"id":15,"content":"第十五条　承担侵权责任的方式主要有：\n（一）停止侵害\n（二）排除妨碍\n（三）消除危险\n（四）返还财产\n（五）恢复原状\n（六）赔偿损失\n（七）赔礼道歉\n（八）消除影响、恢复名誉。\n以上承担侵权责任的方式，可以单独适用，也可以合并适用。","number":"第十五条","crime":"","catalogId":3,"law":"中华人民共和国侵权责任法"},{"id":16,"content":"第十六条　【人身损害赔偿】侵害他人造成人身损害的，应当赔偿医疗费、护理费、交通费等为治疗和康复支出的合理费用，以及因误工减少的收入。造成残疾的，还应当赔偿残疾生活辅助具费和残疾赔偿金。造成死亡的，还应当赔偿丧葬费和死亡赔偿金。","number":"第十六条","crime":"人身损害赔偿","catalogId":3,"law":"中华人民共和国侵权责任法"},{"id":18,"content":"第十八条　【被侵权人死亡或者合并、分立时请求权人的确定】被侵权人死亡的，其近亲属有权请求侵权人承担侵权责任。被侵权人为单位，该单位分立、合并的，承继权利的单位有权请求侵权人承担侵权责任。\n被侵权人死亡的，支付被侵权人医疗费、丧葬费等合理费用的人有权请求侵权人赔偿费用，但侵权人已支付该费用的除外。","number":"第十八条","crime":"被侵权人死亡或者合并、分立时请求权人的确定","catalogId":3,"law":"中华人民共和国侵权责任法"},{"id":552,"content":"第二百七十七条　【办理未成年人刑事案件的方针与原则】对犯罪的未成年人实行教育、感化、挽救的方针，坚持教育为主、惩罚为辅的原则。\n人民法院、人民检察院和公安机关办理未成年人刑事案件，应当保障未成年人行使其诉讼权利，保障未成年人得到法律帮助，并由熟悉未成年人身心特点的审判人员、检察人员、侦查人员承办。","number":"第二百七十七条","crime":"办理未成年人刑事案件的方针与原则","catalogId":64,"law":"中华人民共和国刑事诉讼法"},{"id":554,"content":"第二百七十九条　【未成年犯罪人情况调查】公安机关、人民检察院、人民法院办理未成年人刑事案件，根据情况可以对未成年犯罪嫌疑人、被告人的成长经历、犯罪原因、监护教育等情况进行调查。","number":"第二百七十九条","crime":"未成年犯罪人情况调查","catalogId":64,"law":"中华人民共和国刑事诉讼法"},{"id":620,"content":"第三十六条　【赔偿经济损失与民事优先原则】由于犯罪行为而使被害人遭受经济损失的，对犯罪分子除依法给予刑事处罚外，并应根据情况判处赔偿经济损失。\n承担民事赔偿责任的犯罪分子，同时被判处罚金，其财产不足以全部支付的，或者被判处没收财产的，应当先承担对被害人的民事赔偿责任。","number":"第三十六条","crime":"赔偿经济损失与民事优先原则","catalogId":79,"law":"中华人民共和国刑法"},{"id":1689,"content":"第十七条　受害人遭受人身损害，因就医治疗支出的各项费用以及因误工减少的收入，包括医疗费、误工费、护理费、交通费、住宿费、住院伙食补助费、必要的营养费，赔偿义务人应当予以赔偿。\n受害人因伤致残的，其因增加生活上需要所支出的必要费用以及因丧失劳动能力导致的收入损失，包括残疾赔偿金、残疾辅助器具费、被扶养人生活费，以及因康复护理、继续治疗实际发生的必要的康复费、护理费、后续治疗费，赔偿义务人也应当予以赔偿。\n受害人死亡的，赔偿义务人除应当根据抢救治疗情况赔偿本条第一款规定的相关费用外，还应当赔偿丧葬费、被扶养人生活费、死亡补偿费以及受害人亲属办理丧葬事宜支出的交通费、住宿费和误工损失等其他合理费用。","number":"第十七条","crime":"","catalogId":223,"law":"最高人民法院关于审理人身损害赔偿案件适用法律若干问题的解释"}]},{"id":"text-14","content":"\n上述犯罪事实，有以下证据：\n","type":0,"relations":[]},{"id":"fact-13","content":"1、被告人苗某甲的供述，2014年4月26日19时左右，其驾驶五征牌三轮汽车沿丛峰线由西向东行驶至王夹河村西路时撞倒一辆同方向行驶的自行车，事故发生后，其就开车走了。","type":1,"relations":["law-1","law-5"],"count":13,"needs":[]},{"id":"text-15","content":"其回到老板家里后将事情经过给老板讲了一下。","type":0,"relations":[]},{"id":"text-16","content":"其老板叫其不要说给别人。","type":0,"relations":[]},{"id":"text-17","content":"其老板还叫其继续上班。","type":0,"relations":[]},{"id":"text-18","content":"其又上了一天的班，其就向老板请了一个礼拜的假，就去了辽宁。","type":0,"relations":[]},{"id":"text-19","content":"","type":0,"relations":[]},{"id":"fact-14","content":"其在辽宁住了三天，后其就选择投案。","type":1,"relations":["law-2"],"count":14,"needs":[{"id":1657,"content":"第一条　根据刑法第六十七条第一款的规定，犯罪以后自动投案，如实供述自己的罪行的，是自首。\n（一）自动投案，是指犯罪事实或者犯罪嫌疑人未被司法机关发觉，或者虽被发觉，但犯罪嫌疑人尚未受到讯问、未被采取强制措施时，主动、直接向公安机关、人民检察院或者人民法院投案。\n犯罪嫌疑人向其所在单位、城乡基层组织或者其他有关负责人员投案的；犯罪嫌疑人因病、伤或者为了减轻犯罪后果，委托他人先代为投案，或者先以信电投案的；罪行尚未被司法机关发觉，仅因形迹可疑，被有关组织或者司法机关盘问、教育后，主动交代自己的罪行的；犯罪后逃跑，在被通缉、追捕过程中，主动投案的；经查实确已准备去投案，或者正在投案途中，被公安机关捕获的，应当视为自动投案。\n并非出于犯罪嫌疑人主动，而是经亲友规劝、陪同投案的；公安机关通知犯罪嫌疑人的亲友，或者亲友主动报案后，将犯罪嫌疑人送去投案的，也应当视为自动投案。\n犯罪嫌疑人自动投案后又逃跑的，不能认定为自首。\n（二）如实供述自己的罪行，是指犯罪嫌疑人自动投案后，如实交代自己的主要犯罪事实。\n犯有数罪的犯罪嫌疑人仅如实供述所犯数罪中部分犯罪的，只对如实供述部分犯罪的行为，认定为自首。\n共","number":"第一条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"},{"id":1659,"content":"第三条　根据刑法第六十七条第一款的规定，对于自首的犯罪分子，可以从轻或者减轻处罚；对于犯罪较轻的，可以免除处罚。具体确定从轻、减轻还是免除处罚，应当根据犯罪轻重，并考虑自首的具体情节。","number":"第三条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"}]},{"id":"text-20","content":"其称驾驶的车辆是段某甲的，是段某甲让其开的，其车没有牌照。","type":0,"relations":[]},{"id":"text-21","content":"其曾对着段某甲、段某甲老婆、张某甲说了事故发生的事。","type":0,"relations":[]},{"id":"text-22","content":"\n2、被告人段某甲的供述，2014年4月26日下午，其给苗某甲打电话说叫他去前王圈村把木板拉回来，后来苗某甲在7、8点的时候才回来，一般其工人都是在5、6点的时候下班，后来苗某甲就把车上的木板从车上卸了下来，其与苗某甲是雇佣关系。","type":0,"relations":[]},{"id":"text-23","content":"其知道王夹河西地撞死人了。","type":0,"relations":[]},{"id":"text-24","content":"","type":0,"relations":[]},{"id":"fact-15","content":"其车上没有牌照。","type":1,"relations":["law-5"],"count":15,"needs":[]},{"id":"text-25","content":"\n3、证人张某甲的证言，2014年4月26日，苗某甲开着三轮汽车回来后，等他们将车上拉的东西卸下来，其和苗某甲、段某甲就进屋了，到屋后苗某甲就把开车出事的经过给段某甲讲了一遍。","type":0,"relations":[]},{"id":"text-26","content":"其也在一旁听着，苗某甲说完撞人的事，段某甲叫其不要跟任何人说这件事。","type":0,"relations":[]},{"id":"text-27","content":"","type":0,"relations":[]},{"id":"fact-16","content":"其说段某甲的车没有牌照。","type":1,"relations":["law-5"],"count":16,"needs":[]},{"id":"text-28","content":"\n","type":0,"relations":[]},{"id":"fact-17","content":"4、证人郭某甲的证言，其称段某甲是大辛庄乡人，段某甲说他的工人在其这里干完活在回去的路上发生了交通事故，来其这了解情况。","type":1,"relations":["law-5"],"count":17,"needs":[]},{"id":"text-29","content":"其称段某甲的工人最后来干活的时间是2014年4月26日下午14时许，来其这干活。","type":0,"relations":[]},{"id":"text-30","content":"其在他们干完活后请他们吃了饭。","type":0,"relations":[]},{"id":"text-31","content":"\n5、证人王某甲的证言，其称2014年4月26日，在干完活回来的时候是苗某甲开着三轮汽车。","type":0,"relations":[]},{"id":"text-32","content":"\n6、证人段某丙的证言，2014年4月26日晚上20时30分许，其在北京打工，接到其爱人康某甲的电话。","type":0,"relations":[]},{"id":"text-33","content":"其爱人在电话中告诉其父亲发生车祸，其就和其兄弟段某丁从北京回来了。","type":0,"relations":[]},{"id":"text-34","content":"\n","type":0,"relations":[]},{"id":"fact-18","content":"7、证人王某甲的证言，其称段某乙的哥哥2014年5月5日晚上打电话说段某乙出事了，到2014年5月9日上午其回家后才知道，段某乙因交通事故死亡。","type":1,"relations":["law-1","law-5"],"count":18,"needs":[{"id":1722,"content":"第十四条　投保人允许的驾驶人驾驶机动车致使投保人遭受损害，当事人请求承保交强险的保险公司在责任限额范围内予以赔偿的，人民法院应予支持，但投保人为本车上人员的除外。","number":"第十四条","crime":"","catalogId":227,"law":"最高人民法院关于审理道路交通事故损害赔偿案件适用法律若干问题的解释"}]},{"id":"text-35","content":"\n8、调解协议书、收到条、谅解书、撤回起诉申请书\n","type":0,"relations":[]},{"id":"fact-19","content":"，证明民事部分已经调解，并取得被害人家属的谅解。","type":1,"relations":["law-3"],"count":19,"needs":[{"id":374,"content":"第九十九条　【超期强制措施的处理】人民法院、人民检察院或者公安机关对被采取强制措施法定期限届满的犯罪嫌疑人、被告人，应当予以释放、解除取保候审、监视居住或者依法变更强制措施。犯罪嫌疑人、被告人及其法定代理人、近亲属或者辩护人对于人民法院、人民检察院或者公安机关采取强制措施法定期限届满的，有权要求解除强制措施。","number":"第九十九条","crime":"超期强制措施的处理","catalogId":33,"law":"中华人民共和国刑事诉讼法"},{"id":552,"content":"第二百七十七条　【办理未成年人刑事案件的方针与原则】对犯罪的未成年人实行教育、感化、挽救的方针，坚持教育为主、惩罚为辅的原则。\n人民法院、人民检察院和公安机关办理未成年人刑事案件，应当保障未成年人行使其诉讼权利，保障未成年人得到法律帮助，并由熟悉未成年人身心特点的审判人员、检察人员、侦查人员承办。","number":"第二百七十七条","crime":"办理未成年人刑事案件的方针与原则","catalogId":64,"law":"中华人民共和国刑事诉讼法"},{"id":554,"content":"第二百七十九条　【未成年犯罪人情况调查】公安机关、人民检察院、人民法院办理未成年人刑事案件，根据情况可以对未成年犯罪嫌疑人、被告人的成长经历、犯罪原因、监护教育等情况进行调查。","number":"第二百七十九条","crime":"未成年犯罪人情况调查","catalogId":64,"law":"中华人民共和国刑事诉讼法"}]},{"id":"text-36","content":"\n","type":0,"relations":[]},{"id":"fact-20","content":"9、破案经过、到案经过，证明苗某甲投案，段某甲经口头传唤到案。","type":1,"relations":["law-2"],"count":20,"needs":[{"id":1657,"content":"第一条　根据刑法第六十七条第一款的规定，犯罪以后自动投案，如实供述自己的罪行的，是自首。\n（一）自动投案，是指犯罪事实或者犯罪嫌疑人未被司法机关发觉，或者虽被发觉，但犯罪嫌疑人尚未受到讯问、未被采取强制措施时，主动、直接向公安机关、人民检察院或者人民法院投案。\n犯罪嫌疑人向其所在单位、城乡基层组织或者其他有关负责人员投案的；犯罪嫌疑人因病、伤或者为了减轻犯罪后果，委托他人先代为投案，或者先以信电投案的；罪行尚未被司法机关发觉，仅因形迹可疑，被有关组织或者司法机关盘问、教育后，主动交代自己的罪行的；犯罪后逃跑，在被通缉、追捕过程中，主动投案的；经查实确已准备去投案，或者正在投案途中，被公安机关捕获的，应当视为自动投案。\n并非出于犯罪嫌疑人主动，而是经亲友规劝、陪同投案的；公安机关通知犯罪嫌疑人的亲友，或者亲友主动报案后，将犯罪嫌疑人送去投案的，也应当视为自动投案。\n犯罪嫌疑人自动投案后又逃跑的，不能认定为自首。\n（二）如实供述自己的罪行，是指犯罪嫌疑人自动投案后，如实交代自己的主要犯罪事实。\n犯有数罪的犯罪嫌疑人仅如实供述所犯数罪中部分犯罪的，只对如实供述部分犯罪的行为，认定为自首。\n共","number":"第一条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"},{"id":1659,"content":"第三条　根据刑法第六十七条第一款的规定，对于自首的犯罪分子，可以从轻或者减轻处罚；对于犯罪较轻的，可以免除处罚。具体确定从轻、减轻还是免除处罚，应当根据犯罪轻重，并考虑自首的具体情节。","number":"第三条","crime":"","catalogId":221,"law":"最高人民法院关于处理自首和立功具体应用法律若干问题的解释"}]},{"id":"text-37","content":"\n","type":0,"relations":[]},{"id":"fact-21","content":"10、现场勘查笔录、现场照片、现场图，证明现场的基本情况。","type":1,"relations":[],"count":21,"needs":[{"id":1149,"content":"第六十四条　代理诉讼的律师和其他诉讼代理人有权调查收集证据，可以查阅本案有关材料。查阅本案有关材料的范围和办法由最高人民法院规定。","number":"第六十四条","crime":"","catalogId":136,"law":"中华人民共和国民事诉讼法"}]},{"id":"text-38","content":"\n","type":0,"relations":[]},{"id":"fact-22","content":"11、交通事故责任认定书，证明苗某甲负事故的全部责任，段某乙不负事故责任。","type":1,"relations":[],"count":22,"needs":[{"id":1664,"content":"第一条　从事交通运输人员或者非交通运输人员，违反交通运输管理法规发生重大交通事故，在分清事故责任的基础上，对于构成犯罪的，依照刑法第一百三十三条的规定定罪处罚。","number":"第一条","crime":"","catalogId":222,"law":"最高人民法院关于审理交通肇事刑事案件具体应用法律若干问题的解释"}]},{"id":"text-39","content":"\n12、行政强制措施凭证，证明扣留事故车辆情况。","type":0,"relations":[]},{"id":"text-40","content":"\n13、驾驶人信息查询结果单、驾驶证复印件，证明苗某甲准驾车型D。","type":0,"relations":[]},{"id":"text-41","content":"\n14、购车证明，证明车辆是段某甲的车。","type":0,"relations":[]},{"id":"text-42","content":"\n","type":0,"relations":[]},{"id":"fact-23","content":"15、法医学尸体检验意见书，证明死者面部及肢体损伤，分析为在运动物体外力作用下所致，死者鼻腔内有血性物体溢出，分析死因为颅脑损伤死亡。","type":1,"relations":[],"count":23,"needs":[{"id":1722,"content":"第十四条　投保人允许的驾驶人驾驶机动车致使投保人遭受损害，当事人请求承保交强险的保险公司在责任限额范围内予以赔偿的，人民法院应予支持，但投保人为本车上人员的除外。","number":"第十四条","crime":"","catalogId":227,"law":"最高人民法院关于审理道路交通事故损害赔偿案件适用法律若干问题的解释"}]},{"id":"text-43","content":"\n16、痕迹检验意见书，被检五征牌三轮汽车可形成现场路面车轮印痕。","type":0,"relations":[]},{"id":"text-44","content":"\n17、户籍证明、现实表现，证明被告人基本身份信息及无前科。","type":0,"relations":[]},{"id":"text-45","content":"\n上述证据已经庭审质证，本院予以确认。","type":0,"relations":[]},{"id":"text-46","content":"\n本院认为，被告人苗某甲持准驾车型不符的驾驶证驾驶无牌照五征牌三轮汽车上路行驶，将前方段某乙驾驶的自行车撞倒，造成段某乙死亡的严重后果，事故发生后其驾车逃离现场，且负事故全部责任。被告人段某甲明知自己的车辆无牌照的情况下，仍指使苗某甲违章驾驶其车辆造成重大交通事故，苗某甲、段某甲的行为已构成交通肇事罪。检察机关的指控成立。鉴于被告人苗某甲、段某甲到案后如实供述，当庭自愿认罪；赔偿了被害人方的经济损失，取得了被害人方的谅解。苗某甲在交通肇事逃逸后自动投案，到案后如实供述自己的罪行，其构成自首。综上情节，本院决定对被告人苗某甲、段某甲从轻处罚，宣告缓刑对其所居住的社区亦无重大不良影响。本院决定对其从轻处罚并适用缓刑。根据本案犯罪事实、情节以及对社会危害程度，依照","type":0,"relations":[]},{"id":"law-1","content":"《中华人民共和国刑法》第一百三十三条","type":2,"relations":["fact-1","fact-4","fact-9","fact-13","fact-18"],"article":{"id":724,"content":"第一百三十三条　【交通肇事罪】违反交通运输管理法规，因而发生重大事故，致人重伤、死亡或者使公私财产遭受重大损失的，处三年以下有期徒刑或者拘役；交通运输肇事后逃逸或者有其他特别恶劣情节的，处三年以上七年以下有期徒刑；因逃逸致人死亡的，处七年以上有期徒刑。","number":"第一百三十三条","crime":"交通肇事罪","catalogId":99,"law":"中华人民共和国刑法"}},{"id":"text-47","content":"、","type":0,"relations":[]},{"id":"law-2","content":"第六十七条","type":2,"relations":["fact-6","fact-8","fact-10","fact-11","fact-14","fact-20"],"article":{"id":652,"content":"第六十七条　【自首】犯罪以后自动投案，如实供述自己的罪行的，是自首。对于自首的犯罪分子，可以从轻或者减轻处罚。其中，犯罪较轻的，可以免除处罚。\n被采取强制措施的犯罪嫌疑人、被告人和正在服刑的罪犯，如实供述司法机关还未掌握的本人其他罪行的，以自首论。\n犯罪嫌疑人虽不具有前两款规定的自首情节，但是如实供述自己罪行的，可以从轻处罚；因其如实供述自己罪行，避免特别严重后果发生的，可以减轻处罚。","number":"第六十七条","crime":"自首","catalogId":90,"law":"中华人民共和国刑法"}},{"id":"text-48","content":"、","type":0,"relations":[]},{"id":"law-3","content":"第七十二条","type":2,"relations":["fact-6","fact-12","fact-19"],"article":{"id":657,"content":"第七十二条　【适用条件】对于被判处拘役、三年以下有期徒刑的犯罪分子，同时符合下列条件的，可以宣告缓刑，对其中不满十八周岁的人、怀孕的妇女和已满七十五周岁的人，应当宣告缓刑：\n（一）犯罪情节较轻；\n（二）有悔罪表现；\n（三）没有再犯罪的危险；\n（四）宣告缓刑对所居住社区没有重大不良影响。\n宣告缓刑，可以根据犯罪情况，同时禁止犯罪分子在缓刑考验期限内从事特定活动，进入特定区域、场所，接触特定的人。\n被宣告缓刑的犯罪分子，如果被判处附加刑，附加刑仍须执行。","number":"第七十二条","crime":"适用条件","catalogId":92,"law":"中华人民共和国刑法"}},{"id":"text-49","content":"、","type":0,"relations":[]},{"id":"law-4","content":"第七十三条","type":2,"relations":[],"article":{"id":658,"content":"第七十三条　【考验期限】拘役的缓刑考验期限为原判刑期以上一年以下，但是不能少于二个月。\n有期徒刑的缓刑考验期限为原判刑期以上五年以下，但是不能少于一年。\n缓刑考验期限，从判决确定之日起计算。","number":"第七十三条","crime":"考验期限","catalogId":92,"law":"中华人民共和国刑法"}},{"id":"text-50","content":"、最高人民法院","type":0,"relations":[]},{"id":"law-5","content":"《关于审理交通肇事刑事案件具体应用法律若干问题的解释》第二条","type":2,"relations":["fact-1","fact-4","fact-8","fact-9","fact-13","fact-15","fact-16","fact-17","fact-18"],"article":{"id":1665,"content":"第二条　交通肇事具有下列情形之一的，处三年以下有期徒刑或者拘役：\n（一）死亡一人或者重伤三人以上，负事故全部或者主要责任的；\n（二）死亡三人以上，负事故同等责任的；\n（三）造成公共财产或者他人财产直接损失，负事故全部或者主要责任，无能力赔偿数额在三十万元以上的。\n交通肇事致一人以上重伤，负事故全部或者主要责任，并具有下列情形之一的，以交通肇事罪定罪处罚：\n（一）酒后、吸食毒品后驾驶机动车辆的；\n（二）无驾驶资格驾驶机动车辆的；\n（三）明知是安全装置不全或者安全机件失灵的机动车辆而驾驶的；\n（四）明知是无牌证或者已报废的机动车辆而驾驶的；\n（五）严重超载驾驶的；\n（六）为逃避法律追究逃离事故现场的。","number":"第二条","crime":"","catalogId":222,"law":"最高人民法院关于审理交通肇事刑事案件具体应用法律若干问题的解释"}},{"id":"text-51","content":"、","type":0,"relations":[]},{"id":"law-6","content":"第七条","type":2,"relations":[],"article":{"id":1670,"content":"第七条　单位主管人员、机动车辆所有人或者机动车辆承包人指使、强令他人违章驾驶造成重大交通事故，具有本解释第二条规定情形之一的，以交通肇事罪定罪处罚。","number":"第七条","crime":"","catalogId":222,"law":"最高人民法院关于审理交通肇事刑事案件具体应用法律若干问题的解释"}},{"id":"text-52","content":"之规定，判决如下：\n","type":0,"relations":[]},{"id":"conclusion-1","content":"被告人苗某甲犯交通肇事罪，判处有期徒刑三年，缓刑三年。\n（缓刑考验期限从判决确定之日起计算）\n被告人段某甲犯交通肇事罪，判处有期徒刑二年，缓刑二年。\n（缓刑考验期限从判决确定之日起计算）","type":3,"relations":["law-1","law-5","law-2","law-3"],"count":1},{"id":"text-53","content":"\n如不服本判决，可在接到判决书的第二日起十日内，通过本院或者直接向邯郸市中级人民法院提出上诉。书面上诉的，应当提交上诉状正本一份，副本三份。","type":0,"relations":[]}]},
        exportForm:{
            courtName: '',
            name: '',
            number: '',
            data: '',
            member: [
                {
                    status: '审判长',
                    name: '',
                }
            ]
        },
        exportFormVisible: false,
        exportLoading: false,
        contentEditable: true,
        graph: null,
        graphData:{
            nodes:[],
            edges:[],
        },
        exportTypes: ['pdf','word'],
    },


    // check({commit}, data) {
    check(data) {
        //版本1
        // var promise = new Promise((resolve, reject) => {
        //     api.checkAPI(data).then(response=>{
        //         if (response.data.success){
        //             resolve(response.data.content);
        //         }
        //         else {
        //             reject(response.data.message);
        //         }
        //     })
        // })
        //
        // return promise

        //版本2
        api.checkAPI(data, {
            success(res) {
                var resultJ = res
                this.result = resultJ
                if (resultJ.success) {
                    wx.hideLoading();
                    wx.showModal({
                        content: this.result.content[0]["content"],
                        showCancel: false,
                        confirmText: '明白了'
                    })
                } else {
                        wx.hideLoading();
                        wx.showModal({
                            content: resultJ.message,
                            showCancel: false,
                            confirmText: '明白了'
                        })
                }
                callback.success(resultJ)
                this.result = res;
                this.data.DocContent = '';
                this.graphData = {
                    nodes: [],
                    edges: []
                }
                for (let text of this.result.texts){
                    if(text.type == 0){
                        var span = document.createTextNode(text.content);
                    }
                    else{
                        var span = document.createTextNode('span');

                    }
                }
            }
        })
    },

    onCheck: function (e){

        var text = this.data.DocContent;
        // var text = 'data'
        this.check(text).then(res =>{
            this.result = res;
            this.data.DocContent = '';
            this.graphData = {
                nodes: [],
                edges: []
            }



            for (let text of this.result.texts){
                if(text.type == 0){
                    var span = document.createTextNode(text.content);
                }
                else{
                    var span = document.createElement('span');
                    span.id =  text.id;
                    span.className = `text${text.type}`;
                    span.style.border = `${COLOR_TBL[text.type]} solid 1px`;
                    span.style.borderRadius = '3px';
                    span.style.backgroundColor = `${COLOR_TBL[text.type]}20`;
                    span.innerText = text.content;

                    var that = this;
                    span.onmouseover = function(){
                        this.style.boxShadow = `0 0 8px ${COLOR_TBL[text.type]}`;
                        this.style.backgroundColor = `${COLOR_TBL[text.type]}40`;
                        that.graph.getNodes().forEach(function (node) {
                            if (node.getID() == text.id) {
                                node.setState('highlight', true, node);
                            }
                        });
                        that.graph.paint();
                    }
                    span.onmouseout = function () {
                        this.style.boxShadow = null;
                        this.style.backgroundColor = `${COLOR_TBL[text.type]}20`;
                        that.graph.getNodes().forEach(function (node) {
                            if (node.getID() == text.id) {
                                node.setState('highlight', false, node);
                            }
                        });
                        that.graph.paint();
                    }
                    var node = {
                        anchorPoints: [
                            [1, 0.5],
                            [1, 0.5],
                        ],
                        id: text.id,
                        textType: text.type,
                        warning: 0,
                    };
                    if (text.type == 1) {
                        node['title'] = `事实${text.count}`;
                        node['value'] = mergeText(text.content, 12, 410);
                        for (let relation of text.relations) {
                            this.graphData.edges.push({
                                source: text.id,
                                target: relation,
                                style: {
                                    lineWidth: 1,
                                    stroke: COLOR_TBL[1],
                                }
                            })
                        }
                    } else if (text.type == 2) {
                        node['title'] = `《${text.article.law}》${text.article.number}`;
                        node['value'] = mergeText(text.article.content, 12, 410);
                        if (text.relations.length == 0) {
                            node['warning'] = 1;
                        }
                    } else if (text.type == 3) {
                        node['title'] = `结论${text.count}`;
                        node['value'] = mergeText(text.content, 12, 410);
                        for (let relation of text.relations) {
                            this.graphData.edges.push({
                                source: relation,
                                target: text.id,
                                style: {
                                    lineWidth: 1,
                                    stroke: COLOR_TBL[2],
                                }
                            })
                        }
                    }
                    this.graphData.nodes.push(node);

                }
                document.getElementById('textInput').appendChild(span);
            }
            this.initG6();
        }).catch(err =>{
            wx.showToast({
                title: err,
                icon: "error",
                duration: 2000

            })
        })
    },

    addMember() {
        this.exportForm.members.push({
            status: '',
            name: ''
        })
    },

    bindTextAreaBlur:function (e){
        this.setData({
            DocContent: e.detail.value
        })
    },
    delMember(index) {
        this.exportForm.members.splice(index, 1)
    },


        onExportPdf(){
            this.exportLoading = true;
            this.exportPdf({
                ...this.exportForm,
                content: document.getElementById('textInput').innerText,
            }).then(res => {
                this.downloadDoc(res);
                this.exportForm = {
                    courtName: '',
                    name: '',
                    number: '',
                    date: '',
                    members: [
                        {
                            status: '审判长',
                            name: ''
                        },
                    ]
                }
                this.exportFormVisible = false;
            }).catch(err => {
                this.$message.error(err);
            }).finally(() => {
                this.exportLoading = false;
            })
        },
        onExportWord() {
            this.exportLoading = true;
            this.exportWord({
                ...this.exportForm,
                content: document.getElementById('textInput').innerText,
            }).then(res => {
                this.downloadDoc(res);
                this.exportForm = {
                    courtName: '',
                    name: '',
                    number: '',
                    date: '',
                    members: [
                        {
                            status: '审判长',
                            name: ''
                        },
                    ]
                }
                this.exportFormVisible = false;
            }).catch(err => {
                this.$message.error(err);
            }).finally(() => {
                this.exportLoading = false;
            })
        },
        initG6() {
            if (this.graph) {
                this.graph.destroy();
            }

            G6.registerNode(
                'card-node',
                {
                    drawShape: function drawShape(cfg, group) {
                        const color = COLOR_TBL[cfg.textType];
                        const r = 5;
                        const shape = group.addShape('rect', {
                            attrs: {
                                x: 0,
                                y: 0,
                                width: 420,
                                height: 20 + (cfg.value.length + cfg.warning) * 20,
                                stroke: color,
                                radius: r,
                            },
                            name: 'main-box',
                        });

                        group.addShape('rect', {
                            attrs: {
                                x: 0,
                                y: 0,
                                width: 420,
                                height: 20,
                                fill: color,
                                radius: [r, r, 0, 0],
                            },
                            name: 'title-box',
                        });

                        // title text
                        group.addShape('text', {
                            attrs: {
                                textBaseline: 'top',
                                y: 5,
                                x: 5,
                                lineHeight: 20,
                                text: cfg.title,
                                fill: '#fff',
                            },
                            name: 'title',
                        });

                        // value text
                        group.addShape('text', {
                            attrs: {
                                textBaseline: 'top',
                                y: 25,
                                x: 5,
                                lineHeight: 20,
                                text: cfg.value.join('\n'),
                                fill: '#000000',
                                fontSize: 12,
                            },
                            name: 'content',
                        });

                        if (cfg.warning == 1) {
                            group.addShape('text', {
                                attrs: {
                                    textBaseline: 'top',
                                    y: cfg.value.length * 20 + 25,
                                    x: 5,
                                    lineHeight: 20,
                                    text: '警告：缺少事实依据',
                                    fill: '#F56C6C',
                                    fontSize: 12,
                                },
                                name: 'warning',
                            });
                        }

                        return shape;
                    },
                    setState: function setState(name, value, item) {
                        const group = item.getContainer();
                        const children = group.get('children');

                        if (name === 'highlight') {
                            if (value) {
                                children.forEach((shape) => {
                                    if (shape.cfg.name === 'main-box') {
                                        shape.attr('lineWidth', 3);
                                        shape.attr('shadowColor', COLOR_TBL[item.getModel().textType]);
                                        shape.attr('shadowBlur', 5);
                                    }
                                });
                            } else {
                                children.forEach((shape) => {
                                    if (shape.cfg.name === 'main-box') {
                                        shape.attr('lineWidth', 1);
                                        shape.attr('shadowColor', 'transparent');
                                        shape.attr('shadowBlur', 0);
                                    }
                                });
                            }
                        }
                    },
                },
                'single-node',
            );

            const container = document.getElementById('container');
            const width = container.scrollWidth;
            const height = container.scrollHeight;

            this.graph = new G6.Graph({
                container: 'container',
                width,
                height,
                fitCenter: true,
                defaultNode: {
                    type: 'card-node',
                },
                fitView: true,
            });

            const nodeMap = new Map();
            var curY = 10;

            this.graphData.nodes.forEach(function (node, i) {
                node.x = 10;
                node.y = curY;
                curY = curY + 10 + 20 + (node.value.length + node.warning) * 20;
                nodeMap.set(node.id, node);
            });
            this.graphData.edges.forEach((edge) => {
                edge.type = 'arc';
                const source = nodeMap.get(edge.source);
                edge.curveOffset = 20;
                edge.color = source.color;
            });

            this.graph.on('node:mouseover', function (e) {
                document.getElementById(e.item.getModel().id).onmouseover();
                e.item.setState('highlight', true, e.item);
            });
            this.graph.on('node:mouseout', function (e) {
                document.getElementById(e.item.getModel().id).onmouseout();
                e.item.setState('highlight', false, e.item);
            });

            this.graph.data(this.graphData);
            this.graph.render();

            if (typeof window !== 'undefined')
                window.onresize = () => {
                    if (!this.graph || this.graph.get('destroyed')) return;
                    if (!container || !container.scrollWidth || !container.scrollHeight) return;
                    this.graph.changeSize(container.scrollWidth, container.scrollHeight);
                };
        },
        handleCommand(command) {
            eval(`this.onExport${command.charAt(0).toUpperCase() + command.slice(1)}()`);
        },
        downloadDoc(blob) {
            var fileName = this.exportForm.courtName + this.exportForm.name;
            if (window.navigator.msSaveOrOpenBlob) {  // IE浏览器下
                navigator.msSaveBlob(blob, fileName);
            } else {
                var link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = fileName;
                link.click();
                window.URL.revokeObjectURL(link.href);
            }
        }
    // },
});

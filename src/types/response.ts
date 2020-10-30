export interface WxSignData {
    appId: string;
    timestamp: string;
    noncestr: string;
    signature: string;
}

export interface UserInfoData {
    phone: string;
    score: number;
    userType: number;
    nickName: string;
    userNo: number;
    status: number;
    openId: string;
    wxOpenid: string;
    verifyTicket: string;
    getuiId: string;
    ticket: string;
    userReal: string;
    tradeCode: number;
    bankCard: string;
    bankId: string;
    createTime: string;
    idCard: string;
    name: string;
    remarks: string;
    openInstituteFlag: string;
    idType: number;
    gesturePwd: string;
    app: number;
    faceUrl: string;
}
export interface TdData {
    upDown: number;
    upDownRate: number;
    latestPrice: number;
    contractName: string;
    contractId: string;
}
export interface TdDataResponse {
    [key: string]: Array<TdData>;
}
export interface UserPropertyData {
    totalAsset: number;
    capitalAvailable: number;
    todayRemainder: number;
    maxBail: number;
    profitAbility: number;
    freezeMoney: number;
    capital: number; //总金额
    bail: number;
}
export interface CalendarContentData {
    title: string;
    publishDt: string;
    economicDate: string;
    country: string;
    importance: number;
    effect: string;
    previous: string;
    forecast: string;
    reality: string;
    economicCalId: number;
}
export interface TeacherData {
    userNo: number;
    faceUrl: string;
    nickName: string;
    position: string;
    isAuth: number;
    tradeYears: number;
    profitAbility: number;
    analystStrategy: string;
    lastOperDate: number;
    userLabel: number;
    holdRation: number;
    brief: string;
    maxProfit: number;
    maxLoss: string;
    maxBail: string;
    maxBack: number;
    lastContent: string;
    isTop: number;
    correctRation: number;
    style: string;
    type: number;
    isFollow: boolean;
}
export interface TradeData {
    type: number;
    direction: number;
    price: number;
    num: number;
    profit: number;
    createTime: number;
    id: number;
    img: string;
    strategy: string;
    nickName: string;
    userNo: number;
    tradeYears: number;
    profitAbility: number;
    isReal: number;
    position: string;
}
export interface CommentData {
    id: number;
    prodCode: { prodCode: string };
    price: number;
    suggest: number;
    content: string;
    cdate: number;
    likeNum: number;
}

export interface YieldrateData {
    todayAbility: number;
    consumeDate: string;
}
export interface TodayEntrustData {
    id: number;
    exchType: number; //品种
    direction: number; //交易方向
    entrustDate: Date; //委托时间
    entrustNum: number; //委托数量
    entrustPrice: number; //委托价格
    state: number; //成交状态
}
export interface PositionData {
    exchType: number; //品种
    direction: number; //交易方向
    floatProfit: number; //浮动盈亏
    num: number; //持仓量
    avgPrice: number; //持仓均价
    frozenUum: number; //冻结数量
    usedBail: number;
}
export interface TodayDealData {
    dealMoney: number;
    exchType: number; //品种
    direction: number; //交易方向
    num: number; //持仓量
    dealDate: Date;
    dealPrice: number;
    fee: number;
}

export interface StopLoseData {
    id: number;
    type: number;
    quantity: number;
    direction: number;
    stopProfitPrice: number;
    stopLosePrice: number;
}

export interface UserConsumeData {
    // 备注，昨日总资金 + 盘中资金变动 + 日终资金变动 = 用户清算过后的资产合计 +阈值
    lastTotalAssets: number; //昨日总资金
    // inTradeTotal: number; //盘中资金变动
    total: number; //日终资金变动
    thresholdValue: number; //阈值
    totalAssets: number; //用户清算过后的资产合计
    floatBail: number; //日终保证金变动
    floatProfit: number; //日终持仓盈亏
    delayFee: number; //日终递延费
    money: number; //可用资金
}

export interface HistoryDealData {
    dealDate: number;
    direction: number;
    exchType: string;
    num: number;
    dealPrice: number;
    dealMoney: string; //成交额
    fee: number;
}

export interface HistoryEntrustData {
    entrustDate: Date;
    direction: number;
    exchType: string;
    state: number; //0 ：为未成交，1 ：完成成交，2 ：撤单，3：过期，4：强平
    entrustNum: number;
    entrustPrice: number;
}
export interface RealtimePriceData {
    [key: string]: number;
    latestPrice: number;
    upDown: number;
    upDownRate: number;
    highLimitPrice: number;
    lowerLimitPrice: number;
    bidPrice1: number;
    bidPrice2: number;
    bidPrice3: number;
    bidPrice4: number;
    bidPrice5: number;
    bidVolume1: number;
    bidVolume2: number;
    bidVolume3: number;
    bidVolume4: number;
    bidVolume5: number;
    askingPrice1: number;
    askingPrice2: number;
    askingPrice3: number;
    askingPrice4: number;
    askingPrice5: number;
    askingVolume1: number;
    askingVolume2: number;
    askingVolume3: number;
    askingVolume4: number;
    askingVolume5: number;
}
export interface NoticeData {
    noticeTitle: string;
    noticeContent: string;
    cdate: number;
    id: number;
}
export interface ResData {
    ticket: string;
    code: number;
    msg: string;
}

export interface CoopListData {
    thumb: string;
    link: string;
}
export interface BooleanStatusData {
    status: boolean;
}
export interface RetrieveProductionData {
    id: string;
    title: string;
    num: number;
    score: number;
}

export interface BannerPageData {
    content: string;
    img: string;
    link: string;
    title: string;
}
export interface BannerPageDataResponse {
    [key: string]: Array<BannerPageData>;
}

export interface AnalysTrendsData {
    img: string;
    nickName: string;
    createTime: number;
    userNo: number;
    position: string;
    style: string;
    type: number;
    direction: number;
    price: number;
    num: number;
    profit: number;
    strategy: string;
    openAvgPrice: number;
    profitAbility: number;
    userLabel: number;
    tradeYears: number;
    isReal: number;
}

export interface KuaiXunData {
    datetime: string;
    content: string;
    fontColor: number;
    quickMessageId: number;
    outId: string;
}

export interface TipsPageData {
    label: number;
    title: string;
    link: string;
    author: string;
    content: string;
    createTime: number;
    type: number;
    id: number;
    brief: string;
}

export interface CustomQuoteData {
    highestPrice: number;
    latestPrice: string;
    lowestPrice: number;
    quotationTime: string;
    upDown: string;
    openingPrice: string;
    quotationDate: string;
    createTime: string;
    upDownRate: number;
    contractId: string;
    closingPrice: number;
    contractName: string;
}
export interface CustomQuoteDataResponse {
    [key: string]: Array<CustomQuoteData>;
}
export interface VersionData {
    extra: string; //apk url
    // iosV: string;
    decri: string; //更新说明
    iosUrl: string;
    value: string;
    sort: number; //为1时强制更新
}
export interface AnalystWindVaneData {
    longPerc: number;
    shortPerc: number;
    systemParaPerc: number;
    shortTotal: number;
    longTotal: number;
    totals: number;
}
export interface AnalystBriefData {
    accururacyRate: number;
    analystStrategy: string;
    bankId: number;
    brief: string;
    city: string;
    closePositionCount: number;
    faceUrl: string;
    isAuth: number;
    isReal: number;
    isTop: number;
    isWeb: number;
    lastContent: string;
    lastOperDate: string;
    nickName: string;
    position: string;
    profitAbility: number;
    profitCount: number;
    province: string;
    remarks: string;
    style: string;
    tradeQuotes: string;
    tradeYears: number;
    userLabel: string;
    userNo: number;
    userType: number;
}
export interface AnalysCommentCountData {
    date: number;
}
export interface ForceAnalystNewOperData {
    id: number;
    userNo: number;
    position: string;
    nickName: string;
    style: string;
    createTime: string;
    type: number;
    direction: number;
    num: number;
    profit: number;
    strategy: string;
    img: string;
    openAvgPrice: number;
    price: number;
    profitAbility: number;
    userLabel: number;
    tradeYears: number;
    isReal: number;
}
export interface VerifyInfo {
    userNo: number;
    userType: number;
    clientId: string;
    realName: string;
    bankId: number;
    bankSubId: number;
    bankBranchId: number;
    bankSecondId: number;
    status: number;
    createTime: string;
    remarks: string;
}
export interface RealUserBindInfo {
    userNo: number;
    tradeCode: number;
    bankCard: string;
    bankId: string;
    status: number;
    createTime: string;
    idCard: string;
    name: string;
    remarks: string;
    openInstituteFlag: string;
    idType: number;
    gesturePwd: string;
    app: number;
}
export interface UserAddr {
    id: number;
    userNo: number;
    addr: string;
    addrDetail: string;
    receiveMan: string;
    receivePhone: string;
    isDefault: number;
    createTime: string;
}
export interface UserPriceNotify {
    createTime: string;
    currentPrice: number;
    downPrice: number;
    expireDays: number;
    id: number;
    noticeTime: string;
    state: number;
    type: string;
    typeName: string;
    upPrice: number;
    userNo: number;
}

export interface ScoreList {
    index: number;
    size: number;
    total: number;
    recordNum: number;
    totalPage: number;
    record: any[];
    createTime: string;
    id: string;
    nickName: string;
    reUserNo: string;
    remarks: string;
    score: number;
    status: number;
    ticket: string;
    type: number;
    typeName: number;
}
export interface UserMsg {
    index: number;
    record: any[];
    id: number;
    isRead: string;
    msgContent: string;
    msgSubclassKind: string;
    msgTitle: string;
    userNo: number;
    size: number;
    total: number;
    recordNum: number;
    totalPage: number;
}
export interface PageList {
    index: number;
    size: number;
    total: number;
    totalPage: number;
    recordNum: number;
    record: CalendarContentData[];
}

export interface LoginData {
    ticket: string;
    phone: string;
    getuiId: string;
    pwd?: number;
    userReal?: RealData;
    // phone: string;
    score: number;
    userType: number;
    nickName: string;
    userNo: number;
    status: number;
    openId: string;
    wxOpenid: string;
    verifyTicket: string;
    // getuiId: string;
    // ticket: string;
    // userReal: string;
    tradeCode: number;
    bankCard: string;
    bankId: string;
    createTime: string;
    idCard: string;
    name: string;
    remarks: string;
    openInstituteFlag: string;
    idType: number;
    gesturePwd: string;
    app: number;
    faceUrl: string;
}

export interface RealData {
    userNo: number;
    tradeCode: number;
    bankCard: string;
    bankId: string;
    status: number;
    createTime: string;
    idCard: string;
    name: string;
    remarks: string;
    openInstituteFlag: string;
    idType: number;
    gesturePwd: string;
    app: number;
    isReal: string;
}

export interface NewsPageData {
    label: number;
    title: string;
    author: string;
    createTime: number;
    link: string | null;
    content: string;
    type: number;
    id: number;
    brief: string;
    remarks: string;
}

export interface PageRecordData<T> {
    record: T[];
    index: number;
    recordNum: number;
    size: number;
    total: number;
    totalPage: number;
}

export enum FilterKey {
    enum1 = 'effect',
    enum2 = 'country',
    enum3 = 'importance',
}
export interface Filter {
    // [key: string]: string | (number | string);
    effect?: string;
    country?: string;
    importance?: number | string;
}

export interface ScreenData {
    id: number;
    screenName: string;
    screenDesrc: string;
    screenValue: number;
    screenUserType: string;
    orderBy: number;
    spr: SprData[];
}
export interface SprData {
    isEnable: string;
    prodCode: string;
    prodType: number;
}

export interface PlanData {
    avgPrice: number;
    capital: number;
    createTime: string;
    endTime: string;
    exclutedNum: number;
    id: number;
    lossNum: number;
    maxJoinNum: number;
    planSeq: number;
    position: number;
    profit: number;
    profitAbility: number;
    state: number;
    type: number;
    userNo: number;
    planStateList: PlanStateListData;
}

export interface PlanStateData {
    command: number;
    createTime: string;
    dealPrice: number;
    direction: number;
    downPrice: number;
    id: number;
    num: number;
    planSeq: number;
    planSeqState: number;
    profit: number;
    state: number;
    type: number;
    upPrice: number;
    userNo: number;
}
export interface TipsData {
    show: boolean;
    title: string;
    showButton: boolean;
    text: string;
    tips: string;
}

export interface ScoreData {
    score: number;
    uscore: number;
    rate: string;
}

export interface ScoreJobData {
    create_time: string;
    id: number;
    status: number;
    title: string;
    type: number;
    value: number;
    jump: string | null;
}

export interface RealUserBalanceData {
    curAccountBalance: number; //活动账户余额
    balance: number; //余额
    transactionBalance: number; //交易可用余额
    freezeBalance: number; //冻结总额
    extractableBalance: number; //可提取资金
    floatProfit: number; //浮动盈亏
    owingAmount: number; //欠费金额
    todayWithdrawal: number; //当日出金
    todayIncomings: number; //当日入金
    positionMargin: number; //持仓保证金
}
export interface TodayDealDate {
    amount: number;
    basicMarginRate: number;
    businessDirection: number;
    clientId: number;
    contractId: string;
    exOrderNo: string;
    icbcCloseFlag: number;
    matchDate: string;
    matchHand: number;
    matchNo: string;
    matchPrice: number;
    matchQuantity: number;
    matchTime: string;
    orderNo: number;
    orderType: number;
    positionFlag: number;
    tradingType: number;
    transactionFee: number;
}
export interface RealUserPositionDetail {
    contractId: string;
    longPosition: number; //多头持仓量
    shortPosition: number; //空头持仓量
    // lastLongPosition: number;
    // lastShortPosition: number;
    // todayLongPosition: number;
    // todayShortPosition: number;
    // longOffsetPosition: number;
    // shortOffsetPosition: number;
    longTurnOver: number; //多头持仓金额
    shortTurnOver: number; //空头持仓金额
    // deliveryApplyLongFrozen: number;
    // deliveryApplyShortFrozen: number;
    // deliveryApplyLong: number;
    // deliveryApplyShort: number;
    // longLimitFrozen: number;
    // shortLimitFrozen: number;
    offsetLongFrozen: number; //多头平仓冻结
    offsetShortFrozen: number; //空头平仓冻结
    longPositionAverage: number; //多头今日持仓均价
    shortPositionAverage: number; //空头今日持仓均价
    longPositionMargin: number; //多头持仓保证金金额
    shortPositionMargin: number; //空头持仓保证金金额
    longPositionLimit: number; //多头持仓限额
    shortPositionLimit: number; //空头持仓限额
    longFloatProfit: number; //多头浮动盈亏
    shortFloatProfit: number; //空头浮动盈亏
    longUnliquidatedProfit: number; //多头待清算盈亏
    shortUnliquidatedProfit: number; //空头待清算盈亏
}
export interface RealUserPositionData {
    actualRow: number;
    positionDetail: RealUserPositionDetail[];
}

export interface RealUserEntrustDetail {
    businessDirection: number;
    // channelSign: number;
    clientId: number;
    contractId: string;
    declareTime: string;
    entrustNumber: number;
    // entrustWeight: number;
    exOrderNo: string;
    // marketId: number;
    matchPrice: number;
    orderNo: number;
    // orderType: number;
    positionFlag: number;
    // remnantNumber: number;
    // remnantWeight: number;
    revocationTime: string;
    status: number;
    tradeDate: string;
    // tradingType: number;
}

export interface RealUserEntrustData {
    actualRow: number;
    delegationDetail: RealUserEntrustDetail[];
}
export interface TransFeeData {
    tradeDate: string;
    exchangeTradingFee: number;
    bankTradingFee: number;
    deferFee: number;
    clientId: number;
}
export interface DailyOrderData {
    currentBalance: number; // 当期余额
    lastTradingBalance: number; // 上交易日余额
    deferFee: number; // 递延费
    icbcTradeFee: number; // 交易手续费(银行）
    exTradeFee: number; // 交易手续费(交易所）
    totalAmount: number; // 费用合计
    todayProfit: number; // 当日盈亏
    currentIncomings: number; // 当期入金
    currentWithdrawal: number; // 当期出金
    expirationFee: number; // 超期费
    tradeDate: string; // 金交所交易日期
    currentPositionMargin: number; // 当日持仓基础保证金
}
export interface TransDetailData {
    transferType: number;
    clientId: number;
    icbcSerialNo: string;
    tradeDate: string;
    tradeTime: string;
    depositFlag: number;
    amount: number;
    businessType: number;
}

export interface MarginRatioDetail {
    contractId: string;
    icbcLongMarginRate: number;
    exLongMarginRate: number;
    icbcShortMarginRate: number;
    exShortMarginRate: number;
}

export interface MarginRatioData {
    rate: MarginRatioDetail[];
    tradeDate: string;
}

export interface ThisPeriodData {
    actGuessRiseFailRecord: ActGuessRiseFailRecordData;
    actGuessRiseFail: ActGuessRiseFailData;
}
export interface ActGuessRiseFailData {
    createTime: string;
    endTime: string;
    failNum: number;
    guessDate: string;
    id: number;
    previousPrice: number;
    riseNum: number;
    scoreNum: number;
    startTime: string;
    state: number;
    thisPrice: number | null;
}
export interface ActGuessRiseFailRecordData {
    createTime: string;
    endTime: string;
    failNum: number;
    guessDate: string;
    id: number;
    previousPrice: number;
    riseNum: number;
    scoreNum: number;
    startTime: string;
    state: number;
    thisPrice: number | null;
}
export interface UserHisPeriodData {
    id: number;
    seqId: number;
    userNo: number;
    award: number;
    answer: number;
    thisPrice: number;
    joinTime: string;
    settleTime: string;
    state: number;
    isSettle: number;
}
export interface EntrustOrderData {
    returnCode: number;
    returnMsg: string;
    orderStatus: number;
}
export interface NewsTDScholData {
    author: string;
    brief: string;
    content: string;
    createTime: string;
    id: number;
    imgs: string;
    label: number;
    link: string;
    remarks: string;
    sort: number;
    status: number;
    thumb: string;
    title: string;
    type: number;
    learn_status: number;
}
export interface TDLearnStatusData {
    id: number;
    learn_status: number;
}

export interface AnalysTrendsPageData {
    id: number;
    userNo: number;
    position: string;
    nickName: string;
    style: string;
    createTime: string;
    type: number;
    direction: number;
    price: number;
    num: number;
    profit: number;
    strategy: string;
    img: string;
    openAvgPrice: number | null;
    profitAbility: number;
    userLabel: number;
    tradeYears: number;
    isReal: number;
    status: number;
    prodCode: string;
    likeNum: number;
    suggest: string;
}

export interface PushSettingData {
    bigReport: number;
    hotActivity: number;
    main: number;
    investPlan: number;
    notBother: number;
    priceNotify: number;
    teacherStrategy: number;
}

export interface SgeSettlePriceInfoData {
    createDate: string;
    auProdCode: string;
    agProdCode: string;
    mauProdCode: string;
    auCalculPrice: number;
    agCalculPrice: number;
    mauCalculPrice: number;
    auDelayDirection: number;
    agDelayDirection: number;
    mauDelayDirection: number;
}

export interface ExchangeDetailData {
    productName: string;
    num: number;
    status: number;
}

export interface ProductExchangeData {
    title: string;
    score: number;
    remarks: string;
    images: string;
    detail: string;
}

export interface ProductPageData {
    id: string;
    title: string;
    thumb: string;
    score: number;
}

export interface SignListData {
    todaySign: number;
    signDays: number;
    signSetting: string;
}

export interface PlanPageData {
    open: boolean;
    page: {
        record: PlanData[];
        total: number;
        totalPage: number;
    };
}

export interface PlanStateListData {
    planSeqState: number;
    state: number;
    type: number;
    dealPrice: number;
    downPrice: number;
    upPrice: number;
    direction: number;
    profit: number;
    num: number;
}

export interface BindingMsgVerifyData {
    returnCode: number;
    returnMsg: string;
    verificationResult: number;
    last4Digits: string;
}

export interface CapitalTransData {
    returnCode: number;
}

export interface MarketInfoData {
    orderBy: number;
    marketName: string;
    marketType: string;
}

export interface MarketProdCodeData {
    prodCode: string;
    prodName: string;
}

export interface LiveData {
    id: number;
    title: string;
    content: string;
    image: string;
    link: string;
    userNo: number;
    author: string;
    startTime: string;
    chatroomId: string;
    sort: number;
    status: number; // 状态-1下架，0：正
    createTime: string;
    label: string; // 分类：基本面，技术分析，大v专场，入门课程
    limits: number; // 观看权限0：注册黄金帮 1：手机号验证 2：密码 3：无限制
    type: number; // 直播类型: 0直播，1录播
}

export interface CooperateData {
    create_time: string;
    id: number;
    link: string;
    name: string;
    status: string;
    thumb: string;
}

export interface EconomicCalendarParams {
    pageNo: number;
    pageSize: number;
    economicDate?: string;
}

export interface PageParams {
    pageNo?: number;
    pageSize?: number;
}

export interface AnalystListParams {
    ticket: string | null;
    index: number;
    size: number;
    nickName?: string;
    lastOperDate?: number;
    profitAbility?: number;
    userLabel?: number;
    isReal?: number;
    style?: string;
}

export interface AnalystDetailParams {
    ticket?: string;
    analystNo: number;
}

export interface AnalystOperParams {
    ticket: string | null;
    index: number;
    size: number;
    nickname?: string;
    userNo?: number;
    orderNo?: number;
}

export interface AnalysCommentPageParams {
    index: number;
    size: number;
    userNo: number;
    isReal: number;
}

export interface StopLoseParams {
    ticket: string;
    type: number;
    num: number;
    direction: number;
    effDays: number;
    stopLosePrice?: string;
    stopProfitPrice?: string;
}

export interface EntrustOrderParams {
    ticket: string;
    type: number;
    direction: number; //方向；0-> 开买；1->开卖；2->平买；3->平卖
    num: number;
    entrustPrice: string; //委托价格
    followId?: number; //跟单的单子id
}
export interface RealPositionParams {
    ticket: string | null;
    contractId: string;
    queryFlag: number;
}

export interface QueryHistoryParams {
    ticket: string;
    index: number;
    size: number;
    startTime?: string;
    endTime?: string;
}

export interface TicketOnly {
    ticket: string | null;
}

export interface BindingMsgVerifyParams {
    ticket: string | null;
    client_id: string;
    actionMark: number;
    idType: number;
    idNumber: string;
    verificationCode: number;
}

export interface TransFeeParams {
    ticket: string | null;
    beginDate: string; //yyyy-mm-dd
    endDate: string; //yyyy-mm-dd
    pagingDate: string;
}

export interface DailyOrderParams {
    ticket: string | null;
    tradeDate: string;
}

export interface UpdateUserNoticeParams {
    ticket: string;
    noticeId: string;
}
export interface TransDetailParams {
    ticket: string | null;
    beginDate: string; //yyyy-mm-dd
    endDate: string; //yyyy-mm-dd
    icbcSerialNo: string; //刚开始传“”，下页查询时，输入当前页的最后一个记录的银行业务流水号
    tradeDate: string; //证件号码
}
export interface CapitalTransParams {
    ticket: string | null;
    amount: number;
    accountingDirection: number;
}
export interface RealEntrustOrderParams {
    ticket: string;
    code: string;
    price: number;
    entrustNumber: number;
    tradeDirection: number;
    positionFlag: number;
}
export interface GetPositionParams {
    ticket: string;
    contractId: string; //输入单个合约代码，则只查该合约,如送“”则全部；下页查询时，输入当前页的最后一个记录的报单号，上一页则第一个报单号
    queryFlag: number; //查询1，上一页2，下一页传3
}

export interface EntrustRecordParams {
    ticket: string | null;
    code: string;
    orderNo: number; //本地报单，传0
    beginDate: string;
    endDate: string;
    queryRange: number; //查询范围0全部，1-只查询报单成功，2-只查可撤单
    pagingOrderNo: string; //上页时，之前页的第一个记录的orderNo,下页查询时，输入当前页的最后一个记录的orderNo
    tradeDate: string; //首次查询送end_date,上页时，之前页的第一个记录的trade_date，下页查询输入当前页的最后一个记录的trade_date
    declareTime: string; //首次查询送23.59.59；上页时，之前页的第一个记录的declare_time，下页查询时，输入当前页的最后一个记录的declare_time
}

export interface RevokeEntrustParams {
    ticket: string;
    orderNo: number; //工行本地报单号
}
export interface UpdateGesturePwdParams {
    ticket: string | null;
    gesturePwd: string;
}
export interface TodayDealParams {
    ticket: string | null;
    orderNo: number;
    pagingOrderNo: number;
    matchNo: string;
    beginDate: string;
    endDate: string;
}
export interface UserAddrParams {
    ticket: string | null;
    isDefault: number;
}
export interface InsertAddrParams {
    ticket: string | null;
    addr: string;
    addrDetail: string;
    receiveMan: string;
    receivePhone: string;
    isDefault: number;
}
export interface UpdateUserAddrParams {
    ticket: string | null;
    id: number;
    addr: string;
    addrDetail: string;
    receiveMan: string;
    receivePhone: string;
    isDefault: number;
}
export interface PriceNotifyParams {
    ticket: string | null;
    upPrice?: number;
    state: number; //1：高价，0：低价 如果当前价大于用户报价，则为0，否则为1
    type: string;
    expireDays?: number;
}
export interface RunningPlanStateParams {
    ticket: string | null;
    planSeq: number;
}
export interface GetUserPriceNotifyParams {
    ticket: string | null;
    state: number;
    index: number;
    size: number;
}
export interface ChangeUserPriceNotifyParams {
    ticket: string | null;
    state: number; //1：删除新建的；2：删除过期的；3：删除暂定的，5：删除已提醒的；
    id?: number | null; //当sate 为5的时候不用传，其他时候必传
}
export interface StartPlanParams {
    ticket: string | null;
    type: number; //开启的品种0：ag；1：au：2：mau
    capacity: string; //资金量
}
export interface ProductExchangeParams {
    id: string;
    addressId: number;
    num: number;
    ticket: string | null;
}
export interface ProductPageParams {
    pageNo?: number;
    pageSize?: number;
    sort?: string;
    title?: string;
}
export interface ScoreListParams {
    ticket: string | null;
    type?: number;
    status?: number;
    index: number;
    size: number;
}
export interface VerifyVIPParams {
    ticket: string;
    clientId?: string;
    realName: string;
}
export interface UserMsgParams {
    ticket: string | null;
    pageNo?: number;
    pageSize?: number;
}
export interface NewsPageParams {
    pageNo?: number;
    pageSize?: number;
    type?: number;
    title?: string;
}
export interface AddOrUpdateUserMarketParams {
    ticket: string;
    code: string;
    sort?: number;
}
export interface EconomicsParams {
    pageNo?: number;
    pageSize?: number;
    economicDate?: string;
}
export interface TipsPageParams {
    pageNo?: number;
    pageSize?: number;
    type: number; //0臻金百言，2黄金日报，1名师快参
    title?: string;
}
export interface AnalysCommentCountParams {
    type?: string;
    prodCode?: string;
    isReal?: string;
    userNo?: number;
}
export interface InsertAnalysCommentParams {
    ticket: string;
    type: string;
    prodCode: string;
    title?: string;
    content: string;
    suggest: string;
    Price?: string;
    isReal: string;
    cUserType: string;
}
export interface SwitchPriceNotifyParams {
    ticket: string;
    id: number;
    state: number;
}
export interface NewsRecordParams {
    ticket: string;
    pushId?: string;
    type?: number;
    newsType?: number;
    newsId?: string;
}
export interface SubmitIssueParams {
    ticket: string | null;
    content: string;
    phone: string;
    type: string;
    nickName: string;
}
export interface LatLngParams {
    ticket?: string;
    openid?: string;
    latLng: string;
}
export interface BindWxParams {
    verifyTicket: string;
    phone: string;
    pwd?: string;
    source?: string;
    nickName: string;
    openId: string;
    faceUrl: string;
    getuiId: string;
    invitedId?: string;
}
export interface RegisterParams {
    verifyTicket: string;
    phone: string;
    pwd1: string;
    pwd2: string;
    source: string;
    getuiId?: string;
    invitedId?: string;
    actId?: string;
}
export interface ReNormalPwdParams {
    verifyTicket: string;
    phone: string;
    pwd1: string;
    pwd2: string;
    nickName?: string;
    idCard?: string;
    ver: 'app1' | 'app2';
}

export interface LoginParams {
    phone?: string;
    pwd?: string;
    openId?: string;
    pushId?: string;
}

export interface VerifycodeParams {
    msgCode: string;
    phone: string;
    source?: number;
    name?: string;
    idCode?: string;
}

export interface AnalysTrendsParmas {
    prodCode?: string;
    userNo?: number;
    index: number;
    size: number;
}

export interface LivePageParmas {
    pageNo: number;
    pageSize: number;
    name?: string;
    type: number; // 直播类型: 0直播，1录播
    label?: string;
}

export interface LiveRecordParmas {
    liveId: number;
    limits: string; //观看权限0：注册黄金帮 1：手机号验证 2：密码 3：无限制
    openid: string;
    gbWxCode: string;
}

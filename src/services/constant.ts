export enum ROUTE_PATH {
    HOME = '',
    BIND = 'bind',
    OPEN_ACCOUNT = 'open-account',
    REGISTRY = 'registry',
    DOWNLOAD = 'download',
    GUIDE_CHECKCODE_HTML = 'guide/check-code-html',
    GUIDE_OPEN_HTML = 'guide/open-html',
    GUIDE_RISK = 'guide/risk',
}

export enum WECHAT_SLOGAN {
    HOME = '玩赚黄金，黄金帮APP触手可及|黄金帮，上海黄金交易所会员单位，名师资讯及策略带你领略黄金魅力！',
    BIND = '绑定黄金交易编码|玩赚黄金，黄金帮，你的交易好帮手！',
    OPEN_ACCOUNT = '开通贵金属递延账户|玩赚黄金，黄金帮，你的交易好帮手！',
    REGISTRY = '你的好友正在黄金帮学习投资交易，一起来提升哦！|玩赚黄金，黄金帮，你的交易好帮手！',
    DOWNLOAD = '下载黄金帮|与其观望，不如让金银财富跟着你走，黄金帮，你的交易好帮手！',
    GUIDE_CHECKCODE_HTML = '如何查看黄金交易编码？|玩赚黄金，黄金帮，你的交易好帮手！',
    GUIDE_OPEN_HTML = '开户流程说明|玩赚黄金，黄金帮，你的交易好帮手！',
    GUIDE_RISK = '风险测评说明|玩赚黄金，黄金帮，你的交易好帮手！',
}
export enum PAGE_TITLE {
    HOME = '黄金帮 - 开户绑定',
    BIND = '黄金帮 - 绑定交易编码',
    OPEN_ACCOUNT = '黄金帮 - 开户',
    REGISTRY = '黄金帮 - 注册',
    DOWNLOAD = '下载黄金帮',
    GUIDE_CHECKCODE_HTML = '黄金帮 - 如何查看交易编码',
    GUIDE_OPEN_HTML = '黄金帮 - 开户流程',
    GUIDE_RISK = '黄金帮 - 开户风险测评流程',
}

export enum TOAST_MSG {
    wrongPhone = '请输入正确的手机号码',
    wrongSmsCode = '请输入正确的短信验证码！',
    loginToast = '授权绑定将同时注册黄金帮账户，可用于黄金帮APP验证登录。',
    httpError = '请求失败',
    noChecked = '您还没同意《黄金帮用户电子服务协议》！',
    noPwd = '请输入6~15位不含符号的密码',
    notSamePwd = '两次输入的密码不一致',
    noTradeCode = '请输入16位交易编码',
    incorrectTradeCode = '请输入000131开头的16位交易编码',
    wrongIdCode = '请输入正确的身份证号码',
    smsCodeSent = '已发送',
}

export enum REQUEST_CODE_MSG {
    '验证码错误' = 209,
    '验证出错' = 210,
}

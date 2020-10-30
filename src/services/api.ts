import { request } from "./request";
import * as ReqTypes from "@/types/request";
import * as ResTypes from "@/types/response";

// interface VerifycodeRes {
//     verifyTicket?: string;
//     pwd: '0' | '1';
//     ticket?: string;
//     phone: string;
//     gesturePwd: string;
//     client_id: string;
//     source: string;
// }

// //2.27.5 用户登录
export function Login(data: ReqTypes.LoginParams): Promise<ResTypes.LoginData> {
  return request({
    url: "user/login",
    method: "POST",
    data,
  });
}

//2.25.1 获取短信验证码
export function getMsgCode(params: {
  phone: string;
  type: number;
}): Promise<void> {
  return request({
    url: "user/common/getMsgCode",
    method: "GET",
    params,
  });
}

//2.25.4+提交验证码，进行校验，是否校验成功，由 status 来判断，请注意的时候，进行下一步操作的时候一定要带上verifyTicket这个参数，否则则算无法验证通过，有效期5分钟
// export function verifyCode(params: {
//     msgCode: string;
//     phone: string;
//     openid: string;
//     invitedId?: number;
//     latLng?: string;
// }): Promise<VerifycodeRes> {
//     return request({
//         url: 'user/wxRegOrLogin',
//         method: 'GET',
//         params,
//     });
// }
export function verifycode(
  data: ReqTypes.VerifycodeParams
): Promise<{
  verifyTicket?: string;
  pwd: "0" | "1";
  ticket?: string;
  phone: string;
  gesturePwd: string;
  client_id: string;
}> {
  return request({
    url: "user/common/verifyCode",
    method: "POST",
    data,
  });
}

//2.19.5分类0：黄金时评，1：活动报道，2：TD学堂
export function getNewsPage(
  params: ReqTypes.NewsPageParams
): Promise<ResTypes.PageRecordData<ResTypes.NewsPageData>> {
  return request({
    url: "news/newsPage",
    method: "GET",
    params,
  });
}

// 2.27.8修改基础的登录密码
export function reNormalPwd(data: ReqTypes.ReNormalPwdParams): Promise<void> {
  return request({
    url: "user/reNormalPwd",
    method: "POST",
    data,
  });
}

// //2.26.4获取用户元宝数量，待激活元宝，分佣比
// export function getUserScore(data: ReqTypes.TicketOnly): Promise<ResTypes.ScoreData> {
//     return request({
//         url: 'user/getUserScore',
//         method: 'POST',
//         data,
//     });
// }

//2.26.3 判断用户是否登录，如果登录则返回用户信息，否则则返回没有登录状态，如果用户绑定了实盘信息则返回实盘绑定的姓名
export function getUserInfo(params: {
  ticket: string;
}): Promise<ResTypes.UserInfoData> {
  return request({
    url: "user/getUserInfo",
    method: "GET",
    params,
  });
}

export function productPage(
  params: ReqTypes.ProductPageParams
): Promise<{
  record: ResTypes.ProductPageData[];
  total: number;
  totalPage: number;
}> {
  return request({
    url: "act/productPage",
    method: "GET",
    params,
  });
}

// 轮播图
export function getBanner(params: {
  type: number;
}): Promise<{ record: ResTypes.BannerPageData[] }> {
  return request({
    url: "news/bannerPage",
    method: "GET",
    params,
  });
}

// 推荐分析师
export function getAnalyst(params: {
  index: number;
  isWeb: number;
}): Promise<{
  record: ResTypes.TeacherData[];
  total: number;
  totalPage: number;
}> {
  return request({
    baseURL: "https://app.goldbangs.com/goldbangs/api/",
    url: "trade/analyst/getAnalystList",
    method: "GET",
    params,
  });
}

// 合作机构
export function getCooperateList(params: {
  index: number;
  size: number;
}): Promise<ResTypes.CooperateData[]> {
  return request({
    url: "news/cooperateList",
    method: "GET",
    params,
  });
}

// 商品详情
export function productDetail(params: {
  id: string | null;
}): Promise<ResTypes.ProductExchangeData> {
  return request({
    url: "act/productDetail",
    method: "GET",
    params,
  });
}

// 用户行为记录
export function recordBehavior(data: {
  phone: string;
  behavior: string;
}): Promise<string> {
  return request({
    url: "act/behavior",
    method: "POST",
    data,
  });
}

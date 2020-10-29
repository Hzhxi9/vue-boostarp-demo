import { request } from "./request";
import * as ReqTypes from "@/types/request";
import * as ResTypes from "@/types/response";

interface VerifycodeRes {
  verifyTicket?: string;
  pwd: "0" | "1";
  ticket?: string;
  phone: string;
  gesturePwd: string;
  client_id: string;
  source: string;
}

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
export function verifyCode(params: {
  msgCode: string;
  phone: string;
  openid: string;
  invitedId?: number;
  latLng?: string;
}): Promise<VerifycodeRes> {
  return request({
    url: "user/wxRegOrLogin",
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

//2.26.4获取用户元宝数量，待激活元宝，分佣比
export function getUserScore(
  data: ReqTypes.TicketOnly
): Promise<ResTypes.ScoreData> {
  return request({
    url: "user/getUserScore",
    method: "POST",
    data,
  });
}

// 轮播图
export function getBanner(params: { type: number }):Promise<{record: ResTypes.BannerPageData[]}> {
  return request({
    url: "news/bannerPage",
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

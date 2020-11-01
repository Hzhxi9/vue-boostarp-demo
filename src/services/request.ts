import qs from "qs";
import { REQUEST_CODE_MSG } from "@/services/constant";

interface Response {
  status: boolean;
  code: REQUEST_CODE_MSG;
  msg: string;
  data: any;
}

const baseURL = "https://app.goldbangs.com/goldbangs/api/";
const headers = new Headers();
headers.append("Content-Type", "application/x-www-form-urlencoded");

async function request(config: {
  baseURL?: string;
  url: string;
  method: "GET" | "POST";
  params?: { [key: string]: any };
  data?: { [key: string]: any };
}) {
  const { url, method, params, data } = config;

  const path = `${baseURL}${url}${params ? `?${qs.stringify(params)}` : ""}`;
  const res = await fetch(path, {
    method,
    headers,
    body: method !== "GET" ? qs.stringify(data) : undefined,
    mode: "cors",
  });
  if (res.ok) {
    const json: Response = await res.json();
    // if (res.url.includes('getWxSign')) {
    //     return json;
    // }
    if (json.status) {
      return json.data;
    } else {
      return Promise.reject({
        code: json.code,
        codeMsg: REQUEST_CODE_MSG[json.code],
        msg: json.msg,
      });
    }
  } else {
    return Promise.reject(res.json());
  }
}

export { request };

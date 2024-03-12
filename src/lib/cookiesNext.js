import Cookies from "js-cookie"
 
export async function setCookiesNext(data) {
  return Cookies.set("token",JSON.stringify(data))
}

export async function getCookiesNext() {
  return Cookies.get("token")
}
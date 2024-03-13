import Cookies from "js-cookie"
 
export async function setCookiesNext(name,data) {
  return Cookies.set(name,JSON.stringify(data))
}

export async function getCookiesNext(name) {
  return Cookies.get(name)
}
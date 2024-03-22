import Cookies from "js-cookie"
 
import { redirect } from "next/navigation"

export function setCookiesNext(name,data) {
  return Cookies.set(name,JSON.stringify(data))
}

export function getCookiesNext(name) {
  return JSON.parse(Cookies.get(name))
}

export  function errorClearRedirct(error){
  if(error && error.response && error.response.status && error.response.status===401){
      Cookies.remove("user")
      Cookies.remove("token")
      return redirect("/auth/login")
  }
}
export const ErrorHandling = ()=>{

    if(error && error.response && error.response.status && error.response.status===401){
        Cookies.remove("user")
        Cookies.remove("token")
        return redirect("/auth/login")
    }
    
    return (
        <>
            {
                error && error.response && error.response.status && error.response.status===500 && <></>
            }
        </>
    )
}
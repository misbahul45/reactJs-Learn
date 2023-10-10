const apiRequest=async(url='',optionObj=null,errMsg=null)=>{
    try{
        const response=await fetch(url,optionObj)
        console.log(response)
        if(!response.ok) throw Error("Something went wrong")
        const data=await response.json()
        return data
    }catch(error){
        errMsg=error
    }finally{
        return errMsg
    }
}
export default apiRequest
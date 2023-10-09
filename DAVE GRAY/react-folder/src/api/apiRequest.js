const apiRequest=async(url='',optionObj=null,errMsg=null)=>{
    try{
        const response=await fetch(url,optionObj);
        if(!response.ok) throw Error("please reload the app")
        const data=await response.json();
        return data
    }catch(error){
        errMsg=error
    }finally{
        return errMsg
    }
}
export default apiRequest
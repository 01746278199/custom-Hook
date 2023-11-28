import { useEffect, useState } from "react"


export const   useHooks=(api)=> {
    const [urls,setUrls] = useState([])
    const [errors,setErrors] = useState([])
    
    useEffect(() =>{
        const details = async ()=>{
          try{
           const postData = await fetch(api) ;
           const Data = await postData.json() ;
           setUrls(Data)
          }
          catch(err){
            setErrors(err)
          }
        }
        details()
    }, [])
  return {
    urls,
    errors,

  };
}


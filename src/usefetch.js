import { useEffect, useState } from "react";

const useFetch=(url)=>{
    const [data, setdata] = useState(null)
    const [isLoading , setisLoading]=useState(true)
    const [Error,setError]=useState(null)
    useEffect(() => {
      setTimeout(() => {
      fetch(url)
      .then(response => {
        if(!response.ok){
          throw Error('coonection to json server has a problem')
        }
        return response.json();
      })
      .then(datas => {
        setdata(datas);
        setisLoading(false)
      })
      .catch(err =>{
        setError(err.massage)
      })
      }, 1500);
    }, [url])
    return{data , isLoading , Error}  
}
export default useFetch;
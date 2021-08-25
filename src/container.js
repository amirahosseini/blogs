import { useEffect, useState } from "react";
import BlogList from "./blogslists";

const Container = () => {
  const [blogs, setBlogs] = useState(null)
  const [isLoading , setisLoading]=useState(true)

  useEffect(() => {
    setTimeout(() => {
    fetch('http://localhost:8085/blogs')
    .then(response => {
      return response.json();
    })
    .then(datas => {
      setBlogs(datas);
      setisLoading(false)
    })
    }, 1500);
  }, [])

  return (
    <div className="home">
      {isLoading &&
         <div className="loading-placement">
            <div className="centerize row">
              <div className="forpositioning">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
                <div className="circle c4"></div>
                <div className="circle c5"></div> 
              </div>
              
            </div>
          </div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Container;

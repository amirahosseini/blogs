import { useEffect, useState } from "react";
import BlogList from "./blogslists";
import useFetch from "./usefetch";

const Container = () => {
  const {data:blogs , isLoading , Error}=useFetch('http://localhost:8085/blogs')
  return (
    <div className="home">
      { Error && <div> { Error } </div> }
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

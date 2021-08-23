import {useState , useEffect} from 'react';
import BlogList from './blogslists';


const Container = () => {
    const [blogs ,setBlog ]= useState("")
        
    
        useEffect(() =>{
            fetch('http://localhost:8085/blogs')
            .then(response =>{
                response.json()
            })
            .then( datas => {
                setBlog(datas);
            })
        },[]);
    
    return ( 
        {blogs && <BlogList blogs={blogs} />};
        );
}

export default Container;

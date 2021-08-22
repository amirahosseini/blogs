const blogList = ({blogs}) => {
    return ( 
<div className="fullcontainer"> 
            {blogs.map((myblog) => (
                <div className="mother" key={blogs.id}>
                    <div className="title-div"> 
                        <h1> { myblog.title } </h1>
                    </div>  
                    <div className="hashtagsdiv">
                        <h5>{myblog.hashtags}</h5>
                    </div>
                    <div className="information">
                        <div> {myblog.body} </div>
                    </div>
                </div>
                
            ))
            }
        </div>
          
            );
}
 
export default blogList;
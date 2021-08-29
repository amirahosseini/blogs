import './index.css'
const Navbar = () => {
    return (
        <div className="nav-div">
            <div className="nav-left"> 
                <h1 className="title"> here is my first react blog </h1> 
            </div>

            <div className="nav-right"> 
                <h1 className="blue"> home </h1>
                <h1 className="blue2" ><a href="http://localhost:3000/NewBlog" className="afornewblog"> blogs </a></h1>
            </div>
        </div>
    );
}
 
export default Navbar;
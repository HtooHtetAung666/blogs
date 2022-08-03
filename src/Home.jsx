import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    let [blogs,setBlogs] = useState([
        {title:'Blog 1',body:'Blog body one',author:'blog a1',id:1},
        {title:'Blog 2',body:'Blog body two',author:'blog a2',id:2},
        {title:'Blog 3',body:'Blog body three',author:'blog a3',id:3},
    ])
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title='All Blogs!'/>
        </div>
     );
}
 
export default Home;

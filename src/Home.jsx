import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <p>{error}</p>}
            {pending && <p>Loading ....</p>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
        </div>
     );
}
 
export default Home;

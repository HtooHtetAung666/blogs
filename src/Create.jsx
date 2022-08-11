import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('yoshi');
    const [isPending,setPending] = useState(false);
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('added');
            setPending(false);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Add Blog</h2>
            <form onSubmit={handleClick}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Submit</button> }
                { isPending &&<button disabled>Adding a blog</button>}
            </form>
        </div>
    );
}
 
export default Create;
import { useState, useEffect } from "react";
const Typicode2 = () => {
    const [posts, setPosts] = useState([]);

    const handleClick = () => {
        alert("handle click");
    };

    useEffect(() => {
        const endpoint = "https://jsonplaceholder.typicode.com/posts";

        fetch(endpoint)
            .then((response) => response.json())
            .then((json) => setPosts(json));

        document.getElementById("box").addEventListener("click", handleClick);

        return () => {
            document
                .getElementById("box")
                .removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <>
            <h1 id="box">Demo component lifecycle</h1>

            {posts.length > 0 &&
                posts.map((post) => (
                    <div className="demo" key={post.id}>
                        <p>
                            {post.id} - {post.title}
                        </p>
                        <p>{post.body}</p>
                    </div>
                ))}
        </>
    );
};
export default Typicode2;

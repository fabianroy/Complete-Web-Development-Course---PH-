import "./Post.css";
export default function Post({post}) {
    const {title, body, id, userId} = post;
    return (
        <div>
            <h4>Title: {title}</h4>
            <p>User ID: {userId}</p>
            <p>Post ID: {id}</p>
            <p>{body}</p>
            <hr />
        </div>
    )
}

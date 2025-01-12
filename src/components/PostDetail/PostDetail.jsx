import { useParams } from "react-router-dom";
import "./PostDetail.css";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((data) => data.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!post) return <p>Загрузка...</p>;

  return (
    <div className="post" key={id}>
      <h1 className="PostDetail_title">{post.title}</h1>
      <p>{post.body}</p>
      <div className="badges">
        <div className="badge">
          <img
            src="https://img.icons8.com/?size=100&id=24816&format=png"
            alt="like icon"
          />
          <span>{post.reactions.likes}</span>
        </div>
        <div className="badge">
          <img
            src="https://www.shareicon.net/data/2015/08/23/89841_f088_384x512.png"
            alt="dislike icon"
          />
          <span>{post.reactions.dislikes}</span>
        </div>
        <div className="badge">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP._3iP_uE1YUXtr42cK-_llAHaE8&pid=15.1 "
            alt="dislike icon"
          />
          <span>{post.views}</span>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default PostDetail;

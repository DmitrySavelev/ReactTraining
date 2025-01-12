import { useParams } from "react-router-dom";
import d from "./PostDetail.module.css";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import { getOnePostApi } from "../../utils/Api";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getOnePostApi(id).then((data) => setPost(data));
  }, [id]);
 
  if (!post) return <p className={d.loading}>Загрузка...</p>;

  return (
    <div className={d.post} key={id}>
      <div className={d.postWrapper}>
        <h1 className={d.PostDetail_title}>{post.title}</h1>
        <p>{post.body}</p>
        <div className={d.badges}>
          <div className={d.badge}>
            <img
              src="https://img.icons8.com/?size=100&id=24816&format=png"
              alt="like icon"
            />
            <span>{post.reactions.likes}</span>
          </div>
          <div className={d.badge}>
            <img
              src="https://www.shareicon.net/data/2015/08/23/89841_f088_384x512.png"
              alt="dislike icon"
            />
            <span>{post.reactions.dislikes}</span>
          </div>
          <div className={d.badge}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP._3iP_uE1YUXtr42cK-_llAHaE8&pid=15.1 "
              alt="dislike icon"
            />
            <span>{post.views}</span>
          </div>
        </div>
      </div>

      <Comments />
    </div>
  );
}

export default PostDetail;

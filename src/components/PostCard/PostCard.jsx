import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard(props) {
  return (
    <div className="post" key={props.id}>
      <h1 className="PostCard_title">{props.title}</h1>
      <p>{props.body}</p>
      <Link to={`/post/${props.id}`}>
        <span>Перейти к посту</span>
      </Link>
      <div className="badges">
        <div className="badge">
          <img
            src="https://img.icons8.com/?size=100&id=24816&format=png"
            alt="like icon"
          />
          <span>{props.likes}</span>
        </div>
        <div className="badge">
          <img
            src="https://www.shareicon.net/data/2015/08/23/89841_f088_384x512.png"
            alt="dislike icon"
          />
          <span>{props.dislikes}</span>
        </div>
        <div className="badge">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP._3iP_uE1YUXtr42cK-_llAHaE8&pid=15.1 "
            alt="dislike icon"
          />
          <span>{props.views}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

import { useParams } from "react-router-dom";
import c from "./Comments.module.css";
import { useEffect, useState } from "react";
import { getCommentsData } from "../../utils/Api";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsData(id).then((data) => {
      setComments(data);
    });
  }, [id]);

  if (comments.length == 0) return <></>;

  return (
    <div className={c.comments}>
      <div>
        <span>{comments.user?.username}</span>
        <span>{` (${comments.user?.fullName}): `}</span>
        <span>{comments.body}</span>
      </div>
      <div className={c.badge}>
        <img
          src="https://img.icons8.com/?size=100&id=24816&format=png"
          alt="like icon"
        />
        <span>{comments.likes}</span>
      </div>
    </div>
  );
}

export default Comments;

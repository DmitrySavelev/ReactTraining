import { useParams } from "react-router-dom";
import c from "./Comments.module.css";
import { useEffect, useState } from "react";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/comments/${id}`) // Получаем данные комментария
      .then((data) => data.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  }, [id]);

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

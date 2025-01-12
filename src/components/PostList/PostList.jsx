import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setPosts(data.posts);
        const allTags = data.posts.flatMap((post) => post.tags);
        const uniqueTags = [...new Set(allTags)];
        setTags(uniqueTags);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className="PostList">
      <div className="tags">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={tag === selectedTag ? "active-tag" : ""}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="posts">
        {filteredPosts.map((post) => (
          <PostCard
            title={post.title}
            body={post.body}
            likes={post.reactions.likes}
            dislikes={post.reactions.dislikes}
            views={post.views}
            tags={post.tags}
            key={post.id}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;

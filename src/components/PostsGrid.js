import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/reducers/Posts.reducer";

import CountDown from "./CountDown";

const PostsGrid = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postsReducer);


  
  useEffect(() => {
    dispatch(getPosts());

    }, []);


  if (loading === true) {
    return <p>Loading...</p>;
  }

  if (error !== null) {
    return <p>Something went wrong ma G. Error:{error}</p>;
  }

  return posts.map((item, index) => {
    return (
      <div className="post" key={item.id}>
        <figure>
            <img src={item.image}/>
        </figure>
        <h2>{item.name}</h2>
        <p>{item.status}</p>
        <div className="countdown">
          <CountDown chara={item.id}/>
        </div>
        
        </div>
    );
  });
};

export default PostsGrid;

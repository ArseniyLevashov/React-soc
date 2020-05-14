import React from 'react';
import s from "./MyPosts.module.css";


const Post = (props) => {

    return <div className={s.item}>
        <img src="#"></img>
            {props.message}
          <div>
            <span>Like {props.likes}</span>
        </div>
    </div>
}

export default Post;
import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post';
import Profile from '../../Profile';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../Redux/Profile-reducer';

//эьл презентационная компонента


const MyPosts = (props) =>{
let postsElements =
    props.posts.map( p => <Post message={p.message} likes={p.likesCount} /> )

  let newPostElement = React.createRef();


    let onAddPost = () =>{
      props.addPost();
    }

    let onPostChange = () =>{
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
     
    }

    return <div className={s.postsBlock}>
      <h3>My posts</h3>
    <div>
      <div>
        <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
      </div>
      <button onClick={ onAddPost }>Add Post</button>
    </div>
      <div className={s.posts}>
        { postsElements }
    </div>
  </div>
}
export default MyPosts;
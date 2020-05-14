import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/Post/MyPosts"
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';

const Profile = (props) =>{

    return <div>
              <ProfileInfo />
              <MyPostsContainer store={props.store} />
            </div>
}

export default Profile;
import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return <div className={s.Prof_block}>
            <div>
              
            </div>
            <div className={s.line}>
                <div>
                  <img src="https://magicduels.ru/sites/default/files/avatars/default.png"></img>
                </div>
                <div className={s.descripBlock}>
                  <h2>Profile Name</h2>
                  <p>Description</p>
                </div>
            </div>
        </div>
}

export default ProfileInfo;

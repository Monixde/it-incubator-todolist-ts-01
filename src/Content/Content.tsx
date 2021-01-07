import React from 'react';
import s from './Content.module.css';
import {Post} from "../Post/Post";

function Content() {
    return (
        <div className={s.con}>
           <div><img src={'https://images.by.prom.st/94678845_w640_h640_burenie-skvazhin-na.jpg'}/></div>
           <div className={s.person}>
               <div><img src={'https://million-wallpapers.ru/wallpapers/5/51/455458761658281/avatar-2-nejtiri-2017.jpg'}/></div>
               <div>данные</div>
           </div>
           <div>
               <textarea/>
               <button type={"button"}/>
           </div>
          <Post message={'Привет как дела?'}/>
          <Post message={'Пока петух'}/>
        </div>
    );
}

export default Content;

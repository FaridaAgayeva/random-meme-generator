import React from "react";
import style from './assets/styles.module.css'

export default function(){
    return (
      <>
        <header>
          <div className={style.navbar}>
            <img src="../images/Troll Face.png" className={style.navbarLogo}/>
            <h1 className={style.navbarTitle}>Meme Generator</h1>
          </div>
        </header>
      </>
    )
}
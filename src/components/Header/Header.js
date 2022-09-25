import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
        <p className={styles.heading}>
          Resume Builder
        </p>  
      </div>
    
  );
}

export default Header;

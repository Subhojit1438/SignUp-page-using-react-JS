import React from 'react'
import styles from './SignUp.module.css'
import { BiSolidUserDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail,MdSubdirectoryArrowRight } from "react-icons/md";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";

export const SignUp = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <label className={styles.login}>Already have an account?</label>
        </div>
        <button className={styles.login_a}>Login</button>
        <form className={styles.loginform}>
          <h1>SignUp</h1>
          <input className={`${styles.inputbox} ${styles.effect_2}`} type="text" placeholder='Full Name' required />
          <BiSolidUserDetail className={styles.icon} />
          <input className={styles.inputbox} type="text" placeholder='Username' required />
          <FaUserCircle className={styles.icon} />
          <input className={styles.inputbox} type="text" placeholder='Email' required />
          <MdEmail className={styles.icon} />
          <input className={styles.inputbox} type="password" placeholder='Password' required />
          <RiLockPasswordLine className={styles.icon} />
          <input className={styles.inputbox} type="password" placeholder='Confirm Password' required />
          <RiLockPasswordFill className={styles.icon} />
          <div className={styles.remember}>
            <input type="checkbox" id='check' />
            <label for='check'>Remember me</label>
            <a href="#" className={styles.forgot}>Forgot password</a>
          </div>
          <button type="button" className={styles.signbutton}>SignUp</button>
        </form>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import styles from './SignUp.module.css'
import { BiSolidUserDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail, MdSubdirectoryArrowRight } from "react-icons/md";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import Nav from './Nav';
import { Children } from 'react';

export const SignUp = ({Children}) => {
  const [action, setAction] = useState("Login")
  const navigate = useNavigate();
  const navigateToNav = () => {
    navigate("/Nav")
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <label className={styles.login}>Already have an account?<br /><button className={styles.login_a}>Login</button></label>
        </div>
        <form className={styles.loginform}>
          <h1>{action}</h1>
          {
            action === "Login" ? <div></div> : <div><input className={styles.inputbox} type="text" placeholder='Full Name' required />
              <BiSolidUserDetail className={styles.icon} /></div>
          }
          <input className={styles.inputbox} type="text" placeholder='Username' required />
          <FaUserCircle className={styles.icon} />
          {
            action === "Login" ? <div></div> : <div>
              <input className={styles.inputbox} type="text" placeholder='Email' required />
              <MdEmail className={styles.icon} />
            </div>
          }
          <input className={styles.inputbox} type="password" placeholder='Password' required />
          <RiLockPasswordLine className={styles.icon} />
          {
            action === "Login" ? <div></div> : <div>
              <input className={styles.inputbox} type="password" placeholder='Confirm Password' required />
              <RiLockPasswordFill className={styles.icon} />
            </div>
          }
          <div className={styles.remember}>
            <input type="checkbox" id='check' />
            <label for='check'>Remember me</label>
            {
              action === "Login" ? <div></div> : <div>
                <a href="#" className={styles.forgot}>Forgot password</a>
              </div>

            }
          </div>
          <button type="button" className={styles.signbutton} onClick={navigateToNav}>{action}</button>
          <Routes>
            <Route path="/Nav" element={<Nav />}></Route>
          </Routes>
        </form>
        <main>{Children}</main>
      </div>
    </>
  )
}

}

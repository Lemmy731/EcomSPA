'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pics from '../../public/watch.png'
import { useState } from 'react'
import styles from './login/login.module.css'
import { useRouter } from "next/navigation"
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleLogin(e:any) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://localhost:44338/api/Auth/login",
        {
          email,
          password
        },
        {
         withCredentials: true, 
        }
      );
      console.log(res.data)


      router.push("/product");
      console.log("i want to check")

    } catch (error) {
      alert("invalid login details");
       console.log("i want to check")
    }
  }
  return (
    <div className={styles.formcontainer}>
      <h2 className={styles.formh2}>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.formdiv}>
          <label className={styles.formlabel}>Email:</label>
          <input
            className={styles.forminput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formdiv}>
          <label>Password:</label>
          <input
            className={styles.forminput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.formbutton}>Login</button>
      </form>
    </div>
  );
}
export default LoginPage
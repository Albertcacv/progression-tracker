import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <article className={styles.homeArticle}>
        <Link to='/exercises'>Exercises</Link>
      </article>
      <article className={styles.homeArticle}>
        <Link to='/bodyweight'>Body Weight</Link>
      </article>
    </div>
  )
}

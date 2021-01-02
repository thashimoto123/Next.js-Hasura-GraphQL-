import { NextPage } from 'next'
import styles from './index.module.css'

const PostPage: NextPage = () => {
  return (
    <div className={styles.editContent}>
      <input type="text" className={styles.subject} placeholder={'タイトル'} />
      <textarea className={styles.editor} placeholder={'本文を書きましょう'} />
    </div>
  )
}

export default PostPage
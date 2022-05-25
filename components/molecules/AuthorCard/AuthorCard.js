import Image from 'next/image'
import siteLogo from '../../../public/blog/authors/greg-rickaby.jpg'
import styles from './AuthorCard.module.css'

export default function AuthorCard() {
  return (
    <div className={styles.authorCard}>
      <div className={styles.avatarContainer}>
        <Image
          alt=""
          className={styles.avatar}
          height="70"
          loading="eager"
          placeholder="blur"
          src={siteLogo}
          width="70"
        />
      </div>
      <div className={styles.info}>
        Greg is an author, photographer, dad, husband, and WordPress Technical
        Lead at <a href="https://americaneagle.com">AmericanEagle.com</a>.
      </div>
    </div>
  )
}

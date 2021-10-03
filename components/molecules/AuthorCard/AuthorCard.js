import Image from 'next/image'
import siteLogo from '../../../public/blog/authors/greg-original.jpg'
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
        Greg is the Director of Engineering at{' '}
        <a href="https://webdevstudios.com">WebDevStudios</a>. He also
        moonlights at <a href="https://www.dummies.com/">Dummies</a> writing and
        editing books.{' '}
        <a href="https://twitter.com/gregrickaby">Follow him on Twitter</a> for
        lots of pictures of pepperoni pizza and tidbits about Next.js.
      </div>
    </div>
  )
}

import styles from './Separator.module.css'

export default function Separator() {
  return (
    <div className={styles.dots}>
      <span>&middot;</span> <span>&middot;</span> <span>&middot;</span>
    </div>
  )
}

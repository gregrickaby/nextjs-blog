import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './SideNote.module.css'

function Alert() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 0 24 24"
      width="48"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  )
}

function Info() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 0 24 24"
      width="48"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  )
}

export default function SideNote(props) {
  return (
    <aside
      className={cn(
        styles.sideNote,
        props.type === 'alert'
          ? 'bg-red-600 border-red-900'
          : 'bg-blue-400 border-blue-800'
      )}
    >
      <div className={styles.icon}>
        {props.type === 'alert' ? <Alert /> : <Info />}
      </div>
      <div className={styles.content}>{props.children}</div>
    </aside>
  )
}

SideNote.propTypes = {
  props: PropTypes.string,
  children: PropTypes.node
}

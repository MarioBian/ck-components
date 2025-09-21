import styles from './Background.module.css';

export const Background = ({children}) => {


  return (
  <div className={styles.woodenBg}>
    {children}
  </div>
  )
}

export default Background

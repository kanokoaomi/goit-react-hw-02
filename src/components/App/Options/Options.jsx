import styles from './Options.module.css'

const Options = ({onFeedbackButtons, onResetBtnClick, total}) => {
  return (
    <ul className={styles.listOfButtons}>
       <li><button onClick={() => onFeedbackButtons("good")} type="button">Good</button></li> 
       <li><button onClick={() => onFeedbackButtons("neutral")} type="button">Neutral</button></li> 
       <li><button onClick={() => onFeedbackButtons("bad")} type="button">Bad</button></li> 
       {(total != 0) && 
       <li><button onClick={onResetBtnClick} type="button">Reset</button></li>}
    </ul>
  )
}

export default Options
import styles from './Options.module.css'

const Options = ({onGoodBtnClick, onNeutralBtnClick, onBadBtnClick, onResetBtnClick, total}) => {
  return (
    <ul className={styles.listOfButtons}>
       <li><button onClick={onGoodBtnClick} type="button">Good</button></li> 
       <li><button onClick={onNeutralBtnClick} type="button">Neutral</button></li> 
       <li><button onClick={onBadBtnClick} type="button">Bad</button></li> 
       {(total != 0) && 
       <li><button onClick={onResetBtnClick} type="button">Reset</button></li>}
    </ul>
  )
}

export default Options
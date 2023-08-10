
import Styles from './MainCard.module.css'

const MainCard = ({children}) => {
  return (
      <div className={Styles.cardContainer}>
         {children}
    </div>
  )
}

export default MainCard

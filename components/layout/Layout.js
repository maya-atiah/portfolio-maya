import MainCard from "../ui/MainCard"
import Nabvar from "./Nabvar"
import Styles from './Layout.module.css'
import Footer from '@/components/layout/Footer'
import Scroll from "../ui/Scroll"
const Layout = (props) => {
  return (
      <div className={Styles.Layout}>
          <MainCard>
              <Nabvar />
        <main >{props.children}</main>
        <Footer />
        
      </MainCard>
      <Scroll/>
          </div>
 
  )
}

export default Layout

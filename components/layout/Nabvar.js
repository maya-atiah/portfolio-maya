import Styles from './Navbar.module.css';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {


  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FaAlignRight className='hamburger ' onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <AiOutlineClose className='hamburger' onClick={() => setOpen(!open)} />
  );
  const handleNavLinkClick = (sectionId) => {

    setOpen(!open)
  };
  const animatedForm = { opacity: 0, y: -30 };
  const animatedTo = { opacity: 1, y: 0 };

  return (
    <div className={Styles.navbar}>
      <img src="/logo.png" alt="logo" className={Styles.logohome} />
      <div className={Styles.menuIcon}>


        <div className={Styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href={`/?section=about`}>About</Link>
          <Link href={`/?section=skills`}>Skills</Link>
          <Link href={`/?section=projects`}>Projects</Link>
          <Link href={`/?section=experience`}>Experience</Link>
          <Link href={`/?section=contact`}>Contact</Link>
        </div>

        <div className={Styles.mobile}>
          {open ? closeIcon : hamburgerIcon}
          <div className={Styles.navbarMonileContainer}>
            {open && (
              <div className={Styles.navlinkMobile}>
                <Link className={Styles.navlinkMobilefont} href='/' onClick={handleNavLinkClick}> <motion.div initial={animatedForm}
                  animate={animatedTo}>Home</motion.div></Link>
                <Link className={Styles.navlinkMobilefont} href={`/?section=about`} onClick={handleNavLinkClick}><motion.div initial={animatedForm}
                  animate={animatedTo}>About</motion.div></Link>
                <Link className={Styles.navlinkMobilefont} href={`/?section=skills`} onClick={handleNavLinkClick}><motion.div initial={animatedForm}
                  animate={animatedTo}>Experience</motion.div></Link>
                <Link className={Styles.navlinkMobilefont} href={`/?section=projects`} onClick={handleNavLinkClick}><motion.div initial={animatedForm}
                  animate={animatedTo}>Skills</motion.div></Link>
                <Link className={Styles.navlinkMobilefont} href={`/?section=experience`} onClick={handleNavLinkClick}><motion.div initial={animatedForm}
                  animate={animatedTo}>Projects</motion.div></Link>
                <Link className={Styles.navlinkMobilefont} href={`/?section=contact`} onClick={handleNavLinkClick}><motion.div initial={animatedForm}
                  animate={animatedTo}>Contact</motion.div></Link>
              </div>)}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;

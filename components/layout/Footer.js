import { FaGithub, FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image';


const Footer = () => {

  
  return (
    <div className='footer-main-container'>
      <div className="footer-container">
          <Image src="/logo.png" alt="logo" width={140} height={100} />

        <div className="footer-container-icon">
          <a href='https://github.com/maya-atiah' target='_blank'><FaGithub className='icon-cont' /></a>
          <a> <FaInstagram className='icon-cont' /></a>
          <a href="mailto:maya.atiah.99@gmail.com" target='_blank' ><FaEnvelope className='icon-cont' /></a>
          <a href='https://www.linkedin.com/in/maya-atiah' target='_blank'><FaLinkedinIn className='icon-cont' /></a>
          </div>
     
      </div>
      <h4> 	&copy; 2023 Maya Atiah Portfolio</h4>
    </div>
  )
}

export default Footer

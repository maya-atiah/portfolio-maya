// import '../styles/contactus.css'
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaGithub, FaEnvelope, FaPhone, FaLinkedinIn, FaMapMarkedAlt ,FaInstagram} from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useEffect } from 'react';


const ContactUs = () => {
    const [isLoading, setIsloading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;

        if (firstName && lastName) {
            const templateParams = {
                from_name: firstName + " " + lastName,
                message: e.target.elements.message.value,
                email: e.target.elements.email.value,
            };
            setIsloading(true);
            emailjs
                .sendForm(
                    "service_3y4blym",
                    "template_y78lup4",
                    form.current,
                    "d_65TWquepGbk75tH"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        // Reset input fields
                      
                        form.current.reset();
                        setIsloading(false);
                    },
                    (error) => {
                        console.log(error.text);
                        
                    }
                );
        } else {
            console.log("Please fill in the first name and last name fields.");
        }
    };

  
    return (
        <div className="contact-main-container" id='contact'>
            <div className='main-skills-container-title' >
                <h2>Contact</h2>
                <span>Take a look on my frontend, backend, and statistical skills</span>
            </div>

        <div className="contact-container">
           

                <form className="form-container" ref={form}
                    onSubmit={sendEmail}>
                <div className="form">
                    <span className="heading">Get in touch</span>
                        <input placeholder="First Name" type="text" className="input" name='firstName' />
                        <input placeholder="Last Name" type="text" className="input" name='lastName' />
                        <input placeholder="Email" id="mail" type="email" className="input" name='email' />
                    <textarea placeholder="Write a message" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
                    <div className="button-container">
                            <button className="send-button">{isLoading ? "Submitting..." : "Send"}</button>

                    </div>
                </div>
                </form>
                <div className='contact-details'>
                    <Image src="/logo.png" alt="logo" width={200} height={180} />
                    <div>
                    <div><FaMapMarkedAlt className='icon-cont' /> Beirut, Lebanon</div>
                        <div> <FaPhone className='icon-cont phone' /><a className='phone' href="tel:+09613096433">+09613096433</a></div>
                        <div>
                             <a href='https://github.com/maya-atiah' target='_blank'><FaGithub className='icon-cont' /></a>
                              <a> <FaInstagram className='icon-cont' /></a>
                            <a href="mailto:maya.atiah.99@gmail.com" target='_blank' ><FaEnvelope className='icon-cont'/></a>
                            <a href='https://www.linkedin.com/in/maya-atiah' target='_blank'><FaLinkedinIn className='icon-cont'/></a></div>
                    </div>
                  
                </div>
          
            </div> <ToastContainer />
        </div>
    );
};

export default ContactUs;

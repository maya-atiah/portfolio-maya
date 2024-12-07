import { useState} from 'react';
import { saveAs } from 'file-saver';

const Home = () => {


  
    const [fileUrl, setFileUrl] = useState('/cv/Maya-Atiah-Cv-FullStackWebDevloper.pdf');

    const saveFile = async () => {
        try {
            const response = await fetch(fileUrl);
            const fileBlob = await response.blob();
            saveAs(fileBlob, "Maya-Atiah-Cv-FullStackWebDeveloper.pdf");
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };
  

  return (
      <div className="home-container">
          <div>
              <img src='/profilemayaatiah.jpeg' alt='profile image' className='profile-image'/>
              <div className='square'></div>
          </div>
          <div className='home-container-details' >
              <div> Hello, my name is</div>
              <div> Maya Atiah</div>
              <div>  I'm a <span>Full Stack Web Developer </span>based in Lebanon. I excel at managing projects from concept to deployment, ensuring precision, efficiency, and exceptional results. With a strong focus on user-centric design and innovative problem-solving, I deliver web applications that are both visually compelling and highly functional.</div>
              <button className="cv" onClick={saveFile}>
                  Download CV
              </button> 
          </div>
      </div>
  )
}

export default Home

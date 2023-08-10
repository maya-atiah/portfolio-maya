import { useState} from 'react';
import { saveAs } from 'file-saver';

const Home = () => {


  
    const [fileUrl, setFileUrl] = useState('/cv/Maya-Atiah-CV.pdf');

    const saveFile = async () => {
        try {
            const response = await fetch(fileUrl);
            const fileBlob = await response.blob();
            saveAs(fileBlob, "MayaAtiahCV.pdf");
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
              <div>  I'm a <span>Full Stack Web Developer </span>based in Lebanon. I specialize in turning ideas into fully functional web applications that not only look stunning but also deliver exceptional performance and user satisfaction</div>
              <button className="cv" onClick={saveFile}>
                  Download File
              </button> 
          </div>
      </div>
  )
}

export default Home

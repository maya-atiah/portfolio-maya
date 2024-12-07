import Image from 'next/image'
import { useState } from 'react';


const ProjectDetails = (props) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);



  const openFullscreenImage = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

 
  return (
    <div className='singleproject-container'>
      <div className='main-skills-container-title' >
        <h2 className='title-single'>{props.data.title}</h2>
        <span >{props.data.details}</span>
      </div>
      <div className='singleproject-details'>
        
        <div className='IMAGE-CONTAINER' >
          <img src={props.data.image} alt={props.image} className='single-image-i' onClick={() => openFullscreenImage(props.data.image)} />
          <div className='content-image'>
            <p>            {props.data.deployed ? <a href={props.data.deployed} target="_blank">Deployed Link</a> : <a href={props.data.videoDemo} target="_blank">Video Demo</a>}</p>

          </div>
        
        </div>
        <div> <p className='singleproject-details-p'>{props.data.moreDetails}</p>
          <div className='links-single'>
            {props.data.videoDemo ? <a href={props.data.videoDemo} target="_blank">Video Demo</a> : ''}
            {props.data.deployed ? <a href={props.data.deployed} target="_blank">Deployed Link</a> : ''}
          </div></div>
       
      </div>
      <div className='singleproject-images'>
        {props.data.imageArray.map((item) => {
          return(<>
            <img src={item} alt={item} className='single-image-p' onClick={() => openFullscreenImage(item)} />
              {
            fullscreenImage && (
              <div className="fullscreen-overlay" onClick={closeFullscreenImage}>
                <div className="fullscreen-image">
                  <img src={fullscreenImage} alt={item} />
                </div>
              </div>
            )
            }
          </>
          )
        })}
      
      </div>


    
     

    </div>
  );
};

export default ProjectDetails;
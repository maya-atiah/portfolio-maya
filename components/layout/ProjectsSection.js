import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';



const ProjectsSection = ({ projectsData }) => {
   const router =useRouter()
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const showDetailsHandler = (id) => {
        router.push(`/${id}`)
    }

    const openFullscreenImage = (imageSrc) => {
        setFullscreenImage(imageSrc);
    };

    const closeFullscreenImage = () => {
        setFullscreenImage(null);
    };

 
    return (
        <div className='projects-container' id='projects'>

            <div className='projects-titel' >
                Projects
            </div>
            <div className='projects-gallery'>
                {projectsData.map((item, index) => (
                    <div key={item.id} className='project even'>
                      
                                <Image src={item.image} alt={item.title} width={340} height={170} onClick={() => openFullscreenImage(item.image)} />
                                <h2>{item.title}</h2>
                                <p>{item.details}</p>
                                <a className='view-details-projects' onClick={() => showDetailsHandler(item.id)}>View Details</a>

                          
                        {fullscreenImage && (
                            <div className="fullscreen-overlay" onClick={closeFullscreenImage}>
                                <div className="fullscreen-image">
                                    <img src={fullscreenImage} alt={item.title} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='projextgallery-mobile'>
                {projectsData.map((item, index) => (
                    <>
                    <div key={item.id} className='projects-gallery-mobile'>
                        
                        
                        <h2>{item.title}</h2>
                        <p>{item.details}</p>
                            <a className='view-details-projects' onClick={() => showDetailsHandler(item.id)}>View Details</a>
                            <img src={item.image} alt={item.title} className='projects-image-mobile' width={340} height={170} onClick={() => openFullscreenImage(item.image)} />
                    </div>
                      { fullscreenImage && (
                        <div className="fullscreen-overlay" onClick={closeFullscreenImage}>
                            <div className="fullscreen-image">
                                <img src={fullscreenImage} alt={item.title} />
                            </div>
                        </div>
                        )}
                    </>
                ))}
            </div>









        </div>
    );
}

export default ProjectsSection

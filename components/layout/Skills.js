import Image from 'next/image';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";


const Skills = () => {


  const imageContainer = [
    {id:'1',
    image:'/css.png'
    }, {
      id: '2',
      image: '/docker.png'
    }, {
      id: '3',
      image: '/figma.png'
    }, {
      id: '4',
      image: '/github.png'
    }, {
      id: '5',
      image: '/html.png'
    },{
      id: '7',
      image: '/laravel.png'
    }, {
      id: '8',
      image: '/materialui.png'
    }, {
      id: '9',
      image: '/mongodb.png'
    }, {
      id: '10',
      image: '/mysql.png'
    }, {
      id: '11',
      image: '/next.png'
    }, {
      id: '12',
      image: '/node.png'
    }, {
      id: '13',
      image: '/php.png'
    }, {
      id: '14',
      image: '/postman.png'
    }, {
      id: '15',
      image: '/r.png'
    }, {
      id: '16',
      image: '/react.png'
    }, {
      image: '/redux.png'
    }, {
      id: '17',
      image: '/sas.png'
    }, {
      id: '18',
      image: '/spss.png'
    }, {
      id: '19',
      image: '/sql.png'
    }, {
      id: '20',
      image: '/typescript.png'
    }
    , {
      id: '21',
      image: '/git.png'
    }, {
      id: '7',
      image: '/javascript2.png'
    }
  ]
  
  useEffect(() => {
    Aos.init({ duration: 2000 });

    const handleScroll = () => {
      Aos.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='main-skills-container' id='skills'>
      <div className='main-skills-container-title' 
        ><h2>Skills</h2>
        <span>Take a look on my frontend, backend, and statistical skills</span></div>
      
    <div className="skills-container">
      {imageContainer.map((item) => (
        <div className='image-container'>
        <Image
          key={item.id}
          src={item.image}
          alt={`Skill ${item.id + 1}`}
          width={60}
          height={60}
          />
          {/* <div>hi</div> */}
          </div>
      ))}
      </div>
    </div>
  )
}

export default Skills

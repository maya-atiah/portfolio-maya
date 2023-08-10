import Experience from '@/components/layout/Experience'
import Home from '@/components/layout/Home'
import Skills from '@/components/layout/Skills'
import ContactUs from '@/components/layout/ContactUs'
import ProjectsSection from '@/components/layout/ProjectsSection'
import { useEffect } from "react";
import About from '@/components/layout/About'
import { useRouter } from 'next/router'


const projectsData = [
  {
    id: '1',
    title: 'Vital Blood',
    details: 'Blood Donation website built with MERN Stack',
    image: '/vitalBLood.png',
    imageArray: ['/volunteers.png', '/feed.png', '/signup.png'],
    deployed: 'https://vitalblood.netlify.app/',
    videoDemo:'https://drive.google.com/file/d/19u-6SfINc-7pVzHPuLbMj3E4v5iYoBot/view?usp=drive_link',
    moreDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat lorem eget ultrices rhoncus. In quis tristique elit. Fusce sed ultricies felis. Vivamus nisl sapien, finibus vitae varius in, varius vel est. In eu dapibus arcu. Aenean nec aliquet orci, vel scelerisque justo. Aenean dui tortor, pulvinar vel eros vitae, eleifend mollis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dolor magna, ultrices vel sollicitudin at, ultrices ac arcu.'

  },
  {
    id: '2',
    title: 'StepUp',
    details: 'E-commerce website built with MERN Stack',
    image: '/stepUp.png',
    imageArray: ['/cart.png', '/dashboard.png', '/login.png'],
    deployed: 'https://ecom.khankanko.com/',
    videoDemo: 'https://drive.google.com/file/d/1ZsNs2fpIsYqQhqL3S2g-bK30hHnpEGVB/view?usp=drive_link',
    moreDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat lorem eget ultrices rhoncus. In quis tristique elit. Fusce sed ultricies felis. Vivamus nisl sapien, finibus vitae varius in, varius vel est. In eu dapibus arcu. Aenean nec aliquet orci, vel scelerisque justo. Aenean dui tortor, pulvinar vel eros vitae, eleifend mollis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dolor magna, ultrices vel sollicitudin at, ultrices ac arcu.'


  },
  {
    id: '3',
    title: 'Learning Management System',
    details: 'LMS website built with LAMP Stack',
    image: '/lms.png',
    imageArray: ['/courses.png', '/attendance.png', '/report.png'],
    videoDemo: 'https://drive.google.com/drive/folders/1Jk2ecoI8U95SQ_VOBU5S_f-jSyyg0zPG',
    moreDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat lorem eget ultrices rhoncus. In quis tristique elit. Fusce sed ultricies felis. Vivamus nisl sapien, finibus vitae varius in, varius vel est. In eu dapibus arcu. Aenean nec aliquet orci, vel scelerisque justo. Aenean dui tortor, pulvinar vel eros vitae, eleifend mollis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dolor magna, ultrices vel sollicitudin at, ultrices ac arcu.'

  },
  {
    id: '4',
    title: 'Portfolio for a client',
    details: 'Portfoilio website built with MERN Stack',
    image: '/portfolio.png',
    imageArray: ['/skills.png', '/experience.png', '/aboutme.png'],
    deployed: 'https://team6-frontend-fake-client.netlify.app/',
    moreDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat lorem eget ultrices rhoncus. In quis tristique elit. Fusce sed ultricies felis. Vivamus nisl sapien, finibus vitae varius in, varius vel est. In eu dapibus arcu. Aenean nec aliquet orci, vel scelerisque justo. Aenean dui tortor, pulvinar vel eros vitae, eleifend mollis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dolor magna, ultrices vel sollicitudin at, ultrices ac arcu.'

  },
];
const HomePage = (props) => {
  const router = useRouter();
  const sectionToScroll = router.query.section;

  // ...

  useEffect(() => {
    if (sectionToScroll) {
      const sectionElement = document.getElementById(sectionToScroll);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sectionToScroll]);


  return (

    <>
      <Home />
      <About id="about" />
      <Experience id="experience" />
      <Skills id="skills" />
      <ProjectsSection id="projects" projectsData={props.projectsData} />
      <ContactUs id="contact" />
    </>

  )
}

//if i am fetching data no need to use usestate or use effect just i pass the props
export  async function getStaticProps() {
  //fetch data from an api 
  return {
    props: {
      projectsData: projectsData
    },
    revalidate:1
  }
}

export default HomePage


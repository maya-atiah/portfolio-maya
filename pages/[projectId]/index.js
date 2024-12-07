import ProjectDetails from "@/components/layout/ProjectDetails";

const projectsData = [
    {
        id: '1',
        title: 'Vital Blood',
        details: 'Blood Donation website built with MERN Stack',
        image: '/vitalBLood.png',
        imageArray: ['/volunteers.png', '/feed.png', '/signup.png'],
        deployed: 'https://vitalblood.netlify.app/',
        videoDemo: 'https://drive.google.com/file/d/19u-6SfINc-7pVzHPuLbMj3E4v5iYoBot/view?usp=drive_link',
        moreDetails: 'Vital Blood is a blood donation website built with MERN Stack. Users can request blood donations by submitting a form.  Once submitted, the system automatically sends out emails and notifications to potential donors. To facilitate the donation process, I have implemented a "Feed" page where donors can browse and find requests. They can then express their willingness to donate and patiently wait for acceptance or rejection from the requester. This seamless communication is made possible through the user profile feature, which requires users to log in and manage their donation journey. As well the website includes authentication, and authorization where the user should sign in or sign up to make a request, donation, accept or reject from the user\'s profile.'

    },
    {
        id: '2',
        title: 'StepUp',
        details: 'E-commerce website built with MERN Stack',
        image: '/stepUp.png',
        imageArray: ['/cart.png', '/dashboard.png', '/login.png'],
        // deployed: 'https://ecom.khankanko.com/',
        videoDemo: 'https://drive.google.com/file/d/1ZsNs2fpIsYqQhqL3S2g-bK30hHnpEGVB/view?usp=drive_link',
        moreDetails: ' StepUp is a dynamic e-commerce website developed using the MERN stack. It offers a diverse selection of categories, each housing a wide range of products with various sizes, colors, and quantities. Customers can easily browse and search for their preferred shoes, adding them to their cart. To complete the order, a simple registration process is required. The admin, accessible through authorized login, manages the platform. This includes overseeing orders, updating product details, and enhancing site descriptions. StepUp ensures a user-friendly shopping experience and efficient order management, making it a seamless hub for online shopping.'


    },
    {
        id: '3',
        title: 'Learning Management System',
        details: 'LMS website built with LAMP Stack',
        image: '/lms.png',
        imageArray: ['/courses.png', '/attendance.png', '/report.png'],
        videoDemo: 'https://drive.google.com/drive/folders/1Jk2ecoI8U95SQ_VOBU5S_f-jSyyg0zPG',
        moreDetails: 'Introducing a comprehensive Learning Management System app developed using ReactJS and React Native for the frontend, paired with Laravel (PHP) for the backend. This system offers robust authentication and authorization features, along with a flexible dashboard catering to diverse user roles and their respective privileges. The user roles encompass \'admin\' and \'super admin\', each empowered with distinct rights. The system seamlessly integrates classes, courses, teachers, and students. This entails assigning teachers to specific courses and classes, enrolling students in designated grade sections, and simplifying attendance management for targeted sections. The latter includes generating daily reports to monitor attendance trends effectively.'

    },
    {
        id: '4',
        title: 'Portfolio for a client',
        details: 'Portfoilio website built with MERN Stack',
        image: '/portfolio.png',
        imageArray: ['/skills.png', '/experience.png', '/aboutme.png'],
        deployed: 'https://team6-frontend-fake-client.netlify.app/',
        moreDetails: 'Created a Personal Portfolio utilizing the MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB), incorporating a dashboard and JWT authentication to enable effortless content editing by the administrator.'

    },
    {
        id: '5',
        title: 'Machghalna',
        details: 'Atlier website built with Wordpress',
        image: '/machghlnahome.png',
        imageArray: ['/machghlnaabout.png', '/categories.png', '/contactmachghalna.png'],
        // deployed: 'https://group12.codi-wordpress.com/b09-group12/',
        // videoDemo:'https://drive.google.com/file/d/10sVv5kkZk4Vy4mZ9HnlfuaV9BQ8GFhqW/view?usp=sharing',
        moreDetails: '"Machghalna" is an atelier website created for our client, showcasing her designs and dresses. The website is built with WordPress and consists of various sections including contact, categories (shop), and an about me page.'

    },
    {
        id: '6',
        title: 'My Portfolio',
        details: 'Portfolio built with Nextjs',
        image: '/homePortfolio.png',
        imageArray: ['/experienceportfolio.png', '/projectsportfolio.png', '/singlepageportfolio.png'],
        moreDetails: 'I made my first project using Next.js to learn new technology. It\'s a portfolio where I share my recent projects with pictures and explanations.I also talk about my skills in coding and a bit about myself.In addition to a section that summarizes my experience and education.You can also get my CV to see my skills, links, work experiences, and education.'

    },
];
const projectdetail = (props) => {
    return (
        <div>
            <ProjectDetails data={props.projectSelected} />
        </div>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: projectsData.map(item => ({
            params: {
                projectId: item.id

            }
        }))
    }
}


export async function getStaticProps(context) {
    const projectId = context.params.projectId

    const projectSelected= projectsData.find((item)=> item.id === projectId)
    return {
        props: {
            projectSelected:projectSelected
        }
    }
}

export default projectdetail

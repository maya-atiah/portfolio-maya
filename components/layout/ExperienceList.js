import React from 'react'

const ExperienceList = () => {


    const experienceData = [
        {
            id: '1',
            date: 'Sep 23 - Present ',
            company: 'Creative Technology Solutions',
            position: 'Frontend Developer'
        },
        {
            id: '2',
            date: 'Nov 2022- Jun 2023',
            company: 'Codi-Tech',
            position: 'Full Stack Web Developer Intern'
        },
        {
            id: '3',
            date: 'April 2022 - Jun 2022',
            company: 'Scoope Of Design',
            position: 'Data Analyst'
        },
    ]
    return (
        <>
            <div className='experiencelistdesktop'>
                {experienceData.map((item) => {
                    return (
                        //   <div className="test">
                        //       <div>{ item.company}</div>
                        //               <div>{item.date}</div>
                        //               <div>{ item.position}</div>
                        //   </div>
                        <div key={item.id}>
                            <ul className="list">
                                <li>
                                    <span></span>
                                    <div className="media">
                                        <div className="d-flex">
                                            <p>{item.date}</p>
                                        </div>
                                        <div className="media-body">
                                            <h4>{item.company}</h4>
                                            <p>{item.position}</p>

                                        </div>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className='experiences-container'>
                {experienceData.map((item) => {
                    return (
                        <div >
                            <div className='experienceDate'>
                                <p>{item.date}</p>
                            </div>
                            <div className='experienceComp'>
                                <h4>{item.company}</h4>
                            </div>
                            <div className='experiencePos'>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ExperienceList

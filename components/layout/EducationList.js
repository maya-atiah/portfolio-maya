import React from 'react'

const EducationList = () => {

    const educationData = [
        {
            id:'1',
            date: 'Nov 2021 - Jan 2023 ',
            company: 'Lebanese University',
            position: 'Masters in Statistics'
        },
        {
            id: '2',
            date: 'Sep 2018 - Jun 2021',
            company: 'Lebanese University',
            position: 'License in Applied Mathematics:Statistics'
        },
    

    ]
    return (
      <>
            <div className='experiencelistdesktop'>
          {educationData.map((item) => {
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
                {educationData.map((item) => {
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

export default EducationList

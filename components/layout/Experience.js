import EducationList from "@/components/layout/EducationList"
import ExperienceList from "@/components/layout/ExperienceList"
import { useState } from "react"


const Experience = () => {

   const [showExperience,setShowExperience]=useState(true)
    const [showEducation, setShowEducation] = useState(false)

    const toggleExperience = () => {
        setShowEducation(false)
        setShowExperience(true)
    }
    const toggleEducation = () => {
        setShowEducation(true)
        setShowExperience(false)
    }
  return (
      <div className="test-container" id='experience'>
          <div className="button-container-skill">
              <button
                  className={`button ${showExperience ? 'active' : ''}`}
                  onClick={toggleExperience}
              >
                  <span className="button-content">Experience</span>
              </button>
              <button
                  className={`button ${showEducation ? 'active' : ''}`}
                  onClick={toggleEducation}
              >
                  <span className="button-content">Education</span>
              </button>
          </div>

          {showExperience && <ExperienceList />}
          {showEducation && <EducationList />}
      </div>
  )
}

export default Experience

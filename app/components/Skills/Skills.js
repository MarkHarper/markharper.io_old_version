import React from 'react'
import { skills, skillsChart, softSkills, skillsHeader, skillsList, skillsItem } from './styles.css'
import { container } from 'sharedStyles/styles.css'
import { BarChart } from 'components'

function Skills (props) {
  const style = {
    height: props.height
  }
  return (
    <div className={skills} style={style}>
      <div className={skillsChart}>
        <h3 className={skillsHeader}>Technical Skills</h3>
        <BarChart data={[ 30, 10, 5, 8, 15, 10 ]}
            width={400}
            height={200}
            color="cornflowerblue"
            title="fun" />
      </div>
      <div className={softSkills}>
        <h3 className={skillsHeader}>Soft Skills</h3>
        <ul className={skillsList}>
          <li className={skillsItem}>Leadership</li>
          <li className={skillsItem}>Organization</li>
          <li className={skillsItem}>Punctual</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills

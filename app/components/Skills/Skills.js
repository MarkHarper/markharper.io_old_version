import React from 'react'
import { skills, skillsChart, softSkills, skillsHeader, skillsList, skillsItem, inDepth, overview } from './styles.css'
import { container } from 'sharedStyles/styles.css'
import { BarChart } from 'components'

function Skills (props) {
  const style = {
    height: props.height
  }
  return (
    <div>
      <div className={skills} style={style} id={overview}>
        <div className={softSkills}>
          <h3 className={skillsHeader}>What can I do?</h3>
          <p>
            Passion has lead me to the intersection of three disciplines: Data Visualization,
             Application Development and User Experience Design. I pride myself on writing performant,
             reliable code that communicates effectively with the end user.
          </p>
        </div>
        <div className={skillsChart}>
          Placeholder
        </div>
      </div>
      <div className={skills} style={style} id={inDepth}>
        <div className={skillsChart}>
          <h3 className={skillsHeader}>Technical Skills</h3>
          {/*<BarChart levels={[ 100, 20, 30, 40, 20, 30 ]}
              categories={['Javascript', 'HTML/CSS', 'React', 'Backbone', 'jQuery', 'Lodash', 'D3', 'p5', 'Bootstrap', 'PureCSS']}
              width={400}
              height={200}
              color="cornflowerblue"
              title="fun" />*/}
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
    </div>
  )
}

export default Skills

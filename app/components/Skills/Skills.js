import React from 'react'
import { skills, skillsChart, softSkills, skillsHeader, skillsList, skillsItem, inDepth, overview } from './styles.css'
import { container } from 'sharedStyles/styles.css'
import { BarChart, VennDiagram } from 'components'

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
          <VennDiagram
              width={1000}
              height={800}/>
        </div>
      </div>
      <div className={skills} style={style} id={inDepth}>
        <div className={skillsChart}>
          <h3 className={skillsHeader}>Tools</h3>
          <BarChart data={[{'HTML/CSS': 85},
            {'Javascript': 95},
            {'D3': 77},
            {'Canvas/SVG': 73},
            {'React': 65},
            {'Backbone': 55},
            {'ProcessingJs': 50}]}
              barPadding={0.1}
              width={800}
              height={400}
              color="cornflowerblue"
              title="fun" />
        </div>
        <div className={softSkills}>
          <h3 className={skillsHeader}>Techniques</h3>
          <ul className={skillsList}>
            <li className={skillsItem}>Object Oriented Programming</li>
            <li className={skillsItem}>Functional Reactive Programming</li>
            <li className={skillsItem}>Flux</li>
            <li className={skillsItem}>Responsive Web Design</li>
            <li className={skillsItem}>Material Design</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills

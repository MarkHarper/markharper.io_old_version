import React from 'react'
import { portfolio, portfolioImg, imgContainer, descriptionContainer, listTitle, list } from './styles.css'
import { container } from 'sharedStyles/styles.css'

function Portfolio (props) {
  const style = {
    height: props.height
  }

  return (
    <div>
      <div id={portfolio} style={style}>
        <section className={descriptionContainer}>
          <h3 className={listTitle}>Factivate</h3>
          <ul className={list}>
            <li>Constructed editable, draggable, resizable charting components, revising UI/UX via iterative testing with internal
              and external teams (C3.js)</li>
            <li>Solved UI/UX & architectural barrier of reading data from HTML5 Canvas and pushing data to the clipboard for the
              application’s cut/copy/paste functionality (jQuery & Javascript)</li>
            <li>Refactored Front-End components to reduce bugs and improve test coverage</li>
            <li>Contributed to daily standups and sprint retrospectives to focus on fast-paced development of an MVP</li>
            <li>Worked with Sales, Marketing and Quality Assurance to bring client recommendations into the product, implement
            user-behavior analytics and reduce feature regression</li>
          </ul>
        </section>
        <section className={imgContainer}>
          <img className={portfolioImg} src="./images/factivate.png"/>
        </section>
      </div>
      <div id={portfolio} style={style}>
        <section className={imgContainer}>
          <img className={portfolioImg} src="./images/big.png"/>
        </section>
        <section className={descriptionContainer}>
          <h3 className={listTitle}>Build It Green</h3>
          <ul className={list}>
            <li>Built a responsive single-page web application with Backbone.js</li>
            <li>Used D3.js to build over 40 visualizations, pulling in LEED scoring data from a Django API</li>
            <li>Created a clean, distinct Front End design with Google's Material Design Lite to display over 80 charts</li>
            <li>Connected unique content to each chart using both D3.js and jQuery</li>
            <li>Collaborated with Back End team members to establish an effective git workflow</li>
          </ul>
        </section>
      </div>
      <div id={portfolio} style={style}>
        <section className={descriptionContainer}>
          <h3 className={listTitle}>Game of Life</h3>
          <ul className={list}>
            <li>Built a responsive single-page web application with Backbone.js</li>
            <li>Used D3.js to build over 40 visualizations, pulling in LEED scoring data from a Django API</li>
            <li>Created a clean, distinct Front End design with Google's Material Design Lite to display over 80 charts</li>
            <li>Connected unique content to each chart using both D3.js and jQuery</li>
            <li>Collaborated with Back End team members to establish an effective git workflow</li>
          </ul>
        </section>
        <section className={imgContainer}>
          <img className={portfolioImg} src="./images/gol.png"/>
        </section>
      </div>
      <div id={portfolio} style={style}>
        <section className={imgContainer}>
          <img className={portfolioImg} src="./images/memory.png"/>
        </section>
        <section className={descriptionContainer}>
          <h3 className={listTitle}>Memory</h3>
          <ul className={list}>
            <li>Built a responsive single-page web application with Backbone.js</li>
            <li>Used D3.js to build over 40 visualizations, pulling in LEED scoring data from a Django API</li>
            <li>Created a clean, distinct Front End design with Google's Material Design Lite to display over 80 charts</li>
            <li>Connected unique content to each chart using both D3.js and jQuery</li>
            <li>Collaborated with Back End team members to establish an effective git workflow</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Portfolio

import React from 'react'
import { portfolio, portfolioImg, imgContainer, descriptionContainer,
  listTitle, list, portfolioTitles, codeBtn, codeHide, liveBtn, liveHide,
  liveContainer, codeContainer, desc, projectDesc, techUsedTitle, techUsed,
  descriptionContainerRight, descRight, imgContainerRight, ref,
  portfolioImgLeft } from './styles.css'
import { container } from 'sharedStyles/styles.css'
import Button from '.././Button/Button.js'

function Portfolio (props) {
  const style = {
    minheight: props.height
  }

  return (
    <div class="portfolio">
      <div className={portfolio} style={style}>
        <section className={descriptionContainer}>
          <div className={desc}>
            <div className={listTitle}>Factivate</div>
            <p className={projectDesc}>
              An intelligent spreadsheet platform with integrations for online platforms
              such as Google Analytics and Facebook. With Factivate, your spreadsheet
              does not require manual updates and can respond to changes in your data
              as they occur.
            </p>
            <h3 className={portfolioTitles}>Involvement</h3>
              <ul className={list}>
                <li>Front End Development, working with an experienced development
                team focused on the fast-paced development of an MVP</li>
                <li>Architected and implemented the charting functionality for the
                spreadsheet, utilizing C3.js and Websockets</li>
                <li>Refactored Front-End components to reduce bugs and improve test
                  coverage using the Intern.js testing framework</li>
              </ul>
            <h3 className={techUsedTitle}>Technologies Used:</h3>
            <p className={techUsed}>
              Require.js, D3.js, C3.js, Bootstrap, jQuery, Django Framework
            </p>
          </div>
        </section>
        <section className={imgContainer}>
          <a href="https://www.factivate.com/"><img className={portfolioImg} src="./images/factivate.png"/></a>
          {/*<div>
            <Button a={true} content={'Live'}
              class={liveBtn}
              container={liveContainer}
              to={'/images/resume.pdf'}
              target="_blank"
              hideClass={liveHide}>
            </Button>
            <Button a={true} content={'Code'}
              class={codeBtn}
              container={codeContainer}
              to={'/images/resume.pdf'}
              target="_blank"
              hideClass={codeHide}>
            </Button>
          </div>*/}
        </section>
      </div>
      <div className={portfolio} style={style}>
        <section className={descriptionContainerRight}>
          {/*<div className={listTitle}>Build It Green</div>
          <h3 className={portfolioTitles}>Role: Front End Developer</h3>
          <ul className={list}>
            <li>Built a responsive single-page web application with Backbone.js</li>
            <li>Used D3.js to build over 40 visualizations, pulling in LEED scoring data from a Django API</li>
            <li>Created a clean, distinct Front End design with Google's Material Design Lite to display over 80 charts</li>
            <li>Connected unique content to each chart using both D3.js and jQuery</li>
            <li>Collaborated with Back End team members to establish an effective git workflow</li>
          </ul>*/}
          <div className={descRight}>
            <div className={listTitle}>Build It Green</div>
            <p className={projectDesc}>
              Build it Green is a data analysis project analyzing trends in LEED scoring
              and usage by builders and developers. In total, the project includes analysis
              of over 7000 LEED Construction projects and displayed the findings in
              more than 80 visualizations.
            </p>
            <h3 className={portfolioTitles}>Involvement</h3>
              <ul className={list}>
                <li>Front End Development, working with two Python Developers to craft
                a clean Front End for the various, colorful visualizations in the project</li>
                <li>Built over 40 D3.js visualizations, including datamaps, bar and line
                charts</li>
                <li>Collaborated with Backend team members to structure the Django API
                for retrieving the LEED scoring data</li>
              </ul>
              <h3 className={techUsedTitle}>Technologies Used:</h3>
              <p className={techUsed}>
                Backbone.js, Gulp.js, Underscore.js, D3.js, MDL, jQuery, Django Framework
              </p>
          </div>
        </section>
        <section className={imgContainerRight}>
          <a href="https://github.com/Data-Science-TIY/builditgreen"><img className={portfolioImgLeft} src="./images/big.png"/></a>
          {/*<div>
            <Button a={true} content={'Live'}
              class={liveBtn}
              container={liveContainer}
              to={'/images/resume.pdf'}
              target="_blank"
              hideClass={liveHide}>
            </Button>
            <Button a={true} content={'Code'}
              class={codeBtn}
              container={codeContainer}
              to={'/images/resume.pdf'}
              target="_blank"
              hideClass={codeHide}>
            </Button>
          </div>*/}
        </section>
      </div>
      <div className={portfolio} style={style}>
        <section className={descriptionContainer}>
          <div className={desc}>
            <div className={listTitle}>Game of Life</div>
            <p className={projectDesc}>
              This project is a variation on the cellular automaton known as <a className={ref}
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's
              Game of Life</a>. Each round of the game displays new and surviving cells.
              This version differs from the original in that each cell carries a maturity
              level from round to round and new cells receive their color from neighbors.
            </p>
            <h3 className={portfolioTitles}>Involvement</h3>
              <ul className={list}>
                <li>Utilized sound Object Oriented Programming design to create the
                game logic that drives each round</li>
                <li>Added the non-Standard conditions (maturity and inheritance) while
                maintaining high performance</li>
              </ul>
              <h3 className={techUsedTitle}>Technologies Used:</h3>
              <p className={techUsed}>
                Javascript, HTML5 Canvas
              </p>
          </div>
        </section>
        <section className={imgContainer}>
          <a href="http://markharper.io/GameOfLife/"><img className={portfolioImg} src="./images/gol.png"/></a>
          {/*<div>
            <Button a={true} content={'Live'}
              class={liveBtn}
              container={liveContainer}
              to={'/images/resume.pdf'}
              target="_blank"
              hideClass={liveHide}>
            </Button>
            <Button a={true} content={'Code'}
              class={codeBtn}
              container={codeContainer}
              to={'/images/resume.pdf'}
              target="_blank"
              hideClass={codeHide}>
            </Button>
          </div>*/}
        </section>
      </div>
      <div className={portfolio} style={style}>
        <section className={descriptionContainerRight}>
          <div className={descRight}>
            <div className={listTitle}>Memory</div>
            <p className={projectDesc}>
              Memory is a simple, yet challenging match recognition game. The game
              can be played comfortably on mobile and desktop platforms. Feel free to
              test yourself on the most challenging level of the game. As far as I
              know, no one has bested it yet.
            </p>
            <h3 className={portfolioTitles}>Involvement</h3>
              <ul className={list}>
                <li>Built a fluid grid system with CSS to ease the implementation
                  of responsive web design</li>
                <li>Created a card flipping CSS animation to improve
                 the user experience of the game</li>
                <li>Utilized Backbone.js to separate the view logic for the start
                  page and game page</li>
              </ul>
              <h3 className={techUsedTitle}>Technologies Used:</h3>
              <p className={techUsed}>
                Javascript, jQuery, Backbone.js, Gulp.js
              </p>
          </div>
        </section>
        <section className={imgContainerRight}>
          <a href="http://markharper.io/memory-game/"><img className={portfolioImgLeft} src="./images/memory.png"/></a>
          {/*<div>
            <Button a={true} content={'Live'}
              class={liveBtn}
              container={liveContainer}
              to={'/images/resume.pdf'}
              target="_blank"
              hideClass={liveHide}>
            </Button>
            <Button a={true} content={'Code'}
              class={codeBtn}
              container={codeContainer}
              to={'/images/resume.pdf'}
              target="_blank"
              hideClass={codeHide}>
            </Button>
          </div>*/}
        </section>
      </div>
    </div>
  )
}

export default Portfolio

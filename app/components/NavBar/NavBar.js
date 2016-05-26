import React, { Component } from 'react'
import { link, activeLink, lightBtn, resume } from 'sharedStyles/styles.css'
import { Link } from 'react-router'
import { name, nav, icon, hide, nameLink, navbar, btnResume } from './styles.css'
import Button from '.././Button/Button.js'
import Menu from './Menu.js'
import Burger from './Burger.js'

class NavBar extends Component {
  constructor () {
    super()
    this.state = {
      showing: false,
      burger: window.innerWidth > 850 ? false : true
    }

    this.handleResize = this.handleResize.bind(this);
  }

  show () {
    this.setState({ visible: true });
    document.addEventListener("click", this.hide.bind(this));
  }

  hide () {
    document.removeEventListener("click", this.hide.bind(this));
    this.setState({ visible: false });
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize () {
    this.setState({
      burger: window.innerWidth > 850 ? false : true
    });
  }

  render () {
    const width = {
      width: window.innerWidth
    };
    const transparent = {
      backgroundColor: 'transparent'
    }
    return (
      <div className={navbar} style={width}>
        <div className={name}>
          <span style={this.props.isMobile ? transparent : {}}
            className={hide}></span>
          <Link to='/' className={nameLink}><img className={icon} src="./images/cafe.svg"/>
            {(this.state.burger || this.props.isMobile) === true ? 'MH' : 'Mark Harper'}
          </Link>
        </div>
        {(this.state.burger || this.props.isMobile) === true ? <Burger showBurger={this.props.showBurger}
          hideBurger={this.props.hideBurger}>
        </Burger> : <Menu location={this.props.location} ></Menu> }
        {(this.state.burger || this.props.isMobile) === true ? '' :
          <Button a={true} content={'R' + String.fromCharCode(233) + 'sum' + String.fromCharCode(233)}
            class={lightBtn}
            container={resume}
            to={'/images/resume.pdf'}
            target="_blank"
            hideClass={btnResume}>
          </Button>
        }
      </div>
    )
  }
}

export default NavBar

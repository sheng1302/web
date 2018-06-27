import React,{ Component } from "react";

class Footer extends Component{

    constructor(props){
        super(props);
        this.state = {
            github: {
                url:"http://github.com/sheng1302",
            },
            personal: {
                url: "mailto:sheng1302@gmail.com"
            },
            images:{
                git_img:require('../images/gh.svg'),
                email_img: require('../images/envelope.png')
            }
        }
    }
    render(){
        return(
            <div className="container-fluid-self contact-bg" id="contact">
               
            <div className="content">
                <h3>Aspiring to become a Software Engineer.</h3>
                <ul className="social-icon-list">
                    <li className="social-icon-item"> 
                        <a className="link" href={this.state.github.url}>
                            <img className="social-icon-img" src={this.state.images.git_img} alt="More projects on github"/> </a>
                    </li>

                    <li className="social-icon-item"> 
                        <a className="link" href={this.state.personal.url} >
                            <img className="social-icon-img" src={this.state.images.email_img} alt="Contact me through Email"/> </a>
                    </li>

                </ul>
                <p>© 2018 All rights reserved.</p>
                </div>

            
            </div>

        )
    }
}

export default Footer;
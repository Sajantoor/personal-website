import React from 'react';
// eslint-disable-next-line
import styles from '../styles/projects.css';
import { ReactComponent as Link } from '../assets/icons/link.svg';


class Projects extends React.Component {
    constructor(props) {
        super(props); 
        this.scroll = this.scroll.bind(this);
        this.state = {
            more: false,
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.scroll);
    }

    scroll() {
        let element = this.refs.projects;
        let boundingClient = element.getBoundingClientRect(); 
        let elementTopPos = boundingClient.top;
        let elementBottomPos = boundingClient.bottom;

        console.log(elementBottomPos);

        if (elementTopPos < 300 && elementBottomPos >= 300) {
            if (this.props.backgroundColor) {
                element.parentNode.style.backgroundColor = this.props.backgroundColor;

            } else {
                element.parentNode.removeAttribute('style');
            }
        }
    }

    render() {
        return(
            <div className="projects" ref="projects">
                <div className="projectContain">
                    <h1 className={!this.state.more ? "projectTitle" : "titleMore" }> { this.props.title } </h1>
                    <h2 className={!this.state.more ? "projectSub" : "subMore" }> { this.props.subtitle } </h2>
                    
                    {this.state.more && 
                        <React.Fragment>
                            <p className="description"> {this.props.description} </p>
                
                                { this.props.icons && 
                                    <div className="projectIcons"> 
                                     { this.props.icons.map((Component, key) => (<a target="_blank" rel="noopener noreferrer" href={Component.link}> {Component.component} </a> )) }
                                     </div> 
                                } 
                      
                            <a target="_blank" rel="noopener noreferrer" href={this.props.link}> <button className="link"> {this.props.linkText} </button> </a>
                   
                        </React.Fragment>
                    }

                    <div className="imgContain"> 
                        <img className={!this.state.more ? "img" : "imgMore"} src={this.props.img} alt=""/>
                    </div>
                </div>

                <div className="projectCaption">
                    {!this.state.more && 
                        <p className="caption"> {this.props.caption} </p> 
                    }
                    
                    <button className="more" onClick={() => this.setState({more: !this.state.more})}> {!this.state.more ? "MORE" : "X"} </button>

                    {this.props.embed && 
                        <a target="_blank" rel="noopener noreferrer" href={this.props.embed}> <Link/> </a>
                    } 
                    
                </div>
            </div>
        )
    }
}

export default Projects;
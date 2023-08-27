import React from 'react';
// eslint-disable-next-line
import styles from '../styles/projects.css';
import { ReactComponent as Link } from '../assets/icons/link.svg';


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
        this.myRef = React.createRef();
        this.state = {
            more: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    scroll() {
        let element = this.myRef.current;
        let boundingClient = element.getBoundingClientRect();
        let elementTopPos = boundingClient.top;
        let elementBottomPos = boundingClient.bottom;
        // 0 is when in view 300 is a little earlier so it's complete due to the time of the animation
        if (elementTopPos < 300 && elementBottomPos >= 300) {
            // update background color if avaiable
            if (this.props.backgroundColor) {
                element.parentNode.style.backgroundColor = this.props.backgroundColor;
            } else {
                element.parentNode.removeAttribute('style');
            }
        }
    }

    render() {
        return (
            <div className="projects" ref={this.myRef}>
                <div className="projectContain" onClick={() => this.setState({ more: !this.state.more })}>
                    <h1 className={!this.state.more ? "projectTitle" : "titleMore"}> {this.props.title} </h1>
                    <h2 className={!this.state.more ? "projectSub" : "subMore"}> {this.props.subtitle} </h2>

                    {this.state.more &&
                        <React.Fragment>
                            <div className="description">
                                {this.props.children}
                            </div>

                            {this.props.icons &&
                                <div className="projectIcons">
                                    {this.props.icons.map((Component, key) => (<a target="_blank" rel="noopener noreferrer" href={Component.link} key={key}> {Component.component} </a>))}
                                </div>
                            }

                            <a target="_blank" rel="noopener noreferrer" href={this.props.link}> <button className="link"> {this.props.linkText} </button> </a>

                        </React.Fragment>
                    }

                    <div className="imgContain">
                        <img className={!this.state.more ? "img" : "imgMore"} src={this.props.img} alt="" />
                    </div>
                </div>

                <div className="projectCaption">
                    {!this.state.more &&
                        <p className="caption"> {this.props.caption} </p>
                    }

                    <button className="more" onClick={() => this.setState({ more: !this.state.more })}> {!this.state.more ? "MORE" : "X"} </button>

                    {this.props.embed &&
                        <a target="_blank" rel="noopener noreferrer" href={this.props.embed}> <Link /> </a>
                    }

                </div>
            </div>
        )
    }
}

export default Projects;
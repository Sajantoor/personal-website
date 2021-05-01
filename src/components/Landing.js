import React from 'react';
// eslint-disable-next-line
import styles from '../styles/landing.css';
import mountainImg from '../assets/img/mountains-cropped.png';
import { ReactComponent as TitleAsset } from '../assets/shapes/TitleAsset.svg';
import { ReactComponent as Asset1 } from '../assets/shapes/Asset_1.svg';
import { ReactComponent as Asset2 } from '../assets/shapes/Asset_2.svg';
import { ReactComponent as TripleTriangle } from '../assets/shapes/TripleTriangle.svg';
import { ReactComponent as DoubleTriangle } from '../assets/shapes/DoubleTriangle.svg';
import { ReactComponent as Circle } from '../assets/shapes/Circle.svg';


class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: ["Programmer", "Designer", "Student"],
      index: 0,
      currentWord: null,
      wordIndex: 0,
      finishedWord: false,
      timeout: 0,
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="title-contain">
          <h1> Sajan Toor </h1>
          <h2> I'm a <span className="highlight"> {this.state.currentWord}. </span> </h2>
          <div className="asset-contain"> 
            <TitleAsset/>
          </div>
          {/* <Asset1/>
          <TripleTriangle/>
          <DoubleTriangle/>
          <Asset2/>
          <Circle/> */}
        </div>
        <img src={mountainImg} alt=""/>
      </div>
    )
  }


  componentDidMount() {
    setInterval(this.typing, 100, this);
  }

  /**
   * Typing effect on landing page
   */
  typing(_this) {
    const this_ = _this;
    let index = this_.state.index;
    let word = this_.state.subtitle[index];
    let wordLength = this_.state.subtitle[index].length;
    let wordIndex = this_.state.wordIndex;
    let currentWorld = this_.state.currentWord;
    let finishedWord = this_.state.finishedWord;
    let timeout = this_.state.timeout;

    if ((wordLength >= wordIndex) && !finishedWord) {
      wordIndex++;
    }

    if ((wordIndex - 1) === wordLength) {
      timeout++;
      if (timeout === 10) {
        finishedWord = true;
      }
    }

    if ((wordIndex > 0) && finishedWord) {
      wordIndex--;
    }

    if ((wordIndex === 0) && finishedWord) {
      if (index === 2) {
        index = 0;
      } else {
        index++;
      }
      timeout = 0;
      finishedWord = false;
    }

    currentWorld = word.substring(0, wordIndex);

    this_.setState({currentWord: currentWorld, wordIndex: wordIndex, finishedWord: finishedWord, index: index, timeout: timeout});
  }
}

export default Landing;

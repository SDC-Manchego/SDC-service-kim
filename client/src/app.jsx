/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
// importing react
import React from 'react';
import ReactDOM from 'react-dom';

// importing jquery $
import $ from 'jquery';

// importing transitions
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../public/style.css';

// importing React Components
import Card from './card.jsx';
import styles from './styles.js';
import SmallCard from './smallcard.jsx';
import Zoom from './zoom.jsx';

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPic: '',
      photos: [],
      zoomed: false,
      count: 0,
      nextOrPrev: true,
    };
    this.changeMainPic = this.changeMainPic.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
  }

  componentDidMount() {
    this.getAllPhotos(this.urlProductId());
  }

  getAllPhotos(id) {
    $.ajax({
      url: 'http://localhost:3001/api/photos',
      type: 'GET',
      data: { product_id: id },
      success: (photos) => {
        this.setState({
          mainPic: photos[0],
          photos,
        });
      },
    });
  }

  urlProductId() {
    const questMarkLocation = (window.location.href).indexOf('?');
    if (questMarkLocation === -1) {
      return '1';
    }
    return (window.location.href).slice(questMarkLocation + 1);
  }

  changeMainPic(newMainPic) {
    this.setState({
      mainPic: newMainPic,
    });
  }

  nextProp() {
    const newIdx = this.state.mainPic.index + 1;

    this.setState({
      mainPic: this.state.photos[newIdx],
      count: newIdx,
      nextOrPrev: true,
    });
  }

  prevProp() {
    const newIdx = this.state.mainPic.index - 1;

    this.setState({
      mainPic: this.state.photos[newIdx],
      count: newIdx,
      nextOrPrev: false,
    });
  }

  toggle(key) {
    const newCount = key;

    if (newCount > this.state.count) {
      this.setState({
        count: newCount,
        nextOrPrev: true,
      });
    } else {
      this.setState({
        count: newCount,
        nextOrPrev: false,
      });
    }
  }

  toggleZoom() {
    const prevZoom = this.state.zoomed;
    this.setState({
      zoomed: !prevZoom,
    });
  }

  render() {
    const { zoomed } = this.state;
    const { nextOrPrev } = this.state;

    return (
      <div>
        <div>
          {zoomed ? (
            <Zoom toggleZoom={this.toggleZoom} pics={this.state.photos} />
          ) : (
            <div style={styles.productContainer}>
              <div style={styles.leftGroup}>
                {this.state.photos.map((photo, i) => (
                  <SmallCard
                    changeMainPic={this.changeMainPic}
                    toggle={this.toggle}
                    pic={photo}
                    key={i}
                  />
                ))}
              </div>
              <div style={styles.rightGroup}>
              <button
                style={styles.button}
                onClick={() => this.prevProp()}
                disabled={this.state.mainPic.index === 0}
              >
                &#8592;
              </button>
              <TransitionGroup style={styles.slider}>
                <CSSTransition
                  in
                  key={this.state.count}
                  timeout={900}
                  classNames={nextOrPrev ? 'mainPicNext' : 'mainPicPrev'}
                  appear={false}
                >
                  <Card pic={this.state.mainPic} toggleZoom={this.toggleZoom} />
                </CSSTransition>
              </TransitionGroup>
              <button
                style={styles.button}
                onClick={() => this.nextProp()}
                disabled={
                  this.state.mainPic.index === this.state.photos.length - 1
                }
              >
                &#8594;
              </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoCarousel;

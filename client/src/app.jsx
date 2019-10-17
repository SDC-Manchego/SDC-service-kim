import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Card from './card.jsx';
import styles from './styles.js';
import SmallCard from './smallcard.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPic: '',
      photos: [],
      counter: 0
    }
    this.changeMainPic = this.changeMainPic.bind(this);
  }

  componentDidMount() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    $.ajax({
      url: '/api/photos',
      type: 'GET',
      success: (photos) => {
        console.log('DEEEZ DEM PHOTOS ---->', photos);
        console.log('mainPic???--->', photos[0].image_url);
        this.setState({
          mainPic: photos[0],
          photos: photos
        });
      }
    });
  }
  // click handler for changing mainpic based off smolpic (need to make component now)
  changeMainPic(newMainPic) {
    this.setState({
      mainPic: newMainPic
    })
  }

  nextProp () {
    const newIdx = this.state.mainPic.index+1
    this.setState({
      mainPic: this.state.photos[newIdx]
    })
  }

  prevProp () {
    const newIdx = this.state.mainPic.index-1;
    this.setState({
      mainPic: this.state.photos[newIdx]
    })
  }

  increase() {
    this.setState({
      counter: this.state.counter+1
    })
  }

  render() {
    return(
      <div>
        <div style={styles.productContainer}>
        <div className='test' style={styles.leftGroup}>
        {this.state.photos.map((photo) =>
          <SmallCard
          changeMainPic={this.changeMainPic}
          pic={photo}/>
          )}
        </div>
          <button
          style={styles.button}
          onClick={() => this.prevProp()}
          disabled={this.state.mainPic.index === 0}
          ><i class="fas fa-arrow-left"></i></button>
          <Card pic={this.state.mainPic}/>
          <button
          style={styles.button}
          onClick={() => this.nextProp()}
          disabled={this.state.mainPic.index === this.state.photos.length-1}
          ><i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    )
  }
}

export default App;
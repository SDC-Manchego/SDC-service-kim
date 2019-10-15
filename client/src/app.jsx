import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Card from './card.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPic: '',
      photos: []
    }
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
  // changeMainPic() {
  //   this.setState({
  //     mainPic: this.props.image_url
  //   });
  // }
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



  render() {
    return(
      <div>
        <button
        onClick={() => this.prevProp()}
        disabled={this.state.mainPic.index === 0}
        >Prev</button>
        <button
        onClick={() => this.nextProp()}
        disabled={this.state.mainPic.index === this.state.photos.length-1}
        >Next</button>
        <Card pic={this.state.mainPic}/>
        {this.state.photos.map((photo) =>
          <img src={photo.image_url}/>)}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


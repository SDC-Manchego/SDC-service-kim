// default imports for enzyme/jest to work
import React from 'react';
// enzyme methods used to test
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'regenerator-runtime/runtime';
// different files to import and test
import App from './app.jsx';
import Card from './card.jsx';
import SmallCard from './smallcard.jsx';
// const $ = require('jquery');




// jest.mock('$', () => {
//   const exampleData = {
//     color: "Hyllie dark gray",
//     image_url: "https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey1.webp",
//     index: 0,
//     product: "FRIHETEN",
//     __v: 0,
//     _id: "5da6065f3f62872d264391aa"
//   }

//   return {
//     get: jest.fn(() => Promise.resolve(exampleData)),
//   };
// });

// configure adapter for react 16
Enzyme.configure({ adapter: new Adapter() });

describe('App Unit Tests', () => {
  it('renders to page', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Has initial state', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state('mainPic')).toEqual('');
    expect(wrapper.state('photos')).toEqual([]);
  });

  // jest.mock('$');
  // it('should import data with getAllPhotos', () => {
  //   const resp = {data: imageProps};
  //   $.ajax.mockResolvedValue(resp);

  //   return App.all().then(data => expect(data).toEqual(imageProps));
  //   // const wrapper = shallow(<App />);
  //   // const instance = wrapper.instance();

  //   // expect(wrapper.state('mainPic')).toEqual('');
  //   // instance.componentDidMount()


  // });

  it('renders SmallCard to page', () => {
    const wrapper = shallow(<SmallCard pic={imageProps} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders Card to page', () => {
    const wrapper = shallow(<Card pic={imageProps} />);

    expect(wrapper.exists()).toBe(true);
  });


});

const imageProps = {
  color: "Hyllie dark gray",
  image_url: "https://davidfuentsmedia.s3-us-west-1.amazonaws.com/ikeaGrey1.webp",
  index: 0,
  product: "FRIHETEN",
  __v: 0,
  _id: "5da6065f3f62872d264391aa"
}
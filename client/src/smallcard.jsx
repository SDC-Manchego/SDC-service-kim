import React from 'react';
import styles from './styles.js';


const SmallCard = (props) => (
  <img
  onClick={() => props.changeMainPic(props.pic)}
  style={styles.smolCard} src={props.pic.image_url}/>
)

export default SmallCard;
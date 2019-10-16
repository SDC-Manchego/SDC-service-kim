import React from 'react';
import styles from './styles.js';

const Card = ({pic}) => (
  <img style={styles.mainCard} src={pic.image_url}/>
)

export default Card;
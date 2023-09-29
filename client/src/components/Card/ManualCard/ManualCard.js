import React from 'react';
import { Link } from 'react-router-dom';

import './ManualCard.css';

const PayCard = ({ props }) => {
  return (
    <li className='manualcard'>
      <a href={props.link} className='text-default' target='_blank'>
        <div className='paycard__eyecatch' style={{ backgroundImage: `url(/asset/img/${props.image})` }}>
        </div>
        <h6 className='manualcard__title text-center'>{props.title}</h6>
      </a>
    </li>
  )
}

export default PayCard;
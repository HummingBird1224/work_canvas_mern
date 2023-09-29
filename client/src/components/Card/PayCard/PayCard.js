import React from 'react';
import { Link } from 'react-router-dom';

import './PayCard.css';

const PayCard = ({ props, prelink }) => {
  return (
    <li className='paycard'>
      <Link to={prelink + props.link} className='text-default'>
        <div className='paycard__eyecatch' style={{ backgroundImage: `url(/asset/img/${props.image})` }}>
        </div>
        <h6 className='paycard__title'>{props.title}</h6>
        <p>{props.description}</p>
      </Link>
    </li>
  )
}

export default PayCard;
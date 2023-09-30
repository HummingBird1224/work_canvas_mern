import React from 'react';
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './EnterpriseCard.css';

const EnterpriseCard = ({ props }) => {
  return (
    <div className={props.widthFit ? 'enterprise__card width-fit' : 'enterprise__card'}>
      <Link to={'enterprise/' + props.path} className='text-default'>
        <div className='enterprise__card__title d-flex '>
          {props.icon}
          <h5 className='font-800'>{props.name}</h5>
        </div>
        <p className='enterprise__card__description text-gray'>
          {props.before && props.before}
          <strong>{props.strong}</strong>
          {props.after}
          <br />
          {props.small && <span className='script__small'>{props.small}</span>}
        </p>
        <div className='enterprise__card__info d-flex'>
          {props.info && props.info.map((pInfo) => (
            <div key={pInfo.name}>
              <h2>{pInfo.number}</h2>
              <p>{pInfo.name}</p>
            </div>
          ))}
        </div>
        <p className='enterprise__card__link'>
          {props.link}
          <ChevronRightIcon />
        </p>
      </Link>
    </div>
  )
}

export default EnterpriseCard;
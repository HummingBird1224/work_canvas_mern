import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const SingleRadioBox = (props) => {
  return (
    <div className="u-mt-sm">
      <h4>{props.title}</h4>
      <ul className="form--type_checkbox_card">
        <li >
          <input
            type="radio"
            className="form--type_radio_card formPart"
            name={props.name}
            value="1"
            id={"radiobutton0_" + props.name}
            onChange={(event) => props.handleChange(event)}
            checked={props.value == '1'}
          />
          <label htmlFor={"radiobutton0_" + props.name}>
            はい
            <div className='checked__icon'>
              <CheckOutlinedIcon fontSize='small' />
            </div>
          </label>
        </li>

        <li>
          <input
            type="radio"
            className="form--type_radio_card formPart"
            name={props.name}
            value="0"
            id={"radiobutton1_" + props.name}
            onChange={(event) => props.handleChange(event)}
            checked={props.value == '0'}
          />
          <label htmlFor={"radiobutton1_" + props.name}>
            いいえ
            <div className='checked__icon'>
              <CheckOutlinedIcon fontSize='small' />
            </div>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default SingleRadioBox;
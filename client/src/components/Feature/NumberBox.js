import React from 'react';

const NumberBox = (props) => {
  return (
    <div className="u-mt-sm">
      <h4>{props.title}</h4>
      <div className="u-d-flex">
        <input
          type="number"
          className="form--type_text formPart"
          name={props.name}
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={(event) => props.handleChange(event)}
        />
        <span style={{ margin: 'auto 0' }} className="u-pl-xs">
          {props.unit}
        </span>
      </div>
    </div>
  )
}

export default NumberBox;
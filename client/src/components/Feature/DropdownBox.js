import React from 'react';

const DropdownBox = (props) => {
  return (
    <div className="u-mt-sm">
      <h4>{props.title}</h4>
      <div className="u-w-100">
        <select
          className="form--type_select u-w-100 formPart"
          name={props.name}
          style={{ borderRadius: 4 }}
          value={props.value ? props.value : ''}
          onChange={(event) => props.handleChange(event)}
        >
          <option value="">選択してください</option>
          {props.options.length > 0 && props.options.map(option => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))}
        </select>
      </div>
    </div >
  );
}

export default DropdownBox;
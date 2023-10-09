import React from 'react';

const TextBox = (props) => {
  return (
    <div className="u-mt-sm">
      <h4>{props.title}</h4>

      <input
        type="text"
        className="form--type_text formPart"
        name={props.name}
        placeholder={props.placeholder}
        maxLength={props.maxlength}
        onChange={(event) => props.handleChange(event)}
        value={props.value ? props.value : ''}
      />
    </div>
  )
}

export default TextBox;
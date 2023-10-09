import React from 'react';

const Checkbox = (props) => {
  const { box, data, setData } = props;
  const handleChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setData({
        ...data, [props.name]: [
          ...props.value, value
        ]
      });
    }
    else {
      const newArray = [...props.value];
      const index = newArray.indexOf(value);
      newArray.splice(index, 1)
      index !== -1 &&
        setData({
          ...data, [props.name]: [
            ...newArray
          ]
        });
    }
  }

  return (
    <div className="form--type_checkbox_group mr-2">
      <input
        type="checkbox"
        className="formPart"
        id={box.name + '_' + box.value}
        name={box.name}
        value={box.value}
        onChange={handleChange}
        checked={props.checked}
      />
      <label htmlFor={box.name + '_' + box.value}>
        <span>{box.text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
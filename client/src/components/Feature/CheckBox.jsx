import { answer } from '../../actions/action.js';

function PartTime({ props }) {
  const handleClick = (event) => {
    var { name, value } = event.target;
    console.log('this is the console from the es6 syntax', name, value);
    answer();
  };

  return (
    <div className="form--type_checkbox_group">
      <input type="checkbox" className="formPart" id={"insurance_type" + props.value} name="insurance_type" value={props.value} onClick={ handleClick }/>
      <label htmlFor={"insurance_type" + props.value}>
        <span>{props.text}</span>
      </label>
    </div> 
  );
};

export default PartTime;
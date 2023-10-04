const CheckBox = ({ props }) => {
    return (
        <div className="form--type_checkbox_group">
            <input type="checkbox" className="formPart" id={"checkbox_4iZknn7ZsCDpQP5gt_" + props.value} name="6_4iZknn7ZsCDpQP5gt" value={props.value} />
            <label for={"checkbox_4iZknn7ZsCDpQP5gt_" + props.value}>
                <span>{props.text}</span>
            </label>
        </div>
    );
};

export default CheckBox;
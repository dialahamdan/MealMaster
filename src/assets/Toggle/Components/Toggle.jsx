import PropTypes from "prop-types";
import "./Toggle.css";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  );
};

Toggle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

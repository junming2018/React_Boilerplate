import PropTypes from "prop-types";

const Text = (props) => {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  className: "",
  children: "",
};

export default Text;

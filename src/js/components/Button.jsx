import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <>
      <button
        className={
          "rounded-[8px] border-[1px] border-solid border-transparent px-[1.2em] py-[0.6em] text-[1em] text-white font-[500] bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[0.25s] hover:border-[#646cff] focus:outline-[4px] focus:outline focus:outline-white " +
          props.className
        }
        type="button"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  count: PropTypes.number,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  count: 0,
  children: "",
};

export default Button;

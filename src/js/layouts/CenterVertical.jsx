import PropTypes from "prop-types";

const CenterVertical = (props) => {
  return (
    <>
      <div
        className={
          "absolute flex flex-col inset-0 mx-auto my-0 text-center justify-center items-center overflow-y-auto " +
          props.className
        }
      >
        {props.children}
      </div>
    </>
  );
};

CenterVertical.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CenterVertical;

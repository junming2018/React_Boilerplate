import PropTypes from "prop-types";

const centerVertical = (props) => {
  return (
    <>
      <div
        className={
          "absolute flex flex-col inset-0 mx-auto my-0 text-center justify-center items-center " +
          props.className
        }
      >
        {props.children}
      </div>
    </>
  );
};

centerVertical.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default centerVertical;

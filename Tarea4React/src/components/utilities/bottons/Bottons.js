import React from "react";
/**Component fo bottons  */
function Bottons(props) {
  // const image = `../../../images/${props.images}.png`;
  const { value, classType, postAction } = props;

  return (
    <div>
      <input
        value={value}
        className={classType}
        type="button"
        onClick={() => postAction()}
      />
    </div>
  );
}
export default Bottons;

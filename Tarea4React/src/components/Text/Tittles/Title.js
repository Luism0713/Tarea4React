import React from "react";

function Title(props) {
  const { classType,value } = props;

  return (
    <div className={classType} >
        {value}
    </div>
  );
}
export default Title;

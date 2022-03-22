import React, { useState } from "react";

import UpContact from "../../utilities/Register/UpContact";
import Bottons from "../bottons/Bottons";

function Registry(props) {
  //send the data
  const { actionAddContact } = props;

  const [element, setElement] = useState(undefined);

  const setModal = (value) => {
    setElement(value);
  };

  const openModal = () => {
    element.style.display = "inline-block";
  };

  return (
    <div>
      <UpContact itemWrapper={setModal} botonDo={actionAddContact} />
      <Bottons
        classType="button-add"
        value={"Add contact"}
        postAction={openModal}
      />
    </div>
  );
}

export default Registry;

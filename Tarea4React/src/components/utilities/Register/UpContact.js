import React from "react";
import { useState, useEffect } from "react";
import Bottons from "../bottons/Bottons";

function UpContact(props) {
  const { itemWrapper, botonDo } = props;

  //Modal
  const [element, setElement] = useState(undefined);
  //Close modal action
  const closeStyle = () => {
    element.style.display = "none";
  };

  const action = () => {
    const name = document.getElementById("name").value;
    const lname = document.getElementById("l-name").value;
    const tel = document.getElementById("phone").value;

    botonDo(name, lname, tel);
  };

  //GET THE MODAL ITEM
  useEffect(() => {
    setModal();
  }, []);

  //set the modal
  const setModal = () => {
    const item = document.getElementsByClassName("modal")[0];
    itemWrapper(item);
    setElement(item);
  };

  window.onclick = function (event) {
    if (event.target === element) {
      element.style.display = "none";
    }
    if (element.classList.contains("animate")) {
      element.classList.remove("animate");
    }
  };

  return (
    <div className="modal">
      <div className="form">
        <form>
          <span className="close" onClick={() => closeStyle()}>
            &times;
          </span>
          <h2 className="formTitle">New Contact</h2>
          <div className="modal-item">
            <h3>Nombre:</h3>
            <input type="text" id="name"></input>
          </div>
          <div className="modal-item">
            <h3>Apellido</h3>
            <input type="text" id="l-name"></input>
          </div>
          <div className="modal-item">
            <h3>Telefono:</h3>
            <input type="text" id="phone"></input>
          </div>
          {/* Botones */}
          <div className="modal-botton">
            <Bottons value="Send Message" classType="ptn" postAction={action} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpContact;

import React, { useState, useEffect } from "react";
import TableContacts from "./table/TableContacts";
import Contacts from "../../classes/getters/Contacts";
import Registry from "../utilities/Register/Registry";

function Agenda(props) {
  const contact = new Contacts();
  const [animated,setAnimable] = useState(undefined);
  const [list, setList] = useState([]);
  const [updated, setUpdate] = useState(false);

  useEffect(() => {
    setAnimable(document.getElementsByClassName('TitleMain')[0])
    console.log(animated);
  },[])

  useEffect(() => updateState(), [updated]);

  const updateState = () => {
    contact.getContact().then(function (items) {
      setList(items);
      console.log(document.documentElement.scrollHeight)

    });
  };

  const sendData = (name, lname, tels) => {
    animated.classList.toggle('amimate-load');
    
    contact.sendContact(name, lname, tels).then((response) => {
      setUpdate(response);
      animated.classList.toggle('amimate-load');
    });
  };

  return (
      <div className="content">
        <Registry actionAddContact={sendData} />
        <TableContacts list={list} />
      </div>
  );
}

export default Agenda;

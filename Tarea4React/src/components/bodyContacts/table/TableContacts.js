import React from "react";
import RowHead from "./typeRows/RowHead";
import RowBody from "./typeRows/RowBody";

function TableContacts(props) {
  const { list } = props;
  // List of heads to the contact list
  const headsTable = ["Name", "Last Name", "Phone Number"];

  //Check what to show
  const itemsListShow = () => {
    if (list.length == 0) {
      return (
        <RowBody
          key={0}
          name="Loading..."
          l_name="Loading..."
          tel="Loading..."
        />
      );
    }
    //render
    return list.map((item, index) => (
      <RowBody
        key={index}
        name={item.nombre}
        l_name={item.apellido}
        tel={item.telefono}
      />
    ));
  };

  return (
    <table className="table-data">
      <thead className="table-header">
        <RowHead heads={headsTable} />
      </thead>
      <tbody>
        {itemsListShow()}
      </tbody>
    </table>
  );
}

export default TableContacts;

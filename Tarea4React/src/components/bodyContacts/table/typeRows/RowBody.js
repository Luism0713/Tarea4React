import React from "react";

function RowBody(props) {
  const { name, l_name, tel } = props;

  return (
    <tr className="contact-item">
      <td>{name}</td>
      <td>{l_name}</td>
      <td>{tel}</td>
    </tr>
  );
}

export default RowBody;

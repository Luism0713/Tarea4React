import React from "react";

function RowHead(props) {
  const { heads } = props;

  return (
    <tr>
      {heads.map((name, index) => (
        // Listado a recorer
        <th key={index}>{name}</th>
      ))}
    </tr>
  );
}

export default RowHead;

import React from "react";


function EmployeeRow(props) {
    return (
        <tr>
            <td></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default EmployeeRow

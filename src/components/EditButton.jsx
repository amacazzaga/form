import React from "react";

const EditButton = ({ value,setValue,arrayOfUsers,setArrayOfUsers}) => {
  
  return (<button className="btn btn-success  m-2" onClick={()=>console.log(value.id)}>Edit</button>)
};

export default EditButton;

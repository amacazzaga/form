import React from "react";

const EditButton = ({ value, setValue, arrayOfUsers, setArrayOfUsers }) => {
  const handleEdition = () => {
    const filterArrayOfUsers = [...arrayOfUsers].filter((f) => f.id != value.id);
    setArrayOfUsers([...filterArrayOfUsers,value])
    console.log(filterArrayOfUsers);
  };
  return (
    <button className="btn btn-success  m-2" onClick={handleEdition}>
      Edit
    </button>
  );
};

export default EditButton;

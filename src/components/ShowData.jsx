import React from "react";

const ShowData = ({
  name,
  lastName,
  address,
  email,
  age,
  id,
  setValue,
  setIsEditing
}) => {
  return (
    <div
      className="m-2 border solid"
      onClick={() => {
        setValue(
          {
            name: name,
            lastName: lastName,
            address: address,
            age: age,
            email: email,
            id:id
          }        
        ),setIsEditing(true);
      }}
    >
      <div>{id}</div>
      <div>{name}</div>
      <div>{lastName}</div>
      <div>{age}</div>
      <div>{email}</div>
      <div>{address}</div>
    </div>
  );
};

export default ShowData;

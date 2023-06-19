import "./App.css";
import { useEffect, useState } from "react";
import ShowData from "./components/ShowData";
import EditButton from "./components/EditButton";
import SubmitButton from "./components/SubmitButton";

function App() {
  const [value, setValue] = useState({
    name: "",
    lastName: "",
    age: "",
    address: "",
    email: "",
  });
  const [arrayOfUsers, setArrayOfUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  ////
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newValue = { ...value, id: id }; //repasar!!!!
    setValue(newValue);
    setArrayOfUsers([...arrayOfUsers, newValue]);
    console.log(value);
    document.getElementById("form").reset(); // reset form
    setValue({ name: "", lastName: "", age: "", address: "", email: "" });
  };
  //
  const handleChange = (e) => {
    //setValue({ name: e.target.name, value: e.target.value }) no dinamica
    //setValue({[e.target.name]:e.target.value}) dinamica
    setValue({
      ...value, //spread operator
      [e.target.name]: e.target.value,
    });
  };


  ////
  return (
    <form id="form" className="container d-flex row" onSubmit={(e) => e.preventDefault()}>
      {arrayOfUsers.map((m) => (
        <ShowData
          key={m.id}
          id={m.id}
          name={m.name}
          lastName={m.lastName}
          address={m.address}
          age={m.age}
          email={m.email}
          setValue={setValue}
          setIsEditing={setIsEditing}
        />
      ))}
      <input
        required={true}
        className="m-2"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={value.name}
      ></input>
      <input
        required={true}
        className="m-2"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={value.lastName}
      ></input>
      <input
        required={true}
        className="m-2"
        name="address"
        placeholder="Address"
        onChange={handleChange}
        value={value.address}
      ></input>
      <input
        required={true}
        className="m-2"
        name="age"
        type="number"
        min="0"
        placeholder="Age"
        onChange={handleChange}
        value={value.age}
      ></input>
      <input
        required={true}
        className="m-2"
        name="email"
        type="email"
        placeholder="E-mail"
        onChange={handleChange}
        value={value.email}
      ></input>
      {isEditing ? (
        <EditButton
          value={value}
          setValue={setValue}
          arrayOfUsers={arrayOfUsers}
          setArrayOfUsers={setArrayOfUsers}
        />
      ) : (
        <SubmitButton onSubmit={handleSubmit} />
      )}
    </form>
  );
}

export default App;

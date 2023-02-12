import Input from "./Input";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: 'xyz@gmial.com',
    firstName: 'xyz',
    lastName: 'zyx'
  });

  const updateFormData = (e) => {
    e.preventDefault();
    setFormData(e.target.value)

  };

  return (
    <form>
   <Input placeholder={"Email"} onChange={updateFormData} value={formData.email}/>
   <Input placeholder={"First Name"} onChange={updateFormData} value={formData.firstName}/>
   <Input placeholder={"Last Name"} onChange={updateFormData} value={formData.lastName}/>
    </form>
  );
}

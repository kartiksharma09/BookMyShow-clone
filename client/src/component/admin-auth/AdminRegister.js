import React from "react";
import "../../css/form.css"

const AdminRegister = () => {
  return (
    <div>
      <form className="login">
      <h3 className="text-center">Register</h3>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default AdminRegister;

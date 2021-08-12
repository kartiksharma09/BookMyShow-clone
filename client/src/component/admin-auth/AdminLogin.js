import React from "react";

import "../../css/form.css"


const AdminLogin = () => {
  return (
    <div>
      <form className="login">
      <h3 className="text-center">LogIn</h3>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>LogIn</button>
      </form>
    </div>
  );
};

export default AdminLogin;

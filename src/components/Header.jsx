import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="navbar bg-body-tertiary header">
      <div className="container-fluid ">
        <Link className="navbar-brand mb-0 h1" to="/">
            <img src="https://firebasestorage.googleapis.com/v0/b/laboratory-2-52bca.appspot.com/o/FE-2-design_favicon.png?alt=media&token=e765861f-6894-4ba7-a9d2-5065d60e0a4c" alt="logo" />
        </Link>
        <div className="user">
            <img src="" alt="user-photo" />
            <Link>
            Log out
            </Link>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
    
  );
};
export default Header;
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
function Header() {
  return (
    <>
      <>
        <Navbar className="my-2" color="dark" dark>
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="https://cdn-icons-png.flaticon.com/512/3330/3330314.png"
              style={{
                height: 40,
                width: 40,
              }}
            />
          </NavbarBrand>
        </Navbar>
      </>
    </>
  );
}

export default Header;

import React from "react";
import Aux from "../../hoc/aux";
import "./Layout.css";

const Layout = props => {
  return (
    <Aux>
      <div className="content"> {}</div>

      <main>{props.children} </main>
    </Aux>
  );
};

export default Layout;

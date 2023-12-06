import React from "react";
import { Route, Routes } from "react-router-dom";
import menu from "../../data/menu.json";
import { components  } from "../utility/componets";

function Menu() {
  return (
    <Routes>
      {menu.dropdown.map((route, index) => (
          <Route key={index} path={route.to} element={components[route.componentName]} />
                /* <Route key={index} path={route.to + '/' + child} element={components[child]} /> */
          /* {route.childs.map((child, index) => ( */
              /* <Route key={index} path={route.to + '/' + child} element={components[child]} /> */
          /* ))} */
      ))}
      {menu.headers.map((route, index) => (
        <Route key={index} path={route.to} element={components[route.componentName]} />
      ))}
    </Routes>
  );
}

export default Menu;

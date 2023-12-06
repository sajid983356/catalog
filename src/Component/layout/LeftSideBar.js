import React from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import menu from '../../data/menu.json'

function LeftSideBar() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="" style={{ padding: '0 0 2rem 0.5rem' }}>      
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
          Category:
          </Accordion.Header>
          <Accordion.Body style={{ maxHeight: '75vh', overflowY :'auto'}}>
            <div className="text-start" style={{ cursor: "pointer" }}>
              {
                menu.dropdown.map((route, index) => (
                  <li

                    key={index}
                    className="custom-link small"
                    onClick={() => handleClick(route.to)}
                  >
                    {route.link}
                  </li>
                ))
              }
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default LeftSideBar;
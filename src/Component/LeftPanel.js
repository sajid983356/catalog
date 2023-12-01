import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LeftPanel() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleClick = (type) => {
    navigate(`/category/${type}`);
    setActiveItem(type);
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const handleCheckboxChange = (type, event) => {
    const isChecked = event.target.checked;

    if(isChecked){
      setCategories((prevCategories) => [...prevCategories, type])
    }
    console.log(`Checkbox clicked: ${type}, checked : ${isChecked}`);
  }

  useEffect(() => {
    console.log(`categories: ${categories}`);
  }, [categories])

  return (
    <div className="border" style={{ padding: '3rem 0.5rem 2rem 0.5rem' }}>
      <h5 >Categories:</h5>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item>
          <Accordion.Header>
            Buckles
          </Accordion.Header>
          <Accordion.Body>
            <div className="text-start" style={{ cursor: "pointer" }}>
            {/* <div>
              <input 
                type="checkbox"
                onChange={(event) => handleCheckboxChange("belt_loop", event)}
              />
              Belt Loop
            </div>
            <div>
              <input 
                type="checkbox"
                onChange={(event) => handleCheckboxChange("rings", event)}
              />
              Rings
            </div> */}
              <li
                onClick={() => handleClick("belt_loop")}
                onMouseEnter={() => handleMouseEnter("belt_loop")}
                onMouseOut={handleMouseLeave}
                style={{
                  color:  activeItem === "belt_loop" ? 'white' : '',
                  backgroundColor:
                    activeItem === "belt_loop"
                      ? "#0d6efd"
                      : hoveredItem === "belt_loop"
                      ? "#e0e0e0"
                      : "transparent",
                }}
              >
                belt_loop
              </li>
              <li
                onClick={() => handleClick("rings")}
                onMouseEnter={() => handleMouseEnter("rings")}
                onMouseOut={handleMouseLeave}
                style={{
                  color:  activeItem === "rings" ? 'white' : '',
                  backgroundColor:
                    activeItem === "rings"
                      ? "#0d6efd"
                      : hoveredItem === "rings"
                      ? "#e0e0e0"
                      : "transparent",
                }}
              >
                Rings
              </li>
              {/* Other list items... */}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey={["0"]} alwaysOpen className="border-0">
      <Accordion.Item style={{ border: 'none'}}>
          <Accordion.Header>
            Belt Shop
          </Accordion.Header>
          <Accordion.Body>
            <div className="text-start" style={{ cursor: "pointer" }}>
            <li
                onClick={() => handleClick("subCategory_1")}
                onMouseEnter={() => handleMouseEnter("subCategory_1")}
                onMouseOut={handleMouseLeave}
                style={{
                  color:  activeItem === "subCategory_1" ? 'white' : '',
                  backgroundColor:
                    activeItem === "subCategory_1"
                      ? "#0d6efd"
                      : hoveredItem === "subCategory_1"
                      ? "#e0e0e0"
                      : "transparent",
                }}
              >
                subCategory_1
              </li>
              <li
                onClick={() => handleClick("subCategory_2")}
                onMouseEnter={() => handleMouseEnter("subCategory_2")}
                onMouseOut={handleMouseLeave}
                style={{
                  color:  activeItem === "subCategory_2" ? 'white' : '',
                  backgroundColor:
                    activeItem === "subCategory_2"
                      ? "#0d6efd"
                      : hoveredItem === "subCategory_2"
                      ? "#e0e0e0"
                      : "transparent",
                }}
              >
                subCategory_2
              </li>
              {/* Other list items... */}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default LeftPanel;
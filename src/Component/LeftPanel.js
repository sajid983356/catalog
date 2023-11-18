import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LeftPanel() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

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

  return (
    <div style={{ background: "white" }}>
      <h5>Product List</h5>
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="border-0">
        <Accordion.Item>
          <Accordion.Header onClick={() => handleClick("view_all")}>
            View All{" "}
          </Accordion.Header>
          <Accordion.Body>
            <div className="text-start" style={{ cursor: "pointer" }}>
              <li
                onClick={() => handleClick("belt_loop")}
                onMouseEnter={() => handleMouseEnter("belt_loop")}
                onMouseOut={handleMouseLeave}
                style={{
                  backgroundColor:
                    activeItem === "belt_loop"
                      ? "#ADD8E6"
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
                  backgroundColor:
                    activeItem === "rings"
                      ? "#ADD8E6"
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
    </div>
  );
}

export default LeftPanel;

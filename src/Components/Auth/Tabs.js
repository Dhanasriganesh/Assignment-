import React, { useState } from "react";
import styled from "styled-components";

const Tab = styled.button`
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border-radius: 30px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  width:100%;
  height:100%;
  outline: 0;
  
  transition: background-color 250ms ease; /* Adjusted transition */
  
  ${({ active }) =>
        active &&
        `
    background-color: #693BD7;
    
  `}
`;

const types = ["Sign Up", "Login"];

function TabGroup() {
    const [active, setActive] = useState(types[0]);

    return (
        <>
            <div>
                {types.map((type) => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tab>
                ))}
            </div>
        </>
    );
}

export default TabGroup;

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import NavButton from "./NavButton";
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <header style={{ 
            display: "flex", 
            justifyContent: "end",
         }}>
            <div style={{marginLeft: "20px",
            marginRight: "20px"}}>
                <NavButton to="/" label="Home" styled={false} />
                <NavButton to="/skills" label="Skills" styled={false}/>
                <NavButton to="/projects" label="My Work" styled={false} />
                <NavButton to="https://github.com/SethNowac" label="Github" styled={false} />
            </div>
        </header>
    )
}
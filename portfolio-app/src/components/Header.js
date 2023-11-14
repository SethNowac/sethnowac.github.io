import { Link } from "react-router-dom";
import React, { useContext } from "react";
import NavButton from "./NavButton";
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <header style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="navigation">
                <NavButton to="/" label="Home" />
                <NavButton to="/about-us" label="About Us" />
            </div>
        </header>
    )
}
import { NavLink, useResolvedPath, useMatch } from "react-router-dom";
import Button from "@mui/material/Button";
//import "../style.css";

/**
 * A button for navigation, wrapped in a NavLink component from react-router-dom.
 * @param {object} props - The props object containing the label and destination of the button.
 * @param {string} props.label - The label displayed on the button.
 * @param {string} props.to - The destination of the button.
 * @returns {JSX.Element} - The JSX element for the NavButton.
 */
function NavButton(props) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const primaryButtonStyle = {
        color: "black",
        padding: "5px 10px",
        margin: "5px",
        cursor: "pointer",
        transitionProperty: "border, font-weight",
        transitionDuration: "0.1s",
        transitionTimingFunction: "ease-in-out",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "normal",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "transparent"
    };

    const activePrimaryButtonStyle = {
        color: "black",
        padding: "5px 10px",
        margin: "5px",
        cursor: "pointer",
        transitionProperty: "border, font-weight",
        transitionDuration: "0.1s",
        transitionTimingFunction: "ease-in-out",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "bold",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "black"
    };



    return (
        <NavLink to={props.to}>
            <p1
                className="buttonStyle"
                style={match ? activePrimaryButtonStyle : primaryButtonStyle}
            >{props.label}</p1>
        </NavLink>


    );
}

export default NavButton;
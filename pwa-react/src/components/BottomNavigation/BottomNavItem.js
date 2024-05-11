import React from "react";
import styled from "styled-components";

const NavItem = styled.div`
    color: ${(props) => props.tab === props.text ? 'black' : 'lightgray'};
    font-size: 12px;
    text-align:center;
    font-weight: bold;

    div{
        margin: 0;
        padding: 0;
        font-size: 20px;
    }
`;

const BottomNavItem = ({text, onClick, tab, children}) => {
    const onclick = () =>{
        console.log(`${text} clicked`)
        onClick(text)
    }
    return <NavItem tab={tab} text={text}>
        <div onClick={onclick}>
            {children}
        </div>
        <span>{text}</span>
    </NavItem>
}

export default BottomNavItem;
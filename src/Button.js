import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from 'gsap'

import { COLORS } from "./constants";

    // gsap.set(".wrapper", {autoAlpha:1, }) // avoid Flash of Un-styled Content

    // const tl = gsap.timeline({
    //     defaults:{duration:0.3, opacity:0},
    // })
    // tl.add("start")
    // .from(".slide1", {})
    // .addPause("+=0")
    // .to(".slide1", {opacity:0})
    
    // .from(".slide2", {}, "slide2")
    // .addPause("+=0")
    // .to(".slide2", {opacity:0})
    
    // .from(".slide3", {})
    // .addPause("+=0")
    // .to(".slide3", {opacity:0})
    
    // .from(".slide4", {})

    
    const next = () =>{
        console.log('next')
        

        // if(tl.progress() == 1){
        //     tl.play(0)
        // } else {
        //     tl.play()
        // }
    }
    const prev = () => {
        console.log('prev')
        // if(tl.previousLabel() != "start"){
        //     tl.reverse()
        // }
    }
    const SIZES = {
    small: {
        "--borderRadius": 2 + "px",
        "--fontSize": 16 / 16 + "rem",
        "--padding": "6px 12px"
    },
    medium: {
        "--borderRadius": 2 + "px",
        "--fontSize": 18 / 16 + "rem",
        "--padding": "14px 20px"
    },
    large: {
        "--borderRadius": 4 + "px",
        "--fontSize": 21 / 16 + "rem",
        "--padding": "18px 32px"
    }
    };

    const Button = ({ variant, size, children, direction }) => {

    const styles = SIZES[size];
        console.log(direction)
    let Component;
    if (variant === "fill") {
        Component = FillButton;
    } else if (variant === "outline") {
        Component = OutlineButton;
    } else if (variant === "ghost") {
        Component = GhostButton;
    } else {
        throw new Error(`Unrecognized Button variant: ${variant}`);
    }
    return <Component style={styles} onClick={direction === 'next' ? next : prev}>{children}</Component>;
    
    };

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;
const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;
const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;

  &:focus {
    outline-color: ${COLORS.gray};
  }

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;

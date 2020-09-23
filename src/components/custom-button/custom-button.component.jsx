import React from "react";

// import "./custom-button.style.scss";

import { CustomButtonContanier } from "./custom-button.style";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContanier {...props}>{children}</CustomButtonContanier>
);

export default CustomButton;

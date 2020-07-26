import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  color: #b9bdcf;
  display: block;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  margin-top: 32px;
  text-transform: uppercase;
`;

const FormElement = ({ children, icon, label }) => {
  return (
    <Label>
      {label}
      {icon && <span className="material-icons">{icon}</span>}
      {children}
    </Label>
  );
};

export default FormElement;

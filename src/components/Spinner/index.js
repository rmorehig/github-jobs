import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(FaSpinner)`
  animation: ${rotate} 2s linear infinite;
  color: #1e86ff;
  font-size: 4rem;
`;

Spinner.defaultProps = {
  "aria-label": "loading",
};

export default Spinner;

import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  //box-shadow: 0px 0px 0px 2px #9fb4f2;
    background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
    background-color: #7892c2;
    border-radius: 10px;
    border: 1px solid #4e6096;
    margin: 0 0.5em;
    display: inline-block;
    cursor: pointer;
    color: SEASHELL;
    font-family: inherit ;
 font-weight:bold;
    font-size: 16px;
    padding: 5px 20px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #283966;
  }
  &:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
  
  }
  &:active {
    position: relative;
    outline:none;
    top: 1px;
  }
  }
`;
export default Button;

export const TomatoButton = styled(Button)`
  color: crimson;
  text-shadow: none;
  border-radius: 50%;
  width: 30px;
  padding: 0;
  height: 30px;
  display: flex;
  border: none;
  background: transparent;
  justify-content: center;
  align-items: center;

  &:hover {
    outline: none;
  }
`;

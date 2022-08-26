import styled from "styled-components";
import { ButtonProps } from "../../../models/components/Button";

export const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  height: 60px;
  position: relative;
  width: 120px;
  vertical-align: top;
  color: #fff;
  background-color: #ec6262;
  border-radius: 5px;
  border: 0;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  line-height: 60px;
  font-size: 20px;
  font-weight: 100;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:after {
    content: "";
    background: #cc5656;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    border-radius: 99px;
    opacity: 1;
    transition: 0s;
  }
`;

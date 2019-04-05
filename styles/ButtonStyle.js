import styled from "styled-components";

export const ButtonStyle = styled.button`
	width: ${props => (props.width ? props.width : "100%")};
	padding: 15px;
	border: none;
	background: ${props => (props.bg ? props.bg : "#dcdcdc")};
	color: ${props => (props.color ? props.color : "#222")};
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

export const AnchorButton = styled.a`
	text-align: center;
	width: ${props => (props.width ? props.width : "100%")};
	display: ${props => (props.display ? props.display : "inline-block")};
	border: 2px solid green;
	padding: 5px 10px;
	color: green;
	border-radius: ${prop => (prop.radius ? prop.radius : "25px")};
	margin: 0 auto;
`;

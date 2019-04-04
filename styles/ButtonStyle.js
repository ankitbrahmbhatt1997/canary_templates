import styled from "styled-components";

export const ButtonStyle = styled.button`
	width: ${props => (props.width ? props.width : "100%")};
	padding: 15px;
	border: none;
	background: ${props => (props.bg ? props.bg : "#dcdcdc")};
	color: ${props => (props.color ? props.color : "#222")};
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

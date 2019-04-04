import styled, { css } from "styled-components";

const authForm = css`
	position: relative;
	width: 350px;
	margin: 105px auto;
	background: #fff;
	padding: 75px 15px 15px;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

export const SignInForm = styled.form`
	${authForm}
	& .form-group {
		margin: 10px 0;
	}
`;

export const InputStyle = styled.input`
	width: 100%;
	padding: 15px;
	background: #f5f5f5;
	border: none;
	box-shadow: inset 0 1px 4px rgba(115, 143, 147, 0.25), 0 0 0 transparent;
	&:focus {
		outline: none;
		box-shadow: inset 0 1px 4px rgba(115, 143, 147, 0.25), 0 0 0 transparent;
	}
`;

export const SwitchTab = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	top: 0;
	left: 0;
	background: #dcdcdc;
	align-items: center;
	a {
		flex: 1;
		padding: 15px;
		text-align: center;
		color: #222;
		font-size: 1.1em;
		&.active {
			background: #fff;
		}
	}
`;

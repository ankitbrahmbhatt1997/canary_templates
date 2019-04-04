import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		box-sizing:border-box;
		margin:0;
		padding:0;
	}

	body{
		background:#f5f5f5;
		font-family: 'Roboto', sans-serif;
	}

	a{
		text-decoration:none;
	}

	li{
		list-style:none;
	}
`;

export const FLX = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

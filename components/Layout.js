import Head from "next/head";
import Header from "./Header";
import { GlobalStyle } from "../styles/_index";

const Layout = props => (
	<>
		<GlobalStyle />
		<Head>
			<link
				href="https://fonts.googleapis.com/css?family=Roboto"
				rel="stylesheet"
			/>
			<title>CrowdCoin</title>
		</Head>
		<Header />
		{props.children}
	</>
);

export default Layout;

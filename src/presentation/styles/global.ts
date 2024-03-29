import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
}

body {
	background: ${props => props.theme.colors.background};
	-webkit-font-smoothing: antialiased !important;
	font-family: "Roboto", Arial, Helvetica, sans-serif;
}

body,
input,
button {
	font-family: "Roboto", Arial, Helvetica, sans-serif;
}

pre {
	background-color: ${({ theme }) => theme.colors.black};
}
code {
	white-space: pre; 
	font-family: monospace; 
	
	color: ${({ theme }) => theme.colors.highlight};
	padding: ${({ theme }) => theme.space[3]};;
}
`;

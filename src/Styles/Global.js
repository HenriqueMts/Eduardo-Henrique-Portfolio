import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
*, *::after, *::before{
	box-sizing: border-box;
}
body{
	overflow-x: hidden;
	background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);


::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, rgba(0, 5, 19, 0.4) 20%, rgba(10, 16, 33, 0.4) 50.28%, rgba(18, 25, 43, 0.4) 81.15%);  
  border-radius: 20px;      
  border: 1px solid ;  
}
}
body::-webkit-scrollbar {
      width: 8px;
      background: #12192B;
    }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family:'Mukta', sans-serif;
	vertical-align: baseline;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
cursor: pointer;
}
.text-linear-gradient{
	background: linear-gradient(89.99deg, #174086 -4.74%, #b5c4e9 102.32%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
}
`;

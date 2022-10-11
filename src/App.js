import GlobalStyle from "./Styles/Global";

import Home from "./Page/Home";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />;
    </>
  );
};

export default App;

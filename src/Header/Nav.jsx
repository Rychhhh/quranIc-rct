import React, { Fragment, useState } from "react";

// Logo
import logo from "../Img/logo_imgg.png";

// Import Styled-Components
import styled, { ThemeProvider } from "styled-components";

// Import Theme.js
import { lightTheme, darkTheme, GlobalStyle } from "../Theme/theme";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function Nav() {
  // Function for dark mode and lightmode
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>
        <Fragment>
          <nav class="navbar navbar-expand-lg navbar-darkbg-dark">
            <div class="container d-flex bd-highlight mt-5   ">
              <div class="navbar-brand" href="#">
                <img src={logo} width="120px" alt="" />
              </div>

              {/* Dark  Mode */}
              <div class="d-flex ms-auto bd-highlight">
                <button class="btn btn-outline-success" color="white" type="submit" onClick={() => themeToggler()}>
                  <svg width="30px" height="40px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </Fragment>
      </StyledApp>
    </ThemeProvider>
  );
}

export default Nav;

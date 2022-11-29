import React from "react";
import Logo from "./assets/images/logo.svg";
import SearchIcon from "./assets/icons/search-icon.svg";
import PersonIcon from "./assets/icons/person-icon.svg";
import BagIcon from "./assets/icons/bag-icon.svg";
import Header from "./components/Header";
import FlexContainer from "./components/styled/FlexContainer";
import IconContainer from "./components/styled/IconContainer";
import LogoContainer from "./components/styled/LogoContainer";
import RootLayout from "./components/styled/RootLayout";
import RouterLink from "./components/styled/RouterLink";

function App() {
  return (
    <RootLayout>
      <Header>
        <FlexContainer justify={"space-between"} items={"center"} >
          <RouterLink to={"/"}>
            <LogoContainer>
              <img 
                src={Logo} 
                alt="Logo" 
              />
            </LogoContainer>
          </RouterLink>

          <FlexContainer width={"fit-content"} gap={"35px"}>
            <RouterLink to={"/"}>
              Products
            </RouterLink>

            <RouterLink to={"/about-us"}>
              About Us
            </RouterLink>

            <RouterLink to={"/cart"}>
              Cart
            </RouterLink>
          </FlexContainer>

          <FlexContainer justify={"space-between"} width={"fit-content"} gap={"25px"}>
            <IconContainer size={"23px"}>
              <img 
                src={SearchIcon}
                alt="Search"
              />
            </IconContainer>

            <RouterLink to={"/profile"}>
              <IconContainer size={"23px"}>
                <img 
                  src={PersonIcon}
                  alt="Profile"
                />
              </IconContainer>
            </RouterLink>

            <RouterLink to={"/cart"}>
              <IconContainer size={"23px"}>
                <img 
                  src={BagIcon}
                  alt="Cart"
                />
              </IconContainer>
            </RouterLink>
          </FlexContainer>
        </FlexContainer>
      </Header>
    </RootLayout>
  );
}

export default App;

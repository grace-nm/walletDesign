import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
//custom colors
import { colors } from "../components/colors";
import { Container } from "../components/shared";


const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width:100%;
    flex: 1;
  `;

const Home: FunctionComponent = () => {
    return(
        <HomeContainer>
        <StatusBar  style="dark"/>
        </HomeContainer>
            );
    };

export default Home





















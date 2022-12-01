import React from 'react';
import { Container, Heading, View, ButtonFilled, ButtonMinimal } from "@go1d/go1d";
import go1Logo from "./go1.png";
import go1Image from "./go1Icon.png";

const Landing = () => {
  return (
    
    <Container
      backgroundColor="accent"
      height="100vh"
      flex-wrap="wrap"
    >
      <View
      flexDirection={"row"}
        marginTop={5}
        marginLeft={8}
        justifyContent="space-between"
        >
        <img 
          src={go1Logo} 
          height={"auto"} 
          width={90} 
        />

        <ButtonMinimal
        color ="soft"
        width = "20%"
        >
          Login
        </ButtonMinimal>
      </View>
    <View
      flexDirection={"row"}
      >
        <View
          marginTop={10}
          maxWidth={580}
          marginLeft={8}
          >
          <Heading
            color="soft"
            semanticElement="h1"
            visualHeadingLevel="Heading 1"
            >
              Learn on the go with Go1 mobile.
          </Heading>
          <Heading
            semanticElement="h4"
            visualHeadingLevel="Heading 4"
            color="delicate"
            marginTop={3}
            >
              Complete your learning and upskill your career with mobile learning
              anywhere, anytime.
          </Heading>
          <View
          paddingTop ="20"
          alignItems ="flex-start"
          flexDirection="row"
          >
            <ButtonFilled
              color="complementary"
              width="30%"
            >
              Get on Play Store
            </ButtonFilled>
              <ButtonFilled
                color="complementary"
                width="30%"
                marginLeft={5}
              >
                Get on App Store
              </ButtonFilled>

          </View>

        </View>

      <View 
        width="40%"
        
        >
        <img
          src={go1Image}
        />
      </View>
    </View>

    </Container>
  );
};

export default Landing;
import React from 'react';
import { View, Text, Container, Heading, ConnectingShapes } from "@go1d/go1d";
import mobileApp from "./mobile_app.png";
import check from "./CheckCirclecheckmark.png";

const About = () => {
  return (
    <Container
      backgroundColor="dangerMid"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      >
      <ConnectingShapes
        colorBorderShape="noteHigh"
        colorShape="noteHigh"
        colorText="accent"
        containerProps={{ flexDirection: "row" }}
        content={[

          <View
          backgroundColor={"noteHigh"}
          borderRadius={4}
          padding={6}
          >
            
            <Heading
              color="accent"
              fontSize={"7"}
              >
              All your learning in your pocket.
            </Heading>

            <Text
              color="accent"
              fontSize= {"3"}
              >
              <img
              src={check}
              height={"auto"}
              width={"15"}
              />
              Tailored to your roles and industry.
            </Text>

            <Text
              color="accent"
              fontSize= {"3"}
              >
              <img
              src={check}
              height={"auto"}
              width={"15"}
              /> 
              Relevant for your location and experience.
            </Text>

            <Text
              color="accent"
              fontSize= {"3"}
              >
              <img
              src={check}
              height={"auto"}
              width={"15"}
              />
              Based on activity from over one million learners.
            </Text>

          </View>,

          <View
          height={600}
          >
            <img
            src={mobileApp}
            height={"auto"}
            width={290}
            />
          </View>
          
        ]}
      />
    </Container>
  );
};

export default About;

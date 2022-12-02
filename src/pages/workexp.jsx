import React from 'react';
import ReactPlayer from 'react-player'
import { Container, Heading, Text, View, Carousel} from "@go1d/go1d";
import laptopPerson from "./go1d-laptop-illistration.svg";
import prototypeDesign from "./PrototypeSuggestedFeatureForMobile.png";
import design from "./Refined Suggested Feature.png";
import landingPage from "./go1IconPhoneThing.png";
import aboutPage from "./Go1MobileThing.PNG";

const WorkExp = () => {
  return (
    <Container
      backgroundColor="accent"
      height="100vh"
      display={"flex"}
      justifyContent="space-between"
    >
      <View
        marginTop={"20"}
      >
        <View
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginX={"250"}
        >
          <Heading
            fontSize={"8"}
            color={"soft"}
            justifyContent={"flex-start"}
            >
              Work Experiance With Go1
          </Heading>

          <img
            justifyContent={"flex-end"}
            src={laptopPerson}
            width={"200"}
          />
          
        </View>

        <View
        flexDirection={"row"}
        marginLeft={"350"}
        justifyContent={"space-between"}
        marginRight={"350"}
        >
          <View
          backgroundColor={"accentLow"}
          maxWidth={"500"}
          padding={"5"}
          borderRadius={"3"}
          >
            <Heading
              fontSize ={"5"}
              color={"soft"}
            >
              Garyson's Reflection:
            </Heading>

            <Text
              marginTop={"3"}
              fontSize={"3"}
              color={"soft"}
            >
              My experiance at Go1 was valuable to me due to the unique learning experiances i was able to gain, which i belive that will help me develop more innovative and quality work.
In my time at Go1 I had wrote a report about the features possiblely desired in the mobile app and the speeds of connection from differant reagions around the globe; USA, UK, and Australia. i had also made a mock mobile feature on figma and THIS WEBSITE!
            </Text>

          </View>

          <View
          >
            <ReactPlayer
              url='https://www.youtube.com/watch?v=ILulMm6q7vE'
              />
          </View>

        </View>

      </View>

      <View
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"flex-end"}
      marginBottom={"20"}
      >
        <Carousel
        width={1920}
        >
          <View
            backgroundColor="accentLow"
            height={300}
            maxWidth={"100%"}
            minWidth={150}
            width= {'100%'}
            borderRadius={"3"}
            flexDirection={"row"}
          >
            <View
              flexDirection={"column"}
              marginTop={"3"}
              marginLeft={"7"}
              maxWidth={"300"}
              
            >
              <Heading
                marginLeft={"70"}
                fontSize={"7"}
                color={"soft"}
              >
                Design!
              </Heading>

              <Text
                marginTop={"70"}
                color={"soft"}
                fontSize={"3"}
              >
                Challange yourself, reachout of your comfort zone and DESIGN!
              </Text>

            </View>

            <View
            justifyContent={"center"}
            marginLeft={"130"}
            >
              <img
              src={prototypeDesign}
              width={"400"}
              height={"auto"}
              />
            </View>

            <View
            justifyContent={"center"}
            marginLeft={"120"}
            >
              <img
              src={design}
              width={"200"}
              height={"auto"}
              />
            </View>

          </View>

          <View
            backgroundColor="accentLow"
            height={300}
            maxWidth={"100%"}
            minWidth={150}
            width= {'100%'}
            borderRadius={"3"}
            flexDirection={"row"}
          >
            <View
              flexDirection={"column"}
              marginTop={"3"}
              maxWidth={"300"}
              marginLeft={"67"}
            >
              <Heading
                fontSize={"6"}
                color={"soft"}
              >
                Engineering!
              </Heading>

              <Text
                marginTop={"70"}
                color={"soft"}
                fontSize={"3"}
              >
                Why not make a website??
              </Text>

            </View>

            
            <View
            justifyContent={"center"}
            marginLeft={"60"}
            >
              <img
              src={landingPage}
              width={"350"}
              height={"auto"}
              />
            </View>

            <View
            justifyContent={"center"}
            marginLeft={"60"}
            >
              <img
              src={aboutPage}
              width={"350"}
              height={"auto"}
              />
            </View>

          </View>

        </Carousel>

      </View>

    </Container>
  );
};

export default WorkExp;
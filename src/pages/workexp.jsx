import React from 'react';
import ReactPlayer from 'react-player'
import { Container, Heading, Text, View, Carousel} from "@go1d/go1d";
import laptopPerson from "./go1d-laptop-illistration.svg";

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
        marginLeft={"340"}
        justifyContent={"space-between"}
        marginRight={"340"}
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
              Garyson’s Reflection:
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
              url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
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
            css={{
              backgroundColor: '#7732bb',
              height: 300,
              maxWidth: '100%',
              minWidth: 150,
              width: '100%',
            }}
          />

          <View
            css={{
              backgroundColor: '#047cc0',
              height: 300,
              maxWidth: '100%',
              minWidth: 150,
              width: '100%',
            }}
          />
          <View
            css={{
              backgroundColor: '#e3bc13',
              height: 300,
              maxWidth: '100%',
              minWidth: 150,
              width: '100%',
            }}
          />
          <View
            css={{
              backgroundColor: '#db7c00',
              height: 300,
              maxWidth: '100%',
              minWidth: 150,
              width: '100%',
            }}
          />
        </Carousel>
      </View>

    </Container>
  );
};

export default WorkExp;
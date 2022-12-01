import React from 'react';
import { Container, Heading, Text, View, Carousel } from "@go1d/go1d";
import laptopPerson from "./go1d-laptop-illistration.svg";

const WorkExp = () => {
  return (
    <Container
      backgroundColor="accent"
      height="100vh"
      display={"flex"}
    >
      <View
        marginTop={"20"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <View
        flexDirection={"column"}
        >
          <Heading
            fontSize={"8"}
            color={"soft"}
            justifyContent={"flex-start"}
            marginLeft={10}
            marginTop={8}
            marginBottom={10}
            >
              Work Experiance With Go1
          </Heading>
        </View>  

        <img
          justifyContent={"flex-end"}
          src={laptopPerson}
          height={"auto"}
          width={"400"}
        />

      </View>

      <View
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"flex-end"}
      >
        <Carousel
        width={1920}
        >
          <View
            css={{
              backgroundColor: '#7732bb',
              height: 200,
              maxWidth: '100%',
              minWidth: 150,
              width: '100%',
            }}
          />

          <View
            css={{
              backgroundColor: '#047cc0',
              height: 200,
              maxWidth: '100%',
              minWidth: 150,
              width: '100%',
            }}
          />
          <View
            css={{
              backgroundColor: '#e3bc13',
              height: 200,
              maxWidth: '100%',
              minWidth: 150,
              width: '100%',
            }}
          />
          <View
            css={{
              backgroundColor: '#db7c00',
              height: 200,
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
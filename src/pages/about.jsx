import { View, Text, Container, Heading, ConnectingShapes } from "@go1d/go1d";
import mobileApp from "./mobile_app.png";

const About = () => {
  return (
    <Container
      backgroundColor="dangerHigh"
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
          <View backgroundColor={"noteHigh"} borderRadius={4} padding={6}>
            <Heading color="accent">Tailored to suit your needs.</Heading>
            <Text color="accent">
              We work with you to recommend training that is best suited for
              your team's needs.
            </Text>
          </View>,
          <View height={600}>
            <img src={mobileApp} height={"auto"} width={290} />
          </View>,
        ]}
      />
    </Container>
  );
};

export default About;

import { Container, Heading, Text, View } from "@go1d/go1d";

const Landing = () => {
  return (
    <Container
      backgroundColor="accent"
      height="100vh"
      alignItems="center"
      flexDirection="row"
    >
      <View width="50%" alignItems="center">
        <Heading>Learn on the go with Go1 mobile.</Heading>
        <Text>
          Complete your learning and upskill your career with mobile learning
          anywhere, anytime.
        </Text>
      </View>

      <View width="50%">
        <img
          src={
            "https://cdn.go1static.com/assets/go1d-static-assets/images/go1d-illustration-teams-upskilling.svg"
          }
        ></img>
      </View>
    </Container>
  );
};

export default Landing;

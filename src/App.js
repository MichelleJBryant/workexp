import React from 'react';
import { View } from "@go1d/go1d";
import Landing from "./pages/landing";
import About from "./pages/about";
import WorkExp from "./pages/workexp";

function App() {
  return (
    <View>
      <Landing />
      <About />
      <WorkExp />
    </View>
  );
}

export default App;

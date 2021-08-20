import React from "react";
import { Route } from "react-router-dom";
import Header from "@/components/Home/Header";
import HomeMain from "@/components/Home/HomeMain";

class Home extends React.Component {
  render() {
    return (
      <div style={{ flex: 1 }}>
        <Header />
        <Route path="/all" component={HomeMain} />
        <Route path="/javascript" component={HomeMain} />
        <Route path="/ruby" component={HomeMain} />
        <Route path="/java" component={HomeMain} />
        <Route path="/css" component={HomeMain} />
        <Route path="/python" component={HomeMain} />
      </div>
    );
  }
}

export default Home;

import React from 'react';
import Header from "@/components/Home/Header";
import HomeMain from "@/components/Home/HomeMain";
import {Route} from "react-router-dom";
class Home extends React.Component {
    render() {
        let url = window.location.href.split("#")[1];
        return (
            <div style={{flex:1}}>
                <Header></Header>
                <Route path={url} component={HomeMain}></Route>
            </div>
        );
    }
}

export default Home;

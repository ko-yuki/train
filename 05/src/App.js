import React from "react";
import {Switch,Redirect,Route} from "react-router-dom";
import Nav from "./components/Common/Nav";
import Footer from "./components/Common/Footer";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import Result from "./pages/Result";

class App extends React.Component{
    render(){
        const url = window.location.href.split("#")[1];
        return <div style={{
                    height:"100%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                }}>
                    <Nav />
                    <Switch>
                        <Redirect exact from="/" to={url==="/"?"/all":url} />
                        <Route path="/all" component={Home} />
                        <Route path="/javascript" component={Home} />
                        <Route path="/ruby" component={Home} />
                        <Route path="/java" component={Home} />
                        <Route path="/css" component={Home} />
                        <Route path="/python" component={Home} />
                        <Route exact path="/battle" component={Battle} />
                        <Route path="/battle/result" component={Result} />
                    </Switch>
                    <Footer />
                </div> 
    }
}
export default App;
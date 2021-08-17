import React from "react";
import Nav from "./components/Common/Nav";
import Footer from "./components/Common/Footer";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import Result from "./pages/Result";
import {Switch,Redirect,Route} from "react-router-dom";

class App extends React.Component{
    render(){
        let url = window.location.href.split("#")[1];
        return <div style={{
                    height:"100%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                }}>
                    <Nav></Nav>
                    <Switch>
                        <Redirect exact={true} from="/" to={url=="/"?"/all":url}></Redirect>
                        <Route path="/all" component={Home}></Route>
                        <Route path="/javascript" component={Home}></Route>
                        <Route path="/ruby" component={Home}></Route>
                        <Route path="/java" component={Home}></Route>
                        <Route path="/css" component={Home}></Route>
                        <Route path="/python" component={Home}></Route>
                        <Route exact={true} path="/battle" component={Battle}></Route>
                        <Route path="/battle/result" component={Result}></Route>
                    </Switch>
                    <Footer></Footer>
                </div> 
    }
}
export default App;
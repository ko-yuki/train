import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            navs:["Popular","Battle"]
        }
    }

    isActive = (nav) => {
        const param = window.location.hash.split("#")[1].replace("/","");
        const idx = param.indexOf("battle");
        if(nav === "Popular"){
            return idx === -1;
        }
            return idx !== -1;
        
    }

    render() {
        return (
            <div>
                <ul style={{
                    width:"62%",
                    margin:"2% auto 0",
                    display:"flex",
                    lineHeight:"50px",
                    fontSize:"20px"
                    }}>
                        {
                            this.state.navs.map((nav,index)=>(
                                <li key={index} style={{padding:"0 1%"}}>
                                    <NavLink isActive={()=>this.isActive(nav)} activeStyle={{color:"rgb(180, 44, 30)"}} to={nav==="Popular"?"/all":"/battle"}>{nav}</NavLink>
                                </li>
                            ))
                        }
                </ul>
            </div>
        );
    }
}

export default Nav;
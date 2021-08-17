// 定义头部
import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:["All","JavaScript","Ruby","Java","CSS","Python"]
        };
    }
    render(){
        return  <ul style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    {
                        this.state.title.map((item,index)=>(
                            <li key={index} style={{margin:"0 7px",cursor:"pointer",lineHeight:"50px"}}>
                                <NavLink activeStyle={{color:"#b42c1e"}} style={{fontWeight:"600"}} to={item.toLowerCase()}>{item}</NavLink>
                            </li>
                        ))
                    }
                </ul>
    }
}
export default Header;
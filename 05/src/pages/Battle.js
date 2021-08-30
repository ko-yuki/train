import React, { Component } from "react";
import axios from 'axios';
import battle from "./Battle.css";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [
        {
          title: "Enter two Github:",
          icon: "fa fa-users fa-5x",
          color: "rgb(255, 191, 116)"
        },
        {
          title: "Battle",
          icon: "fa fa-fighter-jet fa-5x",
          color: "gray"
        },
        {
          title: "See the winner",
          icon: "fa fa-trophy fa-5x",
          color: "rgb(244, 234, 42)"
        }
      ],
      nameOne: "",
      nameTwo: "",
      urlOne: "",
      urlTwo: "",
      flagOne: false,
      flagTwo: false,
      loadingOne:false,
      loadingTwo:false,
      errOne:'',
      errTwo:''
    };
  }

  inputName = (e,index) => {
    e.persist();
    if(index === 0){
      this.setState({errOne:'',});
    }else{
      this.setState({errTwo:'',});
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getName = async index => {
    const { nameOne, nameTwo, loadingOne, loadingTwo } = this.state;

    if (nameOne === "" && nameTwo === "") {
      return;
    }

    if(loadingOne || loadingTwo){
      return;
    }

    if(index === 0){
      this.setState({
        loadingOne:true
      })
      const res = await axios(`/app/${nameOne}.png?size=200`)
      .catch(err=>{
        this.setState({
          errOne:err.response.data,
          loadingOne:false
        });
      });
      this.setState({
        urlOne:res.request.responseURL,
        flagOne: true,
        loadingOne:false
      })
    }else{
      this.setState({
        loadingTwo:true
      })
      const res = await axios(`/app/${nameTwo}.png?size=200`)
      .catch(err=>{
        this.setState({
          errTwo:err.response.data,
          loadingTwo:false
        });
      });
      this.setState({
        urlTwo:res.request.responseURL,
        flagTwo: true,
        loadingTwo:false
      })
    }
  };

  enterName = (e, index) => {
    e.persist();
    if (e.keyCode === 13) {
      this.getName(index);
    }
  };

  close = index => {
    if (index === 0) {
      this.setState({
        nameOne: "",
        urlOne: "",
        flagOne: false
      });
    } else {
      this.setState({
        nameTwo: "",
        urlTwo: "",
        flagTwo: false
      });
    }
  };

  battle = () => {
    const { nameOne, nameTwo } = this.state;
    this.props.history.push({
      pathname: "/battle/result",
      search: `?player1=${nameOne}&player2=${nameTwo}`
    });
  };

  render() 
    const {
      roles,
      nameOne,
      nameTwo,
      urlOne,
      urlTwo,
      flagOne,
      flagTwo,
      loadingOne,
      loadingTwo,
      errOne,
      errTwo
    } = this.state;
    return (
      <div id="test" className={`container ${battle.battle_box}`}>
        <h3 className={battle.ins}>Instructions</h3>
        <ul className={`row ${battle.main}`}>
          {roles.map(role => (
            <li key={role.icon} className="col-7 col-lg-3">
              <h4>{role.title}</h4>
              <i className={role.icon} style={{ color: role.color }} />
            </li>
          ))}
        </ul>
        <h3 className={battle.players_title}>Players</h3>
        <ul className="row">
          <li className="col-7 col-md-6">
            <h5>Player One</h5>
            <div style={{ display: flagOne ? "none" : "block" }}>
              <input
                type="text"
                className={battle.players}
                placeholder="github username"
                style={{ textIndent: "5%", width: "68%", padding: "1% 0" }}
                name="nameOne"
                value={nameOne}
                onChange={e=>this.inputName(e,0)}
                onKeyDown={e => this.enterName(e, 0)}
              />
              <button
                className={battle.players_btn}
                style={{opacity:loadingOne?'0.6':'1',color:loadingOne?'#000':'',cursor:loadingOne?'not-allowed':'pointer'}}
                type="button"
                disabled={!nameOne.length}
                onClick={() => this.getName(0)}
              >
                {loadingOne?<p style={{margin:0}}><i className="fa fa-spinner fa-spin"/>loading...</p>:'Submit'}
              </button>
              <p 
              style={{display:errOne===''?'none':'block'}}
              className={battle.error}>输入的用户不存在，请重新输入！</p>
            </div>
            <div
              className={battle.players_ok}
              style={{ display: flagOne ? "flex" : "none" }}
            >
              <div className={battle.img_box} style={{ width: "100%" }}>
                <img src={urlOne} alt="" />
                <span>{nameOne}</span>
              </div>
              <button
                className={battle.close_btn}
                type="button"
                onClick={() => this.close(0)}
              >
                <i className="fa fa-times-circle fa-3x" />
              </button>
            </div>
          </li>
          <li className="col-7 col-md-6">
            <h5>Player Two</h5>
            <div style={{ display: flagTwo ? "none" : "block" }}>
              <input
                type="text"
                className={battle.players}
                placeholder="github username"
                name="nameTwo"
                value={nameTwo}
                onChange={e=>this.inputName(e,1)}
                onKeyDown={e => this.enterName(e, 1)}
              />
              <button
                className={battle.players_btn}
                style={{opacity:loadingTwo?'0.6':'1',color:loadingTwo?'#000':'',cursor:loadingTwo?'not-allowed':'pointer'}}
                type="button"
                disabled={!nameTwo.length}
                onClick={() => this.getName(1)}
              >
                {loadingTwo?<p style={{margin:0}}><i className="fa fa-spinner fa-spin"/>loading...</p>:'Submit'}
              </button>
              <p 
              style={{display:errTwo===''?'none':'block'}}
              className={battle.error}>输入的用户不存在，请重新输入！</p>
            </div>
            <div
              className={battle.players_ok}
              style={{ display: flagTwo ? "flex" : "none" }}
            >
              <div className={battle.img_box}>
                <img src={urlTwo} alt="" />
                <span>{nameTwo}</span>
              </div>
              <button
                className={battle.close_btn}
                type="button"
                onClick={() => this.close(1)}
              >
                <i className="fa fa-times-circle fa-3x" />
              </button>
            </div>
          </li>
        </ul>
        <button
          type="button"
          className={battle.ok_btn}
          style={{ display: flagOne && flagTwo ? "block" : "none" }}
          onClick={this.battle}
        >
          Battle
        </button>
      </div>
    );
  }
}

export default Battle;
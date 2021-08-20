import React, { Component } from "react";
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
      flagTwo: false
    };
  }

  inputName = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getName = index => {
    const { nameOne, nameTwo } = this.state;
    if (nameOne === "" && nameTwo === "") {
      return;
    }
    if (index === 0) {
      this.setState({
        urlOne: `https://github.com/${nameOne}.png?size=200`,
        flagOne: true
      });
    } else {
      this.setState({
        urlTwo: `https://github.com/${nameTwo}.png?size=200`,
        flagTwo: true
      });
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

  render() {
    const {
      roles,
      nameOne,
      nameTwo,
      urlOne,
      urlTwo,
      flagOne,
      flagTwo
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
                onChange={this.inputName}
                onKeyDown={e => this.enterName(e, 0)}
              />
              <button
                className={battle.players_btn}
                type="button"
                disabled={!nameOne.length}
                onClick={() => this.getName(0)}
              >
                Submit
              </button>
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
                onChange={this.inputName}
                onKeyDown={e => this.enterName(e, 1)}
              />
              <button
                className={battle.players_btn}
                type="button"
                disabled={!nameTwo.length}
                onClick={() => this.getName(1)}
              >
                Submit
              </button>
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

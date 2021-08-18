import React, { Component } from 'react';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [
        {
          title: 'Enter two Github:',
          icon: 'fa fa-users fa-5x',
          color: 'rgb(255, 191, 116)',
        },
        {
          title: 'Battle',
          icon: 'fa fa-fighter-jet fa-5x',
          color: 'gray',
        },
        {
          title: 'See the winner',
          icon: 'fa fa-trophy fa-5x',
          color: 'rgb(244, 234, 42)',
        },
      ],
      nameOne: '',
      nameTwo: '',
      urlOne: '',
      urlTwo: '',
      flagOne: false,
      flagTwo: false,
    };
  }

    inputName = (e) => {
      e.persist();
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    getName = (index) => {
      const { nameOne, nameTwo } = this.state;
      if (nameOne === '' && nameTwo === '') {
        return;
      }
      if (index === 0) {
        this.setState({
          urlOne: `https://github.com/${nameOne}.png?size=200`,
          flagOne: true,
        });
      } else {
        this.setState({
          urlTwo: `https://github.com/${nameTwo}.png?size=200`,
          flagTwo: true,
        });
      }
    }

    enterName = (e, index) => {
      e.persist();
      if (e.keyCode === 13) {
        this.getName(index);
      }
    }

    close = (index) => {
      if (index === 0) {
        this.setState({
          nameOne: '',
          urlOne: '',
          flagOne: false,
        });
      } else {
        this.setState({
          nameTwo: '',
          urlTwo: '',
          flagTwo: false,
        });
      }
    }

    battle = () => {
      const { nameOne, nameTwo } = this.state;
      this.props.history.push({ pathname: '/battle/result', search: `?player1=${nameOne}&player2=${nameTwo}` });
    }

    render() {
      const {
        roles, nameOne, nameTwo, urlOne, urlTwo, flagOne, flagTwo,
      } = this.state;
      return (
        <div id="test" style={{ flex: 1, marginTop: '2%' }} className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '2%' }}>Instructions</h3>
          <ul className="row" style={{ justifyContent: 'center' }}>
            {
                        roles.map((role) => (
                          <li key={role.icon} style={{ textAlign: 'center' }} className="col-7 col-lg-3">
                            <h4 style={{ fontSize: '20px' }}>{role.title}</h4>
                            <i
                              className={role.icon}
                              style={{
                                padding: '14%', backgroundColor: '#eee', color: role.color, width: '70%',
                              }}
                            />
                          </li>
                        ))
                    }
          </ul>
          <h3 style={{ textAlign: 'center', margin: '4% 0 2%' }}>Players</h3>
          <ul className="row">
            <li className="col-7 col-md-6">
              <h5>Player One</h5>
              <div style={{ display: flagOne ? 'none' : 'block' }}>
                <input
                  type="text"
                  placeholder="github username"
                  style={{ textIndent: '5%', width: '68%', padding: '1% 0' }}
                  name="nameOne"
                  value={nameOne}
                  onChange={this.inputName}
                  onKeyDown={(e) => this.enterName(e, 0)}
                />
                <button type="button" disabled={!nameOne.length} style={{ width: '30%', padding: '1% 0', marginLeft: '2%' }} onClick={() => this.getName(0)}>Submit</button>
              </div>
              <div style={{
                display: flagOne ? 'flex' : 'none', alignItems: 'center', justifyContent: 'space-between', padding: '4%', backgroundColor: 'rgb(238, 238, 238)', borderRadius: '4px',
              }}
              >
                <div style={{ width: '100%' }}>
                  <img
                    src={urlOne}
                    alt=""
                    style={{
                      width: '50px', height: '50px', marginRight: '2%', display: 'inline-block',
                    }}
                  />
                  <span style={{ color: '#1890ff', fontSize: '32px' }}>{nameOne}</span>
                </div>
                <button type="button" onClick={() => this.close(0)} style={{border:0}}>
                  <i className="fa fa-times-circle fa-3x" style={{ color: 'red' }}/>
                </button>
                
              </div>
            </li>
            <li className="col-7 col-md-6">
              <h5>Player Two</h5>
              <div style={{ display: flagTwo ? 'none' : 'block' }}>
                <input
                  type="text"
                  placeholder="github username"
                  style={{ textIndent: '5%', width: '68%', padding: '1% 0' }}
                  name="nameTwo"
                  value={nameTwo}
                  onChange={this.inputName}
                  onKeyDown={(e) => this.enterName(e, 1)}
                />
                <button type="button" disabled={!nameTwo.length} style={{ width: '30%', padding: '1% 0', marginLeft: '2%' }} onClick={() => this.getName(1)}>Submit</button>
              </div>
              <div style={{
                display: flagTwo ? 'flex' : 'none', alignItems: 'center', justifyContent: 'space-between', padding: '4%', backgroundColor: 'rgb(238, 238, 238)', borderRadius: '4px',
              }}
              >
                <div style={{ width: '100%' }}>
                  <img
                    src={urlTwo}
                    alt=""
                    style={{
                      width: '50px', height: '50px', marginRight: '2%', display: 'inline-block',
                    }}
                  />
                  <span style={{ color: '#1890ff', fontSize: '32px' }}>{nameTwo}</span>
                </div>
                <button type="button" onClick={() => this.close(1)} style={{border:0}}>
                  <i className="fa fa-times-circle fa-3x" style={{ color: 'red' }} />
                </button>
              </div>
            </li>
          </ul>
          <button
            type="button"
            style={{
              display: flagOne && flagTwo ? 'block' : 'none', margin: '2% auto', padding: '1% 2%', borderRadius: '5px',
            }}
            onClick={this.battle}
          >Battle
          </button>
        </div>
      );
    }
}

export default Battle;

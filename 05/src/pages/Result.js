import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const url = this.props.location.search;
    const p1 = url.replace('?', '').split('&')[0].split('=')[1];
    const p2 = url.replace('?', '').split('&')[1].split('=')[1];
    const res = await axios.all([
      axios.get(`https://api.github.com/users/${p1}`),
      axios.get(`https://api.github.com/users/${p2}`),
    ]);
    const arr = [];
    res.forEach((item) => {
      const obj = {
        name: item.data.name,
        pos: item.data.location,
        login: item.data.login,
        url: item.data.avatar_url,
        scores: item.data.public_repos,
        following: item.data.following,
        followers: item.data.followers,
      };
      arr.push(obj);
    });
    const s1 = arr[0];
    const s2 = arr[1];
    if (s1.scores > s2.scores) {
      s1.result = 'Winner';
      s2.result = 'Loser';
    } else if (s1.scores === s2.scores) {
      s1.result = 'Draw';
      s2.result = 'Draw';
    } else {
      s1.result = 'Loser';
      s2.result = 'Winner';
    }
    setTimeout(() => {
      this.setState({ data: arr });
    }, 1000);
  }

    componentWillUnmount = () => {
      this.setState = () => {

      };
    }

    render() {
      const { data } = this.state;
      if (data.length === 0) {
        return (
          <div style={{ flex: 1, marginTop: '2%' }}>
            <h4 style={{ textAlign: 'center' }}><i className="fa fa-spinner fa-spin" /> Loading ...</h4>
          </div>
        );
      }
      return (
        <div style={{ flex: 1, margin: '2% 0' }}>
          <ul style={{
            width: '100%', display: 'flex', justifyContent: 'center', flex: 1,
          }}
          >
            {
                        data.map((item) => (
                          <li
                            key={item.login}
                            style={{
                              width: '10.4%', textAlign: 'center', padding: '1.67%', backgroundColor: 'rgb(221, 221, 221)', margin: '0 6.7%', boxSizing: 'content-box', borderRadius: '10px',
                            }}
                          >
                            <h2>{item.result}</h2>
                            <img
                              src={item.url}
                              alt=""
                              style={{ width: '100%', height: 'auto', margin: '8% 0' }}
                            />
                            <h4 style={{ marginBottom: '10%' }}>Scores:{item.scores}</h4>
                            <h4 style={{ color: '#6FAFEB' }}>{item.name == null ? item.login : item.name}</h4>
                            <p style={{ margin: 0, textAlign: 'left' }}>
                              <i className="fa fa-location-arrow"> {item.pos}</i>
                            </p>
                            <p style={{ margin: 0, textAlign: 'left' }}>
                              <i className="fa fa-group"> {item.followers}</i>
                            </p>
                            <p style={{ margin: 0, textAlign: 'left' }}>
                              <i className="fa fa-user-plus"> {item.following}</i>
                            </p>
                            <p style={{ margin: 0, textAlign: 'left' }}>
                              <i className="fa fa-code"> {item.scores}</i>
                            </p>
                          </li>
                        ))
                    }
          </ul>
          <NavLink to="/battle" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              style={{
                display: 'block', margin: '0 auto', padding: '0.5% 1%', borderRadius: '4px',
              }}
            >Reset
            </button>
          </NavLink>
        </div>
      );
    }
}

export default Result;

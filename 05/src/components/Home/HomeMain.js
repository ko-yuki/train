import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import home from "./HomeMain.css";
import "lazysizes";

// 定义主要内容
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: {
        pageNum: 1,
        data: []
      },
      javascript: {
        pageNum: 1,
        data: []
      },
      ruby: {
        pageNum: 1,
        data: []
      },
      java: {
        pageNum: 1,
        data: []
      },
      css: {
        pageNum: 1,
        data: []
      },
      python: {
        pageNum: 1,
        data: []
      },
      err: ""
    };
  }

  componentDidMount() {
    const param = this.props.location.pathname.split("/")[1];
    // 先从sessionStorage中读取数据
    const data = sessionStorage.getItem(param);
    if (data) {
      this.setState({
        [param]: JSON.parse(data)
      });
    } else {
      this.getData(param);
    }
  }

  componentWillUnmount = () => {
    this.setState = () => {};
  };

  // 请求数据
  getData = async param => {
    let res = null;
    try {
      // 请求数据
      if (param === "all") {
        res = await axios({
          url:
            "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories",
          params: {
            per_page: 10,
            page: this.state.all.pageNum
          }
        });
      } else {
        res = await axios({
          url: `https://api.github.com/search/repositories?q=stars:%3E1+language:${param}&sort=stars&order=desc&type=Repositories`,
          params: {
            per_page: 10,
            page: this.state[param].pageNum
          }
        });
      }
      const arr = [];
      res.data.items.forEach(item => {
        const obj = {
          id: item.id,
          url: item.owner.avatar_url,
          name: item.owner.login,
          infos: [
            {
              text: item.owner.login,
              icon: "fa-user",
              color: "#febf6b"
            },
            {
              text: item.watchers,
              end: " stars",
              icon: "fa-star",
              color: "#fed901"
            },
            {
              text: item.forks,
              end: " forks",
              icon: "fa-code-fork",
              color: "#a2cdef"
            },
            {
              text: item.open_issues,
              end: " open issues",
              icon: "fa-warning",
              color: "#f8868f"
            }
          ]
        };
        arr.push(obj);
      });
      const newParam = {
        pageNum: this.state[param].pageNum + 1,
        data: this.state[param].data.concat(arr)
      };
      setTimeout(() => {
        this.setState(
          {
            [param]: newParam,
            err: ""
          },
          () => {
            sessionStorage.setItem(param, JSON.stringify(newParam));
          }
        );
      }, 1500);
    } catch (error) {
      setTimeout(() => {
        this.setState({ err: error });
      }, 1500);
    }
  };

  render() {
    let msg = "Loading ...";
    if (this.state.err !== "") {
      msg = "数据请求失败，请刷新页面重试！";
    } else {
      msg = "Loading ...";
    }
    const param = this.props.location.pathname.split("/")[1];
    return (
      <div className={`container ${home.home_box}`}>
        <InfiniteScroll
          style={{ overflow: "unset" }}
          dataLength={this.state[param].data.length}
          next={() => this.getData(param)}
          hasMore
          loader={
            <h4 className={home.loading}>
              <i
                className="fa fa-spinner fa-spin"
                style={{
                  display: this.state.err === "" ? "inline-block" : "none"
                }}
              />{" "}
              {msg}
            </h4>
          }
        >
          <ul className={`row ${home.project_box}`}>
            {this.state[param].data.map((item, idx) => (
              <li
                className={`col-9 col-sm-6 col-md-4 col-lg-3 ${home.project_item}`}
                key={idx}
              >
                <h2>#{idx + 1}</h2>
                <img data-src={item.url} alt="" className="lazyload" />
                <h3>{item.name}</h3>
                <ul className={`fa-ul ${home.icon_box}`}>
                  {item.infos.map(info => (
                    <li key={info.icon}>
                      <i
                        style={{ color: info.color }}
                        className={`icon fa ${info.icon}`}
                      >
                        <span>
                          {info.text}
                          {info.end}
                        </span>
                      </i>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}
export default Main;

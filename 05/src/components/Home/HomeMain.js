import React from 'react';
import axios from "axios";
import "lazysizes";
import InfiniteScroll from "react-infinite-scroll-component";

// 定义主要内容
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all:{
                pageNum:1,
                data:[]
            },
            javascript:{
                pageNum:1,
                data:[]
            },
            ruby:{
                pageNum:1,
                data:[]
            },
            java:{
                pageNum:1,
                data:[]
            },
            css:{
                pageNum:1,
                data:[]
            },
            python:{
                pageNum:1,
                data:[]
            },
            err:""
        };
    }
    componentDidMount(){
        let param = this.props.location.pathname.split("/")[1];
        // 先从sessionStorage中读取数据
        let data = sessionStorage.getItem(param);
        if(data){
            this.setState({
                [param]:JSON.parse(data)
            })
        }else{
            this.getData(param)
        }
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }
    // 请求数据
    getData = async(param)=>{
        let res = null;
        try {
            // 请求数据
            if(param == "all"){
                res = await axios({
                    url:"https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories",
                    params:{
                        per_page:10,
                        page:this.state.all.pageNum
                    }
                });
            }else {
                res = await axios({
                    url:`https://api.github.com/search/repositories?q=stars:%3E1+language:${param}&sort=stars&order=desc&type=Repositories`,
                    params:{
                        per_page:10,
                        page:this.state[param].pageNum
                    }
                });
            }
            let arr = [];
            res.data.items.forEach(item=>{
                let obj = {
                    id:item.id,
                    url:item.owner.avatar_url,
                    name:item.owner.login,
                    infos:[
                        {
                            text:item.owner.login,
                            icon:"fa-user",
                            color:"#febf6b"
                        },
                        {
                            text:item.watchers,
                            end:" stars",
                            icon:"fa-star",
                            color:"#fed901"
                        },
                        {
                            text:item.forks,
                            end:" forks",
                            icon:"fa-code-fork",
                            color:"#a2cdef"
                        },
                        {
                            text:item.open_issues,
                            end:" open issues",
                            icon:"fa-warning",
                            color:"#f8868f"
                        }
                    ]
                };
                arr.push(obj);
            });
            let newParam = {
                pageNum:this.state[param].pageNum+1,
                data:this.state[param].data.concat(arr)
            }
            setTimeout(() => {
                this.setState({
                    [param]:newParam,
                    err:""
                },()=>{
                    sessionStorage.setItem(param,JSON.stringify(newParam));
                });
            }, 1500);
        } catch (error) {
            setTimeout(() => {
                this.setState({err:error});
            }, 1500);
        }
    }
    render(){
        let msg = "Loading ...";
        if(this.state.err != ""){
            msg = "403,数据请求失败，请刷新页面重试！";
        }else {
            msg = "Loading ...";
        }
        let param = this.props.location.pathname.split("/")[1];
        return <div style={{margin:"12px auto 0"}} className="container">
                <InfiniteScroll
                style={{overflow:"unset"}}
                dataLength={this.state[param].data.length}
                next={()=>this.getData(param)}
                hasMore={true}
                loader={<h4 style={{textAlign:"center"}}><i className="fa fa-spinner fa-spin" style={{display:this.state.err==""?"inline-block":"none"}}></i> {msg}</h4>}
                >
                    <ul style={{justifyContent:"space-around"}} className="row">
                        {
                            this.state[param].data.map((item,idx)=>(
                                <li 
                                style={{backgroundColor:"#ebebeb",borderRadius:"4px",paddingBottom:"3%",marginBottom:"18px"}} 
                                className="col-9 col-sm-6 col-md-4 col-lg-3" 
                                key={idx}>
                                    <h2 style={{textAlign:"center",fontSize:"24px",margin:"48px 0 25px"}}>#{idx+1}</h2>
                                    <img data-src={item.url} className="lazyload" style={{width:"61%",height:"auto",margin:"0 auto",borderRadius:"4px"}} />
                                    <h3 style={{textAlign:"center",fontSize:"20px",margin:"22px 0",color:"#b42c1e"}}>{item.name}</h3>
                                    <ul className="fa-ul" style={{width:"100%",marginLeft:"4%"}}>
                                        {
                                            item.infos.map((info,idx)=>(
                                                <li style={{lineHeight:"25px",marginBottom:"10px"}}key={idx}>
                                                    <i style={{fontSize:"16px",color:info.color}} className={"icon fa "+info.icon}>
                                                        <span style={{marginLeft:"10px",color:"black",fontWeight:"600"}}>{info.text}{info.end}</span>
                                                    </i>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                    </InfiniteScroll>
                </div>
    }
}
export default Main;
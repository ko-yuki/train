const {HashRouter,NavLink,Route,Redirect} = ReactRouterDOM;
// 定义头部
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
                    alignItems:"center"
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

// 定义尾部
class Footer extends React.Component{
    render(){
        return <p style={{
                    width:"100%",
                    lineHeight:"50px",
                    textAlign:"center",
                    backgroundColor:"#ebebeb",
                    fontSize:"14px"
                }}>版权所有 &copy; xuezhonglin</p>
    }
}

// 定义主要内容
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all:[],
            javascript:[],
            ruby:[],
            java:[],
            css:[],
            python:[],
            err:""
        };
    }
    async componentDidMount(){
        let param = this.props.location.pathname.split("/")[1];
        let res = null;
        // 先从sessionStorage中读取数据
        try {
            let data = sessionStorage.getItem(param);
            if(data){
                res = JSON.parse(data);
            }else{
                // 请求数据
                if(param == "all"){
                    res = await axios.get("https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories");
                    sessionStorage.setItem(param,JSON.stringify(res));
                }else {
                    res = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${param}&sort=stars&order=desc&type=Repositories`);
                    sessionStorage.setItem(param,JSON.stringify(res));
                }
            }
            let arr = [];
            res.data.items.forEach((item,idx)=>{
                let obj = {
                    id:item.id,
                    index:idx+1,
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
            })
            this.setState({[param]:arr,err:""});
        } catch (error) {
            this.setState({err:error});
        }
    }
    render(){
        if(this.state.err != ""){
            return <h2 style={{marginBottom:"52%"}}>403,请刷新页面重试！</h2>
        }
        let param = this.props.location.pathname.split("/")[1];
        return <div style={{width:1165,margin:"12px auto 0",flex:1}}>
                    <ul style={{
                            display:"flex",
                            justifyContent:"space-around",
                            flexWrap:"wrap"
                        }}>
                        {
                            this.state[param].map(item=>(
                                <li style={{width:"24.7%",backgroundColor:"#ebebeb",borderRadius:"4px",paddingBottom:"32px",marginBottom:"18px"}} key={item.id}>
                                    <h2 style={{textAlign:"center",fontSize:"24px",margin:"48px 0 25px"}}>#{item.index}</h2>
                                    <img data-src={item.url} className="lazyload" style={{width:"150px",height:"150px",margin:"0 auto",borderRadius:"4px"}} />
                                    <h3 style={{textAlign:"center",fontSize:"20px",margin:"22px 0",color:"#b42c1e"}}>{item.name}</h3>
                                    <ul className="fa-ul">
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
                </div>
    }
}

class App extends React.Component{
    render(){
        let url = window.location.href.split("#")[1];
        return  <div style={{
                    height:"100%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}>
                    <Header></Header>
                    <Redirect exact={true} from="/" to={url=="/"?"/all":url}></Redirect>
                    <Route path="/all" component={Main}></Route>
                    <Route path="/javascript" component={Main}></Route>
                    <Route path="/ruby" component={Main}></Route>
                    <Route path="/java" component={Main}></Route>
                    <Route path="/css" component={Main}></Route>
                    <Route path="/python" component={Main}></Route>
                    <Footer></Footer>
                </div>
    }
}
ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById("app")
)
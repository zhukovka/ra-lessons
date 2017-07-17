class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: "initial state"
    }
  }

  componentWillMount(){
    setTimeout(()=>{
      this.setState({test:"async set state 0ms componentWillMount"});
    }, 0);
  }

  render(){
    return (
      <div>
        {this.state.test}
      </div>
    );
  }
}

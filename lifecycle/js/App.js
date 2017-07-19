class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        <LifeComponent name={this.state.name} />
      </div>
    );
  }
}

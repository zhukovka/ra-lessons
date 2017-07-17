class LifeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stages:["Инициализация (constructor)"]
    }
  }
  componentWillMount(){
    this.setState({stages: [...this.state.stages, "Компонент будет монтирован (componentWillMount)"]});
  }
  componentDidMount(){
    this.setState({stages: [...this.state.stages, "Компонент был монтирован (componentDidMount)"]});
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.name}
        </h1>
        <ol>
          {this.state.stages.map(stage=>(<li>{stage}</li>))}
        </ol>
      </div>)
  }
}
LifeComponent.defaultProps = {
  name: 'Компонент'
};

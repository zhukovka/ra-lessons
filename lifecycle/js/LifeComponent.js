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

  componentWillReceiveProps(){
    this.setState({stages: [...this.state.stages, "Компонент получит свойства (componentWillReceiveProps)"]});
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
        <ul>
          <li>
            Будет ли компонент обновлен? (shouldComponentUpdate)
          </li>
          <li>
            Компонент будет обновлен (componentWillUpdate)
          </li>
          <li>
            Компонент был обновлен (componentDidUpdate)
          </li>
          <li>
            Компонент будет извлечен (componentWillUnmount)
          </li>


        </ul>
      </div>)
  }
}
LifeComponent.defaultProps = {
  name: 'Компонент'
};

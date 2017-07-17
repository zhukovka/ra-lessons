class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsRate: 40,
      javaRate: 90,
      sharpRate: 30
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h2>Популярность языков программирования</h2>
        <div>
          JavaScript:
          <input type="text" name="jsRate" value={this.state.jsRate} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          Java:
          <input type="text" name="javaRate" value={this.state.javaRate} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          C#:
          <input type="text" name="sharpRate" value={this.state.sharpRate} onChange={this.handleChange.bind(this)} />
        </div>
        <CircleChart rates={[this.state.jsRate, this.state.javaRate,
          this.state.sharpRate]} labels={[
            'JavaScript',
            'Java',
            'C#'
          ]}/>
        </div>
      );
    }
  }

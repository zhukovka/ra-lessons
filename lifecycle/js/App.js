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
        <WindowResizeDetector />
      </div>
    );
  }
}

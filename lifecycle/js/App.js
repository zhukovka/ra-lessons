class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detectorIsEnabled: false
    };
  }

  toggleDetectorState() {
    this.setState({
      detectorIsEnabled: !this.state.detectorIsEnabled
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleDetectorState.bind(this)}>
          {this.state.detectorIsEnabled ? "Выключить детектор" : "Включить детектор"}
        </button>
        {this.state.detectorIsEnabled ? <WindowResizeDetector /> : null}
      </div>
    );
  }
}

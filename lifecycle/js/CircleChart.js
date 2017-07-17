class CircleChart extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      datasets: [{
        data: [40, 90, 30],
        backgroundColor: ['rgb(255, 205, 86)', 'rgb(153, 102, 255)', 'rgb(75, 192, 192)']
      }], labels: [
        'JavaScript',
        'Java',
        'C#'
      ]
    };
    this.state = {
      jsRate: 40,
      javaRate: 90,
      sharpRate: 30
    }
  }
  componentDidMount() {
    this.chart = new Chart("myChart", {
      type: 'doughnut',
      data: this.data
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Популярность языков программирования</h2>
        <div>
          JavaScript:
          <input type="text" name="jsRate" value={this.state.jsRate}
            onChange={this.handleChange.bind(this)} />
          </div> <div>
            Java:
            <input type="text" name="javaRate" value={this.state.javaRate}
              onChange={this.handleChange.bind(this)} />
            </div>
            <div>
              C#:
              <input type="text" name="sharpRate" value={this.state.sharpRate}
                onChange={this.handleChange.bind(this)} />
              </div>
              <canvas id="myChart" width="100" height="100" />
            </div>
          );
        }
      }

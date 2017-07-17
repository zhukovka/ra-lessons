class CircleChart extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      datasets: [{
        data: props.rates,
        backgroundColor: ['rgb(255, 205, 86)', 'rgb(153, 102, 255)', 'rgb(75, 192, 192)']
      }], labels: props.labels
    };
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
  componentWillReceiveProps(newProps) {
    this.updateChart(newProps.rates);
  }
  updateChart(rates) {
    this.chart.data.datasets[0].data = rates;
    this.chart.update();
  }
  render() {
    return (<canvas id="myChart" width="100" height="100" />);
  }
}

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
  }
  componentDidMount() {
    this.chart = new Chart("myChart", {
      type: 'doughnut',
      data: this.data
    });
  }
  render() {
    return (
      <div>
        <h2>Популярность языков программирования</h2>
        <canvas id="myChart" width="100" height="100" />
      </div> );
    }
  }

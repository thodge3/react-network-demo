import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Chart3 extends Component {
  state = {
    fetchedArray: [],
    options: {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'P0 and P1'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      yAxis: {
        title: {
          text: 'Incidents Raised'
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      credits: false,
      series: [
        {
          name: 'P0',
          marker: {
            symbol: 'square'
          },
          data: []
        },
        {
          name: 'P1',
          marker: {
            symbol: 'diamond'
          },
          data: []
        }
      ]
    },
    years: []
  };

  initialRender = () => {
    let fetchedArray,
      years = [];
    let initialOptions = {};
    let p0sum = [];
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        years = Object.keys(data);
        fetchedArray = Object.values(data);

        for (let i = 0; i < fetchedArray.length; i++) {
          let y = Object.values(fetchedArray[i][0]);
          let sum0Closed = 0;
          let sum0Total = 0;
          for (let j = 0; j < y.length; j++) {
            sum0Closed += y[j].P0 - y[j].P0Open;
            sum0Total += y[j].P0;
            if (j === y.length - 1) {
              let per = (sum0Closed * 100) / sum0Total;
              p0sum.push(per);
            }
          }
        }

        initialOptions = {
          chart: {
            type: 'spline'
          },
          title: {
            text: '% within SLA by P0'
          },
          xAxis: {
            categories: years
          },
          yAxis: {
            title: {
              text: 'Percentage'
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true,
            valueDecimals: 2
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: [
            {
              name: 'P0',
              data: p0sum
            }
          ]
        };

        this.setState({
          options: initialOptions,
          fetchedArray,
          years
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.initialRender();
  }

  handleChange = e => {
    const { fetchedArray, years } = this.state;
    const { value } = e.target;
    let index = 0;

    if (value === 'All') {
      this.initialRender();
    }

    for (let i = 0; i < years.length; i++) {
      if (years[i] === value) index = i;
    }

    const y = Object.values(fetchedArray[index][0]);

    const P0 = y.map(item => ((item.P0 - item.P0Open) / item.P0) * 100);

    const newOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: '% within SLA by P0'
      },
      xAxis: {
        categories: ['Jan', '', '', '', '', '', '', '', '', '', '', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Percentage'
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [
        {
          name: 'P0',
          data: P0
        }
      ]
    };

    this.setState({
      options: newOptions
    });
  };
  render() {
    const { options, years } = this.state;
    return (
      <div align='center'>
        <select onChange={this.handleChange}>
          <option>All</option>
          {years.map(year => (
            <option key={year}>{year}</option>
          ))}
        </select>

        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default Chart3;

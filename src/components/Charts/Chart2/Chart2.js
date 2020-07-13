import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Chart2 extends Component {
  state = {
    fetchedArray: [],
    options: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Trend of Open Issues'
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
          text: 'No. of open incidents'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      credits: false,
      series: [
        {
          name: 'P0',
          data: []
        },
        {
          name: 'P1',
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
    let p1sum = [];
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        years = Object.keys(data);
        fetchedArray = Object.values(data);

        for (let i = 0; i < fetchedArray.length; i++) {
          let y = Object.values(fetchedArray[i][0]);
          let sum0 = 0;
          let sum1 = 0;
          for (let j = 0; j < y.length; j++) {
            sum0 += y[j].P0Open;
            sum1 += y[j].P1Open;
            if (j === y.length - 1) {
              p0sum.push(sum0);
              p1sum.push(sum1);
            }
          }
        }

        initialOptions = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Trend of Open Issues'
          },
          xAxis: {
            categories: years
          },
          yAxis: {
            title: {
              text: 'No. of open incidents'
            }
          },
          tooltip: {
            headerFormat:
              '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
              '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [
            {
              name: 'P0',
              data: p0sum
            },
            {
              name: 'P1',
              data: p1sum
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

    const P0 = y.map(item => item.P0Open);
    const P1 = y.map(item => item.P1Open);

    const newOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Trend of Open Issues'
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
          text: 'No. of open incidents'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'P0',
          data: P0
        },
        {
          name: 'P1',
          data: P1
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

export default Chart2;

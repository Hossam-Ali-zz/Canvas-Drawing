import React from 'react';
import Chart from 'react-google-charts';
import { Spinner } from 'reactstrap';

const LineChart = ({ chartData = [], yAxisTitle }) => (
  <Chart
    width={'1200px'}
    height={'600px'}
    chartType="LineChart"
    loader={<Spinner color="dark" />}
    data={[['value', yAxisTitle], ...chartData]}
    options={{
      vAxis: {
        title: yAxisTitle,
      },
      series: {
        0: { curveType: 'function' },
      },
    }}
    rootProps={{ 'data-testid': '1' }}
  />
);

export default LineChart;

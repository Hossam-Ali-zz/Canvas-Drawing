import React, { useState, useEffect } from 'react';
import LineChart from '../../components/LineChart';
import './styles.scss';

const Statistics = () => {
  const [statisticsData, setStatisticsData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('savedDrawing'));
    if (!data) {
      setIsEmpty(true);
    } else {
      const groupByColor = {};
      data.lines.forEach(
        (line) =>
          (groupByColor[line.brushColor] = groupByColor[line.brushColor]
            ? groupByColor[line.brushColor] + 1
            : 1)
      );
      setStatisticsData(Object.entries(groupByColor));
    }
  }, []);

  return isEmpty ? (
    <h1 className="empty-state">There is no saved data</h1>
  ) : (
    <LineChart yAxisTitle="Number of objects" chartData={statisticsData} />
  );
};

export default Statistics;

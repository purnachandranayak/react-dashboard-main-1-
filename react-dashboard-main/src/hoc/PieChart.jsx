import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

const CustomPieChart = () => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Destroy the existing Chart instance, if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const chartConfig = {
        type: 'pie', // Set the chart type to 'pie'
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              data: [30, 40, 30], // Specify data for the pie chart
              backgroundColor: ['red', 'blue', 'green'], // Specify colors for each segment
            },
          ],
        },
        options: {}, // Add your chart options here
      };

      // Create the new Chart instance and store it in the ref
      chartInstanceRef.current = new Chart(ctx, chartConfig);
    }
  }, []); // The empty dependency array ensures that this effect runs after the component is mounted.

  return (
    <canvas ref={canvasRef} width={100}  /> // Adjust canvas dimensions
  );
};

export default CustomPieChart;

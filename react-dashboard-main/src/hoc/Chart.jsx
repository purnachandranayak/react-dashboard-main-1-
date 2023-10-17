import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

const CustomChart = () => {
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
        type: 'bar',
        data: {
          datasets: [
            {
              label: 'Bar Dataset',
              data: [10, 20, 30, 40],
              order: 2,
            },
            {
              label: 'Line Dataset',
              data: [10, 10, 10, 10],
              type: 'line',
              order: 1,
            },
          ],
          labels: ['January', 'February', 'March', 'April'],
        },
        options: {}, // Add your chart options here
      };

      // Create the new Chart instance and store it in the ref
      chartInstanceRef.current = new Chart(ctx, chartConfig);
    }
  }, []); // The empty dependency array ensures that this effect runs after the component is mounted.

  return (
    <canvas ref={canvasRef} />
  );
};

export default CustomChart;

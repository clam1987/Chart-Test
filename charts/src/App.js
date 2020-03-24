import React from 'react';
import logo from './logo.svg';
import './App.css';
import RenderChart from './components/LineCharts/LineCharts';
import AreaCharts from './components/AreaCharts/AreaCharts';
import BarCharts from './components/BarCharts/BarCharts';
import PieCharts from './components/PieCharts/PieCharts';
import RadarCharts from './components/RadarCharts/RadarCharts';
import ScatterLineCharts from './components/ScatterLineCharts/ScatterLineCharts';

function App() {
  return (
    <div className="App">
      <RenderChart />
      <AreaCharts />
      <BarCharts />
      <PieCharts />
      <RadarCharts />
      <ScatterLineCharts />
    </div>
  );
}

export default App;

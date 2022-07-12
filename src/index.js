import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const DATA = [];
for(let i=1; i<=42;i++) {
  DATA.push({id:`day-${i}`, name:`day-${i}`, isToday:true, hasEvent:true, isSelected:true})
}
const EVENTS = [{id:`todo-0`, name: "Eat"}, {id:"todo-1", name:"sleep"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dayList={DATA} eventList={EVENTS} displayMode="Week"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

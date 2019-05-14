const React = require("react");
const ReactDOM = require('react-dom');
import Home from './components/Home';
ReactDOM.render(
    <Home url = 'public/resume.json'/>,
    document.getElementById("content")
);
const React = require("react");
const ReactDOM = require('react-dom');
const Home = require ("./components/Home");
ReactDOM.render(
    <Home url = {'/public/resume.json'}/>,
    document.getElementById("content")
);
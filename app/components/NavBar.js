const React = require("react");
var NavBar = React.createClass({
    render: function(){
        return(
        <nav id = "nav-wrap" className = "opaque">
            <a className = "mobile-btn" href = "#nav-wrap" title = "Show navigation">Show navigation</a>
            <a className = "mobile-btn" href = "#" title = "Hide navigation">Hide navigation</a>
            <ul id = "nav" className = "nav">
                <li className = "current">
                    <a className = "smoothscroll" href = "#home">Home</a>
                </li>
                <li>
                    <a className = "smoothscroll" href = "#about">About</a>
                </li>
                <li> 
                    <a className = "smoothscroll" href = "#education">Education</a>
                </li>
                <li>
                    <a className = "smoothscroll" href = "#work">Work Experience</a>
                </li>
                <li>
                    <a className = "smoothscroll" href = "#skills">Skills</a>
                </li>
                <li>
                    <a className = "smoothscroll" href = "#portfolio">Portfolio</a>
                </li>
                <li>
                    <a className = "smoothscroll" href = "#references">References</a>
                </li>
            {/* end nav */}
            </ul>
        {/* end nav-wrap*/}
        </nav>
    )}
});

export default NavBar;
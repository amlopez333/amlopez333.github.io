const React = require("react");
var ScrollDown = React.createClass({
    render: function(){
        return(
            <p className = "scrolldown">
                <a className = "smoothscroll" href = "#about">
                    <i className = "icon-down-circle"/>
                </a>
            </p>
        )
    }
});

export default ScrollDown;
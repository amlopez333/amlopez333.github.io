const React = require("react");
var Header = React.createClass({
    getInitialState: function(){
        return {
            window: {
                height: 0,
                width: 0
            }
        }
    },
    updateDimensions: function(){
        return this.setState(
            {
                window: {
                    height: window.innerHeight,
                    width: window.innerWidth
                }   
            }
        )
    },
    componentWillMount: function(){
        this.updateDimensions();
    },
    componentDidMount: function(){
        return window.addEventListener("resize", this.updateDimensions());
    },
    render: function(){
        return(
            <header id = "home">
                {this.props.children}
            </header>
        )
    }
});

export default Header;
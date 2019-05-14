const React = require('react');
var Highlights = React.createClass({
    render: function(){
        return(
            <ul className = "highlights">
                {this.props.highlights.map(function(highlight, index){
                    return(
                        <li key = {index}>{highlight}</li>
                    );
                }
                )}
            </ul>
        );
    }
});

export default Highlights;
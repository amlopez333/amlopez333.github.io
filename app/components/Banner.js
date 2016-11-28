const React = require("react");
import SocialMedia from './SocialMedia';
var Banner = React.createClass({
    render: function(){
        return(
            <div className = "row banner">
                <div className = "banner-text">
                    <h1 className = "responsive-headline">{this.props.basics.name}</h1>
                    <br />
                    <hr />
                    <SocialMedia profiles = {this.props.basics.profiles} ul_class = 'social'/>
                </div>
            </div>
        )
    }
});

export default Banner;
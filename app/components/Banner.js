const React = require("react");
const SocialMedia = require("./SocialMedia")
var Banner = React.createClass({
    render: function(){
        return(
            <div className = "row banner">
                <div className = "banner-text">
                    <h1 className = "responsive-headline">{this.props.basics.name}</h1>
                    <hr />
                    <br />
                    <SocialMedia profiles = {this.props.basics.profiles}/>
                </div>
            </div>
        )
    }
});
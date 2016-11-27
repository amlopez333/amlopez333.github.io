const React = require("react");
function mapIcon(network){
        const socialMedia = network.replace(/ /g, '-');
        console.log(socialMedia.toString());
        switch (socialMedia) {
            case 'email':
                return(
                    <i className = {"fa fa-envelope"}></i>
                );
            default:
                return(
                    <i className = {"fa fa-" + socialMedia}></i>
                );
        }
    };
var SocialMedia = React.createClass({
    
    render: function(){
       return(
            <ul className = "social">
                {this.props.profiles.map(function(profile, index){
                    var icon = mapIcon(profile.network.toLowerCase());
                    <li key = {index}>
                        <a href = {profile.url}>
                            {icon}
                        </a>
                    </li>
                })}
            </ul>
        )
   }
}); 
export default SocialMedia;
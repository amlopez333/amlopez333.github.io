const React = require('react');
var About = React.createClass({
    render: function(){
        const summary = this.props.basics.summary.split('\n');
        return(
            <section id = "about">
                {
                    /* About section */
                }
                <div className = "row">
                    <div className = "three columns">
                        <img className = "profile-pic" src = "images/profilepic.png" alt = {this.props.basics.name} />
                    </div>
                <div className = "nine columns main-col">
                    <h2>About Me</h2>
                    {summary.map(function(content, index){
                        return (<p key = {index}>{content}</p>);
                        }
                    )}
                    <div className = "row">
                        <div className = "columns contact-details">
                            <h2>Contact Details</h2>
                            <p className = "address">
                                <span>{this.props.basics.name}</span>
                                <br />
                                <span>{this.props.basics.location.address}
                                <br />
                                      {this.props.basics.location.city}, {this.props.basics.location.region} 
                                      {this.props.basics.location.postalCode} {this.props.basics.location.countryCode}
                                </span>
                                <br />
                                <span>{this.props.basics.phone}</span>
                                <br />
                                <span>{this.props.basics.email}</span>
                            </p>
                        </div>
                    {/* end row */}
                    </div>
                {/* end main-col */}
                </div>
            </div>
        {/* end section */}
        </section>
        )
    }    
});

export default About;
'use strict';
const React = require("react");
import NavBar from './NavBar';
import About from './About';
import ScrollDown from './ScrollDown';
import Header from './Header';
import Banner from './Banner';
var Home = React.createClass({
   getInitialState: function(){
        return {resume: {
     
           
  basics: {
    name: "",
    label: "",
    picture: "",
    email: "",
    phone: "",
    website: "",
    summary: "",
    location: {
      address: "",
      postalCode: "",
      city: "",
      countryCode: "",
      region: ""
    },
    profiles: [{
      network: "",
      username: "",
      url: ""
    }]
  }}};
    },
    loadResume: function(){
        $.ajax(
            {   url: this.props.url,
                dataType: 'json',
                success: function(data){
                    this.setState({resume: data});
                }.bind(this),
                error: function(xhr, status, err){
                    console.log(this.props.url, status, err.toString());    
                }.bind(this)
            }
        )
    },
    componentDidMount: function(){
        console.log('monte');
        this.loadResume();
        
    },
    render: function(){
        return(
            <div>
                <Header>
                    <NavBar />
                    <Banner basics = {this.state.resume.basics} />
                    <ScrollDown />
                </Header>
                <About basics = {this.state.resume.basics}/>
            </div>
        )
    }
});

export default Home;
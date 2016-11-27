const React = require("react");
const Navigation = require ("./NavBar");
const About = require("./About");
var Home = React.createClass({
    getInitialState: function(){
        return {resume: false};
    },
    loadResume: function(){
        $.ajax(
            {   url: this.props.url,
                dataType: "json",
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
        this.loadResume();
    },
    render: function(){
        return(
            <div>
                <Header>
                    <NavBar/>
                    <Banner basics = {this.state.resume.basics}/>
                </Header>
                <About basics = {this.state.resume.basics}/>
            </div>
        )
    }
});

export default Home;
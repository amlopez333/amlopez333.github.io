'use strict';
const React = require("react");
import NavBar from './NavBar';
import About from './About';
import ScrollDown from './ScrollDown';
import Header from './Header';
import Banner from './Banner';
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import References from "./References";
import Footer from "./Footer";
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
        },
        work: [{
            company: "",
            position: "",
            website: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [
            ]
          }],
        education: [{
            institution: "",
            area: "",
            studyType: "",
            startDate: "",
            endDate: "",
            gpa: "",
            courses: [
            ]
        }],
        publications: [{
            name: "",
            publisher: "",
            releaseDate: "",
            website: "",
            summary: ""
        }],
        skills: [{
            name: "",
            level: "",
            keywords: [
            ]
        }],
        languages: [{
            name: "",
            level: "",
        }],
        references: [{
            name: "",
            reference: ""
        }]
        }};
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
        );
    },
    componentDidMount: function(){
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
                
                <Education education = {this.state.resume.education} />
                <Work work = {this.state.resume.work} />
                <Skills skills = {this.state.resume.skills} languages = {this.state.resume.languages} />
                <Portfolio portfolio = {this.state.resume.publications} /> 
                <References references = {this.state.resume.references} />
                <Footer profiles = {this.state.resume.basics.profiles} />
            </div>
        )
    }
});

export default Home;
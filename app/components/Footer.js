const React = require('react');
import SocialMedia from "./SocialMedia";
var Footer = React.createClass({
    render: function(){
        return(
            <footer>
                <div className = "row">
                    <div className = "twelve columns">
                        <SocialMedia profiles = {this.props.profiles} ul_class = "social-links"/>
                        <ul className = "copyright">
                            <li>&copy; Copyright 2016 Andy López</li>
                            <li>
                                Developed in ReactJS based on the original design of Ceevee from 
                                <a title = "Styleshout" href = "http://www.styleshout.com/" target = "_blank"> Styleshout</a>
                            </li>
                        </ul>
                    </div>
                    <div id = "go-top">
                        <a className = "smoothscroll" title = "Back to Top" href = "#home">
                            <i className = "icon-up-open"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
});

export default Footer;
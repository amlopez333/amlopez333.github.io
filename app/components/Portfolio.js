const React = require('react');
import Project from "./Project";
var Portfolio = React.createClass({
    render: function(){
        return(
            <section id = "portfolio">
                <div className = "row">
                    <div className = "twelve columns collapsed">
                        <h1>Portfolio</h1>
                        {/* portfolio wrapper */}
                        <div id = "portfolio-wrapper" className = "bgrid-quarters s-bgrid-thirds cf">
                            {this.props.portfolio.map(function(project, index){
                                return(
                                    <Project key = {index} index = {index} project = {project} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
export default Portfolio;
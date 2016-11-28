const React = require('react');
var Course = React.createClass({
    render: function(){
        return(
            <ul className = "courses">
                {this.props.courses.map(function(course, index){
                   return(
                        <div key = {index}>
                        <li>{course}</li>
                        </div>
                   ); 
                })}
            </ul>
        );
    }
});

export default Course;
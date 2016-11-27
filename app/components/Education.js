const React = require("react");
var Education = React.createClass({
    render:function(){
        <section id = 'education'>
            <div className = "row education">
                <div className = "three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className = "nine columns main-col">
                    <div className = "row item">
                        <div className = "twelve columns">
                            {this.props.education.map(function(educationSource, index){
                                return(
                                    <div>
                                        <h3 key = {index}>{educationSource.institution}</h3>
                                        <p className = "info">{educationSource.studyType}" "{educationSource.area} " "
                                        <span>&bull; </span> <em className = "date">{educationSource.startDate}</em> - <em className = "date">{educationSource.endDate}</em> " "
                                        <span>&bull; </span> <em className = "gpa">{educationSource.gpa}</em> 
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    {/*item end*/}
                    </div>
                {/*main-col end*/}
                </div>
            {/*education row end */}
            </div>
        {/* education section end */}
        </section>
    }
});

export default Education;
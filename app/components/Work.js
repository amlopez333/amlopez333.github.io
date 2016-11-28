const React = require('react');
import Highlights from './Highlights'
var Work = React.createClass({
    render: function(){
        return (
            <section id = "work">
                <div className = "row work">
                    <div className = "three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className = "nine columns main-col">
                        {this.props.work.map(function(workSource, index){
                            return(
                                <div key = {index} className = "row item">
                                    <div className = "twelve columns">
                                    <h3 key = {index}>{workSource.company}</h3>
                                    <p className = "info">{workSource.position} <span>&bull;</span> {workSource.summary}
                                    <span>&bull;</span> <em className = "date">{workSource.startDate} - {workSource.endDate}</em></p>
                                    <Highlights highlights = {workSource.highlights} />
                                    </div>
                                {/* end row item */}
                                </div>
                            );
                        })
                        }
                    {/* end main col */}
                    </div>
                {/*end work row */}
                </div>
            {/*end work section*/}
            </section>
        )   
    }
});

export default Work;

const React = require('react');
var References = React.createClass({
    render: function(){
        return(
            <section id = "references">
                <div className = "text-container">
                    <div className = "row">
                        <div className = "two columns header-col">
                            <h2><span>References</span></h2>
                        </div>
                        <div className = "ten columns flex-container">
                            <div className = "flexslider">
                                <ul className = "slides">
                                    {this.props.references.map(function(reference, index){
                                        return(
                                            <div key = {index}>
                                                <li>
                                                    <blockquote>
                                                        <p>{reference.reference}</p>
                                                    <cite>{reference.name}</cite>
                                                    </blockquote>
                                                </li>
                                                {/* end slide */}
                                            </div>
                                        );}
                                    )}
                                </ul>
                            {/*end flexslider*/}
                            </div>
                        {/*end flex container*/}
                        </div>
                    {/*end row*/}
                    </div>
                {/*end text container*/}
                </div>
            {/*end references section*/}
            </section>
        );
    }
});
export default References;
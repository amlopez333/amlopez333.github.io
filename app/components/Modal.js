const React = require("react");
import files from "./files";

var Modal = React.createClass({

    render: function(){
        const name = this.props.project.name;
        return(
            <div id = {"modal-0"+(this.props.index+1)} className = "popup-modal mfp-hide">
                <img className = "scale-with-grid" src = {files.portfolio.image[name].modal} alt = {name}/>
                <div className = "description-box">
                    <h4>{name}</h4>
                    <p>{this.props.project.summary}</p>
                    <span className = "categories">
                        <i className = " fa fa-tag"></i>
                    </span>
                </div>
                <div className = "link-box">
                    <a href = {this.props.project.website} target = "_blank">Details</a>
                    <a className = "popup-modal-dismiss" onClick = {this.props.onCloseModal}>Close</a>
                </div>
            {/* end modal*/}
            </div>
        );
    }
});
export default Modal;
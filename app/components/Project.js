const React = require("react");
import files from "./files";
import Modal from "./Modal";
var Project = React.createClass({
    getInitialState: function(){
       return {openModal: false};
    },
    handleModalOpen: function(){
        this.setState({openModal: true});
    },
    handleModalClose: function(){
        this.setState({openModal: false});
    },
    render: function(){
        const name = this.props.project.name;
        return(
            <div className = "columns portfolio-item">
                <div className = "item-wrap" onClick = {this.handleModalOpen}>
                    <a href = {"#modal-0"+(this.props.index+1)} title = "">
                        <img src = {files.portfolio.image[name].thumb} alt = {name}/>
                        <div className = "overlay">
                            <div className = "portfolio-item-meta">
                                <h5>{name}</h5>
                                <p>{this.props.project.releaseDate}</p>
                            </div>
                        </div>
                        <div className = "link-icon">
                            <i className = "icon-plus"></i>
                        </div>
                    </a>
                </div>
                <Modal index = {this.props.index} project = {this.props.project} isOpen = {this.state.openModal} onCloseModal = {this.handleModalClose}/>
            {/* end item*/}
            </div>
        )
    }
});

export default Project;
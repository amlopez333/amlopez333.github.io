const React = require("react");
var Skills = React.createClass({
    render: function(){
        return(
            <section id = "skills">
                <div className = "row skill">
                    <div className = "three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className = "nine columns main-col">
                        {/* pasar como props */ }
                        <p>I have billingual proficiency in both, English and Spanish. I am a native Spanish speaker.</p>
                            <div className = "bars">
                                <ul className = "skills">
                                    {this.props.languages.map(function(language, index){
                                        return(
                                            <li key = {index}>
                                                <span className = {"bar-expand percentage"+language.level}></span>
                                                <em>{language.name}</em>
                                            </li>
                                        );}   
                                    )}
                                </ul>
                            {/* end bars */}
                            </div>
                        {/* pasar como props */ }    
                        <p>Worked mainly with Python and Java. Adventuring in the world of the MERN Stack.</p>
                            <div className = "bars">
                                <ul className = "skills">
                                    {/* separar en programming languages and tools */}
                                    {this.props.skills.map(function(skill, index){
                                        return(
                                            <li key = {index}>
                                                <span className = {"bar-expand percentage"+skill.level}></span>
                                                <em>{skill.name}</em>
                                            </li>
                                        );}   
                                    )}
                                </ul>
                            {/* end bars */}
                            </div>    
                    {/* end main-col*/}
                    </div>
                {/*end skill row*/}
                </div>
            {/*end skill section */}
            </section>
        )
    }
});
export default Skills;
import React from 'react';

class ProjectList extends React.Component {
    render() {
        const { projects } = this.props;
        return (
            <div className = 'projects'>{projects.map((o, index) => <div className = 'project' key={index}><img className = 'img' src={o.img} alt = 'portfolio-cards.png'></img></div>)}
            </div>
        );
    }
}

export default ProjectList;
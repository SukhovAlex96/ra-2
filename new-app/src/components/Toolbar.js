import React from 'react';

class Toolbar extends React.Component {
    render() {
        const { filters, selected, onSelectFilter } = this.props;
        return (
            <div className = 'filters'>
                {filters.map(o => <button className = {selected === o? 'active filter': 'filter'} onClick={() => onSelectFilter(o)} key={o}>{o}</button>)}
            </div>
        );
    }
}

export default Toolbar;
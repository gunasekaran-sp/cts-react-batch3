import React, {Component} from 'react';

class Repo extends Component {
    render() {
        return (
            <div className="well">
                Repo - {this.props.params.repoID}
            </div>
        );
    }
}

export default Repo;
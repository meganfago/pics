import React, {Component} from 'react'

class SearchBar extends Component {

    state = {
        term: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment" >
                <form 
                onSubmit={this.onFormSubmit}
                className="ui form" >
                    <label>Image Search</label>
                    <div className="field">
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={(e) => this.setState({ term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
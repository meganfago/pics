import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

const API = process.env.REACT_APP_PHOTO_KEY

class App extends Component {


    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: `Client-ID ${API}`

            }

        })
    }


    render(){
        return(
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList/>
            </div>
        )
    }
}

export default App;
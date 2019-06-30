import React, {Component} from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

class ImageList extends Component {  
    render(){
        return(
            <div className="image-list" >
               {this.props.images.map(image => <ImageCard key={image.id} image={image}/>)}
            </div>
        )
    }
}

export default ImageList;
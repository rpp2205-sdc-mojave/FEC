import React from 'react';
import { TbArrowsMinimize } from "react-icons/tb";

import SimpleThumbnails from './SimpleThumbnails.jsx';
import NormalZoom from './NormalZoom.jsx';

class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomOn: false
    }
  }

  toggleZoom() {
    this.setState(prevState => ({
      zoomOn: !prevState.zoomOn
    }))
  }

  render() {
    return (
      <div className='modal trans-bg display-block'>
        <div className='expanded-view-container'>
          <TbArrowsMinimize className='close-expanded-view-icon' onClick={this.props.toggleExpandedView}/>
          <div className='gallery-flex'>
            <SimpleThumbnails thumbnails={this.props.thumbnails} selectedStyle={this.props.selectedStyle} selectedPhotoIndex={this.props.selectedPhotoIndex} thumbnailClick={this.props.thumbnailClick} />
            <NormalZoom photos={this.props.photos} selectedStyle={this.props.selectedStyle} selectedPhotoIndex={this.props.selectedPhotoIndex} photoChange={this.props.thumbnailClick} toggleZoom={this.toggleZoom.bind(this)} />
          </div>
        </div>
        <div className='close-expanded-view-space' onClick={this.props.toggleExpandedView}></div>
      </div>
    )
  }
}

export default ExpandedView;
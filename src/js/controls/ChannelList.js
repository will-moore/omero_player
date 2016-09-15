import React, { Component, PropTypes } from 'react'
import Channel from './Channel'

class ChannelList extends Component{

  constructor(props) {
    super(props);
    // this.handlers = createHandlers(this.props.dispatch);
    console.log('this.props.fetchImage', this.props.fetchImage);
  }

  // We are the first child of ChannelListContainer which connect() to store
  // and defines a fetchImage() function as prop.
  // So we can call it from here when the page loads.
  // This will fetch data, populate the store and cause this Component to be re-rendered.
  componentDidMount() {
    console.log('ChannelLIst componentDidMount() this.props.imageId', this.props.imageId);
    this.props.fetchImage(this.props.imageId);
  }

  render() {
    let channels = this.props.channels;
    var onChannelClick = this.props.onChannelClick;
    return (
        <div
          style={{ 'padding': '10px' }}>
          {channels.map(channel =>
            <Channel
              key={channel.id}
              {...channel}
              onClick={() => onChannelClick(channel.id)}
            />
          )}
        </div>
      )
  }
}

// ChannelList.propTypes = {
//   channels: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     active: PropTypes.bool.isRequired,
//     label: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onChannelClick: PropTypes.func.isRequired
// }

export default ChannelList
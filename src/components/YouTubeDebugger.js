// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  }

  changeBirate = () => {
    this.setState({
      settings: { ...this.state.settings, bitrate: 12}
    })
  }

  changeResolution = () => {
    this.setState({
      settings: { ...this.state.settings, video: {
        resolution: "720p"
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeBirate} className="bitrate">Change Birate</button>
        <button onClick={this.changeResolution} className="resolution">Change Resolution</button>
      </div>
    )
  }

}//end YouTubeDebugger class

export default YouTubeDebugger

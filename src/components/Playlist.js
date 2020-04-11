import React from 'react';
import trackOne from '../audio/peak-performance-sample.mp3'
import trackTwo from '../audio/everybody-needs-a-name.mp3'
import trackThree from '../audio/window-pane.mp3'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


const TRACKS = [
  { id: 1, title: "Peak Performance Skating" }
];

class Playlist extends React.Component {
  state = {
    selectedTrack: "Peak Performance Skating",
    player: "playing",
    currentTime: null,
    duration: null
  };

  setDeafultTrack() {
  }


  componentDidMount() {

    this.player.src = trackOne;
    this.setState({ player: "paused", duration: this.player.duration, currentTime: 0 });


    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => { });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      track = trackOne;
      switch (this.state.selectedTrack) {
        case "Peak Performance":
          track = trackOne;
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: "Peak Performance" });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
    if (
      this.state.duration &&
      !isNaN(this.state.duration) &&
      this.state.duration === this.state.currentTime
    ) {
      const currentTrackIndex = TRACKS.findIndex(
        track => track.title === this.state.selectedTrack
      );
      const tracksAmount = TRACKS.length - 1;
      if (currentTrackIndex === tracksAmount) {
        this.setState({
          selectedTrack: null,
          player: "stopped",
          currentTime: null,
          duration: null
        });
      } else {
        this.handleSkip("next");
      }
    }
  }

  handleSkip = direction => {
    const currentTrackIndex = TRACKS.findIndex(
      track => track.title === this.state.selectedTrack
    );
    const tracksAmount = TRACKS.length - 1;
    if (direction === "previous") {
      const previousTrack =
        currentTrackIndex === 0 ? tracksAmount : currentTrackIndex - 1;
      const trackToPlay = TRACKS[previousTrack];
      this.setState({ selectedTrack: trackToPlay.title });
    } else if (direction === "next") {
      const nextTrack =
        currentTrackIndex === tracksAmount ? 0 : currentTrackIndex + 1;
      const trackToPlay = TRACKS[nextTrack];
      this.setState({ selectedTrack: trackToPlay.title, duration: null });
    }
  };

  setTime = time => {
    this.player.currentTime = time;
  };



  render() {
    const list = TRACKS.map(item => {
      return (
        <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}

          tabIndex='0'
        >
          <span>{item.title}</span>
          <span>{item.duration}</span>
        </li>
      );
    });

    return (
      <div className="playlist">
        <div className="player">
          <h3>Peak Performace <br></br>Audio Sample</h3>
          {this.state.player !== "stopped" && (
            <div className="buttons">
              {this.state.player === "paused" && (
                <button onClick={() => this.setState({ player: "playing" })} aria-label="play" className="play-pause">
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              )}
              {this.state.player === "playing" && (
                <button onClick={() => this.setState({ player: "paused" })} aria-label="pause" className="play-pause">
                  <FontAwesomeIcon icon={faPause} />
                </button>
              )}
            </div>
          )}
          <TimeBar
            setTime={this.setTime}
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />

        </div>
        <audio ref={ref => (this.player = ref)} autoPlay />
      </div>
    );
  }
}

function TimeBar({ currentTime, duration, setTime }) {
  const sBits = [];
  let count = 0;
  while (count < duration) {
    sBits.push(count);
    count++;
  }
  const seconds = sBits.map(second => {
    return (
      <div
        key={second}
        onClick={() => setTime(second)}
        style={{
          float: "left",
          cursor: "pointer",
          height: "3px",
          width:
            currentTime && Math.round(currentTime) === second
              ? "4px"
              : `${246 / Math.round(duration)}px`,
          background:
            currentTime && Math.round(currentTime) === second
              ? "#000"
              : "#000",
          transform:
            currentTime && Math.round(currentTime) === second
              ? "scale(4)"
              : "scale(1)",
          zIndex:
            currentTime && Math.round(currentTime) === second
              ? "999"
              : ""
        }}
      />
    );
  });
  return (
    <div className="timebar">
      <div className="bar">{seconds}</div>
    </div>
  );
}

export default Playlist;

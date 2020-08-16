import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
/*
    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:0p83HvnCM0oVFmHLhe0G9K`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
*/
    return(
        <div className="body">
            <Header spotify={ spotify } />

            <div className="body__info">
                <img src="https://newjams-images.scdn.co/v2/discover-weekly/pOdnPTRma6KZzKPNRN9oUA==/bmVuZW5lbmVuZW5lbmVuZQ==/default" /*{discover_weekly?.images[0].url}*/ alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>здесь будет отличная музыка, как только Spotify соизволит создать плейлист. {discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                      className="body__shuffle"
                      /*onClick={playPlaylist}*/
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow /*playSong={playSong}*/ track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;
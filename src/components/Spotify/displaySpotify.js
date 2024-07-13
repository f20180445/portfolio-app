import React, { useEffect, useState } from "react";
import { Box, Stack, Link, Spinner } from "@chakra-ui/react";
import { useMediaQuery } from '@mui/material';
import styled from "styled-components";
import getNowPlayingItem from "./spotify";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./PlayingAnimation";
import { Typography } from "@mui/material";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../pages/home/home.scss";
import { MusicNote } from "@mui/icons-material";

export const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const isMobile = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const results = await Promise.all([
          getNowPlayingItem(
            props.client_id,
            props.client_secret,
            props.refresh_token
          ),
        ]);

        if (isMounted) {
          setResult(results[0]);
          setLoading(false);
        }
      } catch (error) {
        // Handle error here
        console.error("Error fetching data from Spotify API:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup: Clear any ongoing API calls if the component unmounts
      isMounted = false;
    };
  }, [props.client_id, props.client_secret, props.refresh_token]);

  return (
    <>
      <Typography
        mt={3}
        mb={3}
        width={isMobile ? "100%" : "75%"}
        fontFamily={"monospace"}
        color={"#dcd6c1"}
        // align={ isMobile ? "center" : "right"}
      >
        <a className="instagram social">
          <FontAwesomeIcon icon={faSpotify} size="2x" />
        </a>
        <br />
        {loading ? (
          <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
        ) : result.isPlaying ? (
          <Box display="flex" flexDirection={isMobile ? "column" : "row"} alignItems={isMobile ? "center" : "start"}>
            <Link href={result.songUrl} target="_blank">
              <img
                src={result.albumImageUrl}
                alt="album cover"
                height={isMobile ? "150" : "250"}
                style={{
                  backgroundColor: "#62b0a5",
                  borderRadius: "10%",
                  borderColor: "#000",
                  borderWidth: 10,
                  marginTop: 10,
                  marginLeft: isMobile ? "auto" : 0,
                  marginRight: isMobile ? "auto" : 0,
                }}
              />
            </Link>
            <Typography
              width="75%"
              fontFamily={"monospace"}
              color={"#dcd6c1"}
              style={{
                marginTop: 10,
                marginLeft: isMobile ? 0 : "10%",
                textAlign: isMobile ? "center" : "left",
              }}
              backgroundColor={isMobile ? "#2c6e7c" : ""}
            >
              Title: {result.title} <br />
              Artist: {result.artist}
            </Typography>
          </Box>
        ) : (
          <>Currently Offline on Spotify</>
        )}
      </Typography>
    </>
  );
};

export default SpotifyNowPlaying;

const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

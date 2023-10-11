import React, { useEffect, useState } from "react";
import { Box, Stack, Image, Text, Link, Spinner } from "@chakra-ui/react";
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

  // useEffect(() => {
  //   Promise.all([
  //     getNowPlayingItem(
  //       props.client_id,
  //       props.client_secret,
  //       props.refresh_token
  //     ),
  //   ]).then((results) => {
  //     setResult(results[0]);
  //     setLoading(false);
  //   });
  // });
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
  }, []);

  return (
    <>
      <Typography
        mt={3}
        mb={3}
        width="75%"
        fontFamily={"monospace"}
        //   variant="h4"
        //   component={"h3"}
        color={"#dcd6c1"}
      >
        {/* Now Playing on &nbsp; */}
        <a className="instagram social">
          <FontAwesomeIcon icon={faSpotify} size="2x" />
        </a>
        <br />
        {loading ? (
          <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
        ) : result.isPlaying ? (
          <>
            <Link href={result.songUrl} target="_blank">
              <img
                src={result.albumImageUrl}
                alt="jainam"
                height="250"
                style={{
                  backgroundColor: "#62b0a5",
                  borderRadius: "10%",
                  borderColor: "#000",
                  borderWidth: 10,
                  marginTop: 10,
                  float: "left",
                }}
              />
            </Link>
            {/* <br></br> */}
            <Typography
              // mt={3}
              // mb={3}
              width="75%"
              fontFamily={"monospace"}
              //   variant="h4"
              //   component={"h3"}
              color={"#dcd6c1"}
              style={{
                marginTop: 10,
                marginLeft: "50%",
              }}
            >
              Title: {result.title} <br />
              Artist: {result.artist}
            </Typography>
          </>
        ) : (
          <>Currently Offline on Spotify</>
        )}
      </Typography>
    </>
    // {loading ?
    //   <Stack align="center" mb={8}>
    //     <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
    //   </Stack>
    //   :
    //   <Stack width="full" mb={result.isPlaying ? 2 : 4} spacing={3}>
    //     <Stack spacing={2} direction="row" align="center">
    //       <SpotifyLogo />
    //       <Text fontWeight="semibold">{result.isPlaying ? 'Now playing' : "Currently offline"}</Text>
    //       {result.isPlaying && <PlayingAnimation />}
    //     </Stack>
    //     {result.isPlaying &&
    //       <Box p={2} borderRadius="lg" borderWidth={1}>
    //         <Stack direction="row" spacing={4} align="center">
    //           <Image
    //             alt={`${result.title} album art`}
    //             src={result.albumImageUrl}
    //             width={12}
    //             height={12}
    //             borderRadius="sm"
    //           />
    //           <Stack spacing={0} overflow="hidden">
    //             <Link href={result.songUrl} target="_blank">
    //               <Text
    //                 fontWeight="semibold"
    //                 width="full"
    //                 isTruncated
    //                 color="alph"
    //               >
    //                 {result.title}
    //               </Text>
    //             </Link>
    //             <Text
    //               color="gray.500"
    //               isTruncated
    //             >
    //               {result.artist}
    //             </Text>
    //             <Text></Text>
    //           </Stack>
    //         </Stack>
    //       </Box>
    //     }
    //   </Stack>
    // }
    // </Box>
    // </Center>
  );
};

export default SpotifyNowPlaying;

const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

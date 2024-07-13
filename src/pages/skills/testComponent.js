import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { styled, useTheme } from "@mui/system";
import { CardActionArea, useMediaQuery } from '@mui/material';

import baseballImage from "../../assets/softwareImages/baseball_1.png";
import tartanmartImage from "../../assets/softwareImages/tartanmart.png";
import installm from "../../assets/softwareImages/installm.png";
import ticketmasterImage from "../../assets/softwareImages/ticketmaster.png";
import hiking from "../../assets/softwareImages/hiking.png";
import blockchainImage from "../../assets/softwareImages/blockchain.png";
import narrative from "../../assets/softwareImages/narrative.png";
import bookstore from "../../assets/softwareImages/bookstore.jpeg";
import mlip from "../../assets/dataImages/mlip.png";
import anomaly1 from "../../assets/dataImages/anomaly1.png";
import bigjab1 from "../../assets/dataImages/bigjab1.png";
import survey from "../../assets/dataImages/survey.png";
import swiggy from "../../assets/productImages/swiggy.png";
import classplus from "../../assets/productImages/classplus.png";
import gpay from "../../assets/productImages/gpay.png";
import workday from "../../assets/productImages/workday.png";
import linkedin from "../../assets/productImages/linkedin_competitive.png";
import recruit from "../../assets/productImages/recruiting_product.png";
import likewise from "../../assets/productImages/likewise_dating.png";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
  // margin: theme.spacing(6.25),
  marginBottom: 20,
  // marginRight: 20,
  backgroundColor: "#264143",
  color: "#dcd6c1",
  borderRadius: 20,
  padding: theme.spacing(6.25),
  // width: '100%'
}));

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  ".MuiImageListItem-img": {
    objectFit: "cover",
    width: "100%",
    height: "200px",
    display: "block",
    flexGrow: 1,
  },
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
}));

const StyledImageListItemBar = styled(ImageListItemBar)(({ theme }) => ({
  ".MuiImageListItemBar-title": {
    whiteSpace: "normal"
  },
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
}));

export default function TitlebarBelowImageList({ tabName }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const activeTab = tabName;

  const itemData = {
    'software': [
      {
        img: tartanmartImage,
        title: 'TartanMart - CMU Marketplace',
        author: 'Jainam Gala',
        skill: ['Web Development', 'Django', 'React', 'REST APIs', 'AWS Cloud', 'Full Stack'],
        url: 'https://drive.google.com/drive/folders/1JDVG6FjoC_tFT4ci36P52nDvUKrCfnuo?usp=sharing'
      },
      {
        img: narrative,
        title: 'Narrative LLC - Mergers and Acquisitions Data Platform',
        author: 'Jainam Gala',
        skill: ['Web Development', 'Flask', 'React', 'REST APIs', 'Web Design', 'Figma'],
        url: ''
      },
      {
        img: installm,
        title: 'Instagram LLM Search Engine',
        author: 'Jainam Gala',
        skill: ['Django', 'OpenAI API', 'LLM'],
        url: 'https://drive.google.com/drive/folders/1WirzL7TE21maHPAys0o9AKTMkEf6m5Ti?usp=sharing'
      },
      {
        img: bookstore,
        title: 'Bookstore API Application',
        author: 'Jainam Gala',
        skill: ['REST APIs', 'Django', 'Postman', 'Kafka', 'Async Programming', 'BFF Design'],
        url: 'https://drive.google.com/drive/folders/1HvKBKOu3AYliBCiNxSUosFOH3cZAgIJH?usp=sharing'
      },
      {
        img: hiking,
        title: 'Hiking Tours - Web Architecture',
        author: 'Jainam Gala',
        skill: ['Object-Oriented', 'Domain Diagram', 'Sequence Diagram', 'Figma Wireframing'],
        url: 'https://drive.google.com/file/d/19J8h_m-Imyoviz9cPYxgVgLLc8RGKf96/view?usp=sharing'
      },
      {
        img: ticketmasterImage,
        title: 'Ticketmaster API - Android Mobile App',
        author: 'Jainam Gala',
        skill: ['Android', 'REST APIs', 'Mobile Development', 'Web Analytics', 'Java', 'Android Studio'],
        url: 'https://drive.google.com/drive/folders/155vKN1r5ZGQyEjnH49am_DHzB_nwK2aM?usp=sharing'
      },
      {
        img: baseballImage,
        title: 'Baseball API Application',
        author: 'Jainam Gala',
        skill: ['API Development', 'Java Servlets'],
        url: 'https://drive.google.com/drive/folders/1o-BvqsDup6rSG7DI0j7yF3Was2sK3nfD?usp=sharing'
      },
      {
        img: blockchainImage,
        title: 'Blockchain - Ground up',
        author: 'Jainam Gala',
        skill: ['Blockchain', 'Java', 'Cryptography'],
        url: 'https://drive.google.com/drive/folders/1tB3ARIz-nHA6ARPWhuO825yDtDHgyOAZ?usp=sharing'
      },
    ],
    'data': [
      {
        img: mlip,
        title: 'Movie Recommendation System',
        author: 'Jainam Gala',
        skill: ['MLOps', 'Machine Learning', 'ML Security', 'A/B Testing', 'Model Evaluation', 'Model Deployment', 'Github Actions', 'CI/CD Pipeline', 'Prometheus', 'Grafana'],
        url: 'https://drive.google.com/drive/folders/1wPNiy1Uxfm9G9B96VtA2AfwV16u5EGld?usp=sharing'
      },
      {
        img: survey,
        title: 'Survey Analysis',
        author: 'Jainam Gala',
        skill: ['Machine Learning', 'Model Evaluation', 'Data Visualization', 'Jupyter Notebook'],
        url: 'https://drive.google.com/drive/folders/1ERD0Elr9q3EhLK0wpiWk3yp7ChWpetGQ?usp=sharing'
      },
      {
        img: anomaly1,
        title: 'Anomaly Seekers - Time Series Forecasting',
        author: 'Jainam Gala',
        skill: ['Time Series Forecasting', 'Machine Learning', 'Model Evaluation', 'Jupyter Notebook'],
        url: 'https://drive.google.com/drive/folders/13eGk0JlZosCX5_kqoj48SF8QmvMzA25k?usp=sharing'
      },
      {
        img: bigjab1,
        title: 'Project Big Jab',
        author: 'Jainam Gala',
        skill: ['Web Scraping', 'Data Visualization', 'GUI Development', 'API Data'],
        url: 'https://www.youtube.com/watch?v=qQwYqAtldx0'
      },
    ],
    'product': [
      {
        img: workday,
        title: 'Workday Talent Assessment',
        author: 'Jainam Gala',
        skill: ['Business Strategy', 'Marketing', 'Financial Analysis', 'Market Positioning', 'Product Concept', 'Wireframing'],
        url: 'https://drive.google.com/file/d/1QSodq-sGyCiYs_wSE_IHe6K2YGKzdJRa/view'
      },
      {
        img: likewise,
        title: 'Likewise Dating App',
        author: 'Jainam Gala',
        skill: ['New Product', 'User Personas', 'User Interviews', 'Competitor Analysis', 'Differentiation', 'Financial Analysis'],
        url: 'https://docs.google.com/presentation/d/1f5mgnotPhHHz7z6qkKqdc9tw5TK2w-j4/edit#slide=id.p1'
      },
      {
        img: linkedin,
        title: 'Linkedin Competitive Analysis',
        author: 'Jainam Gala',
        skill: ['Competitor Analysis', 'SWOT Analysis', 'Market Research', 'Product Teardown', 'Growth Strategy', 'Marketing Strategy'],
        url: 'https://drive.google.com/file/d/1kFiJdGLxsMymToGJz67zeo5a9IJBkUIE/view?usp=sharing'
      },
      {
        img: recruit,
        title: 'Recruiting Product',
        author: 'Jainam Gala',
        skill: ['Product Vision', 'Design Sprints', 'User Testing', 'Prototype Iteration', 'Lean Startup Methodology', 'Kano Model'],
        url: 'https://drive.google.com/drive/folders/1uSxXUOV5c10AHG4i7l4sDXZpln0-DHY3?usp=sharing'
      },
    ]
  };

  return (
    <ImageList style={{ margin: isSmallScreen ? 20 : 20 }} cols={isSmallScreen ? 1 : 3}>
      {itemData[activeTab].map((item) => (
        <StyledCard key={item.title} style={{margin: isSmallScreen ? "" : 30}}>
          <CardActionArea href={item.url} target='_blank'>
            <StyledImageListItem>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: 20 }}
                className='MuiImageListItem-img'
              />
              <StyledImageListItemBar
                title={item.title}
                style={{ color: "#dcd6c1", fontWeight: "bolder", fontFamily: "monospace", whiteSpace: "normal", // Enable text wrapping
                overflowWrap: "break-word",}}
                position="below"
                className='MuiImageListItemBar-title css-dasnyc-MuiImageListItemBar-title'
              />
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {item.skill.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    style={{
                      color: "#264143",
                      borderColor: "black",
                      backgroundColor: "#dcd6c1",
                      fontSize: 10,
                      width: "100%",
                      fontWeight: "bolder",
                    }}
                  />
                ))}
              </Stack>
            </StyledImageListItem>
          </CardActionArea>
        </StyledCard>
      ))}
    </ImageList>
  );
}

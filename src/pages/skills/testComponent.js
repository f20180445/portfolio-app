import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ProjectOutlinedCard from '../../components/projects_card';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import "./test.scss";
import { color } from 'framer-motion';
import { CardActionArea } from '@mui/material';

const baseballImage = require("../../assets/softwareImages/baseball_1.png");
const tartanmartImage = require("../../assets/softwareImages/tartanmart.png");
const installm = require("../../assets/softwareImages/installm.png");
const ticketmasterImage = require("../../assets/softwareImages/ticketmaster.png");
const hiking = require("../../assets/softwareImages/hiking.png");
const blockchainImage = require("../../assets/softwareImages/blockchain.png");
const narrative = require("../../assets/softwareImages/narrative.png");
const bookstore = require("../../assets/softwareImages/bookstore.jpeg");

const mlip = require("../../assets/dataImages/mlip.png");
const anomaly1 = require("../../assets/dataImages/anomaly1.png");
const bigjab1 = require("../../assets/dataImages/bigjab1.png");
const anomaly2 = require("../../assets/dataImages/anomaly2.png");
const bigjab2 = require("../../assets/dataImages/bigjab2.png");
const survey = require("../../assets/dataImages/survey.png");

const swiggy = require("../../assets/productImages/swiggy.png");
const classplus = require("../../assets/productImages/classplus.png");
const gpay = require("../../assets/productImages/gpay.png");
const workday = require("../../assets/productImages/workday.png");
const linkedin = require("../../assets/productImages/linkedin_competitive.png");
const recruit = require("../../assets/productImages/recruiting_product.png");
const likewise = require("../../assets/productImages/likewise_dating.png");



const projectCard = (projectTitle, description, skills) => {
    return (
      <React.Fragment>
        <CardContent>
          <Typography
            fontFamily={"monospace"}
            variant="h5"
            component="div"
            color="primary"
          >
            <b>{description}</b>
          </Typography>
          <Typography fontFamily={"monospace"} sx={{ mb: 1.5 }} color="#dcd6c1">
            {projectTitle}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                style={{
                  color: "#264143",
                  borderColor: "black",
                  backgroundColor: "#dcd6c1",
                  fontSize: 10,
                  width: "30%",
                  fontWeight: "bolder",
                }}
              />
            ))}
          </Stack>
          {/* <Typography fontFamily={"monospace"} variant="body2">
            {skills}
          </Typography> */}
        </CardContent>
      </React.Fragment>
    );
  };

const StyledCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
  }));

  const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
    // width: 10,
    // height: 10,

    ".MuiImageListItem-img": {
        "object-fit": "cover",
        width: "100%",
        height: "200px",
        display: "block",
        "-webkit-box-flex": 1,
        "-webkit-flex-grow": 1,
        "-ms-flex-positive": 1,
        "flex-grow": 1,
    },
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
  }));

export default function TitlebarBelowImageList(tabName) {
  console.log("TAB:" + tabName.tabName);
  const activeTab = tabName.tabName;
  const itemData = {
    'software': [
        {
            img: tartanmartImage,
            title: 'TartanMart - CMU Marketplace',
            author: 'Jainam Gala',
            skill: ['Web Development', 'Django', 'React', 'REST APIs', 'AWS Cloud', 'Full Stack',],
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
            skill: ['Django', 'OpenAI API', 'LLM',],
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
            url: 'https://drive.google.com/file/d/1kFiJdGLxsMymToGJz67zeo5a9IJBkUIE/view'
        },
        {
            img: classplus,
            title: 'Classplus Feature Critique',
            author: 'Jainam Gala',
            skill: ['User Journey', 'User Persona', 'Prioritization', 'Metrics'],
            url: 'https://drive.google.com/file/d/115QXjzqLU3O0DcKHsrYLLKi3fHI8cGZq/view'
        },
        {
            img: recruit,
            title: 'Recruitment in Startups',
            author: 'Jainam Gala',
            skill: ['User Journey', 'User Persona', 'Effort-Impact', 'Metrics', ],
            url: 'https://drive.google.com/file/d/18olJJvw3aGpnLAPF4Nbh1q7S63HNglyn/view'
        },
        {
            img: gpay,
            title: 'Favorite Product - Google Pay',
            author: 'Jainam Gala',
            skill: ['User Types', 'Feature Breakdown', 'Differentiation'],
            url: 'https://drive.google.com/file/d/1bfAj74DE0LSFGdoNlgDDZbuRtzokJvia/view'
        },
        {
            img: swiggy,
            title: 'Swiggy - Food Delivery',
            author: 'Jainam Gala',
            skill: ['Problem Solving', 'User Persona'],
            url: 'https://drive.google.com/file/d/1bfAj74DE0LSFGdoNlgDDZbuRtzokJvia/view'
        },
      ]
  }
  return (
    <ImageList style={{margin: 100}}>
      {itemData[activeTab].map((item) => (
        <>
            <StyledCard
      width={200}
      margin={1000}
      variant="outlined"
      style={{
        color: "black",
        // background: "#62b0a5",
        background: "#264143",
        margin: 50,
        // marginBottom: 10,
        // marginTop: -10,
        padding: 50,
        borderRadius: 20
      }}
    >
        <CardActionArea href={item.url} target='_blank'>
        <StyledImageListItem key={item.img}>
              <img
                //   srcSet={`${item.img}`}
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy" 
                  style={{ width: '10', height: '10', objectFit: 'cover', borderRadius: 20 }}
                  className='MuiImageListItem-img'
                  />
              <ImageListItemBar
                  title={item.title}
                //   subtitle={<span>by: {item.author}</span>}
                  style={{"color": "#dcd6c1", fontWeight: "bolder",}}
                  position="below" />
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
                              width: "30%",
                              fontWeight: "bolder",
                          }} />
                  ))}
              </Stack>
          </StyledImageListItem>
          {/* {projectCard(jobTitle, company, skills)} */}
          </CardActionArea>
    </StyledCard>
          </>
      ))}
    </ImageList>
  );
}

// const itemData = [
//   {
//     img: baseballImage,
//     title: 'Baseball API Application',
//     author: 'Jainam Gala',
//     skill: ['API Development', 'Java Servlets']
//   },
//   {
//     img: mumbai,
//     title: 'Baseball API Application',
//     author: 'Jainam Gala',
//     skill: ['API Development', 'Java Servlets']
//   },
//   {
//     img: baseballImage,
//     title: 'Baseball API Application',
//     author: 'Jainam Gala',
//     skill: ['API Development', 'Java Servlets']
//   },
// ];

import React from 'react';
import Layout from '../Components/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
      sx={{
        my:15,
        textAlign: "center",
        p:2,
        "& h4": {
          fontWeight:'bold',
          my:2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign:"justify",
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4 ": {
            fontSize:"1.5rem",
          },   
        },
      }}
      >
        <Typography variant="h4">Welcome to Hari's Books and Stationary  </Typography>
        <p>
        Welcome to our Book App! We're thrilled to have you join us on this literary journey. Our mission 
        is to provide book lovers with a seamless and enjoyable reading experience, all within the
        convenience of a digital platform. Whether you're a passionate bibliophile or a casual reader, 
        we've got you covered.
        <h3>Our Vision</h3>
        We believe in the power of books to inspire, educate, and entertain. Our vision is to create a 
        community of readers where everyone can discover new books, connect with fellow 
        bookworms, and share their love for literature.

        <h3>What We Offer</h3>

      <h5>Extensive Book Collection:</h5> Our app boasts an extensive collection of books spanning
      various genres, from classic literature to contemporary bestsellers. We curate our library
       to ensure a diverse selection that caters to every reading preference. 
      <h5>Personalized Recommendations:</h5> With our advanced recommendation system, we strive to help you discover your next favorite book. Based on your reading history and preferences, we provide tailored suggestions that match your interests.
      <h5>User-Friendly Interface:</h5> We understand the importance of a seamless user experience. Our app features a clean and intuitive interface, making it easy for you to navigate, search for books, and manage your reading preferences.
      <h5>Reading Progress Sync:</h5> Never lose track of your reading progress again. Our app automatically syncs your progress across devices, allowing you to seamlessly switch between reading on your phone, tablet, or desktop.
       <h5>Social Features:</h5> Connect with fellow readers through our vibrant community. Share book recommendations, join book clubs, and engage in discussions about your favorite authors and novels.
      <h5>Personal Library:</h5> Create your own virtual library within our app. Organize your books, mark favorites, and track the books you've read or plan to read in the future.
<h3>Our Technology Stack</h3>
Our app is built using the cutting-edge React.js framework, ensuring a robust and responsive user interface. We leverage React's component-based architecture to deliver a smooth and dynamic user experience. Additionally, we utilize API integrations to fetch book data from various sources, guaranteeing an up-to-date and comprehensive collection.

<h3>Let Us Get Started</h3>
Join our Book App community today and embark on an exciting reading adventure. Whether you're looking to dive into a thrilling mystery, expand your knowledge with non-fiction, or lose yourself in a captivating novel, our app is here to accompany you on your literary journey. Happy reading!

If you have any questions or feedback, please don't hesitate to contact our support team. We're here to assist you in any way we can.   
        </p>
      </Box>
    </Layout>
  )
}

export default About

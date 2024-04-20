import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Avatar } from '@mui/material';

const destinations = [
  {
    image: 'path/to/image1.jpg',
    title: 'Paris, France',
    description: 'The City of Lights awaits! Explore iconic landmarks, romantic cafes, and vibrant culture.',
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Tokyo, Japan',
    description: 'Immerse yourself in neon-lit streets, ancient temples, and cutting-edge technology.',
  },
  // Add more destinations here
];

const travelTips = [
  {
    icon: '✈️',
    title: 'Packing Essentials',
    tips: [
      'Pack light and versatile clothing.',
      'Bring comfortable walking shoes.',
      'Don\'t forget essentials like adapters and toiletries.',
    ],
  },
  {
    icon: '',
    title: 'Budgeting Tips',
    tips: [
      'Research average costs for your destination.',
      'Set a daily spending limit.',
      'Consider travel cards and discounts.',
    ],
  },
  // Add more travel tips here
];

const testimonials = [
  {
    avatar: 'path/to/avatar1.jpg',
    quote: 'An amazing experience! The agency planned everything perfectly.',
    name: 'John Doe',
  },
  {
    avatar: 'path/to/avatar2.jpg',
    quote: 'Highly recommend! We saw breathtaking sights and had unforgettable memories.',
    name: 'Jane Smith',
  },
  // Add more testimonials here
];

const TravelBlog = () => {
  return (
    
    <div>
      {/* Hero Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Travel the World with Us</Typography>
          <Typography variant="body1">Experience unforgettable adventures with our curated travel packages.</Typography>
          <Button variant="contained" color="primary">Explore Destinations</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="path/to/heroimage.jpg" alt="Travel destination" style={{ width: '100%' }} />
        </Grid>
      </Grid>

      {/* Explore Destinations */}
      <Grid container spacing={2}>
        {destinations.map((destination) => (
          <Grid item xs={12} md={4} key={destination.title}>
            <Card>
              <CardMedia
                component="img"
                image={destination.image}
                alt={destination.title}
                height="140"
              />
              <CardContent>
                <Typography variant="h5">{destination.title}</Typography>
                <Typography variant="body2">{destination.description}</Typography>
                <Button variant="contained" size="small" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Travel Tips */}
      <Grid container spacing={2}>
        {travelTips.map((tip) => (
          <Grid item xs={12} md={4} key={tip.title}>
            <Typography variant="h6">
              {tip.icon} {tip.title}
            </Typography>
            <ul>
              {tip.tips.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>

      {/* Testimonials */}
      <Grid container spacing={2}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={6} key={testimonial.name}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1">{testimonial.quote}</Typography>
                    <Typography variant="caption">{testimonial.name}</Typography>
                  </Grid>
                </Grid>

                </CardContent>
            </Card>
          </Grid>
        ))}</Grid>

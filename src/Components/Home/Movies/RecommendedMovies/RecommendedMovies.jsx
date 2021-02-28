import { Grid, Typography, Button, Container, Card, CardMedia } from '@material-ui/core';
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import moviesImage1 from '../../../../Images/RecommendedMovies/The Marksman.jpg';
import moviesImage2 from '../../../../Images/RecommendedMovies/Tom & Jerry.jpg';
import moviesImage3 from '../../../../Images/RecommendedMovies/Prem Tame.jpg';
import moviesImage4 from '../../../../Images/RecommendedMovies/Miss Call.jpg';
import moviesImage5 from '../../../../Images/RecommendedMovies/Chakra ka Rakshak.jpg';
import moviesImage6 from '../../../../Images/RecommendedMovies/Magic.jpg';
import moviesImage7 from '../../../../Images/RecommendedMovies/Chini.jpg';
import moviesImage8 from '../../../../Images/RecommendedMovies/Dictionary.jpg';
import moviesImage9 from '../../../../Images/RecommendedMovies/The Vigil.jpg';
import moviesImage10 from '../../../../Images/RecommendedMovies/Check.jpg';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const RecommendedMovies = () => {
    return (
        <Container>
            <Grid container item md={12} xl={12} style={{display: 'flex' , justifyContent: 'space-between'}}>
                <Typography variant='h6'>
                    RecommendedMovies
                </Typography>
                <Button variant="contained" color='primary'>
                    see all
                </Button>
            </Grid>
            

            <>
                <Carousel 
                    responsive={responsive}
                    autoPlaySpeed={2000}
                    infinite={true}
                    // showDots={true}
                    autoPlay={true}
                >
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage1}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage2}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage3}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage4}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage5}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage6}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage7}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage8}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage9}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                    <Card style={{margin: '10px 5px'}}>
                        <CardMedia
                            component="img"
                            title=""
                            image={moviesImage10}
                        />
                        <CardContent style={{padding: '10px'}}>
                            <Typography variant='subtitle1'>
                                Movie Name
                            </Typography>
                            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                                <Typography variant='body2'>
                                    1 Feb 2021
                                </Typography>
                                <Typography variant='body2'>
                                    9:00PM - 11:00PM
                                </Typography>
                            </div>
                            <Button variant="contained" color="primary" size='small'>
                                book a sit
                            </Button>
                            
                        </CardContent>
                    </Card>
                
                </Carousel>
            </ >
        </Container>
    );
};

export default RecommendedMovies;
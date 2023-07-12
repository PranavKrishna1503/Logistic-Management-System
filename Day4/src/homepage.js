import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Homepage.css';
function Home(){
    return(
      <div className="main">
       <nav className="navbar">
            <ul>
              <li><a href="#home">Sign Out</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#service">Orders</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        <div className="cards">
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.crsi.org/wp-content/uploads/black-bar-stacked.jpg"
          alt="STEEL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            STEEL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-001
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Steel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 1500 KG
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to ='/orders'><Button size="small" color="primary">
          ORDER
        </Button></Link>
      </CardActions>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.crsi.org/wp-content/uploads/black-bar-stacked.jpg"
          alt="STEEL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            STEEL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-001
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Steel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 1500 KG
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to ='/orders'><Button size="small" color="primary">
          ORDER
        </Button></Link>
      </CardActions>
    </Card>
    <br>
    </br>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.crsi.org/wp-content/uploads/black-bar-stacked.jpg"
          alt="STEEL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            STEEL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-001
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Steel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 1500 KG
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to ='/orders'><Button size="small" color="primary">
          ORDER
        </Button></Link>
      </CardActions>
    </Card>
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.crsi.org/wp-content/uploads/black-bar-stacked.jpg"
          alt="STEEL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            STEEL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-001
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Steel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 1500 KG
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to ='/orders'><Button size="small" color="primary">
          ORDER
        </Button></Link>
      </CardActions>
    </Card>
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.crsi.org/wp-content/uploads/black-bar-stacked.jpg"
          alt="STEEL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            STEEL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-001
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Steel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 1500 KG
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to ='/orders'><Button size="small" color="primary">
          ORDER
        </Button></Link>
      </CardActions>
    </Card>
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.crsi.org/wp-content/uploads/black-bar-stacked.jpg"
          alt="STEEL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            STEEL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-001
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Steel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 1500 KG
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to ='/orders'><Button size="small" color="primary">
          ORDER
        </Button></Link>
      </CardActions>
    </Card>
    </div>
    </div>

    );
}
export default Home;
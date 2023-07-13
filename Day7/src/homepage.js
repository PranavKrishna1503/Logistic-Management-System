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
              <Link to ='/contact'><li><a href="#contact">Contact</a></li></Link>
              <Link to='/about'><li><a href="#about">About Us</a></li></Link>
              <Link to='/'><li><a href="#home">Sign Out</a></li></Link>
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdegzQdqqVAIJ5hUhLPCEWPhqIhm1JwpIi0Q&usqp=CAU"
          alt="GEAR"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GEAR WHEELS
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-002
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Gear Wheels
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 2000 KG
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
          image=""
          alt="TIN"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            TIN
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-003
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Tin
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
          image=""
          alt="ALUMINIUM"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ALUMINIUM
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-004
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Aluminium
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 2500 KG
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
          image=""
          alt="COPPER"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            COPPER
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-005
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Copper
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 2000 KG
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
          image=""
          alt="BRASS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BRASS
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: M-006
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Brass
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
    <div className="con">
    <a id="anchor-name">warehousemanager123@gmail.com</a><br/>
    <a id="anchor-name">+91 9876543210</a>
    


    </div>
    </div>

    );
}
export default Home;
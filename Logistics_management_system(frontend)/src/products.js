 import React from "react";
 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import './homepage.css';
function Products(){
    return(
     <div className="Main">
    


        <div className="cards">
          <div className="card1">
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            STEEL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 1
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Steel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 3500 KG
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
    <br/> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ALUMINIUM
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 2
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Aluminium
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
    <br/>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
          height="140"
          
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            COPPER
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 3
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
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          
          height="140"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            TIN
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 4
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
  </div>
  <div className="card2">
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BRASS
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 5
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Brass
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
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ZINC
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 6
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Zinc
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 1000 KG
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
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            POTASSIUM
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 7
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Potassium
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 800 KG
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
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          
          height="140"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PHOSPHORUS
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 8
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Phosphorus
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 500 KG
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
  <div className="card2">
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GLASS
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 9
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Glass
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 500 KG
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
    <br/>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PLASTIC SCRAP
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 10
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Plastic Scrap
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 200 KG
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
    <br/> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              MANGANESE
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 11
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Manganese
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 400 KG
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
    <br/>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PVC
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 12
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: PVC
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 300 KG
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
    <br/>
   
  </div>
  <div className="card2">
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            COAL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 13
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Coal
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 3500 KG
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
    <br/> <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            OIL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 14
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Oil
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quantity in Warehouse: 300 KG
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
    <br/>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         
         height="140"
         
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            RUBBER BELTS
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 15
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Rubber Belts
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
    <br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          
          height="140"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            METAL SHEET
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product ID: 16
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Product Name: Metal Sheet
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
  </div>
          
  </div>
  <div className="bck">
  <Link to='/home'><button type="submit">Back to Home</button></Link>
  </div>

  </div>
    );
}
export default Products;

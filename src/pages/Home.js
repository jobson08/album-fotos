import React from "react";
//import { Link } from "react-router-dom";
import './Home.css'
import {  Card, CardImg, CardBody, CardText, Button} from "reactstrap";

class Home extends React.Component {
  state = {};
  render() {
    return (

<div> 
  <div className="body-home container">
    <Card className="card-fid" >
        <h2 className="titulo-card">Header</h2>
        <CardBody className="bordy-card">
        <CardImg src="https://fotografiamais.com.br/wp-content/uploads/2018/08/fotos-de-paisagens-dicas.jpg" alt="Card image cap" />
        <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <p>With supporting text below as a natural lead-in to additional content</p>
          <Button color="success" >Adicionar</Button>
        </CardBody>
      </Card>

      <Card  className="card-fid">
      <h2 className="titulo-card">Header</h2>
        <CardBody className="bordy-card">
        <CardImg  src="https://raw.githubusercontent.com/diegoeis/tableless-static-images/master/2016/10/react-component.jpg" alt="Card image cap" />
        <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> 
          <p>With supporting text below as a natural lead-in to additional content</p>             
        </CardBody>
      </Card>

      <Card  className="card-fid">
      <h2 className="titulo-card">Header</h2>
        <CardBody className="bordy-card">
        <CardImg  src="https://terracoeconomico.com.br/wp-content/uploads/2014/03/paisagem-bandeira-do-brasil.jpg" alt="Card image cap" />
        <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> 
          <p>With supporting text below as a natural lead-in to additional content</p>     
        </CardBody>
      </Card>
  </div> 
</div>  

    );
  }
}
export default Home;
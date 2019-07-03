import React from 'react'
import './Buttons.css'

import {
  Button, Card} from "reactstrap";

function Buttons() {
    return (
        <div className="body-button">
          
          <Card className="card-button">
             <h2 className="title">Basic Elements</h2>
          <h3>Buttons</h3>
          <p className="category">Pick your style</p>
          <div className="row">
            <div className="col-md-10">
              <Button className="btn btn-primary" type="Button">Default</Button>
              <Button className="btn btn-primary btn-round" type="Button">Round</Button>
              <Button className="btn btn-primary btn-round" type="Button">
                <i className="tim-icons icon-heart-2"></i> With Icon
              </Button>
              <Button className="btn btn-primary btn-icon btn-round" type="Button">
                <i className="fab fa-google"></i>
              </Button>
              <Button className="btn btn-primary btn-simple btn-round" type="Button">Simple</Button>             
            </div>
          </div>

          <br/>
          
          <p className="category">Pick your size</p>
          <div className="row">
            <div className="col-md-10">
              <Button className="btn btn-primary btn-sm">Small</Button>
              <Button className="btn btn-primary">Regular</Button>
              <Button className="btn btn-primary btn-lg">Large</Button>
            </div>
          </div>
          <p className="category">Pick your color</p>
          <div className="row">
            <div className="col-md-12">
              <Button className="btn btn-default">Default</Button>
              <Button className="btn btn-primary">Primary</Button>
              <Button className="btn btn-info">Info</Button>
              <Button className="btn btn-success">Success</Button>
              <Button className="btn btn-warning">Warning</Button>
              <Button className="btn btn-danger">Danger</Button>
              <Button className="btn btn-neutral">Neutral</Button>
            </div>
          </div>
          <br/>
          <h3>Links</h3>
          <div className="row">
            <div className="col-md-8">
              <Button className="btn btn-link btn-default">Default</Button>
              <Button className="btn btn-link btn-primary ">Primary</Button>
              <Button className="btn btn-link btn-info">Info</Button>
              <Button className="btn btn-link btn-success">Success</Button>
              <Button className="btn btn-link btn-warning">Warning</Button>
              <Button className="btn btn-link btn-danger">Danger</Button>
            </div>
          </div>
          </Card>
        </div>
    )
}

export default Buttons



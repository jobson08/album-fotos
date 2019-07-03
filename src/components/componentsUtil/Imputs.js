import React from 'react'

import './Imputs.css'

import { Input } from "reactstrap";

const Imputs = () => {
    return (
        <div className="body-imputs">
            <div className="space-70"></div>
          <div id="inputs">
            <h3>Inputs</h3>
            <p className="category">Form Controls</p>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <Input type="text" value="" placeholder="Regular" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group has-success">
                  <Input type="text" value="Success" className="form-control form-control-success" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group has-danger">
                  <Input type="email" value="Error Input" className="form-control form-control-danger" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                  </div>
                  <Input type="text" className="form-control" placeholder="Left Font Awesome Icon" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-group">
                  <Input type="text" className="form-control" placeholder="Right Nucleo Icon" />
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="tim-icons icon-lock-circle"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
    )
}

export default Imputs

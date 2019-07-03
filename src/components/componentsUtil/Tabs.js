import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './Tabs.css'

 class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
  <div className="body-tabs container">
    <Row>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
            Tab2
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
          >
            Tab3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
          <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</CardText>
                <Button>Go</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special </CardTitle>
                <CardText>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</CardText>
                <Button>ok</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special exit </CardTitle>
                <CardText>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</CardText>
                <Button>exit</Button>
              </Card>
            </Col>
          </Row>
        </TabPane> 
      </TabContent>

     {/* <Col xs="6">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '4' })}
            onClick={() => { this.toggle('4'); }}
          >
            Tab4
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '5' })}
            onClick={() => { this.toggle('5'); }}
          >
            Tab5
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '6' })}
            onClick={() => { this.toggle('6'); }}
          >
            Tab6
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="4">
          <Row>
          <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</CardText>
                <Button>Go</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special </CardTitle>
                <CardText>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</CardText>
                <Button>ok</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="6">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special exit </CardTitle>
                <CardText>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</CardText>
                <Button>exit</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>       
      </TabContent>
    </Col>*/}
      </Row>
    </div>
    );
  }
}

export default Tabs
import * as React from "react";
import { Tabs, Tab } from 'react-bootstrap';

interface Props {
  url: string;
}

export class Barong extends React.Component<Props> {
  render () {
    return (
      <Tabs fill justify defaultActiveKey="login" id="uncontrolled-tab-example">
        <Tab eventKey="login" title="SignIn">
          { React.Children.toArray(this.props.children)[0] }
        </Tab>
        <Tab eventKey="create-account" title="SignUp">
          { React.Children.toArray(this.props.children)[1] }
        </Tab>
      </Tabs>
    )
  }
}

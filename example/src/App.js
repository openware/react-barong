import * as React from "react";
import { LoginForm, RegisterForm, Barong } from 'react-barong';


export default class ExampleApp extends React.Component {
  render () {
    return (
      <Barong url="localhost:3000" >
        <LoginForm />
        <RegisterForm />
      </Barong>
    );
  }
}

import * as React from 'react'
import LoginForm from '../../components/login'
import RegisterForm from '../../components/register'
import "./styles.css";

export default class CompleteForm extends React.Component {
  render() {
    return (
      <div>
        <LoginForm />
          
        <RegisterForm />
      </div>
    )
  }
}

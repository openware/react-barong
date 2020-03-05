import * as React from 'react';
import axios from 'axios';

interface RequestDataInterface {
    email: string;
    password: string;
}

interface WithBarongProps {
    type: string;
    host: string;
}

const withBarong = (WrappedComponent: any, wrapperProps: WithBarongProps): React.ComponentClass => {
  	class WithBarong extends React.Component<WithBarongProps> {
        private login = (obj: RequestDataInterface) => {
            axios.post(`${wrapperProps.host}/identity/sessions`, {
                email: obj.email,
                password: obj.password,
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error.response);
            });
        };

        private register = (obj: RequestDataInterface) => {
            axios.post(`${wrapperProps.host}/identity/users`, {
                email: obj.email,
                password: obj.password,
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error.response)
            });
        }

        public render() {
            const props = {
                login: wrapperProps.type === 'login' ? this.login : undefined,
                register: wrapperProps.type === 'register' ? this.register : undefined,
            };

      			return (
        				<WrappedComponent {...props} />
      			);
    		}
  	}

  	return WithBarong;
}

export default withBarong;

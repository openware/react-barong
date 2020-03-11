import { shallow } from 'enzyme';
import * as React from 'react';
import { LoginForm } from './';

const setup = () => shallow(<LoginForm  />);

describe('LoginForm', () => {
    it('should render', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });
});

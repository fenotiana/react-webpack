import React from 'react';
import { shallow } from 'enzyme';

import HelloWorld from './hello-world';
import HelloWorldInput from './hello-world-input.component';

describe('Hello World', () => {

    it('Should have one Input', () => {
        const wrapper = shallow(<HelloWorld />);

        expect(wrapper.find(HelloWorldInput)).to.have.lengthOf(1);
    })

    it('Should have div container', () => {
        const wrapper = shallow(<HelloWorld />);
        expect(wrapper.find('div')).to.have.lengthOf(1);
    })

})
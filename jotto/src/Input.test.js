import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

const defaultProps = {

};

const setup = (props = {}) => {
    const setupProps = {};
    return shallow(<Input {...setupProps} />)
};

describe('renders without error', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test('renders without error', () => {
        const inputComponent = findByTestAttr(wrapper, 'component-input');
        expect(inputComponent.length).toBe(1);
    });
});

import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * 
 * @param {object} initialState - Initial state for store. 
 * @function storeFactory
 * @returns {Store} - Redux store
 */

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.PropTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
}
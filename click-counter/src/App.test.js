import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns { ShallowWrapper}
 */

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test('renders the counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test('counter display starts out at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test('clicking the button increments the counter display', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

// Tasks

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

// test('clicking the decrement button decrements the counter display', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, "decrement-button");
//   button.simulate('click');
//   const count = findByTestAttr(wrapper, "count").text();
//   expect(count).toBe("-1");
// });

test('clicking the decrement button decrements the counter display but will not go below 0', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test('if count is at 0 when decrement button is clicked, show error message', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  const message = findByTestAttr(wrapper, "error").text();
  expect(message).toBe("counter can't go below 0");
});
import PropTypes from 'prop-types';

export const helloworldPropTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export const defaultHelloWorldPropTypes = {
  label: 'HelloWorld',
};

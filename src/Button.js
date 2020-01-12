import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function Button({ label, value, onPress }) {
  function handlePress() {
    onPress(value);
  }
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func
};

Button.defaultProps = {
  label: '',
  onPress: () => {}
};

export default React.memo(Button);

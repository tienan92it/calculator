import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './styles';
// Redux
import { connect } from 'react-redux';
import { addKey } from './actions';
// constants
import { NUMPAD_GRID, OPERATION_PAD } from './constants';
// components
import Button from './Button';

class Screen extends Component {
  onKeypadPress = key => {
    this.props.addKeypad(key);
  };
  render() {
    console.log('render');
    const { display } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{display}</Text>
        </View>
        <View style={styles.keypadContainer}>
          <View style={styles.numpadContainer}>
            {NUMPAD_GRID.map((numRows, index) => (
              <View key={index} style={styles.numpadRow}>
                {numRows.map(num => (
                  <Button
                    key={num}
                    label={num}
                    value={num}
                    onPress={this.onKeypadPress}
                  />
                ))}
              </View>
            ))}
          </View>
          <View style={styles.operationContainer}>
            {OPERATION_PAD.map(op => (
              <Button
                key={op}
                label={op}
                value={op}
                onPress={this.onKeypadPress}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

// Redux mapping
const mapStateToProps = state => ({
  display: state.display
});

const mapDispatchToProps = dispatch => ({
  addKeypad: key => dispatch(addKey(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);

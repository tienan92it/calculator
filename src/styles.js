import { StyleSheet } from 'react-native';

const MARGIN = 5;
const BTN_RADIUS = 6;

export default StyleSheet.create({
  button: {
    flex: 1,
    margin: MARGIN,
    borderRadius: BTN_RADIUS,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLabel: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: MARGIN
  },
  keypadContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 0.5
  },
  numpadContainer: {
    flex: 0.75,
    flexDirection: 'column-reverse'
  },
  numpadRow: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  operationContainer: {
    flex: 0.25,
    flexDirection: 'column-reverse'
  },
  resultContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 62,
    color: 'black',
    textAlign: 'right'
  }
});

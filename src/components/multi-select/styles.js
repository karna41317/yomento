import { StyleSheet, Dimensions } from 'react-native'
import { lightTextMixin, regularTextMixin } from '../../styles/mixins'

export default StyleSheet.create({
  list: {},

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:2,
    borderRadius: 8,

  },

  optionLabel: {
    flex: 1,
    marginRight: 10,
  },
  optionWrapper: {
    width:Dimensions.get('window').width - 40,
    height: 60,
    justifyContent:'center',
    alignItems: 'flex-start',
    paddingHorizontal:20,
    borderRadius: 8,
  },
  multiChoiceText: {
    textAlign: 'left',
  ...regularTextMixin(18),
  },
  optionIndicator: {
    width: 40,
    height: 40,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  unCheckIndicatorIcon: {
    fontSize: 40,
    color: '#C8C8C4',
  },
  checkIndicatorIcon: {

    fontSize: 40,
    color: '#FFF',
  },
  separator: {
    height: 1,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#efefef',
  },
})

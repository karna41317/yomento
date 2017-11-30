import {
  StyleSheet,
  Dimensions,
} from 'react-native'
import {
  extraBoldTextMixin,
  lightTextMixin,
  boldTextMixin,
  semiBoldTextMixin,
  regularTextMixin,
} from 'src/styles'

export const styles = StyleSheet.create({
  /*Header*/

  dashboardWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  nextCard: {
    position: 'absolute',
    top: 180,
    bottom: -10,
    left: 20,
    right: 20,
  },

  profileFinishHead: {
    position: 'absolute',
    left: 40,
    top: 160,
    backgroundColor: 'transparent',
    ...extraBoldTextMixin(24,
      '#FFFFFF'),
  },
  profileFinishText: {
    position: 'absolute',
    left: 40,
    top: 210,
    right: 40,
    backgroundColor: 'transparent',
    ...regularTextMixin(20,
      '#FFFFFF'),
  },

  ButtonsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10
  },
  headerStyle: {
    marginTop: 30,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextStyle: {
    ...semiBoldTextMixin(18,
      '#FFF'),
  },
  mainCard: {
    width: Dimensions.get('window').width - 40,
    height: 300,
    backgroundColor: '#F0F0EB',
    borderRadius: 15,
    borderTopLeftRadius: 0,
    marginVertical: 10,
  },
  profileButton: {
    minWidth: 140,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20,

  },
  completedCard: {
    width: Dimensions.get('window').width - 40,
    height: 180,
    backgroundColor: '#F0F0EB',
    borderRadius: 15,
    borderTopLeftRadius: 0,
  },
  futureCards: {
    opacity: 0.5,
    width: Dimensions.get('window').width - 40,
    height: 180,
    backgroundColor: '#F0F0EB',
    borderRadius: 15,
    borderTopLeftRadius: 0,
    marginTop: 10,
  },

  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 25,
    marginHorizontal: 15,
  },
  textHeadWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileIntroHead: {

    ...boldTextMixin(12),
  },
  profileIntroText: {
    ...boldTextMixin(28),
    marginTop: 30,
  },
  reminderWrapper: {
    borderRadius: 15,
    borderWidth: 1,
    marginTop: -15,
    paddingLeft: 5,
    paddingRight: 10,
    paddingVertical: 4,
  },

})

export const htmlStyles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#fbff57',
  },
  p: {
    ...regularTextMixin(16),
  },
  div: {
    ...regularTextMixin(16)
  },
})




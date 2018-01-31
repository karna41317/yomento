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
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginBottom: 20,
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
    marginTop: 10,
  },
  profileButton: {
    minWidth: 140,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginVertical: 20,

  },
  /*Make a general css for dashboard cards*/

 /* dashboardCard: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    backgroundColor: '#F0F0EB',
    borderRadius: 15,
    borderTopLeftRadius: 0,
    marginTop: 10,
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  headerName: {
    ...boldTextMixin(12),
  },
*/

  completedCard: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    backgroundColor: '#F0F0EB',
    borderRadius: 15,
    borderTopLeftRadius: 0,
    marginTop: 10,
  },
  futureCards: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    backgroundColor: '#9696A5',
    borderRadius: 15,
    borderTopLeftRadius: 0,
    marginTop: 10,
  },

  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginHorizontal: 15,
  },
  textHeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileIntroHead: {

    ...boldTextMixin(12),
  },
  profileIntroText: {
    ...boldTextMixin(22),
  },
  reminderWrapper: {
    borderRadius: 15,
    borderWidth: 1,
    marginTop: -15,
    paddingLeft: 5,
    paddingRight: 10,
    paddingVertical: 4,
  },
  finishedCardStatusText: {
    ...boldTextMixin(14, '#FFF'),
  },

  finishedCardStatusIcon: {
    backgroundColor: 'transparent',
    fontSize: 40,
    color: '#FFF'
  }

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




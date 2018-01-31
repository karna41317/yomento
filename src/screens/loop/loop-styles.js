/**
 * Created by Karan on 2017-11-17.
 */
/**
 * Created by Karan on 2017-11-09.
 */
import { StyleSheet, Dimensions } from 'react-native'
import { extraBoldTextMixin, lightTextMixin, boldTextMixin, semiBoldTextMixin, regularTextMixin } from 'src/styles'

export const styles = StyleSheet.create({
  /*Header*/

  dashboardWrapper: {
    position: 'absolute',
    top: 180,
    left: 20,
    right: 20,
  },

  profileFinishHead: {
    position: 'absolute',
    left: 40,
    top: 160,
    backgroundColor: 'transparent',
    ...extraBoldTextMixin(24, '#FFFFFF'),
  },
  profileFinishText: {
    position: 'absolute',
    left: 40,
    top: 210,
    right: 40,
    backgroundColor: 'transparent',
    ...regularTextMixin(20, '#FFFFFF'),
  },

  introWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loopFinishHead: {
    position: 'absolute',
    left: 40,
    top: 160,
    backgroundColor: 'transparent',
    ...extraBoldTextMixin(24, '#FFFFFF'),
  },
  loopFinishText: {
    position: 'absolute',
    left: 40,
    top: 210,
    right: 40,
    backgroundColor: 'transparent',
    ...regularTextMixin(20, '#FFFFFF'),
  },
  loopButton: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  wrapper: {
    position: 'absolute',
    top: 120,
    left: 40,
    right: 40,
  },

  title: {
    ...boldTextMixin(18),
    marginBottom: 25,
    marginRight: 40,
  },

  descWrapper: {
    marginRight: 10,
  },

  profileButton: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  headerStyle: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextStyle: {
    ...regularTextMixin(14),
  },

  mainCard: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height - 30,
    backgroundColor: '#F0F0EB',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    margin: 5,
  },
  nextCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    height: 180,
    backgroundColor: '#F0F0EB',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    marginTop: 10,
  },

  profileIntroHead: {
    position: 'absolute',
    left: 10,
    top: 20,
    ...boldTextMixin(12),
  },
  profileIntroText: {
    position: 'absolute',
    left: 10,
    top: 64,
    right: 120,
    ...boldTextMixin(28),
  },

  header: {
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  finishedButton: {
    minWidth: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 35,
  },
  finishedText: {
    marginHorizontal: 10,
    ...semiBoldTextMixin(14)
  },
  buttonsWrapper: {
    position: 'absolute',
    bottom: 40,
  },
  why_buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reminderWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  reminderText: {
    position: 'absolute',
    top: 50,
    left: 40,
    right: 30,
    ...boldTextMixin(20)
  },
  dateTimePicker: {
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 8
  },

  confirmReminder: {
    position:'absolute',
    bottom: 50,
    alignSelf:'center'
  }
})

export const htmlStyles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#fbff57',
  },
  p: {
    ...lightTextMixin(16),
  },
  div: {
    ...regularTextMixin(16)
  },
})

/**
 * Created by Karan on 2017-11-20.
 */

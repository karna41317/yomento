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
    right: 20
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

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextStyle: {
    ...semiBoldTextMixin(18, '#FFF'),
  },

  mainCard: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height - 30,
    backgroundColor: '#F0F0EB',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    margin:5
  },
  nextCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    height: 180,
    backgroundColor: '#F0F0EB',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    marginTop: 10
  },
  profileButton: {
    position: 'absolute',
    right: 10,
    bottom: 20,
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
    bottom: 25,
  },
  why_buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

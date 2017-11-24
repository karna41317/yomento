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
  nextCard: {
    position: 'absolute',
    top:180,
    bottom: -10,
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
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    height: 345,
    backgroundColor: '#F0F0EB',
    borderRadius: 10,
    borderTopLeftRadius: 0,
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




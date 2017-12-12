/**
 * Created by Karan on 2017-11-09.
 */
import { StyleSheet } from 'react-native'
import { extraBoldTextMixin, lightTextMixin, boldTextMixin, semiBoldTextMixin, regularTextMixin } from 'src/styles'

export const styles = StyleSheet.create({
  /*Header*/
  profileDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEmail: {
    backgroundColor: 'transparent',
    ...lightTextMixin(14, '#FFFFFF'),
    marginVertical: 2,
  },
  profileName: {
    backgroundColor: 'transparent',
    ...semiBoldTextMixin(20, '#FFFFFF')
  },
  profileFooterButtons: {
    position: 'absolute',
    right: 30,
    bottom: 20,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3E3E65',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarIcon: {
    ...lightTextMixin(100, '#FFFFFF'),
    backgroundColor:'transparent'
  },

  headerTextStyle: {
    ...semiBoldTextMixin(18, '#FFF'),
  },
  profileSecondaryButtons: {
    paddingHorizontal: 20,
    borderColor: '#9595A4',
    minWidth: 80,
  },
  profileDetailsButtons: {
    borderColor: '#007DFF',
    marginVertical: 10,
    width: 250,
  },
  headerStyle: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextStyle: {
    ...semiBoldTextMixin(18, '#FFF'),
  },
  profileButtonText: {
    ...semiBoldTextMixin(14, '#FFF'),
    textAlign: 'center',
  },
  profileDetailsText: {
    ...semiBoldTextMixin(14, '#007DFF')
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
  actionButton: {
    marginRight: 25,
  },
  readMoreButton: {
    marginTop: 5,
  },
  descWrapper: {
    marginRight: 10,
  },
  textDescription: {
    ...regularTextMixin(20, '#FFF')
  },
  introWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regularCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 345,
    height: 345,
    backgroundColor: '#F0F0EB',
    borderRadius: 10,
    borderTopLeftRadius: 0,
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




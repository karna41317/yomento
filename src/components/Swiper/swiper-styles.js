/**
 * Created by Karan on 2017-11-09.
 */
import { StyleSheet } from 'react-native'
import { extraBoldTextMixin, lightTextMixin, boldTextMixin, semiBoldTextMixin, regularTextMixin } from 'src/styles'

export const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 20,
  },

  dotStyle: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
  activeDotStyle: {
    backgroundColor: '#fff',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  dotContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
  },

  /*Styles with custome slide*/
  wrapper: {
    position: 'absolute',
    top: 170,
    left: 40,
  },
  title: {
    ...extraBoldTextMixin(24),
    marginBottom: 40,
    marginRight: 40
  },
  actionButton: {
    marginRight: 25,
  },

  textDescription: {
    ...regularTextMixin(20)
  },
})


export const htmlStyles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#1d3fff',
  },
  p: {
    ...regularTextMixin(18)
  },
  div: {
    ...regularTextMixin(18)
  },
});

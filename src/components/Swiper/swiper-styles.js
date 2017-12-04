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
  slider: {
    marginRight:-100,
    marginLeft:-100,
    width:250,
    transform: [
      { rotateZ : '-90deg' },
    ],
  },

  dotStyle: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: '#282553',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 40,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dotContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerTextStyle: {
    ...regularTextMixin(14),
    textAlign: 'center'
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 10
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
  headerStyle: {
    marginVertical: 40,
    marginHorizontal: 20,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  quoteText: {
    ...boldTextMixin(24),
    textAlign:'center',
    justifyContent: 'center'
  },
  tapText: {
    ...boldTextMixin(18),
    textAlign:'center',
    justifyContent: 'center'
  },
  authorText: {
    marginTop: 20,
    ...lightTextMixin(18),
    textAlign:'center',
    justifyContent: 'center'
  },
  track: {
    height: 10,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#419BF9',
    borderWidth: 2,
  }
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

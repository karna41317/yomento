/**
 * Created by Karan on 2017-11-09.
 */
import { StyleSheet } from 'react-native'
import { extraBoldTextMixin, lightTextMixin, boldTextMixin, semiBoldTextMixin, regularTextMixin } from 'src/styles'

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 170,
    left: 40,
  },
  title: {
    ...extraBoldTextMixin(24),
    marginBottom: 40,
    marginRight: 40,
  },
  actionButton: {
    marginRight: 25,
  },
  readMoreButton: {
    marginTop: 5,
  },
  textDescription: {
    ...regularTextMixin(20, '#FFF')
  },
})

export const htmlStyles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#fbff57',
  },
  p: {
    ...regularTextMixin(18, '#FFF'),
  },
  div: {
    ...regularTextMixin(18, '#FFF')
  },
})

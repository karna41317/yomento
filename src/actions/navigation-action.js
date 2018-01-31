/**
 * Created by Karan on 2017-10-25.
 */
import { NavigationActions } from 'react-navigation'

const navigate = (navigator, routeName, params) => {
  navigator.navigate(routeName)
}

/*export const goBack = () => (dispatch, { navigator }) => {
  navigator.dispatch(NavigationActions.back())
}*/

export const toLogin = (nav) => () => {
  navigate(nav, 'login')
}

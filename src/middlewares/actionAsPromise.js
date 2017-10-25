/**
 * Created by Karan on 2017-10-25.
 */
export default (options = {}) => {
  return ({ dispatch }) => next => action => {
    if (typeof action === 'function') {
      const { logger } = options
      try {
        const args = Object.assign({}, options)
        args.args = args
        action(dispatch, args)
      } catch (err) {
        if (logger && logger.debug) {
          logger.debug('Invalid action state: ', err)
        }
      }
    } else {
      return next(action)
    }
  }
}

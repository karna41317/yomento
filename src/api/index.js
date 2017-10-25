/**
 * Created by Karan on 2017-10-25.
 */

import { ThemeUtils as Utils } from 'react-native-mdcore'



import HttpService from './http-service'

class ApiModule extends HttpService {

  /*async getExperiences() {
    const objects = await this.get('/api/experiences')
    return 'parsed responce'
  }*/
}

export const apiModule = new ApiModule()
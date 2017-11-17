//  Created by karan on 23/02/2017.
//  Copyright karan
//

import UIKit

@objc(RNScatterChartManager)
class RNScatterChartManager: RCTViewManager {
  override func view() -> UIView! {
    let ins = RNScatterChartView()
    return ins;
  }

}

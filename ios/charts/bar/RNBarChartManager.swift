//  Created by karan on 23/02/2017.
//  Copyright karan
//

import UIKit

@objc(RNBarChartManager)
open class RNBarChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNBarChartView()
    return ins;
  }

}

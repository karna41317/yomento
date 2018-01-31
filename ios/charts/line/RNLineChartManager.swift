//  Created by karan on 23/02/2017.
//  Copyright karan
//

import UIKit

@objc(RNLineChartManager)
open class RNLineChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNLineChartView()
    return ins;
  }

}

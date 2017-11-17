//  Created by karan on 23/02/2017.
//  Copyright karan
//

import UIKit

@objc(RNPieChartManager)
open class RNPieChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNPieChartView()
    return ins;
  }

}

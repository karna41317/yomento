//  Created by karan on 23/02/2017.
//  Copyright karan
//

import UIKit

@objc(RNBubbleChartManager)
open class RNBubbleChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNBubbleChartView()
    return ins;
  }

}

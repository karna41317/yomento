//  Created by karan on 23/02/2017.
//  Copyright karan
//

import UIKit

@objc(RNCandleStickChartManager)
open class RNCandleStickChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNCandleStickChartView()
    return ins;
  }

}

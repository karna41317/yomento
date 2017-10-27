/**
 * Created by Karan on 2017-10-27.
 */
import { setDefaultThemeStyle } from './init'
import getTheme, { defaultThemeVariables, dimensionRelativeToIphone } from './getThemeStyle'

setDefaultThemeStyle()

// Theme
export { getTheme, defaultThemeVariables, dimensionRelativeToIphone }

// Components
export { View } from './View'
export { Screen } from './Screen'

export { NavigationBar } from './NavigationBar'
export { NavigationBarAnimations } from './NavigationBar/NavigationBarAnimations'
export { DropDownMenu, DropDownModal } from './DropDownMenu'
export { Overlay } from './Overlay'

export { ScrollView } from './ScrollView'
export { ListView } from './ListView'
export { GridRow } from './GridRow'

export { TouchableOpacity } from './TouchableOpacity'
export { TouchableNativeFeedback } from './TouchableNativeFeedback'
export { Touchable } from './Touchable'
export { Button } from './Button'
export { Icon, createIcon } from './Icon'

export { FormGroup } from './FormGroup'
export { TextInput } from './TextInput'

export { Spinner } from './Spinner'
export { Switch } from './Switch'

export { Video } from './Video'
export { Image } from './Image'
export { ImagePreview } from './ImagePreview'
export { ImageGallery } from './ImageGallery'
export { InlineGallery } from './InlineGallery'
export { ImageGalleryOverlay } from './ImageGalleryOverlay'
export { HorizontalPager } from './HorizontalPager'
export { LoadingIndicator } from './LoadingIndicator'
export { PageIndicators } from './PageIndicators'
//export { default as RichMedia } from './RichMedia'
//export { Html } from './html'
export { ShareButton } from './ShareButton'

export {
  Heading,
  Title,
  Subtitle,
  Text,
  Caption,
} from './Text'

export { Stage } from './stage'
export { Divider } from './Divider'

export { Card } from './Card'
export { Row } from './Row'
export { Tile } from './Tile'

export { Lightbox } from './Lightbox'
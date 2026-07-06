import Add from './Add';
import Ai from './Ai';
import ArrowFall from './ArrowFall';
import ArrowLineDown from './ArrowLineDown';
import ArrowLineLeft from './ArrowLineLeft';
import ArrowLineRight from './ArrowLineRight';
import ArrowLineUp from './ArrowLineUp';
import ArrowLineUpDown from './ArrowLineUpDown';
import ArrowRight from './ArrowRight';
import ArrowRise from './ArrowRise';
import ArrowsDown from './ArrowsDown';
import ArrowsDownUp from './ArrowsDownUp';
import ArrowsUp from './ArrowsUp';
import Badge from './Badge';
import ChatDashed from './ChatDashed';
import CheckboxFalse from './CheckboxFalse';
import CheckboxMultiple from './CheckboxMultiple';
import CheckboxTrue from './CheckboxTrue';
import Chip from './Chip';
import Clipboard from './Clipboard';
import Close from './Close';
import Copy from './Copy';
import DotCircle from './DotCircle';
import DotSquare from './DotSquare';
import Explain from './Explain';
import FourLeafClover from './FourLeafClover';
import FourPointedStar from './FourPointedStar';
import Goto from './Goto';
import Help from './Help';
import HorizontalScreen from './HorizontalScreen';
import IconSet from './IconSet';
import IconSize16 from './IconSize16';
import IconSize20 from './IconSize20';
import IconSize24 from './IconSize24';
import IconSize28 from './IconSize28';
import IconSize32 from './IconSize32';
import IconSize40 from './IconSize40';
import IconSize48 from './IconSize48';
import IconSize80 from './IconSize80';
import ImageLoading from './ImageLoading';
import Line from './Line';
import Maximize from './Maximize';
import Minimize from './Minimize';
import PayWave from './PayWave';
import RadioFalse from './RadioFalse';
import RadioTrue from './RadioTrue';
import RadioTrueAlt from './RadioTrueAlt';
import Rating1 from './Rating1';
import Rating2 from './Rating2';
import Rating3 from './Rating3';
import Rating4 from './Rating4';
import Rating5 from './Rating5';
import Repost from './Repost';
import Rightbar from './Rightbar';
import RightbarMode from './RightbarMode';
import Round from './Round';
import RoundedCorner from './RoundedCorner';
import Search from './Search';
import Selected from './Selected';
import SnowIcon from './SnowIcon';
import StarFour from './StarFour';
import Stars from './Stars';
import StopAlt from './StopAlt';
import StopSecondary from './StopSecondary';
import SwitchFalse from './SwitchFalse';
import SwitchPoint from './SwitchPoint';
import SwitchTrue from './SwitchTrue';
import TextA from './TextA';
import ThreeDots from './ThreeDots';
import Variables from './Variables';
import VerticalScreen from './VerticalScreen';
import Windowed from './Windowed';
import XCircle from './XCircle';

export const iconsByName = {
  'add': Add,
  'ai': Ai,
  'arrow-fall': ArrowFall,
  'arrow-line-down': ArrowLineDown,
  'arrow-line-left': ArrowLineLeft,
  'arrow-line-right': ArrowLineRight,
  'arrow-line-up': ArrowLineUp,
  'arrow-line-up-down': ArrowLineUpDown,
  'arrow-right': ArrowRight,
  'arrow-rise': ArrowRise,
  'arrows-down': ArrowsDown,
  'arrows-down-up': ArrowsDownUp,
  'arrows-up': ArrowsUp,
  'badge': Badge,
  'chat-dashed': ChatDashed,
  'checkbox-false': CheckboxFalse,
  'checkbox-multiple': CheckboxMultiple,
  'checkbox-true': CheckboxTrue,
  'chip': Chip,
  'clipboard': Clipboard,
  'close': Close,
  'copy': Copy,
  'dot-circle': DotCircle,
  'dot-square': DotSquare,
  'explain': Explain,
  'four-leaf-clover': FourLeafClover,
  'four-pointed-star': FourPointedStar,
  'goto': Goto,
  'help': Help,
  'horizontal-screen': HorizontalScreen,
  'icon-set': IconSet,
  'icon-size-16': IconSize16,
  'icon-size-20': IconSize20,
  'icon-size-24': IconSize24,
  'icon-size-28': IconSize28,
  'icon-size-32': IconSize32,
  'icon-size-40': IconSize40,
  'icon-size-48': IconSize48,
  'icon-size-80': IconSize80,
  'image-loading': ImageLoading,
  'line': Line,
  'maximize': Maximize,
  'minimize': Minimize,
  'pay-wave': PayWave,
  'radio-false': RadioFalse,
  'radio-true': RadioTrue,
  'radio-true-alt': RadioTrueAlt,
  'rating-1': Rating1,
  'rating-2': Rating2,
  'rating-3': Rating3,
  'rating-4': Rating4,
  'rating-5': Rating5,
  'repost': Repost,
  'rightbar': Rightbar,
  'rightbar-mode': RightbarMode,
  'round': Round,
  'rounded-corner': RoundedCorner,
  'search': Search,
  'selected': Selected,
  'snow-icon': SnowIcon,
  'star-four': StarFour,
  'stars': Stars,
  'stop-alt': StopAlt,
  'stop-secondary': StopSecondary,
  'switch-false': SwitchFalse,
  'switch-point': SwitchPoint,
  'switch-true': SwitchTrue,
  'text-a': TextA,
  'three-dots': ThreeDots,
  'variables': Variables,
  'vertical-screen': VerticalScreen,
  'windowed': Windowed,
  'x-circle': XCircle,
} as const;

export type IconName = keyof typeof iconsByName;

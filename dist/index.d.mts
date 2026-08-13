import * as React$1 from 'react';
import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type IconWeight = 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';
interface ReplacePolicy {
    preserve?: string[];
    replaceMap?: Record<string, string>;
    targetCollection?: string;
    priority?: string[];
}
interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'color'> {
    size?: number | string;
    color?: string;
    weight?: IconWeight;
    className?: string;
    /** 内部使用：防止二次替换 */
    bypassSwitch?: boolean;
}
interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: number;
    src?: string;
}
interface BackgroundProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    width?: number;
    height?: number;
    src?: string;
}

declare const Add: React$1.FC<IconProps>;

declare const Ai: React$1.FC<IconProps>;

declare const ArrowFall: React$1.FC<IconProps>;

declare const ArrowLineDown$1: React$1.FC<IconProps>;

declare const ArrowLineLeft$1: React$1.FC<IconProps>;

declare const ArrowLineRight$1: React$1.FC<IconProps>;

declare const ArrowLineUp$1: React$1.FC<IconProps>;

declare const ArrowLineUpDown: React$1.FC<IconProps>;

declare const ArrowRise: React$1.FC<IconProps>;

declare const ArrowsDown: React$1.FC<IconProps>;

declare const ArrowsDownUp$1: React$1.FC<IconProps>;

declare const ArrowsUp: React$1.FC<IconProps>;

declare const Badge: React$1.FC<IconProps>;

declare const ChatDashed: React$1.FC<IconProps>;

declare const CheckboxFalse: React$1.FC<IconProps>;

declare const CheckboxMultiple: React$1.FC<IconProps>;

declare const CheckboxTrue: React$1.FC<IconProps>;

declare const Chip: React$1.FC<IconProps>;

declare const Clipboard$1: React$1.FC<IconProps>;

declare const Close: React$1.FC<IconProps>;

declare const Copy$1: React$1.FC<IconProps>;

declare const DotCircle: React$1.FC<IconProps>;

declare const DotSquare: React$1.FC<IconProps>;

declare const Explain: React$1.FC<IconProps>;

declare const FourLeafClover: React$1.FC<IconProps>;

declare const FourPointedStar: React$1.FC<IconProps>;

declare const Goto: React$1.FC<IconProps>;

declare const Help: React$1.FC<IconProps>;

declare const HorizontalScreen: React$1.FC<IconProps>;

declare const IconSet: React$1.FC<IconProps>;

declare const IconSize16: React$1.FC<IconProps>;

declare const IconSize20: React$1.FC<IconProps>;

declare const IconSize24: React$1.FC<IconProps>;

declare const IconSize28: React$1.FC<IconProps>;

declare const IconSize32: React$1.FC<IconProps>;

declare const IconSize40: React$1.FC<IconProps>;

declare const IconSize48: React$1.FC<IconProps>;

declare const IconSize80: React$1.FC<IconProps>;

declare const ImageLoading: React$1.FC<IconProps>;

declare const Line: React$1.FC<IconProps>;

declare const Maximize: React$1.FC<IconProps>;

declare const Minimize: React$1.FC<IconProps>;

declare const PayWave: React$1.FC<IconProps>;

declare const RadioFalse: React$1.FC<IconProps>;

declare const RadioTrue: React$1.FC<IconProps>;

declare const RadioTrueAlt: React$1.FC<IconProps>;

declare const Rating1: React$1.FC<IconProps>;

declare const Rating2: React$1.FC<IconProps>;

declare const Rating3: React$1.FC<IconProps>;

declare const Rating4: React$1.FC<IconProps>;

declare const Rating5: React$1.FC<IconProps>;

declare const Repost: React$1.FC<IconProps>;

declare const Rightbar: React$1.FC<IconProps>;

declare const RightbarMode: React$1.FC<IconProps>;

declare const Round: React$1.FC<IconProps>;

declare const RoundedCorner: React$1.FC<IconProps>;

declare const Search: React$1.FC<IconProps>;

declare const Selected: React$1.FC<IconProps>;

declare const SnowIcon: React$1.FC<IconProps>;

declare const StarFour$1: React$1.FC<IconProps>;

declare const Stars: React$1.FC<IconProps>;

declare const StopAlt: React$1.FC<IconProps>;

declare const StopSecondary: React$1.FC<IconProps>;

declare const SwitchFalse: React$1.FC<IconProps>;

declare const SwitchPoint: React$1.FC<IconProps>;

declare const SwitchTrue: React$1.FC<IconProps>;

declare const TextA: React$1.FC<IconProps>;

declare const ThreeDots: React$1.FC<IconProps>;

declare const Variables: React$1.FC<IconProps>;

declare const VerticalScreen: React$1.FC<IconProps>;

declare const Windowed: React$1.FC<IconProps>;

declare const XCircle$1: React$1.FC<IconProps>;

declare const AddressBook: React$1.FC<IconProps>;

declare const Airplane: React$1.FC<IconProps>;

declare const AirplaneInFlight: React$1.FC<IconProps>;

declare const AirplaneLanding: React$1.FC<IconProps>;

declare const AirplaneTakeoff: React$1.FC<IconProps>;

declare const AirplaneTilt: React$1.FC<IconProps>;

declare const Airplay: React$1.FC<IconProps>;

declare const AirTrafficControl: React$1.FC<IconProps>;

declare const Alarm: React$1.FC<IconProps>;

declare const Alien: React$1.FC<IconProps>;

declare const AlignBottom: React$1.FC<IconProps>;

declare const AlignBottomSimple: React$1.FC<IconProps>;

declare const AlignCenterHorizontal: React$1.FC<IconProps>;

declare const AlignCenterHorizontalSimple: React$1.FC<IconProps>;

declare const AlignCenterVertical: React$1.FC<IconProps>;

declare const AlignCenterVerticalSimple: React$1.FC<IconProps>;

declare const AlignLeft: React$1.FC<IconProps>;

declare const AlignLeftSimple: React$1.FC<IconProps>;

declare const AlignRight: React$1.FC<IconProps>;

declare const AlignRightSimple: React$1.FC<IconProps>;

declare const AlignTop: React$1.FC<IconProps>;

declare const AlignTopSimple: React$1.FC<IconProps>;

declare const AmazonLogo: React$1.FC<IconProps>;

declare const Anchor: React$1.FC<IconProps>;

declare const AnchorSimple: React$1.FC<IconProps>;

declare const AndroidLogo: React$1.FC<IconProps>;

declare const AngularLogo: React$1.FC<IconProps>;

declare const Aperture: React$1.FC<IconProps>;

declare const AppleLogo: React$1.FC<IconProps>;

declare const ApplePodcastsLogo: React$1.FC<IconProps>;

declare const AppStoreLogo: React$1.FC<IconProps>;

declare const AppWindow: React$1.FC<IconProps>;

declare const Archive: React$1.FC<IconProps>;

declare const ArchiveBox: React$1.FC<IconProps>;

declare const ArchiveTray: React$1.FC<IconProps>;

declare const Armchair: React$1.FC<IconProps>;

declare const ArrowArcLeft: React$1.FC<IconProps>;

declare const ArrowArcRight: React$1.FC<IconProps>;

declare const ArrowBendDoubleUpLeft: React$1.FC<IconProps>;

declare const ArrowBendDoubleUpRight: React$1.FC<IconProps>;

declare const ArrowBendDownLeft: React$1.FC<IconProps>;

declare const ArrowBendDownRight: React$1.FC<IconProps>;

declare const ArrowBendLeftDown: React$1.FC<IconProps>;

declare const ArrowBendLeftUp: React$1.FC<IconProps>;

declare const ArrowBendRightDown: React$1.FC<IconProps>;

declare const ArrowBendRightUp: React$1.FC<IconProps>;

declare const ArrowBendUpLeft: React$1.FC<IconProps>;

declare const ArrowBendUpRight: React$1.FC<IconProps>;

declare const ArrowCircleDown: React$1.FC<IconProps>;

declare const ArrowCircleDownLeft: React$1.FC<IconProps>;

declare const ArrowCircleDownRight: React$1.FC<IconProps>;

declare const ArrowCircleLeft: React$1.FC<IconProps>;

declare const ArrowCircleRight: React$1.FC<IconProps>;

declare const ArrowCircleUp: React$1.FC<IconProps>;

declare const ArrowCircleUpLeft: React$1.FC<IconProps>;

declare const ArrowCircleUpRight: React$1.FC<IconProps>;

declare const ArrowClockwise: React$1.FC<IconProps>;

declare const ArrowCounterClockwise: React$1.FC<IconProps>;

declare const ArrowDown: React$1.FC<IconProps>;

declare const ArrowDownLeft: React$1.FC<IconProps>;

declare const ArrowDownRight: React$1.FC<IconProps>;

declare const ArrowElbowDownLeft: React$1.FC<IconProps>;

declare const ArrowElbowDownRight: React$1.FC<IconProps>;

declare const ArrowElbowLeft: React$1.FC<IconProps>;

declare const ArrowElbowLeftDown: React$1.FC<IconProps>;

declare const ArrowElbowLeftUp: React$1.FC<IconProps>;

declare const ArrowElbowRight: React$1.FC<IconProps>;

declare const ArrowElbowRightDown: React$1.FC<IconProps>;

declare const ArrowElbowRightUp: React$1.FC<IconProps>;

declare const ArrowElbowUpLeft: React$1.FC<IconProps>;

declare const ArrowElbowUpRight: React$1.FC<IconProps>;

declare const ArrowFatDown: React$1.FC<IconProps>;

declare const ArrowFatLeft: React$1.FC<IconProps>;

declare const ArrowFatLineDown: React$1.FC<IconProps>;

declare const ArrowFatLineLeft: React$1.FC<IconProps>;

declare const ArrowFatLineRight: React$1.FC<IconProps>;

declare const ArrowFatLinesDown: React$1.FC<IconProps>;

declare const ArrowFatLinesLeft: React$1.FC<IconProps>;

declare const ArrowFatLinesRight: React$1.FC<IconProps>;

declare const ArrowFatLinesUp: React$1.FC<IconProps>;

declare const ArrowFatLineUp: React$1.FC<IconProps>;

declare const ArrowFatRight: React$1.FC<IconProps>;

declare const ArrowFatUp: React$1.FC<IconProps>;

declare const ArrowLeft: React$1.FC<IconProps>;

declare const ArrowLineDownLeft: React$1.FC<IconProps>;

declare const ArrowLineDownRight: React$1.FC<IconProps>;

declare const ArrowLineUpLeft: React$1.FC<IconProps>;

declare const ArrowLineUpRight: React$1.FC<IconProps>;

declare const ArrowRight: React$1.FC<IconProps>;

declare const ArrowsClockwise: React$1.FC<IconProps>;

declare const ArrowsCounterClockwise: React$1.FC<IconProps>;

declare const ArrowsHorizontal: React$1.FC<IconProps>;

declare const ArrowsIn: React$1.FC<IconProps>;

declare const ArrowsInCardinal: React$1.FC<IconProps>;

declare const ArrowsInLineHorizontal: React$1.FC<IconProps>;

declare const ArrowsInLineVertical: React$1.FC<IconProps>;

declare const ArrowsInSimple: React$1.FC<IconProps>;

declare const ArrowsLeftRight: React$1.FC<IconProps>;

declare const ArrowsMerge: React$1.FC<IconProps>;

declare const ArrowsOut: React$1.FC<IconProps>;

declare const ArrowsOutCardinal: React$1.FC<IconProps>;

declare const ArrowsOutLineHorizontal: React$1.FC<IconProps>;

declare const ArrowsOutLineVertical: React$1.FC<IconProps>;

declare const ArrowsOutSimple: React$1.FC<IconProps>;

declare const ArrowSquareDown: React$1.FC<IconProps>;

declare const ArrowSquareDownLeft: React$1.FC<IconProps>;

declare const ArrowSquareDownRight: React$1.FC<IconProps>;

declare const ArrowSquareIn: React$1.FC<IconProps>;

declare const ArrowSquareLeft: React$1.FC<IconProps>;

declare const ArrowSquareOut: React$1.FC<IconProps>;

declare const ArrowSquareRight: React$1.FC<IconProps>;

declare const ArrowSquareUp: React$1.FC<IconProps>;

declare const ArrowSquareUpLeft: React$1.FC<IconProps>;

declare const ArrowSquareUpRight: React$1.FC<IconProps>;

declare const ArrowsSplit: React$1.FC<IconProps>;

declare const ArrowsVertical: React$1.FC<IconProps>;

declare const ArrowUDownLeft: React$1.FC<IconProps>;

declare const ArrowUDownRight: React$1.FC<IconProps>;

declare const ArrowULeftDown: React$1.FC<IconProps>;

declare const ArrowULeftUp: React$1.FC<IconProps>;

declare const ArrowUp: React$1.FC<IconProps>;

declare const ArrowUpLeft: React$1.FC<IconProps>;

declare const ArrowUpRight: React$1.FC<IconProps>;

declare const ArrowURightDown: React$1.FC<IconProps>;

declare const ArrowURightUp: React$1.FC<IconProps>;

declare const ArrowUUpLeft: React$1.FC<IconProps>;

declare const ArrowUUpRight: React$1.FC<IconProps>;

declare const Article: React$1.FC<IconProps>;

declare const ArticleMedium: React$1.FC<IconProps>;

declare const ArticleNyTimes: React$1.FC<IconProps>;

declare const Asterisk: React$1.FC<IconProps>;

declare const AsteriskSimple: React$1.FC<IconProps>;

declare const At: React$1.FC<IconProps>;

declare const Atom: React$1.FC<IconProps>;

declare const Baby: React$1.FC<IconProps>;

declare const Backpack: React$1.FC<IconProps>;

declare const Backspace: React$1.FC<IconProps>;

declare const Bag: React$1.FC<IconProps>;

declare const BagSimple: React$1.FC<IconProps>;

declare const Balloon: React$1.FC<IconProps>;

declare const Bandaids: React$1.FC<IconProps>;

declare const Bank: React$1.FC<IconProps>;

declare const Barbell: React$1.FC<IconProps>;

declare const Barcode: React$1.FC<IconProps>;

declare const Barricade: React$1.FC<IconProps>;

declare const Baseball: React$1.FC<IconProps>;

declare const BaseballCap: React$1.FC<IconProps>;

declare const Basket: React$1.FC<IconProps>;

declare const Basketball: React$1.FC<IconProps>;

declare const Bathtub: React$1.FC<IconProps>;

declare const BatteryCharging: React$1.FC<IconProps>;

declare const BatteryChargingVertical: React$1.FC<IconProps>;

declare const BatteryEmpty: React$1.FC<IconProps>;

declare const BatteryFull: React$1.FC<IconProps>;

declare const BatteryHigh: React$1.FC<IconProps>;

declare const BatteryLow: React$1.FC<IconProps>;

declare const BatteryMedium: React$1.FC<IconProps>;

declare const BatteryPlus: React$1.FC<IconProps>;

declare const BatteryPlusVertical: React$1.FC<IconProps>;

declare const BatteryVerticalEmpty: React$1.FC<IconProps>;

declare const BatteryVerticalFull: React$1.FC<IconProps>;

declare const BatteryVerticalHigh: React$1.FC<IconProps>;

declare const BatteryVerticalLow: React$1.FC<IconProps>;

declare const BatteryVerticalMedium: React$1.FC<IconProps>;

declare const BatteryWarning: React$1.FC<IconProps>;

declare const BatteryWarningVertical: React$1.FC<IconProps>;

declare const Bed: React$1.FC<IconProps>;

declare const BeerBottle: React$1.FC<IconProps>;

declare const BeerStein: React$1.FC<IconProps>;

declare const BehanceLogo: React$1.FC<IconProps>;

declare const Bell: React$1.FC<IconProps>;

declare const BellRinging: React$1.FC<IconProps>;

declare const BellSimple: React$1.FC<IconProps>;

declare const BellSimpleRinging: React$1.FC<IconProps>;

declare const BellSimpleSlash: React$1.FC<IconProps>;

declare const BellSimpleZ: React$1.FC<IconProps>;

declare const BellSlash: React$1.FC<IconProps>;

declare const BellZ: React$1.FC<IconProps>;

declare const BezierCurve: React$1.FC<IconProps>;

declare const Bicycle: React$1.FC<IconProps>;

declare const Binoculars: React$1.FC<IconProps>;

declare const Bird: React$1.FC<IconProps>;

declare const Bluetooth: React$1.FC<IconProps>;

declare const BluetoothConnected: React$1.FC<IconProps>;

declare const BluetoothSlash: React$1.FC<IconProps>;

declare const BluetoothX: React$1.FC<IconProps>;

declare const Boat: React$1.FC<IconProps>;

declare const Bone: React$1.FC<IconProps>;

declare const Book: React$1.FC<IconProps>;

declare const BookBookmark: React$1.FC<IconProps>;

declare const Bookmark: React$1.FC<IconProps>;

declare const Bookmarks: React$1.FC<IconProps>;

declare const BookmarkSimple: React$1.FC<IconProps>;

declare const BookmarksSimple: React$1.FC<IconProps>;

declare const BookOpen: React$1.FC<IconProps>;

declare const BookOpenText: React$1.FC<IconProps>;

declare const Books: React$1.FC<IconProps>;

declare const Boot: React$1.FC<IconProps>;

declare const BoundingBox: React$1.FC<IconProps>;

declare const BowlFood: React$1.FC<IconProps>;

declare const BracketsAngle: React$1.FC<IconProps>;

declare const BracketsCurly: React$1.FC<IconProps>;

declare const BracketsRound: React$1.FC<IconProps>;

declare const BracketsSquare: React$1.FC<IconProps>;

declare const Brain: React$1.FC<IconProps>;

declare const Brandy: React$1.FC<IconProps>;

declare const Bridge: React$1.FC<IconProps>;

declare const Briefcase: React$1.FC<IconProps>;

declare const BriefcaseMetal: React$1.FC<IconProps>;

declare const Broadcast: React$1.FC<IconProps>;

declare const Broom: React$1.FC<IconProps>;

declare const Browser: React$1.FC<IconProps>;

declare const Browsers: React$1.FC<IconProps>;

declare const Bug: React$1.FC<IconProps>;

declare const BugBeetle: React$1.FC<IconProps>;

declare const BugDroid: React$1.FC<IconProps>;

declare const Buildings: React$1.FC<IconProps>;

declare const Bus: React$1.FC<IconProps>;

declare const Butterfly: React$1.FC<IconProps>;

declare const Cactus: React$1.FC<IconProps>;

declare const Cake: React$1.FC<IconProps>;

declare const Calculator: React$1.FC<IconProps>;

declare const Calendar: React$1.FC<IconProps>;

declare const CalendarBlank: React$1.FC<IconProps>;

declare const CalendarCheck: React$1.FC<IconProps>;

declare const CalendarPlus: React$1.FC<IconProps>;

declare const CalendarX: React$1.FC<IconProps>;

declare const CallBell: React$1.FC<IconProps>;

declare const Camera: React$1.FC<IconProps>;

declare const CameraPlus: React$1.FC<IconProps>;

declare const CameraRotate: React$1.FC<IconProps>;

declare const CameraSlash: React$1.FC<IconProps>;

declare const Campfire: React$1.FC<IconProps>;

declare const Car: React$1.FC<IconProps>;

declare const Cardholder: React$1.FC<IconProps>;

declare const Cards: React$1.FC<IconProps>;

declare const CaretCircleDoubleDown: React$1.FC<IconProps>;

declare const CaretCircleDoubleLeft: React$1.FC<IconProps>;

declare const CaretCircleDoubleRight: React$1.FC<IconProps>;

declare const CaretCircleDoubleUp: React$1.FC<IconProps>;

declare const CaretCircleDown: React$1.FC<IconProps>;

declare const CaretCircleLeft: React$1.FC<IconProps>;

declare const CaretCircleRight: React$1.FC<IconProps>;

declare const CaretCircleUp: React$1.FC<IconProps>;

declare const CaretCircleUpDown: React$1.FC<IconProps>;

declare const CaretDoubleDown: React$1.FC<IconProps>;

declare const CaretDoubleLeft: React$1.FC<IconProps>;

declare const CaretDoubleRight: React$1.FC<IconProps>;

declare const CaretDoubleUp: React$1.FC<IconProps>;

declare const CaretDown: React$1.FC<IconProps>;

declare const CaretLeft: React$1.FC<IconProps>;

declare const CaretRight: React$1.FC<IconProps>;

declare const CaretUp: React$1.FC<IconProps>;

declare const CaretUpDown: React$1.FC<IconProps>;

declare const CarProfile: React$1.FC<IconProps>;

declare const Carrot: React$1.FC<IconProps>;

declare const CarSimple: React$1.FC<IconProps>;

declare const CassetteTape: React$1.FC<IconProps>;

declare const CastleTurret: React$1.FC<IconProps>;

declare const Cat: React$1.FC<IconProps>;

declare const CellSignalFull: React$1.FC<IconProps>;

declare const CellSignalHigh: React$1.FC<IconProps>;

declare const CellSignalLow: React$1.FC<IconProps>;

declare const CellSignalMedium: React$1.FC<IconProps>;

declare const CellSignalNone: React$1.FC<IconProps>;

declare const CellSignalSlash: React$1.FC<IconProps>;

declare const CellSignalX: React$1.FC<IconProps>;

declare const Certificate: React$1.FC<IconProps>;

declare const Chair: React$1.FC<IconProps>;

declare const Chalkboard: React$1.FC<IconProps>;

declare const ChalkboardSimple: React$1.FC<IconProps>;

declare const ChalkboardTeacher: React$1.FC<IconProps>;

declare const Champagne: React$1.FC<IconProps>;

declare const ChargingStation: React$1.FC<IconProps>;

declare const ChartBar: React$1.FC<IconProps>;

declare const ChartBarHorizontal: React$1.FC<IconProps>;

declare const ChartDonut: React$1.FC<IconProps>;

declare const ChartLine: React$1.FC<IconProps>;

declare const ChartLineDown: React$1.FC<IconProps>;

declare const ChartLineUp: React$1.FC<IconProps>;

declare const ChartPie: React$1.FC<IconProps>;

declare const ChartPieSlice: React$1.FC<IconProps>;

declare const ChartPolar: React$1.FC<IconProps>;

declare const ChartScatter: React$1.FC<IconProps>;

declare const Chat: React$1.FC<IconProps>;

declare const ChatCentered: React$1.FC<IconProps>;

declare const ChatCenteredDots: React$1.FC<IconProps>;

declare const ChatCenteredText: React$1.FC<IconProps>;

declare const ChatCircle: React$1.FC<IconProps>;

declare const ChatCircleDots: React$1.FC<IconProps>;

declare const ChatCircleText: React$1.FC<IconProps>;

declare const ChatDots: React$1.FC<IconProps>;

declare const Chats: React$1.FC<IconProps>;

declare const ChatsCircle: React$1.FC<IconProps>;

declare const ChatsTeardrop: React$1.FC<IconProps>;

declare const ChatTeardrop: React$1.FC<IconProps>;

declare const ChatTeardropDots: React$1.FC<IconProps>;

declare const ChatTeardropText: React$1.FC<IconProps>;

declare const ChatText: React$1.FC<IconProps>;

declare const Check: React$1.FC<IconProps>;

declare const CheckCircle: React$1.FC<IconProps>;

declare const CheckFat: React$1.FC<IconProps>;

declare const Checks: React$1.FC<IconProps>;

declare const CheckSquare: React$1.FC<IconProps>;

declare const CheckSquareOffset: React$1.FC<IconProps>;

declare const Church: React$1.FC<IconProps>;

declare const Circle: React$1.FC<IconProps>;

declare const CircleDashed: React$1.FC<IconProps>;

declare const CircleHalf: React$1.FC<IconProps>;

declare const CircleHalfTilt: React$1.FC<IconProps>;

declare const CircleNotch: React$1.FC<IconProps>;

declare const CirclesFour: React$1.FC<IconProps>;

declare const CirclesThree: React$1.FC<IconProps>;

declare const CirclesThreePlus: React$1.FC<IconProps>;

declare const Circuitry: React$1.FC<IconProps>;

declare const ClipboardText: React$1.FC<IconProps>;

declare const Clock: React$1.FC<IconProps>;

declare const ClockAfternoon: React$1.FC<IconProps>;

declare const ClockClockwise: React$1.FC<IconProps>;

declare const ClockCountdown: React$1.FC<IconProps>;

declare const ClockCounterClockwise: React$1.FC<IconProps>;

declare const ClosedCaptioning: React$1.FC<IconProps>;

declare const Cloud: React$1.FC<IconProps>;

declare const CloudArrowDown: React$1.FC<IconProps>;

declare const CloudArrowUp: React$1.FC<IconProps>;

declare const CloudCheck: React$1.FC<IconProps>;

declare const CloudFog: React$1.FC<IconProps>;

declare const CloudLightning: React$1.FC<IconProps>;

declare const CloudMoon: React$1.FC<IconProps>;

declare const CloudRain: React$1.FC<IconProps>;

declare const CloudSlash: React$1.FC<IconProps>;

declare const CloudSnow: React$1.FC<IconProps>;

declare const CloudSun: React$1.FC<IconProps>;

declare const CloudWarning: React$1.FC<IconProps>;

declare const CloudX: React$1.FC<IconProps>;

declare const Club: React$1.FC<IconProps>;

declare const CoatHanger: React$1.FC<IconProps>;

declare const CodaLogo: React$1.FC<IconProps>;

declare const Code: React$1.FC<IconProps>;

declare const CodeBlock: React$1.FC<IconProps>;

declare const CodepenLogo: React$1.FC<IconProps>;

declare const CodesandboxLogo: React$1.FC<IconProps>;

declare const CodeSimple: React$1.FC<IconProps>;

declare const Coffee: React$1.FC<IconProps>;

declare const Coin: React$1.FC<IconProps>;

declare const Coins: React$1.FC<IconProps>;

declare const CoinVertical: React$1.FC<IconProps>;

declare const Columns: React$1.FC<IconProps>;

declare const Command: React$1.FC<IconProps>;

declare const Compass: React$1.FC<IconProps>;

declare const CompassOff: React$1.FC<IconProps>;

declare const CompassTool: React$1.FC<IconProps>;

declare const ComputerTower: React$1.FC<IconProps>;

declare const Confetti: React$1.FC<IconProps>;

declare const ContactlessPayment: React$1.FC<IconProps>;

declare const Control: React$1.FC<IconProps>;

declare const Cookie: React$1.FC<IconProps>;

declare const CookingPot: React$1.FC<IconProps>;

declare const Copyleft: React$1.FC<IconProps>;

declare const Copyright: React$1.FC<IconProps>;

declare const CopySimple: React$1.FC<IconProps>;

declare const CornersIn: React$1.FC<IconProps>;

declare const CornersOut: React$1.FC<IconProps>;

declare const Couch: React$1.FC<IconProps>;

declare const Cpu: React$1.FC<IconProps>;

declare const CreditCard: React$1.FC<IconProps>;

declare const Crop: React$1.FC<IconProps>;

declare const Cross: React$1.FC<IconProps>;

declare const Crosshair: React$1.FC<IconProps>;

declare const CrosshairSimple: React$1.FC<IconProps>;

declare const Crown: React$1.FC<IconProps>;

declare const CrownSimple: React$1.FC<IconProps>;

declare const Cube: React$1.FC<IconProps>;

declare const CubeFocus: React$1.FC<IconProps>;

declare const CubeTransparent: React$1.FC<IconProps>;

declare const CurrencyBtc: React$1.FC<IconProps>;

declare const CurrencyCircleDollar: React$1.FC<IconProps>;

declare const CurrencyCny: React$1.FC<IconProps>;

declare const CurrencyDollar: React$1.FC<IconProps>;

declare const CurrencyDollarSimple: React$1.FC<IconProps>;

declare const CurrencyEth: React$1.FC<IconProps>;

declare const CurrencyEur: React$1.FC<IconProps>;

declare const CurrencyGbp: React$1.FC<IconProps>;

declare const CurrencyInr: React$1.FC<IconProps>;

declare const CurrencyJpy: React$1.FC<IconProps>;

declare const CurrencyKrw: React$1.FC<IconProps>;

declare const CurrencyKzt: React$1.FC<IconProps>;

declare const CurrencyNgn: React$1.FC<IconProps>;

declare const CurrencyRub: React$1.FC<IconProps>;

declare const Cursor: React$1.FC<IconProps>;

declare const CursorClick: React$1.FC<IconProps>;

declare const CursorText: React$1.FC<IconProps>;

declare const Cylinder: React$1.FC<IconProps>;

declare const Database: React$1.FC<IconProps>;

declare const Desktop: React$1.FC<IconProps>;

declare const DesktopTower: React$1.FC<IconProps>;

declare const Detective: React$1.FC<IconProps>;

declare const DeviceMobile: React$1.FC<IconProps>;

declare const DeviceMobileCamera: React$1.FC<IconProps>;

declare const DeviceMobileSpeaker: React$1.FC<IconProps>;

declare const Devices: React$1.FC<IconProps>;

declare const DeviceTablet: React$1.FC<IconProps>;

declare const DeviceTabletCamera: React$1.FC<IconProps>;

declare const DeviceTabletSpeaker: React$1.FC<IconProps>;

declare const DevToLogo: React$1.FC<IconProps>;

declare const Diamond: React$1.FC<IconProps>;

declare const DiamondsFour: React$1.FC<IconProps>;

declare const DiceFive: React$1.FC<IconProps>;

declare const DiceFour: React$1.FC<IconProps>;

declare const DiceOne: React$1.FC<IconProps>;

declare const DiceSix: React$1.FC<IconProps>;

declare const DiceThree: React$1.FC<IconProps>;

declare const DiceTwo: React$1.FC<IconProps>;

declare const Disc: React$1.FC<IconProps>;

declare const DiscordLogo: React$1.FC<IconProps>;

declare const Divide: React$1.FC<IconProps>;

declare const Dna: React$1.FC<IconProps>;

declare const Dog: React$1.FC<IconProps>;

declare const Door: React$1.FC<IconProps>;

declare const DoorOpen: React$1.FC<IconProps>;

declare const Dot: React$1.FC<IconProps>;

declare const DotOutline: React$1.FC<IconProps>;

declare const DotsNine: React$1.FC<IconProps>;

declare const DotsSix: React$1.FC<IconProps>;

declare const DotsSixVertical: React$1.FC<IconProps>;

declare const DotsThree: React$1.FC<IconProps>;

declare const DotsThreeCircle: React$1.FC<IconProps>;

declare const DotsThreeCircleVertical: React$1.FC<IconProps>;

declare const DotsThreeOutline: React$1.FC<IconProps>;

declare const DotsThreeOutlineVertical: React$1.FC<IconProps>;

declare const DotsThreeVertical: React$1.FC<IconProps>;

declare const Download: React$1.FC<IconProps>;

declare const DownloadSimple: React$1.FC<IconProps>;

declare const Dress: React$1.FC<IconProps>;

declare const DribbbleLogo: React$1.FC<IconProps>;

declare const Drop: React$1.FC<IconProps>;

declare const DropboxLogo: React$1.FC<IconProps>;

declare const DropHalf: React$1.FC<IconProps>;

declare const DropHalfBottom: React$1.FC<IconProps>;

declare const Ear: React$1.FC<IconProps>;

declare const EarSlash: React$1.FC<IconProps>;

declare const Egg: React$1.FC<IconProps>;

declare const EggCrack: React$1.FC<IconProps>;

declare const Eject: React$1.FC<IconProps>;

declare const EjectSimple: React$1.FC<IconProps>;

declare const Elevator: React$1.FC<IconProps>;

declare const Engine: React$1.FC<IconProps>;

declare const Envelope: React$1.FC<IconProps>;

declare const EnvelopeOpen: React$1.FC<IconProps>;

declare const EnvelopeSimple: React$1.FC<IconProps>;

declare const EnvelopeSimpleOpen: React$1.FC<IconProps>;

declare const Equalizer: React$1.FC<IconProps>;

declare const Equals: React$1.FC<IconProps>;

declare const Eraser: React$1.FC<IconProps>;

declare const EscalatorDown: React$1.FC<IconProps>;

declare const EscalatorUp: React$1.FC<IconProps>;

declare const Exam: React$1.FC<IconProps>;

declare const Exclude: React$1.FC<IconProps>;

declare const ExcludeSquare: React$1.FC<IconProps>;

declare const Export: React$1.FC<IconProps>;

declare const Eye: React$1.FC<IconProps>;

declare const EyeClosed: React$1.FC<IconProps>;

declare const Eyedropper: React$1.FC<IconProps>;

declare const EyedropperSample: React$1.FC<IconProps>;

declare const Eyeglasses: React$1.FC<IconProps>;

declare const EyeSlash: React$1.FC<IconProps>;

declare const FacebookLogo: React$1.FC<IconProps>;

declare const FaceMask: React$1.FC<IconProps>;

declare const Factory: React$1.FC<IconProps>;

declare const Faders: React$1.FC<IconProps>;

declare const FadersHorizontal: React$1.FC<IconProps>;

declare const Fan: React$1.FC<IconProps>;

declare const FastForward: React$1.FC<IconProps>;

declare const FastForwardCircle: React$1.FC<IconProps>;

declare const Feather: React$1.FC<IconProps>;

declare const FigmaLogo: React$1.FC<IconProps>;

declare const File: React$1.FC<IconProps>;

declare const FileArchive: React$1.FC<IconProps>;

declare const FileArrowDown: React$1.FC<IconProps>;

declare const FileArrowUp: React$1.FC<IconProps>;

declare const FileAudio: React$1.FC<IconProps>;

declare const FileCloud: React$1.FC<IconProps>;

declare const FileCode: React$1.FC<IconProps>;

declare const FileCss: React$1.FC<IconProps>;

declare const FileCsv: React$1.FC<IconProps>;

declare const FileDashed: React$1.FC<IconProps>;

declare const FileDoc: React$1.FC<IconProps>;

declare const FileHtml: React$1.FC<IconProps>;

declare const FileImage: React$1.FC<IconProps>;

declare const FileJpg: React$1.FC<IconProps>;

declare const FileJs: React$1.FC<IconProps>;

declare const FileJsx: React$1.FC<IconProps>;

declare const FileLock: React$1.FC<IconProps>;

declare const FileMinus: React$1.FC<IconProps>;

declare const FilePdf: React$1.FC<IconProps>;

declare const FilePlus: React$1.FC<IconProps>;

declare const FilePng: React$1.FC<IconProps>;

declare const FilePpt: React$1.FC<IconProps>;

declare const FileRs: React$1.FC<IconProps>;

declare const Files: React$1.FC<IconProps>;

declare const FileSearch: React$1.FC<IconProps>;

declare const FileSql: React$1.FC<IconProps>;

declare const FileSvg: React$1.FC<IconProps>;

declare const FileText: React$1.FC<IconProps>;

declare const FileTs: React$1.FC<IconProps>;

declare const FileTsx: React$1.FC<IconProps>;

declare const FileVideo: React$1.FC<IconProps>;

declare const FileVue: React$1.FC<IconProps>;

declare const FileX: React$1.FC<IconProps>;

declare const FileXls: React$1.FC<IconProps>;

declare const FileZip: React$1.FC<IconProps>;

declare const FilmReel: React$1.FC<IconProps>;

declare const FilmScript: React$1.FC<IconProps>;

declare const FilmSlate: React$1.FC<IconProps>;

declare const FilmStrip: React$1.FC<IconProps>;

declare const Fingerprint: React$1.FC<IconProps>;

declare const FingerprintSimple: React$1.FC<IconProps>;

declare const FinnTheHuman: React$1.FC<IconProps>;

declare const Fire: React$1.FC<IconProps>;

declare const FireExtinguisher: React$1.FC<IconProps>;

declare const FireSimple: React$1.FC<IconProps>;

declare const FirstAid: React$1.FC<IconProps>;

declare const FirstAidKit: React$1.FC<IconProps>;

declare const Fish: React$1.FC<IconProps>;

declare const FishSimple: React$1.FC<IconProps>;

declare const Flag: React$1.FC<IconProps>;

declare const FlagBanner: React$1.FC<IconProps>;

declare const FlagCheckered: React$1.FC<IconProps>;

declare const FlagPennant: React$1.FC<IconProps>;

declare const Flame: React$1.FC<IconProps>;

declare const Flashlight: React$1.FC<IconProps>;

declare const Flask: React$1.FC<IconProps>;

declare const FloppyDisk: React$1.FC<IconProps>;

declare const FloppyDiskBack: React$1.FC<IconProps>;

declare const FlowArrow: React$1.FC<IconProps>;

declare const Flower: React$1.FC<IconProps>;

declare const FlowerLotus: React$1.FC<IconProps>;

declare const FlowerTulip: React$1.FC<IconProps>;

declare const FlyingSaucer: React$1.FC<IconProps>;

declare const Folder: React$1.FC<IconProps>;

declare const FolderDashed: React$1.FC<IconProps>;

declare const FolderLock: React$1.FC<IconProps>;

declare const FolderMinus: React$1.FC<IconProps>;

declare const FolderNotch: React$1.FC<IconProps>;

declare const FolderNotchMinus: React$1.FC<IconProps>;

declare const FolderNotchOpen: React$1.FC<IconProps>;

declare const FolderNotchPlus: React$1.FC<IconProps>;

declare const FolderOpen: React$1.FC<IconProps>;

declare const FolderPlus: React$1.FC<IconProps>;

declare const Folders: React$1.FC<IconProps>;

declare const FolderSimple: React$1.FC<IconProps>;

declare const FolderSimpleDashed: React$1.FC<IconProps>;

declare const FolderSimpleLock: React$1.FC<IconProps>;

declare const FolderSimpleMinus: React$1.FC<IconProps>;

declare const FolderSimplePlus: React$1.FC<IconProps>;

declare const FolderSimpleStar: React$1.FC<IconProps>;

declare const FolderSimpleUser: React$1.FC<IconProps>;

declare const FolderStar: React$1.FC<IconProps>;

declare const FolderUser: React$1.FC<IconProps>;

declare const Football: React$1.FC<IconProps>;

declare const Footprints: React$1.FC<IconProps>;

declare const ForkKnife: React$1.FC<IconProps>;

declare const FrameCorners: React$1.FC<IconProps>;

declare const FramerLogo: React$1.FC<IconProps>;

declare const Function: React$1.FC<IconProps>;

declare const Funnel: React$1.FC<IconProps>;

declare const FunnelSimple: React$1.FC<IconProps>;

declare const GameController: React$1.FC<IconProps>;

declare const Garage: React$1.FC<IconProps>;

declare const GasCan: React$1.FC<IconProps>;

declare const GasPump: React$1.FC<IconProps>;

declare const Gauge: React$1.FC<IconProps>;

declare const Gavel: React$1.FC<IconProps>;

declare const Gear: React$1.FC<IconProps>;

declare const GearFine: React$1.FC<IconProps>;

declare const GearSix: React$1.FC<IconProps>;

declare const GenderFemale: React$1.FC<IconProps>;

declare const GenderIntersex: React$1.FC<IconProps>;

declare const GenderMale: React$1.FC<IconProps>;

declare const GenderNeuter: React$1.FC<IconProps>;

declare const GenderNonbinary: React$1.FC<IconProps>;

declare const GenderTransgender: React$1.FC<IconProps>;

declare const Ghost: React$1.FC<IconProps>;

declare const Gif: React$1.FC<IconProps>;

declare const Gift: React$1.FC<IconProps>;

declare const GitBranch: React$1.FC<IconProps>;

declare const GitCommit: React$1.FC<IconProps>;

declare const GitDiff: React$1.FC<IconProps>;

declare const GitFork: React$1.FC<IconProps>;

declare const GithubLogo: React$1.FC<IconProps>;

declare const GitlabLogo: React$1.FC<IconProps>;

declare const GitlabLogoSimple: React$1.FC<IconProps>;

declare const GitMerge: React$1.FC<IconProps>;

declare const GitPullRequest: React$1.FC<IconProps>;

declare const Globe: React$1.FC<IconProps>;

declare const GlobeHemisphereEast: React$1.FC<IconProps>;

declare const GlobeHemisphereWest: React$1.FC<IconProps>;

declare const GlobeSimple: React$1.FC<IconProps>;

declare const GlobeStand: React$1.FC<IconProps>;

declare const Goggles: React$1.FC<IconProps>;

declare const GoodreadsLogo: React$1.FC<IconProps>;

declare const GoogleCardboardLogo: React$1.FC<IconProps>;

declare const GoogleChromeLogo: React$1.FC<IconProps>;

declare const GoogleDriveLogo: React$1.FC<IconProps>;

declare const GoogleLogo: React$1.FC<IconProps>;

declare const GooglePhotosLogo: React$1.FC<IconProps>;

declare const GooglePlayLogo: React$1.FC<IconProps>;

declare const GooglePodcastsLogo: React$1.FC<IconProps>;

declare const Gradient: React$1.FC<IconProps>;

declare const GraduationCap: React$1.FC<IconProps>;

declare const Grains: React$1.FC<IconProps>;

declare const GrainsSlash: React$1.FC<IconProps>;

declare const Graph: React$1.FC<IconProps>;

declare const GridFour: React$1.FC<IconProps>;

declare const GridNine: React$1.FC<IconProps>;

declare const Guitar: React$1.FC<IconProps>;

declare const Hamburger: React$1.FC<IconProps>;

declare const Hammer: React$1.FC<IconProps>;

declare const Hand: React$1.FC<IconProps>;

declare const Handbag: React$1.FC<IconProps>;

declare const HandbagSimple: React$1.FC<IconProps>;

declare const HandCoins: React$1.FC<IconProps>;

declare const HandEye: React$1.FC<IconProps>;

declare const HandFist: React$1.FC<IconProps>;

declare const HandGrabbing: React$1.FC<IconProps>;

declare const HandHeart: React$1.FC<IconProps>;

declare const HandPalm: React$1.FC<IconProps>;

declare const HandPointing: React$1.FC<IconProps>;

declare const HandsClapping: React$1.FC<IconProps>;

declare const Handshake: React$1.FC<IconProps>;

declare const HandSoap: React$1.FC<IconProps>;

declare const HandsPraying: React$1.FC<IconProps>;

declare const HandSwipeLeft: React$1.FC<IconProps>;

declare const HandSwipeRight: React$1.FC<IconProps>;

declare const HandTap: React$1.FC<IconProps>;

declare const HandWaving: React$1.FC<IconProps>;

declare const HardDrive: React$1.FC<IconProps>;

declare const HardDrives: React$1.FC<IconProps>;

declare const Hash: React$1.FC<IconProps>;

declare const HashStraight: React$1.FC<IconProps>;

declare const Headlights: React$1.FC<IconProps>;

declare const Headphones: React$1.FC<IconProps>;

declare const Headset: React$1.FC<IconProps>;

declare const Heart: React$1.FC<IconProps>;

declare const Heartbeat: React$1.FC<IconProps>;

declare const HeartBreak: React$1.FC<IconProps>;

declare const HeartHalf: React$1.FC<IconProps>;

declare const HeartStraight: React$1.FC<IconProps>;

declare const HeartStraightBreak: React$1.FC<IconProps>;

declare const Hexagon: React$1.FC<IconProps>;

declare const HighHeel: React$1.FC<IconProps>;

declare const HighlighterCircle: React$1.FC<IconProps>;

declare const Hoodie: React$1.FC<IconProps>;

declare const Horse: React$1.FC<IconProps>;

declare const Hourglass: React$1.FC<IconProps>;

declare const HourglassHigh: React$1.FC<IconProps>;

declare const HourglassLow: React$1.FC<IconProps>;

declare const HourglassMedium: React$1.FC<IconProps>;

declare const HourglassSimple: React$1.FC<IconProps>;

declare const HourglassSimpleHigh: React$1.FC<IconProps>;

declare const HourglassSimpleLow: React$1.FC<IconProps>;

declare const HourglassSimpleMedium: React$1.FC<IconProps>;

declare const House: React$1.FC<IconProps>;

declare const HouseLine: React$1.FC<IconProps>;

declare const HouseSimple: React$1.FC<IconProps>;

declare const IceCream: React$1.FC<IconProps>;

declare const IdentificationBadge: React$1.FC<IconProps>;

declare const IdentificationCard: React$1.FC<IconProps>;

declare const Image: React$1.FC<IconProps>;

declare const Images: React$1.FC<IconProps>;

declare const ImageSquare: React$1.FC<IconProps>;

declare const ImagesSquare: React$1.FC<IconProps>;

declare const Infinity: React$1.FC<IconProps>;

declare const Info: React$1.FC<IconProps>;

declare const InstagramLogo: React$1.FC<IconProps>;

declare const Intersect: React$1.FC<IconProps>;

declare const IntersectSquare: React$1.FC<IconProps>;

declare const IntersectThree: React$1.FC<IconProps>;

declare const Jeep: React$1.FC<IconProps>;

declare const Kanban: React$1.FC<IconProps>;

declare const Key: React$1.FC<IconProps>;

declare const Keyboard: React$1.FC<IconProps>;

declare const Keyhole: React$1.FC<IconProps>;

declare const KeyReturn: React$1.FC<IconProps>;

declare const Knife: React$1.FC<IconProps>;

declare const Ladder: React$1.FC<IconProps>;

declare const LadderSimple: React$1.FC<IconProps>;

declare const Lamp: React$1.FC<IconProps>;

declare const Laptop: React$1.FC<IconProps>;

declare const Layout: React$1.FC<IconProps>;

declare const Leaf: React$1.FC<IconProps>;

declare const Lifebuoy: React$1.FC<IconProps>;

declare const Lightbulb: React$1.FC<IconProps>;

declare const LightbulbFilament: React$1.FC<IconProps>;

declare const Lighthouse: React$1.FC<IconProps>;

declare const Lightning: React$1.FC<IconProps>;

declare const LightningA: React$1.FC<IconProps>;

declare const LightningSlash: React$1.FC<IconProps>;

declare const LineSegment: React$1.FC<IconProps>;

declare const LineSegments: React$1.FC<IconProps>;

declare const Link: React$1.FC<IconProps>;

declare const LinkBreak: React$1.FC<IconProps>;

declare const LinkedinLogo: React$1.FC<IconProps>;

declare const LinkSimple: React$1.FC<IconProps>;

declare const LinkSimpleBreak: React$1.FC<IconProps>;

declare const LinkSimpleHorizontal: React$1.FC<IconProps>;

declare const LinkSimpleHorizontalBreak: React$1.FC<IconProps>;

declare const LinuxLogo: React$1.FC<IconProps>;

declare const List: React$1.FC<IconProps>;

declare const ListBullets: React$1.FC<IconProps>;

declare const ListChecks: React$1.FC<IconProps>;

declare const ListDashes: React$1.FC<IconProps>;

declare const ListMagnifyingGlass: React$1.FC<IconProps>;

declare const ListNumbers: React$1.FC<IconProps>;

declare const ListPlus: React$1.FC<IconProps>;

declare const Lock: React$1.FC<IconProps>;

declare const Lockers: React$1.FC<IconProps>;

declare const LockKey: React$1.FC<IconProps>;

declare const LockKeyOpen: React$1.FC<IconProps>;

declare const LockLaminated: React$1.FC<IconProps>;

declare const LockLaminatedOpen: React$1.FC<IconProps>;

declare const LockOpen: React$1.FC<IconProps>;

declare const LockSimple: React$1.FC<IconProps>;

declare const LockSimpleOpen: React$1.FC<IconProps>;

declare const MagicWand: React$1.FC<IconProps>;

declare const Magnet: React$1.FC<IconProps>;

declare const MagnetStraight: React$1.FC<IconProps>;

declare const MagnifyingGlass: React$1.FC<IconProps>;

declare const MagnifyingGlassMinus: React$1.FC<IconProps>;

declare const MagnifyingGlassPlus: React$1.FC<IconProps>;

declare const MapPin: React$1.FC<IconProps>;

declare const MapPinLine: React$1.FC<IconProps>;

declare const MapTrifold: React$1.FC<IconProps>;

declare const MarkerCircle: React$1.FC<IconProps>;

declare const Martini: React$1.FC<IconProps>;

declare const MaskHappy: React$1.FC<IconProps>;

declare const MaskSad: React$1.FC<IconProps>;

declare const MathOperations: React$1.FC<IconProps>;

declare const Medal: React$1.FC<IconProps>;

declare const MedalMilitary: React$1.FC<IconProps>;

declare const MediumLogo: React$1.FC<IconProps>;

declare const Megaphone: React$1.FC<IconProps>;

declare const MegaphoneSimple: React$1.FC<IconProps>;

declare const MessengerLogo: React$1.FC<IconProps>;

declare const MetaLogo: React$1.FC<IconProps>;

declare const Metronome: React$1.FC<IconProps>;

declare const Microphone: React$1.FC<IconProps>;

declare const MicrophoneSlash: React$1.FC<IconProps>;

declare const MicrophoneStage: React$1.FC<IconProps>;

declare const MicrosoftExcelLogo: React$1.FC<IconProps>;

declare const MicrosoftOutlookLogo: React$1.FC<IconProps>;

declare const MicrosoftPowerpointLogo: React$1.FC<IconProps>;

declare const MicrosoftTeamsLogo: React$1.FC<IconProps>;

declare const MicrosoftWordLogo: React$1.FC<IconProps>;

declare const Minus: React$1.FC<IconProps>;

declare const MinusCircle: React$1.FC<IconProps>;

declare const MinusSquare: React$1.FC<IconProps>;

declare const Money: React$1.FC<IconProps>;

declare const Monitor: React$1.FC<IconProps>;

declare const MonitorPlay: React$1.FC<IconProps>;

declare const Moon: React$1.FC<IconProps>;

declare const MoonStars: React$1.FC<IconProps>;

declare const Moped: React$1.FC<IconProps>;

declare const MopedFront: React$1.FC<IconProps>;

declare const Mosque: React$1.FC<IconProps>;

declare const Motorcycle: React$1.FC<IconProps>;

declare const Mountains: React$1.FC<IconProps>;

declare const Mouse: React$1.FC<IconProps>;

declare const MouseSimple: React$1.FC<IconProps>;

declare const MusicNote: React$1.FC<IconProps>;

declare const MusicNotes: React$1.FC<IconProps>;

declare const MusicNoteSimple: React$1.FC<IconProps>;

declare const MusicNotesPlus: React$1.FC<IconProps>;

declare const MusicNotesSimple: React$1.FC<IconProps>;

declare const NavigationArrow: React$1.FC<IconProps>;

declare const Needle: React$1.FC<IconProps>;

declare const Newspaper: React$1.FC<IconProps>;

declare const NewspaperClipping: React$1.FC<IconProps>;

declare const Notches: React$1.FC<IconProps>;

declare const Note: React$1.FC<IconProps>;

declare const NoteBlank: React$1.FC<IconProps>;

declare const Notebook: React$1.FC<IconProps>;

declare const Notepad$1: React$1.FC<IconProps>;

declare const NotePencil: React$1.FC<IconProps>;

declare const Notification: React$1.FC<IconProps>;

declare const NotionLogo: React$1.FC<IconProps>;

declare const NumberCircleEight: React$1.FC<IconProps>;

declare const NumberCircleFive: React$1.FC<IconProps>;

declare const NumberCircleFour: React$1.FC<IconProps>;

declare const NumberCircleNine: React$1.FC<IconProps>;

declare const NumberCircleOne: React$1.FC<IconProps>;

declare const NumberCircleSeven: React$1.FC<IconProps>;

declare const NumberCircleSix: React$1.FC<IconProps>;

declare const NumberCircleThree: React$1.FC<IconProps>;

declare const NumberCircleTwo: React$1.FC<IconProps>;

declare const NumberCircleZero: React$1.FC<IconProps>;

declare const NumberEight: React$1.FC<IconProps>;

declare const NumberFive: React$1.FC<IconProps>;

declare const NumberFour: React$1.FC<IconProps>;

declare const NumberNine: React$1.FC<IconProps>;

declare const NumberOne: React$1.FC<IconProps>;

declare const NumberSeven: React$1.FC<IconProps>;

declare const NumberSix: React$1.FC<IconProps>;

declare const NumberSquareEight: React$1.FC<IconProps>;

declare const NumberSquareFive: React$1.FC<IconProps>;

declare const NumberSquareFour: React$1.FC<IconProps>;

declare const NumberSquareNine: React$1.FC<IconProps>;

declare const NumberSquareOne: React$1.FC<IconProps>;

declare const NumberSquareSeven: React$1.FC<IconProps>;

declare const NumberSquareSix: React$1.FC<IconProps>;

declare const NumberSquareThree: React$1.FC<IconProps>;

declare const NumberSquareTwo: React$1.FC<IconProps>;

declare const NumberSquareZero: React$1.FC<IconProps>;

declare const NumberThree: React$1.FC<IconProps>;

declare const NumberTwo: React$1.FC<IconProps>;

declare const NumberZero: React$1.FC<IconProps>;

declare const Nut: React$1.FC<IconProps>;

declare const NyTimesLogo: React$1.FC<IconProps>;

declare const Octagon: React$1.FC<IconProps>;

declare const OfficeChair: React$1.FC<IconProps>;

declare const Option: React$1.FC<IconProps>;

declare const OrangeSlice: React$1.FC<IconProps>;

declare const Package: React$1.FC<IconProps>;

declare const PaintBrush: React$1.FC<IconProps>;

declare const PaintBrushBroad: React$1.FC<IconProps>;

declare const PaintBrushHousehold: React$1.FC<IconProps>;

declare const PaintBucket: React$1.FC<IconProps>;

declare const PaintRoller: React$1.FC<IconProps>;

declare const Palette: React$1.FC<IconProps>;

declare const Pants: React$1.FC<IconProps>;

declare const Paperclip: React$1.FC<IconProps>;

declare const PaperclipHorizontal: React$1.FC<IconProps>;

declare const PaperPlane: React$1.FC<IconProps>;

declare const PaperPlaneRight: React$1.FC<IconProps>;

declare const PaperPlaneTilt: React$1.FC<IconProps>;

declare const Parachute: React$1.FC<IconProps>;

declare const Paragraph: React$1.FC<IconProps>;

declare const Parallelogram: React$1.FC<IconProps>;

declare const Park: React$1.FC<IconProps>;

declare const Password: React$1.FC<IconProps>;

declare const Path: React$1.FC<IconProps>;

declare const PatreonLogo: React$1.FC<IconProps>;

declare const Pause: React$1.FC<IconProps>;

declare const PauseCircle: React$1.FC<IconProps>;

declare const PawPrint: React$1.FC<IconProps>;

declare const PaypalLogo: React$1.FC<IconProps>;

declare const Peace: React$1.FC<IconProps>;

declare const Pen: React$1.FC<IconProps>;

declare const Pencil: React$1.FC<IconProps>;

declare const PencilCircle: React$1.FC<IconProps>;

declare const PencilLine: React$1.FC<IconProps>;

declare const PencilSimple: React$1.FC<IconProps>;

declare const PencilSimpleLine: React$1.FC<IconProps>;

declare const PencilSimpleSlash: React$1.FC<IconProps>;

declare const PencilSlash: React$1.FC<IconProps>;

declare const PenNib: React$1.FC<IconProps>;

declare const PenNibStraight: React$1.FC<IconProps>;

declare const Pentagram: React$1.FC<IconProps>;

declare const Pepper: React$1.FC<IconProps>;

declare const Percent: React$1.FC<IconProps>;

declare const Person: React$1.FC<IconProps>;

declare const PersonArmsSpread: React$1.FC<IconProps>;

declare const PersonSimple: React$1.FC<IconProps>;

declare const PersonSimpleBike: React$1.FC<IconProps>;

declare const PersonSimpleRun: React$1.FC<IconProps>;

declare const PersonSimpleThrow: React$1.FC<IconProps>;

declare const PersonSimpleWalk: React$1.FC<IconProps>;

declare const Perspective: React$1.FC<IconProps>;

declare const Phone: React$1.FC<IconProps>;

declare const PhoneCall: React$1.FC<IconProps>;

declare const PhoneDisconnect: React$1.FC<IconProps>;

declare const PhoneIncoming: React$1.FC<IconProps>;

declare const PhoneOutgoing: React$1.FC<IconProps>;

declare const PhonePlus: React$1.FC<IconProps>;

declare const PhoneSlash: React$1.FC<IconProps>;

declare const PhoneX: React$1.FC<IconProps>;

declare const PhosphorLogo: React$1.FC<IconProps>;

declare const Pi: React$1.FC<IconProps>;

declare const PianoKeys: React$1.FC<IconProps>;

declare const PictureInPicture: React$1.FC<IconProps>;

declare const PiggyBank: React$1.FC<IconProps>;

declare const Pill: React$1.FC<IconProps>;

declare const PinterestLogo: React$1.FC<IconProps>;

declare const Pinwheel: React$1.FC<IconProps>;

declare const Pizza: React$1.FC<IconProps>;

declare const Placeholder: React$1.FC<IconProps>;

declare const Planet: React$1.FC<IconProps>;

declare const Plant: React$1.FC<IconProps>;

declare const Play: React$1.FC<IconProps>;

declare const PlayCircle: React$1.FC<IconProps>;

declare const Playlist: React$1.FC<IconProps>;

declare const PlayPause: React$1.FC<IconProps>;

declare const Plug: React$1.FC<IconProps>;

declare const PlugCharging: React$1.FC<IconProps>;

declare const Plugs: React$1.FC<IconProps>;

declare const PlugsConnected: React$1.FC<IconProps>;

declare const Plus: React$1.FC<IconProps>;

declare const PlusCircle: React$1.FC<IconProps>;

declare const PlusMinus: React$1.FC<IconProps>;

declare const PlusSquare: React$1.FC<IconProps>;

declare const PokerChip: React$1.FC<IconProps>;

declare const PoliceCar: React$1.FC<IconProps>;

declare const Polygon: React$1.FC<IconProps>;

declare const Popcorn: React$1.FC<IconProps>;

declare const PottedPlant: React$1.FC<IconProps>;

declare const Power: React$1.FC<IconProps>;

declare const Prescription: React$1.FC<IconProps>;

declare const Presentation: React$1.FC<IconProps>;

declare const PresentationChart: React$1.FC<IconProps>;

declare const Printer: React$1.FC<IconProps>;

declare const Prohibit: React$1.FC<IconProps>;

declare const ProhibitInset: React$1.FC<IconProps>;

declare const ProjectorScreen: React$1.FC<IconProps>;

declare const ProjectorScreenChart: React$1.FC<IconProps>;

declare const Pulse: React$1.FC<IconProps>;

declare const PushPin: React$1.FC<IconProps>;

declare const PushPinSimple: React$1.FC<IconProps>;

declare const PushPinSimpleSlash: React$1.FC<IconProps>;

declare const PushPinSlash: React$1.FC<IconProps>;

declare const PuzzlePiece: React$1.FC<IconProps>;

declare const QrCode: React$1.FC<IconProps>;

declare const Question: React$1.FC<IconProps>;

declare const Queue: React$1.FC<IconProps>;

declare const Quotes: React$1.FC<IconProps>;

declare const Radical: React$1.FC<IconProps>;

declare const Radio: React$1.FC<IconProps>;

declare const Radioactive: React$1.FC<IconProps>;

declare const RadioButton: React$1.FC<IconProps>;

declare const Rainbow: React$1.FC<IconProps>;

declare const RainbowCloud: React$1.FC<IconProps>;

declare const ReadCvLogo: React$1.FC<IconProps>;

declare const Receipt: React$1.FC<IconProps>;

declare const ReceiptX: React$1.FC<IconProps>;

declare const Record$1: React$1.FC<IconProps>;

declare const Rectangle: React$1.FC<IconProps>;

declare const Recycle: React$1.FC<IconProps>;

declare const RedditLogo: React$1.FC<IconProps>;

declare const Repeat: React$1.FC<IconProps>;

declare const RepeatOnce: React$1.FC<IconProps>;

declare const Rewind: React$1.FC<IconProps>;

declare const RewindCircle: React$1.FC<IconProps>;

declare const RoadHorizon: React$1.FC<IconProps>;

declare const Robot: React$1.FC<IconProps>;

declare const Rocket: React$1.FC<IconProps>;

declare const RocketLaunch: React$1.FC<IconProps>;

declare const Rows: React$1.FC<IconProps>;

declare const Rss: React$1.FC<IconProps>;

declare const RssSimple: React$1.FC<IconProps>;

declare const Rug: React$1.FC<IconProps>;

declare const Ruler: React$1.FC<IconProps>;

declare const Scales: React$1.FC<IconProps>;

declare const Scan: React$1.FC<IconProps>;

declare const Scissors: React$1.FC<IconProps>;

declare const Scooter: React$1.FC<IconProps>;

declare const Screencast: React$1.FC<IconProps>;

declare const ScribbleLoop: React$1.FC<IconProps>;

declare const Scroll: React$1.FC<IconProps>;

declare const Seal: React$1.FC<IconProps>;

declare const SealCheck: React$1.FC<IconProps>;

declare const SealQuestion: React$1.FC<IconProps>;

declare const SealWarning: React$1.FC<IconProps>;

declare const Selection: React$1.FC<IconProps>;

declare const SelectionAll: React$1.FC<IconProps>;

declare const SelectionBackground: React$1.FC<IconProps>;

declare const SelectionForeground: React$1.FC<IconProps>;

declare const SelectionInverse: React$1.FC<IconProps>;

declare const SelectionPlus: React$1.FC<IconProps>;

declare const SelectionSlash: React$1.FC<IconProps>;

declare const Shapes: React$1.FC<IconProps>;

declare const Share: React$1.FC<IconProps>;

declare const ShareFat: React$1.FC<IconProps>;

declare const ShareNetwork: React$1.FC<IconProps>;

declare const Shield: React$1.FC<IconProps>;

declare const ShieldCheck: React$1.FC<IconProps>;

declare const ShieldCheckered: React$1.FC<IconProps>;

declare const ShieldChevron: React$1.FC<IconProps>;

declare const ShieldPlus: React$1.FC<IconProps>;

declare const ShieldSlash: React$1.FC<IconProps>;

declare const ShieldStar: React$1.FC<IconProps>;

declare const ShieldWarning: React$1.FC<IconProps>;

declare const ShirtFolded: React$1.FC<IconProps>;

declare const ShootingStar: React$1.FC<IconProps>;

declare const ShoppingBag: React$1.FC<IconProps>;

declare const ShoppingBagOpen: React$1.FC<IconProps>;

declare const ShoppingCart: React$1.FC<IconProps>;

declare const ShoppingCartSimple: React$1.FC<IconProps>;

declare const Shower: React$1.FC<IconProps>;

declare const Shrimp: React$1.FC<IconProps>;

declare const Shuffle: React$1.FC<IconProps>;

declare const ShuffleAngular: React$1.FC<IconProps>;

declare const ShuffleSimple: React$1.FC<IconProps>;

declare const Sidebar: React$1.FC<IconProps>;

declare const SidebarSimple: React$1.FC<IconProps>;

declare const Sigma: React$1.FC<IconProps>;

declare const Signature: React$1.FC<IconProps>;

declare const SignIn: React$1.FC<IconProps>;

declare const SignOut: React$1.FC<IconProps>;

declare const Signpost: React$1.FC<IconProps>;

declare const SimCard: React$1.FC<IconProps>;

declare const Siren: React$1.FC<IconProps>;

declare const SketchLogo: React$1.FC<IconProps>;

declare const SkipBack: React$1.FC<IconProps>;

declare const SkipBackCircle: React$1.FC<IconProps>;

declare const SkipForward: React$1.FC<IconProps>;

declare const SkipForwardCircle: React$1.FC<IconProps>;

declare const Skull: React$1.FC<IconProps>;

declare const SlackLogo: React$1.FC<IconProps>;

declare const Sliders: React$1.FC<IconProps>;

declare const SlidersHorizontal: React$1.FC<IconProps>;

declare const Slideshow: React$1.FC<IconProps>;

declare const Smiley: React$1.FC<IconProps>;

declare const SmileyAngry: React$1.FC<IconProps>;

declare const SmileyBlank: React$1.FC<IconProps>;

declare const SmileyMeh: React$1.FC<IconProps>;

declare const SmileyNervous: React$1.FC<IconProps>;

declare const SmileySad: React$1.FC<IconProps>;

declare const SmileySticker: React$1.FC<IconProps>;

declare const SmileyWink: React$1.FC<IconProps>;

declare const SmileyXEyes: React$1.FC<IconProps>;

declare const SnapchatLogo: React$1.FC<IconProps>;

declare const Sneaker: React$1.FC<IconProps>;

declare const SneakerMove: React$1.FC<IconProps>;

declare const Snowflake: React$1.FC<IconProps>;

declare const SoccerBall: React$1.FC<IconProps>;

declare const SortAscending: React$1.FC<IconProps>;

declare const SortDescending: React$1.FC<IconProps>;

declare const SoundcloudLogo: React$1.FC<IconProps>;

declare const Spade: React$1.FC<IconProps>;

declare const Sparkle: React$1.FC<IconProps>;

declare const SpeakerHifi: React$1.FC<IconProps>;

declare const SpeakerHigh: React$1.FC<IconProps>;

declare const SpeakerLow: React$1.FC<IconProps>;

declare const SpeakerNone: React$1.FC<IconProps>;

declare const SpeakerSimpleHigh: React$1.FC<IconProps>;

declare const SpeakerSimpleLow: React$1.FC<IconProps>;

declare const SpeakerSimpleNone: React$1.FC<IconProps>;

declare const SpeakerSimpleSlash: React$1.FC<IconProps>;

declare const SpeakerSimpleX: React$1.FC<IconProps>;

declare const SpeakerSlash: React$1.FC<IconProps>;

declare const SpeakerX: React$1.FC<IconProps>;

declare const Spinner: React$1.FC<IconProps>;

declare const SpinnerGap: React$1.FC<IconProps>;

declare const Spiral: React$1.FC<IconProps>;

declare const SplitHorizontal: React$1.FC<IconProps>;

declare const SplitVertical: React$1.FC<IconProps>;

declare const SpotifyLogo: React$1.FC<IconProps>;

declare const Square: React$1.FC<IconProps>;

declare const SquareHalf: React$1.FC<IconProps>;

declare const SquareHalfBottom: React$1.FC<IconProps>;

declare const SquareLogo: React$1.FC<IconProps>;

declare const SquaresFour: React$1.FC<IconProps>;

declare const SquareSplitHorizontal: React$1.FC<IconProps>;

declare const SquareSplitVertical: React$1.FC<IconProps>;

declare const Stack: React$1.FC<IconProps>;

declare const StackOverflowLogo: React$1.FC<IconProps>;

declare const StackSimple: React$1.FC<IconProps>;

declare const Stairs: React$1.FC<IconProps>;

declare const Stamp: React$1.FC<IconProps>;

declare const Star: React$1.FC<IconProps>;

declare const StarAndCrescent: React$1.FC<IconProps>;

declare const StarHalf: React$1.FC<IconProps>;

declare const StarOfDavid: React$1.FC<IconProps>;

declare const SteeringWheel: React$1.FC<IconProps>;

declare const Steps: React$1.FC<IconProps>;

declare const Stethoscope: React$1.FC<IconProps>;

declare const Sticker: React$1.FC<IconProps>;

declare const Stool: React$1.FC<IconProps>;

declare const Stop: React$1.FC<IconProps>;

declare const StopCircle: React$1.FC<IconProps>;

declare const Storefront: React$1.FC<IconProps>;

declare const Strategy: React$1.FC<IconProps>;

declare const StripeLogo: React$1.FC<IconProps>;

declare const Student: React$1.FC<IconProps>;

declare const Subtitles: React$1.FC<IconProps>;

declare const Subtract: React$1.FC<IconProps>;

declare const SubtractSquare: React$1.FC<IconProps>;

declare const Suitcase: React$1.FC<IconProps>;

declare const SuitcaseRolling: React$1.FC<IconProps>;

declare const SuitcaseSimple: React$1.FC<IconProps>;

declare const Sun: React$1.FC<IconProps>;

declare const SunDim: React$1.FC<IconProps>;

declare const Sunglasses: React$1.FC<IconProps>;

declare const SunHorizon: React$1.FC<IconProps>;

declare const Swap: React$1.FC<IconProps>;

declare const Swatches: React$1.FC<IconProps>;

declare const SwimmingPool: React$1.FC<IconProps>;

declare const Sword: React$1.FC<IconProps>;

declare const Synagogue: React$1.FC<IconProps>;

declare const Syringe: React$1.FC<IconProps>;

declare const Table: React$1.FC<IconProps>;

declare const Tabs: React$1.FC<IconProps>;

declare const Tag: React$1.FC<IconProps>;

declare const TagChevron: React$1.FC<IconProps>;

declare const TagSimple: React$1.FC<IconProps>;

declare const Target: React$1.FC<IconProps>;

declare const Taxi: React$1.FC<IconProps>;

declare const TelegramLogo: React$1.FC<IconProps>;

declare const Television: React$1.FC<IconProps>;

declare const TelevisionSimple: React$1.FC<IconProps>;

declare const TennisBall: React$1.FC<IconProps>;

declare const Tent: React$1.FC<IconProps>;

declare const Terminal: React$1.FC<IconProps>;

declare const TerminalWindow: React$1.FC<IconProps>;

declare const TestTube: React$1.FC<IconProps>;

declare const TextAa: React$1.FC<IconProps>;

declare const TextAlignCenter: React$1.FC<IconProps>;

declare const TextAlignJustify: React$1.FC<IconProps>;

declare const TextAlignLeft: React$1.FC<IconProps>;

declare const TextAlignRight: React$1.FC<IconProps>;

declare const TextAUnderline: React$1.FC<IconProps>;

declare const TextB: React$1.FC<IconProps>;

declare const Textbox: React$1.FC<IconProps>;

declare const TextColumns: React$1.FC<IconProps>;

declare const TextH: React$1.FC<IconProps>;

declare const TextHFive: React$1.FC<IconProps>;

declare const TextHFour: React$1.FC<IconProps>;

declare const TextHOne: React$1.FC<IconProps>;

declare const TextHSix: React$1.FC<IconProps>;

declare const TextHThree: React$1.FC<IconProps>;

declare const TextHTwo: React$1.FC<IconProps>;

declare const TextIndent: React$1.FC<IconProps>;

declare const TextItalic: React$1.FC<IconProps>;

declare const TextOutdent: React$1.FC<IconProps>;

declare const TextStrikethrough: React$1.FC<IconProps>;

declare const TextT: React$1.FC<IconProps>;

declare const TextUnderline: React$1.FC<IconProps>;

declare const Thermometer: React$1.FC<IconProps>;

declare const ThermometerCold: React$1.FC<IconProps>;

declare const ThermometerHot: React$1.FC<IconProps>;

declare const ThermometerSimple: React$1.FC<IconProps>;

declare const ThumbsDown: React$1.FC<IconProps>;

declare const ThumbsUp: React$1.FC<IconProps>;

declare const Ticket: React$1.FC<IconProps>;

declare const TidalLogo: React$1.FC<IconProps>;

declare const TiktokLogo: React$1.FC<IconProps>;

declare const Timer: React$1.FC<IconProps>;

declare const Tipi: React$1.FC<IconProps>;

declare const ToggleLeft: React$1.FC<IconProps>;

declare const ToggleRight: React$1.FC<IconProps>;

declare const Toilet: React$1.FC<IconProps>;

declare const ToiletPaper: React$1.FC<IconProps>;

declare const Toolbox: React$1.FC<IconProps>;

declare const Tooth: React$1.FC<IconProps>;

declare const Tote: React$1.FC<IconProps>;

declare const ToteSimple: React$1.FC<IconProps>;

declare const Trademark: React$1.FC<IconProps>;

declare const TrademarkRegistered: React$1.FC<IconProps>;

declare const TrafficCone: React$1.FC<IconProps>;

declare const TrafficSign: React$1.FC<IconProps>;

declare const TrafficSignal: React$1.FC<IconProps>;

declare const Train: React$1.FC<IconProps>;

declare const TrainRegional: React$1.FC<IconProps>;

declare const TrainSimple: React$1.FC<IconProps>;

declare const Tram: React$1.FC<IconProps>;

declare const Translate: React$1.FC<IconProps>;

declare const Trash: React$1.FC<IconProps>;

declare const TrashSimple: React$1.FC<IconProps>;

declare const Tray: React$1.FC<IconProps>;

declare const Tree: React$1.FC<IconProps>;

declare const TreeEvergreen: React$1.FC<IconProps>;

declare const TreePalm: React$1.FC<IconProps>;

declare const TreeStructure: React$1.FC<IconProps>;

declare const TrendDown: React$1.FC<IconProps>;

declare const TrendUp: React$1.FC<IconProps>;

declare const Triangle: React$1.FC<IconProps>;

declare const Trophy: React$1.FC<IconProps>;

declare const Truck: React$1.FC<IconProps>;

declare const TShirt: React$1.FC<IconProps>;

declare const TwitchLogo: React$1.FC<IconProps>;

declare const TwitterLogo: React$1.FC<IconProps>;

declare const Umbrella: React$1.FC<IconProps>;

declare const UmbrellaSimple: React$1.FC<IconProps>;

declare const Unite: React$1.FC<IconProps>;

declare const UniteSquare: React$1.FC<IconProps>;

declare const Upload: React$1.FC<IconProps>;

declare const UploadSimple: React$1.FC<IconProps>;

declare const Usb: React$1.FC<IconProps>;

declare const User: React$1.FC<IconProps>;

declare const UserCircle: React$1.FC<IconProps>;

declare const UserCircleGear: React$1.FC<IconProps>;

declare const UserCircleMinus: React$1.FC<IconProps>;

declare const UserCirclePlus: React$1.FC<IconProps>;

declare const UserFocus: React$1.FC<IconProps>;

declare const UserGear: React$1.FC<IconProps>;

declare const UserList: React$1.FC<IconProps>;

declare const UserMinus: React$1.FC<IconProps>;

declare const UserPlus: React$1.FC<IconProps>;

declare const UserRectangle: React$1.FC<IconProps>;

declare const Users: React$1.FC<IconProps>;

declare const UsersFour: React$1.FC<IconProps>;

declare const UserSquare: React$1.FC<IconProps>;

declare const UsersThree: React$1.FC<IconProps>;

declare const UserSwitch: React$1.FC<IconProps>;

declare const Van: React$1.FC<IconProps>;

declare const Vault: React$1.FC<IconProps>;

declare const Vibrate: React$1.FC<IconProps>;

declare const Video: React$1.FC<IconProps>;

declare const VideoCamera: React$1.FC<IconProps>;

declare const VideoCameraSlash: React$1.FC<IconProps>;

declare const Vignette: React$1.FC<IconProps>;

declare const VinylRecord: React$1.FC<IconProps>;

declare const VirtualReality: React$1.FC<IconProps>;

declare const Virus: React$1.FC<IconProps>;

declare const Voicemail: React$1.FC<IconProps>;

declare const Volleyball: React$1.FC<IconProps>;

declare const Wall: React$1.FC<IconProps>;

declare const Wallet: React$1.FC<IconProps>;

declare const Warehouse: React$1.FC<IconProps>;

declare const Warning: React$1.FC<IconProps>;

declare const WarningCircle: React$1.FC<IconProps>;

declare const WarningDiamond: React$1.FC<IconProps>;

declare const WarningOctagon: React$1.FC<IconProps>;

declare const Watch: React$1.FC<IconProps>;

declare const Waveform: React$1.FC<IconProps>;

declare const Waves: React$1.FC<IconProps>;

declare const WaveSawtooth: React$1.FC<IconProps>;

declare const WaveSine: React$1.FC<IconProps>;

declare const WaveSquare: React$1.FC<IconProps>;

declare const WaveTriangle: React$1.FC<IconProps>;

declare const Webcam: React$1.FC<IconProps>;

declare const WebcamSlash: React$1.FC<IconProps>;

declare const WebhooksLogo: React$1.FC<IconProps>;

declare const WechatLogo: React$1.FC<IconProps>;

declare const WhatsappLogo: React$1.FC<IconProps>;

declare const Wheelchair: React$1.FC<IconProps>;

declare const WheelchairMotion: React$1.FC<IconProps>;

declare const WifiHigh: React$1.FC<IconProps>;

declare const WifiLow: React$1.FC<IconProps>;

declare const WifiMedium: React$1.FC<IconProps>;

declare const WifiNone: React$1.FC<IconProps>;

declare const WifiSlash: React$1.FC<IconProps>;

declare const WifiX: React$1.FC<IconProps>;

declare const Wind: React$1.FC<IconProps>;

declare const WindowsLogo: React$1.FC<IconProps>;

declare const Wine: React$1.FC<IconProps>;

declare const Wrench: React$1.FC<IconProps>;

declare const X: React$1.FC<IconProps>;

declare const XSquare: React$1.FC<IconProps>;

declare const YinYang: React$1.FC<IconProps>;

declare const YoutubeLogo: React$1.FC<IconProps>;

declare const DefaultIcon: React$1.FC<IconProps>;

declare const DocxIcon: React$1.FC<IconProps>;

declare const FormIcon: React$1.FC<IconProps>;

declare const OnenoteIcon: React$1.FC<IconProps>;

declare const PptIcon: React$1.FC<IconProps>;

declare const RoundAlt: React$1.FC<IconProps>;

declare const SearchIcon: React$1.FC<IconProps>;

declare const TxtIcon: React$1.FC<IconProps>;

declare const XlsxIcon: React$1.FC<IconProps>;

declare const index$2_Add: typeof Add;
declare const index$2_Ai: typeof Ai;
declare const index$2_ArrowFall: typeof ArrowFall;
declare const index$2_ArrowLineUpDown: typeof ArrowLineUpDown;
declare const index$2_ArrowRise: typeof ArrowRise;
declare const index$2_ArrowsDown: typeof ArrowsDown;
declare const index$2_ArrowsUp: typeof ArrowsUp;
declare const index$2_Badge: typeof Badge;
declare const index$2_ChatDashed: typeof ChatDashed;
declare const index$2_CheckboxFalse: typeof CheckboxFalse;
declare const index$2_CheckboxMultiple: typeof CheckboxMultiple;
declare const index$2_CheckboxTrue: typeof CheckboxTrue;
declare const index$2_Chip: typeof Chip;
declare const index$2_Close: typeof Close;
declare const index$2_DotCircle: typeof DotCircle;
declare const index$2_DotSquare: typeof DotSquare;
declare const index$2_Explain: typeof Explain;
declare const index$2_FourLeafClover: typeof FourLeafClover;
declare const index$2_FourPointedStar: typeof FourPointedStar;
declare const index$2_Goto: typeof Goto;
declare const index$2_Help: typeof Help;
declare const index$2_HorizontalScreen: typeof HorizontalScreen;
declare const index$2_IconSet: typeof IconSet;
declare const index$2_IconSize16: typeof IconSize16;
declare const index$2_IconSize20: typeof IconSize20;
declare const index$2_IconSize24: typeof IconSize24;
declare const index$2_IconSize28: typeof IconSize28;
declare const index$2_IconSize32: typeof IconSize32;
declare const index$2_IconSize40: typeof IconSize40;
declare const index$2_IconSize48: typeof IconSize48;
declare const index$2_IconSize80: typeof IconSize80;
declare const index$2_ImageLoading: typeof ImageLoading;
declare const index$2_Line: typeof Line;
declare const index$2_Maximize: typeof Maximize;
declare const index$2_Minimize: typeof Minimize;
declare const index$2_PayWave: typeof PayWave;
declare const index$2_RadioFalse: typeof RadioFalse;
declare const index$2_RadioTrue: typeof RadioTrue;
declare const index$2_RadioTrueAlt: typeof RadioTrueAlt;
declare const index$2_Rating1: typeof Rating1;
declare const index$2_Rating2: typeof Rating2;
declare const index$2_Rating3: typeof Rating3;
declare const index$2_Rating4: typeof Rating4;
declare const index$2_Rating5: typeof Rating5;
declare const index$2_Repost: typeof Repost;
declare const index$2_Rightbar: typeof Rightbar;
declare const index$2_RightbarMode: typeof RightbarMode;
declare const index$2_Round: typeof Round;
declare const index$2_RoundedCorner: typeof RoundedCorner;
declare const index$2_Search: typeof Search;
declare const index$2_Selected: typeof Selected;
declare const index$2_SnowIcon: typeof SnowIcon;
declare const index$2_Stars: typeof Stars;
declare const index$2_StopAlt: typeof StopAlt;
declare const index$2_StopSecondary: typeof StopSecondary;
declare const index$2_SwitchFalse: typeof SwitchFalse;
declare const index$2_SwitchPoint: typeof SwitchPoint;
declare const index$2_SwitchTrue: typeof SwitchTrue;
declare const index$2_TextA: typeof TextA;
declare const index$2_ThreeDots: typeof ThreeDots;
declare const index$2_Variables: typeof Variables;
declare const index$2_VerticalScreen: typeof VerticalScreen;
declare const index$2_Windowed: typeof Windowed;
declare namespace index$2 {
  export { index$2_Add as Add, index$2_Ai as Ai, index$2_ArrowFall as ArrowFall, ArrowLineDown$1 as ArrowLineDown, ArrowLineLeft$1 as ArrowLineLeft, ArrowLineRight$1 as ArrowLineRight, ArrowLineUp$1 as ArrowLineUp, index$2_ArrowLineUpDown as ArrowLineUpDown, index$2_ArrowRise as ArrowRise, index$2_ArrowsDown as ArrowsDown, ArrowsDownUp$1 as ArrowsDownUp, index$2_ArrowsUp as ArrowsUp, index$2_Badge as Badge, index$2_ChatDashed as ChatDashed, index$2_CheckboxFalse as CheckboxFalse, index$2_CheckboxMultiple as CheckboxMultiple, index$2_CheckboxTrue as CheckboxTrue, index$2_Chip as Chip, Clipboard$1 as Clipboard, index$2_Close as Close, Copy$1 as Copy, index$2_DotCircle as DotCircle, index$2_DotSquare as DotSquare, index$2_Explain as Explain, index$2_FourLeafClover as FourLeafClover, index$2_FourPointedStar as FourPointedStar, index$2_Goto as Goto, index$2_Help as Help, index$2_HorizontalScreen as HorizontalScreen, index$2_IconSet as IconSet, index$2_IconSize16 as IconSize16, index$2_IconSize20 as IconSize20, index$2_IconSize24 as IconSize24, index$2_IconSize28 as IconSize28, index$2_IconSize32 as IconSize32, index$2_IconSize40 as IconSize40, index$2_IconSize48 as IconSize48, index$2_IconSize80 as IconSize80, index$2_ImageLoading as ImageLoading, index$2_Line as Line, index$2_Maximize as Maximize, index$2_Minimize as Minimize, index$2_PayWave as PayWave, index$2_RadioFalse as RadioFalse, index$2_RadioTrue as RadioTrue, index$2_RadioTrueAlt as RadioTrueAlt, index$2_Rating1 as Rating1, index$2_Rating2 as Rating2, index$2_Rating3 as Rating3, index$2_Rating4 as Rating4, index$2_Rating5 as Rating5, index$2_Repost as Repost, index$2_Rightbar as Rightbar, index$2_RightbarMode as RightbarMode, index$2_Round as Round, index$2_RoundedCorner as RoundedCorner, index$2_Search as Search, index$2_Selected as Selected, index$2_SnowIcon as SnowIcon, StarFour$1 as StarFour, index$2_Stars as Stars, index$2_StopAlt as StopAlt, index$2_StopSecondary as StopSecondary, index$2_SwitchFalse as SwitchFalse, index$2_SwitchPoint as SwitchPoint, index$2_SwitchTrue as SwitchTrue, index$2_TextA as TextA, index$2_ThreeDots as ThreeDots, index$2_Variables as Variables, index$2_VerticalScreen as VerticalScreen, index$2_Windowed as Windowed, XCircle$1 as XCircle };
}

declare const ArrowLineDown: React$1.FC<IconProps>;

declare const ArrowLineLeft: React$1.FC<IconProps>;

declare const ArrowLineRight: React$1.FC<IconProps>;

declare const ArrowLineUp: React$1.FC<IconProps>;

declare const ArrowsDownUp: React$1.FC<IconProps>;

declare const Clipboard: React$1.FC<IconProps>;

declare const Copy: React$1.FC<IconProps>;

declare const StarFour: React$1.FC<IconProps>;

declare const XCircle: React$1.FC<IconProps>;

declare const index$1_AddressBook: typeof AddressBook;
declare const index$1_AirTrafficControl: typeof AirTrafficControl;
declare const index$1_Airplane: typeof Airplane;
declare const index$1_AirplaneInFlight: typeof AirplaneInFlight;
declare const index$1_AirplaneLanding: typeof AirplaneLanding;
declare const index$1_AirplaneTakeoff: typeof AirplaneTakeoff;
declare const index$1_AirplaneTilt: typeof AirplaneTilt;
declare const index$1_Airplay: typeof Airplay;
declare const index$1_Alarm: typeof Alarm;
declare const index$1_Alien: typeof Alien;
declare const index$1_AlignBottom: typeof AlignBottom;
declare const index$1_AlignBottomSimple: typeof AlignBottomSimple;
declare const index$1_AlignCenterHorizontal: typeof AlignCenterHorizontal;
declare const index$1_AlignCenterHorizontalSimple: typeof AlignCenterHorizontalSimple;
declare const index$1_AlignCenterVertical: typeof AlignCenterVertical;
declare const index$1_AlignCenterVerticalSimple: typeof AlignCenterVerticalSimple;
declare const index$1_AlignLeft: typeof AlignLeft;
declare const index$1_AlignLeftSimple: typeof AlignLeftSimple;
declare const index$1_AlignRight: typeof AlignRight;
declare const index$1_AlignRightSimple: typeof AlignRightSimple;
declare const index$1_AlignTop: typeof AlignTop;
declare const index$1_AlignTopSimple: typeof AlignTopSimple;
declare const index$1_AmazonLogo: typeof AmazonLogo;
declare const index$1_Anchor: typeof Anchor;
declare const index$1_AnchorSimple: typeof AnchorSimple;
declare const index$1_AndroidLogo: typeof AndroidLogo;
declare const index$1_AngularLogo: typeof AngularLogo;
declare const index$1_Aperture: typeof Aperture;
declare const index$1_AppStoreLogo: typeof AppStoreLogo;
declare const index$1_AppWindow: typeof AppWindow;
declare const index$1_AppleLogo: typeof AppleLogo;
declare const index$1_ApplePodcastsLogo: typeof ApplePodcastsLogo;
declare const index$1_Archive: typeof Archive;
declare const index$1_ArchiveBox: typeof ArchiveBox;
declare const index$1_ArchiveTray: typeof ArchiveTray;
declare const index$1_Armchair: typeof Armchair;
declare const index$1_ArrowArcLeft: typeof ArrowArcLeft;
declare const index$1_ArrowArcRight: typeof ArrowArcRight;
declare const index$1_ArrowBendDoubleUpLeft: typeof ArrowBendDoubleUpLeft;
declare const index$1_ArrowBendDoubleUpRight: typeof ArrowBendDoubleUpRight;
declare const index$1_ArrowBendDownLeft: typeof ArrowBendDownLeft;
declare const index$1_ArrowBendDownRight: typeof ArrowBendDownRight;
declare const index$1_ArrowBendLeftDown: typeof ArrowBendLeftDown;
declare const index$1_ArrowBendLeftUp: typeof ArrowBendLeftUp;
declare const index$1_ArrowBendRightDown: typeof ArrowBendRightDown;
declare const index$1_ArrowBendRightUp: typeof ArrowBendRightUp;
declare const index$1_ArrowBendUpLeft: typeof ArrowBendUpLeft;
declare const index$1_ArrowBendUpRight: typeof ArrowBendUpRight;
declare const index$1_ArrowCircleDown: typeof ArrowCircleDown;
declare const index$1_ArrowCircleDownLeft: typeof ArrowCircleDownLeft;
declare const index$1_ArrowCircleDownRight: typeof ArrowCircleDownRight;
declare const index$1_ArrowCircleLeft: typeof ArrowCircleLeft;
declare const index$1_ArrowCircleRight: typeof ArrowCircleRight;
declare const index$1_ArrowCircleUp: typeof ArrowCircleUp;
declare const index$1_ArrowCircleUpLeft: typeof ArrowCircleUpLeft;
declare const index$1_ArrowCircleUpRight: typeof ArrowCircleUpRight;
declare const index$1_ArrowClockwise: typeof ArrowClockwise;
declare const index$1_ArrowCounterClockwise: typeof ArrowCounterClockwise;
declare const index$1_ArrowDown: typeof ArrowDown;
declare const index$1_ArrowDownLeft: typeof ArrowDownLeft;
declare const index$1_ArrowDownRight: typeof ArrowDownRight;
declare const index$1_ArrowElbowDownLeft: typeof ArrowElbowDownLeft;
declare const index$1_ArrowElbowDownRight: typeof ArrowElbowDownRight;
declare const index$1_ArrowElbowLeft: typeof ArrowElbowLeft;
declare const index$1_ArrowElbowLeftDown: typeof ArrowElbowLeftDown;
declare const index$1_ArrowElbowLeftUp: typeof ArrowElbowLeftUp;
declare const index$1_ArrowElbowRight: typeof ArrowElbowRight;
declare const index$1_ArrowElbowRightDown: typeof ArrowElbowRightDown;
declare const index$1_ArrowElbowRightUp: typeof ArrowElbowRightUp;
declare const index$1_ArrowElbowUpLeft: typeof ArrowElbowUpLeft;
declare const index$1_ArrowElbowUpRight: typeof ArrowElbowUpRight;
declare const index$1_ArrowFatDown: typeof ArrowFatDown;
declare const index$1_ArrowFatLeft: typeof ArrowFatLeft;
declare const index$1_ArrowFatLineDown: typeof ArrowFatLineDown;
declare const index$1_ArrowFatLineLeft: typeof ArrowFatLineLeft;
declare const index$1_ArrowFatLineRight: typeof ArrowFatLineRight;
declare const index$1_ArrowFatLineUp: typeof ArrowFatLineUp;
declare const index$1_ArrowFatLinesDown: typeof ArrowFatLinesDown;
declare const index$1_ArrowFatLinesLeft: typeof ArrowFatLinesLeft;
declare const index$1_ArrowFatLinesRight: typeof ArrowFatLinesRight;
declare const index$1_ArrowFatLinesUp: typeof ArrowFatLinesUp;
declare const index$1_ArrowFatRight: typeof ArrowFatRight;
declare const index$1_ArrowFatUp: typeof ArrowFatUp;
declare const index$1_ArrowLeft: typeof ArrowLeft;
declare const index$1_ArrowLineDown: typeof ArrowLineDown;
declare const index$1_ArrowLineDownLeft: typeof ArrowLineDownLeft;
declare const index$1_ArrowLineDownRight: typeof ArrowLineDownRight;
declare const index$1_ArrowLineLeft: typeof ArrowLineLeft;
declare const index$1_ArrowLineRight: typeof ArrowLineRight;
declare const index$1_ArrowLineUp: typeof ArrowLineUp;
declare const index$1_ArrowLineUpLeft: typeof ArrowLineUpLeft;
declare const index$1_ArrowLineUpRight: typeof ArrowLineUpRight;
declare const index$1_ArrowRight: typeof ArrowRight;
declare const index$1_ArrowSquareDown: typeof ArrowSquareDown;
declare const index$1_ArrowSquareDownLeft: typeof ArrowSquareDownLeft;
declare const index$1_ArrowSquareDownRight: typeof ArrowSquareDownRight;
declare const index$1_ArrowSquareIn: typeof ArrowSquareIn;
declare const index$1_ArrowSquareLeft: typeof ArrowSquareLeft;
declare const index$1_ArrowSquareOut: typeof ArrowSquareOut;
declare const index$1_ArrowSquareRight: typeof ArrowSquareRight;
declare const index$1_ArrowSquareUp: typeof ArrowSquareUp;
declare const index$1_ArrowSquareUpLeft: typeof ArrowSquareUpLeft;
declare const index$1_ArrowSquareUpRight: typeof ArrowSquareUpRight;
declare const index$1_ArrowUDownLeft: typeof ArrowUDownLeft;
declare const index$1_ArrowUDownRight: typeof ArrowUDownRight;
declare const index$1_ArrowULeftDown: typeof ArrowULeftDown;
declare const index$1_ArrowULeftUp: typeof ArrowULeftUp;
declare const index$1_ArrowURightDown: typeof ArrowURightDown;
declare const index$1_ArrowURightUp: typeof ArrowURightUp;
declare const index$1_ArrowUUpLeft: typeof ArrowUUpLeft;
declare const index$1_ArrowUUpRight: typeof ArrowUUpRight;
declare const index$1_ArrowUp: typeof ArrowUp;
declare const index$1_ArrowUpLeft: typeof ArrowUpLeft;
declare const index$1_ArrowUpRight: typeof ArrowUpRight;
declare const index$1_ArrowsClockwise: typeof ArrowsClockwise;
declare const index$1_ArrowsCounterClockwise: typeof ArrowsCounterClockwise;
declare const index$1_ArrowsDownUp: typeof ArrowsDownUp;
declare const index$1_ArrowsHorizontal: typeof ArrowsHorizontal;
declare const index$1_ArrowsIn: typeof ArrowsIn;
declare const index$1_ArrowsInCardinal: typeof ArrowsInCardinal;
declare const index$1_ArrowsInLineHorizontal: typeof ArrowsInLineHorizontal;
declare const index$1_ArrowsInLineVertical: typeof ArrowsInLineVertical;
declare const index$1_ArrowsInSimple: typeof ArrowsInSimple;
declare const index$1_ArrowsLeftRight: typeof ArrowsLeftRight;
declare const index$1_ArrowsMerge: typeof ArrowsMerge;
declare const index$1_ArrowsOut: typeof ArrowsOut;
declare const index$1_ArrowsOutCardinal: typeof ArrowsOutCardinal;
declare const index$1_ArrowsOutLineHorizontal: typeof ArrowsOutLineHorizontal;
declare const index$1_ArrowsOutLineVertical: typeof ArrowsOutLineVertical;
declare const index$1_ArrowsOutSimple: typeof ArrowsOutSimple;
declare const index$1_ArrowsSplit: typeof ArrowsSplit;
declare const index$1_ArrowsVertical: typeof ArrowsVertical;
declare const index$1_Article: typeof Article;
declare const index$1_ArticleMedium: typeof ArticleMedium;
declare const index$1_ArticleNyTimes: typeof ArticleNyTimes;
declare const index$1_Asterisk: typeof Asterisk;
declare const index$1_AsteriskSimple: typeof AsteriskSimple;
declare const index$1_At: typeof At;
declare const index$1_Atom: typeof Atom;
declare const index$1_Baby: typeof Baby;
declare const index$1_Backpack: typeof Backpack;
declare const index$1_Backspace: typeof Backspace;
declare const index$1_Bag: typeof Bag;
declare const index$1_BagSimple: typeof BagSimple;
declare const index$1_Balloon: typeof Balloon;
declare const index$1_Bandaids: typeof Bandaids;
declare const index$1_Bank: typeof Bank;
declare const index$1_Barbell: typeof Barbell;
declare const index$1_Barcode: typeof Barcode;
declare const index$1_Barricade: typeof Barricade;
declare const index$1_Baseball: typeof Baseball;
declare const index$1_BaseballCap: typeof BaseballCap;
declare const index$1_Basket: typeof Basket;
declare const index$1_Basketball: typeof Basketball;
declare const index$1_Bathtub: typeof Bathtub;
declare const index$1_BatteryCharging: typeof BatteryCharging;
declare const index$1_BatteryChargingVertical: typeof BatteryChargingVertical;
declare const index$1_BatteryEmpty: typeof BatteryEmpty;
declare const index$1_BatteryFull: typeof BatteryFull;
declare const index$1_BatteryHigh: typeof BatteryHigh;
declare const index$1_BatteryLow: typeof BatteryLow;
declare const index$1_BatteryMedium: typeof BatteryMedium;
declare const index$1_BatteryPlus: typeof BatteryPlus;
declare const index$1_BatteryPlusVertical: typeof BatteryPlusVertical;
declare const index$1_BatteryVerticalEmpty: typeof BatteryVerticalEmpty;
declare const index$1_BatteryVerticalFull: typeof BatteryVerticalFull;
declare const index$1_BatteryVerticalHigh: typeof BatteryVerticalHigh;
declare const index$1_BatteryVerticalLow: typeof BatteryVerticalLow;
declare const index$1_BatteryVerticalMedium: typeof BatteryVerticalMedium;
declare const index$1_BatteryWarning: typeof BatteryWarning;
declare const index$1_BatteryWarningVertical: typeof BatteryWarningVertical;
declare const index$1_Bed: typeof Bed;
declare const index$1_BeerBottle: typeof BeerBottle;
declare const index$1_BeerStein: typeof BeerStein;
declare const index$1_BehanceLogo: typeof BehanceLogo;
declare const index$1_Bell: typeof Bell;
declare const index$1_BellRinging: typeof BellRinging;
declare const index$1_BellSimple: typeof BellSimple;
declare const index$1_BellSimpleRinging: typeof BellSimpleRinging;
declare const index$1_BellSimpleSlash: typeof BellSimpleSlash;
declare const index$1_BellSimpleZ: typeof BellSimpleZ;
declare const index$1_BellSlash: typeof BellSlash;
declare const index$1_BellZ: typeof BellZ;
declare const index$1_BezierCurve: typeof BezierCurve;
declare const index$1_Bicycle: typeof Bicycle;
declare const index$1_Binoculars: typeof Binoculars;
declare const index$1_Bird: typeof Bird;
declare const index$1_Bluetooth: typeof Bluetooth;
declare const index$1_BluetoothConnected: typeof BluetoothConnected;
declare const index$1_BluetoothSlash: typeof BluetoothSlash;
declare const index$1_BluetoothX: typeof BluetoothX;
declare const index$1_Boat: typeof Boat;
declare const index$1_Bone: typeof Bone;
declare const index$1_Book: typeof Book;
declare const index$1_BookBookmark: typeof BookBookmark;
declare const index$1_BookOpen: typeof BookOpen;
declare const index$1_BookOpenText: typeof BookOpenText;
declare const index$1_Bookmark: typeof Bookmark;
declare const index$1_BookmarkSimple: typeof BookmarkSimple;
declare const index$1_Bookmarks: typeof Bookmarks;
declare const index$1_BookmarksSimple: typeof BookmarksSimple;
declare const index$1_Books: typeof Books;
declare const index$1_Boot: typeof Boot;
declare const index$1_BoundingBox: typeof BoundingBox;
declare const index$1_BowlFood: typeof BowlFood;
declare const index$1_BracketsAngle: typeof BracketsAngle;
declare const index$1_BracketsCurly: typeof BracketsCurly;
declare const index$1_BracketsRound: typeof BracketsRound;
declare const index$1_BracketsSquare: typeof BracketsSquare;
declare const index$1_Brain: typeof Brain;
declare const index$1_Brandy: typeof Brandy;
declare const index$1_Bridge: typeof Bridge;
declare const index$1_Briefcase: typeof Briefcase;
declare const index$1_BriefcaseMetal: typeof BriefcaseMetal;
declare const index$1_Broadcast: typeof Broadcast;
declare const index$1_Broom: typeof Broom;
declare const index$1_Browser: typeof Browser;
declare const index$1_Browsers: typeof Browsers;
declare const index$1_Bug: typeof Bug;
declare const index$1_BugBeetle: typeof BugBeetle;
declare const index$1_BugDroid: typeof BugDroid;
declare const index$1_Buildings: typeof Buildings;
declare const index$1_Bus: typeof Bus;
declare const index$1_Butterfly: typeof Butterfly;
declare const index$1_Cactus: typeof Cactus;
declare const index$1_Cake: typeof Cake;
declare const index$1_Calculator: typeof Calculator;
declare const index$1_Calendar: typeof Calendar;
declare const index$1_CalendarBlank: typeof CalendarBlank;
declare const index$1_CalendarCheck: typeof CalendarCheck;
declare const index$1_CalendarPlus: typeof CalendarPlus;
declare const index$1_CalendarX: typeof CalendarX;
declare const index$1_CallBell: typeof CallBell;
declare const index$1_Camera: typeof Camera;
declare const index$1_CameraPlus: typeof CameraPlus;
declare const index$1_CameraRotate: typeof CameraRotate;
declare const index$1_CameraSlash: typeof CameraSlash;
declare const index$1_Campfire: typeof Campfire;
declare const index$1_Car: typeof Car;
declare const index$1_CarProfile: typeof CarProfile;
declare const index$1_CarSimple: typeof CarSimple;
declare const index$1_Cardholder: typeof Cardholder;
declare const index$1_Cards: typeof Cards;
declare const index$1_CaretCircleDoubleDown: typeof CaretCircleDoubleDown;
declare const index$1_CaretCircleDoubleLeft: typeof CaretCircleDoubleLeft;
declare const index$1_CaretCircleDoubleRight: typeof CaretCircleDoubleRight;
declare const index$1_CaretCircleDoubleUp: typeof CaretCircleDoubleUp;
declare const index$1_CaretCircleDown: typeof CaretCircleDown;
declare const index$1_CaretCircleLeft: typeof CaretCircleLeft;
declare const index$1_CaretCircleRight: typeof CaretCircleRight;
declare const index$1_CaretCircleUp: typeof CaretCircleUp;
declare const index$1_CaretCircleUpDown: typeof CaretCircleUpDown;
declare const index$1_CaretDoubleDown: typeof CaretDoubleDown;
declare const index$1_CaretDoubleLeft: typeof CaretDoubleLeft;
declare const index$1_CaretDoubleRight: typeof CaretDoubleRight;
declare const index$1_CaretDoubleUp: typeof CaretDoubleUp;
declare const index$1_CaretDown: typeof CaretDown;
declare const index$1_CaretLeft: typeof CaretLeft;
declare const index$1_CaretRight: typeof CaretRight;
declare const index$1_CaretUp: typeof CaretUp;
declare const index$1_CaretUpDown: typeof CaretUpDown;
declare const index$1_Carrot: typeof Carrot;
declare const index$1_CassetteTape: typeof CassetteTape;
declare const index$1_CastleTurret: typeof CastleTurret;
declare const index$1_Cat: typeof Cat;
declare const index$1_CellSignalFull: typeof CellSignalFull;
declare const index$1_CellSignalHigh: typeof CellSignalHigh;
declare const index$1_CellSignalLow: typeof CellSignalLow;
declare const index$1_CellSignalMedium: typeof CellSignalMedium;
declare const index$1_CellSignalNone: typeof CellSignalNone;
declare const index$1_CellSignalSlash: typeof CellSignalSlash;
declare const index$1_CellSignalX: typeof CellSignalX;
declare const index$1_Certificate: typeof Certificate;
declare const index$1_Chair: typeof Chair;
declare const index$1_Chalkboard: typeof Chalkboard;
declare const index$1_ChalkboardSimple: typeof ChalkboardSimple;
declare const index$1_ChalkboardTeacher: typeof ChalkboardTeacher;
declare const index$1_Champagne: typeof Champagne;
declare const index$1_ChargingStation: typeof ChargingStation;
declare const index$1_ChartBar: typeof ChartBar;
declare const index$1_ChartBarHorizontal: typeof ChartBarHorizontal;
declare const index$1_ChartDonut: typeof ChartDonut;
declare const index$1_ChartLine: typeof ChartLine;
declare const index$1_ChartLineDown: typeof ChartLineDown;
declare const index$1_ChartLineUp: typeof ChartLineUp;
declare const index$1_ChartPie: typeof ChartPie;
declare const index$1_ChartPieSlice: typeof ChartPieSlice;
declare const index$1_ChartPolar: typeof ChartPolar;
declare const index$1_ChartScatter: typeof ChartScatter;
declare const index$1_Chat: typeof Chat;
declare const index$1_ChatCentered: typeof ChatCentered;
declare const index$1_ChatCenteredDots: typeof ChatCenteredDots;
declare const index$1_ChatCenteredText: typeof ChatCenteredText;
declare const index$1_ChatCircle: typeof ChatCircle;
declare const index$1_ChatCircleDots: typeof ChatCircleDots;
declare const index$1_ChatCircleText: typeof ChatCircleText;
declare const index$1_ChatDots: typeof ChatDots;
declare const index$1_ChatTeardrop: typeof ChatTeardrop;
declare const index$1_ChatTeardropDots: typeof ChatTeardropDots;
declare const index$1_ChatTeardropText: typeof ChatTeardropText;
declare const index$1_ChatText: typeof ChatText;
declare const index$1_Chats: typeof Chats;
declare const index$1_ChatsCircle: typeof ChatsCircle;
declare const index$1_ChatsTeardrop: typeof ChatsTeardrop;
declare const index$1_Check: typeof Check;
declare const index$1_CheckCircle: typeof CheckCircle;
declare const index$1_CheckFat: typeof CheckFat;
declare const index$1_CheckSquare: typeof CheckSquare;
declare const index$1_CheckSquareOffset: typeof CheckSquareOffset;
declare const index$1_Checks: typeof Checks;
declare const index$1_Church: typeof Church;
declare const index$1_Circle: typeof Circle;
declare const index$1_CircleDashed: typeof CircleDashed;
declare const index$1_CircleHalf: typeof CircleHalf;
declare const index$1_CircleHalfTilt: typeof CircleHalfTilt;
declare const index$1_CircleNotch: typeof CircleNotch;
declare const index$1_CirclesFour: typeof CirclesFour;
declare const index$1_CirclesThree: typeof CirclesThree;
declare const index$1_CirclesThreePlus: typeof CirclesThreePlus;
declare const index$1_Circuitry: typeof Circuitry;
declare const index$1_Clipboard: typeof Clipboard;
declare const index$1_ClipboardText: typeof ClipboardText;
declare const index$1_Clock: typeof Clock;
declare const index$1_ClockAfternoon: typeof ClockAfternoon;
declare const index$1_ClockClockwise: typeof ClockClockwise;
declare const index$1_ClockCountdown: typeof ClockCountdown;
declare const index$1_ClockCounterClockwise: typeof ClockCounterClockwise;
declare const index$1_ClosedCaptioning: typeof ClosedCaptioning;
declare const index$1_Cloud: typeof Cloud;
declare const index$1_CloudArrowDown: typeof CloudArrowDown;
declare const index$1_CloudArrowUp: typeof CloudArrowUp;
declare const index$1_CloudCheck: typeof CloudCheck;
declare const index$1_CloudFog: typeof CloudFog;
declare const index$1_CloudLightning: typeof CloudLightning;
declare const index$1_CloudMoon: typeof CloudMoon;
declare const index$1_CloudRain: typeof CloudRain;
declare const index$1_CloudSlash: typeof CloudSlash;
declare const index$1_CloudSnow: typeof CloudSnow;
declare const index$1_CloudSun: typeof CloudSun;
declare const index$1_CloudWarning: typeof CloudWarning;
declare const index$1_CloudX: typeof CloudX;
declare const index$1_Club: typeof Club;
declare const index$1_CoatHanger: typeof CoatHanger;
declare const index$1_CodaLogo: typeof CodaLogo;
declare const index$1_Code: typeof Code;
declare const index$1_CodeBlock: typeof CodeBlock;
declare const index$1_CodeSimple: typeof CodeSimple;
declare const index$1_CodepenLogo: typeof CodepenLogo;
declare const index$1_CodesandboxLogo: typeof CodesandboxLogo;
declare const index$1_Coffee: typeof Coffee;
declare const index$1_Coin: typeof Coin;
declare const index$1_CoinVertical: typeof CoinVertical;
declare const index$1_Coins: typeof Coins;
declare const index$1_Columns: typeof Columns;
declare const index$1_Command: typeof Command;
declare const index$1_Compass: typeof Compass;
declare const index$1_CompassOff: typeof CompassOff;
declare const index$1_CompassTool: typeof CompassTool;
declare const index$1_ComputerTower: typeof ComputerTower;
declare const index$1_Confetti: typeof Confetti;
declare const index$1_ContactlessPayment: typeof ContactlessPayment;
declare const index$1_Control: typeof Control;
declare const index$1_Cookie: typeof Cookie;
declare const index$1_CookingPot: typeof CookingPot;
declare const index$1_Copy: typeof Copy;
declare const index$1_CopySimple: typeof CopySimple;
declare const index$1_Copyleft: typeof Copyleft;
declare const index$1_Copyright: typeof Copyright;
declare const index$1_CornersIn: typeof CornersIn;
declare const index$1_CornersOut: typeof CornersOut;
declare const index$1_Couch: typeof Couch;
declare const index$1_Cpu: typeof Cpu;
declare const index$1_CreditCard: typeof CreditCard;
declare const index$1_Crop: typeof Crop;
declare const index$1_Cross: typeof Cross;
declare const index$1_Crosshair: typeof Crosshair;
declare const index$1_CrosshairSimple: typeof CrosshairSimple;
declare const index$1_Crown: typeof Crown;
declare const index$1_CrownSimple: typeof CrownSimple;
declare const index$1_Cube: typeof Cube;
declare const index$1_CubeFocus: typeof CubeFocus;
declare const index$1_CubeTransparent: typeof CubeTransparent;
declare const index$1_CurrencyBtc: typeof CurrencyBtc;
declare const index$1_CurrencyCircleDollar: typeof CurrencyCircleDollar;
declare const index$1_CurrencyCny: typeof CurrencyCny;
declare const index$1_CurrencyDollar: typeof CurrencyDollar;
declare const index$1_CurrencyDollarSimple: typeof CurrencyDollarSimple;
declare const index$1_CurrencyEth: typeof CurrencyEth;
declare const index$1_CurrencyEur: typeof CurrencyEur;
declare const index$1_CurrencyGbp: typeof CurrencyGbp;
declare const index$1_CurrencyInr: typeof CurrencyInr;
declare const index$1_CurrencyJpy: typeof CurrencyJpy;
declare const index$1_CurrencyKrw: typeof CurrencyKrw;
declare const index$1_CurrencyKzt: typeof CurrencyKzt;
declare const index$1_CurrencyNgn: typeof CurrencyNgn;
declare const index$1_CurrencyRub: typeof CurrencyRub;
declare const index$1_Cursor: typeof Cursor;
declare const index$1_CursorClick: typeof CursorClick;
declare const index$1_CursorText: typeof CursorText;
declare const index$1_Cylinder: typeof Cylinder;
declare const index$1_Database: typeof Database;
declare const index$1_Desktop: typeof Desktop;
declare const index$1_DesktopTower: typeof DesktopTower;
declare const index$1_Detective: typeof Detective;
declare const index$1_DevToLogo: typeof DevToLogo;
declare const index$1_DeviceMobile: typeof DeviceMobile;
declare const index$1_DeviceMobileCamera: typeof DeviceMobileCamera;
declare const index$1_DeviceMobileSpeaker: typeof DeviceMobileSpeaker;
declare const index$1_DeviceTablet: typeof DeviceTablet;
declare const index$1_DeviceTabletCamera: typeof DeviceTabletCamera;
declare const index$1_DeviceTabletSpeaker: typeof DeviceTabletSpeaker;
declare const index$1_Devices: typeof Devices;
declare const index$1_Diamond: typeof Diamond;
declare const index$1_DiamondsFour: typeof DiamondsFour;
declare const index$1_DiceFive: typeof DiceFive;
declare const index$1_DiceFour: typeof DiceFour;
declare const index$1_DiceOne: typeof DiceOne;
declare const index$1_DiceSix: typeof DiceSix;
declare const index$1_DiceThree: typeof DiceThree;
declare const index$1_DiceTwo: typeof DiceTwo;
declare const index$1_Disc: typeof Disc;
declare const index$1_DiscordLogo: typeof DiscordLogo;
declare const index$1_Divide: typeof Divide;
declare const index$1_Dna: typeof Dna;
declare const index$1_Dog: typeof Dog;
declare const index$1_Door: typeof Door;
declare const index$1_DoorOpen: typeof DoorOpen;
declare const index$1_Dot: typeof Dot;
declare const index$1_DotOutline: typeof DotOutline;
declare const index$1_DotsNine: typeof DotsNine;
declare const index$1_DotsSix: typeof DotsSix;
declare const index$1_DotsSixVertical: typeof DotsSixVertical;
declare const index$1_DotsThree: typeof DotsThree;
declare const index$1_DotsThreeCircle: typeof DotsThreeCircle;
declare const index$1_DotsThreeCircleVertical: typeof DotsThreeCircleVertical;
declare const index$1_DotsThreeOutline: typeof DotsThreeOutline;
declare const index$1_DotsThreeOutlineVertical: typeof DotsThreeOutlineVertical;
declare const index$1_DotsThreeVertical: typeof DotsThreeVertical;
declare const index$1_Download: typeof Download;
declare const index$1_DownloadSimple: typeof DownloadSimple;
declare const index$1_Dress: typeof Dress;
declare const index$1_DribbbleLogo: typeof DribbbleLogo;
declare const index$1_Drop: typeof Drop;
declare const index$1_DropHalf: typeof DropHalf;
declare const index$1_DropHalfBottom: typeof DropHalfBottom;
declare const index$1_DropboxLogo: typeof DropboxLogo;
declare const index$1_Ear: typeof Ear;
declare const index$1_EarSlash: typeof EarSlash;
declare const index$1_Egg: typeof Egg;
declare const index$1_EggCrack: typeof EggCrack;
declare const index$1_Eject: typeof Eject;
declare const index$1_EjectSimple: typeof EjectSimple;
declare const index$1_Elevator: typeof Elevator;
declare const index$1_Engine: typeof Engine;
declare const index$1_Envelope: typeof Envelope;
declare const index$1_EnvelopeOpen: typeof EnvelopeOpen;
declare const index$1_EnvelopeSimple: typeof EnvelopeSimple;
declare const index$1_EnvelopeSimpleOpen: typeof EnvelopeSimpleOpen;
declare const index$1_Equalizer: typeof Equalizer;
declare const index$1_Equals: typeof Equals;
declare const index$1_Eraser: typeof Eraser;
declare const index$1_EscalatorDown: typeof EscalatorDown;
declare const index$1_EscalatorUp: typeof EscalatorUp;
declare const index$1_Exam: typeof Exam;
declare const index$1_Exclude: typeof Exclude;
declare const index$1_ExcludeSquare: typeof ExcludeSquare;
declare const index$1_Export: typeof Export;
declare const index$1_Eye: typeof Eye;
declare const index$1_EyeClosed: typeof EyeClosed;
declare const index$1_EyeSlash: typeof EyeSlash;
declare const index$1_Eyedropper: typeof Eyedropper;
declare const index$1_EyedropperSample: typeof EyedropperSample;
declare const index$1_Eyeglasses: typeof Eyeglasses;
declare const index$1_FaceMask: typeof FaceMask;
declare const index$1_FacebookLogo: typeof FacebookLogo;
declare const index$1_Factory: typeof Factory;
declare const index$1_Faders: typeof Faders;
declare const index$1_FadersHorizontal: typeof FadersHorizontal;
declare const index$1_Fan: typeof Fan;
declare const index$1_FastForward: typeof FastForward;
declare const index$1_FastForwardCircle: typeof FastForwardCircle;
declare const index$1_Feather: typeof Feather;
declare const index$1_FigmaLogo: typeof FigmaLogo;
declare const index$1_File: typeof File;
declare const index$1_FileArchive: typeof FileArchive;
declare const index$1_FileArrowDown: typeof FileArrowDown;
declare const index$1_FileArrowUp: typeof FileArrowUp;
declare const index$1_FileAudio: typeof FileAudio;
declare const index$1_FileCloud: typeof FileCloud;
declare const index$1_FileCode: typeof FileCode;
declare const index$1_FileCss: typeof FileCss;
declare const index$1_FileCsv: typeof FileCsv;
declare const index$1_FileDashed: typeof FileDashed;
declare const index$1_FileDoc: typeof FileDoc;
declare const index$1_FileHtml: typeof FileHtml;
declare const index$1_FileImage: typeof FileImage;
declare const index$1_FileJpg: typeof FileJpg;
declare const index$1_FileJs: typeof FileJs;
declare const index$1_FileJsx: typeof FileJsx;
declare const index$1_FileLock: typeof FileLock;
declare const index$1_FileMinus: typeof FileMinus;
declare const index$1_FilePdf: typeof FilePdf;
declare const index$1_FilePlus: typeof FilePlus;
declare const index$1_FilePng: typeof FilePng;
declare const index$1_FilePpt: typeof FilePpt;
declare const index$1_FileRs: typeof FileRs;
declare const index$1_FileSearch: typeof FileSearch;
declare const index$1_FileSql: typeof FileSql;
declare const index$1_FileSvg: typeof FileSvg;
declare const index$1_FileText: typeof FileText;
declare const index$1_FileTs: typeof FileTs;
declare const index$1_FileTsx: typeof FileTsx;
declare const index$1_FileVideo: typeof FileVideo;
declare const index$1_FileVue: typeof FileVue;
declare const index$1_FileX: typeof FileX;
declare const index$1_FileXls: typeof FileXls;
declare const index$1_FileZip: typeof FileZip;
declare const index$1_Files: typeof Files;
declare const index$1_FilmReel: typeof FilmReel;
declare const index$1_FilmScript: typeof FilmScript;
declare const index$1_FilmSlate: typeof FilmSlate;
declare const index$1_FilmStrip: typeof FilmStrip;
declare const index$1_Fingerprint: typeof Fingerprint;
declare const index$1_FingerprintSimple: typeof FingerprintSimple;
declare const index$1_FinnTheHuman: typeof FinnTheHuman;
declare const index$1_Fire: typeof Fire;
declare const index$1_FireExtinguisher: typeof FireExtinguisher;
declare const index$1_FireSimple: typeof FireSimple;
declare const index$1_FirstAid: typeof FirstAid;
declare const index$1_FirstAidKit: typeof FirstAidKit;
declare const index$1_Fish: typeof Fish;
declare const index$1_FishSimple: typeof FishSimple;
declare const index$1_Flag: typeof Flag;
declare const index$1_FlagBanner: typeof FlagBanner;
declare const index$1_FlagCheckered: typeof FlagCheckered;
declare const index$1_FlagPennant: typeof FlagPennant;
declare const index$1_Flame: typeof Flame;
declare const index$1_Flashlight: typeof Flashlight;
declare const index$1_Flask: typeof Flask;
declare const index$1_FloppyDisk: typeof FloppyDisk;
declare const index$1_FloppyDiskBack: typeof FloppyDiskBack;
declare const index$1_FlowArrow: typeof FlowArrow;
declare const index$1_Flower: typeof Flower;
declare const index$1_FlowerLotus: typeof FlowerLotus;
declare const index$1_FlowerTulip: typeof FlowerTulip;
declare const index$1_FlyingSaucer: typeof FlyingSaucer;
declare const index$1_Folder: typeof Folder;
declare const index$1_FolderDashed: typeof FolderDashed;
declare const index$1_FolderLock: typeof FolderLock;
declare const index$1_FolderMinus: typeof FolderMinus;
declare const index$1_FolderNotch: typeof FolderNotch;
declare const index$1_FolderNotchMinus: typeof FolderNotchMinus;
declare const index$1_FolderNotchOpen: typeof FolderNotchOpen;
declare const index$1_FolderNotchPlus: typeof FolderNotchPlus;
declare const index$1_FolderOpen: typeof FolderOpen;
declare const index$1_FolderPlus: typeof FolderPlus;
declare const index$1_FolderSimple: typeof FolderSimple;
declare const index$1_FolderSimpleDashed: typeof FolderSimpleDashed;
declare const index$1_FolderSimpleLock: typeof FolderSimpleLock;
declare const index$1_FolderSimpleMinus: typeof FolderSimpleMinus;
declare const index$1_FolderSimplePlus: typeof FolderSimplePlus;
declare const index$1_FolderSimpleStar: typeof FolderSimpleStar;
declare const index$1_FolderSimpleUser: typeof FolderSimpleUser;
declare const index$1_FolderStar: typeof FolderStar;
declare const index$1_FolderUser: typeof FolderUser;
declare const index$1_Folders: typeof Folders;
declare const index$1_Football: typeof Football;
declare const index$1_Footprints: typeof Footprints;
declare const index$1_ForkKnife: typeof ForkKnife;
declare const index$1_FrameCorners: typeof FrameCorners;
declare const index$1_FramerLogo: typeof FramerLogo;
declare const index$1_Function: typeof Function;
declare const index$1_Funnel: typeof Funnel;
declare const index$1_FunnelSimple: typeof FunnelSimple;
declare const index$1_GameController: typeof GameController;
declare const index$1_Garage: typeof Garage;
declare const index$1_GasCan: typeof GasCan;
declare const index$1_GasPump: typeof GasPump;
declare const index$1_Gauge: typeof Gauge;
declare const index$1_Gavel: typeof Gavel;
declare const index$1_Gear: typeof Gear;
declare const index$1_GearFine: typeof GearFine;
declare const index$1_GearSix: typeof GearSix;
declare const index$1_GenderFemale: typeof GenderFemale;
declare const index$1_GenderIntersex: typeof GenderIntersex;
declare const index$1_GenderMale: typeof GenderMale;
declare const index$1_GenderNeuter: typeof GenderNeuter;
declare const index$1_GenderNonbinary: typeof GenderNonbinary;
declare const index$1_GenderTransgender: typeof GenderTransgender;
declare const index$1_Ghost: typeof Ghost;
declare const index$1_Gif: typeof Gif;
declare const index$1_Gift: typeof Gift;
declare const index$1_GitBranch: typeof GitBranch;
declare const index$1_GitCommit: typeof GitCommit;
declare const index$1_GitDiff: typeof GitDiff;
declare const index$1_GitFork: typeof GitFork;
declare const index$1_GitMerge: typeof GitMerge;
declare const index$1_GitPullRequest: typeof GitPullRequest;
declare const index$1_GithubLogo: typeof GithubLogo;
declare const index$1_GitlabLogo: typeof GitlabLogo;
declare const index$1_GitlabLogoSimple: typeof GitlabLogoSimple;
declare const index$1_Globe: typeof Globe;
declare const index$1_GlobeHemisphereEast: typeof GlobeHemisphereEast;
declare const index$1_GlobeHemisphereWest: typeof GlobeHemisphereWest;
declare const index$1_GlobeSimple: typeof GlobeSimple;
declare const index$1_GlobeStand: typeof GlobeStand;
declare const index$1_Goggles: typeof Goggles;
declare const index$1_GoodreadsLogo: typeof GoodreadsLogo;
declare const index$1_GoogleCardboardLogo: typeof GoogleCardboardLogo;
declare const index$1_GoogleChromeLogo: typeof GoogleChromeLogo;
declare const index$1_GoogleDriveLogo: typeof GoogleDriveLogo;
declare const index$1_GoogleLogo: typeof GoogleLogo;
declare const index$1_GooglePhotosLogo: typeof GooglePhotosLogo;
declare const index$1_GooglePlayLogo: typeof GooglePlayLogo;
declare const index$1_GooglePodcastsLogo: typeof GooglePodcastsLogo;
declare const index$1_Gradient: typeof Gradient;
declare const index$1_GraduationCap: typeof GraduationCap;
declare const index$1_Grains: typeof Grains;
declare const index$1_GrainsSlash: typeof GrainsSlash;
declare const index$1_Graph: typeof Graph;
declare const index$1_GridFour: typeof GridFour;
declare const index$1_GridNine: typeof GridNine;
declare const index$1_Guitar: typeof Guitar;
declare const index$1_Hamburger: typeof Hamburger;
declare const index$1_Hammer: typeof Hammer;
declare const index$1_Hand: typeof Hand;
declare const index$1_HandCoins: typeof HandCoins;
declare const index$1_HandEye: typeof HandEye;
declare const index$1_HandFist: typeof HandFist;
declare const index$1_HandGrabbing: typeof HandGrabbing;
declare const index$1_HandHeart: typeof HandHeart;
declare const index$1_HandPalm: typeof HandPalm;
declare const index$1_HandPointing: typeof HandPointing;
declare const index$1_HandSoap: typeof HandSoap;
declare const index$1_HandSwipeLeft: typeof HandSwipeLeft;
declare const index$1_HandSwipeRight: typeof HandSwipeRight;
declare const index$1_HandTap: typeof HandTap;
declare const index$1_HandWaving: typeof HandWaving;
declare const index$1_Handbag: typeof Handbag;
declare const index$1_HandbagSimple: typeof HandbagSimple;
declare const index$1_HandsClapping: typeof HandsClapping;
declare const index$1_HandsPraying: typeof HandsPraying;
declare const index$1_Handshake: typeof Handshake;
declare const index$1_HardDrive: typeof HardDrive;
declare const index$1_HardDrives: typeof HardDrives;
declare const index$1_Hash: typeof Hash;
declare const index$1_HashStraight: typeof HashStraight;
declare const index$1_Headlights: typeof Headlights;
declare const index$1_Headphones: typeof Headphones;
declare const index$1_Headset: typeof Headset;
declare const index$1_Heart: typeof Heart;
declare const index$1_HeartBreak: typeof HeartBreak;
declare const index$1_HeartHalf: typeof HeartHalf;
declare const index$1_HeartStraight: typeof HeartStraight;
declare const index$1_HeartStraightBreak: typeof HeartStraightBreak;
declare const index$1_Heartbeat: typeof Heartbeat;
declare const index$1_Hexagon: typeof Hexagon;
declare const index$1_HighHeel: typeof HighHeel;
declare const index$1_HighlighterCircle: typeof HighlighterCircle;
declare const index$1_Hoodie: typeof Hoodie;
declare const index$1_Horse: typeof Horse;
declare const index$1_Hourglass: typeof Hourglass;
declare const index$1_HourglassHigh: typeof HourglassHigh;
declare const index$1_HourglassLow: typeof HourglassLow;
declare const index$1_HourglassMedium: typeof HourglassMedium;
declare const index$1_HourglassSimple: typeof HourglassSimple;
declare const index$1_HourglassSimpleHigh: typeof HourglassSimpleHigh;
declare const index$1_HourglassSimpleLow: typeof HourglassSimpleLow;
declare const index$1_HourglassSimpleMedium: typeof HourglassSimpleMedium;
declare const index$1_House: typeof House;
declare const index$1_HouseLine: typeof HouseLine;
declare const index$1_HouseSimple: typeof HouseSimple;
declare const index$1_IceCream: typeof IceCream;
declare const index$1_IdentificationBadge: typeof IdentificationBadge;
declare const index$1_IdentificationCard: typeof IdentificationCard;
declare const index$1_Image: typeof Image;
declare const index$1_ImageSquare: typeof ImageSquare;
declare const index$1_Images: typeof Images;
declare const index$1_ImagesSquare: typeof ImagesSquare;
declare const index$1_Infinity: typeof Infinity;
declare const index$1_Info: typeof Info;
declare const index$1_InstagramLogo: typeof InstagramLogo;
declare const index$1_Intersect: typeof Intersect;
declare const index$1_IntersectSquare: typeof IntersectSquare;
declare const index$1_IntersectThree: typeof IntersectThree;
declare const index$1_Jeep: typeof Jeep;
declare const index$1_Kanban: typeof Kanban;
declare const index$1_Key: typeof Key;
declare const index$1_KeyReturn: typeof KeyReturn;
declare const index$1_Keyboard: typeof Keyboard;
declare const index$1_Keyhole: typeof Keyhole;
declare const index$1_Knife: typeof Knife;
declare const index$1_Ladder: typeof Ladder;
declare const index$1_LadderSimple: typeof LadderSimple;
declare const index$1_Lamp: typeof Lamp;
declare const index$1_Laptop: typeof Laptop;
declare const index$1_Layout: typeof Layout;
declare const index$1_Leaf: typeof Leaf;
declare const index$1_Lifebuoy: typeof Lifebuoy;
declare const index$1_Lightbulb: typeof Lightbulb;
declare const index$1_LightbulbFilament: typeof LightbulbFilament;
declare const index$1_Lighthouse: typeof Lighthouse;
declare const index$1_Lightning: typeof Lightning;
declare const index$1_LightningA: typeof LightningA;
declare const index$1_LightningSlash: typeof LightningSlash;
declare const index$1_LineSegment: typeof LineSegment;
declare const index$1_LineSegments: typeof LineSegments;
declare const index$1_Link: typeof Link;
declare const index$1_LinkBreak: typeof LinkBreak;
declare const index$1_LinkSimple: typeof LinkSimple;
declare const index$1_LinkSimpleBreak: typeof LinkSimpleBreak;
declare const index$1_LinkSimpleHorizontal: typeof LinkSimpleHorizontal;
declare const index$1_LinkSimpleHorizontalBreak: typeof LinkSimpleHorizontalBreak;
declare const index$1_LinkedinLogo: typeof LinkedinLogo;
declare const index$1_LinuxLogo: typeof LinuxLogo;
declare const index$1_List: typeof List;
declare const index$1_ListBullets: typeof ListBullets;
declare const index$1_ListChecks: typeof ListChecks;
declare const index$1_ListDashes: typeof ListDashes;
declare const index$1_ListMagnifyingGlass: typeof ListMagnifyingGlass;
declare const index$1_ListNumbers: typeof ListNumbers;
declare const index$1_ListPlus: typeof ListPlus;
declare const index$1_Lock: typeof Lock;
declare const index$1_LockKey: typeof LockKey;
declare const index$1_LockKeyOpen: typeof LockKeyOpen;
declare const index$1_LockLaminated: typeof LockLaminated;
declare const index$1_LockLaminatedOpen: typeof LockLaminatedOpen;
declare const index$1_LockOpen: typeof LockOpen;
declare const index$1_LockSimple: typeof LockSimple;
declare const index$1_LockSimpleOpen: typeof LockSimpleOpen;
declare const index$1_Lockers: typeof Lockers;
declare const index$1_MagicWand: typeof MagicWand;
declare const index$1_Magnet: typeof Magnet;
declare const index$1_MagnetStraight: typeof MagnetStraight;
declare const index$1_MagnifyingGlass: typeof MagnifyingGlass;
declare const index$1_MagnifyingGlassMinus: typeof MagnifyingGlassMinus;
declare const index$1_MagnifyingGlassPlus: typeof MagnifyingGlassPlus;
declare const index$1_MapPin: typeof MapPin;
declare const index$1_MapPinLine: typeof MapPinLine;
declare const index$1_MapTrifold: typeof MapTrifold;
declare const index$1_MarkerCircle: typeof MarkerCircle;
declare const index$1_Martini: typeof Martini;
declare const index$1_MaskHappy: typeof MaskHappy;
declare const index$1_MaskSad: typeof MaskSad;
declare const index$1_MathOperations: typeof MathOperations;
declare const index$1_Medal: typeof Medal;
declare const index$1_MedalMilitary: typeof MedalMilitary;
declare const index$1_MediumLogo: typeof MediumLogo;
declare const index$1_Megaphone: typeof Megaphone;
declare const index$1_MegaphoneSimple: typeof MegaphoneSimple;
declare const index$1_MessengerLogo: typeof MessengerLogo;
declare const index$1_MetaLogo: typeof MetaLogo;
declare const index$1_Metronome: typeof Metronome;
declare const index$1_Microphone: typeof Microphone;
declare const index$1_MicrophoneSlash: typeof MicrophoneSlash;
declare const index$1_MicrophoneStage: typeof MicrophoneStage;
declare const index$1_MicrosoftExcelLogo: typeof MicrosoftExcelLogo;
declare const index$1_MicrosoftOutlookLogo: typeof MicrosoftOutlookLogo;
declare const index$1_MicrosoftPowerpointLogo: typeof MicrosoftPowerpointLogo;
declare const index$1_MicrosoftTeamsLogo: typeof MicrosoftTeamsLogo;
declare const index$1_MicrosoftWordLogo: typeof MicrosoftWordLogo;
declare const index$1_Minus: typeof Minus;
declare const index$1_MinusCircle: typeof MinusCircle;
declare const index$1_MinusSquare: typeof MinusSquare;
declare const index$1_Money: typeof Money;
declare const index$1_Monitor: typeof Monitor;
declare const index$1_MonitorPlay: typeof MonitorPlay;
declare const index$1_Moon: typeof Moon;
declare const index$1_MoonStars: typeof MoonStars;
declare const index$1_Moped: typeof Moped;
declare const index$1_MopedFront: typeof MopedFront;
declare const index$1_Mosque: typeof Mosque;
declare const index$1_Motorcycle: typeof Motorcycle;
declare const index$1_Mountains: typeof Mountains;
declare const index$1_Mouse: typeof Mouse;
declare const index$1_MouseSimple: typeof MouseSimple;
declare const index$1_MusicNote: typeof MusicNote;
declare const index$1_MusicNoteSimple: typeof MusicNoteSimple;
declare const index$1_MusicNotes: typeof MusicNotes;
declare const index$1_MusicNotesPlus: typeof MusicNotesPlus;
declare const index$1_MusicNotesSimple: typeof MusicNotesSimple;
declare const index$1_NavigationArrow: typeof NavigationArrow;
declare const index$1_Needle: typeof Needle;
declare const index$1_Newspaper: typeof Newspaper;
declare const index$1_NewspaperClipping: typeof NewspaperClipping;
declare const index$1_Notches: typeof Notches;
declare const index$1_Note: typeof Note;
declare const index$1_NoteBlank: typeof NoteBlank;
declare const index$1_NotePencil: typeof NotePencil;
declare const index$1_Notebook: typeof Notebook;
declare const index$1_Notification: typeof Notification;
declare const index$1_NotionLogo: typeof NotionLogo;
declare const index$1_NumberCircleEight: typeof NumberCircleEight;
declare const index$1_NumberCircleFive: typeof NumberCircleFive;
declare const index$1_NumberCircleFour: typeof NumberCircleFour;
declare const index$1_NumberCircleNine: typeof NumberCircleNine;
declare const index$1_NumberCircleOne: typeof NumberCircleOne;
declare const index$1_NumberCircleSeven: typeof NumberCircleSeven;
declare const index$1_NumberCircleSix: typeof NumberCircleSix;
declare const index$1_NumberCircleThree: typeof NumberCircleThree;
declare const index$1_NumberCircleTwo: typeof NumberCircleTwo;
declare const index$1_NumberCircleZero: typeof NumberCircleZero;
declare const index$1_NumberEight: typeof NumberEight;
declare const index$1_NumberFive: typeof NumberFive;
declare const index$1_NumberFour: typeof NumberFour;
declare const index$1_NumberNine: typeof NumberNine;
declare const index$1_NumberOne: typeof NumberOne;
declare const index$1_NumberSeven: typeof NumberSeven;
declare const index$1_NumberSix: typeof NumberSix;
declare const index$1_NumberSquareEight: typeof NumberSquareEight;
declare const index$1_NumberSquareFive: typeof NumberSquareFive;
declare const index$1_NumberSquareFour: typeof NumberSquareFour;
declare const index$1_NumberSquareNine: typeof NumberSquareNine;
declare const index$1_NumberSquareOne: typeof NumberSquareOne;
declare const index$1_NumberSquareSeven: typeof NumberSquareSeven;
declare const index$1_NumberSquareSix: typeof NumberSquareSix;
declare const index$1_NumberSquareThree: typeof NumberSquareThree;
declare const index$1_NumberSquareTwo: typeof NumberSquareTwo;
declare const index$1_NumberSquareZero: typeof NumberSquareZero;
declare const index$1_NumberThree: typeof NumberThree;
declare const index$1_NumberTwo: typeof NumberTwo;
declare const index$1_NumberZero: typeof NumberZero;
declare const index$1_Nut: typeof Nut;
declare const index$1_NyTimesLogo: typeof NyTimesLogo;
declare const index$1_Octagon: typeof Octagon;
declare const index$1_OfficeChair: typeof OfficeChair;
declare const index$1_Option: typeof Option;
declare const index$1_OrangeSlice: typeof OrangeSlice;
declare const index$1_Package: typeof Package;
declare const index$1_PaintBrush: typeof PaintBrush;
declare const index$1_PaintBrushBroad: typeof PaintBrushBroad;
declare const index$1_PaintBrushHousehold: typeof PaintBrushHousehold;
declare const index$1_PaintBucket: typeof PaintBucket;
declare const index$1_PaintRoller: typeof PaintRoller;
declare const index$1_Palette: typeof Palette;
declare const index$1_Pants: typeof Pants;
declare const index$1_PaperPlane: typeof PaperPlane;
declare const index$1_PaperPlaneRight: typeof PaperPlaneRight;
declare const index$1_PaperPlaneTilt: typeof PaperPlaneTilt;
declare const index$1_Paperclip: typeof Paperclip;
declare const index$1_PaperclipHorizontal: typeof PaperclipHorizontal;
declare const index$1_Parachute: typeof Parachute;
declare const index$1_Paragraph: typeof Paragraph;
declare const index$1_Parallelogram: typeof Parallelogram;
declare const index$1_Park: typeof Park;
declare const index$1_Password: typeof Password;
declare const index$1_Path: typeof Path;
declare const index$1_PatreonLogo: typeof PatreonLogo;
declare const index$1_Pause: typeof Pause;
declare const index$1_PauseCircle: typeof PauseCircle;
declare const index$1_PawPrint: typeof PawPrint;
declare const index$1_PaypalLogo: typeof PaypalLogo;
declare const index$1_Peace: typeof Peace;
declare const index$1_Pen: typeof Pen;
declare const index$1_PenNib: typeof PenNib;
declare const index$1_PenNibStraight: typeof PenNibStraight;
declare const index$1_Pencil: typeof Pencil;
declare const index$1_PencilCircle: typeof PencilCircle;
declare const index$1_PencilLine: typeof PencilLine;
declare const index$1_PencilSimple: typeof PencilSimple;
declare const index$1_PencilSimpleLine: typeof PencilSimpleLine;
declare const index$1_PencilSimpleSlash: typeof PencilSimpleSlash;
declare const index$1_PencilSlash: typeof PencilSlash;
declare const index$1_Pentagram: typeof Pentagram;
declare const index$1_Pepper: typeof Pepper;
declare const index$1_Percent: typeof Percent;
declare const index$1_Person: typeof Person;
declare const index$1_PersonArmsSpread: typeof PersonArmsSpread;
declare const index$1_PersonSimple: typeof PersonSimple;
declare const index$1_PersonSimpleBike: typeof PersonSimpleBike;
declare const index$1_PersonSimpleRun: typeof PersonSimpleRun;
declare const index$1_PersonSimpleThrow: typeof PersonSimpleThrow;
declare const index$1_PersonSimpleWalk: typeof PersonSimpleWalk;
declare const index$1_Perspective: typeof Perspective;
declare const index$1_Phone: typeof Phone;
declare const index$1_PhoneCall: typeof PhoneCall;
declare const index$1_PhoneDisconnect: typeof PhoneDisconnect;
declare const index$1_PhoneIncoming: typeof PhoneIncoming;
declare const index$1_PhoneOutgoing: typeof PhoneOutgoing;
declare const index$1_PhonePlus: typeof PhonePlus;
declare const index$1_PhoneSlash: typeof PhoneSlash;
declare const index$1_PhoneX: typeof PhoneX;
declare const index$1_PhosphorLogo: typeof PhosphorLogo;
declare const index$1_Pi: typeof Pi;
declare const index$1_PianoKeys: typeof PianoKeys;
declare const index$1_PictureInPicture: typeof PictureInPicture;
declare const index$1_PiggyBank: typeof PiggyBank;
declare const index$1_Pill: typeof Pill;
declare const index$1_PinterestLogo: typeof PinterestLogo;
declare const index$1_Pinwheel: typeof Pinwheel;
declare const index$1_Pizza: typeof Pizza;
declare const index$1_Placeholder: typeof Placeholder;
declare const index$1_Planet: typeof Planet;
declare const index$1_Plant: typeof Plant;
declare const index$1_Play: typeof Play;
declare const index$1_PlayCircle: typeof PlayCircle;
declare const index$1_PlayPause: typeof PlayPause;
declare const index$1_Playlist: typeof Playlist;
declare const index$1_Plug: typeof Plug;
declare const index$1_PlugCharging: typeof PlugCharging;
declare const index$1_Plugs: typeof Plugs;
declare const index$1_PlugsConnected: typeof PlugsConnected;
declare const index$1_Plus: typeof Plus;
declare const index$1_PlusCircle: typeof PlusCircle;
declare const index$1_PlusMinus: typeof PlusMinus;
declare const index$1_PlusSquare: typeof PlusSquare;
declare const index$1_PokerChip: typeof PokerChip;
declare const index$1_PoliceCar: typeof PoliceCar;
declare const index$1_Polygon: typeof Polygon;
declare const index$1_Popcorn: typeof Popcorn;
declare const index$1_PottedPlant: typeof PottedPlant;
declare const index$1_Power: typeof Power;
declare const index$1_Prescription: typeof Prescription;
declare const index$1_Presentation: typeof Presentation;
declare const index$1_PresentationChart: typeof PresentationChart;
declare const index$1_Printer: typeof Printer;
declare const index$1_Prohibit: typeof Prohibit;
declare const index$1_ProhibitInset: typeof ProhibitInset;
declare const index$1_ProjectorScreen: typeof ProjectorScreen;
declare const index$1_ProjectorScreenChart: typeof ProjectorScreenChart;
declare const index$1_Pulse: typeof Pulse;
declare const index$1_PushPin: typeof PushPin;
declare const index$1_PushPinSimple: typeof PushPinSimple;
declare const index$1_PushPinSimpleSlash: typeof PushPinSimpleSlash;
declare const index$1_PushPinSlash: typeof PushPinSlash;
declare const index$1_PuzzlePiece: typeof PuzzlePiece;
declare const index$1_QrCode: typeof QrCode;
declare const index$1_Question: typeof Question;
declare const index$1_Queue: typeof Queue;
declare const index$1_Quotes: typeof Quotes;
declare const index$1_Radical: typeof Radical;
declare const index$1_Radio: typeof Radio;
declare const index$1_RadioButton: typeof RadioButton;
declare const index$1_Radioactive: typeof Radioactive;
declare const index$1_Rainbow: typeof Rainbow;
declare const index$1_RainbowCloud: typeof RainbowCloud;
declare const index$1_ReadCvLogo: typeof ReadCvLogo;
declare const index$1_Receipt: typeof Receipt;
declare const index$1_ReceiptX: typeof ReceiptX;
declare const index$1_Rectangle: typeof Rectangle;
declare const index$1_Recycle: typeof Recycle;
declare const index$1_RedditLogo: typeof RedditLogo;
declare const index$1_Repeat: typeof Repeat;
declare const index$1_RepeatOnce: typeof RepeatOnce;
declare const index$1_Rewind: typeof Rewind;
declare const index$1_RewindCircle: typeof RewindCircle;
declare const index$1_RoadHorizon: typeof RoadHorizon;
declare const index$1_Robot: typeof Robot;
declare const index$1_Rocket: typeof Rocket;
declare const index$1_RocketLaunch: typeof RocketLaunch;
declare const index$1_Rows: typeof Rows;
declare const index$1_Rss: typeof Rss;
declare const index$1_RssSimple: typeof RssSimple;
declare const index$1_Rug: typeof Rug;
declare const index$1_Ruler: typeof Ruler;
declare const index$1_Scales: typeof Scales;
declare const index$1_Scan: typeof Scan;
declare const index$1_Scissors: typeof Scissors;
declare const index$1_Scooter: typeof Scooter;
declare const index$1_Screencast: typeof Screencast;
declare const index$1_ScribbleLoop: typeof ScribbleLoop;
declare const index$1_Scroll: typeof Scroll;
declare const index$1_Seal: typeof Seal;
declare const index$1_SealCheck: typeof SealCheck;
declare const index$1_SealQuestion: typeof SealQuestion;
declare const index$1_SealWarning: typeof SealWarning;
declare const index$1_Selection: typeof Selection;
declare const index$1_SelectionAll: typeof SelectionAll;
declare const index$1_SelectionBackground: typeof SelectionBackground;
declare const index$1_SelectionForeground: typeof SelectionForeground;
declare const index$1_SelectionInverse: typeof SelectionInverse;
declare const index$1_SelectionPlus: typeof SelectionPlus;
declare const index$1_SelectionSlash: typeof SelectionSlash;
declare const index$1_Shapes: typeof Shapes;
declare const index$1_Share: typeof Share;
declare const index$1_ShareFat: typeof ShareFat;
declare const index$1_ShareNetwork: typeof ShareNetwork;
declare const index$1_Shield: typeof Shield;
declare const index$1_ShieldCheck: typeof ShieldCheck;
declare const index$1_ShieldCheckered: typeof ShieldCheckered;
declare const index$1_ShieldChevron: typeof ShieldChevron;
declare const index$1_ShieldPlus: typeof ShieldPlus;
declare const index$1_ShieldSlash: typeof ShieldSlash;
declare const index$1_ShieldStar: typeof ShieldStar;
declare const index$1_ShieldWarning: typeof ShieldWarning;
declare const index$1_ShirtFolded: typeof ShirtFolded;
declare const index$1_ShootingStar: typeof ShootingStar;
declare const index$1_ShoppingBag: typeof ShoppingBag;
declare const index$1_ShoppingBagOpen: typeof ShoppingBagOpen;
declare const index$1_ShoppingCart: typeof ShoppingCart;
declare const index$1_ShoppingCartSimple: typeof ShoppingCartSimple;
declare const index$1_Shower: typeof Shower;
declare const index$1_Shrimp: typeof Shrimp;
declare const index$1_Shuffle: typeof Shuffle;
declare const index$1_ShuffleAngular: typeof ShuffleAngular;
declare const index$1_ShuffleSimple: typeof ShuffleSimple;
declare const index$1_Sidebar: typeof Sidebar;
declare const index$1_SidebarSimple: typeof SidebarSimple;
declare const index$1_Sigma: typeof Sigma;
declare const index$1_SignIn: typeof SignIn;
declare const index$1_SignOut: typeof SignOut;
declare const index$1_Signature: typeof Signature;
declare const index$1_Signpost: typeof Signpost;
declare const index$1_SimCard: typeof SimCard;
declare const index$1_Siren: typeof Siren;
declare const index$1_SketchLogo: typeof SketchLogo;
declare const index$1_SkipBack: typeof SkipBack;
declare const index$1_SkipBackCircle: typeof SkipBackCircle;
declare const index$1_SkipForward: typeof SkipForward;
declare const index$1_SkipForwardCircle: typeof SkipForwardCircle;
declare const index$1_Skull: typeof Skull;
declare const index$1_SlackLogo: typeof SlackLogo;
declare const index$1_Sliders: typeof Sliders;
declare const index$1_SlidersHorizontal: typeof SlidersHorizontal;
declare const index$1_Slideshow: typeof Slideshow;
declare const index$1_Smiley: typeof Smiley;
declare const index$1_SmileyAngry: typeof SmileyAngry;
declare const index$1_SmileyBlank: typeof SmileyBlank;
declare const index$1_SmileyMeh: typeof SmileyMeh;
declare const index$1_SmileyNervous: typeof SmileyNervous;
declare const index$1_SmileySad: typeof SmileySad;
declare const index$1_SmileySticker: typeof SmileySticker;
declare const index$1_SmileyWink: typeof SmileyWink;
declare const index$1_SmileyXEyes: typeof SmileyXEyes;
declare const index$1_SnapchatLogo: typeof SnapchatLogo;
declare const index$1_Sneaker: typeof Sneaker;
declare const index$1_SneakerMove: typeof SneakerMove;
declare const index$1_Snowflake: typeof Snowflake;
declare const index$1_SoccerBall: typeof SoccerBall;
declare const index$1_SortAscending: typeof SortAscending;
declare const index$1_SortDescending: typeof SortDescending;
declare const index$1_SoundcloudLogo: typeof SoundcloudLogo;
declare const index$1_Spade: typeof Spade;
declare const index$1_Sparkle: typeof Sparkle;
declare const index$1_SpeakerHifi: typeof SpeakerHifi;
declare const index$1_SpeakerHigh: typeof SpeakerHigh;
declare const index$1_SpeakerLow: typeof SpeakerLow;
declare const index$1_SpeakerNone: typeof SpeakerNone;
declare const index$1_SpeakerSimpleHigh: typeof SpeakerSimpleHigh;
declare const index$1_SpeakerSimpleLow: typeof SpeakerSimpleLow;
declare const index$1_SpeakerSimpleNone: typeof SpeakerSimpleNone;
declare const index$1_SpeakerSimpleSlash: typeof SpeakerSimpleSlash;
declare const index$1_SpeakerSimpleX: typeof SpeakerSimpleX;
declare const index$1_SpeakerSlash: typeof SpeakerSlash;
declare const index$1_SpeakerX: typeof SpeakerX;
declare const index$1_Spinner: typeof Spinner;
declare const index$1_SpinnerGap: typeof SpinnerGap;
declare const index$1_Spiral: typeof Spiral;
declare const index$1_SplitHorizontal: typeof SplitHorizontal;
declare const index$1_SplitVertical: typeof SplitVertical;
declare const index$1_SpotifyLogo: typeof SpotifyLogo;
declare const index$1_Square: typeof Square;
declare const index$1_SquareHalf: typeof SquareHalf;
declare const index$1_SquareHalfBottom: typeof SquareHalfBottom;
declare const index$1_SquareLogo: typeof SquareLogo;
declare const index$1_SquareSplitHorizontal: typeof SquareSplitHorizontal;
declare const index$1_SquareSplitVertical: typeof SquareSplitVertical;
declare const index$1_SquaresFour: typeof SquaresFour;
declare const index$1_Stack: typeof Stack;
declare const index$1_StackOverflowLogo: typeof StackOverflowLogo;
declare const index$1_StackSimple: typeof StackSimple;
declare const index$1_Stairs: typeof Stairs;
declare const index$1_Stamp: typeof Stamp;
declare const index$1_Star: typeof Star;
declare const index$1_StarAndCrescent: typeof StarAndCrescent;
declare const index$1_StarFour: typeof StarFour;
declare const index$1_StarHalf: typeof StarHalf;
declare const index$1_StarOfDavid: typeof StarOfDavid;
declare const index$1_SteeringWheel: typeof SteeringWheel;
declare const index$1_Steps: typeof Steps;
declare const index$1_Stethoscope: typeof Stethoscope;
declare const index$1_Sticker: typeof Sticker;
declare const index$1_Stool: typeof Stool;
declare const index$1_Stop: typeof Stop;
declare const index$1_StopCircle: typeof StopCircle;
declare const index$1_Storefront: typeof Storefront;
declare const index$1_Strategy: typeof Strategy;
declare const index$1_StripeLogo: typeof StripeLogo;
declare const index$1_Student: typeof Student;
declare const index$1_Subtitles: typeof Subtitles;
declare const index$1_Subtract: typeof Subtract;
declare const index$1_SubtractSquare: typeof SubtractSquare;
declare const index$1_Suitcase: typeof Suitcase;
declare const index$1_SuitcaseRolling: typeof SuitcaseRolling;
declare const index$1_SuitcaseSimple: typeof SuitcaseSimple;
declare const index$1_Sun: typeof Sun;
declare const index$1_SunDim: typeof SunDim;
declare const index$1_SunHorizon: typeof SunHorizon;
declare const index$1_Sunglasses: typeof Sunglasses;
declare const index$1_Swap: typeof Swap;
declare const index$1_Swatches: typeof Swatches;
declare const index$1_SwimmingPool: typeof SwimmingPool;
declare const index$1_Sword: typeof Sword;
declare const index$1_Synagogue: typeof Synagogue;
declare const index$1_Syringe: typeof Syringe;
declare const index$1_TShirt: typeof TShirt;
declare const index$1_Table: typeof Table;
declare const index$1_Tabs: typeof Tabs;
declare const index$1_Tag: typeof Tag;
declare const index$1_TagChevron: typeof TagChevron;
declare const index$1_TagSimple: typeof TagSimple;
declare const index$1_Target: typeof Target;
declare const index$1_Taxi: typeof Taxi;
declare const index$1_TelegramLogo: typeof TelegramLogo;
declare const index$1_Television: typeof Television;
declare const index$1_TelevisionSimple: typeof TelevisionSimple;
declare const index$1_TennisBall: typeof TennisBall;
declare const index$1_Tent: typeof Tent;
declare const index$1_Terminal: typeof Terminal;
declare const index$1_TerminalWindow: typeof TerminalWindow;
declare const index$1_TestTube: typeof TestTube;
declare const index$1_TextAUnderline: typeof TextAUnderline;
declare const index$1_TextAa: typeof TextAa;
declare const index$1_TextAlignCenter: typeof TextAlignCenter;
declare const index$1_TextAlignJustify: typeof TextAlignJustify;
declare const index$1_TextAlignLeft: typeof TextAlignLeft;
declare const index$1_TextAlignRight: typeof TextAlignRight;
declare const index$1_TextB: typeof TextB;
declare const index$1_TextColumns: typeof TextColumns;
declare const index$1_TextH: typeof TextH;
declare const index$1_TextHFive: typeof TextHFive;
declare const index$1_TextHFour: typeof TextHFour;
declare const index$1_TextHOne: typeof TextHOne;
declare const index$1_TextHSix: typeof TextHSix;
declare const index$1_TextHThree: typeof TextHThree;
declare const index$1_TextHTwo: typeof TextHTwo;
declare const index$1_TextIndent: typeof TextIndent;
declare const index$1_TextItalic: typeof TextItalic;
declare const index$1_TextOutdent: typeof TextOutdent;
declare const index$1_TextStrikethrough: typeof TextStrikethrough;
declare const index$1_TextT: typeof TextT;
declare const index$1_TextUnderline: typeof TextUnderline;
declare const index$1_Textbox: typeof Textbox;
declare const index$1_Thermometer: typeof Thermometer;
declare const index$1_ThermometerCold: typeof ThermometerCold;
declare const index$1_ThermometerHot: typeof ThermometerHot;
declare const index$1_ThermometerSimple: typeof ThermometerSimple;
declare const index$1_ThumbsDown: typeof ThumbsDown;
declare const index$1_ThumbsUp: typeof ThumbsUp;
declare const index$1_Ticket: typeof Ticket;
declare const index$1_TidalLogo: typeof TidalLogo;
declare const index$1_TiktokLogo: typeof TiktokLogo;
declare const index$1_Timer: typeof Timer;
declare const index$1_Tipi: typeof Tipi;
declare const index$1_ToggleLeft: typeof ToggleLeft;
declare const index$1_ToggleRight: typeof ToggleRight;
declare const index$1_Toilet: typeof Toilet;
declare const index$1_ToiletPaper: typeof ToiletPaper;
declare const index$1_Toolbox: typeof Toolbox;
declare const index$1_Tooth: typeof Tooth;
declare const index$1_Tote: typeof Tote;
declare const index$1_ToteSimple: typeof ToteSimple;
declare const index$1_Trademark: typeof Trademark;
declare const index$1_TrademarkRegistered: typeof TrademarkRegistered;
declare const index$1_TrafficCone: typeof TrafficCone;
declare const index$1_TrafficSign: typeof TrafficSign;
declare const index$1_TrafficSignal: typeof TrafficSignal;
declare const index$1_Train: typeof Train;
declare const index$1_TrainRegional: typeof TrainRegional;
declare const index$1_TrainSimple: typeof TrainSimple;
declare const index$1_Tram: typeof Tram;
declare const index$1_Translate: typeof Translate;
declare const index$1_Trash: typeof Trash;
declare const index$1_TrashSimple: typeof TrashSimple;
declare const index$1_Tray: typeof Tray;
declare const index$1_Tree: typeof Tree;
declare const index$1_TreeEvergreen: typeof TreeEvergreen;
declare const index$1_TreePalm: typeof TreePalm;
declare const index$1_TreeStructure: typeof TreeStructure;
declare const index$1_TrendDown: typeof TrendDown;
declare const index$1_TrendUp: typeof TrendUp;
declare const index$1_Triangle: typeof Triangle;
declare const index$1_Trophy: typeof Trophy;
declare const index$1_Truck: typeof Truck;
declare const index$1_TwitchLogo: typeof TwitchLogo;
declare const index$1_TwitterLogo: typeof TwitterLogo;
declare const index$1_Umbrella: typeof Umbrella;
declare const index$1_UmbrellaSimple: typeof UmbrellaSimple;
declare const index$1_Unite: typeof Unite;
declare const index$1_UniteSquare: typeof UniteSquare;
declare const index$1_Upload: typeof Upload;
declare const index$1_UploadSimple: typeof UploadSimple;
declare const index$1_Usb: typeof Usb;
declare const index$1_User: typeof User;
declare const index$1_UserCircle: typeof UserCircle;
declare const index$1_UserCircleGear: typeof UserCircleGear;
declare const index$1_UserCircleMinus: typeof UserCircleMinus;
declare const index$1_UserCirclePlus: typeof UserCirclePlus;
declare const index$1_UserFocus: typeof UserFocus;
declare const index$1_UserGear: typeof UserGear;
declare const index$1_UserList: typeof UserList;
declare const index$1_UserMinus: typeof UserMinus;
declare const index$1_UserPlus: typeof UserPlus;
declare const index$1_UserRectangle: typeof UserRectangle;
declare const index$1_UserSquare: typeof UserSquare;
declare const index$1_UserSwitch: typeof UserSwitch;
declare const index$1_Users: typeof Users;
declare const index$1_UsersFour: typeof UsersFour;
declare const index$1_UsersThree: typeof UsersThree;
declare const index$1_Van: typeof Van;
declare const index$1_Vault: typeof Vault;
declare const index$1_Vibrate: typeof Vibrate;
declare const index$1_Video: typeof Video;
declare const index$1_VideoCamera: typeof VideoCamera;
declare const index$1_VideoCameraSlash: typeof VideoCameraSlash;
declare const index$1_Vignette: typeof Vignette;
declare const index$1_VinylRecord: typeof VinylRecord;
declare const index$1_VirtualReality: typeof VirtualReality;
declare const index$1_Virus: typeof Virus;
declare const index$1_Voicemail: typeof Voicemail;
declare const index$1_Volleyball: typeof Volleyball;
declare const index$1_Wall: typeof Wall;
declare const index$1_Wallet: typeof Wallet;
declare const index$1_Warehouse: typeof Warehouse;
declare const index$1_Warning: typeof Warning;
declare const index$1_WarningCircle: typeof WarningCircle;
declare const index$1_WarningDiamond: typeof WarningDiamond;
declare const index$1_WarningOctagon: typeof WarningOctagon;
declare const index$1_Watch: typeof Watch;
declare const index$1_WaveSawtooth: typeof WaveSawtooth;
declare const index$1_WaveSine: typeof WaveSine;
declare const index$1_WaveSquare: typeof WaveSquare;
declare const index$1_WaveTriangle: typeof WaveTriangle;
declare const index$1_Waveform: typeof Waveform;
declare const index$1_Waves: typeof Waves;
declare const index$1_Webcam: typeof Webcam;
declare const index$1_WebcamSlash: typeof WebcamSlash;
declare const index$1_WebhooksLogo: typeof WebhooksLogo;
declare const index$1_WechatLogo: typeof WechatLogo;
declare const index$1_WhatsappLogo: typeof WhatsappLogo;
declare const index$1_Wheelchair: typeof Wheelchair;
declare const index$1_WheelchairMotion: typeof WheelchairMotion;
declare const index$1_WifiHigh: typeof WifiHigh;
declare const index$1_WifiLow: typeof WifiLow;
declare const index$1_WifiMedium: typeof WifiMedium;
declare const index$1_WifiNone: typeof WifiNone;
declare const index$1_WifiSlash: typeof WifiSlash;
declare const index$1_WifiX: typeof WifiX;
declare const index$1_Wind: typeof Wind;
declare const index$1_WindowsLogo: typeof WindowsLogo;
declare const index$1_Wine: typeof Wine;
declare const index$1_Wrench: typeof Wrench;
declare const index$1_X: typeof X;
declare const index$1_XCircle: typeof XCircle;
declare const index$1_XSquare: typeof XSquare;
declare const index$1_YinYang: typeof YinYang;
declare const index$1_YoutubeLogo: typeof YoutubeLogo;
declare namespace index$1 {
  export { index$1_AddressBook as AddressBook, index$1_AirTrafficControl as AirTrafficControl, index$1_Airplane as Airplane, index$1_AirplaneInFlight as AirplaneInFlight, index$1_AirplaneLanding as AirplaneLanding, index$1_AirplaneTakeoff as AirplaneTakeoff, index$1_AirplaneTilt as AirplaneTilt, index$1_Airplay as Airplay, index$1_Alarm as Alarm, index$1_Alien as Alien, index$1_AlignBottom as AlignBottom, index$1_AlignBottomSimple as AlignBottomSimple, index$1_AlignCenterHorizontal as AlignCenterHorizontal, index$1_AlignCenterHorizontalSimple as AlignCenterHorizontalSimple, index$1_AlignCenterVertical as AlignCenterVertical, index$1_AlignCenterVerticalSimple as AlignCenterVerticalSimple, index$1_AlignLeft as AlignLeft, index$1_AlignLeftSimple as AlignLeftSimple, index$1_AlignRight as AlignRight, index$1_AlignRightSimple as AlignRightSimple, index$1_AlignTop as AlignTop, index$1_AlignTopSimple as AlignTopSimple, index$1_AmazonLogo as AmazonLogo, index$1_Anchor as Anchor, index$1_AnchorSimple as AnchorSimple, index$1_AndroidLogo as AndroidLogo, index$1_AngularLogo as AngularLogo, index$1_Aperture as Aperture, index$1_AppStoreLogo as AppStoreLogo, index$1_AppWindow as AppWindow, index$1_AppleLogo as AppleLogo, index$1_ApplePodcastsLogo as ApplePodcastsLogo, index$1_Archive as Archive, index$1_ArchiveBox as ArchiveBox, index$1_ArchiveTray as ArchiveTray, index$1_Armchair as Armchair, index$1_ArrowArcLeft as ArrowArcLeft, index$1_ArrowArcRight as ArrowArcRight, index$1_ArrowBendDoubleUpLeft as ArrowBendDoubleUpLeft, index$1_ArrowBendDoubleUpRight as ArrowBendDoubleUpRight, index$1_ArrowBendDownLeft as ArrowBendDownLeft, index$1_ArrowBendDownRight as ArrowBendDownRight, index$1_ArrowBendLeftDown as ArrowBendLeftDown, index$1_ArrowBendLeftUp as ArrowBendLeftUp, index$1_ArrowBendRightDown as ArrowBendRightDown, index$1_ArrowBendRightUp as ArrowBendRightUp, index$1_ArrowBendUpLeft as ArrowBendUpLeft, index$1_ArrowBendUpRight as ArrowBendUpRight, index$1_ArrowCircleDown as ArrowCircleDown, index$1_ArrowCircleDownLeft as ArrowCircleDownLeft, index$1_ArrowCircleDownRight as ArrowCircleDownRight, index$1_ArrowCircleLeft as ArrowCircleLeft, index$1_ArrowCircleRight as ArrowCircleRight, index$1_ArrowCircleUp as ArrowCircleUp, index$1_ArrowCircleUpLeft as ArrowCircleUpLeft, index$1_ArrowCircleUpRight as ArrowCircleUpRight, index$1_ArrowClockwise as ArrowClockwise, index$1_ArrowCounterClockwise as ArrowCounterClockwise, index$1_ArrowDown as ArrowDown, index$1_ArrowDownLeft as ArrowDownLeft, index$1_ArrowDownRight as ArrowDownRight, index$1_ArrowElbowDownLeft as ArrowElbowDownLeft, index$1_ArrowElbowDownRight as ArrowElbowDownRight, index$1_ArrowElbowLeft as ArrowElbowLeft, index$1_ArrowElbowLeftDown as ArrowElbowLeftDown, index$1_ArrowElbowLeftUp as ArrowElbowLeftUp, index$1_ArrowElbowRight as ArrowElbowRight, index$1_ArrowElbowRightDown as ArrowElbowRightDown, index$1_ArrowElbowRightUp as ArrowElbowRightUp, index$1_ArrowElbowUpLeft as ArrowElbowUpLeft, index$1_ArrowElbowUpRight as ArrowElbowUpRight, index$1_ArrowFatDown as ArrowFatDown, index$1_ArrowFatLeft as ArrowFatLeft, index$1_ArrowFatLineDown as ArrowFatLineDown, index$1_ArrowFatLineLeft as ArrowFatLineLeft, index$1_ArrowFatLineRight as ArrowFatLineRight, index$1_ArrowFatLineUp as ArrowFatLineUp, index$1_ArrowFatLinesDown as ArrowFatLinesDown, index$1_ArrowFatLinesLeft as ArrowFatLinesLeft, index$1_ArrowFatLinesRight as ArrowFatLinesRight, index$1_ArrowFatLinesUp as ArrowFatLinesUp, index$1_ArrowFatRight as ArrowFatRight, index$1_ArrowFatUp as ArrowFatUp, index$1_ArrowLeft as ArrowLeft, index$1_ArrowLineDown as ArrowLineDown, index$1_ArrowLineDownLeft as ArrowLineDownLeft, index$1_ArrowLineDownRight as ArrowLineDownRight, index$1_ArrowLineLeft as ArrowLineLeft, index$1_ArrowLineRight as ArrowLineRight, index$1_ArrowLineUp as ArrowLineUp, index$1_ArrowLineUpLeft as ArrowLineUpLeft, index$1_ArrowLineUpRight as ArrowLineUpRight, index$1_ArrowRight as ArrowRight, index$1_ArrowSquareDown as ArrowSquareDown, index$1_ArrowSquareDownLeft as ArrowSquareDownLeft, index$1_ArrowSquareDownRight as ArrowSquareDownRight, index$1_ArrowSquareIn as ArrowSquareIn, index$1_ArrowSquareLeft as ArrowSquareLeft, index$1_ArrowSquareOut as ArrowSquareOut, index$1_ArrowSquareRight as ArrowSquareRight, index$1_ArrowSquareUp as ArrowSquareUp, index$1_ArrowSquareUpLeft as ArrowSquareUpLeft, index$1_ArrowSquareUpRight as ArrowSquareUpRight, index$1_ArrowUDownLeft as ArrowUDownLeft, index$1_ArrowUDownRight as ArrowUDownRight, index$1_ArrowULeftDown as ArrowULeftDown, index$1_ArrowULeftUp as ArrowULeftUp, index$1_ArrowURightDown as ArrowURightDown, index$1_ArrowURightUp as ArrowURightUp, index$1_ArrowUUpLeft as ArrowUUpLeft, index$1_ArrowUUpRight as ArrowUUpRight, index$1_ArrowUp as ArrowUp, index$1_ArrowUpLeft as ArrowUpLeft, index$1_ArrowUpRight as ArrowUpRight, index$1_ArrowsClockwise as ArrowsClockwise, index$1_ArrowsCounterClockwise as ArrowsCounterClockwise, index$1_ArrowsDownUp as ArrowsDownUp, index$1_ArrowsHorizontal as ArrowsHorizontal, index$1_ArrowsIn as ArrowsIn, index$1_ArrowsInCardinal as ArrowsInCardinal, index$1_ArrowsInLineHorizontal as ArrowsInLineHorizontal, index$1_ArrowsInLineVertical as ArrowsInLineVertical, index$1_ArrowsInSimple as ArrowsInSimple, index$1_ArrowsLeftRight as ArrowsLeftRight, index$1_ArrowsMerge as ArrowsMerge, index$1_ArrowsOut as ArrowsOut, index$1_ArrowsOutCardinal as ArrowsOutCardinal, index$1_ArrowsOutLineHorizontal as ArrowsOutLineHorizontal, index$1_ArrowsOutLineVertical as ArrowsOutLineVertical, index$1_ArrowsOutSimple as ArrowsOutSimple, index$1_ArrowsSplit as ArrowsSplit, index$1_ArrowsVertical as ArrowsVertical, index$1_Article as Article, index$1_ArticleMedium as ArticleMedium, index$1_ArticleNyTimes as ArticleNyTimes, index$1_Asterisk as Asterisk, index$1_AsteriskSimple as AsteriskSimple, index$1_At as At, index$1_Atom as Atom, index$1_Baby as Baby, index$1_Backpack as Backpack, index$1_Backspace as Backspace, index$1_Bag as Bag, index$1_BagSimple as BagSimple, index$1_Balloon as Balloon, index$1_Bandaids as Bandaids, index$1_Bank as Bank, index$1_Barbell as Barbell, index$1_Barcode as Barcode, index$1_Barricade as Barricade, index$1_Baseball as Baseball, index$1_BaseballCap as BaseballCap, index$1_Basket as Basket, index$1_Basketball as Basketball, index$1_Bathtub as Bathtub, index$1_BatteryCharging as BatteryCharging, index$1_BatteryChargingVertical as BatteryChargingVertical, index$1_BatteryEmpty as BatteryEmpty, index$1_BatteryFull as BatteryFull, index$1_BatteryHigh as BatteryHigh, index$1_BatteryLow as BatteryLow, index$1_BatteryMedium as BatteryMedium, index$1_BatteryPlus as BatteryPlus, index$1_BatteryPlusVertical as BatteryPlusVertical, index$1_BatteryVerticalEmpty as BatteryVerticalEmpty, index$1_BatteryVerticalFull as BatteryVerticalFull, index$1_BatteryVerticalHigh as BatteryVerticalHigh, index$1_BatteryVerticalLow as BatteryVerticalLow, index$1_BatteryVerticalMedium as BatteryVerticalMedium, index$1_BatteryWarning as BatteryWarning, index$1_BatteryWarningVertical as BatteryWarningVertical, index$1_Bed as Bed, index$1_BeerBottle as BeerBottle, index$1_BeerStein as BeerStein, index$1_BehanceLogo as BehanceLogo, index$1_Bell as Bell, index$1_BellRinging as BellRinging, index$1_BellSimple as BellSimple, index$1_BellSimpleRinging as BellSimpleRinging, index$1_BellSimpleSlash as BellSimpleSlash, index$1_BellSimpleZ as BellSimpleZ, index$1_BellSlash as BellSlash, index$1_BellZ as BellZ, index$1_BezierCurve as BezierCurve, index$1_Bicycle as Bicycle, index$1_Binoculars as Binoculars, index$1_Bird as Bird, index$1_Bluetooth as Bluetooth, index$1_BluetoothConnected as BluetoothConnected, index$1_BluetoothSlash as BluetoothSlash, index$1_BluetoothX as BluetoothX, index$1_Boat as Boat, index$1_Bone as Bone, index$1_Book as Book, index$1_BookBookmark as BookBookmark, index$1_BookOpen as BookOpen, index$1_BookOpenText as BookOpenText, index$1_Bookmark as Bookmark, index$1_BookmarkSimple as BookmarkSimple, index$1_Bookmarks as Bookmarks, index$1_BookmarksSimple as BookmarksSimple, index$1_Books as Books, index$1_Boot as Boot, index$1_BoundingBox as BoundingBox, index$1_BowlFood as BowlFood, index$1_BracketsAngle as BracketsAngle, index$1_BracketsCurly as BracketsCurly, index$1_BracketsRound as BracketsRound, index$1_BracketsSquare as BracketsSquare, index$1_Brain as Brain, index$1_Brandy as Brandy, index$1_Bridge as Bridge, index$1_Briefcase as Briefcase, index$1_BriefcaseMetal as BriefcaseMetal, index$1_Broadcast as Broadcast, index$1_Broom as Broom, index$1_Browser as Browser, index$1_Browsers as Browsers, index$1_Bug as Bug, index$1_BugBeetle as BugBeetle, index$1_BugDroid as BugDroid, index$1_Buildings as Buildings, index$1_Bus as Bus, index$1_Butterfly as Butterfly, index$1_Cactus as Cactus, index$1_Cake as Cake, index$1_Calculator as Calculator, index$1_Calendar as Calendar, index$1_CalendarBlank as CalendarBlank, index$1_CalendarCheck as CalendarCheck, index$1_CalendarPlus as CalendarPlus, index$1_CalendarX as CalendarX, index$1_CallBell as CallBell, index$1_Camera as Camera, index$1_CameraPlus as CameraPlus, index$1_CameraRotate as CameraRotate, index$1_CameraSlash as CameraSlash, index$1_Campfire as Campfire, index$1_Car as Car, index$1_CarProfile as CarProfile, index$1_CarSimple as CarSimple, index$1_Cardholder as Cardholder, index$1_Cards as Cards, index$1_CaretCircleDoubleDown as CaretCircleDoubleDown, index$1_CaretCircleDoubleLeft as CaretCircleDoubleLeft, index$1_CaretCircleDoubleRight as CaretCircleDoubleRight, index$1_CaretCircleDoubleUp as CaretCircleDoubleUp, index$1_CaretCircleDown as CaretCircleDown, index$1_CaretCircleLeft as CaretCircleLeft, index$1_CaretCircleRight as CaretCircleRight, index$1_CaretCircleUp as CaretCircleUp, index$1_CaretCircleUpDown as CaretCircleUpDown, index$1_CaretDoubleDown as CaretDoubleDown, index$1_CaretDoubleLeft as CaretDoubleLeft, index$1_CaretDoubleRight as CaretDoubleRight, index$1_CaretDoubleUp as CaretDoubleUp, index$1_CaretDown as CaretDown, index$1_CaretLeft as CaretLeft, index$1_CaretRight as CaretRight, index$1_CaretUp as CaretUp, index$1_CaretUpDown as CaretUpDown, index$1_Carrot as Carrot, index$1_CassetteTape as CassetteTape, index$1_CastleTurret as CastleTurret, index$1_Cat as Cat, index$1_CellSignalFull as CellSignalFull, index$1_CellSignalHigh as CellSignalHigh, index$1_CellSignalLow as CellSignalLow, index$1_CellSignalMedium as CellSignalMedium, index$1_CellSignalNone as CellSignalNone, index$1_CellSignalSlash as CellSignalSlash, index$1_CellSignalX as CellSignalX, index$1_Certificate as Certificate, index$1_Chair as Chair, index$1_Chalkboard as Chalkboard, index$1_ChalkboardSimple as ChalkboardSimple, index$1_ChalkboardTeacher as ChalkboardTeacher, index$1_Champagne as Champagne, index$1_ChargingStation as ChargingStation, index$1_ChartBar as ChartBar, index$1_ChartBarHorizontal as ChartBarHorizontal, index$1_ChartDonut as ChartDonut, index$1_ChartLine as ChartLine, index$1_ChartLineDown as ChartLineDown, index$1_ChartLineUp as ChartLineUp, index$1_ChartPie as ChartPie, index$1_ChartPieSlice as ChartPieSlice, index$1_ChartPolar as ChartPolar, index$1_ChartScatter as ChartScatter, index$1_Chat as Chat, index$1_ChatCentered as ChatCentered, index$1_ChatCenteredDots as ChatCenteredDots, index$1_ChatCenteredText as ChatCenteredText, index$1_ChatCircle as ChatCircle, index$1_ChatCircleDots as ChatCircleDots, index$1_ChatCircleText as ChatCircleText, index$1_ChatDots as ChatDots, index$1_ChatTeardrop as ChatTeardrop, index$1_ChatTeardropDots as ChatTeardropDots, index$1_ChatTeardropText as ChatTeardropText, index$1_ChatText as ChatText, index$1_Chats as Chats, index$1_ChatsCircle as ChatsCircle, index$1_ChatsTeardrop as ChatsTeardrop, index$1_Check as Check, index$1_CheckCircle as CheckCircle, index$1_CheckFat as CheckFat, index$1_CheckSquare as CheckSquare, index$1_CheckSquareOffset as CheckSquareOffset, index$1_Checks as Checks, index$1_Church as Church, index$1_Circle as Circle, index$1_CircleDashed as CircleDashed, index$1_CircleHalf as CircleHalf, index$1_CircleHalfTilt as CircleHalfTilt, index$1_CircleNotch as CircleNotch, index$1_CirclesFour as CirclesFour, index$1_CirclesThree as CirclesThree, index$1_CirclesThreePlus as CirclesThreePlus, index$1_Circuitry as Circuitry, index$1_Clipboard as Clipboard, index$1_ClipboardText as ClipboardText, index$1_Clock as Clock, index$1_ClockAfternoon as ClockAfternoon, index$1_ClockClockwise as ClockClockwise, index$1_ClockCountdown as ClockCountdown, index$1_ClockCounterClockwise as ClockCounterClockwise, index$1_ClosedCaptioning as ClosedCaptioning, index$1_Cloud as Cloud, index$1_CloudArrowDown as CloudArrowDown, index$1_CloudArrowUp as CloudArrowUp, index$1_CloudCheck as CloudCheck, index$1_CloudFog as CloudFog, index$1_CloudLightning as CloudLightning, index$1_CloudMoon as CloudMoon, index$1_CloudRain as CloudRain, index$1_CloudSlash as CloudSlash, index$1_CloudSnow as CloudSnow, index$1_CloudSun as CloudSun, index$1_CloudWarning as CloudWarning, index$1_CloudX as CloudX, index$1_Club as Club, index$1_CoatHanger as CoatHanger, index$1_CodaLogo as CodaLogo, index$1_Code as Code, index$1_CodeBlock as CodeBlock, index$1_CodeSimple as CodeSimple, index$1_CodepenLogo as CodepenLogo, index$1_CodesandboxLogo as CodesandboxLogo, index$1_Coffee as Coffee, index$1_Coin as Coin, index$1_CoinVertical as CoinVertical, index$1_Coins as Coins, index$1_Columns as Columns, index$1_Command as Command, index$1_Compass as Compass, index$1_CompassOff as CompassOff, index$1_CompassTool as CompassTool, index$1_ComputerTower as ComputerTower, index$1_Confetti as Confetti, index$1_ContactlessPayment as ContactlessPayment, index$1_Control as Control, index$1_Cookie as Cookie, index$1_CookingPot as CookingPot, index$1_Copy as Copy, index$1_CopySimple as CopySimple, index$1_Copyleft as Copyleft, index$1_Copyright as Copyright, index$1_CornersIn as CornersIn, index$1_CornersOut as CornersOut, index$1_Couch as Couch, index$1_Cpu as Cpu, index$1_CreditCard as CreditCard, index$1_Crop as Crop, index$1_Cross as Cross, index$1_Crosshair as Crosshair, index$1_CrosshairSimple as CrosshairSimple, index$1_Crown as Crown, index$1_CrownSimple as CrownSimple, index$1_Cube as Cube, index$1_CubeFocus as CubeFocus, index$1_CubeTransparent as CubeTransparent, index$1_CurrencyBtc as CurrencyBtc, index$1_CurrencyCircleDollar as CurrencyCircleDollar, index$1_CurrencyCny as CurrencyCny, index$1_CurrencyDollar as CurrencyDollar, index$1_CurrencyDollarSimple as CurrencyDollarSimple, index$1_CurrencyEth as CurrencyEth, index$1_CurrencyEur as CurrencyEur, index$1_CurrencyGbp as CurrencyGbp, index$1_CurrencyInr as CurrencyInr, index$1_CurrencyJpy as CurrencyJpy, index$1_CurrencyKrw as CurrencyKrw, index$1_CurrencyKzt as CurrencyKzt, index$1_CurrencyNgn as CurrencyNgn, index$1_CurrencyRub as CurrencyRub, index$1_Cursor as Cursor, index$1_CursorClick as CursorClick, index$1_CursorText as CursorText, index$1_Cylinder as Cylinder, index$1_Database as Database, index$1_Desktop as Desktop, index$1_DesktopTower as DesktopTower, index$1_Detective as Detective, index$1_DevToLogo as DevToLogo, index$1_DeviceMobile as DeviceMobile, index$1_DeviceMobileCamera as DeviceMobileCamera, index$1_DeviceMobileSpeaker as DeviceMobileSpeaker, index$1_DeviceTablet as DeviceTablet, index$1_DeviceTabletCamera as DeviceTabletCamera, index$1_DeviceTabletSpeaker as DeviceTabletSpeaker, index$1_Devices as Devices, index$1_Diamond as Diamond, index$1_DiamondsFour as DiamondsFour, index$1_DiceFive as DiceFive, index$1_DiceFour as DiceFour, index$1_DiceOne as DiceOne, index$1_DiceSix as DiceSix, index$1_DiceThree as DiceThree, index$1_DiceTwo as DiceTwo, index$1_Disc as Disc, index$1_DiscordLogo as DiscordLogo, index$1_Divide as Divide, index$1_Dna as Dna, index$1_Dog as Dog, index$1_Door as Door, index$1_DoorOpen as DoorOpen, index$1_Dot as Dot, index$1_DotOutline as DotOutline, index$1_DotsNine as DotsNine, index$1_DotsSix as DotsSix, index$1_DotsSixVertical as DotsSixVertical, index$1_DotsThree as DotsThree, index$1_DotsThreeCircle as DotsThreeCircle, index$1_DotsThreeCircleVertical as DotsThreeCircleVertical, index$1_DotsThreeOutline as DotsThreeOutline, index$1_DotsThreeOutlineVertical as DotsThreeOutlineVertical, index$1_DotsThreeVertical as DotsThreeVertical, index$1_Download as Download, index$1_DownloadSimple as DownloadSimple, index$1_Dress as Dress, index$1_DribbbleLogo as DribbbleLogo, index$1_Drop as Drop, index$1_DropHalf as DropHalf, index$1_DropHalfBottom as DropHalfBottom, index$1_DropboxLogo as DropboxLogo, index$1_Ear as Ear, index$1_EarSlash as EarSlash, index$1_Egg as Egg, index$1_EggCrack as EggCrack, index$1_Eject as Eject, index$1_EjectSimple as EjectSimple, index$1_Elevator as Elevator, index$1_Engine as Engine, index$1_Envelope as Envelope, index$1_EnvelopeOpen as EnvelopeOpen, index$1_EnvelopeSimple as EnvelopeSimple, index$1_EnvelopeSimpleOpen as EnvelopeSimpleOpen, index$1_Equalizer as Equalizer, index$1_Equals as Equals, index$1_Eraser as Eraser, index$1_EscalatorDown as EscalatorDown, index$1_EscalatorUp as EscalatorUp, index$1_Exam as Exam, index$1_Exclude as Exclude, index$1_ExcludeSquare as ExcludeSquare, index$1_Export as Export, index$1_Eye as Eye, index$1_EyeClosed as EyeClosed, index$1_EyeSlash as EyeSlash, index$1_Eyedropper as Eyedropper, index$1_EyedropperSample as EyedropperSample, index$1_Eyeglasses as Eyeglasses, index$1_FaceMask as FaceMask, index$1_FacebookLogo as FacebookLogo, index$1_Factory as Factory, index$1_Faders as Faders, index$1_FadersHorizontal as FadersHorizontal, index$1_Fan as Fan, index$1_FastForward as FastForward, index$1_FastForwardCircle as FastForwardCircle, index$1_Feather as Feather, index$1_FigmaLogo as FigmaLogo, index$1_File as File, index$1_FileArchive as FileArchive, index$1_FileArrowDown as FileArrowDown, index$1_FileArrowUp as FileArrowUp, index$1_FileAudio as FileAudio, index$1_FileCloud as FileCloud, index$1_FileCode as FileCode, index$1_FileCss as FileCss, index$1_FileCsv as FileCsv, index$1_FileDashed as FileDashed, index$1_FileDoc as FileDoc, index$1_FileHtml as FileHtml, index$1_FileImage as FileImage, index$1_FileJpg as FileJpg, index$1_FileJs as FileJs, index$1_FileJsx as FileJsx, index$1_FileLock as FileLock, index$1_FileMinus as FileMinus, index$1_FilePdf as FilePdf, index$1_FilePlus as FilePlus, index$1_FilePng as FilePng, index$1_FilePpt as FilePpt, index$1_FileRs as FileRs, index$1_FileSearch as FileSearch, index$1_FileSql as FileSql, index$1_FileSvg as FileSvg, index$1_FileText as FileText, index$1_FileTs as FileTs, index$1_FileTsx as FileTsx, index$1_FileVideo as FileVideo, index$1_FileVue as FileVue, index$1_FileX as FileX, index$1_FileXls as FileXls, index$1_FileZip as FileZip, index$1_Files as Files, index$1_FilmReel as FilmReel, index$1_FilmScript as FilmScript, index$1_FilmSlate as FilmSlate, index$1_FilmStrip as FilmStrip, index$1_Fingerprint as Fingerprint, index$1_FingerprintSimple as FingerprintSimple, index$1_FinnTheHuman as FinnTheHuman, index$1_Fire as Fire, index$1_FireExtinguisher as FireExtinguisher, index$1_FireSimple as FireSimple, index$1_FirstAid as FirstAid, index$1_FirstAidKit as FirstAidKit, index$1_Fish as Fish, index$1_FishSimple as FishSimple, index$1_Flag as Flag, index$1_FlagBanner as FlagBanner, index$1_FlagCheckered as FlagCheckered, index$1_FlagPennant as FlagPennant, index$1_Flame as Flame, index$1_Flashlight as Flashlight, index$1_Flask as Flask, index$1_FloppyDisk as FloppyDisk, index$1_FloppyDiskBack as FloppyDiskBack, index$1_FlowArrow as FlowArrow, index$1_Flower as Flower, index$1_FlowerLotus as FlowerLotus, index$1_FlowerTulip as FlowerTulip, index$1_FlyingSaucer as FlyingSaucer, index$1_Folder as Folder, index$1_FolderDashed as FolderDashed, index$1_FolderLock as FolderLock, index$1_FolderMinus as FolderMinus, index$1_FolderNotch as FolderNotch, index$1_FolderNotchMinus as FolderNotchMinus, index$1_FolderNotchOpen as FolderNotchOpen, index$1_FolderNotchPlus as FolderNotchPlus, index$1_FolderOpen as FolderOpen, index$1_FolderPlus as FolderPlus, index$1_FolderSimple as FolderSimple, index$1_FolderSimpleDashed as FolderSimpleDashed, index$1_FolderSimpleLock as FolderSimpleLock, index$1_FolderSimpleMinus as FolderSimpleMinus, index$1_FolderSimplePlus as FolderSimplePlus, index$1_FolderSimpleStar as FolderSimpleStar, index$1_FolderSimpleUser as FolderSimpleUser, index$1_FolderStar as FolderStar, index$1_FolderUser as FolderUser, index$1_Folders as Folders, index$1_Football as Football, index$1_Footprints as Footprints, index$1_ForkKnife as ForkKnife, index$1_FrameCorners as FrameCorners, index$1_FramerLogo as FramerLogo, index$1_Function as Function, index$1_Funnel as Funnel, index$1_FunnelSimple as FunnelSimple, index$1_GameController as GameController, index$1_Garage as Garage, index$1_GasCan as GasCan, index$1_GasPump as GasPump, index$1_Gauge as Gauge, index$1_Gavel as Gavel, index$1_Gear as Gear, index$1_GearFine as GearFine, index$1_GearSix as GearSix, index$1_GenderFemale as GenderFemale, index$1_GenderIntersex as GenderIntersex, index$1_GenderMale as GenderMale, index$1_GenderNeuter as GenderNeuter, index$1_GenderNonbinary as GenderNonbinary, index$1_GenderTransgender as GenderTransgender, index$1_Ghost as Ghost, index$1_Gif as Gif, index$1_Gift as Gift, index$1_GitBranch as GitBranch, index$1_GitCommit as GitCommit, index$1_GitDiff as GitDiff, index$1_GitFork as GitFork, index$1_GitMerge as GitMerge, index$1_GitPullRequest as GitPullRequest, index$1_GithubLogo as GithubLogo, index$1_GitlabLogo as GitlabLogo, index$1_GitlabLogoSimple as GitlabLogoSimple, index$1_Globe as Globe, index$1_GlobeHemisphereEast as GlobeHemisphereEast, index$1_GlobeHemisphereWest as GlobeHemisphereWest, index$1_GlobeSimple as GlobeSimple, index$1_GlobeStand as GlobeStand, index$1_Goggles as Goggles, index$1_GoodreadsLogo as GoodreadsLogo, index$1_GoogleCardboardLogo as GoogleCardboardLogo, index$1_GoogleChromeLogo as GoogleChromeLogo, index$1_GoogleDriveLogo as GoogleDriveLogo, index$1_GoogleLogo as GoogleLogo, index$1_GooglePhotosLogo as GooglePhotosLogo, index$1_GooglePlayLogo as GooglePlayLogo, index$1_GooglePodcastsLogo as GooglePodcastsLogo, index$1_Gradient as Gradient, index$1_GraduationCap as GraduationCap, index$1_Grains as Grains, index$1_GrainsSlash as GrainsSlash, index$1_Graph as Graph, index$1_GridFour as GridFour, index$1_GridNine as GridNine, index$1_Guitar as Guitar, index$1_Hamburger as Hamburger, index$1_Hammer as Hammer, index$1_Hand as Hand, index$1_HandCoins as HandCoins, index$1_HandEye as HandEye, index$1_HandFist as HandFist, index$1_HandGrabbing as HandGrabbing, index$1_HandHeart as HandHeart, index$1_HandPalm as HandPalm, index$1_HandPointing as HandPointing, index$1_HandSoap as HandSoap, index$1_HandSwipeLeft as HandSwipeLeft, index$1_HandSwipeRight as HandSwipeRight, index$1_HandTap as HandTap, index$1_HandWaving as HandWaving, index$1_Handbag as Handbag, index$1_HandbagSimple as HandbagSimple, index$1_HandsClapping as HandsClapping, index$1_HandsPraying as HandsPraying, index$1_Handshake as Handshake, index$1_HardDrive as HardDrive, index$1_HardDrives as HardDrives, index$1_Hash as Hash, index$1_HashStraight as HashStraight, index$1_Headlights as Headlights, index$1_Headphones as Headphones, index$1_Headset as Headset, index$1_Heart as Heart, index$1_HeartBreak as HeartBreak, index$1_HeartHalf as HeartHalf, index$1_HeartStraight as HeartStraight, index$1_HeartStraightBreak as HeartStraightBreak, index$1_Heartbeat as Heartbeat, index$1_Hexagon as Hexagon, index$1_HighHeel as HighHeel, index$1_HighlighterCircle as HighlighterCircle, index$1_Hoodie as Hoodie, index$1_Horse as Horse, index$1_Hourglass as Hourglass, index$1_HourglassHigh as HourglassHigh, index$1_HourglassLow as HourglassLow, index$1_HourglassMedium as HourglassMedium, index$1_HourglassSimple as HourglassSimple, index$1_HourglassSimpleHigh as HourglassSimpleHigh, index$1_HourglassSimpleLow as HourglassSimpleLow, index$1_HourglassSimpleMedium as HourglassSimpleMedium, index$1_House as House, index$1_HouseLine as HouseLine, index$1_HouseSimple as HouseSimple, index$1_IceCream as IceCream, index$1_IdentificationBadge as IdentificationBadge, index$1_IdentificationCard as IdentificationCard, index$1_Image as Image, index$1_ImageSquare as ImageSquare, index$1_Images as Images, index$1_ImagesSquare as ImagesSquare, index$1_Infinity as Infinity, index$1_Info as Info, index$1_InstagramLogo as InstagramLogo, index$1_Intersect as Intersect, index$1_IntersectSquare as IntersectSquare, index$1_IntersectThree as IntersectThree, index$1_Jeep as Jeep, index$1_Kanban as Kanban, index$1_Key as Key, index$1_KeyReturn as KeyReturn, index$1_Keyboard as Keyboard, index$1_Keyhole as Keyhole, index$1_Knife as Knife, index$1_Ladder as Ladder, index$1_LadderSimple as LadderSimple, index$1_Lamp as Lamp, index$1_Laptop as Laptop, index$1_Layout as Layout, index$1_Leaf as Leaf, index$1_Lifebuoy as Lifebuoy, index$1_Lightbulb as Lightbulb, index$1_LightbulbFilament as LightbulbFilament, index$1_Lighthouse as Lighthouse, index$1_Lightning as Lightning, index$1_LightningA as LightningA, index$1_LightningSlash as LightningSlash, index$1_LineSegment as LineSegment, index$1_LineSegments as LineSegments, index$1_Link as Link, index$1_LinkBreak as LinkBreak, index$1_LinkSimple as LinkSimple, index$1_LinkSimpleBreak as LinkSimpleBreak, index$1_LinkSimpleHorizontal as LinkSimpleHorizontal, index$1_LinkSimpleHorizontalBreak as LinkSimpleHorizontalBreak, index$1_LinkedinLogo as LinkedinLogo, index$1_LinuxLogo as LinuxLogo, index$1_List as List, index$1_ListBullets as ListBullets, index$1_ListChecks as ListChecks, index$1_ListDashes as ListDashes, index$1_ListMagnifyingGlass as ListMagnifyingGlass, index$1_ListNumbers as ListNumbers, index$1_ListPlus as ListPlus, index$1_Lock as Lock, index$1_LockKey as LockKey, index$1_LockKeyOpen as LockKeyOpen, index$1_LockLaminated as LockLaminated, index$1_LockLaminatedOpen as LockLaminatedOpen, index$1_LockOpen as LockOpen, index$1_LockSimple as LockSimple, index$1_LockSimpleOpen as LockSimpleOpen, index$1_Lockers as Lockers, index$1_MagicWand as MagicWand, index$1_Magnet as Magnet, index$1_MagnetStraight as MagnetStraight, index$1_MagnifyingGlass as MagnifyingGlass, index$1_MagnifyingGlassMinus as MagnifyingGlassMinus, index$1_MagnifyingGlassPlus as MagnifyingGlassPlus, index$1_MapPin as MapPin, index$1_MapPinLine as MapPinLine, index$1_MapTrifold as MapTrifold, index$1_MarkerCircle as MarkerCircle, index$1_Martini as Martini, index$1_MaskHappy as MaskHappy, index$1_MaskSad as MaskSad, index$1_MathOperations as MathOperations, index$1_Medal as Medal, index$1_MedalMilitary as MedalMilitary, index$1_MediumLogo as MediumLogo, index$1_Megaphone as Megaphone, index$1_MegaphoneSimple as MegaphoneSimple, index$1_MessengerLogo as MessengerLogo, index$1_MetaLogo as MetaLogo, index$1_Metronome as Metronome, index$1_Microphone as Microphone, index$1_MicrophoneSlash as MicrophoneSlash, index$1_MicrophoneStage as MicrophoneStage, index$1_MicrosoftExcelLogo as MicrosoftExcelLogo, index$1_MicrosoftOutlookLogo as MicrosoftOutlookLogo, index$1_MicrosoftPowerpointLogo as MicrosoftPowerpointLogo, index$1_MicrosoftTeamsLogo as MicrosoftTeamsLogo, index$1_MicrosoftWordLogo as MicrosoftWordLogo, index$1_Minus as Minus, index$1_MinusCircle as MinusCircle, index$1_MinusSquare as MinusSquare, index$1_Money as Money, index$1_Monitor as Monitor, index$1_MonitorPlay as MonitorPlay, index$1_Moon as Moon, index$1_MoonStars as MoonStars, index$1_Moped as Moped, index$1_MopedFront as MopedFront, index$1_Mosque as Mosque, index$1_Motorcycle as Motorcycle, index$1_Mountains as Mountains, index$1_Mouse as Mouse, index$1_MouseSimple as MouseSimple, index$1_MusicNote as MusicNote, index$1_MusicNoteSimple as MusicNoteSimple, index$1_MusicNotes as MusicNotes, index$1_MusicNotesPlus as MusicNotesPlus, index$1_MusicNotesSimple as MusicNotesSimple, index$1_NavigationArrow as NavigationArrow, index$1_Needle as Needle, index$1_Newspaper as Newspaper, index$1_NewspaperClipping as NewspaperClipping, index$1_Notches as Notches, index$1_Note as Note, index$1_NoteBlank as NoteBlank, index$1_NotePencil as NotePencil, index$1_Notebook as Notebook, Notepad$1 as Notepad, index$1_Notification as Notification, index$1_NotionLogo as NotionLogo, index$1_NumberCircleEight as NumberCircleEight, index$1_NumberCircleFive as NumberCircleFive, index$1_NumberCircleFour as NumberCircleFour, index$1_NumberCircleNine as NumberCircleNine, index$1_NumberCircleOne as NumberCircleOne, index$1_NumberCircleSeven as NumberCircleSeven, index$1_NumberCircleSix as NumberCircleSix, index$1_NumberCircleThree as NumberCircleThree, index$1_NumberCircleTwo as NumberCircleTwo, index$1_NumberCircleZero as NumberCircleZero, index$1_NumberEight as NumberEight, index$1_NumberFive as NumberFive, index$1_NumberFour as NumberFour, index$1_NumberNine as NumberNine, index$1_NumberOne as NumberOne, index$1_NumberSeven as NumberSeven, index$1_NumberSix as NumberSix, index$1_NumberSquareEight as NumberSquareEight, index$1_NumberSquareFive as NumberSquareFive, index$1_NumberSquareFour as NumberSquareFour, index$1_NumberSquareNine as NumberSquareNine, index$1_NumberSquareOne as NumberSquareOne, index$1_NumberSquareSeven as NumberSquareSeven, index$1_NumberSquareSix as NumberSquareSix, index$1_NumberSquareThree as NumberSquareThree, index$1_NumberSquareTwo as NumberSquareTwo, index$1_NumberSquareZero as NumberSquareZero, index$1_NumberThree as NumberThree, index$1_NumberTwo as NumberTwo, index$1_NumberZero as NumberZero, index$1_Nut as Nut, index$1_NyTimesLogo as NyTimesLogo, index$1_Octagon as Octagon, index$1_OfficeChair as OfficeChair, index$1_Option as Option, index$1_OrangeSlice as OrangeSlice, index$1_Package as Package, index$1_PaintBrush as PaintBrush, index$1_PaintBrushBroad as PaintBrushBroad, index$1_PaintBrushHousehold as PaintBrushHousehold, index$1_PaintBucket as PaintBucket, index$1_PaintRoller as PaintRoller, index$1_Palette as Palette, index$1_Pants as Pants, index$1_PaperPlane as PaperPlane, index$1_PaperPlaneRight as PaperPlaneRight, index$1_PaperPlaneTilt as PaperPlaneTilt, index$1_Paperclip as Paperclip, index$1_PaperclipHorizontal as PaperclipHorizontal, index$1_Parachute as Parachute, index$1_Paragraph as Paragraph, index$1_Parallelogram as Parallelogram, index$1_Park as Park, index$1_Password as Password, index$1_Path as Path, index$1_PatreonLogo as PatreonLogo, index$1_Pause as Pause, index$1_PauseCircle as PauseCircle, index$1_PawPrint as PawPrint, index$1_PaypalLogo as PaypalLogo, index$1_Peace as Peace, index$1_Pen as Pen, index$1_PenNib as PenNib, index$1_PenNibStraight as PenNibStraight, index$1_Pencil as Pencil, index$1_PencilCircle as PencilCircle, index$1_PencilLine as PencilLine, index$1_PencilSimple as PencilSimple, index$1_PencilSimpleLine as PencilSimpleLine, index$1_PencilSimpleSlash as PencilSimpleSlash, index$1_PencilSlash as PencilSlash, index$1_Pentagram as Pentagram, index$1_Pepper as Pepper, index$1_Percent as Percent, index$1_Person as Person, index$1_PersonArmsSpread as PersonArmsSpread, index$1_PersonSimple as PersonSimple, index$1_PersonSimpleBike as PersonSimpleBike, index$1_PersonSimpleRun as PersonSimpleRun, index$1_PersonSimpleThrow as PersonSimpleThrow, index$1_PersonSimpleWalk as PersonSimpleWalk, index$1_Perspective as Perspective, index$1_Phone as Phone, index$1_PhoneCall as PhoneCall, index$1_PhoneDisconnect as PhoneDisconnect, index$1_PhoneIncoming as PhoneIncoming, index$1_PhoneOutgoing as PhoneOutgoing, index$1_PhonePlus as PhonePlus, index$1_PhoneSlash as PhoneSlash, index$1_PhoneX as PhoneX, index$1_PhosphorLogo as PhosphorLogo, index$1_Pi as Pi, index$1_PianoKeys as PianoKeys, index$1_PictureInPicture as PictureInPicture, index$1_PiggyBank as PiggyBank, index$1_Pill as Pill, index$1_PinterestLogo as PinterestLogo, index$1_Pinwheel as Pinwheel, index$1_Pizza as Pizza, index$1_Placeholder as Placeholder, index$1_Planet as Planet, index$1_Plant as Plant, index$1_Play as Play, index$1_PlayCircle as PlayCircle, index$1_PlayPause as PlayPause, index$1_Playlist as Playlist, index$1_Plug as Plug, index$1_PlugCharging as PlugCharging, index$1_Plugs as Plugs, index$1_PlugsConnected as PlugsConnected, index$1_Plus as Plus, index$1_PlusCircle as PlusCircle, index$1_PlusMinus as PlusMinus, index$1_PlusSquare as PlusSquare, index$1_PokerChip as PokerChip, index$1_PoliceCar as PoliceCar, index$1_Polygon as Polygon, index$1_Popcorn as Popcorn, index$1_PottedPlant as PottedPlant, index$1_Power as Power, index$1_Prescription as Prescription, index$1_Presentation as Presentation, index$1_PresentationChart as PresentationChart, index$1_Printer as Printer, index$1_Prohibit as Prohibit, index$1_ProhibitInset as ProhibitInset, index$1_ProjectorScreen as ProjectorScreen, index$1_ProjectorScreenChart as ProjectorScreenChart, index$1_Pulse as Pulse, index$1_PushPin as PushPin, index$1_PushPinSimple as PushPinSimple, index$1_PushPinSimpleSlash as PushPinSimpleSlash, index$1_PushPinSlash as PushPinSlash, index$1_PuzzlePiece as PuzzlePiece, index$1_QrCode as QrCode, index$1_Question as Question, index$1_Queue as Queue, index$1_Quotes as Quotes, index$1_Radical as Radical, index$1_Radio as Radio, index$1_RadioButton as RadioButton, index$1_Radioactive as Radioactive, index$1_Rainbow as Rainbow, index$1_RainbowCloud as RainbowCloud, index$1_ReadCvLogo as ReadCvLogo, index$1_Receipt as Receipt, index$1_ReceiptX as ReceiptX, Record$1 as Record, index$1_Rectangle as Rectangle, index$1_Recycle as Recycle, index$1_RedditLogo as RedditLogo, index$1_Repeat as Repeat, index$1_RepeatOnce as RepeatOnce, index$1_Rewind as Rewind, index$1_RewindCircle as RewindCircle, index$1_RoadHorizon as RoadHorizon, index$1_Robot as Robot, index$1_Rocket as Rocket, index$1_RocketLaunch as RocketLaunch, index$1_Rows as Rows, index$1_Rss as Rss, index$1_RssSimple as RssSimple, index$1_Rug as Rug, index$1_Ruler as Ruler, index$1_Scales as Scales, index$1_Scan as Scan, index$1_Scissors as Scissors, index$1_Scooter as Scooter, index$1_Screencast as Screencast, index$1_ScribbleLoop as ScribbleLoop, index$1_Scroll as Scroll, index$1_Seal as Seal, index$1_SealCheck as SealCheck, index$1_SealQuestion as SealQuestion, index$1_SealWarning as SealWarning, index$1_Selection as Selection, index$1_SelectionAll as SelectionAll, index$1_SelectionBackground as SelectionBackground, index$1_SelectionForeground as SelectionForeground, index$1_SelectionInverse as SelectionInverse, index$1_SelectionPlus as SelectionPlus, index$1_SelectionSlash as SelectionSlash, index$1_Shapes as Shapes, index$1_Share as Share, index$1_ShareFat as ShareFat, index$1_ShareNetwork as ShareNetwork, index$1_Shield as Shield, index$1_ShieldCheck as ShieldCheck, index$1_ShieldCheckered as ShieldCheckered, index$1_ShieldChevron as ShieldChevron, index$1_ShieldPlus as ShieldPlus, index$1_ShieldSlash as ShieldSlash, index$1_ShieldStar as ShieldStar, index$1_ShieldWarning as ShieldWarning, index$1_ShirtFolded as ShirtFolded, index$1_ShootingStar as ShootingStar, index$1_ShoppingBag as ShoppingBag, index$1_ShoppingBagOpen as ShoppingBagOpen, index$1_ShoppingCart as ShoppingCart, index$1_ShoppingCartSimple as ShoppingCartSimple, index$1_Shower as Shower, index$1_Shrimp as Shrimp, index$1_Shuffle as Shuffle, index$1_ShuffleAngular as ShuffleAngular, index$1_ShuffleSimple as ShuffleSimple, index$1_Sidebar as Sidebar, index$1_SidebarSimple as SidebarSimple, index$1_Sigma as Sigma, index$1_SignIn as SignIn, index$1_SignOut as SignOut, index$1_Signature as Signature, index$1_Signpost as Signpost, index$1_SimCard as SimCard, index$1_Siren as Siren, index$1_SketchLogo as SketchLogo, index$1_SkipBack as SkipBack, index$1_SkipBackCircle as SkipBackCircle, index$1_SkipForward as SkipForward, index$1_SkipForwardCircle as SkipForwardCircle, index$1_Skull as Skull, index$1_SlackLogo as SlackLogo, index$1_Sliders as Sliders, index$1_SlidersHorizontal as SlidersHorizontal, index$1_Slideshow as Slideshow, index$1_Smiley as Smiley, index$1_SmileyAngry as SmileyAngry, index$1_SmileyBlank as SmileyBlank, index$1_SmileyMeh as SmileyMeh, index$1_SmileyNervous as SmileyNervous, index$1_SmileySad as SmileySad, index$1_SmileySticker as SmileySticker, index$1_SmileyWink as SmileyWink, index$1_SmileyXEyes as SmileyXEyes, index$1_SnapchatLogo as SnapchatLogo, index$1_Sneaker as Sneaker, index$1_SneakerMove as SneakerMove, index$1_Snowflake as Snowflake, index$1_SoccerBall as SoccerBall, index$1_SortAscending as SortAscending, index$1_SortDescending as SortDescending, index$1_SoundcloudLogo as SoundcloudLogo, index$1_Spade as Spade, index$1_Sparkle as Sparkle, index$1_SpeakerHifi as SpeakerHifi, index$1_SpeakerHigh as SpeakerHigh, index$1_SpeakerLow as SpeakerLow, index$1_SpeakerNone as SpeakerNone, index$1_SpeakerSimpleHigh as SpeakerSimpleHigh, index$1_SpeakerSimpleLow as SpeakerSimpleLow, index$1_SpeakerSimpleNone as SpeakerSimpleNone, index$1_SpeakerSimpleSlash as SpeakerSimpleSlash, index$1_SpeakerSimpleX as SpeakerSimpleX, index$1_SpeakerSlash as SpeakerSlash, index$1_SpeakerX as SpeakerX, index$1_Spinner as Spinner, index$1_SpinnerGap as SpinnerGap, index$1_Spiral as Spiral, index$1_SplitHorizontal as SplitHorizontal, index$1_SplitVertical as SplitVertical, index$1_SpotifyLogo as SpotifyLogo, index$1_Square as Square, index$1_SquareHalf as SquareHalf, index$1_SquareHalfBottom as SquareHalfBottom, index$1_SquareLogo as SquareLogo, index$1_SquareSplitHorizontal as SquareSplitHorizontal, index$1_SquareSplitVertical as SquareSplitVertical, index$1_SquaresFour as SquaresFour, index$1_Stack as Stack, index$1_StackOverflowLogo as StackOverflowLogo, index$1_StackSimple as StackSimple, index$1_Stairs as Stairs, index$1_Stamp as Stamp, index$1_Star as Star, index$1_StarAndCrescent as StarAndCrescent, index$1_StarFour as StarFour, index$1_StarHalf as StarHalf, index$1_StarOfDavid as StarOfDavid, index$1_SteeringWheel as SteeringWheel, index$1_Steps as Steps, index$1_Stethoscope as Stethoscope, index$1_Sticker as Sticker, index$1_Stool as Stool, index$1_Stop as Stop, index$1_StopCircle as StopCircle, index$1_Storefront as Storefront, index$1_Strategy as Strategy, index$1_StripeLogo as StripeLogo, index$1_Student as Student, index$1_Subtitles as Subtitles, index$1_Subtract as Subtract, index$1_SubtractSquare as SubtractSquare, index$1_Suitcase as Suitcase, index$1_SuitcaseRolling as SuitcaseRolling, index$1_SuitcaseSimple as SuitcaseSimple, index$1_Sun as Sun, index$1_SunDim as SunDim, index$1_SunHorizon as SunHorizon, index$1_Sunglasses as Sunglasses, index$1_Swap as Swap, index$1_Swatches as Swatches, index$1_SwimmingPool as SwimmingPool, index$1_Sword as Sword, index$1_Synagogue as Synagogue, index$1_Syringe as Syringe, index$1_TShirt as TShirt, index$1_Table as Table, index$1_Tabs as Tabs, index$1_Tag as Tag, index$1_TagChevron as TagChevron, index$1_TagSimple as TagSimple, index$1_Target as Target, index$1_Taxi as Taxi, index$1_TelegramLogo as TelegramLogo, index$1_Television as Television, index$1_TelevisionSimple as TelevisionSimple, index$1_TennisBall as TennisBall, index$1_Tent as Tent, index$1_Terminal as Terminal, index$1_TerminalWindow as TerminalWindow, index$1_TestTube as TestTube, index$1_TextAUnderline as TextAUnderline, index$1_TextAa as TextAa, index$1_TextAlignCenter as TextAlignCenter, index$1_TextAlignJustify as TextAlignJustify, index$1_TextAlignLeft as TextAlignLeft, index$1_TextAlignRight as TextAlignRight, index$1_TextB as TextB, index$1_TextColumns as TextColumns, index$1_TextH as TextH, index$1_TextHFive as TextHFive, index$1_TextHFour as TextHFour, index$1_TextHOne as TextHOne, index$1_TextHSix as TextHSix, index$1_TextHThree as TextHThree, index$1_TextHTwo as TextHTwo, index$1_TextIndent as TextIndent, index$1_TextItalic as TextItalic, index$1_TextOutdent as TextOutdent, index$1_TextStrikethrough as TextStrikethrough, index$1_TextT as TextT, index$1_TextUnderline as TextUnderline, index$1_Textbox as Textbox, index$1_Thermometer as Thermometer, index$1_ThermometerCold as ThermometerCold, index$1_ThermometerHot as ThermometerHot, index$1_ThermometerSimple as ThermometerSimple, index$1_ThumbsDown as ThumbsDown, index$1_ThumbsUp as ThumbsUp, index$1_Ticket as Ticket, index$1_TidalLogo as TidalLogo, index$1_TiktokLogo as TiktokLogo, index$1_Timer as Timer, index$1_Tipi as Tipi, index$1_ToggleLeft as ToggleLeft, index$1_ToggleRight as ToggleRight, index$1_Toilet as Toilet, index$1_ToiletPaper as ToiletPaper, index$1_Toolbox as Toolbox, index$1_Tooth as Tooth, index$1_Tote as Tote, index$1_ToteSimple as ToteSimple, index$1_Trademark as Trademark, index$1_TrademarkRegistered as TrademarkRegistered, index$1_TrafficCone as TrafficCone, index$1_TrafficSign as TrafficSign, index$1_TrafficSignal as TrafficSignal, index$1_Train as Train, index$1_TrainRegional as TrainRegional, index$1_TrainSimple as TrainSimple, index$1_Tram as Tram, index$1_Translate as Translate, index$1_Trash as Trash, index$1_TrashSimple as TrashSimple, index$1_Tray as Tray, index$1_Tree as Tree, index$1_TreeEvergreen as TreeEvergreen, index$1_TreePalm as TreePalm, index$1_TreeStructure as TreeStructure, index$1_TrendDown as TrendDown, index$1_TrendUp as TrendUp, index$1_Triangle as Triangle, index$1_Trophy as Trophy, index$1_Truck as Truck, index$1_TwitchLogo as TwitchLogo, index$1_TwitterLogo as TwitterLogo, index$1_Umbrella as Umbrella, index$1_UmbrellaSimple as UmbrellaSimple, index$1_Unite as Unite, index$1_UniteSquare as UniteSquare, index$1_Upload as Upload, index$1_UploadSimple as UploadSimple, index$1_Usb as Usb, index$1_User as User, index$1_UserCircle as UserCircle, index$1_UserCircleGear as UserCircleGear, index$1_UserCircleMinus as UserCircleMinus, index$1_UserCirclePlus as UserCirclePlus, index$1_UserFocus as UserFocus, index$1_UserGear as UserGear, index$1_UserList as UserList, index$1_UserMinus as UserMinus, index$1_UserPlus as UserPlus, index$1_UserRectangle as UserRectangle, index$1_UserSquare as UserSquare, index$1_UserSwitch as UserSwitch, index$1_Users as Users, index$1_UsersFour as UsersFour, index$1_UsersThree as UsersThree, index$1_Van as Van, index$1_Vault as Vault, index$1_Vibrate as Vibrate, index$1_Video as Video, index$1_VideoCamera as VideoCamera, index$1_VideoCameraSlash as VideoCameraSlash, index$1_Vignette as Vignette, index$1_VinylRecord as VinylRecord, index$1_VirtualReality as VirtualReality, index$1_Virus as Virus, index$1_Voicemail as Voicemail, index$1_Volleyball as Volleyball, index$1_Wall as Wall, index$1_Wallet as Wallet, index$1_Warehouse as Warehouse, index$1_Warning as Warning, index$1_WarningCircle as WarningCircle, index$1_WarningDiamond as WarningDiamond, index$1_WarningOctagon as WarningOctagon, index$1_Watch as Watch, index$1_WaveSawtooth as WaveSawtooth, index$1_WaveSine as WaveSine, index$1_WaveSquare as WaveSquare, index$1_WaveTriangle as WaveTriangle, index$1_Waveform as Waveform, index$1_Waves as Waves, index$1_Webcam as Webcam, index$1_WebcamSlash as WebcamSlash, index$1_WebhooksLogo as WebhooksLogo, index$1_WechatLogo as WechatLogo, index$1_WhatsappLogo as WhatsappLogo, index$1_Wheelchair as Wheelchair, index$1_WheelchairMotion as WheelchairMotion, index$1_WifiHigh as WifiHigh, index$1_WifiLow as WifiLow, index$1_WifiMedium as WifiMedium, index$1_WifiNone as WifiNone, index$1_WifiSlash as WifiSlash, index$1_WifiX as WifiX, index$1_Wind as Wind, index$1_WindowsLogo as WindowsLogo, index$1_Wine as Wine, index$1_Wrench as Wrench, index$1_X as X, index$1_XCircle as XCircle, index$1_XSquare as XSquare, index$1_YinYang as YinYang, index$1_YoutubeLogo as YoutubeLogo };
}

declare const Notepad: React$1.FC<IconProps>;

declare const index_DefaultIcon: typeof DefaultIcon;
declare const index_DocxIcon: typeof DocxIcon;
declare const index_FormIcon: typeof FormIcon;
declare const index_Notepad: typeof Notepad;
declare const index_OnenoteIcon: typeof OnenoteIcon;
declare const index_PptIcon: typeof PptIcon;
declare const index_RoundAlt: typeof RoundAlt;
declare const index_SearchIcon: typeof SearchIcon;
declare const index_TxtIcon: typeof TxtIcon;
declare const index_XlsxIcon: typeof XlsxIcon;
declare namespace index {
  export { index_DefaultIcon as DefaultIcon, index_DocxIcon as DocxIcon, index_FormIcon as FormIcon, index_Notepad as Notepad, index_OnenoteIcon as OnenoteIcon, index_PptIcon as PptIcon, index_RoundAlt as RoundAlt, index_SearchIcon as SearchIcon, index_TxtIcon as TxtIcon, index_XlsxIcon as XlsxIcon };
}

type Registry = Record<string, Record<string, any>>;
type DefaultMap = Record<string, any>;
declare const iconsByCollection: Registry;
declare const iconsByDefault: DefaultMap;
type IconUsageName = string;
type IconCollectionName = string;

declare const Avatar3d0112: React$1.FC<AvatarProps>;

declare const Avatar3d01120: React$1.FC<AvatarProps>;

declare const Avatar3d01: React$1.FC<AvatarProps>;

declare const Avatar3d01144: React$1.FC<AvatarProps>;

declare const Avatar3d011536: React$1.FC<AvatarProps>;

declare const Avatar3d01168: React$1.FC<AvatarProps>;

declare const Avatar3d01192: React$1.FC<AvatarProps>;

declare const Avatar3d01240: React$1.FC<AvatarProps>;

declare const Avatar3d0136: React$1.FC<AvatarProps>;

declare const Avatar3d01384: React$1.FC<AvatarProps>;

declare const Avatar3d0160: React$1.FC<AvatarProps>;

declare const Avatar3d0172: React$1.FC<AvatarProps>;

declare const Avatar3d01768: React$1.FC<AvatarProps>;

declare const Avatar3d0184: React$1.FC<AvatarProps>;

declare const Avatar3d0196: React$1.FC<AvatarProps>;

declare const Avatar3d0212: React$1.FC<AvatarProps>;

declare const Avatar3d02120: React$1.FC<AvatarProps>;

declare const Avatar3d02: React$1.FC<AvatarProps>;

declare const Avatar3d02144: React$1.FC<AvatarProps>;

declare const Avatar3d021536: React$1.FC<AvatarProps>;

declare const Avatar3d02168: React$1.FC<AvatarProps>;

declare const Avatar3d02192: React$1.FC<AvatarProps>;

declare const Avatar3d02240: React$1.FC<AvatarProps>;

declare const Avatar3d0236: React$1.FC<AvatarProps>;

declare const Avatar3d02384: React$1.FC<AvatarProps>;

declare const Avatar3d0260: React$1.FC<AvatarProps>;

declare const Avatar3d0272: React$1.FC<AvatarProps>;

declare const Avatar3d02768: React$1.FC<AvatarProps>;

declare const Avatar3d0284: React$1.FC<AvatarProps>;

declare const Avatar3d0296: React$1.FC<AvatarProps>;

declare const Avatar3d0312: React$1.FC<AvatarProps>;

declare const Avatar3d03120: React$1.FC<AvatarProps>;

declare const Avatar3d03: React$1.FC<AvatarProps>;

declare const Avatar3d03144: React$1.FC<AvatarProps>;

declare const Avatar3d031536: React$1.FC<AvatarProps>;

declare const Avatar3d03168: React$1.FC<AvatarProps>;

declare const Avatar3d03192: React$1.FC<AvatarProps>;

declare const Avatar3d03240: React$1.FC<AvatarProps>;

declare const Avatar3d0336: React$1.FC<AvatarProps>;

declare const Avatar3d03384: React$1.FC<AvatarProps>;

declare const Avatar3d0360: React$1.FC<AvatarProps>;

declare const Avatar3d0372: React$1.FC<AvatarProps>;

declare const Avatar3d03768: React$1.FC<AvatarProps>;

declare const Avatar3d0384: React$1.FC<AvatarProps>;

declare const Avatar3d0396: React$1.FC<AvatarProps>;

declare const Avatar3d0412: React$1.FC<AvatarProps>;

declare const Avatar3d04120: React$1.FC<AvatarProps>;

declare const Avatar3d04: React$1.FC<AvatarProps>;

declare const Avatar3d04144: React$1.FC<AvatarProps>;

declare const Avatar3d041536: React$1.FC<AvatarProps>;

declare const Avatar3d04168: React$1.FC<AvatarProps>;

declare const Avatar3d04192: React$1.FC<AvatarProps>;

declare const Avatar3d04240: React$1.FC<AvatarProps>;

declare const Avatar3d0436: React$1.FC<AvatarProps>;

declare const Avatar3d04384: React$1.FC<AvatarProps>;

declare const Avatar3d0460: React$1.FC<AvatarProps>;

declare const Avatar3d0472: React$1.FC<AvatarProps>;

declare const Avatar3d04768: React$1.FC<AvatarProps>;

declare const Avatar3d0484: React$1.FC<AvatarProps>;

declare const Avatar3d0496: React$1.FC<AvatarProps>;

declare const AvatarAbstract0112: React$1.FC<AvatarProps>;

declare const AvatarAbstract01120: React$1.FC<AvatarProps>;

declare const AvatarAbstract01: React$1.FC<AvatarProps>;

declare const AvatarAbstract01144: React$1.FC<AvatarProps>;

declare const AvatarAbstract011536: React$1.FC<AvatarProps>;

declare const AvatarAbstract01168: React$1.FC<AvatarProps>;

declare const AvatarAbstract01192: React$1.FC<AvatarProps>;

declare const AvatarAbstract01240: React$1.FC<AvatarProps>;

declare const AvatarAbstract0136: React$1.FC<AvatarProps>;

declare const AvatarAbstract01384: React$1.FC<AvatarProps>;

declare const AvatarAbstract0160: React$1.FC<AvatarProps>;

declare const AvatarAbstract0172: React$1.FC<AvatarProps>;

declare const AvatarAbstract01768: React$1.FC<AvatarProps>;

declare const AvatarAbstract0184: React$1.FC<AvatarProps>;

declare const AvatarAbstract0196: React$1.FC<AvatarProps>;

declare const AvatarAbstract0212: React$1.FC<AvatarProps>;

declare const AvatarAbstract02120: React$1.FC<AvatarProps>;

declare const AvatarAbstract02: React$1.FC<AvatarProps>;

declare const AvatarAbstract02144: React$1.FC<AvatarProps>;

declare const AvatarAbstract021536: React$1.FC<AvatarProps>;

declare const AvatarAbstract02168: React$1.FC<AvatarProps>;

declare const AvatarAbstract02192: React$1.FC<AvatarProps>;

declare const AvatarAbstract02240: React$1.FC<AvatarProps>;

declare const AvatarAbstract0236: React$1.FC<AvatarProps>;

declare const AvatarAbstract02384: React$1.FC<AvatarProps>;

declare const AvatarAbstract0260: React$1.FC<AvatarProps>;

declare const AvatarAbstract0272: React$1.FC<AvatarProps>;

declare const AvatarAbstract02768: React$1.FC<AvatarProps>;

declare const AvatarAbstract0284: React$1.FC<AvatarProps>;

declare const AvatarAbstract0296: React$1.FC<AvatarProps>;

declare const AvatarAbstract0312: React$1.FC<AvatarProps>;

declare const AvatarAbstract03120: React$1.FC<AvatarProps>;

declare const AvatarAbstract03: React$1.FC<AvatarProps>;

declare const AvatarAbstract03144: React$1.FC<AvatarProps>;

declare const AvatarAbstract031536: React$1.FC<AvatarProps>;

declare const AvatarAbstract03168: React$1.FC<AvatarProps>;

declare const AvatarAbstract03192: React$1.FC<AvatarProps>;

declare const AvatarAbstract03240: React$1.FC<AvatarProps>;

declare const AvatarAbstract0336: React$1.FC<AvatarProps>;

declare const AvatarAbstract03384: React$1.FC<AvatarProps>;

declare const AvatarAbstract0360: React$1.FC<AvatarProps>;

declare const AvatarAbstract0372: React$1.FC<AvatarProps>;

declare const AvatarAbstract03768: React$1.FC<AvatarProps>;

declare const AvatarAbstract0384: React$1.FC<AvatarProps>;

declare const AvatarAbstract0396: React$1.FC<AvatarProps>;

declare const AvatarAbstract0412: React$1.FC<AvatarProps>;

declare const AvatarAbstract04120: React$1.FC<AvatarProps>;

declare const AvatarAbstract04: React$1.FC<AvatarProps>;

declare const AvatarAbstract04144: React$1.FC<AvatarProps>;

declare const AvatarAbstract041536: React$1.FC<AvatarProps>;

declare const AvatarAbstract04168: React$1.FC<AvatarProps>;

declare const AvatarAbstract04192: React$1.FC<AvatarProps>;

declare const AvatarAbstract04240: React$1.FC<AvatarProps>;

declare const AvatarAbstract0436: React$1.FC<AvatarProps>;

declare const AvatarAbstract04384: React$1.FC<AvatarProps>;

declare const AvatarAbstract0460: React$1.FC<AvatarProps>;

declare const AvatarAbstract0472: React$1.FC<AvatarProps>;

declare const AvatarAbstract04768: React$1.FC<AvatarProps>;

declare const AvatarAbstract0484: React$1.FC<AvatarProps>;

declare const AvatarAbstract0496: React$1.FC<AvatarProps>;

declare const AvatarByewind12: React$1.FC<AvatarProps>;

declare const AvatarByewind120: React$1.FC<AvatarProps>;

declare const AvatarByewind: React$1.FC<AvatarProps>;

declare const AvatarByewind144: React$1.FC<AvatarProps>;

declare const AvatarByewind1536: React$1.FC<AvatarProps>;

declare const AvatarByewind168: React$1.FC<AvatarProps>;

declare const AvatarByewind192: React$1.FC<AvatarProps>;

declare const AvatarByewind240: React$1.FC<AvatarProps>;

declare const AvatarByewind36: React$1.FC<AvatarProps>;

declare const AvatarByewind384: React$1.FC<AvatarProps>;

declare const AvatarByewind60: React$1.FC<AvatarProps>;

declare const AvatarByewind72: React$1.FC<AvatarProps>;

declare const AvatarByewind768: React$1.FC<AvatarProps>;

declare const AvatarByewind84: React$1.FC<AvatarProps>;

declare const AvatarByewind96: React$1.FC<AvatarProps>;

declare const AvatarDefault12: React$1.FC<AvatarProps>;

declare const AvatarDefault120: React$1.FC<AvatarProps>;

declare const AvatarDefault: React$1.FC<AvatarProps>;

declare const AvatarDefault144: React$1.FC<AvatarProps>;

declare const AvatarDefault1536: React$1.FC<AvatarProps>;

declare const AvatarDefault168: React$1.FC<AvatarProps>;

declare const AvatarDefault192: React$1.FC<AvatarProps>;

declare const AvatarDefault240: React$1.FC<AvatarProps>;

declare const AvatarDefault36: React$1.FC<AvatarProps>;

declare const AvatarDefault384: React$1.FC<AvatarProps>;

declare const AvatarDefault60: React$1.FC<AvatarProps>;

declare const AvatarDefault72: React$1.FC<AvatarProps>;

declare const AvatarDefault768: React$1.FC<AvatarProps>;

declare const AvatarDefault84: React$1.FC<AvatarProps>;

declare const AvatarDefault96: React$1.FC<AvatarProps>;

declare const AvatarFemale0112: React$1.FC<AvatarProps>;

declare const AvatarFemale01120: React$1.FC<AvatarProps>;

declare const AvatarFemale01: React$1.FC<AvatarProps>;

declare const AvatarFemale01144: React$1.FC<AvatarProps>;

declare const AvatarFemale011536: React$1.FC<AvatarProps>;

declare const AvatarFemale01168: React$1.FC<AvatarProps>;

declare const AvatarFemale01192: React$1.FC<AvatarProps>;

declare const AvatarFemale01240: React$1.FC<AvatarProps>;

declare const AvatarFemale0136: React$1.FC<AvatarProps>;

declare const AvatarFemale01384: React$1.FC<AvatarProps>;

declare const AvatarFemale0160: React$1.FC<AvatarProps>;

declare const AvatarFemale0172: React$1.FC<AvatarProps>;

declare const AvatarFemale01768: React$1.FC<AvatarProps>;

declare const AvatarFemale0184: React$1.FC<AvatarProps>;

declare const AvatarFemale0196: React$1.FC<AvatarProps>;

declare const AvatarFemale0212: React$1.FC<AvatarProps>;

declare const AvatarFemale02120: React$1.FC<AvatarProps>;

declare const AvatarFemale02: React$1.FC<AvatarProps>;

declare const AvatarFemale02144: React$1.FC<AvatarProps>;

declare const AvatarFemale021536: React$1.FC<AvatarProps>;

declare const AvatarFemale02168: React$1.FC<AvatarProps>;

declare const AvatarFemale02192: React$1.FC<AvatarProps>;

declare const AvatarFemale02240: React$1.FC<AvatarProps>;

declare const AvatarFemale0236: React$1.FC<AvatarProps>;

declare const AvatarFemale02384: React$1.FC<AvatarProps>;

declare const AvatarFemale0260: React$1.FC<AvatarProps>;

declare const AvatarFemale0272: React$1.FC<AvatarProps>;

declare const AvatarFemale02768: React$1.FC<AvatarProps>;

declare const AvatarFemale0284: React$1.FC<AvatarProps>;

declare const AvatarFemale0296: React$1.FC<AvatarProps>;

declare const AvatarFemale0312: React$1.FC<AvatarProps>;

declare const AvatarFemale03120: React$1.FC<AvatarProps>;

declare const AvatarFemale03: React$1.FC<AvatarProps>;

declare const AvatarFemale03144: React$1.FC<AvatarProps>;

declare const AvatarFemale031536: React$1.FC<AvatarProps>;

declare const AvatarFemale03168: React$1.FC<AvatarProps>;

declare const AvatarFemale03192: React$1.FC<AvatarProps>;

declare const AvatarFemale03240: React$1.FC<AvatarProps>;

declare const AvatarFemale0336: React$1.FC<AvatarProps>;

declare const AvatarFemale03384: React$1.FC<AvatarProps>;

declare const AvatarFemale0360: React$1.FC<AvatarProps>;

declare const AvatarFemale0372: React$1.FC<AvatarProps>;

declare const AvatarFemale03768: React$1.FC<AvatarProps>;

declare const AvatarFemale0384: React$1.FC<AvatarProps>;

declare const AvatarFemale0396: React$1.FC<AvatarProps>;

declare const AvatarFemale0412: React$1.FC<AvatarProps>;

declare const AvatarFemale04120: React$1.FC<AvatarProps>;

declare const AvatarFemale04: React$1.FC<AvatarProps>;

declare const AvatarFemale04144: React$1.FC<AvatarProps>;

declare const AvatarFemale041536: React$1.FC<AvatarProps>;

declare const AvatarFemale04168: React$1.FC<AvatarProps>;

declare const AvatarFemale04192: React$1.FC<AvatarProps>;

declare const AvatarFemale04240: React$1.FC<AvatarProps>;

declare const AvatarFemale0436: React$1.FC<AvatarProps>;

declare const AvatarFemale04384: React$1.FC<AvatarProps>;

declare const AvatarFemale0460: React$1.FC<AvatarProps>;

declare const AvatarFemale0472: React$1.FC<AvatarProps>;

declare const AvatarFemale04768: React$1.FC<AvatarProps>;

declare const AvatarFemale0484: React$1.FC<AvatarProps>;

declare const AvatarFemale0496: React$1.FC<AvatarProps>;

declare const AvatarFemale0512: React$1.FC<AvatarProps>;

declare const AvatarFemale05120: React$1.FC<AvatarProps>;

declare const AvatarFemale05: React$1.FC<AvatarProps>;

declare const AvatarFemale05144: React$1.FC<AvatarProps>;

declare const AvatarFemale051536: React$1.FC<AvatarProps>;

declare const AvatarFemale05168: React$1.FC<AvatarProps>;

declare const AvatarFemale05192: React$1.FC<AvatarProps>;

declare const AvatarFemale05240: React$1.FC<AvatarProps>;

declare const AvatarFemale0536: React$1.FC<AvatarProps>;

declare const AvatarFemale05384: React$1.FC<AvatarProps>;

declare const AvatarFemale0560: React$1.FC<AvatarProps>;

declare const AvatarFemale0572: React$1.FC<AvatarProps>;

declare const AvatarFemale05768: React$1.FC<AvatarProps>;

declare const AvatarFemale0584: React$1.FC<AvatarProps>;

declare const AvatarFemale0596: React$1.FC<AvatarProps>;

declare const AvatarFemale0612: React$1.FC<AvatarProps>;

declare const AvatarFemale06120: React$1.FC<AvatarProps>;

declare const AvatarFemale06: React$1.FC<AvatarProps>;

declare const AvatarFemale06144: React$1.FC<AvatarProps>;

declare const AvatarFemale061536: React$1.FC<AvatarProps>;

declare const AvatarFemale06168: React$1.FC<AvatarProps>;

declare const AvatarFemale06192: React$1.FC<AvatarProps>;

declare const AvatarFemale06240: React$1.FC<AvatarProps>;

declare const AvatarFemale0636: React$1.FC<AvatarProps>;

declare const AvatarFemale06384: React$1.FC<AvatarProps>;

declare const AvatarFemale0660: React$1.FC<AvatarProps>;

declare const AvatarFemale0672: React$1.FC<AvatarProps>;

declare const AvatarFemale06768: React$1.FC<AvatarProps>;

declare const AvatarFemale0684: React$1.FC<AvatarProps>;

declare const AvatarFemale0696: React$1.FC<AvatarProps>;

declare const AvatarMale0112: React$1.FC<AvatarProps>;

declare const AvatarMale01120: React$1.FC<AvatarProps>;

declare const AvatarMale01: React$1.FC<AvatarProps>;

declare const AvatarMale01144: React$1.FC<AvatarProps>;

declare const AvatarMale011536: React$1.FC<AvatarProps>;

declare const AvatarMale01168: React$1.FC<AvatarProps>;

declare const AvatarMale01192: React$1.FC<AvatarProps>;

declare const AvatarMale01240: React$1.FC<AvatarProps>;

declare const AvatarMale0136: React$1.FC<AvatarProps>;

declare const AvatarMale01384: React$1.FC<AvatarProps>;

declare const AvatarMale0160: React$1.FC<AvatarProps>;

declare const AvatarMale0172: React$1.FC<AvatarProps>;

declare const AvatarMale01768: React$1.FC<AvatarProps>;

declare const AvatarMale0184: React$1.FC<AvatarProps>;

declare const AvatarMale0196: React$1.FC<AvatarProps>;

declare const AvatarMale0212: React$1.FC<AvatarProps>;

declare const AvatarMale02120: React$1.FC<AvatarProps>;

declare const AvatarMale02: React$1.FC<AvatarProps>;

declare const AvatarMale02144: React$1.FC<AvatarProps>;

declare const AvatarMale021536: React$1.FC<AvatarProps>;

declare const AvatarMale02168: React$1.FC<AvatarProps>;

declare const AvatarMale02192: React$1.FC<AvatarProps>;

declare const AvatarMale02240: React$1.FC<AvatarProps>;

declare const AvatarMale0236: React$1.FC<AvatarProps>;

declare const AvatarMale02384: React$1.FC<AvatarProps>;

declare const AvatarMale0260: React$1.FC<AvatarProps>;

declare const AvatarMale0272: React$1.FC<AvatarProps>;

declare const AvatarMale02768: React$1.FC<AvatarProps>;

declare const AvatarMale0284: React$1.FC<AvatarProps>;

declare const AvatarMale0296: React$1.FC<AvatarProps>;

declare const AvatarMale0312: React$1.FC<AvatarProps>;

declare const AvatarMale03120: React$1.FC<AvatarProps>;

declare const AvatarMale03: React$1.FC<AvatarProps>;

declare const AvatarMale03144: React$1.FC<AvatarProps>;

declare const AvatarMale031536: React$1.FC<AvatarProps>;

declare const AvatarMale03168: React$1.FC<AvatarProps>;

declare const AvatarMale03192: React$1.FC<AvatarProps>;

declare const AvatarMale03240: React$1.FC<AvatarProps>;

declare const AvatarMale0336: React$1.FC<AvatarProps>;

declare const AvatarMale03384: React$1.FC<AvatarProps>;

declare const AvatarMale0360: React$1.FC<AvatarProps>;

declare const AvatarMale0372: React$1.FC<AvatarProps>;

declare const AvatarMale03768: React$1.FC<AvatarProps>;

declare const AvatarMale0384: React$1.FC<AvatarProps>;

declare const AvatarMale0396: React$1.FC<AvatarProps>;

declare const AvatarMale0412: React$1.FC<AvatarProps>;

declare const AvatarMale04120: React$1.FC<AvatarProps>;

declare const AvatarMale04: React$1.FC<AvatarProps>;

declare const AvatarMale04144: React$1.FC<AvatarProps>;

declare const AvatarMale041536: React$1.FC<AvatarProps>;

declare const AvatarMale04168: React$1.FC<AvatarProps>;

declare const AvatarMale04192: React$1.FC<AvatarProps>;

declare const AvatarMale04240: React$1.FC<AvatarProps>;

declare const AvatarMale0436: React$1.FC<AvatarProps>;

declare const AvatarMale04384: React$1.FC<AvatarProps>;

declare const AvatarMale0460: React$1.FC<AvatarProps>;

declare const AvatarMale0472: React$1.FC<AvatarProps>;

declare const AvatarMale04768: React$1.FC<AvatarProps>;

declare const AvatarMale0484: React$1.FC<AvatarProps>;

declare const AvatarMale0496: React$1.FC<AvatarProps>;

declare const AvatarMale0512: React$1.FC<AvatarProps>;

declare const AvatarMale05120: React$1.FC<AvatarProps>;

declare const AvatarMale05: React$1.FC<AvatarProps>;

declare const AvatarMale05144: React$1.FC<AvatarProps>;

declare const AvatarMale051536: React$1.FC<AvatarProps>;

declare const AvatarMale05168: React$1.FC<AvatarProps>;

declare const AvatarMale05192: React$1.FC<AvatarProps>;

declare const AvatarMale05240: React$1.FC<AvatarProps>;

declare const AvatarMale0536: React$1.FC<AvatarProps>;

declare const AvatarMale05384: React$1.FC<AvatarProps>;

declare const AvatarMale0560: React$1.FC<AvatarProps>;

declare const AvatarMale0572: React$1.FC<AvatarProps>;

declare const AvatarMale05768: React$1.FC<AvatarProps>;

declare const AvatarMale0584: React$1.FC<AvatarProps>;

declare const AvatarMale0596: React$1.FC<AvatarProps>;

declare const AvatarMale0612: React$1.FC<AvatarProps>;

declare const AvatarMale06120: React$1.FC<AvatarProps>;

declare const AvatarMale06: React$1.FC<AvatarProps>;

declare const AvatarMale06144: React$1.FC<AvatarProps>;

declare const AvatarMale061536: React$1.FC<AvatarProps>;

declare const AvatarMale06168: React$1.FC<AvatarProps>;

declare const AvatarMale06192: React$1.FC<AvatarProps>;

declare const AvatarMale06240: React$1.FC<AvatarProps>;

declare const AvatarMale0636: React$1.FC<AvatarProps>;

declare const AvatarMale06384: React$1.FC<AvatarProps>;

declare const AvatarMale0660: React$1.FC<AvatarProps>;

declare const AvatarMale0672: React$1.FC<AvatarProps>;

declare const AvatarMale06768: React$1.FC<AvatarProps>;

declare const AvatarMale0684: React$1.FC<AvatarProps>;

declare const AvatarMale0696: React$1.FC<AvatarProps>;

declare const Geometric01: React$1.FC<BackgroundProps>;

declare const Geometric02: React$1.FC<BackgroundProps>;

declare const Geometric03: React$1.FC<BackgroundProps>;

declare const Geometric04: React$1.FC<BackgroundProps>;

declare const Geometric05: React$1.FC<BackgroundProps>;

declare const Geometric06: React$1.FC<BackgroundProps>;

declare const Geometric07: React$1.FC<BackgroundProps>;

declare const Gradient01: React$1.FC<BackgroundProps>;

declare const Gradient02: React$1.FC<BackgroundProps>;

declare const Gradient03: React$1.FC<BackgroundProps>;

declare const Gradient04: React$1.FC<BackgroundProps>;

declare const Gradient05: React$1.FC<BackgroundProps>;

declare const Gradient06: React$1.FC<BackgroundProps>;

declare const Gradient07: React$1.FC<BackgroundProps>;

declare const Gradient08: React$1.FC<BackgroundProps>;

declare const Gradient09: React$1.FC<BackgroundProps>;

declare const Gradient10: React$1.FC<BackgroundProps>;

declare const Gradient11: React$1.FC<BackgroundProps>;

declare const Gradient12: React$1.FC<BackgroundProps>;

declare const Gradient13: React$1.FC<BackgroundProps>;

declare const Gradient14: React$1.FC<BackgroundProps>;

declare const Minimal01: React$1.FC<BackgroundProps>;

declare const Minimal02: React$1.FC<BackgroundProps>;

declare const Minimal03: React$1.FC<BackgroundProps>;

declare const CursorsBeachball: React$1.FC<AvatarProps>;

declare const CursorsCross: React$1.FC<AvatarProps>;

declare const CursorsDefault: React$1.FC<AvatarProps>;

declare const CursorsHandGrabbing: React$1.FC<AvatarProps>;

declare const CursorsHandOpen: React$1.FC<AvatarProps>;

declare const CursorsHandPointing: React$1.FC<AvatarProps>;

declare const CursorsMenu: React$1.FC<AvatarProps>;

declare const CursorsMove: React$1.FC<AvatarProps>;

declare const CursorsResizeDown: React$1.FC<AvatarProps>;

declare const CursorsResizeLeftRight: React$1.FC<AvatarProps>;

declare const CursorsResizeLeft: React$1.FC<AvatarProps>;

declare const CursorsResizeNorthEastSouthWest: React$1.FC<AvatarProps>;

declare const CursorsResizeNorthSouth: React$1.FC<AvatarProps>;

declare const CursorsResizeNorthWestSouthEast: React$1.FC<AvatarProps>;

declare const CursorsResizeRight: React$1.FC<AvatarProps>;

declare const CursorsResizeUpDown: React$1.FC<AvatarProps>;

declare const CursorsResizeUp: React$1.FC<AvatarProps>;

declare const CursorsResizeWestEast: React$1.FC<AvatarProps>;

declare const CursorsTextCursor: React$1.FC<AvatarProps>;

declare const CursorsZoomIn: React$1.FC<AvatarProps>;

declare const CursorsZoomOut: React$1.FC<AvatarProps>;

declare const BombEmoji: React$1.FC<AvatarProps>;

declare const FaceBlowingKiss: React$1.FC<AvatarProps>;

declare const FaceSteamFromNose: React$1.FC<AvatarProps>;

declare const FaceTearsJoy: React$1.FC<AvatarProps>;

declare const GrinningCat: React$1.FC<AvatarProps>;

declare const GrinningFaceSweat: React$1.FC<AvatarProps>;

declare const HeartArrow: React$1.FC<AvatarProps>;

declare const HundredPoints: React$1.FC<AvatarProps>;

declare const LoudlyCryingFace: React$1.FC<AvatarProps>;

declare const RedHeart: React$1.FC<AvatarProps>;

declare const RobotEmoji: React$1.FC<AvatarProps>;

declare const SeeMonkey: React$1.FC<AvatarProps>;

declare const SkullCrossbones: React$1.FC<AvatarProps>;

declare const SmilingFaceHearts: React$1.FC<AvatarProps>;

declare const SmilingFaceHorns: React$1.FC<AvatarProps>;

declare const SmilingFaceSunglasses: React$1.FC<AvatarProps>;

declare const SnowflakeEmoji: React$1.FC<AvatarProps>;

declare const Snowman: React$1.FC<AvatarProps>;

declare const UmbrellaEmoji: React$1.FC<AvatarProps>;

declare const WinkingFaceTongue: React$1.FC<AvatarProps>;

declare const WinkingFace: React$1.FC<AvatarProps>;

declare const Humanoid: React$1.FC<BackgroundProps>;

declare const Illustration01: React$1.FC<BackgroundProps>;

declare const Illustration02: React$1.FC<BackgroundProps>;

declare const Illustration03: React$1.FC<BackgroundProps>;

declare const Illustration04: React$1.FC<BackgroundProps>;

declare const Illustration05: React$1.FC<BackgroundProps>;

declare const Illustration06: React$1.FC<BackgroundProps>;

declare const Illustration07: React$1.FC<BackgroundProps>;

declare const Illustration08: React$1.FC<BackgroundProps>;

declare const Illustration09: React$1.FC<BackgroundProps>;

declare const Illustration10: React$1.FC<BackgroundProps>;

declare const Illustration11: React$1.FC<BackgroundProps>;

declare const Illustration12: React$1.FC<BackgroundProps>;

declare const Illustration13: React$1.FC<BackgroundProps>;

declare const Illustration14: React$1.FC<BackgroundProps>;

declare const Illustration15: React$1.FC<BackgroundProps>;

declare const Illustration16: React$1.FC<BackgroundProps>;

declare const Illustration: React$1.FC<BackgroundProps>;

declare const Illustration17: React$1.FC<BackgroundProps>;

declare const Illustration18: React$1.FC<BackgroundProps>;

declare const Illustration19: React$1.FC<BackgroundProps>;

declare const Illustration20: React$1.FC<BackgroundProps>;

declare const Illustration21: React$1.FC<BackgroundProps>;

declare const Illustration22: React$1.FC<BackgroundProps>;

declare const Illustration23: React$1.FC<BackgroundProps>;

declare const Illustration24: React$1.FC<BackgroundProps>;

declare const Illustration25: React$1.FC<BackgroundProps>;

declare const Illustration26: React$1.FC<BackgroundProps>;

declare const Illustration27: React$1.FC<BackgroundProps>;

declare const Illustration28: React$1.FC<BackgroundProps>;

declare const LineDrawing01: React$1.FC<BackgroundProps>;

declare const LineDrawing02: React$1.FC<BackgroundProps>;

declare const LineDrawing03: React$1.FC<BackgroundProps>;

declare const QrCodeBig: React$1.FC<BackgroundProps>;

declare const Voice: React$1.FC<BackgroundProps>;

declare const Image01: React$1.FC<BackgroundProps>;

declare const Android: React$1.FC<AvatarProps>;

declare const AppStore: React$1.FC<AvatarProps>;

declare const AppleIntelligence2a: React$1.FC<AvatarProps>;

declare const AppleIntelligence2b: React$1.FC<AvatarProps>;

declare const AppleIntelligenceA: React$1.FC<AvatarProps>;

declare const AppleIntelligenceB: React$1.FC<AvatarProps>;

declare const Apple: React$1.FC<AvatarProps>;

declare const Arc: React$1.FC<AvatarProps>;

declare const Behance: React$1.FC<AvatarProps>;

declare const ChatGpt: React$1.FC<AvatarProps>;

declare const Claude: React$1.FC<AvatarProps>;

declare const Copilot: React$1.FC<AvatarProps>;

declare const Discord: React$1.FC<AvatarProps>;

declare const Dribbble: React$1.FC<AvatarProps>;

declare const Dropbox: React$1.FC<AvatarProps>;

declare const Excel: React$1.FC<AvatarProps>;

declare const Facebook: React$1.FC<AvatarProps>;

declare const FigmaA: React$1.FC<AvatarProps>;

declare const FigmaB: React$1.FC<AvatarProps>;

declare const Framer: React$1.FC<AvatarProps>;

declare const Gemini: React$1.FC<AvatarProps>;

declare const Github: React$1.FC<AvatarProps>;

declare const GoogleDrive: React$1.FC<AvatarProps>;

declare const GooglePlay: React$1.FC<AvatarProps>;

declare const Google: React$1.FC<AvatarProps>;

declare const Grok: React$1.FC<AvatarProps>;

declare const Gumroad: React$1.FC<AvatarProps>;

declare const ICloud: React$1.FC<AvatarProps>;

declare const Instagram: React$1.FC<AvatarProps>;

declare const LemonSqueezy: React$1.FC<AvatarProps>;

declare const LinkedIn: React$1.FC<AvatarProps>;

declare const Loop: React$1.FC<AvatarProps>;

declare const Mastercard: React$1.FC<AvatarProps>;

declare const Medium: React$1.FC<AvatarProps>;

declare const Messenger: React$1.FC<AvatarProps>;

declare const Meta: React$1.FC<AvatarProps>;

declare const Microsoft: React$1.FC<AvatarProps>;

declare const Midjourney: React$1.FC<AvatarProps>;

declare const Nintendo: React$1.FC<AvatarProps>;

declare const Notion: React$1.FC<AvatarProps>;

declare const OneDrive: React$1.FC<AvatarProps>;

declare const OneNote: React$1.FC<AvatarProps>;

declare const PayPal: React$1.FC<AvatarProps>;

declare const Perplexity: React$1.FC<AvatarProps>;

declare const Pinterest: React$1.FC<AvatarProps>;

declare const PowerPoint: React$1.FC<AvatarProps>;

declare const Reddit: React$1.FC<AvatarProps>;

declare const RssLogo: React$1.FC<AvatarProps>;

declare const Slack: React$1.FC<AvatarProps>;

declare const Snapchat: React$1.FC<AvatarProps>;

declare const SnowLogo: React$1.FC<AvatarProps>;

declare const Stripe: React$1.FC<AvatarProps>;

declare const Svelte: React$1.FC<AvatarProps>;

declare const Telegram: React$1.FC<AvatarProps>;

declare const Threads: React$1.FC<AvatarProps>;

declare const TikTok: React$1.FC<AvatarProps>;

declare const Twitch: React$1.FC<AvatarProps>;

declare const Twitter: React$1.FC<AvatarProps>;

declare const Visa: React$1.FC<AvatarProps>;

declare const WhatsApp: React$1.FC<AvatarProps>;

declare const Word: React$1.FC<AvatarProps>;

declare const XLogo: React$1.FC<AvatarProps>;

declare const Youtube: React$1.FC<AvatarProps>;

declare const componentNames: {
    readonly avatars: readonly ["Avatar3d01", "Avatar3d0112", "Avatar3d01120", "Avatar3d01144", "Avatar3d011536", "Avatar3d01168", "Avatar3d01192", "Avatar3d01240", "Avatar3d0136", "Avatar3d01384", "Avatar3d0160", "Avatar3d0172", "Avatar3d01768", "Avatar3d0184", "Avatar3d0196", "Avatar3d02", "Avatar3d0212", "Avatar3d02120", "Avatar3d02144", "Avatar3d021536", "Avatar3d02168", "Avatar3d02192", "Avatar3d02240", "Avatar3d0236", "Avatar3d02384", "Avatar3d0260", "Avatar3d0272", "Avatar3d02768", "Avatar3d0284", "Avatar3d0296", "Avatar3d03", "Avatar3d0312", "Avatar3d03120", "Avatar3d03144", "Avatar3d031536", "Avatar3d03168", "Avatar3d03192", "Avatar3d03240", "Avatar3d0336", "Avatar3d03384", "Avatar3d0360", "Avatar3d0372", "Avatar3d03768", "Avatar3d0384", "Avatar3d0396", "Avatar3d04", "Avatar3d0412", "Avatar3d04120", "Avatar3d04144", "Avatar3d041536", "Avatar3d04168", "Avatar3d04192", "Avatar3d04240", "Avatar3d0436", "Avatar3d04384", "Avatar3d0460", "Avatar3d0472", "Avatar3d04768", "Avatar3d0484", "Avatar3d0496", "AvatarAbstract01", "AvatarAbstract0112", "AvatarAbstract01120", "AvatarAbstract01144", "AvatarAbstract011536", "AvatarAbstract01168", "AvatarAbstract01192", "AvatarAbstract01240", "AvatarAbstract0136", "AvatarAbstract01384", "AvatarAbstract0160", "AvatarAbstract0172", "AvatarAbstract01768", "AvatarAbstract0184", "AvatarAbstract0196", "AvatarAbstract02", "AvatarAbstract0212", "AvatarAbstract02120", "AvatarAbstract02144", "AvatarAbstract021536", "AvatarAbstract02168", "AvatarAbstract02192", "AvatarAbstract02240", "AvatarAbstract0236", "AvatarAbstract02384", "AvatarAbstract0260", "AvatarAbstract0272", "AvatarAbstract02768", "AvatarAbstract0284", "AvatarAbstract0296", "AvatarAbstract03", "AvatarAbstract0312", "AvatarAbstract03120", "AvatarAbstract03144", "AvatarAbstract031536", "AvatarAbstract03168", "AvatarAbstract03192", "AvatarAbstract03240", "AvatarAbstract0336", "AvatarAbstract03384", "AvatarAbstract0360", "AvatarAbstract0372", "AvatarAbstract03768", "AvatarAbstract0384", "AvatarAbstract0396", "AvatarAbstract04", "AvatarAbstract0412", "AvatarAbstract04120", "AvatarAbstract04144", "AvatarAbstract041536", "AvatarAbstract04168", "AvatarAbstract04192", "AvatarAbstract04240", "AvatarAbstract0436", "AvatarAbstract04384", "AvatarAbstract0460", "AvatarAbstract0472", "AvatarAbstract04768", "AvatarAbstract0484", "AvatarAbstract0496", "AvatarByewind", "AvatarByewind12", "AvatarByewind120", "AvatarByewind144", "AvatarByewind1536", "AvatarByewind168", "AvatarByewind192", "AvatarByewind240", "AvatarByewind36", "AvatarByewind384", "AvatarByewind60", "AvatarByewind72", "AvatarByewind768", "AvatarByewind84", "AvatarByewind96", "AvatarDefault", "AvatarDefault12", "AvatarDefault120", "AvatarDefault144", "AvatarDefault1536", "AvatarDefault168", "AvatarDefault192", "AvatarDefault240", "AvatarDefault36", "AvatarDefault384", "AvatarDefault60", "AvatarDefault72", "AvatarDefault768", "AvatarDefault84", "AvatarDefault96", "AvatarFemale01", "AvatarFemale0112", "AvatarFemale01120", "AvatarFemale01144", "AvatarFemale011536", "AvatarFemale01168", "AvatarFemale01192", "AvatarFemale01240", "AvatarFemale0136", "AvatarFemale01384", "AvatarFemale0160", "AvatarFemale0172", "AvatarFemale01768", "AvatarFemale0184", "AvatarFemale0196", "AvatarFemale02", "AvatarFemale0212", "AvatarFemale02120", "AvatarFemale02144", "AvatarFemale021536", "AvatarFemale02168", "AvatarFemale02192", "AvatarFemale02240", "AvatarFemale0236", "AvatarFemale02384", "AvatarFemale0260", "AvatarFemale0272", "AvatarFemale02768", "AvatarFemale0284", "AvatarFemale0296", "AvatarFemale03", "AvatarFemale0312", "AvatarFemale03120", "AvatarFemale03144", "AvatarFemale031536", "AvatarFemale03168", "AvatarFemale03192", "AvatarFemale03240", "AvatarFemale0336", "AvatarFemale03384", "AvatarFemale0360", "AvatarFemale0372", "AvatarFemale03768", "AvatarFemale0384", "AvatarFemale0396", "AvatarFemale04", "AvatarFemale0412", "AvatarFemale04120", "AvatarFemale04144", "AvatarFemale041536", "AvatarFemale04168", "AvatarFemale04192", "AvatarFemale04240", "AvatarFemale0436", "AvatarFemale04384", "AvatarFemale0460", "AvatarFemale0472", "AvatarFemale04768", "AvatarFemale0484", "AvatarFemale0496", "AvatarFemale05", "AvatarFemale0512", "AvatarFemale05120", "AvatarFemale05144", "AvatarFemale051536", "AvatarFemale05168", "AvatarFemale05192", "AvatarFemale05240", "AvatarFemale0536", "AvatarFemale05384", "AvatarFemale0560", "AvatarFemale0572", "AvatarFemale05768", "AvatarFemale0584", "AvatarFemale0596", "AvatarFemale06", "AvatarFemale0612", "AvatarFemale06120", "AvatarFemale06144", "AvatarFemale061536", "AvatarFemale06168", "AvatarFemale06192", "AvatarFemale06240", "AvatarFemale0636", "AvatarFemale06384", "AvatarFemale0660", "AvatarFemale0672", "AvatarFemale06768", "AvatarFemale0684", "AvatarFemale0696", "AvatarMale01", "AvatarMale0112", "AvatarMale01120", "AvatarMale01144", "AvatarMale011536", "AvatarMale01168", "AvatarMale01192", "AvatarMale01240", "AvatarMale0136", "AvatarMale01384", "AvatarMale0160", "AvatarMale0172", "AvatarMale01768", "AvatarMale0184", "AvatarMale0196", "AvatarMale02", "AvatarMale0212", "AvatarMale02120", "AvatarMale02144", "AvatarMale021536", "AvatarMale02168", "AvatarMale02192", "AvatarMale02240", "AvatarMale0236", "AvatarMale02384", "AvatarMale0260", "AvatarMale0272", "AvatarMale02768", "AvatarMale0284", "AvatarMale0296", "AvatarMale03", "AvatarMale0312", "AvatarMale03120", "AvatarMale03144", "AvatarMale031536", "AvatarMale03168", "AvatarMale03192", "AvatarMale03240", "AvatarMale0336", "AvatarMale03384", "AvatarMale0360", "AvatarMale0372", "AvatarMale03768", "AvatarMale0384", "AvatarMale0396", "AvatarMale04", "AvatarMale0412", "AvatarMale04120", "AvatarMale04144", "AvatarMale041536", "AvatarMale04168", "AvatarMale04192", "AvatarMale04240", "AvatarMale0436", "AvatarMale04384", "AvatarMale0460", "AvatarMale0472", "AvatarMale04768", "AvatarMale0484", "AvatarMale0496", "AvatarMale05", "AvatarMale0512", "AvatarMale05120", "AvatarMale05144", "AvatarMale051536", "AvatarMale05168", "AvatarMale05192", "AvatarMale05240", "AvatarMale0536", "AvatarMale05384", "AvatarMale0560", "AvatarMale0572", "AvatarMale05768", "AvatarMale0584", "AvatarMale0596", "AvatarMale06", "AvatarMale0612", "AvatarMale06120", "AvatarMale06144", "AvatarMale061536", "AvatarMale06168", "AvatarMale06192", "AvatarMale06240", "AvatarMale0636", "AvatarMale06384", "AvatarMale0660", "AvatarMale0672", "AvatarMale06768", "AvatarMale0684", "AvatarMale0696"];
    readonly backgrounds: readonly ["Geometric01", "Geometric02", "Geometric03", "Geometric04", "Geometric05", "Geometric06", "Geometric07", "Gradient01", "Gradient02", "Gradient03", "Gradient04", "Gradient05", "Gradient06", "Gradient07", "Gradient08", "Gradient09", "Gradient10", "Gradient11", "Gradient12", "Gradient13", "Gradient14", "Minimal01", "Minimal02", "Minimal03"];
    readonly cursors: readonly ["CursorsBeachball", "CursorsCross", "CursorsDefault", "CursorsHandGrabbing", "CursorsHandOpen", "CursorsHandPointing", "CursorsMenu", "CursorsMove", "CursorsResizeDown", "CursorsResizeLeft", "CursorsResizeLeftRight", "CursorsResizeNorthEastSouthWest", "CursorsResizeNorthSouth", "CursorsResizeNorthWestSouthEast", "CursorsResizeRight", "CursorsResizeUp", "CursorsResizeUpDown", "CursorsResizeWestEast", "CursorsTextCursor", "CursorsZoomIn", "CursorsZoomOut"];
    readonly emoji: readonly ["BombEmoji", "FaceBlowingKiss", "FaceSteamFromNose", "FaceTearsJoy", "GrinningCat", "GrinningFaceSweat", "HeartArrow", "HundredPoints", "LoudlyCryingFace", "RedHeart", "RobotEmoji", "SeeMonkey", "SkullCrossbones", "SmilingFaceHearts", "SmilingFaceHorns", "SmilingFaceSunglasses", "SnowflakeEmoji", "Snowman", "UmbrellaEmoji", "WinkingFace", "WinkingFaceTongue"];
    readonly illustrations: readonly ["Humanoid", "Illustration", "Illustration01", "Illustration02", "Illustration03", "Illustration04", "Illustration05", "Illustration06", "Illustration07", "Illustration08", "Illustration09", "Illustration10", "Illustration11", "Illustration12", "Illustration13", "Illustration14", "Illustration15", "Illustration16", "Illustration17", "Illustration18", "Illustration19", "Illustration20", "Illustration21", "Illustration22", "Illustration23", "Illustration24", "Illustration25", "Illustration26", "Illustration27", "Illustration28", "LineDrawing01", "LineDrawing02", "LineDrawing03", "QrCodeBig", "Voice"];
    readonly images: readonly ["Image01"];
    readonly logos: readonly ["Android", "AppStore", "Apple", "AppleIntelligence2a", "AppleIntelligence2b", "AppleIntelligenceA", "AppleIntelligenceB", "Arc", "Behance", "ChatGpt", "Claude", "Copilot", "Discord", "Dribbble", "Dropbox", "Excel", "Facebook", "FigmaA", "FigmaB", "Framer", "Gemini", "Github", "Google", "GoogleDrive", "GooglePlay", "Grok", "Gumroad", "ICloud", "Instagram", "LemonSqueezy", "LinkedIn", "Loop", "Mastercard", "Medium", "Messenger", "Meta", "Microsoft", "Midjourney", "Nintendo", "Notion", "OneDrive", "OneNote", "PayPal", "Perplexity", "Pinterest", "PowerPoint", "Reddit", "RssLogo", "Slack", "Snapchat", "SnowLogo", "Stripe", "Svelte", "Telegram", "Threads", "TikTok", "Twitch", "Twitter", "Visa", "WhatsApp", "Word", "XLogo", "Youtube"];
};
type ComponentCategory = keyof typeof componentNames;

interface IconElementProps extends IconProps {
    /** 通用使用名（kebab-case） */
    name: string;
    /** 显式指定 collection；否则按 Provider 默认或扁平默认 */
    collection?: string;
}
declare function Icon({ name, collection: explicitCollection, weight: explicitWeight, size: explicitSize, color: explicitColor, className, ...rest }: IconElementProps): react_jsx_runtime.JSX.Element | null;

interface IconContextValue {
    collection?: string;
    weight?: IconWeight;
    size?: number | string;
    color?: string;
    allowRemote?: boolean;
    fallbackCollections?: string[];
    replace?: ReplacePolicy;
}
interface IconProviderProps extends IconContextValue {
    /** shorthand：等价于 replace.targetCollection */
    targetCollection?: string;
    /** shorthand：等价于 replace.priority */
    priority?: string[];
    /** shorthand：等价于 replace.replaceMap */
    replaceMap?: Record<string, string>;
    /** shorthand：等价于 replace.preserve */
    preserve?: string[];
    children?: ReactNode;
}
declare function IconProvider({ collection, weight, size, color, allowRemote, fallbackCollections, replace, targetCollection, priority, replaceMap, preserve, children, }: IconProviderProps): react_jsx_runtime.JSX.Element;
declare function useIconContext(): IconContextValue;

export { Add, AddressBook, Ai, AirTrafficControl, Airplane, AirplaneInFlight, AirplaneLanding, AirplaneTakeoff, AirplaneTilt, Airplay, Alarm, Alien, AlignBottom, AlignBottomSimple, AlignCenterHorizontal, AlignCenterHorizontalSimple, AlignCenterVertical, AlignCenterVerticalSimple, AlignLeft, AlignLeftSimple, AlignRight, AlignRightSimple, AlignTop, AlignTopSimple, AmazonLogo, Anchor, AnchorSimple, Android, AndroidLogo, AngularLogo, Aperture, AppStore, AppStoreLogo, AppWindow, Apple, AppleIntelligence2a, AppleIntelligence2b, AppleIntelligenceA, AppleIntelligenceB, AppleLogo, ApplePodcastsLogo, Arc, Archive, ArchiveBox, ArchiveTray, Armchair, ArrowArcLeft, ArrowArcRight, ArrowBendDoubleUpLeft, ArrowBendDoubleUpRight, ArrowBendDownLeft, ArrowBendDownRight, ArrowBendLeftDown, ArrowBendLeftUp, ArrowBendRightDown, ArrowBendRightUp, ArrowBendUpLeft, ArrowBendUpRight, ArrowCircleDown, ArrowCircleDownLeft, ArrowCircleDownRight, ArrowCircleLeft, ArrowCircleRight, ArrowCircleUp, ArrowCircleUpLeft, ArrowCircleUpRight, ArrowClockwise, ArrowCounterClockwise, ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowElbowDownLeft, ArrowElbowDownRight, ArrowElbowLeft, ArrowElbowLeftDown, ArrowElbowLeftUp, ArrowElbowRight, ArrowElbowRightDown, ArrowElbowRightUp, ArrowElbowUpLeft, ArrowElbowUpRight, ArrowFall, ArrowFatDown, ArrowFatLeft, ArrowFatLineDown, ArrowFatLineLeft, ArrowFatLineRight, ArrowFatLineUp, ArrowFatLinesDown, ArrowFatLinesLeft, ArrowFatLinesRight, ArrowFatLinesUp, ArrowFatRight, ArrowFatUp, ArrowLeft, ArrowLineDown$1 as ArrowLineDown, ArrowLineDownLeft, ArrowLineDownRight, ArrowLineLeft$1 as ArrowLineLeft, ArrowLineRight$1 as ArrowLineRight, ArrowLineUp$1 as ArrowLineUp, ArrowLineUpDown, ArrowLineUpLeft, ArrowLineUpRight, ArrowRight, ArrowRise, ArrowSquareDown, ArrowSquareDownLeft, ArrowSquareDownRight, ArrowSquareIn, ArrowSquareLeft, ArrowSquareOut, ArrowSquareRight, ArrowSquareUp, ArrowSquareUpLeft, ArrowSquareUpRight, ArrowUDownLeft, ArrowUDownRight, ArrowULeftDown, ArrowULeftUp, ArrowURightDown, ArrowURightUp, ArrowUUpLeft, ArrowUUpRight, ArrowUp, ArrowUpLeft, ArrowUpRight, ArrowsClockwise, ArrowsCounterClockwise, ArrowsDown, ArrowsDownUp$1 as ArrowsDownUp, ArrowsHorizontal, ArrowsIn, ArrowsInCardinal, ArrowsInLineHorizontal, ArrowsInLineVertical, ArrowsInSimple, ArrowsLeftRight, ArrowsMerge, ArrowsOut, ArrowsOutCardinal, ArrowsOutLineHorizontal, ArrowsOutLineVertical, ArrowsOutSimple, ArrowsSplit, ArrowsUp, ArrowsVertical, Article, ArticleMedium, ArticleNyTimes, Asterisk, AsteriskSimple, At, Atom, Avatar3d01, Avatar3d0112, Avatar3d01120, Avatar3d01144, Avatar3d011536, Avatar3d01168, Avatar3d01192, Avatar3d01240, Avatar3d0136, Avatar3d01384, Avatar3d0160, Avatar3d0172, Avatar3d01768, Avatar3d0184, Avatar3d0196, Avatar3d02, Avatar3d0212, Avatar3d02120, Avatar3d02144, Avatar3d021536, Avatar3d02168, Avatar3d02192, Avatar3d02240, Avatar3d0236, Avatar3d02384, Avatar3d0260, Avatar3d0272, Avatar3d02768, Avatar3d0284, Avatar3d0296, Avatar3d03, Avatar3d0312, Avatar3d03120, Avatar3d03144, Avatar3d031536, Avatar3d03168, Avatar3d03192, Avatar3d03240, Avatar3d0336, Avatar3d03384, Avatar3d0360, Avatar3d0372, Avatar3d03768, Avatar3d0384, Avatar3d0396, Avatar3d04, Avatar3d0412, Avatar3d04120, Avatar3d04144, Avatar3d041536, Avatar3d04168, Avatar3d04192, Avatar3d04240, Avatar3d0436, Avatar3d04384, Avatar3d0460, Avatar3d0472, Avatar3d04768, Avatar3d0484, Avatar3d0496, AvatarAbstract01, AvatarAbstract0112, AvatarAbstract01120, AvatarAbstract01144, AvatarAbstract011536, AvatarAbstract01168, AvatarAbstract01192, AvatarAbstract01240, AvatarAbstract0136, AvatarAbstract01384, AvatarAbstract0160, AvatarAbstract0172, AvatarAbstract01768, AvatarAbstract0184, AvatarAbstract0196, AvatarAbstract02, AvatarAbstract0212, AvatarAbstract02120, AvatarAbstract02144, AvatarAbstract021536, AvatarAbstract02168, AvatarAbstract02192, AvatarAbstract02240, AvatarAbstract0236, AvatarAbstract02384, AvatarAbstract0260, AvatarAbstract0272, AvatarAbstract02768, AvatarAbstract0284, AvatarAbstract0296, AvatarAbstract03, AvatarAbstract0312, AvatarAbstract03120, AvatarAbstract03144, AvatarAbstract031536, AvatarAbstract03168, AvatarAbstract03192, AvatarAbstract03240, AvatarAbstract0336, AvatarAbstract03384, AvatarAbstract0360, AvatarAbstract0372, AvatarAbstract03768, AvatarAbstract0384, AvatarAbstract0396, AvatarAbstract04, AvatarAbstract0412, AvatarAbstract04120, AvatarAbstract04144, AvatarAbstract041536, AvatarAbstract04168, AvatarAbstract04192, AvatarAbstract04240, AvatarAbstract0436, AvatarAbstract04384, AvatarAbstract0460, AvatarAbstract0472, AvatarAbstract04768, AvatarAbstract0484, AvatarAbstract0496, AvatarByewind, AvatarByewind12, AvatarByewind120, AvatarByewind144, AvatarByewind1536, AvatarByewind168, AvatarByewind192, AvatarByewind240, AvatarByewind36, AvatarByewind384, AvatarByewind60, AvatarByewind72, AvatarByewind768, AvatarByewind84, AvatarByewind96, AvatarDefault, AvatarDefault12, AvatarDefault120, AvatarDefault144, AvatarDefault1536, AvatarDefault168, AvatarDefault192, AvatarDefault240, AvatarDefault36, AvatarDefault384, AvatarDefault60, AvatarDefault72, AvatarDefault768, AvatarDefault84, AvatarDefault96, AvatarFemale01, AvatarFemale0112, AvatarFemale01120, AvatarFemale01144, AvatarFemale011536, AvatarFemale01168, AvatarFemale01192, AvatarFemale01240, AvatarFemale0136, AvatarFemale01384, AvatarFemale0160, AvatarFemale0172, AvatarFemale01768, AvatarFemale0184, AvatarFemale0196, AvatarFemale02, AvatarFemale0212, AvatarFemale02120, AvatarFemale02144, AvatarFemale021536, AvatarFemale02168, AvatarFemale02192, AvatarFemale02240, AvatarFemale0236, AvatarFemale02384, AvatarFemale0260, AvatarFemale0272, AvatarFemale02768, AvatarFemale0284, AvatarFemale0296, AvatarFemale03, AvatarFemale0312, AvatarFemale03120, AvatarFemale03144, AvatarFemale031536, AvatarFemale03168, AvatarFemale03192, AvatarFemale03240, AvatarFemale0336, AvatarFemale03384, AvatarFemale0360, AvatarFemale0372, AvatarFemale03768, AvatarFemale0384, AvatarFemale0396, AvatarFemale04, AvatarFemale0412, AvatarFemale04120, AvatarFemale04144, AvatarFemale041536, AvatarFemale04168, AvatarFemale04192, AvatarFemale04240, AvatarFemale0436, AvatarFemale04384, AvatarFemale0460, AvatarFemale0472, AvatarFemale04768, AvatarFemale0484, AvatarFemale0496, AvatarFemale05, AvatarFemale0512, AvatarFemale05120, AvatarFemale05144, AvatarFemale051536, AvatarFemale05168, AvatarFemale05192, AvatarFemale05240, AvatarFemale0536, AvatarFemale05384, AvatarFemale0560, AvatarFemale0572, AvatarFemale05768, AvatarFemale0584, AvatarFemale0596, AvatarFemale06, AvatarFemale0612, AvatarFemale06120, AvatarFemale06144, AvatarFemale061536, AvatarFemale06168, AvatarFemale06192, AvatarFemale06240, AvatarFemale0636, AvatarFemale06384, AvatarFemale0660, AvatarFemale0672, AvatarFemale06768, AvatarFemale0684, AvatarFemale0696, AvatarMale01, AvatarMale0112, AvatarMale01120, AvatarMale01144, AvatarMale011536, AvatarMale01168, AvatarMale01192, AvatarMale01240, AvatarMale0136, AvatarMale01384, AvatarMale0160, AvatarMale0172, AvatarMale01768, AvatarMale0184, AvatarMale0196, AvatarMale02, AvatarMale0212, AvatarMale02120, AvatarMale02144, AvatarMale021536, AvatarMale02168, AvatarMale02192, AvatarMale02240, AvatarMale0236, AvatarMale02384, AvatarMale0260, AvatarMale0272, AvatarMale02768, AvatarMale0284, AvatarMale0296, AvatarMale03, AvatarMale0312, AvatarMale03120, AvatarMale03144, AvatarMale031536, AvatarMale03168, AvatarMale03192, AvatarMale03240, AvatarMale0336, AvatarMale03384, AvatarMale0360, AvatarMale0372, AvatarMale03768, AvatarMale0384, AvatarMale0396, AvatarMale04, AvatarMale0412, AvatarMale04120, AvatarMale04144, AvatarMale041536, AvatarMale04168, AvatarMale04192, AvatarMale04240, AvatarMale0436, AvatarMale04384, AvatarMale0460, AvatarMale0472, AvatarMale04768, AvatarMale0484, AvatarMale0496, AvatarMale05, AvatarMale0512, AvatarMale05120, AvatarMale05144, AvatarMale051536, AvatarMale05168, AvatarMale05192, AvatarMale05240, AvatarMale0536, AvatarMale05384, AvatarMale0560, AvatarMale0572, AvatarMale05768, AvatarMale0584, AvatarMale0596, AvatarMale06, AvatarMale0612, AvatarMale06120, AvatarMale06144, AvatarMale061536, AvatarMale06168, AvatarMale06192, AvatarMale06240, AvatarMale0636, AvatarMale06384, AvatarMale0660, AvatarMale0672, AvatarMale06768, AvatarMale0684, AvatarMale0696, Baby, Backpack, Backspace, Badge, Bag, BagSimple, Balloon, Bandaids, Bank, Barbell, Barcode, Barricade, Baseball, BaseballCap, Basket, Basketball, Bathtub, BatteryCharging, BatteryChargingVertical, BatteryEmpty, BatteryFull, BatteryHigh, BatteryLow, BatteryMedium, BatteryPlus, BatteryPlusVertical, BatteryVerticalEmpty, BatteryVerticalFull, BatteryVerticalHigh, BatteryVerticalLow, BatteryVerticalMedium, BatteryWarning, BatteryWarningVertical, Bed, BeerBottle, BeerStein, Behance, BehanceLogo, Bell, BellRinging, BellSimple, BellSimpleRinging, BellSimpleSlash, BellSimpleZ, BellSlash, BellZ, BezierCurve, Bicycle, Binoculars, Bird, Bluetooth, BluetoothConnected, BluetoothSlash, BluetoothX, Boat, BombEmoji, Bone, Book, BookBookmark, BookOpen, BookOpenText, Bookmark, BookmarkSimple, Bookmarks, BookmarksSimple, Books, Boot, BoundingBox, BowlFood, BracketsAngle, BracketsCurly, BracketsRound, BracketsSquare, Brain, Brandy, Bridge, Briefcase, BriefcaseMetal, Broadcast, Broom, Browser, Browsers, Bug, BugBeetle, BugDroid, Buildings, Bus, Butterfly, Cactus, Cake, Calculator, Calendar, CalendarBlank, CalendarCheck, CalendarPlus, CalendarX, CallBell, Camera, CameraPlus, CameraRotate, CameraSlash, Campfire, Car, CarProfile, CarSimple, Cardholder, Cards, CaretCircleDoubleDown, CaretCircleDoubleLeft, CaretCircleDoubleRight, CaretCircleDoubleUp, CaretCircleDown, CaretCircleLeft, CaretCircleRight, CaretCircleUp, CaretCircleUpDown, CaretDoubleDown, CaretDoubleLeft, CaretDoubleRight, CaretDoubleUp, CaretDown, CaretLeft, CaretRight, CaretUp, CaretUpDown, Carrot, CassetteTape, CastleTurret, Cat, CellSignalFull, CellSignalHigh, CellSignalLow, CellSignalMedium, CellSignalNone, CellSignalSlash, CellSignalX, Certificate, Chair, Chalkboard, ChalkboardSimple, ChalkboardTeacher, Champagne, ChargingStation, ChartBar, ChartBarHorizontal, ChartDonut, ChartLine, ChartLineDown, ChartLineUp, ChartPie, ChartPieSlice, ChartPolar, ChartScatter, Chat, ChatCentered, ChatCenteredDots, ChatCenteredText, ChatCircle, ChatCircleDots, ChatCircleText, ChatDashed, ChatDots, ChatGpt, ChatTeardrop, ChatTeardropDots, ChatTeardropText, ChatText, Chats, ChatsCircle, ChatsTeardrop, Check, CheckCircle, CheckFat, CheckSquare, CheckSquareOffset, CheckboxFalse, CheckboxMultiple, CheckboxTrue, Checks, Chip, Church, Circle, CircleDashed, CircleHalf, CircleHalfTilt, CircleNotch, CirclesFour, CirclesThree, CirclesThreePlus, Circuitry, Claude, Clipboard$1 as Clipboard, ClipboardText, Clock, ClockAfternoon, ClockClockwise, ClockCountdown, ClockCounterClockwise, Close, ClosedCaptioning, Cloud, CloudArrowDown, CloudArrowUp, CloudCheck, CloudFog, CloudLightning, CloudMoon, CloudRain, CloudSlash, CloudSnow, CloudSun, CloudWarning, CloudX, Club, CoatHanger, CodaLogo, Code, CodeBlock, CodeSimple, CodepenLogo, CodesandboxLogo, Coffee, Coin, CoinVertical, Coins, Columns, Command, Compass, CompassOff, CompassTool, type ComponentCategory, ComputerTower, Confetti, ContactlessPayment, Control, Cookie, CookingPot, Copilot, Copy$1 as Copy, CopySimple, Copyleft, Copyright, CornersIn, CornersOut, Couch, Cpu, CreditCard, Crop, Cross, Crosshair, CrosshairSimple, Crown, CrownSimple, Cube, CubeFocus, CubeTransparent, CurrencyBtc, CurrencyCircleDollar, CurrencyCny, CurrencyDollar, CurrencyDollarSimple, CurrencyEth, CurrencyEur, CurrencyGbp, CurrencyInr, CurrencyJpy, CurrencyKrw, CurrencyKzt, CurrencyNgn, CurrencyRub, Cursor, CursorClick, CursorText, CursorsBeachball, CursorsCross, CursorsDefault, CursorsHandGrabbing, CursorsHandOpen, CursorsHandPointing, CursorsMenu, CursorsMove, CursorsResizeDown, CursorsResizeLeft, CursorsResizeLeftRight, CursorsResizeNorthEastSouthWest, CursorsResizeNorthSouth, CursorsResizeNorthWestSouthEast, CursorsResizeRight, CursorsResizeUp, CursorsResizeUpDown, CursorsResizeWestEast, CursorsTextCursor, CursorsZoomIn, CursorsZoomOut, Cylinder, Database, DefaultIcon, Desktop, DesktopTower, Detective, DevToLogo, DeviceMobile, DeviceMobileCamera, DeviceMobileSpeaker, DeviceTablet, DeviceTabletCamera, DeviceTabletSpeaker, Devices, Diamond, DiamondsFour, DiceFive, DiceFour, DiceOne, DiceSix, DiceThree, DiceTwo, Disc, Discord, DiscordLogo, Divide, Dna, DocxIcon, Dog, Door, DoorOpen, Dot, DotCircle, DotOutline, DotSquare, DotsNine, DotsSix, DotsSixVertical, DotsThree, DotsThreeCircle, DotsThreeCircleVertical, DotsThreeOutline, DotsThreeOutlineVertical, DotsThreeVertical, Download, DownloadSimple, Dress, Dribbble, DribbbleLogo, Drop, DropHalf, DropHalfBottom, Dropbox, DropboxLogo, Ear, EarSlash, Egg, EggCrack, Eject, EjectSimple, Elevator, Engine, Envelope, EnvelopeOpen, EnvelopeSimple, EnvelopeSimpleOpen, Equalizer, Equals, Eraser, EscalatorDown, EscalatorUp, Exam, Excel, Exclude, ExcludeSquare, Explain, Export, Eye, EyeClosed, EyeSlash, Eyedropper, EyedropperSample, Eyeglasses, FaceBlowingKiss, FaceMask, FaceSteamFromNose, FaceTearsJoy, Facebook, FacebookLogo, Factory, Faders, FadersHorizontal, Fan, FastForward, FastForwardCircle, Feather, FigmaA, FigmaB, FigmaLogo, File, FileArchive, FileArrowDown, FileArrowUp, FileAudio, FileCloud, FileCode, FileCss, FileCsv, FileDashed, FileDoc, FileHtml, FileImage, FileJpg, FileJs, FileJsx, FileLock, FileMinus, FilePdf, FilePlus, FilePng, FilePpt, FileRs, FileSearch, FileSql, FileSvg, FileText, FileTs, FileTsx, FileVideo, FileVue, FileX, FileXls, FileZip, Files, FilmReel, FilmScript, FilmSlate, FilmStrip, Fingerprint, FingerprintSimple, FinnTheHuman, Fire, FireExtinguisher, FireSimple, FirstAid, FirstAidKit, Fish, FishSimple, Flag, FlagBanner, FlagCheckered, FlagPennant, Flame, Flashlight, Flask, FloppyDisk, FloppyDiskBack, FlowArrow, Flower, FlowerLotus, FlowerTulip, FlyingSaucer, Folder, FolderDashed, FolderLock, FolderMinus, FolderNotch, FolderNotchMinus, FolderNotchOpen, FolderNotchPlus, FolderOpen, FolderPlus, FolderSimple, FolderSimpleDashed, FolderSimpleLock, FolderSimpleMinus, FolderSimplePlus, FolderSimpleStar, FolderSimpleUser, FolderStar, FolderUser, Folders, Football, Footprints, ForkKnife, FormIcon, FourLeafClover, FourPointedStar, FrameCorners, Framer, FramerLogo, Function, Funnel, FunnelSimple, GameController, Garage, GasCan, GasPump, Gauge, Gavel, Gear, GearFine, GearSix, Gemini, GenderFemale, GenderIntersex, GenderMale, GenderNeuter, GenderNonbinary, GenderTransgender, Geometric01, Geometric02, Geometric03, Geometric04, Geometric05, Geometric06, Geometric07, Ghost, Gif, Gift, GitBranch, GitCommit, GitDiff, GitFork, GitMerge, GitPullRequest, Github, GithubLogo, GitlabLogo, GitlabLogoSimple, Globe, GlobeHemisphereEast, GlobeHemisphereWest, GlobeSimple, GlobeStand, Goggles, GoodreadsLogo, Google, GoogleCardboardLogo, GoogleChromeLogo, GoogleDrive, GoogleDriveLogo, GoogleLogo, GooglePhotosLogo, GooglePlay, GooglePlayLogo, GooglePodcastsLogo, Goto, Gradient, Gradient01, Gradient02, Gradient03, Gradient04, Gradient05, Gradient06, Gradient07, Gradient08, Gradient09, Gradient10, Gradient11, Gradient12, Gradient13, Gradient14, GraduationCap, Grains, GrainsSlash, Graph, GridFour, GridNine, GrinningCat, GrinningFaceSweat, Grok, Guitar, Gumroad, Hamburger, Hammer, Hand, HandCoins, HandEye, HandFist, HandGrabbing, HandHeart, HandPalm, HandPointing, HandSoap, HandSwipeLeft, HandSwipeRight, HandTap, HandWaving, Handbag, HandbagSimple, HandsClapping, HandsPraying, Handshake, HardDrive, HardDrives, Hash, HashStraight, Headlights, Headphones, Headset, Heart, HeartArrow, HeartBreak, HeartHalf, HeartStraight, HeartStraightBreak, Heartbeat, Help, Hexagon, HighHeel, HighlighterCircle, Hoodie, HorizontalScreen, Horse, Hourglass, HourglassHigh, HourglassLow, HourglassMedium, HourglassSimple, HourglassSimpleHigh, HourglassSimpleLow, HourglassSimpleMedium, House, HouseLine, HouseSimple, Humanoid, HundredPoints, ICloud, IceCream, Icon, type IconCollectionName, IconProvider, IconSet, IconSize16, IconSize20, IconSize24, IconSize28, IconSize32, IconSize40, IconSize48, IconSize80, type IconUsageName, IdentificationBadge, IdentificationCard, Illustration, Illustration01, Illustration02, Illustration03, Illustration04, Illustration05, Illustration06, Illustration07, Illustration08, Illustration09, Illustration10, Illustration11, Illustration12, Illustration13, Illustration14, Illustration15, Illustration16, Illustration17, Illustration18, Illustration19, Illustration20, Illustration21, Illustration22, Illustration23, Illustration24, Illustration25, Illustration26, Illustration27, Illustration28, Image, Image01, ImageLoading, ImageSquare, Images, ImagesSquare, Infinity, Info, Instagram, InstagramLogo, Intersect, IntersectSquare, IntersectThree, Jeep, Kanban, Key, KeyReturn, Keyboard, Keyhole, Knife, Ladder, LadderSimple, Lamp, Laptop, Layout, Leaf, LemonSqueezy, Lifebuoy, Lightbulb, LightbulbFilament, Lighthouse, Lightning, LightningA, LightningSlash, Line, LineDrawing01, LineDrawing02, LineDrawing03, LineSegment, LineSegments, Link, LinkBreak, LinkSimple, LinkSimpleBreak, LinkSimpleHorizontal, LinkSimpleHorizontalBreak, LinkedIn, LinkedinLogo, LinuxLogo, List, ListBullets, ListChecks, ListDashes, ListMagnifyingGlass, ListNumbers, ListPlus, Lock, LockKey, LockKeyOpen, LockLaminated, LockLaminatedOpen, LockOpen, LockSimple, LockSimpleOpen, Lockers, Loop, LoudlyCryingFace, MagicWand, Magnet, MagnetStraight, MagnifyingGlass, MagnifyingGlassMinus, MagnifyingGlassPlus, MapPin, MapPinLine, MapTrifold, MarkerCircle, Martini, MaskHappy, MaskSad, Mastercard, MathOperations, Maximize, Medal, MedalMilitary, Medium, MediumLogo, Megaphone, MegaphoneSimple, Messenger, MessengerLogo, Meta, MetaLogo, Metronome, Microphone, MicrophoneSlash, MicrophoneStage, Microsoft, MicrosoftExcelLogo, MicrosoftOutlookLogo, MicrosoftPowerpointLogo, MicrosoftTeamsLogo, MicrosoftWordLogo, Midjourney, Minimal01, Minimal02, Minimal03, Minimize, Minus, MinusCircle, MinusSquare, Money, Monitor, MonitorPlay, Moon, MoonStars, Moped, MopedFront, Mosque, Motorcycle, Mountains, Mouse, MouseSimple, MusicNote, MusicNoteSimple, MusicNotes, MusicNotesPlus, MusicNotesSimple, NavigationArrow, Needle, Newspaper, NewspaperClipping, Nintendo, Notches, Note, NoteBlank, NotePencil, Notebook, Notepad$1 as Notepad, Notification, Notion, NotionLogo, NumberCircleEight, NumberCircleFive, NumberCircleFour, NumberCircleNine, NumberCircleOne, NumberCircleSeven, NumberCircleSix, NumberCircleThree, NumberCircleTwo, NumberCircleZero, NumberEight, NumberFive, NumberFour, NumberNine, NumberOne, NumberSeven, NumberSix, NumberSquareEight, NumberSquareFive, NumberSquareFour, NumberSquareNine, NumberSquareOne, NumberSquareSeven, NumberSquareSix, NumberSquareThree, NumberSquareTwo, NumberSquareZero, NumberThree, NumberTwo, NumberZero, Nut, NyTimesLogo, Octagon, OfficeChair, OneDrive, OneNote, OnenoteIcon, Option, OrangeSlice, Package, PaintBrush, PaintBrushBroad, PaintBrushHousehold, PaintBucket, PaintRoller, Palette, Pants, PaperPlane, PaperPlaneRight, PaperPlaneTilt, Paperclip, PaperclipHorizontal, Parachute, Paragraph, Parallelogram, Park, Password, Path, PatreonLogo, Pause, PauseCircle, PawPrint, PayPal, PayWave, PaypalLogo, Peace, Pen, PenNib, PenNibStraight, Pencil, PencilCircle, PencilLine, PencilSimple, PencilSimpleLine, PencilSimpleSlash, PencilSlash, Pentagram, Pepper, Percent, Perplexity, Person, PersonArmsSpread, PersonSimple, PersonSimpleBike, PersonSimpleRun, PersonSimpleThrow, PersonSimpleWalk, Perspective, Phone, PhoneCall, PhoneDisconnect, PhoneIncoming, PhoneOutgoing, PhonePlus, PhoneSlash, PhoneX, PhosphorLogo, Pi, PianoKeys, PictureInPicture, PiggyBank, Pill, Pinterest, PinterestLogo, Pinwheel, Pizza, Placeholder, Planet, Plant, Play, PlayCircle, PlayPause, Playlist, Plug, PlugCharging, Plugs, PlugsConnected, Plus, PlusCircle, PlusMinus, PlusSquare, PokerChip, PoliceCar, Polygon, Popcorn, PottedPlant, Power, PowerPoint, PptIcon, Prescription, Presentation, PresentationChart, Printer, Prohibit, ProhibitInset, ProjectorScreen, ProjectorScreenChart, Pulse, PushPin, PushPinSimple, PushPinSimpleSlash, PushPinSlash, PuzzlePiece, QrCode, QrCodeBig, Question, Queue, Quotes, Radical, Radio, RadioButton, RadioFalse, RadioTrue, RadioTrueAlt, Radioactive, Rainbow, RainbowCloud, Rating1, Rating2, Rating3, Rating4, Rating5, ReadCvLogo, Receipt, ReceiptX, Record$1 as Record, Rectangle, Recycle, RedHeart, Reddit, RedditLogo, Repeat, RepeatOnce, Repost, Rewind, RewindCircle, Rightbar, RightbarMode, RoadHorizon, Robot, RobotEmoji, Rocket, RocketLaunch, Round, RoundAlt, RoundedCorner, Rows, Rss, RssLogo, RssSimple, Rug, Ruler, Scales, Scan, Scissors, Scooter, Screencast, ScribbleLoop, Scroll, Seal, SealCheck, SealQuestion, SealWarning, Search, SearchIcon, SeeMonkey, Selected, Selection, SelectionAll, SelectionBackground, SelectionForeground, SelectionInverse, SelectionPlus, SelectionSlash, Shapes, Share, ShareFat, ShareNetwork, Shield, ShieldCheck, ShieldCheckered, ShieldChevron, ShieldPlus, ShieldSlash, ShieldStar, ShieldWarning, ShirtFolded, ShootingStar, ShoppingBag, ShoppingBagOpen, ShoppingCart, ShoppingCartSimple, Shower, Shrimp, Shuffle, ShuffleAngular, ShuffleSimple, Sidebar, SidebarSimple, Sigma, SignIn, SignOut, Signature, Signpost, SimCard, Siren, SketchLogo, SkipBack, SkipBackCircle, SkipForward, SkipForwardCircle, Skull, SkullCrossbones, Slack, SlackLogo, Sliders, SlidersHorizontal, Slideshow, Smiley, SmileyAngry, SmileyBlank, SmileyMeh, SmileyNervous, SmileySad, SmileySticker, SmileyWink, SmileyXEyes, SmilingFaceHearts, SmilingFaceHorns, SmilingFaceSunglasses, Snapchat, SnapchatLogo, Sneaker, SneakerMove, SnowIcon, SnowLogo, Snowflake, SnowflakeEmoji, Snowman, SoccerBall, SortAscending, SortDescending, SoundcloudLogo, Spade, Sparkle, SpeakerHifi, SpeakerHigh, SpeakerLow, SpeakerNone, SpeakerSimpleHigh, SpeakerSimpleLow, SpeakerSimpleNone, SpeakerSimpleSlash, SpeakerSimpleX, SpeakerSlash, SpeakerX, Spinner, SpinnerGap, Spiral, SplitHorizontal, SplitVertical, SpotifyLogo, Square, SquareHalf, SquareHalfBottom, SquareLogo, SquareSplitHorizontal, SquareSplitVertical, SquaresFour, Stack, StackOverflowLogo, StackSimple, Stairs, Stamp, Star, StarAndCrescent, StarFour$1 as StarFour, StarHalf, StarOfDavid, Stars, SteeringWheel, Steps, Stethoscope, Sticker, Stool, Stop, StopAlt, StopCircle, StopSecondary, Storefront, Strategy, Stripe, StripeLogo, Student, Subtitles, Subtract, SubtractSquare, Suitcase, SuitcaseRolling, SuitcaseSimple, Sun, SunDim, SunHorizon, Sunglasses, Svelte, Swap, Swatches, SwimmingPool, SwitchFalse, SwitchPoint, SwitchTrue, Sword, Synagogue, Syringe, TShirt, Table, Tabs, Tag, TagChevron, TagSimple, Target, Taxi, Telegram, TelegramLogo, Television, TelevisionSimple, TennisBall, Tent, Terminal, TerminalWindow, TestTube, TextA, TextAUnderline, TextAa, TextAlignCenter, TextAlignJustify, TextAlignLeft, TextAlignRight, TextB, TextColumns, TextH, TextHFive, TextHFour, TextHOne, TextHSix, TextHThree, TextHTwo, TextIndent, TextItalic, TextOutdent, TextStrikethrough, TextT, TextUnderline, Textbox, Thermometer, ThermometerCold, ThermometerHot, ThermometerSimple, Threads, ThreeDots, ThumbsDown, ThumbsUp, Ticket, TidalLogo, TikTok, TiktokLogo, Timer, Tipi, ToggleLeft, ToggleRight, Toilet, ToiletPaper, Toolbox, Tooth, Tote, ToteSimple, Trademark, TrademarkRegistered, TrafficCone, TrafficSign, TrafficSignal, Train, TrainRegional, TrainSimple, Tram, Translate, Trash, TrashSimple, Tray, Tree, TreeEvergreen, TreePalm, TreeStructure, TrendDown, TrendUp, Triangle, Trophy, Truck, Twitch, TwitchLogo, Twitter, TwitterLogo, TxtIcon, Umbrella, UmbrellaEmoji, UmbrellaSimple, Unite, UniteSquare, Upload, UploadSimple, Usb, User, UserCircle, UserCircleGear, UserCircleMinus, UserCirclePlus, UserFocus, UserGear, UserList, UserMinus, UserPlus, UserRectangle, UserSquare, UserSwitch, Users, UsersFour, UsersThree, Van, Variables, Vault, VerticalScreen, Vibrate, Video, VideoCamera, VideoCameraSlash, Vignette, VinylRecord, VirtualReality, Virus, Visa, Voice, Voicemail, Volleyball, Wall, Wallet, Warehouse, Warning, WarningCircle, WarningDiamond, WarningOctagon, Watch, WaveSawtooth, WaveSine, WaveSquare, WaveTriangle, Waveform, Waves, Webcam, WebcamSlash, WebhooksLogo, WechatLogo, WhatsApp, WhatsappLogo, Wheelchair, WheelchairMotion, WifiHigh, WifiLow, WifiMedium, WifiNone, WifiSlash, WifiX, Wind, Windowed, WindowsLogo, Wine, WinkingFace, WinkingFaceTongue, Word, Wrench, X, XCircle$1 as XCircle, XLogo, XSquare, XlsxIcon, YinYang, Youtube, YoutubeLogo, componentNames, iconsByCollection, iconsByDefault, index$1 as phosphor, index$2 as snowui, index as special, useIconContext };

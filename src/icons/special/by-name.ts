import DefaultIcon from './DefaultIcon';
import DocxIcon from './DocxIcon';
import FormIcon from './FormIcon';
import Notepad from './Notepad';
import OnenoteIcon from './OnenoteIcon';
import PptIcon from './PptIcon';
import RoundAlt from './RoundAlt';
import SearchIcon from './SearchIcon';
import TxtIcon from './TxtIcon';
import XlsxIcon from './XlsxIcon';

export const iconsByName = {
  'default-icon': DefaultIcon,
  'docx-icon': DocxIcon,
  'form-icon': FormIcon,
  'notepad': Notepad,
  'onenote-icon': OnenoteIcon,
  'ppt-icon': PptIcon,
  'round-alt': RoundAlt,
  'search-icon': SearchIcon,
  'txt-icon': TxtIcon,
  'xlsx-icon': XlsxIcon,
} as const;

export type IconName = keyof typeof iconsByName;

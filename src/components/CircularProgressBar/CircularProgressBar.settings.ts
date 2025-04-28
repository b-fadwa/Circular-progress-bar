import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    key: 'strokeWidth',
    label: 'Stroke width',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 10,
  },
  {
    key: 'displayBackground',
    label: 'Display background',
    type: ESetting.CHECKBOX,
    defaultValue: false,
  },
  {
    key: 'backgroundPadding',
    label: 'Background padding',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 0,
  },
  {
    key: 'counterClockwise',
    label: 'Counter clockwise',
    type: ESetting.CHECKBOX,
    defaultValue: false,
  },
  {
    key: 'pathColor',
    label: 'Path color',
    type: ESetting.COLOR_PICKER,
    defaultValue: 'blue',
  },
  {
    key: 'trailColor',
    label: 'Trail color',
    type: ESetting.COLOR_PICKER,
    defaultValue: 'gray',
  },
  {
    key: 'showText',
    label: 'Show Text',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
  {
    key: 'fontSize',
    label: 'Font size',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 18,
  },
  {
    key: 'fontColor',
    label: 'Font color',
    type: ESetting.COLOR_PICKER,
    defaultValue: '#444444',
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;

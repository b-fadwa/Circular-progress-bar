import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { TbProgress } from 'react-icons/tb';

import CircularProgressBarSettings, { BasicSettings } from './CircularProgressBar.settings';

export default {
  craft: {
    displayName: 'CircularProgressBar',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(CircularProgressBarSettings, BasicSettings),
    },
  },
  info: {
    settings: CircularProgressBarSettings,
    displayName: 'CircularProgressBar',
    exposed: true,
    icon: TbProgress,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['number'],
    },
  },
  defaultProps: {
    style: {
      width: '250px',
      height: '250px',
    },
    strokeWidth: 10,
    displayBackground: false,
    backgroundPadding: 0,
    counterClockwise: false,
    pathColor: '#3498db',
    trailColor: '#f3f3f3',
    backgroundColor: '#eee',
    fontColor: '#444444',
    fontSize:18,
    showText:true,
  },
} as T4DComponentConfig<ICircularProgressBarProps>;

export interface ICircularProgressBarProps extends webforms.ComponentProps {
  strokeWidth: number;
  displayBackground: boolean;
  backgroundPadding: number;
  counterClockwise: boolean;
  pathColor: string;
  trailColor: string;
  backgroundColor: string;
  fontColor: string;
  fontSize: number;
  showText:boolean;
}

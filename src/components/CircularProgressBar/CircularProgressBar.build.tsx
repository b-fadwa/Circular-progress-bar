import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { ICircularProgressBarProps } from './CircularProgressBar.config';

const CircularProgressBar: FC<ICircularProgressBarProps> = ({
  strokeWidth,
  displayBackground,
  backgroundPadding,
  pathColor,
  trailColor,
  backgroundColor,
  counterClockwise,
  showText,
  fontColor,
  fontSize,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <CircularProgressbar
        background={displayBackground}
        backgroundPadding={backgroundPadding}
        strokeWidth={strokeWidth}
        counterClockwise={counterClockwise}
        maxValue={100}
        minValue={0}
        value={50}
        text={showText ? `${60}%` : ''}
        styles={{
          path: {
            stroke: pathColor,
          },
          trail: {
            stroke: trailColor,
            strokeLinecap: 'round',
          },
          ...(showText && {
            text: {
              fill: fontColor,
              fontSize: `${fontSize}px`,
            },
          }),
          background: {
            fill: backgroundColor,
          },
        }}
      />
    </div>
  );
};

export default CircularProgressBar;

import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { ICircularProgressBarProps } from './CircularProgressBar.config';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar: FC<ICircularProgressBarProps> = ({
  strokeWidth,
  displayBackground,
  backgroundPadding,
  pathColor,
  trailColor,
  backgroundColor,
  counterClockwise,
  fontSize,
  fontColor,
  showText,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<number>(0);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<number>();
      setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <CircularProgressbar
        maxValue={100}
        minValue={0}
        value={value}
        text={showText ? `${value}%` : ''}
        strokeWidth={strokeWidth}
        background={displayBackground}
        backgroundPadding={backgroundPadding}
        counterClockwise={counterClockwise}
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

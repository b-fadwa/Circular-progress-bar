import config, { ICircularProgressBarProps } from './CircularProgressBar.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './CircularProgressBar.build';
import Render from './CircularProgressBar.render';

const CircularProgressBar: T4DComponent<ICircularProgressBarProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

CircularProgressBar.craft = config.craft;
CircularProgressBar.info = config.info;
CircularProgressBar.defaultProps = config.defaultProps;

export default CircularProgressBar;

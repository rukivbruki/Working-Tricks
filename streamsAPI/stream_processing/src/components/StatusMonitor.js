import { Progress, Result } from 'antd';
import { SmileOutlined, SyncOutlined } from '@ant-design/icons';
import { memo, useEffect } from 'react';

import useAnimatedLog from '../custom-hooks/useAnimatedLog';

const Style = {
  processing: ['color: black', 'background-color: transparent'],
};

const StatusMonitor = ({ fetchedPercentage, processedPercentage }) => {
  const [LogMessageAnimation, intervalId, log] = useAnimatedLog();
  const downloading = fetchedPercentage !== 100 ? 'downloading' : '';
  const processing = processedPercentage !== 100 ? 'processing' : '';
  const done = processedPercentage === 100 ? 'done' : '';

  useEffect(() => {
    if (!downloading) {
      if (processedPercentage === 0) {
        LogMessageAnimation();
      }
    }
  }, [downloading]);

  useEffect(() => {
    if (!downloading) {
      clearInterval(intervalId);
      log(`${Math.floor(processedPercentage)}%`, Style.processing);
    }
    if (done) {
      log('data processing has been done!');
    }
  }, [processedPercentage]);

  const phrases = {
    [downloading]: 'Loading data still in progress ...',
    [processing]: 'We are impatiently waiting for results.',
    [done]: 'Great, we have done all the operations!',
  };

  return (
    <>
      <Progress
        percent={Math.floor(fetchedPercentage)}
        steps={20}
        size="large"
        strokeColor="#52c41a"
      />
      <Result
        icon={done ? <SmileOutlined size="small" /> : <SyncOutlined spin />}
        title={phrases.downloading || phrases.processing || phrases.done}
      />
    </>
  );
};

export default memo(StatusMonitor);

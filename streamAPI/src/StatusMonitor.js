import { Progress, Result } from 'antd';
import { SmileOutlined, SyncOutlined } from '@ant-design/icons';

export default function StatusMonitor({
  fetchedPercentage,
  processedPercentage,
}) {
  // console.log(fetchedPercentage);
  console.log(processedPercentage);
  const downloading = fetchedPercentage !== 100 ? 'downloading' : '';
  const processing = processedPercentage !== 100 ? 'processing' : '';
  const done = processedPercentage === 100 ? 'done' : '';

  const phrases = {
    [downloading]: 'Loading data still in progress ...',
    [processing]: 'Wait impatiently for results',
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
}

import { useState, useEffect } from 'react';
import { Spin } from 'antd'
import {LogItem} from '@components';

export function LogCard(props) {
  const { data } = props;
  const [logs, setLogs] = useState(data);

  useEffect(() => {
    setLogs(data);
  }, [data]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 4,
      }}
    >
      <div
        style={{
          display: 'flex',
          marginBottom: 4,
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        <span style={{ flex: 1 }}>Passenger Name</span>
        <span style={{ flex: 1 }}>Airport</span>
        <span style={{ flex: 1 }}>Timestamp</span>
        <span style={{ flex: 1 }}>Type</span>
      </div>
      {
        logs?.length === 0 && <Spin />
      }
      {logs.map((item, i) => (
        <LogItem key={i} item={item}></LogItem>
      ))}
    </div>
  );
}


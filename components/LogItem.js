import dayjs from 'dayjs';

export function LogItem(props) {
  const { item } = props;
  return (
    <div style={{ display: 'flex' }}>
      <span style={{ flex: 1 }}>{item.passengerName}</span>
      <span style={{ flex: 1 }}>{item.airport}</span>
      <span style={{ flex: 1 }}>{dayjs(item.timestamp*1000).format('DD/MM/YYYY HH:mm')}</span>
      <span style={{ flex: 1 }}>
        {item.type === 'departure' ? 'Departure' : 'Arrival'}
      </span>
    </div>
  );
}


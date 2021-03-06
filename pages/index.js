import { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'antd'
import dayjs from 'dayjs';
import Image from 'next/image';

import { FlightLogService } from '@services';
import { LogCard, LogForm, BoardingPassCard, myLoader } from '@components'
import airportList from '@mock/airport.json'
import styles from '@styles/Home.module.css';


export default function Home() {
  const [logs, setLogs] = useState([]);
  const [langdingTime, setLandingTime] = useState({})

  const handleAddLog = (log) => {
    const newLogs = [...logs]
    newLogs.push(log)
    setLogs(newLogs);
  }

  const fetch = async () => {
    const data = await FlightLogService.getLogs()
    setLogs(data)
  };

  const avgTimeLanding = () => {
    const data = [...logs]
    let langdingTimeObject = {}
    data.forEach((d) => {
      if (d.type === 'arrival') {
        langdingTimeObject[d.passengerName] = {
          ...langdingTimeObject[d.passengerName],
          arrivalAirport: d?.airport,
          arrivalTimestemp: d?.timestamp,
          langingTime: langdingTimeObject?.[d.passengerName]?.departureTimestemp
            ? getHourMinSec(dayjs(d?.timestamp * 1000).diff(dayjs(langdingTimeObject?.[d.passengerName]?.departureTimestemp * 1000), 'second'))
            : null
        }
      } else {
        langdingTimeObject[d.passengerName] = {
          ...langdingTimeObject[d.passengerName],
          departureAirport: d?.airport,
          departureTimestemp: d?.timestamp,
          langingTime: langdingTimeObject?.[d.passengerName]?.arrivalTimestemp
            ? getHourMinSec(dayjs(langdingTimeObject?.[d.passengerName]?.arrivalTimestemp * 1000).diff(dayjs(d?.timestamp * 1000), 'second'))
            : null
        }
      }
    })
    setLandingTime({ ...langdingTimeObject })
  }

  const printAvg = () => {
    const data = { ...langdingTime }
    Object.keys(data)?.length > 0 && Object.keys(data)?.filter((key, i) =>
      data[key]?.arrivalTimestemp
    ).map((key) => console.log(
      'Passenger name: ',
      key,
      ' ',
      `${data[key]?.departureAirport} - ${data[key]?.arrivalAirport}: ${getHourMinSec(dayjs(data[key]?.arrivalTimestemp * 1000).diff(dayjs(data[key]?.departureTimestemp * 1000), 'second'))}`
    ))
  }

  useEffect(() => {
    if (logs?.length > 0) {
      avgTimeLanding()
    }
  }, [logs])

  const getHourMinSec = (seconds) => {
    const duration = dayjs.duration(seconds, 'second')
    const h = duration.hours() || ''
    const m = duration.minutes() || ''
    const s = duration.seconds() || ''
    return `${h && `${h} hr `}${m && `${m} min `}${s && `${s} sec`}`
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <nav className='nav'>
        <div className='nav-container'>
          <Image loader={myLoader} src='/flight64.png' alt='flight' width={64} height={64} />
          <span className='app-name'>Sky Airline</span>
        </div>
      </nav>
      <div className='airport'>

        <div className='airport-container'>
          <div className='item'>
            <span className='label'>Flight Logs: </span>
            <span className='count'>{logs?.length}</span>
          </div>
          <div className='item'>
            <span className='label'>Boarding pass: </span>
            <span className='count'>
              {Object.keys(langdingTime)?.filter((key, i) =>
                langdingTime[key]?.arrivalTimestemp
              ).length}
            </span>
          </div>
        </div>
        <Image loader={myLoader} src='/airport.jpg' alt='airport' width={1600} height={1066}/>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <Row justify='center'>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={24}>

                  <Row justify='space-between'>
                    <Col>
                      <h2>Flight Logs</h2>
                    </Col>
                    <Col>
                      <Button onClick={printAvg}>Print avg time to console</Button>
                    </Col>
                  </Row>
                  <Card className='card'>
                    <LogCard style={{ width: '100%' }} data={logs}></LogCard>
                  </Card>
                </Col>
                <Col span={12}>
                  <h2>Departure Logging</h2>
                  <Card className='card'>
                    <LogForm
                      style={{ width: '100%' }}
                      data={logs}
                      type={'departure'}
                      onSubmit={handleAddLog}
                      airportList={airportList}
                    ></LogForm>
                  </Card>
                </Col>
                <Col span={12}>
                  <h2>Arrival Logging</h2>
                  <Card className='card'>
                    <LogForm
                      style={{ width: '100%' }}
                      data={logs}
                      type={'arrival'}
                      onSubmit={handleAddLog}
                      airportList={airportList}
                    ></LogForm>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <h2>Boarding Pass</h2>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]} justify='space-between'>
                {
                  Object.keys(langdingTime)?.length > 0 && Object.keys(langdingTime)?.filter((key, i) =>
                    langdingTime[key]?.arrivalTimestemp
                  ).map((d, i) =>
                    <BoardingPassCard item={{ ...langdingTime[d], passengerName: d }} key={i} />)
                }
              </Row>
            </Col>
          </Row>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image loader={myLoader} src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}

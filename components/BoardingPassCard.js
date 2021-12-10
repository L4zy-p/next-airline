import dayjs from 'dayjs'

export function BoardingPassCard(props) {
  const { item } = props
  return <div className='card boarding-pass'>
  <div className='world-map'>
    <img src='/world-map.png' alt='world-map' />
  </div>
  <div className='left'>
    <div className='header space-between'>
      <div className='logo'>
        <img src='/plane-logo.png' alt='logo' />
      </div>
      <div className='airline-name'>Sky Airline</div>
      <div className='airline-desc'>
        <span>Boarding pass</span>
        <span>Business</span>
      </div>
    </div>
    <div className='content'>
      <div className='barcode'>
        <img src='/bar-code.png' alt='barcode' />
      </div>
      <div className='passenger-data data-left'>
        <div className='row-data'>
          <div className='data'>
            <div className='field-name'>Passenger name</div>
            <div className='field-data'>{item?.passengerName || 'n/a'}</div>
          </div>
          <div className='data'>
            <div className='field-name'>Date</div>
            <div className='field-data'>{dayjs(item.departureTimestemp * 1000).format('DMMM') || 'n/a'}</div>
          </div>
          <div className='data'>
            <div className='field-name'>Time</div>
            <div className='field-data'>{dayjs(item.departureTimestemp * 1000).format('HH:mm') || 'n/a'}</div>
          </div>
        </div>
        <div className='row-data'>
          <div className='data'>
            <div className='field-name'>Form</div>
            <div className='field-data'>{item?.departureAirport || 'n/a'}</div>
          </div>
          <div className='data'>
            <div className='field-name'>Flight</div>
            <div className='field-data'>{item?.flight || 'n/a'}</div>
          </div>
          <div className='data'>
            <div className='field-name'>Seat</div>
            <div className='field-data'>{item?.seat || 'n/a'}</div>
          </div>
        </div>
        <div className='row-data'>
          <div className='data'>
            <div className='field-name'>To</div>
            <div className='field-data'>{item?.arrivalAirport || 'n/a'}</div>
          </div>
          <div className='data'>
            <div className='field-name'>Gate</div>
            <div className='field-data'>{item?.gate || 'n/a'}</div>
          </div>
          <div className='data'>
            <div className='field-name'>Board till</div>
            <div className='field-data'>{item?.gate || 'n/a'}</div>
          </div>
        </div>
      </div>
    </div>
    <div className='footer'></div>
  </div>
  <div className='right'>
    <div className='header end'>
      <div className='airline-desc'>
        <span>Boarding pass</span>
        <span>Business</span>
      </div>
    </div>
    <div className='content'>
      <div className='passenger-data'>
        <div className='row-data'>
          <div className='data'>
            <div className='field-name'>Passenger name</div>
            <div className='field-data'>{item?.passengerName || 'n/a'}</div>
          </div>
        </div>
        <div className='row-data'>
          {/*
          */}
          <div className='data'>
            <div className='field-name'>Form</div>
            <div className='field-data'>{item?.departureAirport || 'n/a'}</div>
          </div>
        </div>
        <div className='row-data'>
          <div className='data'>
            <div className='field-name'>To</div>
            <div className='field-data'>{item?.arrivalAirport || 'n/a'}</div>
          </div>
        </div>
        <div className='row-data'>
          <div className='data mini'>
            <div className='field-name'>Date</div>
            <div className='field-data'>{dayjs(item.departureTimestemp * 1000).format('DMMM') || 'n/a'}</div>
          </div>
          <div className='data mini'>
            <div className='field-name'>Time</div>
            <div className='field-data'>{dayjs(item.departureTimestemp * 1000).format('HH:mm') || 'n/a'}</div>
          </div>
          <div className='data mini'>
            <div className='field-name'>Flight</div>
            <div className='field-data'>{item?.flight || 'n/a'}</div>
          </div>

        </div>
        <div className='row-data'>
          <div className='data mini'>
            <div className='field-name'>Seat</div>
            <div className='field-data'>{item?.seat || 'n/a'}</div>
          </div>
          <div className='data mini'>
            <div className='field-name'>Gate</div>
            <div className='field-data'>{item?.gate || 'n/a'}</div>
          </div>
        </div>
      </div>
    </div>
    <div className='footer'>
      <div className='logo mini'>
        <img src='/plane-logo.png' alt='logo' />
      </div>
    </div>
  </div>
</div>;
}

// TODO: add propTypes
// BoardingPassCard.propTypes = {};


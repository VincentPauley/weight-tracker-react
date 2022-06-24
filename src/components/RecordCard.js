import moment from 'moment';

import './RecordCard.css';

export default function RecordCard(props) {
  return (
    <li>
      <div className="Record-Card uk-card uk-card-default">
        <h3 className="uk-card-title">
          {moment(props.timestamp).format('MMMM Do YYYY, h:mm a')}
        </h3>
        <p>
          <span className="uk-text-bolder">{props.weight}</span>lbs
        </p>
      </div>
    </li>
  );
}

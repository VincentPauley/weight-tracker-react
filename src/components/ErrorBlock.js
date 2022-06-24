import './ErrorBlock.css';

export default function ErrorBlock(props) {
  return (
    <div className="ErrorBlock">
      <p className="uk-text-danger">{props.message}</p>
    </div>
  );
}

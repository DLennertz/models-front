import "./cardInfo.css";

const CardInfo = (info) => {
  return (
    <div className="cardInfo">
      <div>{info.props}</div>
    </div>
  );
};

export default CardInfo;

const CoinDescription = ({ description }) => {
  return <div className="box">{description || "Açıklama bulunamadı"}</div>;
};

export default CoinDescription;

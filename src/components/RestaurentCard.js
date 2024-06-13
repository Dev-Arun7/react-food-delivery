import { CDN_URL } from "../utils/constants";
const RestuarentCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, costForTwo } = resData?.info;

  return (
    <div className="res-card">
      <h3> {name} </h3>
      <img
        className="res-logo"
        alt="img"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h4> {} </h4>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestuarentCard;

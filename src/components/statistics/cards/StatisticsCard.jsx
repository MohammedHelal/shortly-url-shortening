import PropTypes from "prop-types";

function StatisticsCard({ heading, para, icon }) {
  return (
    <article className="card">
      <h4>{heading}</h4>
      <p>{para}</p>
      <img className="card-icon" src={icon} alt="card icon" />
    </article>
  );
}

StatisticsCard.propTypes = {
  heading: PropTypes.string,
  para: PropTypes.string,
  icon: PropTypes.string,
};

export default StatisticsCard;

import StatisticsCard from "./cards/StatisticsCard.jsx";
import "./Statistics.css";

function Statistics() {
  return (
    <section className="statistics">
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div>
        <StatisticsCard
          heading="Brand Recognition"
          para="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          icon="./images/icon-brand-recognition.svg"
        />
        <StatisticsCard
          heading="Detailed Records"
          para="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          icon="./images/icon-detailed-records.svg"
        />
        <StatisticsCard
          heading="Fully Customizable"
          para="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          icon="./images/icon-fully-customizable.svg"
        />
      </div>
      <div className="line" />
    </section>
  );
}

export default Statistics;

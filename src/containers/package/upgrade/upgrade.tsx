import Package from '../../../components/package/package';
import styles from "./upgrade.module.scss";

const UpgradePackage = () => {
  const packages = [
    {
      name: "Azam Play",
      price: "TZS 23,000",
      channelCount: "110+",
    },
    {
      name: "Azam Plus",
      price: "TZS 20,000",
      channelCount: "110+",
    },
    {
      name: "Azam Pure",
      price: "TZS 13,000",
      channelCount: "110+",
    },
  ];
  return (
    <div className={styles.container}>
      <p className={styles.title}>Upgrade Package</p>
      <div className={styles.currentPackage}>
        <p>Your Current Package</p>
        <p>Azam Lite</p>
      </div>
      <div className={styles.selectPackage}>
        <p>Select package</p>
        <div>
          {packages.map((item, index) => {
            return <Package key={index} {...item} />;
          })}
        </div>
      </div>
      <a>Talk to Customer Care</a>
    </div>
  );
};

export default UpgradePackage;

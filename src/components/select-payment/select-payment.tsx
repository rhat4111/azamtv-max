import styles from "./select-payment.module.scss";

const SelectPayment = () => {
  const payments = [
    {
      name: "TigoPesa",
      icon: "/images/payments/tigo.png",
    },
    {
      name: "Paypal",
      icon: "/images/payments/paypal.png",
    },
    {
      name: "DPO Group",
      icon: "/images/payments/dpo.png",
    },
    {
      name: "Airtel Money",
      icon: "/images/payments/airtel.png",
    },
    {
      name: "Vodafone M-Pesa",
      icon: "/images/payments/vodafone.png",
    },
  ];
  return (
    <div className={styles.container}>
      <p className={styles.title}>Select Payment Method</p>
      <div className={styles.body}>
        {payments.map((payment, index) => {
          return (
            <div key={index} className={styles.payment}>
              <div>
                <img src={payment.icon} />
                <p>{payment.name}</p>
              </div>
              <img src="/images/icons/circle.svg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectPayment;

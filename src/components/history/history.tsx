import React, { useState } from "react";
import { Button } from "antd";
import styles from "./history.module.scss";

const History = () => {
  const tabs = [
    { id: "payment", name: "Payment History" },
    { id: "transaction", name: "Transaction History" },
  ];
  const [selectedHistory, setSelectedHistory] = useState("payment");
  const paymentHistories = [
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
    },
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
    },
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
    },
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
    },
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
    },
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
    },
  ];

  const transactions = [
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
      to: "SILVER",
      period: {
        start: "08/06/2021",
        end: "15/06/2021",
      },
    },
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
      to: "SILVER",
      period: {
        start: "08/06/2021",
        end: "15/06/2021",
      },
    },
    {
      id: "117f932a4a",
      date: "22/01/2021",
      amount: "TZS 100",
      to: "SILVER",
      period: {
        start: "08/06/2021",
        end: "15/06/2021",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setSelectedHistory(tab.id)}
            className={`${tab.id === selectedHistory ? styles.active : ``}`}
            shape="round"
          >
            {tab.name}
          </Button>
        ))}
      </div>
      <div className={styles.body}>
        {selectedHistory === "payment" ? (
          <>
            {paymentHistories.map((payment, index) => {
              return (
                <div key={index}>
                  <div>
                    {payment.date}
                    <img alt="dot" src="/images/icons/dot.svg" />
                    ID {payment.id}
                  </div>
                  <p>Transferred Amount</p>
                  <p>{payment.amount}</p>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {transactions.map((transaction, index) => {
              return (
                <div key={index}>
                  <div>
                    {transaction.date}
                    <img alt="dot" src="/images/icons/dot.svg" />
                    ID {transaction.id}
                  </div>
                  <p>Transferred Amount</p>
                  <p>{transaction.amount}</p>
                  <div>
                    <div>
                      <p>Subscribed to</p>
                      <p>{transaction.to}</p>
                    </div>
                    <div>
                      <p>Start Date</p>
                      <p>{transaction.period.start}</p>
                    </div>
                    <div>
                      <p>End Date</p>
                      <p>{transaction.period.end}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default History;

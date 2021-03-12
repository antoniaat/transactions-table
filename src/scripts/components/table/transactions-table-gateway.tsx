import juniLogo from "../../../assets/images/juni-logo.png";
import paypalLogo from "../../../assets/images/paypal-logo.png";
import revolutLogo from "../../../assets/images/revolut-logo.png";

import "../../../styles/components/table/transactions-table-gateway.scss";

import React from "react";

interface Props {
  gateway: string;
}

const GATEWAY_TYPES: { [key: string]: string } = {
  revolut: revolutLogo,
  paypal: paypalLogo,
  juni: juniLogo,
};

const TransactionsTableGateway: React.FC<Props> = ({ gateway }) => {
  const sanitizedGatewayName = gateway.toLowerCase();
  const imgSrc = GATEWAY_TYPES[sanitizedGatewayName];

  return (
    <article className="transactions-table-gateway">
      <img src={imgSrc} alt={gateway} />
    </article>
  );
};

export default TransactionsTableGateway;

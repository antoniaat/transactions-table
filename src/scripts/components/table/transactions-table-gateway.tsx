import juniLogo from "../../../assets/images/juni-logo.png";
import paypalLogo from "../../../assets/images/paypal-logo.png";
import revolutLogo from "../../../assets/images/revolut-logo.png";

import "../../../styles/components/table/transactions-table-gateway.scss";

import React from "react";
import TableCell from "./table-cell";

interface Props {
  gateway: string;
  description: string;
}

const GATEWAY_TYPES: { [key: string]: string } = {
  revolut: revolutLogo,
  paypal: paypalLogo,
  juni: juniLogo,
};

const TransactionsTableGateway: React.FC<Props> = ({ gateway, description }) => {
  const sanitizedGatewayName = gateway.toLowerCase();
  const imgSrc = GATEWAY_TYPES[sanitizedGatewayName];

  return (
    <TableCell className="transactions-table-gateway" label="source">
      <article className="transactions-table-gateway-image">
        <img src={imgSrc} alt={gateway} />
      </article>
      <article className="transactions-table-gateway-text">{description}</article>
    </TableCell>
  );
};

export default TransactionsTableGateway;

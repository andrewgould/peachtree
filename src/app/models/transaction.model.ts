export interface Transaction {
  categoryCode: string;
  dates: {
    valueDate: string | number;
  };
  id: string;
  merchant: {
    accountNumber: string;
    name: string;
  };
  transaction: {
    amountCurrency: {
      amount: string | number;
      currencyCode: string;
    };
    creditDebitIndicator: string;
    type: string;
  };
}

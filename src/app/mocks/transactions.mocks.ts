import { Transaction } from '../models/transaction.model';

export const mockData: { data: Transaction[] } = {
  data: [
    {
      id: '21498fba-fdf9-470c-a4b4-df3aff6ab293',
      merchant: {
        name: 'Jerry Hildreth',
        accountNumber: 'SI64397745065188826',
      },
      dates: { valueDate: '2020-09-15' },
      categoryCode: '#1180aa',
      transaction: {
        type: 'Transaction',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '68.87' },
      },
    },
    {
      id: 'bfc6c9ee-1f3d-4521-84a0-052e67b23e9b',
      merchant: { name: 'Backbase', accountNumber: 'SI64397745065188826' },
      dates: { valueDate: 1600493600000 },
      categoryCode: '#12a580',
      transaction: {
        type: 'Salaries',
        creditDebitIndicator: 'CRDT',
        amountCurrency: { currencyCode: 'EUR', amount: 5000 },
      },
    },
    {
      id: '82b94da0-795a-4b14-81d6-defd4619d7e4',
      merchant: {
        name: 'H&M Online Store',
        accountNumber: 'SI64397745065188826',
      },
      dates: { valueDate: 1602633600000 },
      categoryCode: '#e25a2c',
      transaction: {
        type: 'Online Transfer',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '19.72' },
      },
    },
    {
      id: '8834510f-a6f8-4a85-946d-64ca3201138b',
      merchant: {
        name: 'The Tea Lounge',
        accountNumber: 'SI64397745065188826',
      },
      dates: { valueDate: 1600387200000 },
      categoryCode: '#12a580',
      transaction: {
        type: 'Card Payment',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '82.02' },
      },
    },
    {
      id: '171b8f5e-66f1-4c96-9b5c-c85fc14b9a33',
      merchant: { name: '7-Eleven', accountNumber: 'SI64397745065188826' },
      dates: { valueDate: 1600214400000 },
      categoryCode: '#c89616',
      transaction: {
        type: 'Card Payment',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '46.25' },
      },
    },
    {
      id: 'b2a50b8c-361d-4f71-8620-7be098c5469d',
      merchant: { name: 'Starbucks', accountNumber: 'SI64397745065188826' },
      dates: { valueDate: 1600300800000 },
      categoryCode: '#12a580',
      transaction: {
        type: 'Card Payment',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '84.76' },
      },
    },
    {
      id: '622d5b42-8ffe-4bf8-9b0c-fd3a1f8f8e29',
      merchant: {
        name: 'Lawrence Pearson',
        accountNumber: 'SI64397745065188826',
      },
      dates: { valueDate: 1600041600000 },
      categoryCode: '#1180aa',
      transaction: {
        type: 'Transaction',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '52.36' },
      },
    },
    {
      id: '1670a27b-be5d-4dc9-ade0-3d544e3b6152',
      merchant: {
        name: 'Amazon Online Store',
        accountNumber: 'SI64397745065188826',
      },
      dates: { valueDate: 1600370800000 },
      categoryCode: '#c12020',
      transaction: {
        type: 'Online Transfer',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '22.10' },
      },
    },
    {
      id: 'd700d514-d4d2-46da-9ba3-9ece448bff5c',
      merchant: {
        name: 'Southern Electric Company',
        accountNumber: 'SI64397745065188826',
      },
      dates: { valueDate: 1599868800000 },
      categoryCode: '#fbbb1b',
      transaction: {
        type: 'Online Transfer',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '142.95' },
      },
    },
    {
      id: 'd87c638f-5141-4b21-baed-1a6171992900',
      merchant: { name: 'Whole Foods', accountNumber: 'SI64397745065188826' },
      dates: { valueDate: 1599955200000 },
      categoryCode: '#12a580',
      transaction: {
        type: 'Card Payment',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '75.93' },
      },
    },
    {
      id: 'dfa045c5-8c9f-4729-9290-51921ce69d15',
      merchant: { name: 'Texaco', accountNumber: 'SI64397745065188826' },
      dates: { valueDate: '2020-09-19' },
      categoryCode: '#d51271',
      transaction: {
        type: 'Card Payment',
        creditDebitIndicator: 'DBIT',
        amountCurrency: { currencyCode: 'EUR', amount: '84.64' },
      },
    },
  ],
};
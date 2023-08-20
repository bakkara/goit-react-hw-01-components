import { TableTitle, TransactionTable } from "./TransactionHistory.styled"
import { TransactionItem } from "./TransactionItem"
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
          <TransactionTable>
              <thead>
                <tr>
                  <TableTitle>Type</TableTitle>
                  <TableTitle>Amount</TableTitle>
                  <TableTitle>Currency</TableTitle>
                </tr>
              </thead>
      
              <tbody>
                {items.map(({ id, type, amount, currency }) => {
                            return <TransactionItem
                                key={id}
                                type={type}
                                amount={amount}
                                currency={currency}
                            ></TransactionItem>
                    })}
              </tbody>
            </TransactionTable>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
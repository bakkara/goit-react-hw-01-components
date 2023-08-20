import { TableTitle, TransactionTable } from "./TransactionHistory.styled"
import { TransactionItem } from "./TransactionItem"


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
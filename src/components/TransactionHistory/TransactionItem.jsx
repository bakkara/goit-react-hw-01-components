import { TableElement, TextTable} from "./TransactionItem.styled"


export const TransactionItem = ({ type, amount, currency }) => {
    const FirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
  return (
    
      <TableElement>
        <TextTable>{FirstLetter(type)}</TextTable>
        <TextTable>{amount}</TextTable>
        <TextTable>{currency}</TextTable>
      </TableElement>
  
    )
}
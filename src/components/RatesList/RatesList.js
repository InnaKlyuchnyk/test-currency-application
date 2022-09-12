import { useSelector } from 'react-redux';
import RatesListItem from '../RatesListItem';

function RatesList() {
  const getRates = useSelector(state => state.currency.rates);
  const rateNames = Object.keys(getRates);
  //   const nameAndValue = Object.entries(getRates);
  //   const rateValues = Object.values(getRates);
  //   console.log(nameAndValue);

  return (
    <ol>
      {rateNames.map(rateName => (
        <RatesListItem key={rateName} rateName={rateName} />
      ))}
    </ol>
  );
}

export default RatesList;
// (
//         <RatesListItem key={rateName} rateName={rateName} />
//       )

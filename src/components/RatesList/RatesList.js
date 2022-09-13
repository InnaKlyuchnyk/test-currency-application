import { useSelector } from 'react-redux';
import RatesListItem from '../RatesListItem';
import styles from './RatesList.module.css';

function RatesList() {
  const getRates = useSelector(state => state.currency.rates);
  const baseCurrensy = useSelector(state => state.currency.baseCurrency);
  const namesAndValues = Object.entries(getRates);

  return (
    <div className={styles.ratesBox}>
      <h1 className={styles.mainCur}>
        {' '}
        Base currency <span className={styles.icon}>1{baseCurrensy}</span>
      </h1>
      <ul className={styles.ratesList}>
        {namesAndValues.map(nameAndValue => (
          <RatesListItem key={nameAndValue} rate={nameAndValue} />
        ))}
      </ul>
    </div>
  );
}

export default RatesList;

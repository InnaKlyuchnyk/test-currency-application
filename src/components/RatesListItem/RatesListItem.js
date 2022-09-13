import styles from './RatesListItem.module.css';

function RatesListItem({ rate }) {
  return (
    <li className={styles.listItem}>
      <p className={styles.rateName}>{rate[0]}</p>
      <p className={styles.rateValue}>{rate[1]}</p>
    </li>
  );
}

export default RatesListItem;

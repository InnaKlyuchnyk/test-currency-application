import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import { useDispatch } from 'react-redux';
import currencyOperations from '../redux/currency/currencyOperations';
import RatesList from './RatesList';

export const App = () => {
  const dispatch = useDispatch();
  // const getCurrency = useSelector(state => state.currency);

  useEffect(() => {
    dispatch(currencyOperations());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<RatesList />} />
          <Route path="/exchange" element={<div>Hey, it is exchange</div>} />
          <Route path="*" element={<div>All ways</div>} />
        </Route>
      </Routes>
    </>
  );
};

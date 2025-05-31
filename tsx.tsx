import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPayrolls, processPayroll } from '../store/payrollSlice';

export const PayrollView = () => {
  const dispatch = useDispatch();
  const { payrolls, status } = useSelector((state) => state.payroll);

  useEffect(() => {
    dispatch(fetchPayrolls());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(processPayroll())} disabled={status === 'loading'}>
        Run Payroll
      </button>
      {payrolls.map((p) => (
        <div key={p.id}>{p.employeeName}: ${p.amount}</div>
      ))}
    </div>
  );
};

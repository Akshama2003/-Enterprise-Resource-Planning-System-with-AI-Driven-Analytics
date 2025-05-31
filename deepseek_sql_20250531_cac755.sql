-- Oracle PL/SQL Stored Procedure
CREATE OR REPLACE PROCEDURE process_payroll AS
BEGIN
  -- Complex payroll logic here
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Payroll processed successfully');
END;
#!/bin/bash
# Exports payroll data to CSV using MySQL
mysql -u $DB_USER -p$DB_PASS erp_db -e "
  SELECT * FROM payroll INTO OUTFILE '/tmp/payroll_export.csv'
  FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';
"

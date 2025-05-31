package com.erp.finance.service;

import com.erp.finance.repository.PayrollRepository;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PayrollService {
  
  @Autowired
  private PayrollRepository payrollRepo;

  @Autowired
  private EntityManager entityManager; // For PL/SQL calls

  @Transactional
  public String runPayrollStoredProcedure() {
    // Call Oracle PL/SQL stored procedure
    return (String) entityManager
      .createNativeQuery("{CALL process_payroll()}")
      .getSingleResult();
  }
}
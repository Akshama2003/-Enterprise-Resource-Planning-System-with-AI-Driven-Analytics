package com.erp.finance.controller;

import com.erp.finance.service.PayrollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/finance")
public class FinanceController {
  
  @Autowired
  private PayrollService payrollService;

  @GetMapping("/payroll")
  public List<Payroll> getPayrolls() {
    return payrollService.getAllPayrolls();
  }

  @PostMapping("/payroll/process")
  public String processPayroll() {
    return payrollService.runPayrollStoredProcedure(); // Calls PL/SQL
  }
}
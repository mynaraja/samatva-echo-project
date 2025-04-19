
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

interface LoanCalculatorProps {
  loanType: string;
  defaultAmount: number;
  defaultTenure: number;
  updateResults: (results: LoanResults) => void;
}

export interface LoanResults {
  lowCreditEmi: number;
  lowCreditTotal: number;
  lowCreditInterest: number;
  mediumCreditEmi: number;
  mediumCreditTotal: number;
  mediumCreditInterest: number;
  highCreditEmi: number;
  highCreditTotal: number;
  highCreditInterest: number;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ 
  loanType, 
  defaultAmount, 
  defaultTenure,
  updateResults 
}) => {
  const [amount, setAmount] = useState(defaultAmount);
  const [tenure, setTenure] = useState(defaultTenure);
  
  // Interest rates based on loan type and credit score
  const getInterestRates = () => {
    switch(loanType) {
      case "home":
        return { low: 16, medium: 13.5, high: 9 };
      case "auto":
        return { low: 14, medium: 11, high: 9 };
      case "personal":
        return { low: 18, medium: 14, high: 11 };
      default:
        return { low: 16, medium: 13.5, high: 9 };
    }
  };

  const calculateEMI = (principal: number, interestRate: number, tenureInMonths: number) => {
    const monthlyRate = interestRate / 100 / 12;
    return Math.round(principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths) / (Math.pow(1 + monthlyRate, tenureInMonths) - 1));
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else {
      return `₹${amount.toLocaleString('en-IN')}`;
    }
  };

  const calculateAndUpdateResults = () => {
    const rates = getInterestRates();
    const tenureInMonths = loanType === "home" ? tenure * 12 : tenure;
    
    // Calculate EMIs for different credit scores
    const lowCreditEmi = calculateEMI(amount, rates.low, tenureInMonths);
    const mediumCreditEmi = calculateEMI(amount, rates.medium, tenureInMonths);
    const highCreditEmi = calculateEMI(amount, rates.high, tenureInMonths);
    
    // Calculate total payments
    const lowCreditTotal = lowCreditEmi * tenureInMonths;
    const mediumCreditTotal = mediumCreditEmi * tenureInMonths;
    const highCreditTotal = highCreditEmi * tenureInMonths;
    
    // Calculate total interest
    const lowCreditInterest = lowCreditTotal - amount;
    const mediumCreditInterest = mediumCreditTotal - amount;
    const highCreditInterest = highCreditTotal - amount;
    
    updateResults({
      lowCreditEmi,
      lowCreditTotal,
      lowCreditInterest,
      mediumCreditEmi,
      mediumCreditTotal,
      mediumCreditInterest,
      highCreditEmi,
      highCreditTotal,
      highCreditInterest
    });
  };

  // Update results whenever amount or tenure changes
  useEffect(() => {
    calculateAndUpdateResults();
  }, [amount, tenure, loanType]);

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Calculator className="mr-2 h-5 w-5 text-samatva-teal" />
          Interactive {loanType.charAt(0).toUpperCase() + loanType.slice(1)} Loan Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="loan-amount">Loan Amount (in ₹)</Label>
              <Input
                id="loan-amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={100000}
                max={50000000}
                step={50000}
              />
              <div className="text-xs text-gray-500 flex justify-between">
                <span>Min: ₹1L</span>
                <span>Max: ₹5Cr</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="loan-tenure">
                Loan Tenure ({loanType === "home" ? "Years" : "Months"})
              </Label>
              <Input
                id="loan-tenure"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                min={loanType === "home" ? 1 : 12}
                max={loanType === "home" ? 30 : 84}
                step={loanType === "home" ? 1 : 6}
              />
              <div className="text-xs text-gray-500 flex justify-between">
                <span>Min: {loanType === "home" ? "1 yr" : "12 mo"}</span>
                <span>Max: {loanType === "home" ? "30 yrs" : "84 mo"}</span>
              </div>
            </div>
          </div>
          <Button onClick={calculateAndUpdateResults} className="w-full mt-2">
            Calculate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import type { LoanResults } from "./LoanCalculator";

interface LoanComparisonChartProps {
  loanType: string;
  loanAmount: number;
  results: LoanResults;
}

const LoanComparisonChart: React.FC<LoanComparisonChartProps> = ({ loanType, loanAmount, results }) => {
  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else {
      return `₹${amount.toLocaleString('en-IN')}`;
    }
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(0)}%`;
  };
  
  const getHighCreditSavings = () => {
    return formatCurrency(results.lowCreditTotal - results.highCreditTotal);
  };
  
  const getMediumCreditSavings = () => {
    return formatCurrency(results.lowCreditTotal - results.mediumCreditTotal);
  };
  
  // Calculate the maximum value for the bar graph
  const maxTotal = Math.max(results.lowCreditTotal, results.mediumCreditTotal, results.highCreditTotal);
  
  // Calculate percentages for the bar graph
  const lowCreditTotalPercentage = 100;
  const mediumCreditTotalPercentage = (results.mediumCreditTotal / results.lowCreditTotal) * 100;
  const highCreditTotalPercentage = (results.highCreditTotal / results.lowCreditTotal) * 100;

  // Get interest rates based on loan type
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

  const rates = getInterestRates();

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Visual Comparison</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="text-sm font-medium mb-1">Low Credit Score</div>
              <div className="bg-red-50 p-3 rounded-md mb-2">
                <div className="text-red-600 font-bold mb-1">{formatPercentage(rates.low)}</div>
                <div className="text-xs text-gray-500">Interest Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium mb-1">Medium Credit Score</div>
              <div className="bg-amber-50 p-3 rounded-md mb-2">
                <div className="text-amber-600 font-bold mb-1">{formatPercentage(rates.medium)}</div>
                <div className="text-xs text-gray-500">Interest Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium mb-1">High Credit Score</div>
              <div className="bg-green-50 p-3 rounded-md mb-2">
                <div className="text-green-600 font-bold mb-1">{formatPercentage(rates.high)}</div>
                <div className="text-xs text-gray-500">Interest Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-medium mb-2">Monthly EMI</h4>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <div className="h-16 bg-red-100 rounded-t-md flex items-end">
                  <div className="w-full bg-red-500 rounded-t-md" style={{ height: "100%" }}>
                    <div className="text-center py-3 text-white text-sm font-medium">
                      {formatCurrency(results.lowCreditEmi)}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">Low Credit</div>
              </div>
              <div>
                <div className="h-16 bg-amber-100 rounded-t-md flex items-end">
                  <div 
                    className="w-full bg-amber-500 rounded-t-md"
                    style={{ height: `${(results.mediumCreditEmi / results.lowCreditEmi) * 100}%` }}
                  >
                    <div className="text-center py-3 text-white text-sm font-medium">
                      {formatCurrency(results.mediumCreditEmi)}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">Medium Credit</div>
              </div>
              <div>
                <div className="h-16 bg-green-100 rounded-t-md flex items-end">
                  <div 
                    className="w-full bg-green-500 rounded-t-md"
                    style={{ height: `${(results.highCreditEmi / results.lowCreditEmi) * 100}%` }}
                  >
                    <div className="text-center py-3 text-white text-sm font-medium">
                      {formatCurrency(results.highCreditEmi)}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">High Credit</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Total Repayment</h4>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <div className="h-20 bg-red-100 rounded-t-md flex items-end">
                  <div
                    className="w-full bg-red-400 rounded-t-md"
                    style={{ height: "100%" }}
                  >
                    <div className="px-2 py-2 text-center">
                      <div className="text-white text-sm font-medium">
                        {formatCurrency(results.lowCreditTotal)}
                      </div>
                      <div className="text-red-100 text-xs mt-1">Principal: {formatCurrency(loanAmount)}</div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">Low Credit</div>
              </div>
              <div>
                <div className="h-20 bg-amber-100 rounded-t-md flex items-end">
                  <div
                    className="w-full bg-amber-400 rounded-t-md"
                    style={{ height: `${mediumCreditTotalPercentage}%` }}
                  >
                    <div className="px-2 py-2 text-center">
                      <div className="text-white text-sm font-medium">
                        {formatCurrency(results.mediumCreditTotal)}
                      </div>
                      <div className="text-amber-100 text-xs mt-1">Principal: {formatCurrency(loanAmount)}</div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">Medium Credit</div>
              </div>
              <div>
                <div className="h-20 bg-green-100 rounded-t-md flex items-end">
                  <div
                    className="w-full bg-green-400 rounded-t-md"
                    style={{ height: `${highCreditTotalPercentage}%` }}
                  >
                    <div className="px-2 py-2 text-center">
                      <div className="text-white text-sm font-medium">
                        {formatCurrency(results.highCreditTotal)}
                      </div>
                      <div className="text-green-100 text-xs mt-1">Principal: {formatCurrency(loanAmount)}</div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">High Credit</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Total Interest Paid</h4>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <div className="h-20 bg-red-100 rounded-t-md flex items-end">
                  <div
                    className="w-full bg-red-500 rounded-t-md"
                    style={{ height: "100%" }}
                  >
                    <div className="px-2 py-3 text-white text-sm text-center font-medium">
                      {formatCurrency(results.lowCreditInterest)}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">Low Credit</div>
              </div>
              <div>
                <div className="h-20 bg-amber-100 rounded-t-md flex items-end">
                  <div
                    className="w-full bg-amber-500 rounded-t-md"
                    style={{ height: `${(results.mediumCreditInterest / results.lowCreditInterest) * 100}%` }}
                  >
                    <div className="px-2 py-3 text-white text-sm text-center font-medium">
                      {formatCurrency(results.mediumCreditInterest)}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">Medium Credit</div>
              </div>
              <div>
                <div className="h-20 bg-green-100 rounded-t-md flex items-end">
                  <div
                    className="w-full bg-green-500 rounded-t-md"
                    style={{ height: `${(results.highCreditInterest / results.lowCreditInterest) * 100}%` }}
                  >
                    <div className="px-2 py-3 text-white text-sm text-center font-medium">
                      {formatCurrency(results.highCreditInterest)}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-gray-500">High Credit</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-md font-semibold text-blue-700 mb-1">Potential Savings</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-md p-3 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Medium vs Low Credit</div>
                <div className="text-lg font-bold text-amber-600">{getMediumCreditSavings()}</div>
              </div>
              <div className="bg-white rounded-md p-3 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">High vs Low Credit</div>
                <div className="text-lg font-bold text-green-600">{getHighCreditSavings()}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 mt-1 flex-shrink-0" />
            <div className="text-xs text-gray-700">
              This visual comparison illustrates the significant impact of credit score on loan terms. 
              Maintaining a strong credit profile can lead to substantial savings over the loan tenure.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanComparisonChart;

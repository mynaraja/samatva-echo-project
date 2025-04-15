
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { ChevronRight, AlertCircle, Home, Car, Briefcase, Calculator } from "lucide-react";
import LoanCalculator, { LoanResults } from "@/components/LoanCalculator";
import LoanComparisonChart from "@/components/LoanComparisonChart";

const LoanComparison = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [homeLoanResults, setHomeLoanResults] = useState<LoanResults>({
    lowCreditEmi: 69563,
    lowCreditTotal: 16695120,
    lowCreditInterest: 11695120,
    mediumCreditEmi: 60369,
    mediumCreditTotal: 14488560,
    mediumCreditInterest: 9488560,
    highCreditEmi: 44986,
    highCreditTotal: 10796640,
    highCreditInterest: 5796640
  });

  const [autoLoanResults, setAutoLoanResults] = useState<LoanResults>({
    lowCreditEmi: 34901,
    lowCreditTotal: 2094060,
    lowCreditInterest: 594060,
    mediumCreditEmi: 32596,
    mediumCreditTotal: 1955760,
    mediumCreditInterest: 455760,
    highCreditEmi: 31148,
    highCreditTotal: 1868880,
    highCreditInterest: 368880
  });

  const [personalLoanResults, setPersonalLoanResults] = useState<LoanResults>({
    lowCreditEmi: 38087,
    lowCreditTotal: 2285220,
    lowCreditInterest: 785220,
    mediumCreditEmi: 34942,
    mediumCreditTotal: 2096520,
    mediumCreditInterest: 596520,
    highCreditEmi: 32608,
    highCreditTotal: 1956480,
    highCreditInterest: 456480
  });

  return (
    <div className="font-poppins min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <div className="bg-samatva-teal/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">Interactive Loan Comparison</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Compare loan options across different credit scores and see potential savings in real-time. 
              Adjust loan amount and tenure to visualize the impact on EMIs and total repayment.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="home" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="home" className="flex items-center justify-center gap-2">
                <Home size={18} />
                <span className="hidden sm:inline">Home Loan</span>
                <span className="sm:hidden">Home</span>
              </TabsTrigger>
              <TabsTrigger value="auto" className="flex items-center justify-center gap-2">
                <Car size={18} />
                <span className="hidden sm:inline">Auto Loan</span>
                <span className="sm:hidden">Auto</span>
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex items-center justify-center gap-2">
                <Briefcase size={18} />
                <span className="hidden sm:inline">Personal Loan</span>
                <span className="sm:hidden">Personal</span>
              </TabsTrigger>
            </TabsList>

            {/* Home Loan Comparison */}
            <TabsContent value="home">
              <LoanCalculator 
                loanType="home" 
                defaultAmount={5000000} 
                defaultTenure={20}
                updateResults={setHomeLoanResults}
              />
              
              <LoanComparisonChart 
                loanType="home"
                loanAmount={5000000}
                results={homeLoanResults}
              />

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Home size={24} className="mr-2 text-samatva-teal" />
                    Home Loan Comparison
                  </CardTitle>
                  <CardDescription>
                    Compare home loan options for different credit score ranges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-gray-50">
                        <TableRow>
                          <TableHead className="w-[200px]">Criteria</TableHead>
                          <TableHead className="text-center bg-red-50">Low CIBIL Score (&lt;700)</TableHead>
                          <TableHead className="text-center bg-yellow-50">Small Finance Banks</TableHead>
                          <TableHead className="text-center bg-green-50">High CIBIL Score (&gt;700)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Eligible Lender</TableCell>
                          <TableCell className="text-center">Housing Finance Companies (HFC)</TableCell>
                          <TableCell className="text-center">Small Private / Finance Banks</TableCell>
                          <TableCell className="text-center">Top Private Sector Banks</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Interest Rate</TableCell>
                          <TableCell className="text-center text-red-600">16%</TableCell>
                          <TableCell className="text-center text-amber-600">13.5%</TableCell>
                          <TableCell className="text-center text-green-600">9%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">EMI (for 20 years)</TableCell>
                          <TableCell className="text-center">₹{homeLoanResults.lowCreditEmi.toLocaleString('en-IN')}</TableCell>
                          <TableCell className="text-center">₹{homeLoanResults.mediumCreditEmi.toLocaleString('en-IN')}</TableCell>
                          <TableCell className="text-center">₹{homeLoanResults.highCreditEmi.toLocaleString('en-IN')}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Repayment</TableCell>
                          <TableCell className="text-center">
                            ₹{(homeLoanResults.lowCreditTotal / 10000000).toFixed(2)} Cr
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(homeLoanResults.mediumCreditTotal / 10000000).toFixed(2)} Cr
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(homeLoanResults.highCreditTotal / 10000000).toFixed(2)} Cr
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Interest Paid</TableCell>
                          <TableCell className="text-center">
                            ₹{(homeLoanResults.lowCreditInterest / 10000000).toFixed(2)} Cr
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(homeLoanResults.mediumCreditInterest / 10000000).toFixed(2)} Cr
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(homeLoanResults.highCreditInterest / 10000000).toFixed(2)} Cr
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Potential Savings vs HFC</TableCell>
                          <TableCell className="text-center">—</TableCell>
                          <TableCell className="text-center font-medium text-amber-700">
                            ₹{((homeLoanResults.lowCreditTotal - homeLoanResults.mediumCreditTotal) / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center font-medium text-green-700">
                            ₹{((homeLoanResults.lowCreditTotal - homeLoanResults.highCreditTotal) / 100000).toFixed(2)} L
                          </TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50">
                          <TableCell className="font-medium">Key Insight</TableCell>
                          <TableCell className="text-center">Limited options due to low score</TableCell>
                          <TableCell className="text-center">Moderate option with better rate</TableCell>
                          <TableCell className="text-center">Best option with strong credit</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Auto Loan Comparison */}
            <TabsContent value="auto">
              <LoanCalculator 
                loanType="auto" 
                defaultAmount={1500000} 
                defaultTenure={60}
                updateResults={setAutoLoanResults}
              />
              
              <LoanComparisonChart 
                loanType="auto"
                loanAmount={1500000}
                results={autoLoanResults}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Car size={24} className="mr-2 text-samatva-teal" />
                    Auto Loan Comparison
                  </CardTitle>
                  <CardDescription>
                    Compare auto loan options for different credit score ranges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-gray-50">
                        <TableRow>
                          <TableHead className="w-[200px]">Criteria</TableHead>
                          <TableHead className="text-center bg-red-50">Low CIBIL Score (&lt;700)</TableHead>
                          <TableHead className="text-center bg-yellow-50">Small Finance Banks</TableHead>
                          <TableHead className="text-center bg-green-50">High CIBIL Score (&gt;700)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Eligible Lender</TableCell>
                          <TableCell className="text-center">NBFCs / FinTech Lenders</TableCell>
                          <TableCell className="text-center">Small Private / Finance Banks</TableCell>
                          <TableCell className="text-center">Top Private Sector Banks</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Interest Rate</TableCell>
                          <TableCell className="text-center text-red-600">14%</TableCell>
                          <TableCell className="text-center text-amber-600">11%</TableCell>
                          <TableCell className="text-center text-green-600">9%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">EMI (for 60 months)</TableCell>
                          <TableCell className="text-center">₹{autoLoanResults.lowCreditEmi.toLocaleString('en-IN')}</TableCell>
                          <TableCell className="text-center">₹{autoLoanResults.mediumCreditEmi.toLocaleString('en-IN')}</TableCell>
                          <TableCell className="text-center">₹{autoLoanResults.highCreditEmi.toLocaleString('en-IN')}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Repayment</TableCell>
                          <TableCell className="text-center">
                            ₹{(autoLoanResults.lowCreditTotal / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(autoLoanResults.mediumCreditTotal / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(autoLoanResults.highCreditTotal / 100000).toFixed(2)} L
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Interest Paid</TableCell>
                          <TableCell className="text-center">
                            ₹{(autoLoanResults.lowCreditInterest / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(autoLoanResults.mediumCreditInterest / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(autoLoanResults.highCreditInterest / 100000).toFixed(2)} L
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Potential Savings vs NBFC</TableCell>
                          <TableCell className="text-center">—</TableCell>
                          <TableCell className="text-center font-medium text-amber-700">
                            ₹{((autoLoanResults.lowCreditTotal - autoLoanResults.mediumCreditTotal) / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center font-medium text-green-700">
                            ₹{((autoLoanResults.lowCreditTotal - autoLoanResults.highCreditTotal) / 100000).toFixed(2)} L
                          </TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50">
                          <TableCell className="font-medium">Key Insight</TableCell>
                          <TableCell className="text-center">Higher EMI & interest burden</TableCell>
                          <TableCell className="text-center">Balanced choice with savings</TableCell>
                          <TableCell className="text-center">Best savings with good credit</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Personal Loan Comparison */}
            <TabsContent value="personal">
              <LoanCalculator 
                loanType="personal" 
                defaultAmount={1500000} 
                defaultTenure={60}
                updateResults={setPersonalLoanResults}
              />
              
              <LoanComparisonChart 
                loanType="personal"
                loanAmount={1500000}
                results={personalLoanResults}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Briefcase size={24} className="mr-2 text-samatva-teal" />
                    Personal Loan Comparison
                  </CardTitle>
                  <CardDescription>
                    Compare personal loan options for different credit score ranges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-gray-50">
                        <TableRow>
                          <TableHead className="w-[200px]">Criteria</TableHead>
                          <TableHead className="text-center bg-red-50">Lower Credit Score (&lt;700)</TableHead>
                          <TableHead className="text-center bg-yellow-50">Small Finance Banks</TableHead>
                          <TableHead className="text-center bg-green-50">Higher Credit Score (&gt;700)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Possible Lenders</TableCell>
                          <TableCell className="text-center">NBFCs / FinTechs (subject to eligibility)</TableCell>
                          <TableCell className="text-center">Select Small Finance / Private Banks</TableCell>
                          <TableCell className="text-center">Leading Private Sector Banks</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Indicative Interest Rate</TableCell>
                          <TableCell className="text-center text-red-600">~18% p.a.</TableCell>
                          <TableCell className="text-center text-amber-600">~14% p.a.</TableCell>
                          <TableCell className="text-center text-green-600">~11% p.a.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Estimated EMI (60 months)</TableCell>
                          <TableCell className="text-center">₹{personalLoanResults.lowCreditEmi.toLocaleString('en-IN')}</TableCell>
                          <TableCell className="text-center">₹{personalLoanResults.mediumCreditEmi.toLocaleString('en-IN')}</TableCell>
                          <TableCell className="text-center">₹{personalLoanResults.highCreditEmi.toLocaleString('en-IN')}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Repayment</TableCell>
                          <TableCell className="text-center">
                            ₹{(personalLoanResults.lowCreditTotal / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(personalLoanResults.mediumCreditTotal / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(personalLoanResults.highCreditTotal / 100000).toFixed(2)} L
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Interest Paid</TableCell>
                          <TableCell className="text-center">
                            ₹{(personalLoanResults.lowCreditInterest / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(personalLoanResults.mediumCreditInterest / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center">
                            ₹{(personalLoanResults.highCreditInterest / 100000).toFixed(2)} L
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Potential Savings vs Higher Rate</TableCell>
                          <TableCell className="text-center">—</TableCell>
                          <TableCell className="text-center font-medium text-amber-700">
                            ₹{((personalLoanResults.lowCreditTotal - personalLoanResults.mediumCreditTotal) / 100000).toFixed(2)} L
                          </TableCell>
                          <TableCell className="text-center font-medium text-green-700">
                            ₹{((personalLoanResults.lowCreditTotal - personalLoanResults.highCreditTotal) / 100000).toFixed(2)} L
                          </TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50">
                          <TableCell className="font-medium">Indicative Insight</TableCell>
                          <TableCell className="text-center">Higher cost due to higher risk profile</TableCell>
                          <TableCell className="text-center">Moderate rates subject to credit profile</TableCell>
                          <TableCell className="text-center">Lower interest with good credit behavior</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Disclaimer Section */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Disclaimer</h3>
                <p className="text-sm text-gray-700">
                  The above comparison is for illustrative purposes only. Actual loan eligibility, interest rates, EMIs, and terms 
                  are determined by individual lenders based on the applicant's credit profile, income, employer category, and other 
                  underwriting criteria. All loan disbursals are subject to the lender's policies and applicable regulations as 
                  prescribed by the Reserve Bank of India (RBI).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoanComparison;

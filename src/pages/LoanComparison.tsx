
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
import { ChevronRight, AlertCircle, Home, Car, Briefcase } from "lucide-react";

const LoanComparison = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="font-poppins min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <div className="bg-samatva-teal/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">Loan Comparison</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Compare different loan options based on your credit score to make an informed financial decision.
              See how your credit score impacts loan terms and potential savings.
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Home size={24} className="mr-2 text-samatva-teal" />
                    Home Loan Comparison
                  </CardTitle>
                  <CardDescription>
                    Compare home loan options for a ₹50 Lakhs loan over a 20-year tenure
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
                          <TableCell className="font-medium">Loan Amount</TableCell>
                          <TableCell className="text-center">₹50 Lakhs</TableCell>
                          <TableCell className="text-center">₹50 Lakhs</TableCell>
                          <TableCell className="text-center">₹50 Lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">EMI (for 20 years)</TableCell>
                          <TableCell className="text-center">₹69,563</TableCell>
                          <TableCell className="text-center">₹60,369</TableCell>
                          <TableCell className="text-center">₹44,986</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Repayment</TableCell>
                          <TableCell className="text-center">₹1.66 Crores</TableCell>
                          <TableCell className="text-center">₹1.44 Crores</TableCell>
                          <TableCell className="text-center">₹1.06 Crores</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Interest Paid</TableCell>
                          <TableCell className="text-center">₹1.16 Crores</TableCell>
                          <TableCell className="text-center">₹94 Lakhs</TableCell>
                          <TableCell className="text-center">₹56 Lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Potential Savings vs HFC</TableCell>
                          <TableCell className="text-center">—</TableCell>
                          <TableCell className="text-center font-medium text-amber-700">₹22 Lakhs</TableCell>
                          <TableCell className="text-center font-medium text-green-700">₹60 Lakhs</TableCell>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Car size={24} className="mr-2 text-samatva-teal" />
                    Auto Loan Comparison
                  </CardTitle>
                  <CardDescription>
                    Compare auto loan options for a ₹15 Lakhs loan over a 5-year tenure
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
                          <TableCell className="font-medium">Loan Amount</TableCell>
                          <TableCell className="text-center">₹15 Lakhs</TableCell>
                          <TableCell className="text-center">₹15 Lakhs</TableCell>
                          <TableCell className="text-center">₹15 Lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">EMI (for 60 months)</TableCell>
                          <TableCell className="text-center">₹34,901</TableCell>
                          <TableCell className="text-center">₹32,596</TableCell>
                          <TableCell className="text-center">₹31,148</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Repayment</TableCell>
                          <TableCell className="text-center">₹20.94 Lakhs</TableCell>
                          <TableCell className="text-center">₹19.56 Lakhs</TableCell>
                          <TableCell className="text-center">₹18.69 Lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Interest Paid</TableCell>
                          <TableCell className="text-center">₹5.94 Lakhs</TableCell>
                          <TableCell className="text-center">₹4.56 Lakhs</TableCell>
                          <TableCell className="text-center">₹3.69 Lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Potential Savings vs NBFC</TableCell>
                          <TableCell className="text-center">—</TableCell>
                          <TableCell className="text-center font-medium text-amber-700">₹1.38 Lakhs</TableCell>
                          <TableCell className="text-center font-medium text-green-700">₹2.25 Lakhs</TableCell>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Briefcase size={24} className="mr-2 text-samatva-teal" />
                    Personal Loan Comparison
                  </CardTitle>
                  <CardDescription>
                    Compare personal loan options for a ₹15 Lakhs loan over a 5-year tenure
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
                          <TableCell className="font-medium">Loan Amount</TableCell>
                          <TableCell className="text-center">₹15 Lakhs</TableCell>
                          <TableCell className="text-center">₹15 Lakhs</TableCell>
                          <TableCell className="text-center">₹15 Lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Estimated EMI (60 months)</TableCell>
                          <TableCell className="text-center">₹38,087</TableCell>
                          <TableCell className="text-center">₹34,942</TableCell>
                          <TableCell className="text-center">₹32,608</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Repayment</TableCell>
                          <TableCell className="text-center">₹22.85 Lakhs</TableCell>
                          <TableCell className="text-center">₹20.96 Lakhs</TableCell>
                          <TableCell className="text-center">₹19.56 Lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Interest Paid</TableCell>
                          <TableCell className="text-center">₹7.85 Lakhs</TableCell>
                          <TableCell className="text-center">₹5.96 Lakhs</TableCell>
                          <TableCell className="text-center">₹4.56 Lakhs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Potential Savings vs Higher Rate</TableCell>
                          <TableCell className="text-center">—</TableCell>
                          <TableCell className="text-center font-medium text-amber-700">₹1.89 Lakhs</TableCell>
                          <TableCell className="text-center font-medium text-green-700">₹3.29 Lakhs</TableCell>
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

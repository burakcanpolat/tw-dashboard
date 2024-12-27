import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const data = [
  { Year: 2025, Scenario: 'Worst', 'Package Sales': 79590.49, Warehouse: 61943.58, 'Twizz Shop': 16857.92 },
  { Year: 2026, Scenario: 'Worst', 'Package Sales': 422823.82, Warehouse: 608201.21, 'Twizz Shop': 323790.57 },
  { Year: 2027, Scenario: 'Worst', 'Package Sales': 1016906.28, Warehouse: 1538513.60, 'Twizz Shop': 947101.39 },
  { Year: 2025, Scenario: 'Optimal', 'Package Sales': 122006.18, Warehouse: 97012.84, 'Twizz Shop': 26546.45 },
  { Year: 2026, Scenario: 'Optimal', 'Package Sales': 575349.47, Warehouse: 827598.24, 'Twizz Shop': 440591.87 },
  { Year: 2027, Scenario: 'Optimal', 'Package Sales': 1357676.55, Warehouse: 2054077.04, 'Twizz Shop': 1264479.71 },
  { Year: 2025, Scenario: 'Best', 'Package Sales': 154457.56, Warehouse: 125606.53, 'Twizz Shop': 34707.10 },
  { Year: 2026, Scenario: 'Best', 'Package Sales': 712780.01, Warehouse: 1025282.04, 'Twizz Shop': 545833.61 },
  { Year: 2027, Scenario: 'Best', 'Package Sales': 1712936.59, Warehouse: 2591562.56, 'Twizz Shop': 1595353.15 },
];

const formatToMillions = (value: number) => {
  return `$${(value / 1000000).toFixed(1)}M`;
};

const FutureFinancialGraphsTab = () => {
  const [selectedYears, setSelectedYears] = useState([2025, 2026, 2027]);
  const [selectedScenarios, setSelectedScenarios] = useState(['Worst', 'Optimal', 'Best']);
  const [selectedSources, setSelectedSources] = useState(['Package Sales', 'Warehouse', 'Twizz Shop']);

  const handleYearChange = (year: number) => {
    setSelectedYears((prevYears) =>
      prevYears.includes(year)
        ? prevYears.filter((y) => y !== year)
        : [...prevYears, year]
    );
  };

  const handleScenarioChange = (scenario: string) => {
    setSelectedScenarios((prevScenarios) =>
      prevScenarios.includes(scenario)
        ? prevScenarios.filter((s) => s !== scenario)
        : [...prevScenarios, scenario]
    );
  };

  const handleSourceChange = (source: string) => {
    setSelectedSources((prevSources) =>
      prevSources.includes(source)
        ? prevSources.filter((s) => s !== source)
        : [...prevSources, source]
    );
  };

  const filteredData = data.filter(
    (item) =>
      selectedYears.includes(item.Year) &&
      selectedScenarios.includes(item.Scenario)
  );

  return (
    <div className="grid gap-6">
      {/* Charts Container */}
      <div className="grid grid-cols-2 gap-6">
        {/* First Chart Card */}
        <Card className="bg-white border-gray-100">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900">Future Revenue Projections</CardTitle>
            <CardDescription className="text-gray-500">
              Projected revenue streams across different scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Source Filters - Centered at top */}
              <div className="flex justify-center space-x-3">
                {['Package Sales', 'Warehouse', 'Twizz Shop'].map((source) => (
                  <Button
                    key={source}
                    onClick={() => handleSourceChange(source)}
                    variant={selectedSources.includes(source) ? "default" : "outline"}
                    size="sm"
                    className={`
                      ${selectedSources.includes(source) 
                        ? source === 'Package Sales' 
                          ? 'bg-indigo-600 hover:bg-indigo-700' 
                          : source === 'Warehouse'
                            ? 'bg-fuchsia-600 hover:bg-fuchsia-700'
                            : 'bg-violet-600 hover:bg-violet-700'
                        : 'hover:bg-gray-100'
                      }
                    `}
                  >
                    {source}
                  </Button>
                ))}
              </div>

              {/* Chart with Year Filters on the left */}
              <div className="flex items-center">
                {/* Year Filters - Vertical on the left */}
                <div className="flex flex-col space-y-2 pr-4">
                  {[2025, 2026, 2027].map((year) => (
                    <Button
                      key={year}
                      onClick={() => handleYearChange(year)}
                      variant={selectedYears.includes(year) ? "default" : "outline"}
                      size="sm"
                      className={`
                        ${selectedYears.includes(year) 
                          ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700' 
                          : 'hover:bg-gray-100'
                        }
                      `}
                    >
                      {year}
                    </Button>
                  ))}
                </div>

                {/* Chart */}
                <div className="flex-1 h-[500px] bg-white rounded-lg p-4">
                  <ResponsiveContainer>
                    <BarChart
                      data={filteredData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 60,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                      <XAxis 
                        dataKey="Year" 
                        tick={{ fill: '#4B5563' }}
                        axisLine={{ stroke: '#E5E7EB' }}
                      />
                      <YAxis 
                        tickFormatter={formatToMillions}
                        tick={{ fill: '#4B5563' }}
                        axisLine={{ stroke: '#E5E7EB' }}
                      />
                      <Tooltip 
                        formatter={(value: number) => formatToMillions(value)}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #E5E7EB',
                          borderRadius: '6px',
                          padding: '8px',
                        }}
                      />
                      <Legend />
                      {selectedSources.includes('Package Sales') && (
                        <Bar dataKey="Package Sales" stackId="a" fill="#4F46E5" />
                      )}
                      {selectedSources.includes('Warehouse') && (
                        <Bar dataKey="Warehouse" stackId="a" fill="#D946EF" />
                      )}
                      {selectedSources.includes('Twizz Shop') && (
                        <Bar dataKey="Twizz Shop" stackId="a" fill="#8B5CF6" />
                      )}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Scenario Filters - Centered at bottom */}
              <div className="flex justify-center space-x-3">
                {['Worst', 'Optimal', 'Best'].map((scenario) => (
                  <Button
                    key={scenario}
                    onClick={() => handleScenarioChange(scenario)}
                    variant={selectedScenarios.includes(scenario) ? "default" : "outline"}
                    size="sm"
                    className={`
                      ${selectedScenarios.includes(scenario) 
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700' 
                        : 'hover:bg-gray-100'
                      }
                    `}
                  >
                    {scenario}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Second Chart Card - Placeholder */}
        <Card className="bg-white border-gray-100">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900">Second Chart</CardTitle>
            <CardDescription className="text-gray-500">
              Ready for the next chart implementation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[680px] flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart will be implemented here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FutureFinancialGraphsTab; 
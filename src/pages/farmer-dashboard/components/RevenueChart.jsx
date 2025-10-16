import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';


const RevenueChart = () => {
  const [chartType, setChartType] = useState('bar');
  const [timeRange, setTimeRange] = useState('6months');

  const revenueData = [
    { month: 'Apr', revenue: 2400, orders: 45, avgOrder: 53 },
    { month: 'May', revenue: 3200, orders: 62, avgOrder: 52 },
    { month: 'Jun', revenue: 4100, orders: 78, avgOrder: 53 },
    { month: 'Jul', revenue: 3800, orders: 71, avgOrder: 54 },
    { month: 'Aug', revenue: 4500, orders: 85, avgOrder: 53 },
    { month: 'Sep', revenue: 5200, orders: 96, avgOrder: 54 },
    { month: 'Oct', revenue: 4800, orders: 89, avgOrder: 54 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-organic">
          <p className="font-body font-medium text-popover-foreground mb-2">{label} 2024</p>
          <div className="space-y-1">
            <p className="text-sm text-success font-body">
              Revenue: <span className="font-semibold">${payload?.[0]?.value?.toLocaleString()}</span>
            </p>
            <p className="text-sm text-primary font-body">
              Orders: <span className="font-semibold">{payload?.[0]?.payload?.orders}</span>
            </p>
            <p className="text-sm text-muted-foreground font-body">
              Avg Order: <span className="font-semibold">${payload?.[0]?.payload?.avgOrder}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-organic">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-headline font-semibold text-card-foreground mb-1">Revenue Analytics</h3>
          <p className="text-sm text-muted-foreground font-body">Track your sales performance over time</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex bg-brand-surface rounded-lg p-1">
            <button
              onClick={() => setChartType('bar')}
              className={`px-3 py-1 rounded text-sm font-body transition-all duration-200 ${
                chartType === 'bar' ?'bg-primary text-primary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="BarChart3" size={16} className="inline mr-1" />
              Bar
            </button>
            <button
              onClick={() => setChartType('line')}
              className={`px-3 py-1 rounded text-sm font-body transition-all duration-200 ${
                chartType === 'line' ?'bg-primary text-primary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="TrendingUp" size={16} className="inline mr-1" />
              Line
            </button>
          </div>
        </div>
      </div>
      <div className="h-80 w-full" aria-label="Revenue Analytics Chart">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'bar' ? (
            <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="month" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                fontFamily="var(--font-body)"
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                fontFamily="var(--font-body)"
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="revenue" 
                fill="var(--color-primary)"
                radius={[4, 4, 0, 0]}
                className="hover:opacity-80 transition-opacity duration-200"
              />
            </BarChart>
          ) : (
            <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="month" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                fontFamily="var(--font-body)"
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                fontFamily="var(--font-body)"
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="var(--color-primary)"
                strokeWidth={3}
                dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'var(--color-primary)', strokeWidth: 2 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Total Revenue</p>
          <p className="text-lg font-headline font-bold text-success">
            ${revenueData?.reduce((sum, item) => sum + item?.revenue, 0)?.toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Total Orders</p>
          <p className="text-lg font-headline font-bold text-primary">
            {revenueData?.reduce((sum, item) => sum + item?.orders, 0)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-body mb-1">Avg Order Value</p>
          <p className="text-lg font-headline font-bold text-card-foreground">
            ${Math.round(revenueData?.reduce((sum, item) => sum + item?.avgOrder, 0) / revenueData?.length)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Calendar, Clock, TrendingUp, CheckCircle, ArrowRight, Users, Target, Phone } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import MaxWidthWrapper from './MaxWidth';

const monthlyData = [
  { month: 'Jan', calls: 1000, meetings: 20 },
  { month: 'Feb', calls: 5000, meetings: 120 },
  { month: 'Mar', calls: 12000, meetings: 280 },
  { month: 'Apr', calls: 25000, meetings: 520 },
  { month: 'May', calls: 45000, meetings: 890 },
  { month: 'Jun', calls: 75000, meetings: 1450 }
];

const savingsData = [
  { month: 'Month 1', savings: 35000 },
  { month: 'Month 2', savings: 70000 },
  { month: 'Month 3', savings: 105000 },
  { month: 'Month 4', savings: 140000 },
  { month: 'Month 5', savings: 175000 },
  { month: 'Month 6', savings: 210000 }
];

const metrics = [
  {
    title: 'Calls Made',
    value: '75K+',
    change: '+7400%',
    description: 'Monthly outbound calls',
    icon: Phone,
    color: '#00FF00'
  },
  {
    title: 'Meetings Booked',
    value: '1,450',
    change: '+725%',
    description: 'Monthly appointments',
    icon: Calendar,
    color: '#00DD00'
  },
  {
    title: 'Response Rate',
    value: '32%',
    change: '+180%',
    description: 'Prospect engagement',
    icon: Target,
    color: '#00BB00'
  },
  {
    title: 'Cost Savings',
    value: '$210K',
    change: '-78%',
    description: 'In 6 months',
    icon: DollarSign,
    color: '#009900'
  }
];

const comparisonData = [
  { factor: 'Monthly Cost', traditional: '$39,600', ai: '$5,000', savings: '$34,600' },
  { factor: 'Calls Per Day', traditional: '1,000', ai: '12,500', improvement: '12.5x' },
  { factor: 'Meetings Set', traditional: '200', ai: '1,450', improvement: '7.25x' },
  { factor: 'Cost Per Meeting', traditional: '$198', ai: '$3.45', savings: '$194.55' }
];

export function CaseStudy() {
  return (
    <section className="py-24 relative">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-block bg-electric-blue/10 px-6 py-2 rounded-full border border-electric-blue/30 mb-6">
            <span className="text-electric-blue font-semibold">Case Study Results</span>
          </div> */}
          <h2 className="text-3xl font-bold mb-4 text-black">
            Financial Growth <span className="text-electric-blue">Impact</span>
          </h2>
          <p className="text-black/70 max-w-3xl mx-auto">
            See how our financial strategies transformed business outcomes
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-electric-blue/10 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-electric-blue/20">
                  <metric.icon className="w-6 h-6 text-electric-blue" />
                </div>
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-electric-blue' : 'text-red-500'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-black">{metric.value}</h3>
              <p className="text-black/70 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-electric-blue/10"
          >
            <h3 className="text-xl font-bold mb-6 text-black">Growth Trajectory</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(37, 99, 235, 0.1)" />
                  <XAxis dataKey="month" stroke="#000000" />
                  <YAxis stroke="#000000" />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(37, 99, 235, 0.1)',
                      borderRadius: '8px',
                      color: '#000000'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="calls"
                    stroke="#2563eb"
                    fill="url(#callsGradient)"
                    name="Calls"
                  />
                  <Area
                    type="monotone"
                    dataKey="meetings"
                    stroke="#FFFFFF"
                    fill="rgba(255, 255, 255, 0.1)"
                    name="Meetings"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Cost Savings Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-electric-blue/10"
          >
            <h3 className="text-xl font-bold mb-6 text-black">Cumulative Savings</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={savingsData}>
                  <defs>
                    <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(37, 99, 235, 0.1)" />
                  <XAxis dataKey="month" stroke="#000000" />
                  <YAxis
                    stroke="#000000"
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(37, 99, 235, 0.1)',
                      borderRadius: '8px',
                      color: '#000000'
                    }}
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Savings']}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#2563eb"
                    fill="url(#savingsGradient)"
                    name="Savings"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-electric-blue/10 overflow-hidden mb-16"
        >
          <div className="grid grid-cols-4 gap-4 p-6 font-bold text-lg border-b border-electric-blue/10">
            <div className="text-black">Metric</div>
            <div className="text-black">Traditional</div>
            <div className="text-black">Logo</div>
            <div className="text-black">Improvement</div>
          </div>
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-4 gap-4 p-6 border-b border-electric-blue/10 last:border-0"
            >
              <div className="font-medium text-black">{row.factor}</div>
              <div className="text-black/70">{row.traditional}</div>
              <div className="text-electric-blue">{row.ai}</div>
              <div className="flex items-center gap-2 text-electric-blue">
                <TrendingUp className="w-4 h-4" />
                {row.improvement || row.savings}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-2xl mb-8 text-black max-w-3xl mx-auto">
            "Our financial strategies resulted in a
            <span className="text-electric-blue font-bold"> 125% increase in revenue</span> while reducing operational costs by
            <span className="text-electric-blue font-bold"> 40%</span>"
          </p>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
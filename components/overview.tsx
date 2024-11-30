'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Jan', total: 1800 },
  { name: 'Feb', total: 4500 },
  { name: 'Mar', total: 1500 },
  { name: 'Apr', total: 2800 },
  { name: 'May', total: 1200 },
  { name: 'Jun', total: 1600 },
  { name: 'Jul', total: 4200 },
  { name: 'Aug', total: 3800 },
  { name: 'Sep', total: 2800 },
  { name: 'Oct', total: 1800 },
  { name: 'Nov', total: 2000 },
  { name: 'Dec', total: 2200 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
          tickCount={6}
        />
        <Bar 
          dataKey="total" 
          fill="#ADFA1D"
          radius={[4, 4, 0, 0]} 
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}


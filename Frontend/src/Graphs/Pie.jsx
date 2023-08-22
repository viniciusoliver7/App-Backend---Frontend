import { PieChart, Pie, Legend,Tooltip } from 'recharts';

export default function Piechart(){
    const data = [
        {name : "Facebook", value:2000},
        {name:"Instagram", value:1500},
        {name:"Twitter",value :35005},
        {name:"Telegram",value :35015},
      ]

    return(
    <PieChart width={300} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#707070"
            label
          />
          <Tooltip/>
        </PieChart>)
}


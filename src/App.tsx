import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import styles from './App.module.css'

interface DataType {
  key: number
  col1: string
  col2: string
  col3: string
}

const columns: TableColumnsType<DataType> = [
  {
    title: '列1',
    dataIndex: 'col1',
    key: 'col1',
    width: 450,
  },
  {
    title: '列2',
    dataIndex: 'col2',
    key: 'col2',
    width: 450,
  },
  {
    title: '列3',
    dataIndex: 'col3',
    key: 'col3',
    width: 450,
    fixed: 'right',
  },
]

const dataSource: DataType[] = Array.from({ length: 5 }, (_, i) => ({
  key: i + 1,
  col1: `数据 ${i + 1}-1`,
  col2: `数据 ${i + 1}-2`,
  col3: `数据 ${i + 1}-3`,
}))

function App() {
  return (
    <div className={styles.tableWrapper}>
      <Table
        columns={columns}
        dataSource={dataSource}
        scroll={{ y: 400 }}
        pagination={false}
      />
    </div>
  )
}

export default App

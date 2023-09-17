import React from 'react'
import DataBaseTable from './data-table'
import { columns } from './columns'
import { data } from '@/lib/data'

type Props = {}

const Database = (props: Props) => {
  return (
    <DataBaseTable columns={columns} data={data}></DataBaseTable>
  )
}

export default Database
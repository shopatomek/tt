"use client";

import React from 'react'
import DataBaseTable from './database/data-table'
import { columns } from './database/columns'
import { data } from '@/lib/data'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className='container py-10 mx-auto'>
    <DataBaseTable columns={columns} data={data}></DataBaseTable>
    </div>
    
  )
}

export default Homepage;


// create table link
// https://www.youtube.com/watch?v=Jgr8JjYOJsU
 // https://github.com/Elliott-Chong/shadcn-table-yt
"use client"

import React from 'react'

 
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

export function DataBaseTable<TData, TValue>({columns, data}:DataTableProps<TData, TValue>){
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return(
      <div className='rounded-md border-neutral-600'>
        <Table> 
            <TableHeader>
                {table.getHeaderGroups().map(headerGroup => {
                    return(
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <TableHead key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableHeader>
            <TableBody>
                
            </TableBody>
        </Table>
      </div>
  )
}

// https://ui.shadcn.com/docs/components/data-table
export default DataBaseTable
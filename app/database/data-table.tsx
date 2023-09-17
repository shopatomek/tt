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

type Props = {}

function databaseTable({}: Props) {
  return (
    <div>database Table</div>
  )
}

export default databaseTable
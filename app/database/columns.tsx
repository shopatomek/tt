'use client';

import { Button } from "@/components/ui/button";
import { Data } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

// interface Data {
//     ID: number;
//     Name: string;
//     Link: string;
//     Description: string;
//     Subscribers: number;
//     Stats: string;
//     Tags: string;
//     Likes: number;
// }

export const columns: ColumnDef<Data>[] = [
    {
        header: "ID",
        accessorKey: "ID"
    },
    {
        header: "Name",
        accessorKey: "Name"
    },
    {
        header: "Link",
        accessorKey: "Link"
    },
    {
        header: "Description",
        accessorKey: "Description"
    },
    {
        header: "Subscribers",
        accessorKey: "Subscribers"
    },
    {
        header: "Stats",
        accessorKey: "Stats",
        cell:({row}) => {
             const stats = row.getValue("Stats")
               const formatted = new Date(stats as string).toLocaleDateString()
               return (
                <div>{formatted}</div>
               )
            }
    },
    {
        header: "Tags",
        accessorKey: "Tags"
    },
    {
        header: "Likes",
        accessorKey: "Likes"
    },
    {
        id: "action",
        cell: () =>{
            return <Button></Button>
        }
    }
];

// możliwosci biblioteki react_table

// custom cell formating. przykład wyświetlenia czasu zgodnie z formatem
// w właściwścuach cell można definiować style, i przekazywać funkcje

// // cell:({row}) => {
//     const stats = row.getValue("Stats")
//     const formatted = new Date(stats as string).toLocaleDateString()
//     return (
//      <div>{formatted}</div>
//     )
//  }
// },
     
// // Ten kod definiuje tablicę columns, która jest używana do konfiguracji kolumn w tabeli. Tabela ta jest tworzona przy użyciu biblioteki @tanstack/react-table.

// W tym kodzie, importowane są dwa moduły:

// Data z @/lib/data: To jest interfejs lub typ, który zawiera strukturę danych dla tabeli. Wygląda na to, że został już zdefiniowany w innym miejscu i jest importowany w tym module.

// ColumnDef z @tanstack/react-table: To jest interfejs lub typ, który definiuje strukturę kolumny w tabeli. Ten typ jest używany do określenia konfiguracji każdej kolumny w tablicy columns.

// Następnie, jest zdefiniowana zmienna columns, która jest tablicą obiektów typu ColumnDef<Data>. Każdy obiekt w tablicy reprezentuje konfigurację pojedynczej kolumny w tabeli. Dla każdej kolumny, określone są właściwości header (nagłówek kolumny wyświetlany w tabeli) i accessorKey (klucz dostępu do danych w obiekcie Data).

// Każda kolumna w tabeli odpowiada jednemu polu zdefiniowanemu w interfejsie Data. Dzięki temu, dane z obiektów typu Data będą wyświetlane w odpowiednich kolumnach tabeli.
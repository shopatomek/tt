

import { Data } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";

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
        accessorKey: "Stats"
    },
    {
        header: "Tags",
        accessorKey: "Tags"
    },
    {
        header: "Likes",
        accessorKey: "Likes"
    }
];

// // Ten kod definiuje tablicę columns, która jest używana do konfiguracji kolumn w tabeli. Tabela ta jest tworzona przy użyciu biblioteki @tanstack/react-table.

// W tym kodzie, importowane są dwa moduły:

// Data z @/lib/data: To jest interfejs lub typ, który zawiera strukturę danych dla tabeli. Wygląda na to, że został już zdefiniowany w innym miejscu i jest importowany w tym module.

// ColumnDef z @tanstack/react-table: To jest interfejs lub typ, który definiuje strukturę kolumny w tabeli. Ten typ jest używany do określenia konfiguracji każdej kolumny w tablicy columns.

// Następnie, jest zdefiniowana zmienna columns, która jest tablicą obiektów typu ColumnDef<Data>. Każdy obiekt w tablicy reprezentuje konfigurację pojedynczej kolumny w tabeli. Dla każdej kolumny, określone są właściwości header (nagłówek kolumny wyświetlany w tabeli) i accessorKey (klucz dostępu do danych w obiekcie Data).

// Każda kolumna w tabeli odpowiada jednemu polu zdefiniowanemu w interfejsie Data. Dzięki temu, dane z obiektów typu Data będą wyświetlane w odpowiednich kolumnach tabeli.
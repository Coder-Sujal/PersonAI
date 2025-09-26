import type { ColumnDef } from "@tanstack/react-table";

type Persona = {
  name: string;
  createdAt: string;
};

export const columns: ColumnDef<Persona>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];

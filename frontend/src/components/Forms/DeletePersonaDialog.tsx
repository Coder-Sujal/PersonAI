import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import type { DialogProps } from "./AddPersonaForm";
import { DataTable } from "./DeletePersonaDialogComponents/DataTable";
import { columns } from "./DeletePersonaDialogComponents/columns";

type Persona = {
  name: string;
  createdAt: string;
};

const persona: Persona[] = [
  { name: "Alice Johnson", createdAt: "January 5, 2025" },
  { name: "Michael Smith", createdAt: "January 10, 2025" },
  { name: "Sujal Chodvadiya", createdAt: "January 15, 2025" },
  { name: "Emma Brown", createdAt: "February 1, 2025" },
  { name: "Liam Wilson", createdAt: "February 10, 2025" },
  { name: "Sophia Davis", createdAt: "February 20, 2025" },
  { name: "Noah Miller", createdAt: "March 1, 2025" },
  { name: "Olivia Martinez", createdAt: "March 10, 2025" },
  { name: "Ethan Anderson", createdAt: "March 20, 2025" },
  { name: "Ava Thompson", createdAt: "April 1, 2025" },
  { name: "Alice Johnson", createdAt: "January 5, 2025" },
  { name: "Michael Smith", createdAt: "January 10, 2025" },
  { name: "Sujal Chodvadiya", createdAt: "January 15, 2025" },
  { name: "Noah Miller", createdAt: "March 1, 2025" },
  { name: "Olivia Martinez", createdAt: "March 10, 2025" },
  { name: "Ethan Anderson", createdAt: "March 20, 2025" },
  { name: "Ava Thompson", createdAt: "April 1, 2025" },
  { name: "Alice Johnson", createdAt: "January 5, 2025" },
  { name: "Michael Smith", createdAt: "January 10, 2025" },
];

const DeletePersonaDialog = ({ isOpen, onOpenChange }: DialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Persona</DialogTitle>
          <DialogDescription>
            Click on delete button to delete the persona.
          </DialogDescription>
        </DialogHeader>
        <DataTable data={persona} columns={columns} />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePersonaDialog;

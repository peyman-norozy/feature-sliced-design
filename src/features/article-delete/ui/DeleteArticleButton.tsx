import { useState } from "react";
import { useDeleteArticle } from "../model";
import { Button, DialogHeader, DialogFooter } from "@/shared/ui";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";

export const DeleteArticleButton = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const { handleDelete } = useDeleteArticle(id);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>Delete</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Article</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => {
              handleDelete();
              setOpen(false);
            }}
          >
            Comfirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

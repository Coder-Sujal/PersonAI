import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const AddPersonaFormSchema = z.object({
  name: z.string().min(1, "This field is require"),
  persona: z.string().min(1, "This field is require"),
  example: z.string().min(1, "This field is require"),
});

export interface DialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddPersonaForm = ({ isOpen, onOpenChange }: DialogProps) => {
  const form = useForm<z.infer<typeof AddPersonaFormSchema>>({
    resolver: zodResolver(AddPersonaFormSchema),
    defaultValues: {
      name: "",
      persona: "",
      example: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AddPersonaFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Add Persona</DialogTitle>
              <DialogDescription>
                Add the Person's name, persona information and example of
                conversation .
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the name of the person."
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.name && (
                    <FormMessage>
                      {form.formState.errors.name.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="persona"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Persona</FormLabel>
                  <FormControl>
                    <Textarea
                      className="max-h-10"
                      placeholder="Enter the persona of person. (eg. behavior)."
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.persona && (
                    <FormMessage>
                      {form.formState.errors.persona.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Example</FormLabel>
                  <FormControl>
                    <Textarea
                      className="max-h-20"
                      placeholder="Enter the example of conversation of the person."
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.example && (
                    <FormMessage>
                      {form.formState.errors.example.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="cursor-pointer">
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPersonaForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster, toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Email not valid.",
  }),
});

export function WaitlistForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Thanks for your support!", {
      description: (
        <span>
          We're added <b>{values.email}</b> to the waitlist!
        </span>
      ),
    });
    form.reset();
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="jonhdoe@example.com" {...field} />
                </FormControl>
                <FormDescription className="text-[13px]">
                  {/* Your email is save with Astro DB. */}
                  Astro DB will be connected soon. Testing the sonner component now.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
      {/* <Toaster richColors /> */}
        </form>
      </Form>
    </>
  );
}

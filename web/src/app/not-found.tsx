import { ErrorOne } from "@/components/watermelon-ui/error-1";

export default function NotFound() {
  return (
    <ErrorOne
      code="404"
      title="Page not found"
      description="We couldn't find that page or component. Let's get you back to the catalog."
    />
  );
}

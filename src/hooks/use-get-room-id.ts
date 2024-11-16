import { useParams } from "next/navigation"
import { Id } from "../../convex/_generated/dataModel";

export const useGetOrganizationId = () => {
  const params = useParams();
  return params.orgId as Id<"organizations">;
}
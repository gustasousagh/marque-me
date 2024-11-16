import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"

export const GetAllOrganizations = () => {
  const data = useQuery(api.organization.getOrganizations);
  const isLoading = data === undefined;
  return { data, isLoading };
}
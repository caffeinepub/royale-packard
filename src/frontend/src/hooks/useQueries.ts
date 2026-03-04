import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  FeaturedProject,
  ProjectStatus,
  ProjectType,
  PropertyListing,
} from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllProjects() {
  const { actor, isFetching } = useActor();
  return useQuery<FeaturedProject[]>({
    queryKey: ["projects", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProjectsByType(filterType: ProjectType) {
  const { actor, isFetching } = useActor();
  return useQuery<FeaturedProject[]>({
    queryKey: ["projects", filterType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProjectsByType(filterType);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetListings(
  filterType: ProjectType | null,
  filterStatus: ProjectStatus | null,
) {
  const { actor, isFetching } = useActor();
  return useQuery<PropertyListing[]>({
    queryKey: ["listings", filterType, filterStatus],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getListings(filterType, filterStatus);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      email,
      projectType,
      budgetRange,
      message,
    }: {
      name: string;
      phone: string;
      email: string;
      projectType: ProjectType;
      budgetRange: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitInquiry(
        name,
        phone,
        email,
        projectType,
        budgetRange,
        message,
      );
    },
  });
}

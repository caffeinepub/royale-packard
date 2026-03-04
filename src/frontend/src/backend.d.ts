import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PropertyListing {
    id: bigint;
    status: ProjectStatus;
    area: bigint;
    name: string;
    priceRange: string;
    shortDescription: string;
    ptype: ProjectType;
    location: string;
}
export type Time = bigint;
export interface FeaturedProject {
    id: bigint;
    status: ProjectStatus;
    name: string;
    shortDescription: string;
    ptype: ProjectType;
    location: string;
}
export interface ContactInquiry {
    projectType: ProjectType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
    budgetRange: string;
}
export enum ProjectStatus {
    completed = "completed",
    ongoing = "ongoing"
}
export enum ProjectType {
    interior = "interior",
    commercial = "commercial",
    residential = "residential"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<ContactInquiry>>;
    getAllProjects(): Promise<Array<FeaturedProject>>;
    getListingById(id: bigint): Promise<PropertyListing>;
    getListings(filterType: ProjectType | null, filterStatus: ProjectStatus | null): Promise<Array<PropertyListing>>;
    getProjectsByType(filterType: ProjectType): Promise<Array<FeaturedProject>>;
    init(): Promise<void>;
    submitInquiry(name: string, phone: string, email: string, projectType: ProjectType, budgetRange: string, message: string): Promise<void>;
}

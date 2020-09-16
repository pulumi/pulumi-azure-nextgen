import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listGlobalDomainRegistrationDomainRecommendations(args?: ListGlobalDomainRegistrationDomainRecommendationsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalDomainRegistrationDomainRecommendationsResult>;
export interface ListGlobalDomainRegistrationDomainRecommendationsArgs {
    /**
     * Keywords to be used for generating domain recommendations
     */
    readonly keywords?: string;
    /**
     * Maximum number of recommendations
     */
    readonly maxDomainRecommendations?: number;
}
/**
 * Collection of domain name identifiers
 */
export interface ListGlobalDomainRegistrationDomainRecommendationsResult {
    /**
     * Link to next page of resources
     */
    readonly nextLink?: string;
    /**
     * Collection of resources
     */
    readonly value?: outputs.domainregistration.v20150801.NameIdentifierResponse[];
}

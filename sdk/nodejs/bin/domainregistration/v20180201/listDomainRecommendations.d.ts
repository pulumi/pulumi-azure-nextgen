import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listDomainRecommendations(args?: ListDomainRecommendationsArgs, opts?: pulumi.InvokeOptions): Promise<ListDomainRecommendationsResult>;
export interface ListDomainRecommendationsArgs {
    /**
     * Keywords to be used for generating domain recommendations.
     */
    readonly keywords?: string;
    /**
     * Maximum number of recommendations.
     */
    readonly maxDomainRecommendations?: number;
}
/**
 * Collection of domain name identifiers.
 */
export interface ListDomainRecommendationsResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: outputs.domainregistration.v20180201.NameIdentifierResponse[];
}

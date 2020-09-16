import * as pulumi from "@pulumi/pulumi";
export declare function getSuppression(args: GetSuppressionArgs, opts?: pulumi.InvokeOptions): Promise<GetSuppressionResult>;
export interface GetSuppressionArgs {
    /**
     * The name of the suppression.
     */
    readonly name: string;
    /**
     * The recommendation ID.
     */
    readonly recommendationId: string;
    /**
     * The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
     */
    readonly resourceUri: string;
}
/**
 * The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.
 */
export interface GetSuppressionResult {
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The GUID of the suppression.
     */
    readonly suppressionId?: string;
    /**
     * The duration for which the suppression is valid.
     */
    readonly ttl?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}

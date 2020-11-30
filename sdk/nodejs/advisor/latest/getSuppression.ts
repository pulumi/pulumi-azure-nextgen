// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../../types";
import * as utilities from "../../utilities";

export function getSuppression(args: GetSuppressionArgs, opts?: pulumi.InvokeOptions): Promise<GetSuppressionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:advisor/latest:getSuppression", {
        "name": args.name,
        "recommendationId": args.recommendationId,
        "resourceUri": args.resourceUri,
    }, opts);
}

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
     * Gets or sets the expiration time stamp.
     */
    readonly expirationTimeStamp: string;
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

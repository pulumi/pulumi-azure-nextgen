// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getLab(args: GetLabArgs, opts?: pulumi.InvokeOptions): Promise<GetLabResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:labservices/latest:getLab", {
        "expand": args.expand,
        "labAccountName": args.labAccountName,
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=maxUsersInLab)'
     */
    readonly expand?: string;
    /**
     * The name of the lab Account.
     */
    readonly labAccountName: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Represents a lab.
 */
export interface GetLabResult {
    /**
     * Object id of the user that created the lab.
     */
    readonly createdByObjectId: string;
    /**
     * Lab creator name
     */
    readonly createdByUserPrincipalName: string;
    /**
     * Creation date for the lab
     */
    readonly createdDate: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * Invitation code that users can use to join a lab.
     */
    readonly invitationCode: string;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: outputs.labservices.latest.LatestOperationResultResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * Maximum number of users allowed in the lab.
     */
    readonly maxUsersInLab?: number;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
    /**
     * Maximum duration a user can use an environment for in the lab.
     */
    readonly usageQuota?: string;
    /**
     * Lab user access mode (open to all vs. restricted to those listed on the lab).
     */
    readonly userAccessMode?: string;
    /**
     * Maximum value MaxUsersInLab can be set to, as specified by the service
     */
    readonly userQuota: number;
}

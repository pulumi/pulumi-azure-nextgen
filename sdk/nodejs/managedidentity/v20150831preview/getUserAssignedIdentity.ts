// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getUserAssignedIdentity(args: GetUserAssignedIdentityArgs, opts?: pulumi.InvokeOptions): Promise<GetUserAssignedIdentityResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:managedidentity/v20150831preview:getUserAssignedIdentity", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetUserAssignedIdentityArgs {
    /**
     * The name of the Resource Group to which the identity belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the identity resource.
     */
    readonly resourceName: string;
}

/**
 * Describes an identity resource.
 */
export interface GetUserAssignedIdentityResult {
    /**
     * The id of the app associated with the identity. This is a random generated UUID by MSI.
     */
    readonly clientId: string;
    /**
     *  The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity credentials.
     */
    readonly clientSecretUrl: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The id of the service principal object associated with the created identity.
     */
    readonly principalId: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The id of the tenant which the identity belongs to.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}

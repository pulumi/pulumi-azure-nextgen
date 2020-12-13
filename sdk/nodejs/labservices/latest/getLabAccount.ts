// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getLabAccount(args: GetLabAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetLabAccountResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:labservices/latest:getLabAccount", {
        "expand": args.expand,
        "labAccountName": args.labAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabAccountArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=sizeConfiguration)'
     */
    readonly expand?: string;
    /**
     * The name of the lab Account.
     */
    readonly labAccountName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Represents a lab account.
 */
export interface GetLabAccountResult {
    /**
     * Represents if region selection is enabled
     */
    readonly enabledRegionSelection?: boolean;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: outputs.labservices.latest.LatestOperationResultResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Represents the size configuration under the lab account
     */
    readonly sizeConfiguration: outputs.labservices.latest.SizeConfigurationPropertiesResponse;
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
}

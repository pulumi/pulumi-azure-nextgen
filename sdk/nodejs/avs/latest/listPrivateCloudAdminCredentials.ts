// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listPrivateCloudAdminCredentials(args: ListPrivateCloudAdminCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListPrivateCloudAdminCredentialsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:avs/latest:listPrivateCloudAdminCredentials", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListPrivateCloudAdminCredentialsArgs {
    /**
     * Name of the private cloud
     */
    readonly privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}

/**
 * Administrative credentials for accessing vCenter and NSX-T
 */
export interface ListPrivateCloudAdminCredentialsResult {
    /**
     * NSX-T Manager password
     */
    readonly nsxtPassword: string;
    /**
     * NSX-T Manager username
     */
    readonly nsxtUsername: string;
    /**
     * vCenter admin password
     */
    readonly vcenterPassword: string;
    /**
     * vCenter admin username
     */
    readonly vcenterUsername: string;
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listManagedClusterMonitoringUserCredentials(args: ListManagedClusterMonitoringUserCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterMonitoringUserCredentialsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:containerservice/v20200701:listManagedClusterMonitoringUserCredentials", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListManagedClusterMonitoringUserCredentialsArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    readonly resourceName: string;
}

/**
 * The list of credential result response.
 */
export interface ListManagedClusterMonitoringUserCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: outputs.containerservice.v20200701.CredentialResultResponse[];
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getOpenShiftCluster(args: GetOpenShiftClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenShiftClusterResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:redhatopenshift/v20200430:getOpenShiftCluster", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetOpenShiftClusterArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the OpenShift cluster resource.
     */
    readonly resourceName: string;
}

/**
 * OpenShiftCluster represents an Azure Red Hat OpenShift cluster.
 */
export interface GetOpenShiftClusterResult {
    /**
     * The cluster API server profile.
     */
    readonly apiserverProfile?: outputs.redhatopenshift.v20200430.APIServerProfileResponse;
    /**
     * The cluster profile.
     */
    readonly clusterProfile?: outputs.redhatopenshift.v20200430.ClusterProfileResponse;
    /**
     * The console profile.
     */
    readonly consoleProfile?: outputs.redhatopenshift.v20200430.ConsoleProfileResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The cluster ingress profiles.
     */
    readonly ingressProfiles?: outputs.redhatopenshift.v20200430.IngressProfileResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The cluster master profile.
     */
    readonly masterProfile?: outputs.redhatopenshift.v20200430.MasterProfileResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The cluster network profile.
     */
    readonly networkProfile?: outputs.redhatopenshift.v20200430.NetworkProfileResponse;
    /**
     * The cluster provisioning state (immutable).
     */
    readonly provisioningState?: string;
    /**
     * The cluster service principal profile.
     */
    readonly servicePrincipalProfile?: outputs.redhatopenshift.v20200430.ServicePrincipalProfileResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The cluster worker profiles.
     */
    readonly workerProfiles?: outputs.redhatopenshift.v20200430.WorkerProfileResponse[];
}

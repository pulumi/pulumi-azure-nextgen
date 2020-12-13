// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listOperationalizationClusterKeys(args: ListOperationalizationClusterKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListOperationalizationClusterKeysResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:machinelearningcompute/v20170801preview:listOperationalizationClusterKeys", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListOperationalizationClusterKeysArgs {
    /**
     * The name of the cluster.
     */
    readonly clusterName: string;
    /**
     * Name of the resource group in which the cluster is located.
     */
    readonly resourceGroupName: string;
}

/**
 * Credentials to resources in the cluster.
 */
export interface ListOperationalizationClusterKeysResult {
    /**
     * Credentials for Azure AppInsights.
     */
    readonly appInsights?: outputs.machinelearningcompute.v20170801preview.AppInsightsCredentialsResponse;
    /**
     * Credentials for Azure Container Registry.
     */
    readonly containerRegistry?: outputs.machinelearningcompute.v20170801preview.ContainerRegistryCredentialsResponse;
    /**
     * Credentials for Azure Container Service.
     */
    readonly containerService?: outputs.machinelearningcompute.v20170801preview.ContainerServiceCredentialsResponse;
    /**
     * Global authorization keys for all user services deployed in cluster. These are used if the service does not have auth keys.
     */
    readonly serviceAuthConfiguration?: outputs.machinelearningcompute.v20170801preview.ServiceAuthConfigurationResponse;
    /**
     * The SSL configuration for the services.
     */
    readonly sslConfiguration?: outputs.machinelearningcompute.v20170801preview.SslConfigurationResponse;
    /**
     * Credentials for the Storage Account.
     */
    readonly storageAccount?: outputs.machinelearningcompute.v20170801preview.StorageAccountCredentialsResponse;
}

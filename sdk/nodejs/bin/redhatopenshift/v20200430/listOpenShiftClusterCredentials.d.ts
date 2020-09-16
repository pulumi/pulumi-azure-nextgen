import * as pulumi from "@pulumi/pulumi";
export declare function listOpenShiftClusterCredentials(args: ListOpenShiftClusterCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListOpenShiftClusterCredentialsResult>;
export interface ListOpenShiftClusterCredentialsArgs {
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
 * OpenShiftClusterCredentials represents an OpenShift cluster's credentials
 */
export interface ListOpenShiftClusterCredentialsResult {
    /**
     * The password for the kubeadmin user
     */
    readonly kubeadminPassword?: string;
    /**
     * The username for the kubeadmin user
     */
    readonly kubeadminUsername?: string;
}

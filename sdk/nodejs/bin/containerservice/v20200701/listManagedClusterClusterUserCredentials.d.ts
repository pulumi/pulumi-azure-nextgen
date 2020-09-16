import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listManagedClusterClusterUserCredentials(args: ListManagedClusterClusterUserCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterClusterUserCredentialsResult>;
export interface ListManagedClusterClusterUserCredentialsArgs {
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
export interface ListManagedClusterClusterUserCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: outputs.containerservice.v20200701.CredentialResultResponse[];
}

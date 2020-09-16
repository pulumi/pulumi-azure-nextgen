import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listManagedClusterClusterAdminCredentials(args: ListManagedClusterClusterAdminCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterClusterAdminCredentialsResult>;
export interface ListManagedClusterClusterAdminCredentialsArgs {
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
export interface ListManagedClusterClusterAdminCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: outputs.containerservice.v20200401.CredentialResultResponse[];
}

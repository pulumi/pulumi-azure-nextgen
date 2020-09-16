import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listRegistryCredentials(args: ListRegistryCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListRegistryCredentialsResult>;
export interface ListRegistryCredentialsArgs {
    /**
     * The name of the container registry.
     */
    readonly registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * The response from the ListCredentials operation.
 */
export interface ListRegistryCredentialsResult {
    /**
     * The list of passwords for a container registry.
     */
    readonly passwords?: outputs.containerregistry.v20190501.RegistryPasswordResponse[];
    /**
     * The username for a container registry.
     */
    readonly username?: string;
}

import * as pulumi from "@pulumi/pulumi";
export declare function listManagedClusterAccessProfile(args: ListManagedClusterAccessProfileArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterAccessProfileResult>;
export interface ListManagedClusterAccessProfileArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    readonly resourceName: string;
    /**
     * The name of the role for managed cluster accessProfile resource.
     */
    readonly roleName: string;
}
/**
 * Managed cluster Access Profile.
 */
export interface ListManagedClusterAccessProfileResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeConfig?: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}

import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppMetadata(args: ListWebAppMetadataArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppMetadataResult>;
export interface ListWebAppMetadataArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * String dictionary resource.
 */
export interface ListWebAppMetadataResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}

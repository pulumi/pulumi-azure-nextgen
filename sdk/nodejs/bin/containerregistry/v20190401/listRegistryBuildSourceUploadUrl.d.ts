import * as pulumi from "@pulumi/pulumi";
export declare function listRegistryBuildSourceUploadUrl(args: ListRegistryBuildSourceUploadUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListRegistryBuildSourceUploadUrlResult>;
export interface ListRegistryBuildSourceUploadUrlArgs {
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
 * The properties of a response to source upload request.
 */
export interface ListRegistryBuildSourceUploadUrlResult {
    /**
     * The relative path to the source. This is used to submit the subsequent queue build request.
     */
    readonly relativePath?: string;
    /**
     * The URL where the client can upload the source.
     */
    readonly uploadUrl?: string;
}

import * as pulumi from "@pulumi/pulumi";
export declare function getLinkedService(args: GetLinkedServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServiceResult>;
export interface GetLinkedServiceArgs {
    /**
     * Name of the linked service.
     */
    readonly linkedServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}
/**
 * The top level Linked service resource container.
 */
export interface GetLinkedServiceResult {
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the linked service.
     */
    readonly provisioningState?: string;
    /**
     * The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
     */
    readonly resourceId?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access
     */
    readonly writeAccessResourceId?: string;
}

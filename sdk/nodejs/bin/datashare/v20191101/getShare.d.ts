import * as pulumi from "@pulumi/pulumi";
export declare function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult>;
export interface GetShareArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the share to retrieve.
     */
    readonly shareName: string;
}
/**
 * A share data transfer object.
 */
export interface GetShareResult {
    /**
     * Time at which the share was created.
     */
    readonly createdAt: string;
    /**
     * Share description.
     */
    readonly description?: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state
     */
    readonly provisioningState: string;
    /**
     * Share kind.
     */
    readonly shareKind?: string;
    /**
     * Share terms.
     */
    readonly terms?: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: string;
    /**
     * Name of the user who created the resource
     */
    readonly userName: string;
}

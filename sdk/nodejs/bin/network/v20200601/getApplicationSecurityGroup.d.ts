import * as pulumi from "@pulumi/pulumi";
export declare function getApplicationSecurityGroup(args: GetApplicationSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationSecurityGroupResult>;
export interface GetApplicationSecurityGroupArgs {
    /**
     * The name of the application security group.
     */
    readonly applicationSecurityGroupName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * An application security group in a resource group.
 */
export interface GetApplicationSecurityGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the application security group resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}

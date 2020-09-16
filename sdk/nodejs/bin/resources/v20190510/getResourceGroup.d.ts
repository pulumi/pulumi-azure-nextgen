import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getResourceGroup(args: GetResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceGroupResult>;
export interface GetResourceGroupArgs {
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * Resource group information.
 */
export interface GetResourceGroupResult {
    /**
     * The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
     */
    readonly location: string;
    /**
     * The ID of the resource that manages this resource group.
     */
    readonly managedBy?: string;
    /**
     * The name of the resource group.
     */
    readonly name: string;
    /**
     * The resource group properties.
     */
    readonly properties: outputs.resources.v20190510.ResourceGroupPropertiesResponse;
    /**
     * The tags attached to the resource group.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource group.
     */
    readonly type: string;
}

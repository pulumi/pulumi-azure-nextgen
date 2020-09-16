import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getResource(args: GetResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceResult>;
export interface GetResourceArgs {
    /**
     * Resource identity.
     */
    readonly parentResourcePath: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Resource identity.
     */
    readonly resourceName: string;
    /**
     * Resource identity.
     */
    readonly resourceProviderNamespace: string;
    /**
     * Resource identity.
     */
    readonly resourceType: string;
}
/**
 * Resource information.
 */
export interface GetResourceResult {
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets or sets the plan of the resource.
     */
    readonly plan?: outputs.resources.v20151101.PlanResponse;
    /**
     * Gets or sets the resource properties.
     */
    readonly properties: {
        [key: string]: any;
    };
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

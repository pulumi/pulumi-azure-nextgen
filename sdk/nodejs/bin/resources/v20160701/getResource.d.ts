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
     * The identity of the resource.
     */
    readonly identity?: outputs.resources.v20160701.IdentityResponse;
    /**
     * The kind of the resource.
     */
    readonly kind?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Id of the resource that manages this resource.
     */
    readonly managedBy?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The plan of the resource.
     */
    readonly plan?: outputs.resources.v20160701.PlanResponse;
    /**
     * The resource properties.
     */
    readonly properties: {
        [key: string]: any;
    };
    /**
     * The sku of the resource.
     */
    readonly sku?: outputs.resources.v20160701.SkuResponse;
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

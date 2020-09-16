import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult>;
export interface GetServiceArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the service instance.
     */
    readonly resourceName: string;
}
/**
 * The description of the service.
 */
export interface GetServiceResult {
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: outputs.healthcareapis.v20190916.ResourceResponseIdentity;
    /**
     * The kind of the service.
     */
    readonly kind: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The common properties of a service.
     */
    readonly properties: outputs.healthcareapis.v20190916.ServicesPropertiesResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The resource type.
     */
    readonly type: string;
}

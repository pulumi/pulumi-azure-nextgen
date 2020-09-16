import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getMediaService(args: GetMediaServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetMediaServiceResult>;
export interface GetMediaServiceArgs {
    /**
     * Name of the Media Service.
     */
    readonly mediaServiceName: string;
    /**
     * Name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * The properties of a Media Service resource.
 */
export interface GetMediaServiceResult {
    /**
     * Read-only property that lists the Media Services REST API endpoints for this resource. If supplied on a PUT or PATCH, the value will be ignored.
     */
    readonly apiEndpoints: outputs.media.v20151001.ApiEndpointResponse[];
    /**
     * The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The storage accounts for this resource.
     */
    readonly storageAccounts?: outputs.media.v20151001.StorageAccountResponse[];
    /**
     * Tags to help categorize the resource in the Azure portal.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource
     */
    readonly type: string;
}

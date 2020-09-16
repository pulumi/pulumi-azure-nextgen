import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The properties of a Media Service resource.
 */
export declare class MediaService extends pulumi.CustomResource {
    /**
     * Get an existing MediaService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MediaService;
    /**
     * Returns true if the given object is an instance of MediaService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MediaService;
    /**
     * Read-only property that lists the Media Services REST API endpoints for this resource. If supplied on a PUT or PATCH, the value will be ignored.
     */
    readonly apiEndpoints: pulumi.Output<outputs.media.v20151001.ApiEndpointResponse[]>;
    /**
     * The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The storage accounts for this resource.
     */
    readonly storageAccounts: pulumi.Output<outputs.media.v20151001.StorageAccountResponse[] | undefined>;
    /**
     * Tags to help categorize the resource in the Azure portal.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a MediaService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a MediaService resource.
 */
export interface MediaServiceArgs {
    /**
     * The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of the Media Service.
     */
    readonly mediaServiceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The storage accounts for this resource.
     */
    readonly storageAccounts?: pulumi.Input<pulumi.Input<inputs.media.v20151001.StorageAccount>[]>;
    /**
     * Tags to help categorize the resource in the Azure portal.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}

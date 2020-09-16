import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The description of the IoT hub.
 */
export declare class IotHubResource extends pulumi.CustomResource {
    /**
     * Get an existing IotHubResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotHubResource;
    /**
     * Returns true if the given object is an instance of IotHubResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IotHubResource;
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The properties of an IoT hub.
     */
    readonly properties: pulumi.Output<outputs.devices.v20170701.IotHubPropertiesResponse>;
    /**
     * The name of the resource group that contains the IoT hub. A resource group name uniquely identifies the resource group within the subscription.
     */
    readonly resourcegroup: pulumi.Output<string>;
    /**
     * Information about the SKU of the IoT hub.
     */
    readonly sku: pulumi.Output<outputs.devices.v20170701.IotHubSkuInfoResponse>;
    /**
     * The subscription identifier.
     */
    readonly subscriptionid: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a IotHubResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubResourceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IotHubResource resource.
 */
export interface IotHubResourceArgs {
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The properties of an IoT hub.
     */
    readonly properties?: pulumi.Input<inputs.devices.v20170701.IotHubProperties>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub. A resource group name uniquely identifies the resource group within the subscription.
     */
    readonly resourcegroup: pulumi.Input<string>;
    /**
     * Information about the SKU of the IoT hub.
     */
    readonly sku: pulumi.Input<inputs.devices.v20170701.IotHubSkuInfo>;
    /**
     * The subscription identifier.
     */
    readonly subscriptionid: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}

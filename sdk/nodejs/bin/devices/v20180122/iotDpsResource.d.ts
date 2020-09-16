import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The description of the provisioning service.
 */
export declare class IotDpsResource extends pulumi.CustomResource {
    /**
     * Get an existing IotDpsResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotDpsResource;
    /**
     * Returns true if the given object is an instance of IotDpsResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IotDpsResource;
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
     * Service specific properties for a provisioning service
     */
    readonly properties: pulumi.Output<outputs.devices.v20180122.IotDpsPropertiesDescriptionResponse>;
    /**
     * Sku info for a provisioning Service.
     */
    readonly sku: pulumi.Output<outputs.devices.v20180122.IotDpsSkuInfoResponse>;
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
     * Create a IotDpsResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotDpsResourceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IotDpsResource resource.
 */
export interface IotDpsResourceArgs {
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Service specific properties for a provisioning service
     */
    readonly properties: pulumi.Input<inputs.devices.v20180122.IotDpsPropertiesDescription>;
    /**
     * Name of provisioning service to create or update.
     */
    readonly provisioningServiceName: pulumi.Input<string>;
    /**
     * Resource group identifier.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Sku info for a provisioning Service.
     */
    readonly sku: pulumi.Input<inputs.devices.v20180122.IotDpsSkuInfo>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The description of the IoT hub.
 */
export class IotHubResource extends pulumi.CustomResource {
    /**
     * Get an existing IotHubResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotHubResource {
        return new IotHubResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:devices/latest:IotHubResource';

    /**
     * Returns true if the given object is an instance of IotHubResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotHubResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotHubResource.__pulumiType;
    }

    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    public readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * IotHub properties
     */
    public readonly properties!: pulumi.Output<outputs.devices.latest.IotHubPropertiesResponse>;
    /**
     * IotHub SKU info
     */
    public readonly sku!: pulumi.Output<outputs.devices.latest.IotHubSkuInfoResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IotHubResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.sku === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["etag"] = args ? args.etag : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["etag"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:devices/v20160203:IotHubResource" }, { type: "azure-nextgen:devices/v20170119:IotHubResource" }, { type: "azure-nextgen:devices/v20170701:IotHubResource" }, { type: "azure-nextgen:devices/v20180122:IotHubResource" }, { type: "azure-nextgen:devices/v20180401:IotHubResource" }, { type: "azure-nextgen:devices/v20181201preview:IotHubResource" }, { type: "azure-nextgen:devices/v20190322:IotHubResource" }, { type: "azure-nextgen:devices/v20190322preview:IotHubResource" }, { type: "azure-nextgen:devices/v20190701preview:IotHubResource" }, { type: "azure-nextgen:devices/v20191104:IotHubResource" }, { type: "azure-nextgen:devices/v20200301:IotHubResource" }, { type: "azure-nextgen:devices/v20200401:IotHubResource" }, { type: "azure-nextgen:devices/v20200615:IotHubResource" }, { type: "azure-nextgen:devices/v20200710preview:IotHubResource" }, { type: "azure-nextgen:devices/v20200801:IotHubResource" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(IotHubResource.__pulumiType, name, inputs, opts);
    }
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
     * IotHub properties
     */
    readonly properties?: pulumi.Input<inputs.devices.latest.IotHubProperties>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * IotHub SKU info
     */
    readonly sku: pulumi.Input<inputs.devices.latest.IotHubSkuInfo>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

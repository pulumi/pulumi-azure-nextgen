// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Public IP prefix resource.
 */
export class PublicIPPrefix extends pulumi.CustomResource {
    /**
     * Get an existing PublicIPPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PublicIPPrefix {
        return new PublicIPPrefix(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/latest:PublicIPPrefix';

    /**
     * Returns true if the given object is an instance of PublicIPPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicIPPrefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicIPPrefix.__pulumiType;
    }

    /**
     * The customIpPrefix that this prefix is associated with.
     */
    public readonly customIPPrefix!: pulumi.Output<outputs.network.latest.SubResourceResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the public ip address.
     */
    public readonly extendedLocation!: pulumi.Output<outputs.network.latest.ExtendedLocationResponse | undefined>;
    /**
     * The allocated Prefix.
     */
    public /*out*/ readonly ipPrefix!: pulumi.Output<string>;
    /**
     * The list of tags associated with the public IP prefix.
     */
    public readonly ipTags!: pulumi.Output<outputs.network.latest.IpTagResponse[] | undefined>;
    /**
     * The reference to load balancer frontend IP configuration associated with the public IP prefix.
     */
    public /*out*/ readonly loadBalancerFrontendIpConfiguration!: pulumi.Output<outputs.network.latest.SubResourceResponse>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Length of the Public IP Prefix.
     */
    public readonly prefixLength!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the public IP prefix resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The public IP address version.
     */
    public readonly publicIPAddressVersion!: pulumi.Output<string | undefined>;
    /**
     * The list of all referenced PublicIPAddresses.
     */
    public /*out*/ readonly publicIPAddresses!: pulumi.Output<outputs.network.latest.ReferencedPublicIpAddressResponse[]>;
    /**
     * The resource GUID property of the public IP prefix resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The public IP prefix SKU.
     */
    public readonly sku!: pulumi.Output<outputs.network.latest.PublicIPPrefixSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PublicIPPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIPPrefixArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.publicIpPrefixName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'publicIpPrefixName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["customIPPrefix"] = args ? args.customIPPrefix : undefined;
            inputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["ipTags"] = args ? args.ipTags : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["prefixLength"] = args ? args.prefixLength : undefined;
            inputs["publicIPAddressVersion"] = args ? args.publicIPAddressVersion : undefined;
            inputs["publicIpPrefixName"] = args ? args.publicIpPrefixName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zones"] = args ? args.zones : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["ipPrefix"] = undefined /*out*/;
            inputs["loadBalancerFrontendIpConfiguration"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publicIPAddresses"] = undefined /*out*/;
            inputs["resourceGuid"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["customIPPrefix"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["extendedLocation"] = undefined /*out*/;
            inputs["ipPrefix"] = undefined /*out*/;
            inputs["ipTags"] = undefined /*out*/;
            inputs["loadBalancerFrontendIpConfiguration"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["prefixLength"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publicIPAddressVersion"] = undefined /*out*/;
            inputs["publicIPAddresses"] = undefined /*out*/;
            inputs["resourceGuid"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["zones"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/v20180701:PublicIPPrefix" }, { type: "azure-nextgen:network/v20180801:PublicIPPrefix" }, { type: "azure-nextgen:network/v20181001:PublicIPPrefix" }, { type: "azure-nextgen:network/v20181101:PublicIPPrefix" }, { type: "azure-nextgen:network/v20181201:PublicIPPrefix" }, { type: "azure-nextgen:network/v20190201:PublicIPPrefix" }, { type: "azure-nextgen:network/v20190401:PublicIPPrefix" }, { type: "azure-nextgen:network/v20190601:PublicIPPrefix" }, { type: "azure-nextgen:network/v20190701:PublicIPPrefix" }, { type: "azure-nextgen:network/v20190801:PublicIPPrefix" }, { type: "azure-nextgen:network/v20190901:PublicIPPrefix" }, { type: "azure-nextgen:network/v20191101:PublicIPPrefix" }, { type: "azure-nextgen:network/v20191201:PublicIPPrefix" }, { type: "azure-nextgen:network/v20200301:PublicIPPrefix" }, { type: "azure-nextgen:network/v20200401:PublicIPPrefix" }, { type: "azure-nextgen:network/v20200501:PublicIPPrefix" }, { type: "azure-nextgen:network/v20200601:PublicIPPrefix" }, { type: "azure-nextgen:network/v20200701:PublicIPPrefix" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(PublicIPPrefix.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a PublicIPPrefix resource.
 */
export interface PublicIPPrefixArgs {
    /**
     * The customIpPrefix that this prefix is associated with.
     */
    readonly customIPPrefix?: pulumi.Input<inputs.network.latest.SubResource>;
    /**
     * The extended location of the public ip address.
     */
    readonly extendedLocation?: pulumi.Input<inputs.network.latest.ExtendedLocation>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The list of tags associated with the public IP prefix.
     */
    readonly ipTags?: pulumi.Input<pulumi.Input<inputs.network.latest.IpTag>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The Length of the Public IP Prefix.
     */
    readonly prefixLength?: pulumi.Input<number>;
    /**
     * The public IP address version.
     */
    readonly publicIPAddressVersion?: pulumi.Input<string | enums.network.latest.IPVersion>;
    /**
     * The name of the public IP prefix.
     */
    readonly publicIpPrefixName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The public IP prefix SKU.
     */
    readonly sku?: pulumi.Input<inputs.network.latest.PublicIPPrefixSku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Public IP address resource.
 */
export class PublicIPAddress extends pulumi.CustomResource {
    /**
     * Get an existing PublicIPAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PublicIPAddress {
        return new PublicIPAddress(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/latest:PublicIPAddress';

    /**
     * Returns true if the given object is an instance of PublicIPAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicIPAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicIPAddress.__pulumiType;
    }

    /**
     * The DDoS protection custom policy associated with the public IP address.
     */
    public readonly ddosSettings!: pulumi.Output<outputs.network.latest.DdosSettingsResponse | undefined>;
    /**
     * The FQDN of the DNS record associated with the public IP address.
     */
    public readonly dnsSettings!: pulumi.Output<outputs.network.latest.PublicIPAddressDnsSettingsResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the public ip address.
     */
    public readonly extendedLocation!: pulumi.Output<outputs.network.latest.ExtendedLocationResponse | undefined>;
    /**
     * The idle timeout of the public IP address.
     */
    public readonly idleTimeoutInMinutes!: pulumi.Output<number | undefined>;
    /**
     * The IP address associated with the public IP address resource.
     */
    public readonly ipAddress!: pulumi.Output<string | undefined>;
    /**
     * The IP configuration associated with the public IP address.
     */
    public /*out*/ readonly ipConfiguration!: pulumi.Output<outputs.network.latest.IPConfigurationResponse>;
    /**
     * The list of tags associated with the public IP address.
     */
    public readonly ipTags!: pulumi.Output<outputs.network.latest.IpTagResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the public IP address resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The public IP address version.
     */
    public readonly publicIPAddressVersion!: pulumi.Output<string | undefined>;
    /**
     * The public IP address allocation method.
     */
    public readonly publicIPAllocationMethod!: pulumi.Output<string | undefined>;
    /**
     * The Public IP Prefix this Public IP Address should be allocated from.
     */
    public readonly publicIPPrefix!: pulumi.Output<outputs.network.latest.SubResourceResponse | undefined>;
    /**
     * The resource GUID property of the public IP address resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The public IP address SKU.
     */
    public readonly sku!: pulumi.Output<outputs.network.latest.PublicIPAddressSkuResponse | undefined>;
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
     * Create a PublicIPAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIPAddressArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.publicIpAddressName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'publicIpAddressName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["ddosSettings"] = args ? args.ddosSettings : undefined;
            inputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            inputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["idleTimeoutInMinutes"] = args ? args.idleTimeoutInMinutes : undefined;
            inputs["ipAddress"] = args ? args.ipAddress : undefined;
            inputs["ipTags"] = args ? args.ipTags : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["publicIPAddressVersion"] = args ? args.publicIPAddressVersion : undefined;
            inputs["publicIPAllocationMethod"] = args ? args.publicIPAllocationMethod : undefined;
            inputs["publicIPPrefix"] = args ? args.publicIPPrefix : undefined;
            inputs["publicIpAddressName"] = args ? args.publicIpAddressName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zones"] = args ? args.zones : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["ipConfiguration"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["resourceGuid"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["ddosSettings"] = undefined /*out*/;
            inputs["dnsSettings"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["extendedLocation"] = undefined /*out*/;
            inputs["idleTimeoutInMinutes"] = undefined /*out*/;
            inputs["ipAddress"] = undefined /*out*/;
            inputs["ipConfiguration"] = undefined /*out*/;
            inputs["ipTags"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publicIPAddressVersion"] = undefined /*out*/;
            inputs["publicIPAllocationMethod"] = undefined /*out*/;
            inputs["publicIPPrefix"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/v20150501preview:PublicIPAddress" }, { type: "azure-nextgen:network/v20150615:PublicIPAddress" }, { type: "azure-nextgen:network/v20160330:PublicIPAddress" }, { type: "azure-nextgen:network/v20160601:PublicIPAddress" }, { type: "azure-nextgen:network/v20160901:PublicIPAddress" }, { type: "azure-nextgen:network/v20161201:PublicIPAddress" }, { type: "azure-nextgen:network/v20170301:PublicIPAddress" }, { type: "azure-nextgen:network/v20170601:PublicIPAddress" }, { type: "azure-nextgen:network/v20170801:PublicIPAddress" }, { type: "azure-nextgen:network/v20170901:PublicIPAddress" }, { type: "azure-nextgen:network/v20171001:PublicIPAddress" }, { type: "azure-nextgen:network/v20171101:PublicIPAddress" }, { type: "azure-nextgen:network/v20180101:PublicIPAddress" }, { type: "azure-nextgen:network/v20180201:PublicIPAddress" }, { type: "azure-nextgen:network/v20180401:PublicIPAddress" }, { type: "azure-nextgen:network/v20180601:PublicIPAddress" }, { type: "azure-nextgen:network/v20180701:PublicIPAddress" }, { type: "azure-nextgen:network/v20180801:PublicIPAddress" }, { type: "azure-nextgen:network/v20181001:PublicIPAddress" }, { type: "azure-nextgen:network/v20181101:PublicIPAddress" }, { type: "azure-nextgen:network/v20181201:PublicIPAddress" }, { type: "azure-nextgen:network/v20190201:PublicIPAddress" }, { type: "azure-nextgen:network/v20190401:PublicIPAddress" }, { type: "azure-nextgen:network/v20190601:PublicIPAddress" }, { type: "azure-nextgen:network/v20190701:PublicIPAddress" }, { type: "azure-nextgen:network/v20190801:PublicIPAddress" }, { type: "azure-nextgen:network/v20190901:PublicIPAddress" }, { type: "azure-nextgen:network/v20191101:PublicIPAddress" }, { type: "azure-nextgen:network/v20191201:PublicIPAddress" }, { type: "azure-nextgen:network/v20200301:PublicIPAddress" }, { type: "azure-nextgen:network/v20200401:PublicIPAddress" }, { type: "azure-nextgen:network/v20200501:PublicIPAddress" }, { type: "azure-nextgen:network/v20200601:PublicIPAddress" }, { type: "azure-nextgen:network/v20200701:PublicIPAddress" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(PublicIPAddress.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a PublicIPAddress resource.
 */
export interface PublicIPAddressArgs {
    /**
     * The DDoS protection custom policy associated with the public IP address.
     */
    readonly ddosSettings?: pulumi.Input<inputs.network.latest.DdosSettings>;
    /**
     * The FQDN of the DNS record associated with the public IP address.
     */
    readonly dnsSettings?: pulumi.Input<inputs.network.latest.PublicIPAddressDnsSettings>;
    /**
     * The extended location of the public ip address.
     */
    readonly extendedLocation?: pulumi.Input<inputs.network.latest.ExtendedLocation>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The idle timeout of the public IP address.
     */
    readonly idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The IP address associated with the public IP address resource.
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * The list of tags associated with the public IP address.
     */
    readonly ipTags?: pulumi.Input<pulumi.Input<inputs.network.latest.IpTag>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The public IP address version.
     */
    readonly publicIPAddressVersion?: pulumi.Input<string | enums.network.latest.IPVersion>;
    /**
     * The public IP address allocation method.
     */
    readonly publicIPAllocationMethod?: pulumi.Input<string | enums.network.latest.IPAllocationMethod>;
    /**
     * The Public IP Prefix this Public IP Address should be allocated from.
     */
    readonly publicIPPrefix?: pulumi.Input<inputs.network.latest.SubResource>;
    /**
     * The name of the public IP address.
     */
    readonly publicIpAddressName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The public IP address SKU.
     */
    readonly sku?: pulumi.Input<inputs.network.latest.PublicIPAddressSku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}

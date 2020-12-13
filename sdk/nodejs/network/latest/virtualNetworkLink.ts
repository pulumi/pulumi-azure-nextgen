// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Describes a link to virtual network for a Private DNS zone.
 */
export class VirtualNetworkLink extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkLink {
        return new VirtualNetworkLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/latest:VirtualNetworkLink';

    /**
     * Returns true if the given object is an instance of VirtualNetworkLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkLink.__pulumiType;
    }

    /**
     * The ETag of the virtual network link.
     */
    public readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
     */
    public readonly registrationEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The reference of the virtual network.
     */
    public readonly virtualNetwork!: pulumi.Output<outputs.network.latest.SubResourceResponse | undefined>;
    /**
     * The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly virtualNetworkLinkState!: pulumi.Output<string>;

    /**
     * Create a VirtualNetworkLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.privateZoneName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'privateZoneName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetworkLinkName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'virtualNetworkLinkName'");
            }
            inputs["etag"] = args ? args.etag : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["privateZoneName"] = args ? args.privateZoneName : undefined;
            inputs["registrationEnabled"] = args ? args.registrationEnabled : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["virtualNetwork"] = args ? args.virtualNetwork : undefined;
            inputs["virtualNetworkLinkName"] = args ? args.virtualNetworkLinkName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualNetworkLinkState"] = undefined /*out*/;
        } else {
            inputs["etag"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["registrationEnabled"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualNetwork"] = undefined /*out*/;
            inputs["virtualNetworkLinkState"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/v20180901:VirtualNetworkLink" }, { type: "azure-nextgen:network/v20200101:VirtualNetworkLink" }, { type: "azure-nextgen:network/v20200601:VirtualNetworkLink" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(VirtualNetworkLink.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetworkLink resource.
 */
export interface VirtualNetworkLinkArgs {
    /**
     * The ETag of the virtual network link.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    readonly privateZoneName: pulumi.Input<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
     */
    readonly registrationEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The reference of the virtual network.
     */
    readonly virtualNetwork?: pulumi.Input<inputs.network.latest.SubResource>;
    /**
     * The name of the virtual network link.
     */
    readonly virtualNetworkLinkName: pulumi.Input<string>;
}

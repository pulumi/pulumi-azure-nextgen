// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * IpConfigurations.
 */
export class VirtualHubIpConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubIpConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHubIpConfiguration {
        return new VirtualHubIpConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20200701:VirtualHubIpConfiguration';

    /**
     * Returns true if the given object is an instance of VirtualHubIpConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualHubIpConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualHubIpConfiguration.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Name of the Ip Configuration.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The private IP address of the IP configuration.
     */
    public readonly privateIPAddress!: pulumi.Output<string | undefined>;
    /**
     * The private IP address allocation method.
     */
    public readonly privateIPAllocationMethod!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the IP configuration resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The reference to the public IP resource.
     */
    public readonly publicIPAddress!: pulumi.Output<outputs.network.v20200701.PublicIPAddressResponse | undefined>;
    /**
     * The reference to the subnet resource.
     */
    public readonly subnet!: pulumi.Output<outputs.network.v20200701.SubnetResponse | undefined>;
    /**
     * Ipconfiguration type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualHubIpConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubIpConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.ipConfigName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'ipConfigName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHubName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'virtualHubName'");
            }
            inputs["id"] = args ? args.id : undefined;
            inputs["ipConfigName"] = args ? args.ipConfigName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["privateIPAddress"] = args ? args.privateIPAddress : undefined;
            inputs["privateIPAllocationMethod"] = args ? args.privateIPAllocationMethod : undefined;
            inputs["publicIPAddress"] = args ? args.publicIPAddress : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["subnet"] = args ? args.subnet : undefined;
            inputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["etag"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["privateIPAddress"] = undefined /*out*/;
            inputs["privateIPAllocationMethod"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publicIPAddress"] = undefined /*out*/;
            inputs["subnet"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:VirtualHubIpConfiguration" }, { type: "azure-nextgen:network/v20200501:VirtualHubIpConfiguration" }, { type: "azure-nextgen:network/v20200601:VirtualHubIpConfiguration" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(VirtualHubIpConfiguration.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualHubIpConfiguration resource.
 */
export interface VirtualHubIpConfigurationArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the ipconfig.
     */
    readonly ipConfigName: pulumi.Input<string>;
    /**
     * Name of the Ip Configuration.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The private IP address of the IP configuration.
     */
    readonly privateIPAddress?: pulumi.Input<string>;
    /**
     * The private IP address allocation method.
     */
    readonly privateIPAllocationMethod?: pulumi.Input<string | enums.network.v20200701.IPAllocationMethod>;
    /**
     * The reference to the public IP resource.
     */
    readonly publicIPAddress?: pulumi.Input<inputs.network.v20200701.PublicIPAddress>;
    /**
     * The resource group name of the VirtualHub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the subnet resource.
     */
    readonly subnet?: pulumi.Input<inputs.network.v20200701.Subnet>;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: pulumi.Input<string>;
}

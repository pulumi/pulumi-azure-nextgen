// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Bastion Host resource.
 */
export class BastionHost extends pulumi.CustomResource {
    /**
     * Get an existing BastionHost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BastionHost {
        return new BastionHost(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20200401:BastionHost';

    /**
     * Returns true if the given object is an instance of BastionHost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BastionHost {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BastionHost.__pulumiType;
    }

    /**
     * FQDN for the endpoint on which bastion host is accessible.
     */
    public readonly dnsName!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * IP configuration of the Bastion Host resource.
     */
    public readonly ipConfigurations!: pulumi.Output<outputs.network.v20200401.BastionHostIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the bastion host resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BastionHost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BastionHostArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.bastionHostName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'bastionHostName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["bastionHostName"] = args ? args.bastionHostName : undefined;
            inputs["dnsName"] = args ? args.dnsName : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["dnsName"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["ipConfigurations"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:BastionHost" }, { type: "azure-nextgen:network/v20190401:BastionHost" }, { type: "azure-nextgen:network/v20190601:BastionHost" }, { type: "azure-nextgen:network/v20190701:BastionHost" }, { type: "azure-nextgen:network/v20190801:BastionHost" }, { type: "azure-nextgen:network/v20190901:BastionHost" }, { type: "azure-nextgen:network/v20191101:BastionHost" }, { type: "azure-nextgen:network/v20191201:BastionHost" }, { type: "azure-nextgen:network/v20200301:BastionHost" }, { type: "azure-nextgen:network/v20200501:BastionHost" }, { type: "azure-nextgen:network/v20200601:BastionHost" }, { type: "azure-nextgen:network/v20200701:BastionHost" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(BastionHost.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a BastionHost resource.
 */
export interface BastionHostArgs {
    /**
     * The name of the Bastion Host.
     */
    readonly bastionHostName: pulumi.Input<string>;
    /**
     * FQDN for the endpoint on which bastion host is accessible.
     */
    readonly dnsName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * IP configuration of the Bastion Host resource.
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20200401.BastionHostIPConfiguration>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

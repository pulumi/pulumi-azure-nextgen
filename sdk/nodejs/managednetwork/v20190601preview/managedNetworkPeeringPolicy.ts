// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The Managed Network Peering Policy resource
 */
export class ManagedNetworkPeeringPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ManagedNetworkPeeringPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedNetworkPeeringPolicy {
        return new ManagedNetworkPeeringPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:managednetwork/v20190601preview:ManagedNetworkPeeringPolicy';

    /**
     * Returns true if the given object is an instance of ManagedNetworkPeeringPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedNetworkPeeringPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedNetworkPeeringPolicy.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the properties of a Managed Network Policy
     */
    public readonly properties!: pulumi.Output<outputs.managednetwork.v20190601preview.ManagedNetworkPeeringPolicyPropertiesResponse>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedNetworkPeeringPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedNetworkPeeringPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.managedNetworkName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'managedNetworkName'");
            }
            if ((!args || args.managedNetworkPeeringPolicyName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'managedNetworkPeeringPolicyName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["managedNetworkName"] = args ? args.managedNetworkName : undefined;
            inputs["managedNetworkPeeringPolicyName"] = args ? args.managedNetworkPeeringPolicyName : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ManagedNetworkPeeringPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedNetworkPeeringPolicy resource.
 */
export interface ManagedNetworkPeeringPolicyArgs {
    /**
     * The geo-location where the resource lives
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Managed Network.
     */
    readonly managedNetworkName: pulumi.Input<string>;
    /**
     * The name of the Managed Network Peering Policy.
     */
    readonly managedNetworkPeeringPolicyName: pulumi.Input<string>;
    /**
     * Gets or sets the properties of a Managed Network Policy
     */
    readonly properties?: pulumi.Input<inputs.managednetwork.v20190601preview.ManagedNetworkPeeringPolicyProperties>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Rule Collection Group resource.
 */
export class FirewallPolicyRuleCollectionGroup extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicyRuleCollectionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallPolicyRuleCollectionGroup {
        return new FirewallPolicyRuleCollectionGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20200501:FirewallPolicyRuleCollectionGroup';

    /**
     * Returns true if the given object is an instance of FirewallPolicyRuleCollectionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallPolicyRuleCollectionGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallPolicyRuleCollectionGroup.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the firewall policy rule collection group resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Group of Firewall Policy rule collections.
     */
    public readonly ruleCollections!: pulumi.Output<outputs.network.v20200501.FirewallPolicyFilterRuleCollectionResponse | outputs.network.v20200501.FirewallPolicyNatRuleCollectionResponse[] | undefined>;
    /**
     * Rule Group type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FirewallPolicyRuleCollectionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyRuleCollectionGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.firewallPolicyName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'firewallPolicyName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.ruleCollectionGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'ruleCollectionGroupName'");
            }
            inputs["firewallPolicyName"] = args ? args.firewallPolicyName : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["ruleCollectionGroupName"] = args ? args.ruleCollectionGroupName : undefined;
            inputs["ruleCollections"] = args ? args.ruleCollections : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["etag"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["priority"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["ruleCollections"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:FirewallPolicyRuleCollectionGroup" }, { type: "azure-nextgen:network/v20200601:FirewallPolicyRuleCollectionGroup" }, { type: "azure-nextgen:network/v20200701:FirewallPolicyRuleCollectionGroup" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(FirewallPolicyRuleCollectionGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallPolicyRuleCollectionGroup resource.
 */
export interface FirewallPolicyRuleCollectionGroupArgs {
    /**
     * The name of the Firewall Policy.
     */
    readonly firewallPolicyName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the FirewallPolicyRuleCollectionGroup.
     */
    readonly ruleCollectionGroupName: pulumi.Input<string>;
    /**
     * Group of Firewall Policy rule collections.
     */
    readonly ruleCollections?: pulumi.Input<pulumi.Input<inputs.network.v20200501.FirewallPolicyFilterRuleCollection | inputs.network.v20200501.FirewallPolicyNatRuleCollection>[]>;
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Description of NetworkRuleSet resource.
 */
export class NamespaceNetworkRuleSet extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceNetworkRuleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceNetworkRuleSet {
        return new NamespaceNetworkRuleSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:servicebus/v20170401:NamespaceNetworkRuleSet';

    /**
     * Returns true if the given object is an instance of NamespaceNetworkRuleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceNetworkRuleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceNetworkRuleSet.__pulumiType;
    }

    /**
     * Default Action for Network Rule Set
     */
    public readonly defaultAction!: pulumi.Output<string | undefined>;
    /**
     * List of IpRules
     */
    public readonly ipRules!: pulumi.Output<outputs.servicebus.v20170401.NWRuleSetIpRulesResponse[] | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List VirtualNetwork Rules
     */
    public readonly virtualNetworkRules!: pulumi.Output<outputs.servicebus.v20170401.NWRuleSetVirtualNetworkRulesResponse[] | undefined>;

    /**
     * Create a NamespaceNetworkRuleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceNetworkRuleSetArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.namespaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["defaultAction"] = args ? args.defaultAction : undefined;
            inputs["ipRules"] = args ? args.ipRules : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["virtualNetworkRules"] = args ? args.virtualNetworkRules : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["defaultAction"] = undefined /*out*/;
            inputs["ipRules"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualNetworkRules"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:servicebus/latest:NamespaceNetworkRuleSet" }, { type: "azure-nextgen:servicebus/v20180101preview:NamespaceNetworkRuleSet" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(NamespaceNetworkRuleSet.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceNetworkRuleSet resource.
 */
export interface NamespaceNetworkRuleSetArgs {
    /**
     * Default Action for Network Rule Set
     */
    readonly defaultAction?: pulumi.Input<string | enums.servicebus.v20170401.DefaultAction>;
    /**
     * List of IpRules
     */
    readonly ipRules?: pulumi.Input<pulumi.Input<inputs.servicebus.v20170401.NWRuleSetIpRules>[]>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * List VirtualNetwork Rules
     */
    readonly virtualNetworkRules?: pulumi.Input<pulumi.Input<inputs.servicebus.v20170401.NWRuleSetVirtualNetworkRules>[]>;
}

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Azure Firewall resource
 */
export declare class AzureFirewall extends pulumi.CustomResource {
    /**
     * Get an existing AzureFirewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AzureFirewall;
    /**
     * Returns true if the given object is an instance of AzureFirewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AzureFirewall;
    /**
     * Collection of application rule collections used by Azure Firewall.
     */
    readonly applicationRuleCollections: pulumi.Output<outputs.network.v20190201.AzureFirewallApplicationRuleCollectionResponse[] | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * IP configuration of the Azure Firewall resource.
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.v20190201.AzureFirewallIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Collection of NAT rule collections used by Azure Firewall.
     */
    readonly natRuleCollections: pulumi.Output<outputs.network.v20190201.AzureFirewallNatRuleCollectionResponse[] | undefined>;
    /**
     * Collection of network rule collections used by Azure Firewall.
     */
    readonly networkRuleCollections: pulumi.Output<outputs.network.v20190201.AzureFirewallNetworkRuleCollectionResponse[] | undefined>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The operation mode for Threat Intelligence.
     */
    readonly threatIntelMode: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a AzureFirewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureFirewallArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AzureFirewall resource.
 */
export interface AzureFirewallArgs {
    /**
     * Collection of application rule collections used by Azure Firewall.
     */
    readonly applicationRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.v20190201.AzureFirewallApplicationRuleCollection>[]>;
    /**
     * The name of the Azure Firewall.
     */
    readonly azureFirewallName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * IP configuration of the Azure Firewall resource.
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190201.AzureFirewallIPConfiguration>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Collection of NAT rule collections used by Azure Firewall.
     */
    readonly natRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.v20190201.AzureFirewallNatRuleCollection>[]>;
    /**
     * Collection of network rule collections used by Azure Firewall.
     */
    readonly networkRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.v20190201.AzureFirewallNetworkRuleCollection>[]>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The operation mode for Threat Intelligence.
     */
    readonly threatIntelMode?: pulumi.Input<string>;
}

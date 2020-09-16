import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * LoadBalancer resource
 */
export declare class LoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadBalancer;
    /**
     * Returns true if the given object is an instance of LoadBalancer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LoadBalancer;
    /**
     * Gets or sets Pools of backend IP addresses
     */
    readonly backendAddressPools: pulumi.Output<outputs.network.v20160330.BackendAddressPoolResponse[] | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets frontend IP addresses of the load balancer
     */
    readonly frontendIPConfigurations: pulumi.Output<outputs.network.v20160330.FrontendIPConfigurationResponse[] | undefined>;
    /**
     * Gets or sets inbound NAT pools
     */
    readonly inboundNatPools: pulumi.Output<outputs.network.v20160330.InboundNatPoolResponse[] | undefined>;
    /**
     * Gets or sets list of inbound rules
     */
    readonly inboundNatRules: pulumi.Output<outputs.network.v20160330.InboundNatRuleResponse[] | undefined>;
    /**
     * Gets or sets load balancing rules
     */
    readonly loadBalancingRules: pulumi.Output<outputs.network.v20160330.LoadBalancingRuleResponse[] | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets outbound NAT rules
     */
    readonly outboundNatRules: pulumi.Output<outputs.network.v20160330.OutboundNatRuleResponse[] | undefined>;
    /**
     * Gets or sets list of Load balancer probes
     */
    readonly probes: pulumi.Output<outputs.network.v20160330.ProbeResponse[] | undefined>;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets resource GUID property of the Load balancer resource
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a LoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LoadBalancer resource.
 */
export interface LoadBalancerArgs {
    /**
     * Gets or sets Pools of backend IP addresses
     */
    readonly backendAddressPools?: pulumi.Input<pulumi.Input<inputs.network.v20160330.BackendAddressPool>[]>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Gets or sets frontend IP addresses of the load balancer
     */
    readonly frontendIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20160330.FrontendIPConfiguration>[]>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Gets or sets inbound NAT pools
     */
    readonly inboundNatPools?: pulumi.Input<pulumi.Input<inputs.network.v20160330.InboundNatPool>[]>;
    /**
     * Gets or sets list of inbound rules
     */
    readonly inboundNatRules?: pulumi.Input<pulumi.Input<inputs.network.v20160330.InboundNatRule>[]>;
    /**
     * The name of the loadBalancer.
     */
    readonly loadBalancerName: pulumi.Input<string>;
    /**
     * Gets or sets load balancing rules
     */
    readonly loadBalancingRules?: pulumi.Input<pulumi.Input<inputs.network.v20160330.LoadBalancingRule>[]>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets outbound NAT rules
     */
    readonly outboundNatRules?: pulumi.Input<pulumi.Input<inputs.network.v20160330.OutboundNatRule>[]>;
    /**
     * Gets or sets list of Load balancer probes
     */
    readonly probes?: pulumi.Input<pulumi.Input<inputs.network.v20160330.Probe>[]>;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets resource GUID property of the Load balancer resource
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}

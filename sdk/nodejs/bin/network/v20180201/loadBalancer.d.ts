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
     * Collection of backend address pools used by a load balancer
     */
    readonly backendAddressPools: pulumi.Output<outputs.network.v20180201.BackendAddressPoolResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Object representing the frontend IPs to be used for the load balancer
     */
    readonly frontendIPConfigurations: pulumi.Output<outputs.network.v20180201.FrontendIPConfigurationResponse[] | undefined>;
    /**
     * Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    readonly inboundNatPools: pulumi.Output<outputs.network.v20180201.InboundNatPoolResponse[] | undefined>;
    /**
     * Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    readonly inboundNatRules: pulumi.Output<outputs.network.v20180201.InboundNatRuleResponse[] | undefined>;
    /**
     * Object collection representing the load balancing rules Gets the provisioning
     */
    readonly loadBalancingRules: pulumi.Output<outputs.network.v20180201.LoadBalancingRuleResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The outbound NAT rules.
     */
    readonly outboundNatRules: pulumi.Output<outputs.network.v20180201.OutboundNatRuleResponse[] | undefined>;
    /**
     * Collection of probe objects used in the load balancer
     */
    readonly probes: pulumi.Output<outputs.network.v20180201.ProbeResponse[] | undefined>;
    /**
     * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The resource GUID property of the load balancer resource.
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * The load balancer SKU.
     */
    readonly sku: pulumi.Output<outputs.network.v20180201.LoadBalancerSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
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
     * Collection of backend address pools used by a load balancer
     */
    readonly backendAddressPools?: pulumi.Input<pulumi.Input<inputs.network.v20180201.BackendAddressPool>[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Object representing the frontend IPs to be used for the load balancer
     */
    readonly frontendIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20180201.FrontendIPConfiguration>[]>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    readonly inboundNatPools?: pulumi.Input<pulumi.Input<inputs.network.v20180201.InboundNatPool>[]>;
    /**
     * Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    readonly inboundNatRules?: pulumi.Input<pulumi.Input<inputs.network.v20180201.InboundNatRule>[]>;
    /**
     * The name of the load balancer.
     */
    readonly loadBalancerName: pulumi.Input<string>;
    /**
     * Object collection representing the load balancing rules Gets the provisioning
     */
    readonly loadBalancingRules?: pulumi.Input<pulumi.Input<inputs.network.v20180201.LoadBalancingRule>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The outbound NAT rules.
     */
    readonly outboundNatRules?: pulumi.Input<pulumi.Input<inputs.network.v20180201.OutboundNatRule>[]>;
    /**
     * Collection of probe objects used in the load balancer
     */
    readonly probes?: pulumi.Input<pulumi.Input<inputs.network.v20180201.Probe>[]>;
    /**
     * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the load balancer resource.
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * The load balancer SKU.
     */
    readonly sku?: pulumi.Input<inputs.network.v20180201.LoadBalancerSku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Inbound NAT rule of the load balancer.
 */
export declare class InboundNatRule extends pulumi.CustomResource {
    /**
     * Get an existing InboundNatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InboundNatRule;
    /**
     * Returns true if the given object is an instance of InboundNatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InboundNatRule;
    /**
     * A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
     */
    readonly backendIPConfiguration: pulumi.Output<outputs.network.v20191201.NetworkInterfaceIPConfigurationResponse>;
    /**
     * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
     */
    readonly backendPort: pulumi.Output<number | undefined>;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    readonly enableFloatingIP: pulumi.Output<boolean | undefined>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    readonly enableTcpReset: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * A reference to frontend IP addresses.
     */
    readonly frontendIPConfiguration: pulumi.Output<outputs.network.v20191201.SubResourceResponse | undefined>;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
     */
    readonly frontendPort: pulumi.Output<number | undefined>;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    readonly idleTimeoutInMinutes: pulumi.Output<number | undefined>;
    /**
     * The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The reference to the transport protocol used by the load balancing rule.
     */
    readonly protocol: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the inbound NAT rule resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a InboundNatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InboundNatRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a InboundNatRule resource.
 */
export interface InboundNatRuleArgs {
    /**
     * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
     */
    readonly backendPort?: pulumi.Input<number>;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    readonly enableFloatingIP?: pulumi.Input<boolean>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    readonly enableTcpReset?: pulumi.Input<boolean>;
    /**
     * A reference to frontend IP addresses.
     */
    readonly frontendIPConfiguration?: pulumi.Input<inputs.network.v20191201.SubResource>;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
     */
    readonly frontendPort?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    readonly idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The name of the inbound nat rule.
     */
    readonly inboundNatRuleName: pulumi.Input<string>;
    /**
     * The name of the load balancer.
     */
    readonly loadBalancerName: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The reference to the transport protocol used by the load balancing rule.
     */
    readonly protocol?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}

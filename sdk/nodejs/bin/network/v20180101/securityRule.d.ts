import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Network security rule.
 */
export declare class SecurityRule extends pulumi.CustomResource {
    /**
     * Get an existing SecurityRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityRule;
    /**
     * Returns true if the given object is an instance of SecurityRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SecurityRule;
    /**
     * The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
     */
    readonly access: pulumi.Output<string>;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    readonly destinationAddressPrefix: pulumi.Output<string | undefined>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    readonly destinationAddressPrefixes: pulumi.Output<string[] | undefined>;
    /**
     * The application security group specified as destination.
     */
    readonly destinationApplicationSecurityGroups: pulumi.Output<outputs.network.v20180101.ApplicationSecurityGroupResponse[] | undefined>;
    /**
     * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly destinationPortRange: pulumi.Output<string | undefined>;
    /**
     * The destination port ranges.
     */
    readonly destinationPortRanges: pulumi.Output<string[] | undefined>;
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
     */
    readonly direction: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    readonly priority: pulumi.Output<number | undefined>;
    /**
     * Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
     */
    readonly sourceAddressPrefix: pulumi.Output<string | undefined>;
    /**
     * The CIDR or source IP ranges.
     */
    readonly sourceAddressPrefixes: pulumi.Output<string[] | undefined>;
    /**
     * The application security group specified as source.
     */
    readonly sourceApplicationSecurityGroups: pulumi.Output<outputs.network.v20180101.ApplicationSecurityGroupResponse[] | undefined>;
    /**
     * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly sourcePortRange: pulumi.Output<string | undefined>;
    /**
     * The source port ranges.
     */
    readonly sourcePortRanges: pulumi.Output<string[] | undefined>;
    /**
     * Create a SecurityRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SecurityRule resource.
 */
export interface SecurityRuleArgs {
    /**
     * The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
     */
    readonly access: pulumi.Input<string>;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    readonly destinationAddressPrefix?: pulumi.Input<string>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    readonly destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The application security group specified as destination.
     */
    readonly destinationApplicationSecurityGroups?: pulumi.Input<pulumi.Input<inputs.network.v20180101.ApplicationSecurityGroup>[]>;
    /**
     * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly destinationPortRange?: pulumi.Input<string>;
    /**
     * The destination port ranges.
     */
    readonly destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
     */
    readonly direction: pulumi.Input<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the network security group.
     */
    readonly networkSecurityGroupName: pulumi.Input<string>;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
     */
    readonly protocol: pulumi.Input<string>;
    /**
     * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the security rule.
     */
    readonly securityRuleName: pulumi.Input<string>;
    /**
     * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
     */
    readonly sourceAddressPrefix?: pulumi.Input<string>;
    /**
     * The CIDR or source IP ranges.
     */
    readonly sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The application security group specified as source.
     */
    readonly sourceApplicationSecurityGroups?: pulumi.Input<pulumi.Input<inputs.network.v20180101.ApplicationSecurityGroup>[]>;
    /**
     * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly sourcePortRange?: pulumi.Input<string>;
    /**
     * The source port ranges.
     */
    readonly sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
}

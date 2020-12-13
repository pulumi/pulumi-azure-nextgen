// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Network security rule
 */
export class SecurityRule extends pulumi.CustomResource {
    /**
     * Get an existing SecurityRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityRule {
        return new SecurityRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20160601:SecurityRule';

    /**
     * Returns true if the given object is an instance of SecurityRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityRule.__pulumiType;
    }

    /**
     * Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
     */
    public readonly access!: pulumi.Output<string>;
    /**
     * Gets or sets a description for this rule. Restricted to 140 chars.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets destination address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. 
     */
    public readonly destinationAddressPrefix!: pulumi.Output<string>;
    /**
     * Gets or sets Destination Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    public readonly destinationPortRange!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    public readonly direction!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    public readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets source address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. 
     */
    public readonly sourceAddressPrefix!: pulumi.Output<string>;
    /**
     * Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    public readonly sourcePortRange!: pulumi.Output<string | undefined>;

    /**
     * Create a SecurityRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.access === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'access'");
            }
            if ((!args || args.destinationAddressPrefix === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'destinationAddressPrefix'");
            }
            if ((!args || args.direction === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'direction'");
            }
            if ((!args || args.networkSecurityGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'networkSecurityGroupName'");
            }
            if ((!args || args.protocol === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.securityRuleName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'securityRuleName'");
            }
            if ((!args || args.sourceAddressPrefix === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sourceAddressPrefix'");
            }
            inputs["access"] = args ? args.access : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["destinationAddressPrefix"] = args ? args.destinationAddressPrefix : undefined;
            inputs["destinationPortRange"] = args ? args.destinationPortRange : undefined;
            inputs["direction"] = args ? args.direction : undefined;
            inputs["etag"] = args ? args.etag : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkSecurityGroupName"] = args ? args.networkSecurityGroupName : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["protocol"] = args ? args.protocol : undefined;
            inputs["provisioningState"] = args ? args.provisioningState : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["securityRuleName"] = args ? args.securityRuleName : undefined;
            inputs["sourceAddressPrefix"] = args ? args.sourceAddressPrefix : undefined;
            inputs["sourcePortRange"] = args ? args.sourcePortRange : undefined;
        } else {
            inputs["access"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["destinationAddressPrefix"] = undefined /*out*/;
            inputs["destinationPortRange"] = undefined /*out*/;
            inputs["direction"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["priority"] = undefined /*out*/;
            inputs["protocol"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["sourceAddressPrefix"] = undefined /*out*/;
            inputs["sourcePortRange"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:SecurityRule" }, { type: "azure-nextgen:network/v20150501preview:SecurityRule" }, { type: "azure-nextgen:network/v20150615:SecurityRule" }, { type: "azure-nextgen:network/v20160330:SecurityRule" }, { type: "azure-nextgen:network/v20160901:SecurityRule" }, { type: "azure-nextgen:network/v20161201:SecurityRule" }, { type: "azure-nextgen:network/v20170301:SecurityRule" }, { type: "azure-nextgen:network/v20170601:SecurityRule" }, { type: "azure-nextgen:network/v20170801:SecurityRule" }, { type: "azure-nextgen:network/v20170901:SecurityRule" }, { type: "azure-nextgen:network/v20171001:SecurityRule" }, { type: "azure-nextgen:network/v20171101:SecurityRule" }, { type: "azure-nextgen:network/v20180101:SecurityRule" }, { type: "azure-nextgen:network/v20180201:SecurityRule" }, { type: "azure-nextgen:network/v20180401:SecurityRule" }, { type: "azure-nextgen:network/v20180601:SecurityRule" }, { type: "azure-nextgen:network/v20180701:SecurityRule" }, { type: "azure-nextgen:network/v20180801:SecurityRule" }, { type: "azure-nextgen:network/v20181001:SecurityRule" }, { type: "azure-nextgen:network/v20181101:SecurityRule" }, { type: "azure-nextgen:network/v20181201:SecurityRule" }, { type: "azure-nextgen:network/v20190201:SecurityRule" }, { type: "azure-nextgen:network/v20190401:SecurityRule" }, { type: "azure-nextgen:network/v20190601:SecurityRule" }, { type: "azure-nextgen:network/v20190701:SecurityRule" }, { type: "azure-nextgen:network/v20190801:SecurityRule" }, { type: "azure-nextgen:network/v20190901:SecurityRule" }, { type: "azure-nextgen:network/v20191101:SecurityRule" }, { type: "azure-nextgen:network/v20191201:SecurityRule" }, { type: "azure-nextgen:network/v20200301:SecurityRule" }, { type: "azure-nextgen:network/v20200401:SecurityRule" }, { type: "azure-nextgen:network/v20200501:SecurityRule" }, { type: "azure-nextgen:network/v20200601:SecurityRule" }, { type: "azure-nextgen:network/v20200701:SecurityRule" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(SecurityRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityRule resource.
 */
export interface SecurityRuleArgs {
    /**
     * Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
     */
    readonly access: pulumi.Input<string | enums.network.v20160601.SecurityRuleAccess>;
    /**
     * Gets or sets a description for this rule. Restricted to 140 chars.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gets or sets destination address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. 
     */
    readonly destinationAddressPrefix: pulumi.Input<string>;
    /**
     * Gets or sets Destination Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly destinationPortRange?: pulumi.Input<string>;
    /**
     * Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    readonly direction: pulumi.Input<string | enums.network.v20160601.SecurityRuleDirection>;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the network security group.
     */
    readonly networkSecurityGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
     */
    readonly protocol: pulumi.Input<string | enums.network.v20160601.SecurityRuleProtocol>;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
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
     * Gets or sets source address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. 
     */
    readonly sourceAddressPrefix: pulumi.Input<string>;
    /**
     * Gets or sets Source Port or Range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly sourcePortRange?: pulumi.Input<string>;
}

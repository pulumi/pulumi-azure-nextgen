// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getInboundNatRule(args: GetInboundNatRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetInboundNatRuleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20170901:getInboundNatRule", {
        "expand": args.expand,
        "inboundNatRuleName": args.inboundNatRuleName,
        "loadBalancerName": args.loadBalancerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInboundNatRuleArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the inbound nat rule.
     */
    readonly inboundNatRuleName: string;
    /**
     * The name of the load balancer.
     */
    readonly loadBalancerName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Inbound NAT rule of the load balancer.
 */
export interface GetInboundNatRuleResult {
    /**
     * A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
     */
    readonly backendIPConfiguration: outputs.network.v20170901.NetworkInterfaceIPConfigurationResponse;
    /**
     * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
     */
    readonly backendPort?: number;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    readonly enableFloatingIP?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * A reference to frontend IP addresses.
     */
    readonly frontendIPConfiguration?: outputs.network.v20170901.SubResourceResponse;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
     */
    readonly frontendPort?: number;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    readonly idleTimeoutInMinutes?: number;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All.'
     */
    readonly protocol?: string;
    /**
     * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
}

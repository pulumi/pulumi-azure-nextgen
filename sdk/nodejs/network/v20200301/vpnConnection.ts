// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * VpnConnection Resource.
 */
export class VpnConnection extends pulumi.CustomResource {
    /**
     * Get an existing VpnConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnConnection {
        return new VpnConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20200301:VpnConnection';

    /**
     * Returns true if the given object is an instance of VpnConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnConnection.__pulumiType;
    }

    /**
     * Expected bandwidth in MBPS.
     */
    public readonly connectionBandwidth!: pulumi.Output<number | undefined>;
    /**
     * The connection status.
     */
    public /*out*/ readonly connectionStatus!: pulumi.Output<string>;
    /**
     * The dead peer detection timeout for a vpn connection in seconds.
     */
    public readonly dpdTimeoutSeconds!: pulumi.Output<number | undefined>;
    /**
     * Egress bytes transferred.
     */
    public /*out*/ readonly egressBytesTransferred!: pulumi.Output<number>;
    /**
     * EnableBgp flag.
     */
    public readonly enableBgp!: pulumi.Output<boolean | undefined>;
    /**
     * Enable internet security.
     */
    public readonly enableInternetSecurity!: pulumi.Output<boolean | undefined>;
    /**
     * EnableBgp flag.
     */
    public readonly enableRateLimiting!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Ingress bytes transferred.
     */
    public /*out*/ readonly ingressBytesTransferred!: pulumi.Output<number>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    public readonly ipsecPolicies!: pulumi.Output<outputs.network.v20200301.IpsecPolicyResponse[] | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the VPN connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Id of the connected vpn site.
     */
    public readonly remoteVpnSite!: pulumi.Output<outputs.network.v20200301.SubResourceResponse | undefined>;
    /**
     * Routing weight for vpn connection.
     */
    public readonly routingWeight!: pulumi.Output<number | undefined>;
    /**
     * SharedKey for the vpn connection.
     */
    public readonly sharedKey!: pulumi.Output<string | undefined>;
    /**
     * Use local azure ip to initiate connection.
     */
    public readonly useLocalAzureIpAddress!: pulumi.Output<boolean | undefined>;
    /**
     * Enable policy-based traffic selectors.
     */
    public readonly usePolicyBasedTrafficSelectors!: pulumi.Output<boolean | undefined>;
    /**
     * Connection protocol used for this connection.
     */
    public readonly vpnConnectionProtocolType!: pulumi.Output<string | undefined>;
    /**
     * List of all vpn site link connections to the gateway.
     */
    public readonly vpnLinkConnections!: pulumi.Output<outputs.network.v20200301.VpnSiteLinkConnectionResponse[] | undefined>;

    /**
     * Create a VpnConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.connectionName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'connectionName'");
            }
            if ((!args || args.gatewayName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'gatewayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["connectionBandwidth"] = args ? args.connectionBandwidth : undefined;
            inputs["connectionName"] = args ? args.connectionName : undefined;
            inputs["dpdTimeoutSeconds"] = args ? args.dpdTimeoutSeconds : undefined;
            inputs["enableBgp"] = args ? args.enableBgp : undefined;
            inputs["enableInternetSecurity"] = args ? args.enableInternetSecurity : undefined;
            inputs["enableRateLimiting"] = args ? args.enableRateLimiting : undefined;
            inputs["gatewayName"] = args ? args.gatewayName : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["ipsecPolicies"] = args ? args.ipsecPolicies : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["remoteVpnSite"] = args ? args.remoteVpnSite : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["routingWeight"] = args ? args.routingWeight : undefined;
            inputs["sharedKey"] = args ? args.sharedKey : undefined;
            inputs["useLocalAzureIpAddress"] = args ? args.useLocalAzureIpAddress : undefined;
            inputs["usePolicyBasedTrafficSelectors"] = args ? args.usePolicyBasedTrafficSelectors : undefined;
            inputs["vpnConnectionProtocolType"] = args ? args.vpnConnectionProtocolType : undefined;
            inputs["vpnLinkConnections"] = args ? args.vpnLinkConnections : undefined;
            inputs["connectionStatus"] = undefined /*out*/;
            inputs["egressBytesTransferred"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["ingressBytesTransferred"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
        } else {
            inputs["connectionBandwidth"] = undefined /*out*/;
            inputs["connectionStatus"] = undefined /*out*/;
            inputs["dpdTimeoutSeconds"] = undefined /*out*/;
            inputs["egressBytesTransferred"] = undefined /*out*/;
            inputs["enableBgp"] = undefined /*out*/;
            inputs["enableInternetSecurity"] = undefined /*out*/;
            inputs["enableRateLimiting"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["ingressBytesTransferred"] = undefined /*out*/;
            inputs["ipsecPolicies"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["remoteVpnSite"] = undefined /*out*/;
            inputs["routingWeight"] = undefined /*out*/;
            inputs["sharedKey"] = undefined /*out*/;
            inputs["useLocalAzureIpAddress"] = undefined /*out*/;
            inputs["usePolicyBasedTrafficSelectors"] = undefined /*out*/;
            inputs["vpnConnectionProtocolType"] = undefined /*out*/;
            inputs["vpnLinkConnections"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:VpnConnection" }, { type: "azure-nextgen:network/v20180401:VpnConnection" }, { type: "azure-nextgen:network/v20180601:VpnConnection" }, { type: "azure-nextgen:network/v20180701:VpnConnection" }, { type: "azure-nextgen:network/v20180801:VpnConnection" }, { type: "azure-nextgen:network/v20181001:VpnConnection" }, { type: "azure-nextgen:network/v20181101:VpnConnection" }, { type: "azure-nextgen:network/v20181201:VpnConnection" }, { type: "azure-nextgen:network/v20190201:VpnConnection" }, { type: "azure-nextgen:network/v20190401:VpnConnection" }, { type: "azure-nextgen:network/v20190601:VpnConnection" }, { type: "azure-nextgen:network/v20190701:VpnConnection" }, { type: "azure-nextgen:network/v20190801:VpnConnection" }, { type: "azure-nextgen:network/v20190901:VpnConnection" }, { type: "azure-nextgen:network/v20191101:VpnConnection" }, { type: "azure-nextgen:network/v20191201:VpnConnection" }, { type: "azure-nextgen:network/v20200401:VpnConnection" }, { type: "azure-nextgen:network/v20200501:VpnConnection" }, { type: "azure-nextgen:network/v20200601:VpnConnection" }, { type: "azure-nextgen:network/v20200701:VpnConnection" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(VpnConnection.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a VpnConnection resource.
 */
export interface VpnConnectionArgs {
    /**
     * Expected bandwidth in MBPS.
     */
    readonly connectionBandwidth?: pulumi.Input<number>;
    /**
     * The name of the connection.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * The dead peer detection timeout for a vpn connection in seconds.
     */
    readonly dpdTimeoutSeconds?: pulumi.Input<number>;
    /**
     * EnableBgp flag.
     */
    readonly enableBgp?: pulumi.Input<boolean>;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * EnableBgp flag.
     */
    readonly enableRateLimiting?: pulumi.Input<boolean>;
    /**
     * The name of the gateway.
     */
    readonly gatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    readonly ipsecPolicies?: pulumi.Input<pulumi.Input<inputs.network.v20200301.IpsecPolicy>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Id of the connected vpn site.
     */
    readonly remoteVpnSite?: pulumi.Input<inputs.network.v20200301.SubResource>;
    /**
     * The resource group name of the VpnGateway.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Routing weight for vpn connection.
     */
    readonly routingWeight?: pulumi.Input<number>;
    /**
     * SharedKey for the vpn connection.
     */
    readonly sharedKey?: pulumi.Input<string>;
    /**
     * Use local azure ip to initiate connection.
     */
    readonly useLocalAzureIpAddress?: pulumi.Input<boolean>;
    /**
     * Enable policy-based traffic selectors.
     */
    readonly usePolicyBasedTrafficSelectors?: pulumi.Input<boolean>;
    /**
     * Connection protocol used for this connection.
     */
    readonly vpnConnectionProtocolType?: pulumi.Input<string | enums.network.v20200301.VirtualNetworkGatewayConnectionProtocol>;
    /**
     * List of all vpn site link connections to the gateway.
     */
    readonly vpnLinkConnections?: pulumi.Input<pulumi.Input<inputs.network.v20200301.VpnSiteLinkConnection>[]>;
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601

import (
	"fmt"

	"github.com/blang/semver"
	"github.com/pulumi/pulumi-azure-nextgen/sdk/go/azure"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type module struct {
	version semver.Version
}

func (m *module) Version() semver.Version {
	return m.version
}

func (m *module) Construct(ctx *pulumi.Context, name, typ, urn string) (r pulumi.Resource, err error) {
	switch typ {
	case "azure-nextgen:network/v20190601:ApplicationGateway":
		r, err = NewApplicationGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ApplicationSecurityGroup":
		r, err = NewApplicationSecurityGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:AzureFirewall":
		r, err = NewAzureFirewall(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:BastionHost":
		r, err = NewBastionHost(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ConnectionMonitor":
		r, err = NewConnectionMonitor(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:DdosCustomPolicy":
		r, err = NewDdosCustomPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:DdosProtectionPlan":
		r, err = NewDdosProtectionPlan(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ExpressRouteCircuit":
		r, err = NewExpressRouteCircuit(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ExpressRouteCircuitAuthorization":
		r, err = NewExpressRouteCircuitAuthorization(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ExpressRouteCircuitConnection":
		r, err = NewExpressRouteCircuitConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ExpressRouteCircuitPeering":
		r, err = NewExpressRouteCircuitPeering(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ExpressRouteConnection":
		r, err = NewExpressRouteConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ExpressRouteCrossConnectionPeering":
		r, err = NewExpressRouteCrossConnectionPeering(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ExpressRouteGateway":
		r, err = NewExpressRouteGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ExpressRoutePort":
		r, err = NewExpressRoutePort(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:FirewallPolicy":
		r, err = NewFirewallPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:FirewallPolicyRuleGroup":
		r, err = NewFirewallPolicyRuleGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:InboundNatRule":
		r, err = NewInboundNatRule(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:LoadBalancer":
		r, err = NewLoadBalancer(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:LocalNetworkGateway":
		r, err = NewLocalNetworkGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:NatGateway":
		r, err = NewNatGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:NetworkInterface":
		r, err = NewNetworkInterface(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:NetworkInterfaceTapConfiguration":
		r, err = NewNetworkInterfaceTapConfiguration(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:NetworkProfile":
		r, err = NewNetworkProfile(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:NetworkSecurityGroup":
		r, err = NewNetworkSecurityGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:NetworkWatcher":
		r, err = NewNetworkWatcher(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:P2sVpnGateway":
		r, err = NewP2sVpnGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:P2sVpnServerConfiguration":
		r, err = NewP2sVpnServerConfiguration(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:PacketCapture":
		r, err = NewPacketCapture(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:PrivateEndpoint":
		r, err = NewPrivateEndpoint(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:PrivateLinkService":
		r, err = NewPrivateLinkService(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:PublicIPAddress":
		r, err = NewPublicIPAddress(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:PublicIPPrefix":
		r, err = NewPublicIPPrefix(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:Route":
		r, err = NewRoute(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:RouteFilter":
		r, err = NewRouteFilter(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:RouteFilterRule":
		r, err = NewRouteFilterRule(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:RouteTable":
		r, err = NewRouteTable(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:SecurityRule":
		r, err = NewSecurityRule(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ServiceEndpointPolicy":
		r, err = NewServiceEndpointPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:ServiceEndpointPolicyDefinition":
		r, err = NewServiceEndpointPolicyDefinition(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:Subnet":
		r, err = NewSubnet(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VirtualHub":
		r, err = NewVirtualHub(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VirtualNetwork":
		r, err = NewVirtualNetwork(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VirtualNetworkGateway":
		r, err = NewVirtualNetworkGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VirtualNetworkGatewayConnection":
		r, err = NewVirtualNetworkGatewayConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VirtualNetworkPeering":
		r, err = NewVirtualNetworkPeering(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VirtualNetworkTap":
		r, err = NewVirtualNetworkTap(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VirtualWan":
		r, err = NewVirtualWan(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VpnConnection":
		r, err = NewVpnConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VpnGateway":
		r, err = NewVpnGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:VpnSite":
		r, err = NewVpnSite(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20190601:WebApplicationFirewallPolicy":
		r, err = NewWebApplicationFirewallPolicy(ctx, name, nil, pulumi.URN_(urn))
	default:
		return nil, fmt.Errorf("unknown resource type: %s", typ)
	}

	return
}

func init() {
	version, err := azure.PkgVersion()
	if err != nil {
		fmt.Println("failed to determine package version. defaulting to v1: %v", err)
	}
	pulumi.RegisterResourceModule(
		"azure-nextgen",
		"network/v20190601",
		&module{version},
	)
}

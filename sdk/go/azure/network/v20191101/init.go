// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101

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
	case "azure-nextgen:network/v20191101:ApplicationGateway":
		r, err = NewApplicationGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ApplicationSecurityGroup":
		r, err = NewApplicationSecurityGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:AzureFirewall":
		r, err = NewAzureFirewall(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:BastionHost":
		r, err = NewBastionHost(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ConnectionMonitor":
		r, err = NewConnectionMonitor(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:DdosCustomPolicy":
		r, err = NewDdosCustomPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:DdosProtectionPlan":
		r, err = NewDdosProtectionPlan(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:Experiment":
		r, err = NewExperiment(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ExpressRouteCircuit":
		r, err = NewExpressRouteCircuit(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ExpressRouteCircuitAuthorization":
		r, err = NewExpressRouteCircuitAuthorization(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ExpressRouteCircuitConnection":
		r, err = NewExpressRouteCircuitConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ExpressRouteCircuitPeering":
		r, err = NewExpressRouteCircuitPeering(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ExpressRouteConnection":
		r, err = NewExpressRouteConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ExpressRouteCrossConnectionPeering":
		r, err = NewExpressRouteCrossConnectionPeering(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ExpressRouteGateway":
		r, err = NewExpressRouteGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ExpressRoutePort":
		r, err = NewExpressRoutePort(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:FirewallPolicy":
		r, err = NewFirewallPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:FirewallPolicyRuleGroup":
		r, err = NewFirewallPolicyRuleGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:FlowLog":
		r, err = NewFlowLog(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:InboundNatRule":
		r, err = NewInboundNatRule(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:IpGroup":
		r, err = NewIpGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:LoadBalancer":
		r, err = NewLoadBalancer(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:LocalNetworkGateway":
		r, err = NewLocalNetworkGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:NatGateway":
		r, err = NewNatGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:NetworkExperimentProfile":
		r, err = NewNetworkExperimentProfile(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:NetworkInterface":
		r, err = NewNetworkInterface(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:NetworkInterfaceTapConfiguration":
		r, err = NewNetworkInterfaceTapConfiguration(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:NetworkProfile":
		r, err = NewNetworkProfile(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:NetworkSecurityGroup":
		r, err = NewNetworkSecurityGroup(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:NetworkWatcher":
		r, err = NewNetworkWatcher(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:P2sVpnGateway":
		r, err = NewP2sVpnGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:PacketCapture":
		r, err = NewPacketCapture(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:PrivateEndpoint":
		r, err = NewPrivateEndpoint(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:PrivateLinkService":
		r, err = NewPrivateLinkService(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:PrivateLinkServicePrivateEndpointConnection":
		r, err = NewPrivateLinkServicePrivateEndpointConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:PublicIPAddress":
		r, err = NewPublicIPAddress(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:PublicIPPrefix":
		r, err = NewPublicIPPrefix(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:Route":
		r, err = NewRoute(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:RouteFilter":
		r, err = NewRouteFilter(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:RouteFilterRule":
		r, err = NewRouteFilterRule(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:RouteTable":
		r, err = NewRouteTable(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:SecurityRule":
		r, err = NewSecurityRule(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ServiceEndpointPolicy":
		r, err = NewServiceEndpointPolicy(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:ServiceEndpointPolicyDefinition":
		r, err = NewServiceEndpointPolicyDefinition(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:Subnet":
		r, err = NewSubnet(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualHub":
		r, err = NewVirtualHub(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualHubRouteTableV2":
		r, err = NewVirtualHubRouteTableV2(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualNetwork":
		r, err = NewVirtualNetwork(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualNetworkGateway":
		r, err = NewVirtualNetworkGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualNetworkGatewayConnection":
		r, err = NewVirtualNetworkGatewayConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualNetworkPeering":
		r, err = NewVirtualNetworkPeering(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualNetworkTap":
		r, err = NewVirtualNetworkTap(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualRouter":
		r, err = NewVirtualRouter(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualRouterPeering":
		r, err = NewVirtualRouterPeering(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VirtualWan":
		r, err = NewVirtualWan(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VpnConnection":
		r, err = NewVpnConnection(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VpnGateway":
		r, err = NewVpnGateway(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VpnServerConfiguration":
		r, err = NewVpnServerConfiguration(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:VpnSite":
		r, err = NewVpnSite(ctx, name, nil, pulumi.URN_(urn))
	case "azure-nextgen:network/v20191101:WebApplicationFirewallPolicy":
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
		"network/v20191101",
		&module{version},
	)
}

# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .application_gateway import *
from .application_gateway_private_endpoint_connection import *
from .application_security_group import *
from .azure_firewall import *
from .bastion_host import *
from .connection_monitor import *
from .ddos_custom_policy import *
from .ddos_protection_plan import *
from .express_route_circuit import *
from .express_route_circuit_authorization import *
from .express_route_circuit_connection import *
from .express_route_circuit_peering import *
from .express_route_connection import *
from .express_route_cross_connection_peering import *
from .express_route_gateway import *
from .express_route_port import *
from .firewall_policy import *
from .firewall_policy_rule_collection_group import *
from .flow_log import *
from .front_door import *
from .get_active_sessions import *
from .get_application_gateway import *
from .get_application_gateway_backend_health_on_demand import *
from .get_application_gateway_private_endpoint_connection import *
from .get_application_security_group import *
from .get_azure_firewall import *
from .get_bastion_host import *
from .get_bastion_shareable_link import *
from .get_connection_monitor import *
from .get_ddos_custom_policy import *
from .get_ddos_protection_plan import *
from .get_express_route_circuit import *
from .get_express_route_circuit_authorization import *
from .get_express_route_circuit_connection import *
from .get_express_route_circuit_peering import *
from .get_express_route_connection import *
from .get_express_route_cross_connection_peering import *
from .get_express_route_gateway import *
from .get_express_route_port import *
from .get_firewall_policy import *
from .get_firewall_policy_rule_collection_group import *
from .get_flow_log import *
from .get_front_door import *
from .get_hub_route_table import *
from .get_hub_virtual_network_connection import *
from .get_inbound_nat_rule import *
from .get_ip_allocation import *
from .get_ip_group import *
from .get_load_balancer import *
from .get_load_balancer_backend_address_pool import *
from .get_local_network_gateway import *
from .get_nat_gateway import *
from .get_network_interface import *
from .get_network_interface_tap_configuration import *
from .get_network_profile import *
from .get_network_security_group import *
from .get_network_virtual_appliance import *
from .get_network_watcher import *
from .get_p2s_vpn_gateway import *
from .get_p2s_vpn_gateway_p2s_vpn_connection_health import *
from .get_p2s_vpn_gateway_p2s_vpn_connection_health_detailed import *
from .get_packet_capture import *
from .get_private_dns_zone_group import *
from .get_private_endpoint import *
from .get_private_link_service import *
from .get_private_link_service_private_endpoint_connection import *
from .get_public_ip_address import *
from .get_public_ip_prefix import *
from .get_route import *
from .get_route_filter import *
from .get_route_filter_rule import *
from .get_route_table import *
from .get_rules_engine import *
from .get_security_partner_provider import *
from .get_security_rule import *
from .get_service_endpoint_policy import *
from .get_service_endpoint_policy_definition import *
from .get_subnet import *
from .get_virtual_appliance_site import *
from .get_virtual_hub import *
from .get_virtual_hub_bgp_connection import *
from .get_virtual_hub_ip_configuration import *
from .get_virtual_hub_route_table_v2 import *
from .get_virtual_network import *
from .get_virtual_network_gateway import *
from .get_virtual_network_gateway_advertised_routes import *
from .get_virtual_network_gateway_bgp_peer_status import *
from .get_virtual_network_gateway_connection import *
from .get_virtual_network_gateway_learned_routes import *
from .get_virtual_network_gateway_vpnclient_connection_health import *
from .get_virtual_network_gateway_vpnclient_ipsec_parameters import *
from .get_virtual_network_peering import *
from .get_virtual_network_tap import *
from .get_virtual_router import *
from .get_virtual_router_peering import *
from .get_virtual_wan import *
from .get_vpn_connection import *
from .get_vpn_gateway import *
from .get_vpn_server_configuration import *
from .get_vpn_site import *
from .get_web_application_firewall_policy import *
from .hub_route_table import *
from .hub_virtual_network_connection import *
from .inbound_nat_rule import *
from .ip_allocation import *
from .ip_group import *
from .load_balancer import *
from .load_balancer_backend_address_pool import *
from .local_network_gateway import *
from .nat_gateway import *
from .network_interface import *
from .network_interface_tap_configuration import *
from .network_profile import *
from .network_security_group import *
from .network_virtual_appliance import *
from .network_watcher import *
from .p2s_vpn_gateway import *
from .packet_capture import *
from .private_dns_zone_group import *
from .private_endpoint import *
from .private_link_service import *
from .private_link_service_private_endpoint_connection import *
from .public_ip_address import *
from .public_ip_prefix import *
from .route import *
from .route_filter import *
from .route_filter_rule import *
from .route_table import *
from .rules_engine import *
from .security_partner_provider import *
from .security_rule import *
from .service_endpoint_policy import *
from .service_endpoint_policy_definition import *
from .subnet import *
from .virtual_appliance_site import *
from .virtual_hub import *
from .virtual_hub_bgp_connection import *
from .virtual_hub_ip_configuration import *
from .virtual_hub_route_table_v2 import *
from .virtual_network import *
from .virtual_network_gateway import *
from .virtual_network_gateway_connection import *
from .virtual_network_peering import *
from .virtual_network_tap import *
from .virtual_router import *
from .virtual_router_peering import *
from .virtual_wan import *
from .vpn_connection import *
from .vpn_gateway import *
from .vpn_server_configuration import *
from .vpn_site import *
from .web_application_firewall_policy import *
from ._inputs import *
from . import outputs

def _register_module():
    import pulumi
    from ... import _utilities


    class Module(pulumi.runtime.ResourceModule):
        _version = _utilities.get_semver_version()

        def version(self):
            return Module._version

        def construct(self, name: str, typ: str, urn: str) -> pulumi.Resource:
            if typ == "azure-nextgen:network/v20200501:ApplicationGateway":
                return ApplicationGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ApplicationGatewayPrivateEndpointConnection":
                return ApplicationGatewayPrivateEndpointConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ApplicationSecurityGroup":
                return ApplicationSecurityGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:AzureFirewall":
                return AzureFirewall(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:BastionHost":
                return BastionHost(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ConnectionMonitor":
                return ConnectionMonitor(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:DdosCustomPolicy":
                return DdosCustomPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:DdosProtectionPlan":
                return DdosProtectionPlan(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ExpressRouteCircuit":
                return ExpressRouteCircuit(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ExpressRouteCircuitAuthorization":
                return ExpressRouteCircuitAuthorization(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ExpressRouteCircuitConnection":
                return ExpressRouteCircuitConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ExpressRouteCircuitPeering":
                return ExpressRouteCircuitPeering(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ExpressRouteConnection":
                return ExpressRouteConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ExpressRouteCrossConnectionPeering":
                return ExpressRouteCrossConnectionPeering(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ExpressRouteGateway":
                return ExpressRouteGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ExpressRoutePort":
                return ExpressRoutePort(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:FirewallPolicy":
                return FirewallPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:FirewallPolicyRuleCollectionGroup":
                return FirewallPolicyRuleCollectionGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:FlowLog":
                return FlowLog(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:FrontDoor":
                return FrontDoor(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:HubRouteTable":
                return HubRouteTable(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:HubVirtualNetworkConnection":
                return HubVirtualNetworkConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:InboundNatRule":
                return InboundNatRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:IpAllocation":
                return IpAllocation(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:IpGroup":
                return IpGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:LoadBalancer":
                return LoadBalancer(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:LoadBalancerBackendAddressPool":
                return LoadBalancerBackendAddressPool(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:LocalNetworkGateway":
                return LocalNetworkGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:NatGateway":
                return NatGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:NetworkInterface":
                return NetworkInterface(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:NetworkInterfaceTapConfiguration":
                return NetworkInterfaceTapConfiguration(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:NetworkProfile":
                return NetworkProfile(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:NetworkSecurityGroup":
                return NetworkSecurityGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:NetworkVirtualAppliance":
                return NetworkVirtualAppliance(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:NetworkWatcher":
                return NetworkWatcher(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:P2sVpnGateway":
                return P2sVpnGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:PacketCapture":
                return PacketCapture(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:PrivateDnsZoneGroup":
                return PrivateDnsZoneGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:PrivateEndpoint":
                return PrivateEndpoint(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:PrivateLinkService":
                return PrivateLinkService(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:PrivateLinkServicePrivateEndpointConnection":
                return PrivateLinkServicePrivateEndpointConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:PublicIPAddress":
                return PublicIPAddress(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:PublicIPPrefix":
                return PublicIPPrefix(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:Route":
                return Route(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:RouteFilter":
                return RouteFilter(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:RouteFilterRule":
                return RouteFilterRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:RouteTable":
                return RouteTable(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:RulesEngine":
                return RulesEngine(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:SecurityPartnerProvider":
                return SecurityPartnerProvider(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:SecurityRule":
                return SecurityRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ServiceEndpointPolicy":
                return ServiceEndpointPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:ServiceEndpointPolicyDefinition":
                return ServiceEndpointPolicyDefinition(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:Subnet":
                return Subnet(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualApplianceSite":
                return VirtualApplianceSite(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualHub":
                return VirtualHub(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualHubBgpConnection":
                return VirtualHubBgpConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualHubIpConfiguration":
                return VirtualHubIpConfiguration(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualHubRouteTableV2":
                return VirtualHubRouteTableV2(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualNetwork":
                return VirtualNetwork(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualNetworkGateway":
                return VirtualNetworkGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualNetworkGatewayConnection":
                return VirtualNetworkGatewayConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualNetworkPeering":
                return VirtualNetworkPeering(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualNetworkTap":
                return VirtualNetworkTap(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualRouter":
                return VirtualRouter(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualRouterPeering":
                return VirtualRouterPeering(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VirtualWan":
                return VirtualWan(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VpnConnection":
                return VpnConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VpnGateway":
                return VpnGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VpnServerConfiguration":
                return VpnServerConfiguration(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:VpnSite":
                return VpnSite(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20200501:WebApplicationFirewallPolicy":
                return WebApplicationFirewallPolicy(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "network/v20200501", _module_instance)

_register_module()

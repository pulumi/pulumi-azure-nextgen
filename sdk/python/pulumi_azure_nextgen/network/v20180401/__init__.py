# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .application_gateway import *
from .application_security_group import *
from .azure_firewall import *
from .connection_monitor import *
from .ddos_protection_plan import *
from .endpoint import *
from .express_route_circuit import *
from .express_route_circuit_authorization import *
from .express_route_circuit_connection import *
from .express_route_circuit_peering import *
from .express_route_cross_connection_peering import *
from .get_application_gateway import *
from .get_application_security_group import *
from .get_azure_firewall import *
from .get_connection_monitor import *
from .get_ddos_protection_plan import *
from .get_endpoint import *
from .get_express_route_circuit import *
from .get_express_route_circuit_authorization import *
from .get_express_route_circuit_connection import *
from .get_express_route_circuit_peering import *
from .get_express_route_cross_connection_peering import *
from .get_inbound_nat_rule import *
from .get_load_balancer import *
from .get_local_network_gateway import *
from .get_network_interface import *
from .get_network_security_group import *
from .get_network_watcher import *
from .get_packet_capture import *
from .get_profile import *
from .get_public_ip_address import *
from .get_route import *
from .get_route_filter import *
from .get_route_filter_rule import *
from .get_route_table import *
from .get_security_rule import *
from .get_subnet import *
from .get_traffic_manager_user_metrics_key import *
from .get_virtual_hub import *
from .get_virtual_network import *
from .get_virtual_network_gateway import *
from .get_virtual_network_gateway_advertised_routes import *
from .get_virtual_network_gateway_bgp_peer_status import *
from .get_virtual_network_gateway_connection import *
from .get_virtual_network_gateway_learned_routes import *
from .get_virtual_network_gateway_vpnclient_ipsec_parameters import *
from .get_virtual_network_peering import *
from .get_virtual_wan import *
from .get_vpn_connection import *
from .get_vpn_gateway import *
from .get_vpn_site import *
from .inbound_nat_rule import *
from .load_balancer import *
from .local_network_gateway import *
from .network_interface import *
from .network_security_group import *
from .network_watcher import *
from .packet_capture import *
from .profile import *
from .public_ip_address import *
from .route import *
from .route_filter import *
from .route_filter_rule import *
from .route_table import *
from .security_rule import *
from .subnet import *
from .traffic_manager_user_metrics_key import *
from .virtual_hub import *
from .virtual_network import *
from .virtual_network_gateway import *
from .virtual_network_gateway_connection import *
from .virtual_network_peering import *
from .virtual_wan import *
from .vpn_connection import *
from .vpn_gateway import *
from .vpn_site import *
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
            if typ == "azure-nextgen:network/v20180401:ApplicationGateway":
                return ApplicationGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:ApplicationSecurityGroup":
                return ApplicationSecurityGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:AzureFirewall":
                return AzureFirewall(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:ConnectionMonitor":
                return ConnectionMonitor(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:DdosProtectionPlan":
                return DdosProtectionPlan(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:Endpoint":
                return Endpoint(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:ExpressRouteCircuit":
                return ExpressRouteCircuit(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:ExpressRouteCircuitAuthorization":
                return ExpressRouteCircuitAuthorization(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:ExpressRouteCircuitConnection":
                return ExpressRouteCircuitConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:ExpressRouteCircuitPeering":
                return ExpressRouteCircuitPeering(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:ExpressRouteCrossConnectionPeering":
                return ExpressRouteCrossConnectionPeering(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:InboundNatRule":
                return InboundNatRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:LoadBalancer":
                return LoadBalancer(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:LocalNetworkGateway":
                return LocalNetworkGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:NetworkInterface":
                return NetworkInterface(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:NetworkSecurityGroup":
                return NetworkSecurityGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:NetworkWatcher":
                return NetworkWatcher(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:PacketCapture":
                return PacketCapture(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:Profile":
                return Profile(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:PublicIPAddress":
                return PublicIPAddress(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:Route":
                return Route(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:RouteFilter":
                return RouteFilter(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:RouteFilterRule":
                return RouteFilterRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:RouteTable":
                return RouteTable(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:SecurityRule":
                return SecurityRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:Subnet":
                return Subnet(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:TrafficManagerUserMetricsKey":
                return TrafficManagerUserMetricsKey(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VirtualHub":
                return VirtualHub(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VirtualNetwork":
                return VirtualNetwork(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VirtualNetworkGateway":
                return VirtualNetworkGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VirtualNetworkGatewayConnection":
                return VirtualNetworkGatewayConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VirtualNetworkPeering":
                return VirtualNetworkPeering(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VirtualWAN":
                return VirtualWAN(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VpnConnection":
                return VpnConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VpnGateway":
                return VpnGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20180401:VpnSite":
                return VpnSite(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "network/v20180401", _module_instance)

_register_module()

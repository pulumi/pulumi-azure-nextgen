# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .application_gateway import *
from .express_route_circuit import *
from .express_route_circuit_authorization import *
from .express_route_circuit_peering import *
from .get_application_gateway import *
from .get_express_route_circuit import *
from .get_express_route_circuit_authorization import *
from .get_express_route_circuit_peering import *
from .get_inbound_nat_rule import *
from .get_load_balancer import *
from .get_local_network_gateway import *
from .get_network_interface import *
from .get_network_security_group import *
from .get_network_watcher import *
from .get_packet_capture import *
from .get_public_ip_address import *
from .get_route import *
from .get_route_filter import *
from .get_route_filter_rule import *
from .get_route_table import *
from .get_security_rule import *
from .get_subnet import *
from .get_virtual_network import *
from .get_virtual_network_gateway import *
from .get_virtual_network_gateway_advertised_routes import *
from .get_virtual_network_gateway_bgp_peer_status import *
from .get_virtual_network_gateway_connection import *
from .get_virtual_network_gateway_learned_routes import *
from .get_virtual_network_peering import *
from .inbound_nat_rule import *
from .load_balancer import *
from .local_network_gateway import *
from .network_interface import *
from .network_security_group import *
from .network_watcher import *
from .packet_capture import *
from .public_ip_address import *
from .route import *
from .route_filter import *
from .route_filter_rule import *
from .route_table import *
from .security_rule import *
from .subnet import *
from .virtual_network import *
from .virtual_network_gateway import *
from .virtual_network_gateway_connection import *
from .virtual_network_peering import *
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
            if typ == "azure-nextgen:network/v20170801:ApplicationGateway":
                return ApplicationGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:ExpressRouteCircuit":
                return ExpressRouteCircuit(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:ExpressRouteCircuitAuthorization":
                return ExpressRouteCircuitAuthorization(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:ExpressRouteCircuitPeering":
                return ExpressRouteCircuitPeering(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:InboundNatRule":
                return InboundNatRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:LoadBalancer":
                return LoadBalancer(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:LocalNetworkGateway":
                return LocalNetworkGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:NetworkInterface":
                return NetworkInterface(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:NetworkSecurityGroup":
                return NetworkSecurityGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:NetworkWatcher":
                return NetworkWatcher(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:PacketCapture":
                return PacketCapture(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:PublicIPAddress":
                return PublicIPAddress(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:Route":
                return Route(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:RouteFilter":
                return RouteFilter(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:RouteFilterRule":
                return RouteFilterRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:RouteTable":
                return RouteTable(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:SecurityRule":
                return SecurityRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:Subnet":
                return Subnet(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:VirtualNetwork":
                return VirtualNetwork(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:VirtualNetworkGateway":
                return VirtualNetworkGateway(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:VirtualNetworkGatewayConnection":
                return VirtualNetworkGatewayConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:network/v20170801:VirtualNetworkPeering":
                return VirtualNetworkPeering(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "network/v20170801", _module_instance)

_register_module()

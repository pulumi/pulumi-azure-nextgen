# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ApplicationGatewayCookieBasedAffinity',
    'ApplicationGatewayProtocol',
    'ApplicationGatewayRequestRoutingRuleType',
    'ApplicationGatewaySkuName',
    'ApplicationGatewaySslProtocol',
    'ApplicationGatewayTier',
    'AuthorizationUseStatus',
    'ExpressRouteCircuitPeeringAdvertisedPublicPrefixState',
    'ExpressRouteCircuitPeeringState',
    'ExpressRouteCircuitPeeringType',
    'ExpressRouteCircuitSkuFamily',
    'ExpressRouteCircuitSkuTier',
    'IPAllocationMethod',
    'IPVersion',
    'LoadDistribution',
    'ProbeProtocol',
    'RouteNextHopType',
    'SecurityRuleAccess',
    'SecurityRuleDirection',
    'SecurityRuleProtocol',
    'ServiceProviderProvisioningState',
    'TransportProtocol',
    'VirtualNetworkGatewayConnectionStatus',
    'VirtualNetworkGatewayConnectionType',
    'VirtualNetworkGatewaySkuName',
    'VirtualNetworkGatewaySkuTier',
    'VirtualNetworkGatewayType',
    'VirtualNetworkPeeringState',
    'VpnType',
]


class ApplicationGatewayCookieBasedAffinity(str, Enum):
    """
    Cookie affinity
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class ApplicationGatewayProtocol(str, Enum):
    """
    Protocol
    """
    HTTP = "Http"
    HTTPS = "Https"


class ApplicationGatewayRequestRoutingRuleType(str, Enum):
    """
    Rule type
    """
    BASIC = "Basic"
    PATH_BASED_ROUTING = "PathBasedRouting"


class ApplicationGatewaySkuName(str, Enum):
    """
    Name of application gateway SKU
    """
    STANDARD_SMALL = "Standard_Small"
    STANDARD_MEDIUM = "Standard_Medium"
    STANDARD_LARGE = "Standard_Large"


class ApplicationGatewaySslProtocol(str, Enum):
    TL_SV1_0 = "TLSv1_0"
    TL_SV1_1 = "TLSv1_1"
    TL_SV1_2 = "TLSv1_2"


class ApplicationGatewayTier(str, Enum):
    """
    Tier of application gateway
    """
    STANDARD = "Standard"


class AuthorizationUseStatus(str, Enum):
    """
    Gets or sets AuthorizationUseStatus
    """
    AVAILABLE = "Available"
    IN_USE = "InUse"


class ExpressRouteCircuitPeeringAdvertisedPublicPrefixState(str, Enum):
    """
    Gets or sets AdvertisedPublicPrefixState of the Peering resource 
    """
    NOT_CONFIGURED = "NotConfigured"
    CONFIGURING = "Configuring"
    CONFIGURED = "Configured"
    VALIDATION_NEEDED = "ValidationNeeded"


class ExpressRouteCircuitPeeringState(str, Enum):
    """
    Gets or sets state of Peering
    """
    DISABLED = "Disabled"
    ENABLED = "Enabled"


class ExpressRouteCircuitPeeringType(str, Enum):
    """
    Gets or sets PeeringType
    """
    AZURE_PUBLIC_PEERING = "AzurePublicPeering"
    AZURE_PRIVATE_PEERING = "AzurePrivatePeering"
    MICROSOFT_PEERING = "MicrosoftPeering"


class ExpressRouteCircuitSkuFamily(str, Enum):
    """
    Gets or sets family of the sku.
    """
    UNLIMITED_DATA = "UnlimitedData"
    METERED_DATA = "MeteredData"


class ExpressRouteCircuitSkuTier(str, Enum):
    """
    Gets or sets tier of the sku.
    """
    STANDARD = "Standard"
    PREMIUM = "Premium"


class IPAllocationMethod(str, Enum):
    """
    Gets or sets PrivateIP allocation method
    """
    STATIC = "Static"
    DYNAMIC = "Dynamic"


class IPVersion(str, Enum):
    """
    Gets or sets PublicIP address version (IPv4/IPv6)
    """
    I_PV4 = "IPv4"
    I_PV6 = "IPv6"


class LoadDistribution(str, Enum):
    """
    Gets or sets the load distribution policy for this rule
    """
    DEFAULT = "Default"
    SOURCE_IP = "SourceIP"
    SOURCE_IP_PROTOCOL = "SourceIPProtocol"


class ProbeProtocol(str, Enum):
    """
    Gets or sets the protocol of the end point. Possible values are http or Tcp. If Tcp is specified, a received ACK is required for the probe to be successful. If http is specified,a 200 OK response from the specifies URI is required for the probe to be successful
    """
    HTTP = "Http"
    TCP = "Tcp"


class RouteNextHopType(str, Enum):
    """
    Gets or sets the type of Azure hop the packet should be sent to.
    """
    VIRTUAL_NETWORK_GATEWAY = "VirtualNetworkGateway"
    VNET_LOCAL = "VnetLocal"
    INTERNET = "Internet"
    VIRTUAL_APPLIANCE = "VirtualAppliance"
    NONE = "None"


class SecurityRuleAccess(str, Enum):
    """
    Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
    """
    ALLOW = "Allow"
    DENY = "Deny"


class SecurityRuleDirection(str, Enum):
    """
    Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
    """
    INBOUND = "Inbound"
    OUTBOUND = "Outbound"


class SecurityRuleProtocol(str, Enum):
    """
    Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
    """
    TCP = "Tcp"
    UDP = "Udp"
    ASTERISK = "*"


class ServiceProviderProvisioningState(str, Enum):
    """
    Gets or sets ServiceProviderProvisioningState state of the resource 
    """
    NOT_PROVISIONED = "NotProvisioned"
    PROVISIONING = "Provisioning"
    PROVISIONED = "Provisioned"
    DEPROVISIONING = "Deprovisioning"


class TransportProtocol(str, Enum):
    """
    Gets or sets the transport protocol for the endpoint. Possible values are Udp or Tcp
    """
    UDP = "Udp"
    TCP = "Tcp"


class VirtualNetworkGatewayConnectionStatus(str, Enum):
    """
    Virtual network Gateway connection status
    """
    UNKNOWN = "Unknown"
    CONNECTING = "Connecting"
    CONNECTED = "Connected"
    NOT_CONNECTED = "NotConnected"


class VirtualNetworkGatewayConnectionType(str, Enum):
    """
    Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
    """
    IPSEC = "IPsec"
    VNET2_VNET = "Vnet2Vnet"
    EXPRESS_ROUTE = "ExpressRoute"
    VPN_CLIENT = "VPNClient"


class VirtualNetworkGatewaySkuName(str, Enum):
    """
    Gateway sku name -Basic/HighPerformance/Standard/UltraPerformance
    """
    BASIC = "Basic"
    HIGH_PERFORMANCE = "HighPerformance"
    STANDARD = "Standard"
    ULTRA_PERFORMANCE = "UltraPerformance"


class VirtualNetworkGatewaySkuTier(str, Enum):
    """
    Gateway sku tier -Basic/HighPerformance/Standard/UltraPerformance
    """
    BASIC = "Basic"
    HIGH_PERFORMANCE = "HighPerformance"
    STANDARD = "Standard"
    ULTRA_PERFORMANCE = "UltraPerformance"


class VirtualNetworkGatewayType(str, Enum):
    """
    The type of this virtual network gateway.
    """
    VPN = "Vpn"
    EXPRESS_ROUTE = "ExpressRoute"


class VirtualNetworkPeeringState(str, Enum):
    """
    Gets the status of the virtual network peering
    """
    INITIATED = "Initiated"
    CONNECTED = "Connected"
    DISCONNECTED = "Disconnected"


class VpnType(str, Enum):
    """
    The type of this virtual network gateway.
    """
    POLICY_BASED = "PolicyBased"
    ROUTE_BASED = "RouteBased"
# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ApplicationGatewayCookieBasedAffinity',
    'ApplicationGatewayProtocol',
    'ApplicationGatewayRequestRoutingRuleType',
    'ApplicationGatewaySkuName',
    'ApplicationGatewayTier',
    'AuthorizationUseStatus',
    'ExpressRouteCircuitPeeringAdvertisedPublicPrefixState',
    'ExpressRouteCircuitPeeringState',
    'ExpressRouteCircuitPeeringType',
    'ExpressRouteCircuitSkuFamily',
    'ExpressRouteCircuitSkuTier',
    'IpAllocationMethod',
    'LoadDistribution',
    'ProbeProtocol',
    'RouteNextHopType',
    'SecurityRuleAccess',
    'SecurityRuleDirection',
    'SecurityRuleProtocol',
    'ServiceProviderProvisioningState',
    'TransportProtocol',
]


class ApplicationGatewayCookieBasedAffinity(str, Enum):
    """
    Gets or sets the cookie affinity
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class ApplicationGatewayProtocol(str, Enum):
    """
    Gets or sets the protocol
    """
    HTTP = "Http"
    HTTPS = "Https"


class ApplicationGatewayRequestRoutingRuleType(str, Enum):
    """
    Gets or sets the rule type
    """
    BASIC = "Basic"


class ApplicationGatewaySkuName(str, Enum):
    """
    Gets or sets name of application gateway SKU
    """
    STANDARD_SMALL = "Standard_Small"
    STANDARD_MEDIUM = "Standard_Medium"
    STANDARD_LARGE = "Standard_Large"


class ApplicationGatewayTier(str, Enum):
    """
    Gets or sets tier of application gateway
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


class IpAllocationMethod(str, Enum):
    """
    Gets or sets PublicIP allocation method (Static/Dynamic)
    """
    STATIC = "Static"
    DYNAMIC = "Dynamic"


class LoadDistribution(str, Enum):
    """
    Gets or sets the load distribution policy for this rule
    """
    DEFAULT = "Default"
    SOURCE_IP = "SourceIP"
    SOURCE_IP_PROTOCOL = "SourceIPProtocol"


class ProbeProtocol(str, Enum):
    """
    Gets or sets the protocol of the end point. Possible values are http pr Tcp. If Tcp is specified, a received ACK is required for the probe to be successful. If http is specified,a 200 OK response from the specifies URI is required for the probe to be successful
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
    Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
    """
    UDP = "Udp"
    TCP = "Tcp"

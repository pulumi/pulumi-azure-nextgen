// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ApplicationGatewayCookieBasedAffinity = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Gets or sets the cookie affinity
 */
export type ApplicationGatewayCookieBasedAffinity = (typeof ApplicationGatewayCookieBasedAffinity)[keyof typeof ApplicationGatewayCookieBasedAffinity];

export const ApplicationGatewayProtocol = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Gets or sets the protocol
 */
export type ApplicationGatewayProtocol = (typeof ApplicationGatewayProtocol)[keyof typeof ApplicationGatewayProtocol];

export const ApplicationGatewayRequestRoutingRuleType = {
    Basic: "Basic",
} as const;

/**
 * Gets or sets the rule type
 */
export type ApplicationGatewayRequestRoutingRuleType = (typeof ApplicationGatewayRequestRoutingRuleType)[keyof typeof ApplicationGatewayRequestRoutingRuleType];

export const ApplicationGatewaySkuName = {
    Standard_Small: "Standard_Small",
    Standard_Medium: "Standard_Medium",
    Standard_Large: "Standard_Large",
} as const;

/**
 * Gets or sets name of application gateway SKU
 */
export type ApplicationGatewaySkuName = (typeof ApplicationGatewaySkuName)[keyof typeof ApplicationGatewaySkuName];

export const ApplicationGatewayTier = {
    Standard: "Standard",
} as const;

/**
 * Gets or sets tier of application gateway
 */
export type ApplicationGatewayTier = (typeof ApplicationGatewayTier)[keyof typeof ApplicationGatewayTier];

export const AuthorizationUseStatus = {
    Available: "Available",
    InUse: "InUse",
} as const;

/**
 * Gets or sets AuthorizationUseStatus
 */
export type AuthorizationUseStatus = (typeof AuthorizationUseStatus)[keyof typeof AuthorizationUseStatus];

export const ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = {
    NotConfigured: "NotConfigured",
    Configuring: "Configuring",
    Configured: "Configured",
    ValidationNeeded: "ValidationNeeded",
} as const;

/**
 * Gets or sets AdvertisedPublicPrefixState of the Peering resource 
 */
export type ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = (typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState)[keyof typeof ExpressRouteCircuitPeeringAdvertisedPublicPrefixState];

export const ExpressRouteCircuitPeeringState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Gets or sets state of Peering
 */
export type ExpressRouteCircuitPeeringState = (typeof ExpressRouteCircuitPeeringState)[keyof typeof ExpressRouteCircuitPeeringState];

export const ExpressRouteCircuitPeeringType = {
    AzurePublicPeering: "AzurePublicPeering",
    AzurePrivatePeering: "AzurePrivatePeering",
    MicrosoftPeering: "MicrosoftPeering",
} as const;

/**
 * Gets or sets PeeringType
 */
export type ExpressRouteCircuitPeeringType = (typeof ExpressRouteCircuitPeeringType)[keyof typeof ExpressRouteCircuitPeeringType];

export const ExpressRouteCircuitSkuFamily = {
    UnlimitedData: "UnlimitedData",
    MeteredData: "MeteredData",
} as const;

/**
 * Gets or sets family of the sku.
 */
export type ExpressRouteCircuitSkuFamily = (typeof ExpressRouteCircuitSkuFamily)[keyof typeof ExpressRouteCircuitSkuFamily];

export const ExpressRouteCircuitSkuTier = {
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Gets or sets tier of the sku.
 */
export type ExpressRouteCircuitSkuTier = (typeof ExpressRouteCircuitSkuTier)[keyof typeof ExpressRouteCircuitSkuTier];

export const IpAllocationMethod = {
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * Gets or sets PublicIP allocation method (Static/Dynamic)
 */
export type IpAllocationMethod = (typeof IpAllocationMethod)[keyof typeof IpAllocationMethod];

export const LoadDistribution = {
    Default: "Default",
    SourceIP: "SourceIP",
    SourceIPProtocol: "SourceIPProtocol",
} as const;

/**
 * Gets or sets the load distribution policy for this rule
 */
export type LoadDistribution = (typeof LoadDistribution)[keyof typeof LoadDistribution];

export const ProbeProtocol = {
    Http: "Http",
    Tcp: "Tcp",
} as const;

/**
 * Gets or sets the protocol of the end point. Possible values are http pr Tcp. If Tcp is specified, a received ACK is required for the probe to be successful. If http is specified,a 200 OK response from the specifies URI is required for the probe to be successful
 */
export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const RouteNextHopType = {
    VirtualNetworkGateway: "VirtualNetworkGateway",
    VnetLocal: "VnetLocal",
    Internet: "Internet",
    VirtualAppliance: "VirtualAppliance",
    None: "None",
} as const;

/**
 * Gets or sets the type of Azure hop the packet should be sent to.
 */
export type RouteNextHopType = (typeof RouteNextHopType)[keyof typeof RouteNextHopType];

export const SecurityRuleAccess = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Gets or sets network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'
 */
export type SecurityRuleAccess = (typeof SecurityRuleAccess)[keyof typeof SecurityRuleAccess];

export const SecurityRuleDirection = {
    Inbound: "Inbound",
    Outbound: "Outbound",
} as const;

/**
 * Gets or sets the direction of the rule.InBound or Outbound. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
 */
export type SecurityRuleDirection = (typeof SecurityRuleDirection)[keyof typeof SecurityRuleDirection];

export const SecurityRuleProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
    Asterisk: "*",
} as const;

/**
 * Gets or sets Network protocol this rule applies to. Can be Tcp, Udp or All(*).
 */
export type SecurityRuleProtocol = (typeof SecurityRuleProtocol)[keyof typeof SecurityRuleProtocol];

export const ServiceProviderProvisioningState = {
    NotProvisioned: "NotProvisioned",
    Provisioning: "Provisioning",
    Provisioned: "Provisioned",
    Deprovisioning: "Deprovisioning",
} as const;

/**
 * Gets or sets ServiceProviderProvisioningState state of the resource 
 */
export type ServiceProviderProvisioningState = (typeof ServiceProviderProvisioningState)[keyof typeof ServiceProviderProvisioningState];

export const TransportProtocol = {
    Udp: "Udp",
    Tcp: "Tcp",
} as const;

/**
 * Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];
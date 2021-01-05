// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AuthenticationType = {
    KeyBased: "KeyBased",
    IdentityBased: "IdentityBased",
} as const;

/**
 * Specifies the authentication type being used for connecting to the endpoint.
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const DigitalTwinsIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The type of Managed Identity used by the DigitalTwinsInstance. Only SystemAssigned is supported.
 */
export type DigitalTwinsIdentityType = (typeof DigitalTwinsIdentityType)[keyof typeof DigitalTwinsIdentityType];

export const EndpointType = {
    EventHub: "EventHub",
    EventGrid: "EventGrid",
    ServiceBus: "ServiceBus",
} as const;

/**
 * The type of Digital Twins endpoint
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The status of a private endpoint connection.
 */
export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Public network access for the DigitalTwinsInstance.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];
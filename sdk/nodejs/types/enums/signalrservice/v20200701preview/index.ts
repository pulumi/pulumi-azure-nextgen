// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ACLAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Default action when no other rule matches
 */
export type ACLAction = (typeof ACLAction)[keyof typeof ACLAction];

export const FeatureFlags = {
    ServiceMode: "ServiceMode",
    EnableConnectivityLogs: "EnableConnectivityLogs",
    EnableMessagingLogs: "EnableMessagingLogs",
} as const;

/**
 * FeatureFlags is the supported features of Azure SignalR service.
 * - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
 * - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
 */
export type FeatureFlags = (typeof FeatureFlags)[keyof typeof FeatureFlags];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Represent the identity type: systemAssigned, userAssigned, None
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const ServiceKind = {
    SignalR: "SignalR",
    RawWebSockets: "RawWebSockets",
} as const;

/**
 * The kind of the service - e.g. "SignalR", or "RawWebSockets" for "Microsoft.SignalRService/SignalR"
 */
export type ServiceKind = (typeof ServiceKind)[keyof typeof ServiceKind];

export const SignalRRequestType = {
    ClientConnection: "ClientConnection",
    ServerConnection: "ServerConnection",
    RESTAPI: "RESTAPI",
} as const;

/**
 * Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
 */
export type SignalRRequestType = (typeof SignalRRequestType)[keyof typeof SignalRRequestType];

export const SignalRSkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * Optional tier of this particular SKU. 'Standard' or 'Free'. 
 * 
 * `Basic` is deprecated, use `Standard` instead.
 */
export type SignalRSkuTier = (typeof SignalRSkuTier)[keyof typeof SignalRSkuTier];

export const UpstreamAuthType = {
    None: "None",
    ManagedIdentity: "ManagedIdentity",
} as const;

/**
 * Gets or sets the type of auth. None or ManagedIdentity is supported now.
 */
export type UpstreamAuthType = (typeof UpstreamAuthType)[keyof typeof UpstreamAuthType];

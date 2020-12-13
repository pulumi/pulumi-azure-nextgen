// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ApiType = {
    Http: "http",
    Soap: "soap",
} as const;

/**
 * Type of API.
 */
export type ApiType = (typeof ApiType)[keyof typeof ApiType];

export const ApimIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type. Currently the only supported type is 'SystemAssigned'.
 */
export type ApimIdentityType = (typeof ApimIdentityType)[keyof typeof ApimIdentityType];

export const AuthorizationMethod = {
    HEAD: "HEAD",
    OPTIONS: "OPTIONS",
    TRACE: "TRACE",
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
} as const;

export type AuthorizationMethod = (typeof AuthorizationMethod)[keyof typeof AuthorizationMethod];

export const BackendProtocol = {
    /**
     * The Backend is a RESTful service.
     */
    Http: "http",
    /**
     * The Backend is a SOAP service.
     */
    Soap: "soap",
} as const;

/**
 * Backend communication protocol.
 */
export type BackendProtocol = (typeof BackendProtocol)[keyof typeof BackendProtocol];

export const BearerTokenSendingMethod = {
    AuthorizationHeader: "authorizationHeader",
    Query: "query",
} as const;

export type BearerTokenSendingMethod = (typeof BearerTokenSendingMethod)[keyof typeof BearerTokenSendingMethod];

export const ClientAuthenticationMethod = {
    /**
     * Basic Client Authentication method.
     */
    Basic: "Basic",
    /**
     * Body based Authentication method.
     */
    Body: "Body",
} as const;

export type ClientAuthenticationMethod = (typeof ClientAuthenticationMethod)[keyof typeof ClientAuthenticationMethod];

export const Confirmation = {
    /**
     * Send an e-mail to the user confirming they have successfully signed up.
     */
    Signup: "signup",
    /**
     * Send an e-mail inviting the user to sign-up and complete registration.
     */
    Invite: "invite",
} as const;

/**
 * Determines the type of confirmation e-mail that will be sent to the newly created user.
 */
export type Confirmation = (typeof Confirmation)[keyof typeof Confirmation];

export const ContentFormat = {
    /**
     * The contents are inline and Content type is a WADL document.
     */
    Wadl_xml: "wadl-xml",
    /**
     * The WADL document is hosted on a publicly accessible internet address.
     */
    Wadl_link_json: "wadl-link-json",
    /**
     * The contents are inline and Content Type is a OpenApi 2.0 Document.
     */
    Swagger_json: "swagger-json",
    /**
     * The Open Api 2.0 document is hosted on a publicly accessible internet address.
     */
    Swagger_link_json: "swagger-link-json",
    /**
     * The contents are inline and the document is a WSDL/Soap document.
     */
    Wsdl: "wsdl",
    /**
     * The WSDL document is hosted on a publicly accessible internet address.
     */
    Wsdl_link: "wsdl-link",
} as const;

/**
 * Format of the Content in which the API is getting imported.
 */
export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat];

export const GrantType = {
    /**
     * Authorization Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.1.
     */
    AuthorizationCode: "authorizationCode",
    /**
     * Implicit Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.2.
     */
    Implicit: "implicit",
    /**
     * Resource Owner Password Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.3.
     */
    ResourceOwnerPassword: "resourceOwnerPassword",
    /**
     * Client Credentials Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.4.
     */
    ClientCredentials: "clientCredentials",
} as const;

export type GrantType = (typeof GrantType)[keyof typeof GrantType];

export const GroupType = {
    Custom: "custom",
    System: "system",
    External: "external",
} as const;

/**
 * Group type.
 */
export type GroupType = (typeof GroupType)[keyof typeof GroupType];

export const HostnameType = {
    Proxy: "Proxy",
    Portal: "Portal",
    Management: "Management",
    Scm: "Scm",
} as const;

/**
 * Hostname type.
 */
export type HostnameType = (typeof HostnameType)[keyof typeof HostnameType];

export const IdentityProviderType = {
    /**
     * Facebook as Identity provider.
     */
    Facebook: "facebook",
    /**
     * Google as Identity provider.
     */
    Google: "google",
    /**
     * Microsoft Live as Identity provider.
     */
    Microsoft: "microsoft",
    /**
     * Twitter as Identity provider.
     */
    Twitter: "twitter",
    /**
     * Azure Active Directory as Identity provider.
     */
    Aad: "aad",
    /**
     * Azure Active Directory B2C as Identity provider.
     */
    AadB2C: "aadB2C",
} as const;

/**
 * Identity Provider Type identifier.
 */
export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

export const LoggerType = {
    /**
     * Azure Event Hub as log destination.
     */
    AzureEventHub: "azureEventHub",
    /**
     * Azure Application Insights as log destination.
     */
    ApplicationInsights: "applicationInsights",
} as const;

/**
 * Logger type.
 */
export type LoggerType = (typeof LoggerType)[keyof typeof LoggerType];

export const ProductState = {
    NotPublished: "notPublished",
    Published: "published",
} as const;

/**
 * whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
 */
export type ProductState = (typeof ProductState)[keyof typeof ProductState];

export const Protocol = {
    Http: "http",
    Https: "https",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const SamplingType = {
    /**
     * Fixed-rate sampling.
     */
    Fixed: "fixed",
    /**
     * Sampling with a dynamically adjustable rate.
     */
    Adaptive: "adaptive",
} as const;

/**
 * Sampling type.
 */
export type SamplingType = (typeof SamplingType)[keyof typeof SamplingType];

export const SkuType = {
    /**
     * Developer SKU of Api Management.
     */
    Developer: "Developer",
    /**
     * Standard SKU of Api Management.
     */
    Standard: "Standard",
    /**
     * Premium SKU of Api Management.
     */
    Premium: "Premium",
    /**
     * Basic SKU of Api Management.
     */
    Basic: "Basic",
} as const;

/**
 * Name of the Sku.
 */
export type SkuType = (typeof SkuType)[keyof typeof SkuType];

export const State = {
    /**
     * The issue is proposed.
     */
    Proposed: "proposed",
    /**
     * The issue is opened.
     */
    Open: "open",
    /**
     * The issue was removed.
     */
    Removed: "removed",
    /**
     * The issue is now resolved.
     */
    Resolved: "resolved",
    /**
     * The issue was closed.
     */
    Closed: "closed",
} as const;

/**
 * Status of the issue.
 */
export type State = (typeof State)[keyof typeof State];

export const SubscriptionState = {
    Suspended: "suspended",
    Active: "active",
    Expired: "expired",
    Submitted: "submitted",
    Rejected: "rejected",
    Cancelled: "cancelled",
} as const;

/**
 * Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
 */
export type SubscriptionState = (typeof SubscriptionState)[keyof typeof SubscriptionState];

export const UserState = {
    /**
     * User state is active.
     */
    Active: "active",
    /**
     * User is blocked. Blocked users cannot authenticate at developer portal or call API.
     */
    Blocked: "blocked",
    /**
     * User account is pending. Requires identity confirmation before it can be made active.
     */
    Pending: "pending",
    /**
     * User account is closed. All identities and related entities are removed.
     */
    Deleted: "deleted",
} as const;

/**
 * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
 */
export type UserState = (typeof UserState)[keyof typeof UserState];

export const VersioningScheme = {
    /**
     * The API Version is passed in a path segment.
     */
    Segment: "Segment",
    /**
     * The API Version is passed in a query parameter.
     */
    Query: "Query",
    /**
     * The API Version is passed in a HTTP header.
     */
    Header: "Header",
} as const;

/**
 * An value that determines where the API Version identifer will be located in a HTTP request.
 */
export type VersioningScheme = (typeof VersioningScheme)[keyof typeof VersioningScheme];

export const VirtualNetworkType = {
    /**
     * The service is not part of any Virtual Network.
     */
    None: "None",
    /**
     * The service is part of Virtual Network and it is accessible from Internet.
     */
    External: "External",
    /**
     * The service is part of Virtual Network and it is only accessible from within the virtual network.
     */
    Internal: "Internal",
} as const;

/**
 * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
 */
export type VirtualNetworkType = (typeof VirtualNetworkType)[keyof typeof VirtualNetworkType];

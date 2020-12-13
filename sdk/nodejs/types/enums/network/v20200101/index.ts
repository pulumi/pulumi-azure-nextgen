// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const BackendEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
 */
export type BackendEnabledState = (typeof BackendEnabledState)[keyof typeof BackendEnabledState];

export const DynamicCompressionEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to use dynamic compression for cached content
 */
export type DynamicCompressionEnabled = (typeof DynamicCompressionEnabled)[keyof typeof DynamicCompressionEnabled];

export const EnforceCertificateNameCheckEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
 */
export type EnforceCertificateNameCheckEnabledState = (typeof EnforceCertificateNameCheckEnabledState)[keyof typeof EnforceCertificateNameCheckEnabledState];

export const FrontDoorEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
 */
export type FrontDoorEnabledState = (typeof FrontDoorEnabledState)[keyof typeof FrontDoorEnabledState];

export const FrontDoorForwardingProtocol = {
    HttpOnly: "HttpOnly",
    HttpsOnly: "HttpsOnly",
    MatchRequest: "MatchRequest",
} as const;

/**
 * Protocol this rule will use when forwarding traffic to backends.
 */
export type FrontDoorForwardingProtocol = (typeof FrontDoorForwardingProtocol)[keyof typeof FrontDoorForwardingProtocol];

export const FrontDoorHealthProbeMethod = {
    GET: "GET",
    HEAD: "HEAD",
} as const;

/**
 * Configures which HTTP method to use to probe the backends defined under backendPools.
 */
export type FrontDoorHealthProbeMethod = (typeof FrontDoorHealthProbeMethod)[keyof typeof FrontDoorHealthProbeMethod];

export const FrontDoorProtocol = {
    Http: "Http",
    Https: "Https",
} as const;

/**
 * Accepted protocol schemes.
 */
export type FrontDoorProtocol = (typeof FrontDoorProtocol)[keyof typeof FrontDoorProtocol];

export const FrontDoorQuery = {
    StripNone: "StripNone",
    StripAll: "StripAll",
    StripOnly: "StripOnly",
    StripAllExcept: "StripAllExcept",
} as const;

/**
 * Treatment of URL query terms when forming the cache key.
 */
export type FrontDoorQuery = (typeof FrontDoorQuery)[keyof typeof FrontDoorQuery];

export const FrontDoorRedirectProtocol = {
    HttpOnly: "HttpOnly",
    HttpsOnly: "HttpsOnly",
    MatchRequest: "MatchRequest",
} as const;

/**
 * The protocol of the destination to where the traffic is redirected
 */
export type FrontDoorRedirectProtocol = (typeof FrontDoorRedirectProtocol)[keyof typeof FrontDoorRedirectProtocol];

export const FrontDoorRedirectType = {
    Moved: "Moved",
    Found: "Found",
    TemporaryRedirect: "TemporaryRedirect",
    PermanentRedirect: "PermanentRedirect",
} as const;

/**
 * The redirect type the rule will use when redirecting traffic.
 */
export type FrontDoorRedirectType = (typeof FrontDoorRedirectType)[keyof typeof FrontDoorRedirectType];

export const HeaderActionType = {
    Append: "Append",
    Delete: "Delete",
    Overwrite: "Overwrite",
} as const;

/**
 * Which type of manipulation to apply to the header.
 */
export type HeaderActionType = (typeof HeaderActionType)[keyof typeof HeaderActionType];

export const HealthProbeEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
 */
export type HealthProbeEnabled = (typeof HealthProbeEnabled)[keyof typeof HealthProbeEnabled];

export const MatchProcessingBehavior = {
    Continue: "Continue",
    Stop: "Stop",
} as const;

/**
 * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
 */
export type MatchProcessingBehavior = (typeof MatchProcessingBehavior)[keyof typeof MatchProcessingBehavior];

export const RoutingRuleEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
 */
export type RoutingRuleEnabledState = (typeof RoutingRuleEnabledState)[keyof typeof RoutingRuleEnabledState];

export const RulesEngineMatchVariable = {
    IsMobile: "IsMobile",
    RemoteAddr: "RemoteAddr",
    RequestMethod: "RequestMethod",
    QueryString: "QueryString",
    PostArgs: "PostArgs",
    RequestUri: "RequestUri",
    RequestPath: "RequestPath",
    RequestFilename: "RequestFilename",
    RequestFilenameExtension: "RequestFilenameExtension",
    RequestHeader: "RequestHeader",
    RequestBody: "RequestBody",
    RequestScheme: "RequestScheme",
} as const;

/**
 * Match Variable
 */
export type RulesEngineMatchVariable = (typeof RulesEngineMatchVariable)[keyof typeof RulesEngineMatchVariable];

export const RulesEngineOperator = {
    Any: "Any",
    IPMatch: "IPMatch",
    GeoMatch: "GeoMatch",
    Equal: "Equal",
    Contains: "Contains",
    LessThan: "LessThan",
    GreaterThan: "GreaterThan",
    LessThanOrEqual: "LessThanOrEqual",
    GreaterThanOrEqual: "GreaterThanOrEqual",
    BeginsWith: "BeginsWith",
    EndsWith: "EndsWith",
} as const;

/**
 * Describes operator to apply to the match condition.
 */
export type RulesEngineOperator = (typeof RulesEngineOperator)[keyof typeof RulesEngineOperator];

export const SessionAffinityEnabledState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
 */
export type SessionAffinityEnabledState = (typeof SessionAffinityEnabledState)[keyof typeof SessionAffinityEnabledState];

export const Transform = {
    Lowercase: "Lowercase",
    Uppercase: "Uppercase",
    Trim: "Trim",
    UrlDecode: "UrlDecode",
    UrlEncode: "UrlEncode",
    RemoveNulls: "RemoveNulls",
} as const;

/**
 * Describes what transforms are applied before matching
 */
export type Transform = (typeof Transform)[keyof typeof Transform];

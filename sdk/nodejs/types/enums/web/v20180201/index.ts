// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AccessControlEntryAction = {
    Permit: "Permit",
    Deny: "Deny",
} as const;

/**
 * Action object.
 */
export type AccessControlEntryAction = (typeof AccessControlEntryAction)[keyof typeof AccessControlEntryAction];

export const AutoHealActionType = {
    Recycle: "Recycle",
    LogEvent: "LogEvent",
    CustomAction: "CustomAction",
} as const;

/**
 * Predefined action to be taken.
 */
export type AutoHealActionType = (typeof AutoHealActionType)[keyof typeof AutoHealActionType];

export const AzureResourceType = {
    Website: "Website",
    TrafficManager: "TrafficManager",
} as const;

/**
 * Azure resource type.
 */
export type AzureResourceType = (typeof AzureResourceType)[keyof typeof AzureResourceType];

export const AzureStorageType = {
    AzureFiles: "AzureFiles",
    AzureBlob: "AzureBlob",
} as const;

/**
 * Type of storage.
 */
export type AzureStorageType = (typeof AzureStorageType)[keyof typeof AzureStorageType];

export const ComputeModeOptions = {
    Shared: "Shared",
    Dedicated: "Dedicated",
    Dynamic: "Dynamic",
} as const;

/**
 * Shared or dedicated app hosting.
 */
export type ComputeModeOptions = (typeof ComputeModeOptions)[keyof typeof ComputeModeOptions];

export const ConnectionStringType = {
    MySql: "MySql",
    SQLServer: "SQLServer",
    SQLAzure: "SQLAzure",
    Custom: "Custom",
    NotificationHub: "NotificationHub",
    ServiceBus: "ServiceBus",
    EventHub: "EventHub",
    ApiHub: "ApiHub",
    DocDb: "DocDb",
    RedisCache: "RedisCache",
    PostgreSQL: "PostgreSQL",
} as const;

/**
 * Type of database.
 */
export type ConnectionStringType = (typeof ConnectionStringType)[keyof typeof ConnectionStringType];

export const CustomHostNameDnsRecordType = {
    CName: "CName",
    A: "A",
} as const;

/**
 * Custom DNS record type.
 */
export type CustomHostNameDnsRecordType = (typeof CustomHostNameDnsRecordType)[keyof typeof CustomHostNameDnsRecordType];

export const DatabaseType = {
    SqlAzure: "SqlAzure",
    MySql: "MySql",
    LocalMySql: "LocalMySql",
    PostgreSql: "PostgreSql",
} as const;

/**
 * Database type (e.g. SqlAzure / MySql).
 */
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

export const FrequencyUnit = {
    Day: "Day",
    Hour: "Hour",
} as const;

/**
 * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
 */
export type FrequencyUnit = (typeof FrequencyUnit)[keyof typeof FrequencyUnit];

export const FtpsState = {
    AllAllowed: "AllAllowed",
    FtpsOnly: "FtpsOnly",
    Disabled: "Disabled",
} as const;

/**
 * State of FTP / FTPS service
 */
export type FtpsState = (typeof FtpsState)[keyof typeof FtpsState];

export const HostNameType = {
    Verified: "Verified",
    Managed: "Managed",
} as const;

/**
 * Hostname type.
 */
export type HostNameType = (typeof HostNameType)[keyof typeof HostNameType];

export const HostType = {
    Standard: "Standard",
    Repository: "Repository",
} as const;

/**
 * Indicates whether the hostname is a standard or repository hostname.
 */
export type HostType = (typeof HostType)[keyof typeof HostType];

export const InternalLoadBalancingMode = {
    None: "None",
    Web: "Web",
    Publishing: "Publishing",
} as const;

/**
 * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
 */
export type InternalLoadBalancingMode = (typeof InternalLoadBalancingMode)[keyof typeof InternalLoadBalancingMode];

export const IpFilterTag = {
    Default: "Default",
    XffProxy: "XffProxy",
} as const;

/**
 * Defines what this IP filter will be used for. This is to support IP filtering on proxies.
 */
export type IpFilterTag = (typeof IpFilterTag)[keyof typeof IpFilterTag];

export const LogLevel = {
    Off: "Off",
    Verbose: "Verbose",
    Information: "Information",
    Warning: "Warning",
    Error: "Error",
} as const;

/**
 * Log level.
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

export const ManagedPipelineMode = {
    Integrated: "Integrated",
    Classic: "Classic",
} as const;

/**
 * Managed pipeline mode.
 */
export type ManagedPipelineMode = (typeof ManagedPipelineMode)[keyof typeof ManagedPipelineMode];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * Type of managed service identity.
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PublicCertificateLocation = {
    CurrentUserMy: "CurrentUserMy",
    LocalMachineMy: "LocalMachineMy",
    Unknown: "Unknown",
} as const;

/**
 * Public Certificate Location
 */
export type PublicCertificateLocation = (typeof PublicCertificateLocation)[keyof typeof PublicCertificateLocation];

export const RedundancyMode = {
    None: "None",
    Manual: "Manual",
    Failover: "Failover",
    ActiveActive: "ActiveActive",
    GeoRedundant: "GeoRedundant",
} as const;

/**
 * Site redundancy mode
 */
export type RedundancyMode = (typeof RedundancyMode)[keyof typeof RedundancyMode];

export const RouteType = {
    DEFAULT: "DEFAULT",
    INHERITED: "INHERITED",
    STATIC: "STATIC",
} as const;

/**
 * The type of route this is:
 * DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
 * INHERITED - Routes inherited from the real Virtual Network routes
 * STATIC - Static route set on the app only
 *
 * These values will be used for syncing an app's routes with those from a Virtual Network.
 */
export type RouteType = (typeof RouteType)[keyof typeof RouteType];

export const ScmType = {
    None: "None",
    Dropbox: "Dropbox",
    Tfs: "Tfs",
    LocalGit: "LocalGit",
    GitHub: "GitHub",
    CodePlexGit: "CodePlexGit",
    CodePlexHg: "CodePlexHg",
    BitbucketGit: "BitbucketGit",
    BitbucketHg: "BitbucketHg",
    ExternalGit: "ExternalGit",
    ExternalHg: "ExternalHg",
    OneDrive: "OneDrive",
    VSO: "VSO",
} as const;

/**
 * SCM type.
 */
export type ScmType = (typeof ScmType)[keyof typeof ScmType];

export const SiteLoadBalancing = {
    WeightedRoundRobin: "WeightedRoundRobin",
    LeastRequests: "LeastRequests",
    LeastResponseTime: "LeastResponseTime",
    WeightedTotalTraffic: "WeightedTotalTraffic",
    RequestHash: "RequestHash",
} as const;

/**
 * Site load balancing.
 */
export type SiteLoadBalancing = (typeof SiteLoadBalancing)[keyof typeof SiteLoadBalancing];

export const SslState = {
    Disabled: "Disabled",
    SniEnabled: "SniEnabled",
    IpBasedEnabled: "IpBasedEnabled",
} as const;

/**
 * SSL type.
 */
export type SslState = (typeof SslState)[keyof typeof SslState];

export const SupportedTlsVersions = {
    _1_0: "1.0",
    _1_1: "1.1",
    _1_2: "1.2",
} as const;

/**
 * MinTlsVersion: configures the minimum version of TLS required for SSL requests
 */
export type SupportedTlsVersions = (typeof SupportedTlsVersions)[keyof typeof SupportedTlsVersions];

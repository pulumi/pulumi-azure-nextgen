// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ClusterSkuNameEnum = {
    CapacityReservation: "CapacityReservation",
} as const;

/**
 * The name of the SKU.
 */
export type ClusterSkuNameEnum = (typeof ClusterSkuNameEnum)[keyof typeof ClusterSkuNameEnum];

export const DataSourceKind = {
    WindowsEvent: "WindowsEvent",
    WindowsPerformanceCounter: "WindowsPerformanceCounter",
    IISLogs: "IISLogs",
    LinuxSyslog: "LinuxSyslog",
    LinuxSyslogCollection: "LinuxSyslogCollection",
    LinuxPerformanceObject: "LinuxPerformanceObject",
    LinuxPerformanceCollection: "LinuxPerformanceCollection",
    CustomLog: "CustomLog",
    CustomLogCollection: "CustomLogCollection",
    AzureAuditLog: "AzureAuditLog",
    AzureActivityLog: "AzureActivityLog",
    GenericDataSource: "GenericDataSource",
    ChangeTrackingCustomPath: "ChangeTrackingCustomPath",
    ChangeTrackingPath: "ChangeTrackingPath",
    ChangeTrackingServices: "ChangeTrackingServices",
    ChangeTrackingDataTypeConfiguration: "ChangeTrackingDataTypeConfiguration",
    ChangeTrackingDefaultRegistry: "ChangeTrackingDefaultRegistry",
    ChangeTrackingRegistry: "ChangeTrackingRegistry",
    ChangeTrackingLinuxPath: "ChangeTrackingLinuxPath",
    LinuxChangeTrackingPath: "LinuxChangeTrackingPath",
    ChangeTrackingContentLocation: "ChangeTrackingContentLocation",
    WindowsTelemetry: "WindowsTelemetry",
    Office365: "Office365",
    SecurityWindowsBaselineConfiguration: "SecurityWindowsBaselineConfiguration",
    SecurityCenterSecurityWindowsBaselineConfiguration: "SecurityCenterSecurityWindowsBaselineConfiguration",
    SecurityEventCollectionConfiguration: "SecurityEventCollectionConfiguration",
    SecurityInsightsSecurityEventCollectionConfiguration: "SecurityInsightsSecurityEventCollectionConfiguration",
    ImportComputerGroup: "ImportComputerGroup",
    NetworkMonitoring: "NetworkMonitoring",
    Itsm: "Itsm",
    DnsAnalytics: "DnsAnalytics",
    ApplicationInsights: "ApplicationInsights",
    SqlDataClassification: "SqlDataClassification",
} as const;

/**
 * The kind of the DataSource.
 */
export type DataSourceKind = (typeof DataSourceKind)[keyof typeof DataSourceKind];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const LinkedServiceEntityStatus = {
    Succeeded: "Succeeded",
    Deleting: "Deleting",
    ProvisioningAccount: "ProvisioningAccount",
    Updating: "Updating",
} as const;

/**
 * The provisioning state of the linked service.
 */
export type LinkedServiceEntityStatus = (typeof LinkedServiceEntityStatus)[keyof typeof LinkedServiceEntityStatus];

export const PublicNetworkAccessType = {
    /**
     * Enables connectivity to Log Analytics through public DNS.
     */
    Enabled: "Enabled",
    /**
     * Disables public connectivity to Log Analytics through public DNS.
     */
    Disabled: "Disabled",
} as const;

/**
 * The network access type for accessing Log Analytics query.
 */
export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const WorkspaceEntityStatus = {
    Creating: "Creating",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Deleting: "Deleting",
    ProvisioningAccount: "ProvisioningAccount",
    Updating: "Updating",
} as const;

/**
 * The provisioning state of the workspace.
 */
export type WorkspaceEntityStatus = (typeof WorkspaceEntityStatus)[keyof typeof WorkspaceEntityStatus];

export const WorkspaceSkuNameEnum = {
    Free: "Free",
    Standard: "Standard",
    Premium: "Premium",
    PerNode: "PerNode",
    PerGB2018: "PerGB2018",
    Standalone: "Standalone",
    CapacityReservation: "CapacityReservation",
} as const;

/**
 * The name of the SKU.
 */
export type WorkspaceSkuNameEnum = (typeof WorkspaceSkuNameEnum)[keyof typeof WorkspaceSkuNameEnum];
// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AgentAutoUpdateStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * A value indicating whether the auto update is enabled.
 */
export type AgentAutoUpdateStatus = (typeof AgentAutoUpdateStatus)[keyof typeof AgentAutoUpdateStatus];

export const BackupItemType = {
    Invalid: "Invalid",
    VM: "VM",
    FileFolder: "FileFolder",
    AzureSqlDb: "AzureSqlDb",
    SQLDB: "SQLDB",
    Exchange: "Exchange",
    Sharepoint: "Sharepoint",
    VMwareVM: "VMwareVM",
    SystemState: "SystemState",
    Client: "Client",
    GenericDataSource: "GenericDataSource",
    SQLDataBase: "SQLDataBase",
    AzureFileShare: "AzureFileShare",
    SAPHanaDatabase: "SAPHanaDatabase",
    SAPAseDatabase: "SAPAseDatabase",
} as const;

/**
 * Type of backup items associated with this container.
 */
export type BackupItemType = (typeof BackupItemType)[keyof typeof BackupItemType];

export const BackupManagementType = {
    Invalid: "Invalid",
    AzureIaasVM: "AzureIaasVM",
    MAB: "MAB",
    DPM: "DPM",
    AzureBackupServer: "AzureBackupServer",
    AzureSql: "AzureSql",
    AzureStorage: "AzureStorage",
    AzureWorkload: "AzureWorkload",
    DefaultBackup: "DefaultBackup",
} as const;

/**
 * Type of backup management for the backed up item.
 */
export type BackupManagementType = (typeof BackupManagementType)[keyof typeof BackupManagementType];

export const ContainerType = {
    Invalid: "Invalid",
    Unknown: "Unknown",
    IaasVMContainer: "IaasVMContainer",
    IaasVMServiceContainer: "IaasVMServiceContainer",
    DPMContainer: "DPMContainer",
    AzureBackupServerContainer: "AzureBackupServerContainer",
    MABContainer: "MABContainer",
    Cluster: "Cluster",
    AzureSqlContainer: "AzureSqlContainer",
    Windows: "Windows",
    VCenter: "VCenter",
    VMAppContainer: "VMAppContainer",
    SQLAGWorkLoadContainer: "SQLAGWorkLoadContainer",
    StorageContainer: "StorageContainer",
    GenericContainer: "GenericContainer",
} as const;

/**
 * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
 * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
 * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
 * Backup is VMAppContainer
 */
export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

export const CreateMode = {
    Invalid: "Invalid",
    Default: "Default",
    Recover: "Recover",
} as const;

/**
 * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DataSourceType = {
    Invalid: "Invalid",
    VM: "VM",
    FileFolder: "FileFolder",
    AzureSqlDb: "AzureSqlDb",
    SQLDB: "SQLDB",
    Exchange: "Exchange",
    Sharepoint: "Sharepoint",
    VMwareVM: "VMwareVM",
    SystemState: "SystemState",
    Client: "Client",
    GenericDataSource: "GenericDataSource",
    SQLDataBase: "SQLDataBase",
    AzureFileShare: "AzureFileShare",
    SAPHanaDatabase: "SAPHanaDatabase",
    SAPAseDatabase: "SAPAseDatabase",
} as const;

/**
 * Type of workload this item represents.
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

export const DayOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const DiskAccountType = {
    Standard_LRS: "Standard_LRS",
    Premium_LRS: "Premium_LRS",
    StandardSSD_LRS: "StandardSSD_LRS",
} as const;

/**
 * The disk type.
 */
export type DiskAccountType = (typeof DiskAccountType)[keyof typeof DiskAccountType];

export const FailoverDeploymentModel = {
    NotApplicable: "NotApplicable",
    Classic: "Classic",
    ResourceManager: "ResourceManager",
} as const;

/**
 * The failover deployment model.
 */
export type FailoverDeploymentModel = (typeof FailoverDeploymentModel)[keyof typeof FailoverDeploymentModel];

export const HealthStatus = {
    Passed: "Passed",
    ActionRequired: "ActionRequired",
    ActionSuggested: "ActionSuggested",
    Invalid: "Invalid",
} as const;

/**
 * Health status of protected item.
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

export const LastBackupStatus = {
    Invalid: "Invalid",
    Healthy: "Healthy",
    Unhealthy: "Unhealthy",
    IRPending: "IRPending",
} as const;

/**
 * Last backup operation status. Possible values: Healthy, Unhealthy.
 */
export type LastBackupStatus = (typeof LastBackupStatus)[keyof typeof LastBackupStatus];

export const LicenseType = {
    NotSpecified: "NotSpecified",
    NoLicenseType: "NoLicenseType",
    WindowsServer: "WindowsServer",
} as const;

/**
 * The license type.
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const MonthOfYear = {
    Invalid: "Invalid",
    January: "January",
    February: "February",
    March: "March",
    April: "April",
    May: "May",
    June: "June",
    July: "July",
    August: "August",
    September: "September",
    October: "October",
    November: "November",
    December: "December",
} as const;

export type MonthOfYear = (typeof MonthOfYear)[keyof typeof MonthOfYear];

export const OperationType = {
    Invalid: "Invalid",
    Register: "Register",
    Reregister: "Reregister",
} as const;

/**
 * Re-Do Operation
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

export const PolicyType = {
    Invalid: "Invalid",
    Full: "Full",
    Differential: "Differential",
    Log: "Log",
    CopyOnlyFull: "CopyOnlyFull",
    Incremental: "Incremental",
} as const;

/**
 * Type of backup policy type
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

export const PossibleOperationsDirections = {
    PrimaryToRecovery: "PrimaryToRecovery",
    RecoveryToPrimary: "RecoveryToPrimary",
} as const;

export type PossibleOperationsDirections = (typeof PossibleOperationsDirections)[keyof typeof PossibleOperationsDirections];

export const PrivateEndpointConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Gets or sets the status
 */
export type PrivateEndpointConnectionStatus = (typeof PrivateEndpointConnectionStatus)[keyof typeof PrivateEndpointConnectionStatus];

export const ProtectedItemHealthStatus = {
    Invalid: "Invalid",
    Healthy: "Healthy",
    Unhealthy: "Unhealthy",
    NotReachable: "NotReachable",
    IRPending: "IRPending",
} as const;

/**
 * Health status of the backup item, evaluated based on last heartbeat received
 */
export type ProtectedItemHealthStatus = (typeof ProtectedItemHealthStatus)[keyof typeof ProtectedItemHealthStatus];

export const ProtectedItemState = {
    Invalid: "Invalid",
    IRPending: "IRPending",
    Protected: "Protected",
    ProtectionError: "ProtectionError",
    ProtectionStopped: "ProtectionStopped",
    ProtectionPaused: "ProtectionPaused",
} as const;

/**
 * Protection state of the backup engine
 */
export type ProtectedItemState = (typeof ProtectedItemState)[keyof typeof ProtectedItemState];

export const ProtectionState = {
    Invalid: "Invalid",
    IRPending: "IRPending",
    Protected: "Protected",
    ProtectionError: "ProtectionError",
    ProtectionStopped: "ProtectionStopped",
    ProtectionPaused: "ProtectionPaused",
} as const;

/**
 * Backup state of this backup item.
 */
export type ProtectionState = (typeof ProtectionState)[keyof typeof ProtectionState];

export const ProtectionStatus = {
    Invalid: "Invalid",
    NotProtected: "NotProtected",
    Protecting: "Protecting",
    Protected: "Protected",
    ProtectionFailed: "ProtectionFailed",
} as const;

/**
 * Backup state of this backup item.
 */
export type ProtectionStatus = (typeof ProtectionStatus)[keyof typeof ProtectionStatus];

export const ProvisioningState = {
    Succeeded: "Succeeded",
    Deleting: "Deleting",
    Failed: "Failed",
    Pending: "Pending",
} as const;

/**
 * Gets or sets provisioning state of the private endpoint connection
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const RecoveryPlanGroupType = {
    Shutdown: "Shutdown",
    Boot: "Boot",
    Failover: "Failover",
} as const;

/**
 * The group type.
 */
export type RecoveryPlanGroupType = (typeof RecoveryPlanGroupType)[keyof typeof RecoveryPlanGroupType];

export const ReplicationProtectedItemOperation = {
    ReverseReplicate: "ReverseReplicate",
    Commit: "Commit",
    PlannedFailover: "PlannedFailover",
    UnplannedFailover: "UnplannedFailover",
    DisableProtection: "DisableProtection",
    TestFailover: "TestFailover",
    TestFailoverCleanup: "TestFailoverCleanup",
    Failback: "Failback",
    FinalizeFailback: "FinalizeFailback",
    ChangePit: "ChangePit",
    RepairReplication: "RepairReplication",
    SwitchProtection: "SwitchProtection",
    CompleteMigration: "CompleteMigration",
} as const;

export type ReplicationProtectedItemOperation = (typeof ReplicationProtectedItemOperation)[keyof typeof ReplicationProtectedItemOperation];

export const ResourceHealthStatus = {
    Healthy: "Healthy",
    TransientDegraded: "TransientDegraded",
    PersistentDegraded: "PersistentDegraded",
    TransientUnhealthy: "TransientUnhealthy",
    PersistentUnhealthy: "PersistentUnhealthy",
    Invalid: "Invalid",
} as const;

/**
 * Resource Health Status
 */
export type ResourceHealthStatus = (typeof ResourceHealthStatus)[keyof typeof ResourceHealthStatus];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RetentionDurationType = {
    Invalid: "Invalid",
    Days: "Days",
    Weeks: "Weeks",
    Months: "Months",
    Years: "Years",
} as const;

/**
 * Retention duration type of retention policy.
 */
export type RetentionDurationType = (typeof RetentionDurationType)[keyof typeof RetentionDurationType];

export const RetentionScheduleFormat = {
    Invalid: "Invalid",
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

/**
 * Retention schedule format for yearly retention policy.
 */
export type RetentionScheduleFormat = (typeof RetentionScheduleFormat)[keyof typeof RetentionScheduleFormat];

export const ScheduleRunType = {
    Invalid: "Invalid",
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

/**
 * Frequency of the schedule operation of this policy.
 */
export type ScheduleRunType = (typeof ScheduleRunType)[keyof typeof ScheduleRunType];

export const SetMultiVmSyncStatus = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
 */
export type SetMultiVmSyncStatus = (typeof SetMultiVmSyncStatus)[keyof typeof SetMultiVmSyncStatus];

export const SkuName = {
    Standard: "Standard",
    RS0: "RS0",
} as const;

/**
 * The Sku name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const WeekOfMonth = {
    First: "First",
    Second: "Second",
    Third: "Third",
    Fourth: "Fourth",
    Last: "Last",
    Invalid: "Invalid",
} as const;

export type WeekOfMonth = (typeof WeekOfMonth)[keyof typeof WeekOfMonth];

export const WorkloadType = {
    Invalid: "Invalid",
    VM: "VM",
    FileFolder: "FileFolder",
    AzureSqlDb: "AzureSqlDb",
    SQLDB: "SQLDB",
    Exchange: "Exchange",
    Sharepoint: "Sharepoint",
    VMwareVM: "VMwareVM",
    SystemState: "SystemState",
    Client: "Client",
    GenericDataSource: "GenericDataSource",
    SQLDataBase: "SQLDataBase",
    AzureFileShare: "AzureFileShare",
    SAPHanaDatabase: "SAPHanaDatabase",
    SAPAseDatabase: "SAPAseDatabase",
} as const;

/**
 * Type of workload for the backup management
 */
export type WorkloadType = (typeof WorkloadType)[keyof typeof WorkloadType];
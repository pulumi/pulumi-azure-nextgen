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

export const LicenseType = {
    NotSpecified: "NotSpecified",
    NoLicenseType: "NoLicenseType",
    WindowsServer: "WindowsServer",
} as const;

/**
 * The license type.
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const PossibleOperationsDirections = {
    PrimaryToRecovery: "PrimaryToRecovery",
    RecoveryToPrimary: "RecoveryToPrimary",
} as const;

export type PossibleOperationsDirections = (typeof PossibleOperationsDirections)[keyof typeof PossibleOperationsDirections];

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

export const SetMultiVmSyncStatus = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
 */
export type SetMultiVmSyncStatus = (typeof SetMultiVmSyncStatus)[keyof typeof SetMultiVmSyncStatus];
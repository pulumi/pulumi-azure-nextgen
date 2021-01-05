// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const BackupScheduleType = {
    Manual: "Manual",
    Automated: "Automated",
} as const;

/**
 * Backup schedule type.
 */
export type BackupScheduleType = (typeof BackupScheduleType)[keyof typeof BackupScheduleType];

export const ConnectivityType = {
    LOCAL: "LOCAL",
    PRIVATE: "PRIVATE",
    PUBLIC: "PUBLIC",
} as const;

/**
 * SQL Server connectivity option.
 */
export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType];

export const DayOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * Day of week to apply the patch on.
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const DiskConfigurationType = {
    NEW: "NEW",
    EXTEND: "EXTEND",
    ADD: "ADD",
} as const;

/**
 * Disk configuration to apply to SQL Server.
 */
export type DiskConfigurationType = (typeof DiskConfigurationType)[keyof typeof DiskConfigurationType];

export const FullBackupFrequencyType = {
    Daily: "Daily",
    Weekly: "Weekly",
} as const;

/**
 * Frequency of full backups. In both cases, full backups begin during the next scheduled time window.
 */
export type FullBackupFrequencyType = (typeof FullBackupFrequencyType)[keyof typeof FullBackupFrequencyType];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const SqlImageSku = {
    Developer: "Developer",
    Express: "Express",
    Standard: "Standard",
    Enterprise: "Enterprise",
    Web: "Web",
} as const;

/**
 * SQL Server edition type.
 */
export type SqlImageSku = (typeof SqlImageSku)[keyof typeof SqlImageSku];

export const SqlManagementMode = {
    Full: "Full",
    LightWeight: "LightWeight",
    NoAgent: "NoAgent",
} as const;

/**
 * SQL Server Management type.
 */
export type SqlManagementMode = (typeof SqlManagementMode)[keyof typeof SqlManagementMode];

export const SqlServerLicenseType = {
    PAYG: "PAYG",
    AHUB: "AHUB",
    DR: "DR",
} as const;

/**
 * SQL Server license type.
 */
export type SqlServerLicenseType = (typeof SqlServerLicenseType)[keyof typeof SqlServerLicenseType];

export const SqlVmGroupImageSku = {
    Developer: "Developer",
    Enterprise: "Enterprise",
} as const;

/**
 * SQL image sku.
 */
export type SqlVmGroupImageSku = (typeof SqlVmGroupImageSku)[keyof typeof SqlVmGroupImageSku];

export const SqlWorkloadType = {
    GENERAL: "GENERAL",
    OLTP: "OLTP",
    DW: "DW",
} as const;

/**
 * SQL Server workload type.
 */
export type SqlWorkloadType = (typeof SqlWorkloadType)[keyof typeof SqlWorkloadType];

export const StorageWorkloadType = {
    GENERAL: "GENERAL",
    OLTP: "OLTP",
    DW: "DW",
} as const;

/**
 * Storage workload type.
 */
export type StorageWorkloadType = (typeof StorageWorkloadType)[keyof typeof StorageWorkloadType];
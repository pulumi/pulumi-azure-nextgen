// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const CustomImageOsType = {
    Windows: "Windows",
    Linux: "Linux",
    None: "None",
} as const;

/**
 * The OS type of the custom image.
 */
export type CustomImageOsType = (typeof CustomImageOsType)[keyof typeof CustomImageOsType];

export const EnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the schedule.
 */
export type EnableStatus = (typeof EnableStatus)[keyof typeof EnableStatus];

export const LabStorageType = {
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * The type of the lab storage.
 */
export type LabStorageType = (typeof LabStorageType)[keyof typeof LabStorageType];

export const LinuxOsState = {
    NonDeprovisioned: "NonDeprovisioned",
    DeprovisionRequested: "DeprovisionRequested",
    DeprovisionApplied: "DeprovisionApplied",
} as const;

/**
 * The state of the Linux OS.
 */
export type LinuxOsState = (typeof LinuxOsState)[keyof typeof LinuxOsState];

export const PolicyEvaluatorType = {
    AllowedValuesPolicy: "AllowedValuesPolicy",
    MaxValuePolicy: "MaxValuePolicy",
} as const;

/**
 * The evaluator type of the policy.
 */
export type PolicyEvaluatorType = (typeof PolicyEvaluatorType)[keyof typeof PolicyEvaluatorType];

export const PolicyFactName = {
    UserOwnedLabVmCount: "UserOwnedLabVmCount",
    LabVmCount: "LabVmCount",
    LabVmSize: "LabVmSize",
    GalleryImage: "GalleryImage",
    UserOwnedLabVmCountInSubnet: "UserOwnedLabVmCountInSubnet",
} as const;

/**
 * The fact name of the policy.
 */
export type PolicyFactName = (typeof PolicyFactName)[keyof typeof PolicyFactName];

export const PolicyStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the policy.
 */
export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];

export const SourceControlType = {
    VsoGit: "VsoGit",
    GitHub: "GitHub",
} as const;

/**
 * The type of the artifact source.
 */
export type SourceControlType = (typeof SourceControlType)[keyof typeof SourceControlType];

export const TaskType = {
    LabVmsShutdownTask: "LabVmsShutdownTask",
    LabVmsStartupTask: "LabVmsStartupTask",
    LabBillingTask: "LabBillingTask",
} as const;

/**
 * The task type of the schedule.
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

export const UsagePermissionType = {
    Default: "Default",
    Deny: "Deny",
    Allow: "Allow",
} as const;

/**
 * Indicates whether public IP addresses can be assigned to virtual machines on this subnet.
 */
export type UsagePermissionType = (typeof UsagePermissionType)[keyof typeof UsagePermissionType];

export const WindowsOsState = {
    NonSysprepped: "NonSysprepped",
    SysprepRequested: "SysprepRequested",
    SysprepApplied: "SysprepApplied",
} as const;

/**
 * The state of the Windows OS.
 */
export type WindowsOsState = (typeof WindowsOsState)[keyof typeof WindowsOsState];

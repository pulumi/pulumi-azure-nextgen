// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ApplicationGroupType = {
    RemoteApp: "RemoteApp",
    Desktop: "Desktop",
} as const;

/**
 * Resource Type of ApplicationGroup.
 */
export type ApplicationGroupType = (typeof ApplicationGroupType)[keyof typeof ApplicationGroupType];

export const CommandLineSetting = {
    DoNotAllow: "DoNotAllow",
    Allow: "Allow",
    Require: "Require",
} as const;

/**
 * Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
 */
export type CommandLineSetting = (typeof CommandLineSetting)[keyof typeof CommandLineSetting];

export const HostPoolType = {
    Personal: "Personal",
    Pooled: "Pooled",
} as const;

/**
 * HostPool type for desktop.
 */
export type HostPoolType = (typeof HostPoolType)[keyof typeof HostPoolType];

export const LoadBalancerType = {
    BreadthFirst: "BreadthFirst",
    DepthFirst: "DepthFirst",
    Persistent: "Persistent",
} as const;

/**
 * The type of the load balancer.
 */
export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const PersonalDesktopAssignmentType = {
    Automatic: "Automatic",
    Direct: "Direct",
} as const;

/**
 * PersonalDesktopAssignment type for HostPool.
 */
export type PersonalDesktopAssignmentType = (typeof PersonalDesktopAssignmentType)[keyof typeof PersonalDesktopAssignmentType];

export const PreferredAppGroupType = {
    None: "None",
    Desktop: "Desktop",
    RailApplications: "RailApplications",
} as const;

/**
 * The type of preferred application group type, default to Desktop Application Group
 */
export type PreferredAppGroupType = (typeof PreferredAppGroupType)[keyof typeof PreferredAppGroupType];

export const RegistrationTokenOperation = {
    Delete: "Delete",
    None: "None",
    Update: "Update",
} as const;

/**
 * The type of resetting the token.
 */
export type RegistrationTokenOperation = (typeof RegistrationTokenOperation)[keyof typeof RegistrationTokenOperation];

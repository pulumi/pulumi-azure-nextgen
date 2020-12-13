// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AuthenticationType = {
    None: "None",
    WindowsAuthentication: "WindowsAuthentication",
    SqlAuthentication: "SqlAuthentication",
    ActiveDirectoryIntegrated: "ActiveDirectoryIntegrated",
    ActiveDirectoryPassword: "ActiveDirectoryPassword",
} as const;

/**
 * Authentication type to use for connection
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const ProjectSourcePlatform = {
    SQL: "SQL",
    Unknown: "Unknown",
} as const;

/**
 * Source platform for the project
 */
export type ProjectSourcePlatform = (typeof ProjectSourcePlatform)[keyof typeof ProjectSourcePlatform];

export const ProjectTargetPlatform = {
    SQLDB: "SQLDB",
    SQLMI: "SQLMI",
    Unknown: "Unknown",
} as const;

/**
 * Target platform for the project
 */
export type ProjectTargetPlatform = (typeof ProjectTargetPlatform)[keyof typeof ProjectTargetPlatform];

export const ServerLevelPermissionsGroup = {
    Default: "Default",
    MigrationFromSqlServerToAzureDB: "MigrationFromSqlServerToAzureDB",
} as const;

/**
 * Permission group for validations
 */
export type ServerLevelPermissionsGroup = (typeof ServerLevelPermissionsGroup)[keyof typeof ServerLevelPermissionsGroup];

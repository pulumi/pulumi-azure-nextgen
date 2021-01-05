// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AccessRights = {
    Manage: "Manage",
    Send: "Send",
    Listen: "Listen",
} as const;

export type AccessRights = (typeof AccessRights)[keyof typeof AccessRights];

export const EntityStatus = {
    Active: "Active",
    Disabled: "Disabled",
    Restoring: "Restoring",
    SendDisabled: "SendDisabled",
    ReceiveDisabled: "ReceiveDisabled",
    Creating: "Creating",
    Deleting: "Deleting",
    Renaming: "Renaming",
    Unknown: "Unknown",
} as const;

/**
 * Enumerates the possible values for the status of the Event Hub.
 */
export type EntityStatus = (typeof EntityStatus)[keyof typeof EntityStatus];

export const NamespaceState = {
    Unknown: "Unknown",
    Creating: "Creating",
    Created: "Created",
    Activating: "Activating",
    Enabling: "Enabling",
    Active: "Active",
    Disabling: "Disabling",
    Disabled: "Disabled",
    SoftDeleting: "SoftDeleting",
    SoftDeleted: "SoftDeleted",
    Removing: "Removing",
    Removed: "Removed",
    Failed: "Failed",
} as const;

/**
 * State of the Namespace.
 */
export type NamespaceState = (typeof NamespaceState)[keyof typeof NamespaceState];

export const SkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * Name of this SKU.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * The billing tier of this particular SKU.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];
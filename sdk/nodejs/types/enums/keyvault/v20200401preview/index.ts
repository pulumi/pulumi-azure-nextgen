// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const CertificatePermissions = {
    Get: "get",
    List: "list",
    Delete: "delete",
    Create: "create",
    Import: "import",
    Update: "update",
    Managecontacts: "managecontacts",
    Getissuers: "getissuers",
    Listissuers: "listissuers",
    Setissuers: "setissuers",
    Deleteissuers: "deleteissuers",
    Manageissuers: "manageissuers",
    Recover: "recover",
    Purge: "purge",
    Backup: "backup",
    Restore: "restore",
} as const;

export type CertificatePermissions = (typeof CertificatePermissions)[keyof typeof CertificatePermissions];

export const CreateMode = {
    Recover: "recover",
    Default: "default",
} as const;

/**
 * The vault's create mode to indicate whether the vault need to be recovered or not.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const KeyPermissions = {
    Encrypt: "encrypt",
    Decrypt: "decrypt",
    WrapKey: "wrapKey",
    UnwrapKey: "unwrapKey",
    Sign: "sign",
    Verify: "verify",
    Get: "get",
    List: "list",
    Create: "create",
    Update: "update",
    Import: "import",
    Delete: "delete",
    Backup: "backup",
    Restore: "restore",
    Recover: "recover",
    Purge: "purge",
} as const;

export type KeyPermissions = (typeof KeyPermissions)[keyof typeof KeyPermissions];

export const ManagedHsmSkuFamily = {
    B: "B",
} as const;

/**
 * SKU Family of the managed HSM Pool
 */
export type ManagedHsmSkuFamily = (typeof ManagedHsmSkuFamily)[keyof typeof ManagedHsmSkuFamily];

export const ManagedHsmSkuName = {
    Standard_B1: "Standard_B1",
    Custom_B32: "Custom_B32",
} as const;

/**
 * SKU of the managed HSM Pool
 */
export type ManagedHsmSkuName = (typeof ManagedHsmSkuName)[keyof typeof ManagedHsmSkuName];

export const NetworkRuleAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
 */
export type NetworkRuleAction = (typeof NetworkRuleAction)[keyof typeof NetworkRuleAction];

export const NetworkRuleBypassOptions = {
    AzureServices: "AzureServices",
    None: "None",
} as const;

/**
 * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
 */
export type NetworkRuleBypassOptions = (typeof NetworkRuleBypassOptions)[keyof typeof NetworkRuleBypassOptions];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Indicates whether the connection has been approved, rejected or removed by the key vault owner.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const SecretPermissions = {
    Get: "get",
    List: "list",
    Set: "set",
    Delete: "delete",
    Backup: "backup",
    Restore: "restore",
    Recover: "recover",
    Purge: "purge",
} as const;

export type SecretPermissions = (typeof SecretPermissions)[keyof typeof SecretPermissions];

export const SkuFamily = {
    A: "A",
} as const;

/**
 * SKU family name
 */
export type SkuFamily = (typeof SkuFamily)[keyof typeof SkuFamily];

export const SkuName = {
    Standard: "standard",
    Premium: "premium",
} as const;

/**
 * SKU name to specify whether the key vault is a standard vault or a premium vault.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const StoragePermissions = {
    Get: "get",
    List: "list",
    Delete: "delete",
    Set: "set",
    Update: "update",
    Regeneratekey: "regeneratekey",
    Recover: "recover",
    Purge: "purge",
    Backup: "backup",
    Restore: "restore",
    Setsas: "setsas",
    Listsas: "listsas",
    Getsas: "getsas",
    Deletesas: "deletesas",
} as const;

export type StoragePermissions = (typeof StoragePermissions)[keyof typeof StoragePermissions];

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AccessTier = {
    Hot: "Hot",
    Cool: "Cool",
} as const;

/**
 * Required for storage accounts where kind = BlobStorage. The access tier used for billing.
 */
export type AccessTier = (typeof AccessTier)[keyof typeof AccessTier];

export const Action = {
    Allow: "Allow",
} as const;

/**
 * The action of virtual network rule.
 */
export type Action = (typeof Action)[keyof typeof Action];

export const Bypass = {
    None: "None",
    Logging: "Logging",
    Metrics: "Metrics",
    AzureServices: "AzureServices",
} as const;

/**
 * Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
 */
export type Bypass = (typeof Bypass)[keyof typeof Bypass];

export const DefaultAction = {
    Allow: "Allow",
    Deny: "Deny",
} as const;

/**
 * Specifies the default action of allow or deny when no other rules match.
 */
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction];

export const DirectoryServiceOptions = {
    None: "None",
    AADDS: "AADDS",
    AD: "AD",
} as const;

/**
 * Indicates the directory service used.
 */
export type DirectoryServiceOptions = (typeof DirectoryServiceOptions)[keyof typeof DirectoryServiceOptions];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const KeySource = {
    Microsoft_Storage: "Microsoft.Storage",
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

/**
 * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const Kind = {
    Storage: "Storage",
    StorageV2: "StorageV2",
    BlobStorage: "BlobStorage",
    FileStorage: "FileStorage",
    BlockBlobStorage: "BlockBlobStorage",
} as const;

/**
 * Required. Indicates the type of storage account.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const LargeFileSharesState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
 */
export type LargeFileSharesState = (typeof LargeFileSharesState)[keyof typeof LargeFileSharesState];

export const MinimumTlsVersion = {
    TLS1_0: "TLS1_0",
    TLS1_1: "TLS1_1",
    TLS1_2: "TLS1_2",
} as const;

/**
 * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
 */
export type MinimumTlsVersion = (typeof MinimumTlsVersion)[keyof typeof MinimumTlsVersion];

export const PublicAccess = {
    Container: "Container",
    Blob: "Blob",
    None: "None",
} as const;

/**
 * Specifies whether data in the container may be accessed publicly and the level of access.
 */
export type PublicAccess = (typeof PublicAccess)[keyof typeof PublicAccess];

export const ReasonCode = {
    QuotaId: "QuotaId",
    NotAvailableForSubscription: "NotAvailableForSubscription",
} as const;

/**
 * The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The "NotAvailableForSubscription" is related to capacity at DC.
 */
export type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode];

export const RuleType = {
    Lifecycle: "Lifecycle",
} as const;

/**
 * The valid value is Lifecycle
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

export const SkuName = {
    Standard_LRS: "Standard_LRS",
    Standard_GRS: "Standard_GRS",
    Standard_RAGRS: "Standard_RAGRS",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
    Premium_ZRS: "Premium_ZRS",
    Standard_GZRS: "Standard_GZRS",
    Standard_RAGZRS: "Standard_RAGZRS",
} as const;

/**
 * Gets or sets the SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const State = {
    Provisioning: "provisioning",
    Deprovisioning: "deprovisioning",
    Succeeded: "succeeded",
    Failed: "failed",
    NetworkSourceDeleted: "networkSourceDeleted",
} as const;

/**
 * Gets the state of virtual network rule.
 */
export type State = (typeof State)[keyof typeof State];

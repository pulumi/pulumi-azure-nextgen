// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AzureSkuName = {
    Standard_DS13_v2_1TB_PS: "Standard_DS13_v2+1TB_PS",
    Standard_DS13_v2_2TB_PS: "Standard_DS13_v2+2TB_PS",
    Standard_DS14_v2_3TB_PS: "Standard_DS14_v2+3TB_PS",
    Standard_DS14_v2_4TB_PS: "Standard_DS14_v2+4TB_PS",
    Standard_D13_v2: "Standard_D13_v2",
    Standard_D14_v2: "Standard_D14_v2",
    Standard_L8s: "Standard_L8s",
    Standard_L16s: "Standard_L16s",
    Standard_D11_v2: "Standard_D11_v2",
    Standard_D12_v2: "Standard_D12_v2",
    Standard_L4s: "Standard_L4s",
    Dev_No_SLA_Standard_D11_v2: "Dev(No SLA)_Standard_D11_v2",
} as const;

/**
 * SKU name.
 */
export type AzureSkuName = (typeof AzureSkuName)[keyof typeof AzureSkuName];

export const AzureSkuTier = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * SKU tier.
 */
export type AzureSkuTier = (typeof AzureSkuTier)[keyof typeof AzureSkuTier];

export const DefaultPrincipalsModificationKind = {
    Union: "Union",
    Replace: "Replace",
    None: "None",
} as const;

/**
 * The default principals modification kind
 */
export type DefaultPrincipalsModificationKind = (typeof DefaultPrincipalsModificationKind)[keyof typeof DefaultPrincipalsModificationKind];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const Kind = {
    ReadWrite: "ReadWrite",
    ReadOnlyFollowing: "ReadOnlyFollowing",
} as const;

/**
 * Kind of the database
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

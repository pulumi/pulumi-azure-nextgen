// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AccountType = {
    Standard_LRS: "Standard_LRS",
    Standard_ZRS: "Standard_ZRS",
    Standard_GRS: "Standard_GRS",
    Standard_RAGRS: "Standard_RAGRS",
    Premium_LRS: "Premium_LRS",
} as const;

/**
 * Gets or sets the account type.
 */
export type AccountType = (typeof AccountType)[keyof typeof AccountType];

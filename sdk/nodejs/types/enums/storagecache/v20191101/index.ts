// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ProvisioningStateType = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Cancelled: "Cancelled",
    Creating: "Creating",
    Deleting: "Deleting",
    Updating: "Updating",
} as const;

/**
 * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
 */
export type ProvisioningStateType = (typeof ProvisioningStateType)[keyof typeof ProvisioningStateType];

export const StorageTargetType = {
    Nfs3: "nfs3",
    Clfs: "clfs",
    Unknown: "unknown",
} as const;

/**
 * Type of the Storage Target.
 */
export type StorageTargetType = (typeof StorageTargetType)[keyof typeof StorageTargetType];
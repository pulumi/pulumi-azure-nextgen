// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const PrivateEndpointConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Gets or sets the status
 */
export type PrivateEndpointConnectionStatus = (typeof PrivateEndpointConnectionStatus)[keyof typeof PrivateEndpointConnectionStatus];

export const ProvisioningState = {
    Succeeded: "Succeeded",
    Deleting: "Deleting",
    Failed: "Failed",
    Pending: "Pending",
} as const;

/**
 * Gets or sets provisioning state of the private endpoint connection
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];
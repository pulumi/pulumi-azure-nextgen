// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const SkuNameEnum = {
    CapacityReservation: "CapacityReservation",
} as const;

/**
 * The name of the SKU.
 */
export type SkuNameEnum = (typeof SkuNameEnum)[keyof typeof SkuNameEnum];

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const Kind = {
    ScheduleBased: "ScheduleBased",
} as const;

/**
 * Kind of synchronization
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const ShareKind = {
    CopyBased: "CopyBased",
    InPlace: "InPlace",
} as const;

/**
 * Share kind.
 */
export type ShareKind = (typeof ShareKind)[keyof typeof ShareKind];

export const Type = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * Identity Type
 */
export type Type = (typeof Type)[keyof typeof Type];
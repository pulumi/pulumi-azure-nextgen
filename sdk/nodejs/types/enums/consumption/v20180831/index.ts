// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const CategoryType = {
    Cost: "Cost",
    Usage: "Usage",
} as const;

/**
 * The category of the budget, whether the budget tracks cost or usage.
 */
export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

export const OperatorType = {
    EqualTo: "EqualTo",
    GreaterThan: "GreaterThan",
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
} as const;

/**
 * The comparison operator.
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const TimeGrainType = {
    Monthly: "Monthly",
    Quarterly: "Quarterly",
    Annually: "Annually",
} as const;

/**
 * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
 */
export type TimeGrainType = (typeof TimeGrainType)[keyof typeof TimeGrainType];

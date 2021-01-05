// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AccessPolicyRole = {
    Reader: "Reader",
    Contributor: "Contributor",
} as const;

/**
 * A role defining the data plane operations that a principal can perform on a Time Series Insights client.
 */
export type AccessPolicyRole = (typeof AccessPolicyRole)[keyof typeof AccessPolicyRole];

export const DataStringComparisonBehavior = {
    Ordinal: "Ordinal",
    OrdinalIgnoreCase: "OrdinalIgnoreCase",
} as const;

/**
 * The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
 */
export type DataStringComparisonBehavior = (typeof DataStringComparisonBehavior)[keyof typeof DataStringComparisonBehavior];

export const Kind = {
    Microsoft_EventHub: "Microsoft.EventHub",
    Microsoft_IoTHub: "Microsoft.IoTHub",
} as const;

/**
 * The kind of the event source.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const PropertyType = {
    String: "String",
} as const;

/**
 * The type of the property.
 */
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

export const ReferenceDataKeyPropertyType = {
    String: "String",
    Double: "Double",
    Bool: "Bool",
    DateTime: "DateTime",
} as const;

/**
 * The type of the key property.
 */
export type ReferenceDataKeyPropertyType = (typeof ReferenceDataKeyPropertyType)[keyof typeof ReferenceDataKeyPropertyType];

export const SkuName = {
    S1: "S1",
    S2: "S2",
} as const;

/**
 * The name of this SKU.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const StorageLimitExceededBehavior = {
    PurgeOldData: "PurgeOldData",
    PauseIngress: "PauseIngress",
} as const;

/**
 * The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
 */
export type StorageLimitExceededBehavior = (typeof StorageLimitExceededBehavior)[keyof typeof StorageLimitExceededBehavior];
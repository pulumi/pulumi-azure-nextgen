// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ArmServicePackageActivationMode = {
    /**
     * Indicates the application package activation mode will use shared process.
     */
    SharedProcess: "SharedProcess",
    /**
     * Indicates the application package activation mode will use exclusive process.
     */
    ExclusiveProcess: "ExclusiveProcess",
} as const;

/**
 * The activation Mode of the service package
 */
export type ArmServicePackageActivationMode = (typeof ArmServicePackageActivationMode)[keyof typeof ArmServicePackageActivationMode];

export const ArmUpgradeFailureAction = {
    /**
     * Indicates that a rollback of the upgrade will be performed by Service Fabric if the upgrade fails.
     */
    Rollback: "Rollback",
    /**
     * Indicates that a manual repair will need to be performed by the administrator if the upgrade fails. Service Fabric will not proceed to the next upgrade domain automatically.
     */
    Manual: "Manual",
} as const;

/**
 * The activation Mode of the service package
 */
export type ArmUpgradeFailureAction = (typeof ArmUpgradeFailureAction)[keyof typeof ArmUpgradeFailureAction];

export const ManagedIdentityType = {
    /**
     * Indicates that system assigned identity is associated with the resource.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Indicates that user assigned identity is associated with the resource.
     */
    UserAssigned: "UserAssigned",
    /**
     * Indicates that both system assigned and user assigned identity are associated with the resource.
     */
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    /**
     * Indicates that no identity is associated with the resource.
     */
    None: "None",
} as const;

/**
 * The type of managed identity for the resource.
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const MoveCost = {
    /**
     * Zero move cost. This value is zero.
     */
    Zero: "Zero",
    /**
     * Specifies the move cost of the service as Low. The value is 1.
     */
    Low: "Low",
    /**
     * Specifies the move cost of the service as Medium. The value is 2.
     */
    Medium: "Medium",
    /**
     * Specifies the move cost of the service as High. The value is 3.
     */
    High: "High",
} as const;

/**
 * Specifies the move cost for the service.
 */
export type MoveCost = (typeof MoveCost)[keyof typeof MoveCost];

export const PartitionScheme = {
    /**
     * Indicates the partition kind is invalid. All Service Fabric enumerations have the invalid type. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * Indicates that the partition is based on string names, and is a SingletonPartitionSchemeDescription object, The value is 1.
     */
    Singleton: "Singleton",
    /**
     * Indicates that the partition is based on Int64 key ranges, and is a UniformInt64RangePartitionSchemeDescription object. The value is 2.
     */
    UniformInt64Range: "UniformInt64Range",
    /**
     * Indicates that the partition is based on string names, and is a NamedPartitionSchemeDescription object. The value is 3
     */
    Named: "Named",
} as const;

/**
 * Specifies how the service is partitioned.
 */
export type PartitionScheme = (typeof PartitionScheme)[keyof typeof PartitionScheme];

export const ServiceCorrelationScheme = {
    /**
     * An invalid correlation scheme. Cannot be used. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * Indicates that this service has an affinity relationship with another service. Provided for backwards compatibility, consider preferring the Aligned or NonAlignedAffinity options. The value is 1.
     */
    Affinity: "Affinity",
    /**
     * Aligned affinity ensures that the primaries of the partitions of the affinitized services are collocated on the same nodes. This is the default and is the same as selecting the Affinity scheme. The value is 2.
     */
    AlignedAffinity: "AlignedAffinity",
    /**
     * Non-Aligned affinity guarantees that all replicas of each service will be placed on the same nodes. Unlike Aligned Affinity, this does not guarantee that replicas of particular role will be collocated. The value is 3.
     */
    NonAlignedAffinity: "NonAlignedAffinity",
} as const;

/**
 * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
 */
export type ServiceCorrelationScheme = (typeof ServiceCorrelationScheme)[keyof typeof ServiceCorrelationScheme];

export const ServiceKind = {
    /**
     * Indicates the service kind is invalid. All Service Fabric enumerations have the invalid type. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * Does not use Service Fabric to make its state highly available or reliable. The value is 1.
     */
    Stateless: "Stateless",
    /**
     * Uses Service Fabric to make its state or part of its state highly available and reliable. The value is 2.
     */
    Stateful: "Stateful",
} as const;

/**
 * The kind of service (Stateless or Stateful).
 */
export type ServiceKind = (typeof ServiceKind)[keyof typeof ServiceKind];

export const ServiceLoadMetricWeight = {
    /**
     * Disables resource balancing for this metric. This value is zero.
     */
    Zero: "Zero",
    /**
     * Specifies the metric weight of the service load as Low. The value is 1.
     */
    Low: "Low",
    /**
     * Specifies the metric weight of the service load as Medium. The value is 2.
     */
    Medium: "Medium",
    /**
     * Specifies the metric weight of the service load as High. The value is 3.
     */
    High: "High",
} as const;

/**
 * The service load metric relative weight, compared to other metrics configured for this service, as a number.
 */
export type ServiceLoadMetricWeight = (typeof ServiceLoadMetricWeight)[keyof typeof ServiceLoadMetricWeight];

export const ServicePlacementPolicyType = {
    /**
     * Indicates the type of the placement policy is invalid. All Service Fabric enumerations have the invalid type. The value is zero.
     */
    Invalid: "Invalid",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementInvalidDomainPolicyDescription, which indicates that a particular fault or upgrade domain cannot be used for placement of this service. The value is 1.
     */
    InvalidDomain: "InvalidDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementRequireDomainDistributionPolicyDescription indicating that the replicas of the service must be placed in a specific domain. The value is 2.
     */
    RequiredDomain: "RequiredDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementPreferPrimaryDomainPolicyDescription, which indicates that if possible the Primary replica for the partitions of the service should be located in a particular domain as an optimization. The value is 3.
     */
    PreferredPrimaryDomain: "PreferredPrimaryDomain",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementRequireDomainDistributionPolicyDescription, indicating that the system will disallow placement of any two replicas from the same partition in the same domain at any time. The value is 4.
     */
    RequiredDomainDistribution: "RequiredDomainDistribution",
    /**
     * Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementNonPartiallyPlaceServicePolicyDescription, which indicates that if possible all replicas of a particular partition of the service should be placed atomically. The value is 5.
     */
    NonPartiallyPlaceService: "NonPartiallyPlaceService",
} as const;

/**
 * The type of placement policy for a service fabric service. Following are the possible values.
 */
export type ServicePlacementPolicyType = (typeof ServicePlacementPolicyType)[keyof typeof ServicePlacementPolicyType];

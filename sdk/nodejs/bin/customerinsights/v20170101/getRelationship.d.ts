import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRelationship(args: GetRelationshipArgs, opts?: pulumi.InvokeOptions): Promise<GetRelationshipResult>;
export interface GetRelationshipArgs {
    /**
     * The name of the hub.
     */
    readonly hubName: string;
    /**
     * The name of the relationship.
     */
    readonly relationshipName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The relationship resource format.
 */
export interface GetRelationshipResult {
    /**
     * The Relationship Cardinality.
     */
    readonly cardinality?: string;
    /**
     * Localized descriptions for the Relationship.
     */
    readonly description?: {
        [key: string]: string;
    };
    /**
     * Localized display name for the Relationship.
     */
    readonly displayName?: {
        [key: string]: string;
    };
    /**
     * The expiry date time in UTC.
     */
    readonly expiryDateTimeUtc?: string;
    /**
     * The properties of the Relationship.
     */
    readonly fields?: outputs.customerinsights.v20170101.PropertyDefinitionResponse[];
    /**
     * Optional property to be used to map fields in profile to their strong ids in related profile.
     */
    readonly lookupMappings?: outputs.customerinsights.v20170101.RelationshipTypeMappingResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Profile type.
     */
    readonly profileType: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Related profile being referenced.
     */
    readonly relatedProfileType: string;
    /**
     * The relationship guid id.
     */
    readonly relationshipGuidId: string;
    /**
     * The Relationship name.
     */
    readonly relationshipName: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}

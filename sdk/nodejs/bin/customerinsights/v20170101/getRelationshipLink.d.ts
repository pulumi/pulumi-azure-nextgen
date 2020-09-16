import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRelationshipLink(args: GetRelationshipLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetRelationshipLinkResult>;
export interface GetRelationshipLinkArgs {
    /**
     * The name of the hub.
     */
    readonly hubName: string;
    /**
     * The name of the relationship link.
     */
    readonly relationshipLinkName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The relationship link resource format.
 */
export interface GetRelationshipLinkResult {
    /**
     * Localized descriptions for the Relationship Link.
     */
    readonly description?: {
        [key: string]: string;
    };
    /**
     * Localized display name for the Relationship Link.
     */
    readonly displayName?: {
        [key: string]: string;
    };
    /**
     * The InteractionType associated with the Relationship Link.
     */
    readonly interactionType: string;
    /**
     * The name of the Relationship Link.
     */
    readonly linkName: string;
    /**
     * The mappings between Interaction and Relationship fields.
     */
    readonly mappings?: outputs.customerinsights.v20170101.RelationshipLinkFieldMappingResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The property references for the Profile of the Relationship.
     */
    readonly profilePropertyReferences: outputs.customerinsights.v20170101.ParticipantPropertyReferenceResponse[];
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The property references for the Related Profile of the Relationship.
     */
    readonly relatedProfilePropertyReferences: outputs.customerinsights.v20170101.ParticipantPropertyReferenceResponse[];
    /**
     * The relationship guid id.
     */
    readonly relationshipGuidId: string;
    /**
     * The Relationship associated with the Link.
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

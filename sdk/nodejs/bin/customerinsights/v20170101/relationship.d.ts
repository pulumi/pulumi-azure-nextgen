import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The relationship resource format.
 */
export declare class Relationship extends pulumi.CustomResource {
    /**
     * Get an existing Relationship resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Relationship;
    /**
     * Returns true if the given object is an instance of Relationship.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Relationship;
    /**
     * The Relationship Cardinality.
     */
    readonly cardinality: pulumi.Output<string | undefined>;
    /**
     * Localized descriptions for the Relationship.
     */
    readonly description: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Localized display name for the Relationship.
     */
    readonly displayName: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The expiry date time in UTC.
     */
    readonly expiryDateTimeUtc: pulumi.Output<string | undefined>;
    /**
     * The properties of the Relationship.
     */
    readonly fields: pulumi.Output<outputs.customerinsights.v20170101.PropertyDefinitionResponse[] | undefined>;
    /**
     * Optional property to be used to map fields in profile to their strong ids in related profile.
     */
    readonly lookupMappings: pulumi.Output<outputs.customerinsights.v20170101.RelationshipTypeMappingResponse[] | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Profile type.
     */
    readonly profileType: pulumi.Output<string>;
    /**
     * Provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Related profile being referenced.
     */
    readonly relatedProfileType: pulumi.Output<string>;
    /**
     * The relationship guid id.
     */
    readonly relationshipGuidId: pulumi.Output<string>;
    /**
     * The Relationship name.
     */
    readonly relationshipName: pulumi.Output<string>;
    /**
     * The hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Relationship resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RelationshipArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Relationship resource.
 */
export interface RelationshipArgs {
    /**
     * The Relationship Cardinality.
     */
    readonly cardinality?: pulumi.Input<string>;
    /**
     * Localized descriptions for the Relationship.
     */
    readonly description?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Localized display name for the Relationship.
     */
    readonly displayName?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The expiry date time in UTC.
     */
    readonly expiryDateTimeUtc?: pulumi.Input<string>;
    /**
     * The properties of the Relationship.
     */
    readonly fields?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170101.PropertyDefinition>[]>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * Optional property to be used to map fields in profile to their strong ids in related profile.
     */
    readonly lookupMappings?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170101.RelationshipTypeMapping>[]>;
    /**
     * Profile type.
     */
    readonly profileType: pulumi.Input<string>;
    /**
     * Related profile being referenced.
     */
    readonly relatedProfileType: pulumi.Input<string>;
    /**
     * The name of the Relationship.
     */
    readonly relationshipName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}

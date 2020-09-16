import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The link resource format.
 */
export declare class Link extends pulumi.CustomResource {
    /**
     * Get an existing Link resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Link;
    /**
     * Returns true if the given object is an instance of Link.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Link;
    /**
     * Localized descriptions for the Link.
     */
    readonly description: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Localized display name for the Link.
     */
    readonly displayName: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The link name.
     */
    readonly linkName: pulumi.Output<string>;
    /**
     * The set of properties mappings between the source and target Types.
     */
    readonly mappings: pulumi.Output<outputs.customerinsights.v20170426.TypePropertiesMappingResponse[] | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
     */
    readonly operationType: pulumi.Output<string | undefined>;
    /**
     * The properties that represent the participating profile.
     */
    readonly participantPropertyReferences: pulumi.Output<outputs.customerinsights.v20170426.ParticipantPropertyReferenceResponse[]>;
    /**
     * Provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles.
     */
    readonly referenceOnly: pulumi.Output<boolean | undefined>;
    /**
     * Type of source entity.
     */
    readonly sourceEntityType: pulumi.Output<string>;
    /**
     * Name of the source Entity Type.
     */
    readonly sourceEntityTypeName: pulumi.Output<string>;
    /**
     * Type of target entity.
     */
    readonly targetEntityType: pulumi.Output<string>;
    /**
     * Name of the target Entity Type.
     */
    readonly targetEntityTypeName: pulumi.Output<string>;
    /**
     * The hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Link resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Link resource.
 */
export interface LinkArgs {
    /**
     * Localized descriptions for the Link.
     */
    readonly description?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Localized display name for the Link.
     */
    readonly displayName?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * The name of the link.
     */
    readonly linkName: pulumi.Input<string>;
    /**
     * The set of properties mappings between the source and target Types.
     */
    readonly mappings?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170426.TypePropertiesMapping>[]>;
    /**
     * Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
     */
    readonly operationType?: pulumi.Input<string>;
    /**
     * The properties that represent the participating profile.
     */
    readonly participantPropertyReferences: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170426.ParticipantPropertyReference>[]>;
    /**
     * Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles.
     */
    readonly referenceOnly?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Type of source entity.
     */
    readonly sourceEntityType: pulumi.Input<string>;
    /**
     * Name of the source Entity Type.
     */
    readonly sourceEntityTypeName: pulumi.Input<string>;
    /**
     * Type of target entity.
     */
    readonly targetEntityType: pulumi.Input<string>;
    /**
     * Name of the target Entity Type.
     */
    readonly targetEntityTypeName: pulumi.Input<string>;
}

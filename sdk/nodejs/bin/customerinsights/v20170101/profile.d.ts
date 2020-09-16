import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The profile resource format.
 */
export declare class Profile extends pulumi.CustomResource {
    /**
     * Get an existing Profile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Profile;
    /**
     * Returns true if the given object is an instance of Profile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Profile;
    /**
     * The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
     */
    readonly apiEntitySetName: pulumi.Output<string | undefined>;
    /**
     * The attributes for the Type.
     */
    readonly attributes: pulumi.Output<{
        [key: string]: string[];
    } | undefined>;
    /**
     * Localized descriptions for the property.
     */
    readonly description: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Localized display names for the property.
     */
    readonly displayName: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Type of entity.
     */
    readonly entityType: pulumi.Output<string | undefined>;
    /**
     * The properties of the Profile.
     */
    readonly fields: pulumi.Output<outputs.customerinsights.v20170101.PropertyDefinitionResponse[] | undefined>;
    /**
     * The instance count.
     */
    readonly instancesCount: pulumi.Output<number | undefined>;
    /**
     * Large Image associated with the Property or EntityType.
     */
    readonly largeImage: pulumi.Output<string | undefined>;
    /**
     * The last changed time for the type definition.
     */
    readonly lastChangedUtc: pulumi.Output<string>;
    /**
     * Any custom localized attributes for the Type.
     */
    readonly localizedAttributes: pulumi.Output<{
        [key: string]: {
            [key: string]: string;
        };
    } | undefined>;
    /**
     * Medium Image associated with the Property or EntityType.
     */
    readonly mediumImage: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The schema org link. This helps ACI identify and suggest semantic models.
     */
    readonly schemaItemTypeLink: pulumi.Output<string | undefined>;
    /**
     * Small Image associated with the Property or EntityType.
     */
    readonly smallImage: pulumi.Output<string | undefined>;
    /**
     * The strong IDs.
     */
    readonly strongIds: pulumi.Output<outputs.customerinsights.v20170101.StrongIdResponse[] | undefined>;
    /**
     * The hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * The timestamp property name. Represents the time when the interaction or profile update happened.
     */
    readonly timestampFieldName: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The name of the entity.
     */
    readonly typeName: pulumi.Output<string | undefined>;
    /**
     * Create a Profile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProfileArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Profile resource.
 */
export interface ProfileArgs {
    /**
     * The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
     */
    readonly apiEntitySetName?: pulumi.Input<string>;
    /**
     * The attributes for the Type.
     */
    readonly attributes?: pulumi.Input<{
        [key: string]: pulumi.Input<pulumi.Input<string>[]>;
    }>;
    /**
     * Localized descriptions for the property.
     */
    readonly description?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Localized display names for the property.
     */
    readonly displayName?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Type of entity.
     */
    readonly entityType?: pulumi.Input<string>;
    /**
     * The properties of the Profile.
     */
    readonly fields?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170101.PropertyDefinition>[]>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * The instance count.
     */
    readonly instancesCount?: pulumi.Input<number>;
    /**
     * Large Image associated with the Property or EntityType.
     */
    readonly largeImage?: pulumi.Input<string>;
    /**
     * Any custom localized attributes for the Type.
     */
    readonly localizedAttributes?: pulumi.Input<{
        [key: string]: pulumi.Input<{
            [key: string]: pulumi.Input<string>;
        }>;
    }>;
    /**
     * Medium Image associated with the Property or EntityType.
     */
    readonly mediumImage?: pulumi.Input<string>;
    /**
     * The name of the profile.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The schema org link. This helps ACI identify and suggest semantic models.
     */
    readonly schemaItemTypeLink?: pulumi.Input<string>;
    /**
     * Small Image associated with the Property or EntityType.
     */
    readonly smallImage?: pulumi.Input<string>;
    /**
     * The strong IDs.
     */
    readonly strongIds?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170101.StrongId>[]>;
    /**
     * The timestamp property name. Represents the time when the interaction or profile update happened.
     */
    readonly timestampFieldName?: pulumi.Input<string>;
    /**
     * The name of the entity.
     */
    readonly typeName?: pulumi.Input<string>;
}

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Properties that define an Analytics item that is associated to an Application Insights component.
 */
export declare class AnalyticsItem extends pulumi.CustomResource {
    /**
     * Get an existing AnalyticsItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AnalyticsItem;
    /**
     * Returns true if the given object is an instance of AnalyticsItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AnalyticsItem;
    /**
     * The content of this item
     */
    readonly content: pulumi.Output<string | undefined>;
    /**
     * The user-defined name of the item.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
     */
    readonly properties: pulumi.Output<outputs.insights.v20150501.ApplicationInsightsComponentAnalyticsItemPropertiesResponse>;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly scope: pulumi.Output<string | undefined>;
    /**
     * Date and time in UTC when this item was created.
     */
    readonly timeCreated: pulumi.Output<string>;
    /**
     * Date and time in UTC of the last modification that was made to this item.
     */
    readonly timeModified: pulumi.Output<string>;
    /**
     * Enum indicating the type of the Analytics item.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * This instance's version of the data model. This can change as new features are added.
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a AnalyticsItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnalyticsItemArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AnalyticsItem resource.
 */
export interface AnalyticsItemArgs {
    /**
     * The content of this item
     */
    readonly content?: pulumi.Input<string>;
    /**
     * Internally assigned unique id of the item definition.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The user-defined name of the item.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Flag indicating whether or not to force save an item. This allows overriding an item if it already exists.
     */
    readonly overrideItem?: pulumi.Input<boolean>;
    /**
     * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
     */
    readonly properties?: pulumi.Input<inputs.insights.v20150501.ApplicationInsightsComponentAnalyticsItemProperties>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly scope?: pulumi.Input<string>;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly scopePath: pulumi.Input<string>;
    /**
     * Enum indicating the type of the Analytics item.
     */
    readonly type?: pulumi.Input<string>;
}

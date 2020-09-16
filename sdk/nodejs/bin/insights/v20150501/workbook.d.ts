import * as pulumi from "@pulumi/pulumi";
/**
 * An Application Insights workbook definition.
 */
export declare class Workbook extends pulumi.CustomResource {
    /**
     * Get an existing Workbook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workbook;
    /**
     * Returns true if the given object is an instance of Workbook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workbook;
    /**
     * Workbook category, as defined by the user at creation time.
     */
    readonly category: pulumi.Output<string>;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Configuration of this particular workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: pulumi.Output<string>;
    /**
     * Enum indicating if this workbook definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly sharedTypeKind: pulumi.Output<string>;
    /**
     * Optional resourceId for a source resource.
     */
    readonly sourceResourceId: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Date and time in UTC of the last modification that was made to this workbook definition.
     */
    readonly timeModified: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Unique user id of the specific user that owns this workbook.
     */
    readonly userId: pulumi.Output<string>;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked workbook.
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Internally assigned unique id of the workbook definition.
     */
    readonly workbookId: pulumi.Output<string>;
    /**
     * Create a Workbook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkbookArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Workbook resource.
 */
export interface WorkbookArgs {
    /**
     * Workbook category, as defined by the user at creation time.
     */
    readonly category: pulumi.Input<string>;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The user-defined name of the workbook.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Configuration of this particular workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: pulumi.Input<string>;
    /**
     * Enum indicating if this workbook definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly sharedTypeKind: pulumi.Input<string>;
    /**
     * Optional resourceId for a source resource.
     */
    readonly sourceResourceId?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Unique user id of the specific user that owns this workbook.
     */
    readonly userId: pulumi.Input<string>;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked workbook.
     */
    readonly version?: pulumi.Input<string>;
    /**
     * Internally assigned unique id of the workbook definition.
     */
    readonly workbookId: pulumi.Input<string>;
}

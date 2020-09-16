import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Response to get user settings
 */
export declare class UserSettings extends pulumi.CustomResource {
    /**
     * Get an existing UserSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): UserSettings;
    /**
     * Returns true if the given object is an instance of UserSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserSettings;
    /**
     * The cloud shell user settings properties.
     */
    readonly properties: pulumi.Output<outputs.portal.v20181001.UserPropertiesResponse>;
    /**
     * Create a UserSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserSettingsArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a UserSettings resource.
 */
export interface UserSettingsArgs {
    /**
     * The cloud shell user settings properties.
     */
    readonly properties: pulumi.Input<inputs.portal.v20181001.UserProperties>;
    /**
     * The name of the user settings
     */
    readonly userSettingsName: pulumi.Input<string>;
}

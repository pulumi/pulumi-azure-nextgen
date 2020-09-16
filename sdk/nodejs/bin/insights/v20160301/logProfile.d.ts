import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The log profile resource.
 */
export declare class LogProfile extends pulumi.CustomResource {
    /**
     * Get an existing LogProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LogProfile;
    /**
     * Returns true if the given object is an instance of LogProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LogProfile;
    /**
     * the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
     */
    readonly categories: pulumi.Output<string[]>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
     */
    readonly locations: pulumi.Output<string[]>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * the retention policy for the events in the log.
     */
    readonly retentionPolicy: pulumi.Output<outputs.insights.v20160301.RetentionPolicyResponse>;
    /**
     * The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
     */
    readonly serviceBusRuleId: pulumi.Output<string | undefined>;
    /**
     * the resource id of the storage account to which you would like to send the Activity Log.
     */
    readonly storageAccountId: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a LogProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogProfileArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LogProfile resource.
 */
export interface LogProfileArgs {
    /**
     * the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
     */
    readonly categories: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
     */
    readonly locations: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the log profile.
     */
    readonly logProfileName: pulumi.Input<string>;
    /**
     * the retention policy for the events in the log.
     */
    readonly retentionPolicy: pulumi.Input<inputs.insights.v20160301.RetentionPolicy>;
    /**
     * The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
     */
    readonly serviceBusRuleId?: pulumi.Input<string>;
    /**
     * the resource id of the storage account to which you would like to send the Activity Log.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}

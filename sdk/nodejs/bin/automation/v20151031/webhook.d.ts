import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Definition of the webhook type.
 */
export declare class Webhook extends pulumi.CustomResource {
    /**
     * Get an existing Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Webhook;
    /**
     * Returns true if the given object is an instance of Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Webhook;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the expiry time.
     */
    readonly expiryTime: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the value of the enabled flag of the webhook.
     */
    readonly isEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the last invoked time.
     */
    readonly lastInvokedTime: pulumi.Output<string | undefined>;
    /**
     * Details of the user who last modified the Webhook
     */
    readonly lastModifiedBy: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets or sets the name of the hybrid worker group the webhook job will run on.
     */
    readonly runOn: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the runbook the webhook is associated with.
     */
    readonly runbook: pulumi.Output<outputs.automation.v20151031.RunbookAssociationPropertyResponse | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Gets or sets the webhook uri.
     */
    readonly uri: pulumi.Output<string | undefined>;
    /**
     * Create a Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the expiry time.
     */
    readonly expiryTime?: pulumi.Input<string>;
    /**
     * Gets or sets the value of the enabled flag of webhook.
     */
    readonly isEnabled?: pulumi.Input<boolean>;
    /**
     * Gets or sets the name of the webhook.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Gets or sets the parameters of the job.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the name of the hybrid worker group the webhook job will run on.
     */
    readonly runOn?: pulumi.Input<string>;
    /**
     * Gets or sets the runbook.
     */
    readonly runbook?: pulumi.Input<inputs.automation.v20151031.RunbookAssociationProperty>;
    /**
     * Gets or sets the uri.
     */
    readonly uri?: pulumi.Input<string>;
    /**
     * The webhook name.
     */
    readonly webhookName: pulumi.Input<string>;
}

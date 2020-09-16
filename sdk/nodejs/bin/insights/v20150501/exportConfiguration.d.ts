import * as pulumi from "@pulumi/pulumi";
/**
 * Properties that define a Continuous Export configuration.
 */
export declare class ExportConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ExportConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExportConfiguration;
    /**
     * Returns true if the given object is an instance of ExportConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExportConfiguration;
    /**
     * The name of the Application Insights component.
     */
    readonly applicationName: pulumi.Output<string>;
    /**
     * The name of the destination storage container.
     */
    readonly containerName: pulumi.Output<string>;
    /**
     * The name of destination account.
     */
    readonly destinationAccountId: pulumi.Output<string>;
    /**
     * The destination account location ID.
     */
    readonly destinationStorageLocationId: pulumi.Output<string>;
    /**
     * The destination storage account subscription ID.
     */
    readonly destinationStorageSubscriptionId: pulumi.Output<string>;
    /**
     * The destination type.
     */
    readonly destinationType: pulumi.Output<string>;
    /**
     * The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
     */
    readonly exportId: pulumi.Output<string>;
    /**
     * This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
     */
    readonly exportStatus: pulumi.Output<string>;
    /**
     * The instrumentation key of the Application Insights component.
     */
    readonly instrumentationKey: pulumi.Output<string>;
    /**
     * This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
     */
    readonly isUserEnabled: pulumi.Output<string>;
    /**
     * The last time the Continuous Export configuration started failing.
     */
    readonly lastGapTime: pulumi.Output<string>;
    /**
     * The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
     */
    readonly lastSuccessTime: pulumi.Output<string>;
    /**
     * Last time the Continuous Export configuration was updated.
     */
    readonly lastUserUpdate: pulumi.Output<string>;
    /**
     * Deprecated
     */
    readonly notificationQueueEnabled: pulumi.Output<string | undefined>;
    /**
     * This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
     */
    readonly permanentErrorReason: pulumi.Output<string>;
    /**
     * This comma separated list of document types that will be exported. The possible values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
     */
    readonly recordTypes: pulumi.Output<string | undefined>;
    /**
     * The resource group of the Application Insights component.
     */
    readonly resourceGroup: pulumi.Output<string>;
    /**
     * The name of the destination storage account.
     */
    readonly storageName: pulumi.Output<string>;
    /**
     * The subscription of the Application Insights component.
     */
    readonly subscriptionId: pulumi.Output<string>;
    /**
     * Create a ExportConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExportConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ExportConfiguration resource.
 */
export interface ExportConfigurationArgs {
    /**
     * The name of destination storage account.
     */
    readonly destinationAccountId?: pulumi.Input<string>;
    /**
     * The SAS URL for the destination storage container. It must grant write permission.
     */
    readonly destinationAddress?: pulumi.Input<string>;
    /**
     * The location ID of the destination storage container.
     */
    readonly destinationStorageLocationId?: pulumi.Input<string>;
    /**
     * The subscription ID of the destination storage container.
     */
    readonly destinationStorageSubscriptionId?: pulumi.Input<string>;
    /**
     * The Continuous Export destination type. This has to be 'Blob'.
     */
    readonly destinationType?: pulumi.Input<string>;
    /**
     * The Continuous Export configuration ID. This is unique within a Application Insights component.
     */
    readonly exportId: pulumi.Input<string>;
    /**
     * Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'.
     */
    readonly isEnabled?: pulumi.Input<string>;
    /**
     * Deprecated
     */
    readonly notificationQueueEnabled?: pulumi.Input<string>;
    /**
     * Deprecated
     */
    readonly notificationQueueUri?: pulumi.Input<string>;
    /**
     * The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
     */
    readonly recordTypes?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: pulumi.Input<string>;
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * Properties that define a Continuous Export configuration.
 */
export class ExportConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ExportConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExportConfiguration {
        return new ExportConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:insights/v20150501:ExportConfiguration';

    /**
     * Returns true if the given object is an instance of ExportConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExportConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExportConfiguration.__pulumiType;
    }

    /**
     * The name of the Application Insights component.
     */
    public /*out*/ readonly applicationName!: pulumi.Output<string>;
    /**
     * The name of the destination storage container.
     */
    public /*out*/ readonly containerName!: pulumi.Output<string>;
    /**
     * The name of destination account.
     */
    public readonly destinationAccountId!: pulumi.Output<string>;
    /**
     * The destination account location ID.
     */
    public readonly destinationStorageLocationId!: pulumi.Output<string>;
    /**
     * The destination storage account subscription ID.
     */
    public readonly destinationStorageSubscriptionId!: pulumi.Output<string>;
    /**
     * The destination type.
     */
    public readonly destinationType!: pulumi.Output<string>;
    /**
     * The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
     */
    public readonly exportId!: pulumi.Output<string>;
    /**
     * This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
     */
    public /*out*/ readonly exportStatus!: pulumi.Output<string>;
    /**
     * The instrumentation key of the Application Insights component.
     */
    public /*out*/ readonly instrumentationKey!: pulumi.Output<string>;
    /**
     * This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
     */
    public /*out*/ readonly isUserEnabled!: pulumi.Output<string>;
    /**
     * The last time the Continuous Export configuration started failing.
     */
    public /*out*/ readonly lastGapTime!: pulumi.Output<string>;
    /**
     * The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
     */
    public /*out*/ readonly lastSuccessTime!: pulumi.Output<string>;
    /**
     * Last time the Continuous Export configuration was updated.
     */
    public /*out*/ readonly lastUserUpdate!: pulumi.Output<string>;
    /**
     * Deprecated
     */
    public readonly notificationQueueEnabled!: pulumi.Output<string | undefined>;
    /**
     * This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
     */
    public /*out*/ readonly permanentErrorReason!: pulumi.Output<string>;
    /**
     * This comma separated list of document types that will be exported. The possible values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
     */
    public readonly recordTypes!: pulumi.Output<string | undefined>;
    /**
     * The resource group of the Application Insights component.
     */
    public /*out*/ readonly resourceGroup!: pulumi.Output<string>;
    /**
     * The name of the destination storage account.
     */
    public /*out*/ readonly storageName!: pulumi.Output<string>;
    /**
     * The subscription of the Application Insights component.
     */
    public /*out*/ readonly subscriptionId!: pulumi.Output<string>;

    /**
     * Create a ExportConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExportConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.exportId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'exportId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            inputs["destinationAccountId"] = args ? args.destinationAccountId : undefined;
            inputs["destinationAddress"] = args ? args.destinationAddress : undefined;
            inputs["destinationStorageLocationId"] = args ? args.destinationStorageLocationId : undefined;
            inputs["destinationStorageSubscriptionId"] = args ? args.destinationStorageSubscriptionId : undefined;
            inputs["destinationType"] = args ? args.destinationType : undefined;
            inputs["exportId"] = args ? args.exportId : undefined;
            inputs["isEnabled"] = args ? args.isEnabled : undefined;
            inputs["notificationQueueEnabled"] = args ? args.notificationQueueEnabled : undefined;
            inputs["notificationQueueUri"] = args ? args.notificationQueueUri : undefined;
            inputs["recordTypes"] = args ? args.recordTypes : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["applicationName"] = undefined /*out*/;
            inputs["containerName"] = undefined /*out*/;
            inputs["exportStatus"] = undefined /*out*/;
            inputs["instrumentationKey"] = undefined /*out*/;
            inputs["isUserEnabled"] = undefined /*out*/;
            inputs["lastGapTime"] = undefined /*out*/;
            inputs["lastSuccessTime"] = undefined /*out*/;
            inputs["lastUserUpdate"] = undefined /*out*/;
            inputs["permanentErrorReason"] = undefined /*out*/;
            inputs["resourceGroup"] = undefined /*out*/;
            inputs["storageName"] = undefined /*out*/;
            inputs["subscriptionId"] = undefined /*out*/;
        } else {
            inputs["applicationName"] = undefined /*out*/;
            inputs["containerName"] = undefined /*out*/;
            inputs["destinationAccountId"] = undefined /*out*/;
            inputs["destinationStorageLocationId"] = undefined /*out*/;
            inputs["destinationStorageSubscriptionId"] = undefined /*out*/;
            inputs["destinationType"] = undefined /*out*/;
            inputs["exportId"] = undefined /*out*/;
            inputs["exportStatus"] = undefined /*out*/;
            inputs["instrumentationKey"] = undefined /*out*/;
            inputs["isUserEnabled"] = undefined /*out*/;
            inputs["lastGapTime"] = undefined /*out*/;
            inputs["lastSuccessTime"] = undefined /*out*/;
            inputs["lastUserUpdate"] = undefined /*out*/;
            inputs["notificationQueueEnabled"] = undefined /*out*/;
            inputs["permanentErrorReason"] = undefined /*out*/;
            inputs["recordTypes"] = undefined /*out*/;
            inputs["resourceGroup"] = undefined /*out*/;
            inputs["storageName"] = undefined /*out*/;
            inputs["subscriptionId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:insights/latest:ExportConfiguration" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ExportConfiguration.__pulumiType, name, inputs, opts);
    }
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

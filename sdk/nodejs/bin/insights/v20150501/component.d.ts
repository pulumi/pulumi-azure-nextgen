import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * An Application Insights component definition.
 */
export declare class Component extends pulumi.CustomResource {
    /**
     * Get an existing Component resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Component;
    /**
     * Returns true if the given object is an instance of Component.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Component;
    /**
     * Application Insights Unique ID for your Application.
     */
    readonly appId: pulumi.Output<string>;
    /**
     * The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
     */
    readonly applicationId: pulumi.Output<string>;
    /**
     * Type of application being monitored.
     */
    readonly applicationType: pulumi.Output<string>;
    /**
     * Application Insights component connection string.
     */
    readonly connectionString: pulumi.Output<string>;
    /**
     * Creation Date for the Application Insights component, in ISO 8601 format.
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * Disable IP masking.
     */
    readonly disableIpMasking: pulumi.Output<boolean | undefined>;
    /**
     * Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
     */
    readonly flowType: pulumi.Output<string | undefined>;
    /**
     * The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
     */
    readonly hockeyAppId: pulumi.Output<string | undefined>;
    /**
     * Token used to authenticate communications with between Application Insights and HockeyApp.
     */
    readonly hockeyAppToken: pulumi.Output<string>;
    /**
     * Purge data immediately after 30 days.
     */
    readonly immediatePurgeDataOn30Days: pulumi.Output<boolean | undefined>;
    /**
     * Indicates the flow of the ingestion.
     */
    readonly ingestionMode: pulumi.Output<string | undefined>;
    /**
     * Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
     */
    readonly instrumentationKey: pulumi.Output<string>;
    /**
     * The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of linked private link scope resources.
     */
    readonly privateLinkScopedResources: pulumi.Output<outputs.insights.v20150501.PrivateLinkScopedResourceResponse[]>;
    /**
     * Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
     */
    readonly requestSource: pulumi.Output<string | undefined>;
    /**
     * Retention period in days.
     */
    readonly retentionInDays: pulumi.Output<number | undefined>;
    /**
     * Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
     */
    readonly samplingPercentage: pulumi.Output<number | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure Tenant Id.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Component resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComponentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Component resource.
 */
export interface ComponentArgs {
    /**
     * Type of application being monitored.
     */
    readonly applicationType: pulumi.Input<string>;
    /**
     * Disable IP masking.
     */
    readonly disableIpMasking?: pulumi.Input<boolean>;
    /**
     * Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
     */
    readonly flowType?: pulumi.Input<string>;
    /**
     * The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
     */
    readonly hockeyAppId?: pulumi.Input<string>;
    /**
     * Purge data immediately after 30 days.
     */
    readonly immediatePurgeDataOn30Days?: pulumi.Input<boolean>;
    /**
     * Indicates the flow of the ingestion.
     */
    readonly ingestionMode?: pulumi.Input<string>;
    /**
     * The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
     */
    readonly kind: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
     */
    readonly requestSource?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Retention period in days.
     */
    readonly retentionInDays?: pulumi.Input<number>;
    /**
     * Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
     */
    readonly samplingPercentage?: pulumi.Input<number>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}

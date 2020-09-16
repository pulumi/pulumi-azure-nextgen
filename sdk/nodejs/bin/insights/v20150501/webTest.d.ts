import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An Application Insights web test definition.
 */
export declare class WebTest extends pulumi.CustomResource {
    /**
     * Get an existing WebTest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebTest;
    /**
     * Returns true if the given object is an instance of WebTest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebTest;
    /**
     * An XML configuration specification for a WebTest.
     */
    readonly configuration: pulumi.Output<outputs.insights.v20150501.WebTestPropertiesResponseConfiguration | undefined>;
    /**
     * Purpose/user defined descriptive test for this WebTest.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Is the test actively being monitored.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Interval in seconds between test runs for this WebTest. Default value is 300.
     */
    readonly frequency: pulumi.Output<number | undefined>;
    /**
     * The kind of web test that this web test watches. Choices are ping and multistep.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * A list of where to physically run the tests from to give global coverage for accessibility of your application.
     */
    readonly locations: pulumi.Output<outputs.insights.v20150501.WebTestGeolocationResponse[]>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Current state of this component, whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Allow for retries should this WebTest fail.
     */
    readonly retryEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Unique ID of this WebTest. This is typically the same value as the Name field.
     */
    readonly syntheticMonitorId: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Seconds until this WebTest will timeout and fail. Default value is 30.
     */
    readonly timeout: pulumi.Output<number | undefined>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The kind of web test this is, valid choices are ping and multistep.
     */
    readonly webTestKind: pulumi.Output<string>;
    /**
     * User defined name if this WebTest.
     */
    readonly webTestName: pulumi.Output<string>;
    /**
     * Create a WebTest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebTestArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebTest resource.
 */
export interface WebTestArgs {
    /**
     * An XML configuration specification for a WebTest.
     */
    readonly configuration?: pulumi.Input<inputs.insights.v20150501.WebTestPropertiesConfiguration>;
    /**
     * Purpose/user defined descriptive test for this WebTest.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Is the test actively being monitored.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Interval in seconds between test runs for this WebTest. Default value is 300.
     */
    readonly frequency?: pulumi.Input<number>;
    /**
     * The kind of web test that this web test watches. Choices are ping and multistep.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * A list of where to physically run the tests from to give global coverage for accessibility of your application.
     */
    readonly locations: pulumi.Input<pulumi.Input<inputs.insights.v20150501.WebTestGeolocation>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Allow for retries should this WebTest fail.
     */
    readonly retryEnabled?: pulumi.Input<boolean>;
    /**
     * Unique ID of this WebTest. This is typically the same value as the Name field.
     */
    readonly syntheticMonitorId: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Seconds until this WebTest will timeout and fail. Default value is 30.
     */
    readonly timeout?: pulumi.Input<number>;
    /**
     * The kind of web test this is, valid choices are ping and multistep.
     */
    readonly webTestKind: pulumi.Input<string>;
    /**
     * User defined name if this WebTest.
     */
    readonly webTestName: pulumi.Input<string>;
}

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Diagnostic details.
 */
export declare class ApiDiagnostic extends pulumi.CustomResource {
    /**
     * Get an existing ApiDiagnostic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiDiagnostic;
    /**
     * Returns true if the given object is an instance of ApiDiagnostic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiDiagnostic;
    /**
     * Specifies for what type of messages sampling settings should not apply.
     */
    readonly alwaysLog: pulumi.Output<string | undefined>;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Backend
     */
    readonly backend: pulumi.Output<outputs.apimanagement.v20190101.PipelineDiagnosticSettingsResponse | undefined>;
    /**
     * Whether to process Correlation Headers coming to Api Management Service. Only applicable to Application Insights diagnostics. Default is true.
     */
    readonly enableHttpCorrelationHeaders: pulumi.Output<boolean | undefined>;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    readonly frontend: pulumi.Output<outputs.apimanagement.v20190101.PipelineDiagnosticSettingsResponse | undefined>;
    /**
     * Sets correlation protocol to use for Application Insights diagnostics.
     */
    readonly httpCorrelationProtocol: pulumi.Output<string | undefined>;
    /**
     * Resource Id of a target logger.
     */
    readonly loggerId: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Sampling settings for Diagnostic.
     */
    readonly sampling: pulumi.Output<outputs.apimanagement.v20190101.SamplingSettingsResponse | undefined>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The verbosity level applied to traces emitted by trace policies.
     */
    readonly verbosity: pulumi.Output<string | undefined>;
    /**
     * Create a ApiDiagnostic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiDiagnosticArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApiDiagnostic resource.
 */
export interface ApiDiagnosticArgs {
    /**
     * Specifies for what type of messages sampling settings should not apply.
     */
    readonly alwaysLog?: pulumi.Input<string>;
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    readonly apiId: pulumi.Input<string>;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Backend
     */
    readonly backend?: pulumi.Input<inputs.apimanagement.v20190101.PipelineDiagnosticSettings>;
    /**
     * Diagnostic identifier. Must be unique in the current API Management service instance.
     */
    readonly diagnosticId: pulumi.Input<string>;
    /**
     * Whether to process Correlation Headers coming to Api Management Service. Only applicable to Application Insights diagnostics. Default is true.
     */
    readonly enableHttpCorrelationHeaders?: pulumi.Input<boolean>;
    /**
     * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
     */
    readonly frontend?: pulumi.Input<inputs.apimanagement.v20190101.PipelineDiagnosticSettings>;
    /**
     * Sets correlation protocol to use for Application Insights diagnostics.
     */
    readonly httpCorrelationProtocol?: pulumi.Input<string>;
    /**
     * Resource Id of a target logger.
     */
    readonly loggerId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Sampling settings for Diagnostic.
     */
    readonly sampling?: pulumi.Input<inputs.apimanagement.v20190101.SamplingSettings>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * The verbosity level applied to traces emitted by trace policies.
     */
    readonly verbosity?: pulumi.Input<string>;
}

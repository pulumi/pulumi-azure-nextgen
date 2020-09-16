import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * IoT Security solution configuration and resource information.
 */
export declare class IotSecuritySolution extends pulumi.CustomResource {
    /**
     * Get an existing IotSecuritySolution resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotSecuritySolution;
    /**
     * Returns true if the given object is an instance of IotSecuritySolution.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IotSecuritySolution;
    /**
     * List of resources that were automatically discovered as relevant to the security solution.
     */
    readonly autoDiscoveredResources: pulumi.Output<string[]>;
    /**
     * Disabled data sources. Disabling these data sources compromises the system.
     */
    readonly disabledDataSources: pulumi.Output<string[] | undefined>;
    /**
     * Resource display name.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * List of additional options for exporting to workspace data.
     */
    readonly export: pulumi.Output<string[] | undefined>;
    /**
     * IoT Hub resource IDs
     */
    readonly iotHubs: pulumi.Output<string[]>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of the configuration status for each recommendation type.
     */
    readonly recommendationsConfiguration: pulumi.Output<outputs.security.v20190801.RecommendationConfigurationPropertiesResponse[] | undefined>;
    /**
     * Status of the IoT Security solution.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Unmasked IP address logging status
     */
    readonly unmaskedIpLoggingStatus: pulumi.Output<string | undefined>;
    /**
     * Properties of the IoT Security solution's user defined resources.
     */
    readonly userDefinedResources: pulumi.Output<outputs.security.v20190801.UserDefinedResourcesPropertiesResponse | undefined>;
    /**
     * Workspace resource ID
     */
    readonly workspace: pulumi.Output<string | undefined>;
    /**
     * Create a IotSecuritySolution resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotSecuritySolutionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IotSecuritySolution resource.
 */
export interface IotSecuritySolutionArgs {
    /**
     * Disabled data sources. Disabling these data sources compromises the system.
     */
    readonly disabledDataSources?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource display name.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * List of additional options for exporting to workspace data.
     */
    readonly export?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IoT Hub resource IDs
     */
    readonly iotHubs: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * List of the configuration status for each recommendation type.
     */
    readonly recommendationsConfiguration?: pulumi.Input<pulumi.Input<inputs.security.v20190801.RecommendationConfigurationProperties>[]>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT Security solution.
     */
    readonly solutionName: pulumi.Input<string>;
    /**
     * Status of the IoT Security solution.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Unmasked IP address logging status
     */
    readonly unmaskedIpLoggingStatus?: pulumi.Input<string>;
    /**
     * Properties of the IoT Security solution's user defined resources.
     */
    readonly userDefinedResources?: pulumi.Input<inputs.security.v20190801.UserDefinedResourcesProperties>;
    /**
     * Workspace resource ID
     */
    readonly workspace?: pulumi.Input<string>;
}

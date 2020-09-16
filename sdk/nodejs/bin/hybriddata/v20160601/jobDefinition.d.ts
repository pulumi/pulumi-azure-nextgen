import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Job Definition.
 */
export declare class JobDefinition extends pulumi.CustomResource {
    /**
     * Get an existing JobDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobDefinition;
    /**
     * Returns true if the given object is an instance of JobDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is JobDefinition;
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets: pulumi.Output<outputs.hybriddata.v20160601.CustomerSecretResponse[] | undefined>;
    /**
     * A generic json used differently by each data service type.
     */
    readonly dataServiceInput: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Data Sink Id associated to the job definition.
     */
    readonly dataSinkId: pulumi.Output<string>;
    /**
     * Data Source Id associated to the job definition.
     */
    readonly dataSourceId: pulumi.Output<string>;
    /**
     * Last modified time of the job definition.
     */
    readonly lastModifiedTime: pulumi.Output<string | undefined>;
    /**
     * Name of the object.
     */
    readonly name: pulumi.Output<string>;
    /**
     * This is the preferred geo location for the job to run.
     */
    readonly runLocation: pulumi.Output<string | undefined>;
    /**
     * Schedule for running the job definition
     */
    readonly schedules: pulumi.Output<outputs.hybriddata.v20160601.ScheduleResponse[] | undefined>;
    /**
     * State of the job definition.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
     */
    readonly userConfirmation: pulumi.Output<string | undefined>;
    /**
     * Create a JobDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobDefinitionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a JobDefinition resource.
 */
export interface JobDefinitionArgs {
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets?: pulumi.Input<pulumi.Input<inputs.hybriddata.v20160601.CustomerSecret>[]>;
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    readonly dataManagerName: pulumi.Input<string>;
    /**
     * A generic json used differently by each data service type.
     */
    readonly dataServiceInput?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The data service type of the job definition.
     */
    readonly dataServiceName: pulumi.Input<string>;
    /**
     * Data Sink Id associated to the job definition.
     */
    readonly dataSinkId: pulumi.Input<string>;
    /**
     * Data Source Id associated to the job definition.
     */
    readonly dataSourceId: pulumi.Input<string>;
    /**
     * The job definition name to be created or updated.
     */
    readonly jobDefinitionName: pulumi.Input<string>;
    /**
     * Last modified time of the job definition.
     */
    readonly lastModifiedTime?: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * This is the preferred geo location for the job to run.
     */
    readonly runLocation?: pulumi.Input<string>;
    /**
     * Schedule for running the job definition
     */
    readonly schedules?: pulumi.Input<pulumi.Input<inputs.hybriddata.v20160601.Schedule>[]>;
    /**
     * State of the job definition.
     */
    readonly state: pulumi.Input<string>;
    /**
     * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
     */
    readonly userConfirmation?: pulumi.Input<string>;
}

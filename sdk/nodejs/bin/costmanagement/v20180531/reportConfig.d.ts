import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A report config resource.
 */
export declare class ReportConfig extends pulumi.CustomResource {
    /**
     * Get an existing ReportConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReportConfig;
    /**
     * Returns true if the given object is an instance of ReportConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ReportConfig;
    /**
     * Has definition for the report config.
     */
    readonly definition: pulumi.Output<outputs.costmanagement.v20180531.ReportConfigDefinitionResponse>;
    /**
     * Has delivery information for the report config.
     */
    readonly deliveryInfo: pulumi.Output<outputs.costmanagement.v20180531.ReportConfigDeliveryInfoResponse>;
    /**
     * The format of the report being delivered.
     */
    readonly format: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Has schedule information for the report config.
     */
    readonly schedule: pulumi.Output<outputs.costmanagement.v20180531.ReportConfigScheduleResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ReportConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReportConfigArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ReportConfig resource.
 */
export interface ReportConfigArgs {
    /**
     * Has definition for the report config.
     */
    readonly definition: pulumi.Input<inputs.costmanagement.v20180531.ReportConfigDefinition>;
    /**
     * Has delivery information for the report config.
     */
    readonly deliveryInfo: pulumi.Input<inputs.costmanagement.v20180531.ReportConfigDeliveryInfo>;
    /**
     * The format of the report being delivered.
     */
    readonly format?: pulumi.Input<string>;
    /**
     * Report Config Name.
     */
    readonly reportConfigName: pulumi.Input<string>;
    /**
     * Has schedule information for the report config.
     */
    readonly schedule?: pulumi.Input<inputs.costmanagement.v20180531.ReportConfigSchedule>;
}

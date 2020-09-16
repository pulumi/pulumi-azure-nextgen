import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare class AdaptiveApplicationControl extends pulumi.CustomResource {
    /**
     * Get an existing AdaptiveApplicationControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AdaptiveApplicationControl;
    /**
     * Returns true if the given object is an instance of AdaptiveApplicationControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AdaptiveApplicationControl;
    /**
     * The configuration status of the machines group or machine or rule
     */
    readonly configurationStatus: pulumi.Output<string>;
    /**
     * The application control policy enforcement/protection mode of the machine group
     */
    readonly enforcementMode: pulumi.Output<string | undefined>;
    readonly issues: pulumi.Output<outputs.security.v20200101.AdaptiveApplicationControlIssueSummaryResponse[]>;
    /**
     * Location where the resource is stored
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    readonly pathRecommendations: pulumi.Output<outputs.security.v20200101.PathRecommendationResponse[] | undefined>;
    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    readonly protectionMode: pulumi.Output<outputs.security.v20200101.ProtectionModeResponse | undefined>;
    /**
     * The initial recommendation status of the machine group or machine
     */
    readonly recommendationStatus: pulumi.Output<string>;
    /**
     * The source type of the machine group
     */
    readonly sourceSystem: pulumi.Output<string>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    readonly vmRecommendations: pulumi.Output<outputs.security.v20200101.VmRecommendationResponse[] | undefined>;
    /**
     * Create a AdaptiveApplicationControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdaptiveApplicationControlArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AdaptiveApplicationControl resource.
 */
export interface AdaptiveApplicationControlArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    readonly ascLocation: pulumi.Input<string>;
    /**
     * The application control policy enforcement/protection mode of the machine group
     */
    readonly enforcementMode?: pulumi.Input<string>;
    /**
     * Name of an application control machine group
     */
    readonly groupName: pulumi.Input<string>;
    readonly pathRecommendations?: pulumi.Input<pulumi.Input<inputs.security.v20200101.PathRecommendation>[]>;
    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    readonly protectionMode?: pulumi.Input<inputs.security.v20200101.ProtectionMode>;
    readonly vmRecommendations?: pulumi.Input<pulumi.Input<inputs.security.v20200101.VmRecommendation>[]>;
}

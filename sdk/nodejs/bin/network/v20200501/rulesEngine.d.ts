import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A rules engine configuration containing a list of rules that will run to modify the runtime behavior of the request and response.
 */
export declare class RulesEngine extends pulumi.CustomResource {
    /**
     * Get an existing RulesEngine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RulesEngine;
    /**
     * Returns true if the given object is an instance of RulesEngine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RulesEngine;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource status.
     */
    readonly resourceState: pulumi.Output<string | undefined>;
    /**
     * A list of rules that define a particular Rules Engine Configuration.
     */
    readonly rules: pulumi.Output<outputs.network.v20200501.RulesEngineRuleResponse[] | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RulesEngine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RulesEngineArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RulesEngine resource.
 */
export interface RulesEngineArgs {
    /**
     * Name of the Front Door which is globally unique.
     */
    readonly frontDoorName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource status.
     */
    readonly resourceState?: pulumi.Input<string>;
    /**
     * A list of rules that define a particular Rules Engine Configuration.
     */
    readonly rules?: pulumi.Input<pulumi.Input<inputs.network.v20200501.RulesEngineRule>[]>;
    /**
     * Name of the Rules Engine which is unique within the Front Door.
     */
    readonly rulesEngineName: pulumi.Input<string>;
}

import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRulesEngine(args: GetRulesEngineArgs, opts?: pulumi.InvokeOptions): Promise<GetRulesEngineResult>;
export interface GetRulesEngineArgs {
    /**
     * Name of the Front Door which is globally unique.
     */
    readonly frontDoorName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the Rules Engine which is unique within the Front Door.
     */
    readonly rulesEngineName: string;
}
/**
 * A rules engine configuration containing a list of rules that will run to modify the runtime behavior of the request and response.
 */
export interface GetRulesEngineResult {
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource status.
     */
    readonly resourceState?: string;
    /**
     * A list of rules that define a particular Rules Engine Configuration.
     */
    readonly rules?: outputs.network.v20200101.RulesEngineRuleResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}

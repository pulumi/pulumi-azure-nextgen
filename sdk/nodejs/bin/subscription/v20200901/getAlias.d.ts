import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAlias(args: GetAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetAliasResult>;
export interface GetAliasArgs {
    /**
     * Alias Name
     */
    readonly aliasName: string;
}
/**
 * Subscription Information with the alias.
 */
export interface GetAliasResult {
    /**
     * Alias ID.
     */
    readonly name: string;
    /**
     * Put Alias response properties.
     */
    readonly properties: outputs.subscription.v20200901.PutAliasResponsePropertiesResponse;
    /**
     * Resource type, Microsoft.Subscription/aliases.
     */
    readonly type: string;
}

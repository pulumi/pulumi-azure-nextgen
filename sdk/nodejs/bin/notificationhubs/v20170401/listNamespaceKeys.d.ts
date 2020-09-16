import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listNamespaceKeys(args: ListNamespaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceKeysResult>;
export interface ListNamespaceKeysArgs {
    /**
     * The connection string of the namespace for the specified authorizationRule.
     */
    readonly authorizationRuleName: string;
    /**
     * The namespace name.
     */
    readonly namespaceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The response of the List Namespace operation.
 */
export interface ListNamespaceKeysResult {
    /**
     * Link to the next set of results. Not empty if Value contains incomplete list of AuthorizationRules
     */
    readonly nextLink?: string;
    /**
     * Result of the List AuthorizationRules operation.
     */
    readonly value?: outputs.notificationhubs.v20170401.SharedAccessAuthorizationRuleResourceResponse[];
}

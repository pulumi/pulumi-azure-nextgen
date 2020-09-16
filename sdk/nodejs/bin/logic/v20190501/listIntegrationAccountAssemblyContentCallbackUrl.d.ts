import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listIntegrationAccountAssemblyContentCallbackUrl(args: ListIntegrationAccountAssemblyContentCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountAssemblyContentCallbackUrlResult>;
export interface ListIntegrationAccountAssemblyContentCallbackUrlArgs {
    /**
     * The assembly artifact name.
     */
    readonly assemblyArtifactName: string;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The workflow trigger callback URL.
 */
export interface ListIntegrationAccountAssemblyContentCallbackUrlResult {
    /**
     * Gets the workflow trigger callback URL base path.
     */
    readonly basePath: string;
    /**
     * Gets the workflow trigger callback URL HTTP method.
     */
    readonly method: string;
    /**
     * Gets the workflow trigger callback URL query parameters.
     */
    readonly queries?: outputs.logic.v20190501.WorkflowTriggerListCallbackUrlQueriesResponse;
    /**
     * Gets the workflow trigger callback URL relative path.
     */
    readonly relativePath: string;
    /**
     * Gets the workflow trigger callback URL relative path parameters.
     */
    readonly relativePathParameters?: string[];
    /**
     * Gets the workflow trigger callback URL.
     */
    readonly value: string;
}

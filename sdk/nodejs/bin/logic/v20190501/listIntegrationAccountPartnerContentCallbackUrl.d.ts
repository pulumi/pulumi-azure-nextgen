import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listIntegrationAccountPartnerContentCallbackUrl(args: ListIntegrationAccountPartnerContentCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountPartnerContentCallbackUrlResult>;
export interface ListIntegrationAccountPartnerContentCallbackUrlArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The key type.
     */
    readonly keyType?: string;
    /**
     * The expiry time.
     */
    readonly notAfter?: string;
    /**
     * The integration account partner name.
     */
    readonly partnerName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The workflow trigger callback URL.
 */
export interface ListIntegrationAccountPartnerContentCallbackUrlResult {
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

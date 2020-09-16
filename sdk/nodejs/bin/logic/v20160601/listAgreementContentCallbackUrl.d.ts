import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listAgreementContentCallbackUrl(args: ListAgreementContentCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListAgreementContentCallbackUrlResult>;
export interface ListAgreementContentCallbackUrlArgs {
    /**
     * The integration account agreement name.
     */
    readonly agreementName: string;
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
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The workflow trigger callback URL.
 */
export interface ListAgreementContentCallbackUrlResult {
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
    readonly queries?: outputs.logic.v20160601.WorkflowTriggerListCallbackUrlQueriesResponse;
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

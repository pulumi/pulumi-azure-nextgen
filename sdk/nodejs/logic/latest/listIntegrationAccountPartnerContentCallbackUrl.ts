// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listIntegrationAccountPartnerContentCallbackUrl(args: ListIntegrationAccountPartnerContentCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountPartnerContentCallbackUrlResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:logic/latest:listIntegrationAccountPartnerContentCallbackUrl", {
        "integrationAccountName": args.integrationAccountName,
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "partnerName": args.partnerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIntegrationAccountPartnerContentCallbackUrlArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The key type.
     */
    readonly keyType?: string | enums.logic.latest.KeyType;
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
    readonly queries?: outputs.logic.latest.WorkflowTriggerListCallbackUrlQueriesResponse;
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

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare function listIntegrationAccountKeyVaultKeys(args: ListIntegrationAccountKeyVaultKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountKeyVaultKeysResult>;
export interface ListIntegrationAccountKeyVaultKeysArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The key vault reference.
     */
    readonly keyVault: inputs.logic.v20190501.KeyVaultReference;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The skip token.
     */
    readonly skipToken?: string;
}
/**
 * Collection of key vault keys.
 */
export interface ListIntegrationAccountKeyVaultKeysResult {
    /**
     * The skip token.
     */
    readonly skipToken?: string;
    /**
     * The key vault keys.
     */
    readonly value?: outputs.logic.v20190501.KeyVaultKeyResponse[];
}

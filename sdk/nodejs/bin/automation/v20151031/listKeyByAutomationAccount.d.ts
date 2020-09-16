import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listKeyByAutomationAccount(args: ListKeyByAutomationAccountArgs, opts?: pulumi.InvokeOptions): Promise<ListKeyByAutomationAccountResult>;
export interface ListKeyByAutomationAccountArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
export interface ListKeyByAutomationAccountResult {
    /**
     * Lists the automation keys.
     */
    readonly keys?: outputs.automation.v20151031.KeyResponse[];
}

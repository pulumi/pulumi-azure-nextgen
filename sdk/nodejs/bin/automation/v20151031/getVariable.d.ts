import * as pulumi from "@pulumi/pulumi";
export declare function getVariable(args: GetVariableArgs, opts?: pulumi.InvokeOptions): Promise<GetVariableResult>;
export interface GetVariableArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of variable.
     */
    readonly variableName: string;
}
/**
 * Definition of the variable.
 */
export interface GetVariableResult {
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the encrypted flag of the variable.
     */
    readonly isEncrypted?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Gets or sets the value of the variable.
     */
    readonly value?: string;
}

import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getConnection(args: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult>;
export interface GetConnectionArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * The name of connection.
     */
    readonly connectionName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Definition of the connection.
 */
export interface GetConnectionResult {
    /**
     * Gets or sets the connectionType of the connection.
     */
    readonly connectionType?: outputs.automation.v20151031.ConnectionTypeAssociationPropertyResponse;
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the field definition values of the connection.
     */
    readonly fieldDefinitionValues: {
        [key: string]: string;
    };
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}

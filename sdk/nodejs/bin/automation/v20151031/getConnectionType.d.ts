import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getConnectionType(args: GetConnectionTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionTypeResult>;
export interface GetConnectionTypeArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * The name of connection type.
     */
    readonly connectionTypeName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Definition of the connection type.
 */
export interface GetConnectionTypeResult {
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the field definitions of the connection type.
     */
    readonly fieldDefinitions: {
        [key: string]: outputs.automation.v20151031.FieldDefinitionResponse;
    };
    /**
     * Gets or sets a Boolean value to indicate if the connection type is global.
     */
    readonly isGlobal?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * Gets the name of the connection type.
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}

import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDscNodeConfiguration(args: GetDscNodeConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDscNodeConfigurationResult>;
export interface GetDscNodeConfigurationArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * The Dsc node configuration name.
     */
    readonly nodeConfigurationName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Definition of the dsc node configuration.
 */
export interface GetDscNodeConfigurationResult {
    /**
     * Gets or sets the configuration of the node.
     */
    readonly configuration?: outputs.automation.v20180115.DscConfigurationAssociationPropertyResponse;
    /**
     * Gets or sets creation time.
     */
    readonly creationTime?: string;
    /**
     * If a new build version of NodeConfiguration is required.
     */
    readonly incrementNodeConfigurationBuild?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Number of nodes with this node configuration assigned
     */
    readonly nodeCount?: number;
    /**
     * Source of node configuration.
     */
    readonly source?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}

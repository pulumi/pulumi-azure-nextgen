import * as pulumi from "@pulumi/pulumi";
export declare function getMaintenanceConfiguration(args: GetMaintenanceConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetMaintenanceConfigurationResult>;
export interface GetMaintenanceConfigurationArgs {
    /**
     * Resource Group Name
     */
    readonly resourceGroupName: string;
    /**
     * Resource Identifier
     */
    readonly resourceName: string;
}
/**
 * Maintenance configuration record type
 */
export interface GetMaintenanceConfigurationResult {
    /**
     * Gets or sets extensionProperties of the maintenanceConfiguration. This is for future use only and would be a set of key value pairs for additional information e.g. whether to follow SDP etc.
     */
    readonly extensionProperties?: {
        [key: string]: string;
    };
    /**
     * Gets or sets location of the resource
     */
    readonly location?: string;
    /**
     * Gets or sets maintenanceScope of the configuration. It represent the impact area of the maintenance
     */
    readonly maintenanceScope?: string;
    /**
     * Name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets namespace of the resource e.g. Microsoft.Maintenance or Microsoft.Sql
     */
    readonly namespace?: string;
    /**
     * Gets or sets tags of the resource
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Type of the resource
     */
    readonly type: string;
}

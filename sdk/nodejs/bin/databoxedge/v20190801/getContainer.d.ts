import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getContainer(args: GetContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerResult>;
export interface GetContainerArgs {
    /**
     * The container Name
     */
    readonly containerName: string;
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The Storage Account Name
     */
    readonly storageAccountName: string;
}
/**
 * Represents a container on the  Data Box Edge/Gateway device.
 */
export interface GetContainerResult {
    /**
     * Current status of the container.
     */
    readonly containerStatus: string;
    /**
     * The UTC time when container got created.
     */
    readonly createdDateTime: string;
    /**
     * DataFormat for Container
     */
    readonly dataFormat: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Details of the refresh job on this container.
     */
    readonly refreshDetails: outputs.databoxedge.v20190801.RefreshDetailsResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}

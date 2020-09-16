import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult>;
export interface GetShareArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The share name.
     */
    readonly name: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Represents a share on the  Data Box Edge/Gateway device.
 */
export interface GetShareResult {
    /**
     * Access protocol to be used by the share.
     */
    readonly accessProtocol: string;
    /**
     * Azure container mapping for the share.
     */
    readonly azureContainerInfo?: outputs.databoxedge.v20190701.AzureContainerInfoResponse;
    /**
     * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
     */
    readonly clientAccessRights?: outputs.databoxedge.v20190701.ClientAccessRightResponse[];
    /**
     * Data policy of the share.
     */
    readonly dataPolicy?: string;
    /**
     * Description for the share.
     */
    readonly description?: string;
    /**
     * Current monitoring status of the share.
     */
    readonly monitoringStatus: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Details of the refresh job on this share.
     */
    readonly refreshDetails?: outputs.databoxedge.v20190701.RefreshDetailsResponse;
    /**
     * Share mount point to the role.
     */
    readonly shareMappings: outputs.databoxedge.v20190701.MountPointMapResponse[];
    /**
     * Current status of the share.
     */
    readonly shareStatus: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Mapping of users and corresponding access rights on the share (required for SMB protocol).
     */
    readonly userAccessRights?: outputs.databoxedge.v20190701.UserAccessRightResponse[];
}

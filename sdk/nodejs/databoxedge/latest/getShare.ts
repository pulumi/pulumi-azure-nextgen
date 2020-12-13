// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:databoxedge/latest:getShare", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

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
    readonly azureContainerInfo?: outputs.databoxedge.latest.AzureContainerInfoResponse;
    /**
     * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
     */
    readonly clientAccessRights?: outputs.databoxedge.latest.ClientAccessRightResponse[];
    /**
     * Data policy of the share.
     */
    readonly dataPolicy?: string;
    /**
     * Description for the share.
     */
    readonly description?: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
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
    readonly refreshDetails?: outputs.databoxedge.latest.RefreshDetailsResponse;
    /**
     * Share mount point to the role.
     */
    readonly shareMappings: outputs.databoxedge.latest.MountPointMapResponse[];
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
    readonly userAccessRights?: outputs.databoxedge.latest.UserAccessRightResponse[];
}

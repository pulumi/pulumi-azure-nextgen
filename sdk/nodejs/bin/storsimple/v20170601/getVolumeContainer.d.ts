import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVolumeContainer(args: GetVolumeContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeContainerResult>;
export interface GetVolumeContainerArgs {
    /**
     * The device name
     */
    readonly deviceName: string;
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
    /**
     * The name of the volume container.
     */
    readonly volumeContainerName: string;
}
/**
 * The volume container.
 */
export interface GetVolumeContainerResult {
    /**
     * The bandwidth-rate set on the volume container.
     */
    readonly bandWidthRateInMbps?: number;
    /**
     * The ID of the bandwidth setting associated with the volume container.
     */
    readonly bandwidthSettingId?: string;
    /**
     * The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled".
     */
    readonly encryptionKey?: outputs.storsimple.v20170601.AsymmetricEncryptedSecretResponse;
    /**
     * The flag to denote whether encryption is enabled or not.
     */
    readonly encryptionStatus: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The owner ship status of the volume container. Only when the status is "NotOwned", the delete operation on the volume container is permitted.
     */
    readonly ownerShipStatus: string;
    /**
     * The path ID of storage account associated with the volume container.
     */
    readonly storageAccountCredentialId: string;
    /**
     * The total cloud storage for the volume container.
     */
    readonly totalCloudStorageUsageInBytes: number;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The number of volumes in the volume Container.
     */
    readonly volumeCount: number;
}

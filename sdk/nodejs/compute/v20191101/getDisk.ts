// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDisk(args: GetDiskArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:compute/v20191101:getDisk", {
        "diskName": args.diskName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskArgs {
    /**
     * The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     */
    readonly diskName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Disk resource.
 */
export interface GetDiskResult {
    /**
     * Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    readonly creationData: outputs.compute.v20191101.CreationDataResponse;
    /**
     * The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes.
     */
    readonly diskIOPSReadOnly?: number;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    readonly diskIOPSReadWrite?: number;
    /**
     * The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    readonly diskMBpsReadOnly?: number;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    readonly diskMBpsReadWrite?: number;
    /**
     * The size of the disk in bytes. This field is read only.
     */
    readonly diskSizeBytes: number;
    /**
     * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    readonly diskSizeGB?: number;
    /**
     * The state of the disk.
     */
    readonly diskState: string;
    /**
     * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    readonly encryption?: outputs.compute.v20191101.EncryptionResponse;
    /**
     * Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    readonly encryptionSettingsCollection?: outputs.compute.v20191101.EncryptionSettingsCollectionResponse;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    readonly hyperVGeneration?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * A relative URI containing the ID of the VM that has the disk attached.
     */
    readonly managedBy: string;
    /**
     * List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     */
    readonly managedByExtended: string[];
    /**
     * The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    readonly maxShares?: number;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The Operating System type.
     */
    readonly osType?: string;
    /**
     * The disk provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     */
    readonly shareInfo: outputs.compute.v20191101.ShareInfoElementResponse[];
    /**
     * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
     */
    readonly sku?: outputs.compute.v20191101.DiskSkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The time when the disk was created.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Unique Guid identifying the resource.
     */
    readonly uniqueId: string;
    /**
     * The Logical zone list for Disk.
     */
    readonly zones?: string[];
}

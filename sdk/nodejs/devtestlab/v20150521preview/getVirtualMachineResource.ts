// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getVirtualMachineResource(args: GetVirtualMachineResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResourceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:devtestlab/v20150521preview:getVirtualMachineResource", {
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVirtualMachineResourceArgs {
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the virtual Machine.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * A virtual machine.
 */
export interface GetVirtualMachineResourceResult {
    /**
     * The artifact deployment status for the virtual machine.
     */
    readonly artifactDeploymentStatus?: outputs.devtestlab.v20150521preview.ArtifactDeploymentStatusPropertiesResponse;
    /**
     * The artifacts to be installed on the virtual machine.
     */
    readonly artifacts?: outputs.devtestlab.v20150521preview.ArtifactInstallPropertiesResponse[];
    /**
     * The resource identifier (Microsoft.Compute) of the virtual machine.
     */
    readonly computeId?: string;
    /**
     * The email address of creator of the virtual machine.
     */
    readonly createdByUser?: string;
    /**
     * The object identifier of the creator of the virtual machine.
     */
    readonly createdByUserId?: string;
    /**
     * The custom image identifier of the virtual machine.
     */
    readonly customImageId?: string;
    /**
     * Indicates whether the virtual machine is to be created without a public IP address.
     */
    readonly disallowPublicIpAddress?: boolean;
    /**
     * The fully-qualified domain name of the virtual machine.
     */
    readonly fqdn?: string;
    /**
     * The Microsoft Azure Marketplace image reference of the virtual machine.
     */
    readonly galleryImageReference?: outputs.devtestlab.v20150521preview.GalleryImageReferenceResponse;
    /**
     * The identifier of the resource.
     */
    readonly id?: string;
    /**
     * A value indicating whether this virtual machine uses an SSH key for authentication.
     */
    readonly isAuthenticationWithSshKey?: boolean;
    /**
     * The lab subnet name of the virtual machine.
     */
    readonly labSubnetName?: string;
    /**
     * The lab virtual network identifier of the virtual machine.
     */
    readonly labVirtualNetworkId?: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name?: string;
    /**
     * The notes of the virtual machine.
     */
    readonly notes?: string;
    /**
     * The OS type of the virtual machine.
     */
    readonly osType?: string;
    /**
     * The object identifier of the owner of the virtual machine.
     */
    readonly ownerObjectId?: string;
    /**
     * The password of the virtual machine administrator.
     */
    readonly password?: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The size of the virtual machine.
     */
    readonly size?: string;
    /**
     * The SSH key of the virtual machine administrator.
     */
    readonly sshKey?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type?: string;
    /**
     * The user name of the virtual machine.
     */
    readonly userName?: string;
}

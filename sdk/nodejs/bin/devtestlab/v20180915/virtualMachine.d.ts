import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A virtual machine.
 */
export declare class VirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachine;
    /**
     * Returns true if the given object is an instance of VirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualMachine;
    /**
     * Indicates whether another user can take ownership of the virtual machine
     */
    readonly allowClaim: pulumi.Output<boolean | undefined>;
    /**
     * The applicable schedule for the virtual machine.
     */
    readonly applicableSchedule: pulumi.Output<outputs.devtestlab.v20180915.ApplicableScheduleResponse>;
    /**
     * The artifact deployment status for the virtual machine.
     */
    readonly artifactDeploymentStatus: pulumi.Output<outputs.devtestlab.v20180915.ArtifactDeploymentStatusPropertiesResponse | undefined>;
    /**
     * The artifacts to be installed on the virtual machine.
     */
    readonly artifacts: pulumi.Output<outputs.devtestlab.v20180915.ArtifactInstallPropertiesResponse[] | undefined>;
    /**
     * The resource identifier (Microsoft.Compute) of the virtual machine.
     */
    readonly computeId: pulumi.Output<string | undefined>;
    /**
     * The compute virtual machine properties.
     */
    readonly computeVm: pulumi.Output<outputs.devtestlab.v20180915.ComputeVmPropertiesResponse>;
    /**
     * The email address of creator of the virtual machine.
     */
    readonly createdByUser: pulumi.Output<string | undefined>;
    /**
     * The object identifier of the creator of the virtual machine.
     */
    readonly createdByUserId: pulumi.Output<string | undefined>;
    /**
     * The creation date of the virtual machine.
     */
    readonly createdDate: pulumi.Output<string | undefined>;
    /**
     * The custom image identifier of the virtual machine.
     */
    readonly customImageId: pulumi.Output<string | undefined>;
    /**
     * New or existing data disks to attach to the virtual machine after creation
     */
    readonly dataDiskParameters: pulumi.Output<outputs.devtestlab.v20180915.DataDiskPropertiesResponse[] | undefined>;
    /**
     * Indicates whether the virtual machine is to be created without a public IP address.
     */
    readonly disallowPublicIpAddress: pulumi.Output<boolean | undefined>;
    /**
     * The resource ID of the environment that contains this virtual machine, if any.
     */
    readonly environmentId: pulumi.Output<string | undefined>;
    /**
     * The expiration date for VM.
     */
    readonly expirationDate: pulumi.Output<string | undefined>;
    /**
     * The fully-qualified domain name of the virtual machine.
     */
    readonly fqdn: pulumi.Output<string | undefined>;
    /**
     * The Microsoft Azure Marketplace image reference of the virtual machine.
     */
    readonly galleryImageReference: pulumi.Output<outputs.devtestlab.v20180915.GalleryImageReferenceResponse | undefined>;
    /**
     * Indicates whether this virtual machine uses an SSH key for authentication.
     */
    readonly isAuthenticationWithSshKey: pulumi.Output<boolean | undefined>;
    /**
     * The lab subnet name of the virtual machine.
     */
    readonly labSubnetName: pulumi.Output<string | undefined>;
    /**
     * The lab virtual network identifier of the virtual machine.
     */
    readonly labVirtualNetworkId: pulumi.Output<string | undefined>;
    /**
     * Last known compute power state captured in DTL
     */
    readonly lastKnownPowerState: pulumi.Output<string | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The network interface properties.
     */
    readonly networkInterface: pulumi.Output<outputs.devtestlab.v20180915.NetworkInterfacePropertiesResponse | undefined>;
    /**
     * The notes of the virtual machine.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * The OS type of the virtual machine.
     */
    readonly osType: pulumi.Output<string | undefined>;
    /**
     * The object identifier of the owner of the virtual machine.
     */
    readonly ownerObjectId: pulumi.Output<string | undefined>;
    /**
     * The user principal name of the virtual machine owner.
     */
    readonly ownerUserPrincipalName: pulumi.Output<string | undefined>;
    /**
     * The password of the virtual machine administrator.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The id of the plan associated with the virtual machine image
     */
    readonly planId: pulumi.Output<string | undefined>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Virtual Machine schedules to be created
     */
    readonly scheduleParameters: pulumi.Output<outputs.devtestlab.v20180915.ScheduleCreationParameterResponse[] | undefined>;
    /**
     * The size of the virtual machine.
     */
    readonly size: pulumi.Output<string | undefined>;
    /**
     * The SSH key of the virtual machine administrator.
     */
    readonly sshKey: pulumi.Output<string | undefined>;
    /**
     * Storage type to use for virtual machine (i.e. Standard, Premium).
     */
    readonly storageType: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * The user name of the virtual machine.
     */
    readonly userName: pulumi.Output<string | undefined>;
    /**
     * Tells source of creation of lab virtual machine. Output property only.
     */
    readonly virtualMachineCreationSource: pulumi.Output<string | undefined>;
    /**
     * Create a VirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * Indicates whether another user can take ownership of the virtual machine
     */
    readonly allowClaim?: pulumi.Input<boolean>;
    /**
     * The artifact deployment status for the virtual machine.
     */
    readonly artifactDeploymentStatus?: pulumi.Input<inputs.devtestlab.v20180915.ArtifactDeploymentStatusProperties>;
    /**
     * The artifacts to be installed on the virtual machine.
     */
    readonly artifacts?: pulumi.Input<pulumi.Input<inputs.devtestlab.v20180915.ArtifactInstallProperties>[]>;
    /**
     * The resource identifier (Microsoft.Compute) of the virtual machine.
     */
    readonly computeId?: pulumi.Input<string>;
    /**
     * The email address of creator of the virtual machine.
     */
    readonly createdByUser?: pulumi.Input<string>;
    /**
     * The object identifier of the creator of the virtual machine.
     */
    readonly createdByUserId?: pulumi.Input<string>;
    /**
     * The creation date of the virtual machine.
     */
    readonly createdDate?: pulumi.Input<string>;
    /**
     * The custom image identifier of the virtual machine.
     */
    readonly customImageId?: pulumi.Input<string>;
    /**
     * New or existing data disks to attach to the virtual machine after creation
     */
    readonly dataDiskParameters?: pulumi.Input<pulumi.Input<inputs.devtestlab.v20180915.DataDiskProperties>[]>;
    /**
     * Indicates whether the virtual machine is to be created without a public IP address.
     */
    readonly disallowPublicIpAddress?: pulumi.Input<boolean>;
    /**
     * The resource ID of the environment that contains this virtual machine, if any.
     */
    readonly environmentId?: pulumi.Input<string>;
    /**
     * The expiration date for VM.
     */
    readonly expirationDate?: pulumi.Input<string>;
    /**
     * The fully-qualified domain name of the virtual machine.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * The Microsoft Azure Marketplace image reference of the virtual machine.
     */
    readonly galleryImageReference?: pulumi.Input<inputs.devtestlab.v20180915.GalleryImageReference>;
    /**
     * Indicates whether this virtual machine uses an SSH key for authentication.
     */
    readonly isAuthenticationWithSshKey?: pulumi.Input<boolean>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The lab subnet name of the virtual machine.
     */
    readonly labSubnetName?: pulumi.Input<string>;
    /**
     * The lab virtual network identifier of the virtual machine.
     */
    readonly labVirtualNetworkId?: pulumi.Input<string>;
    /**
     * Last known compute power state captured in DTL
     */
    readonly lastKnownPowerState?: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The network interface properties.
     */
    readonly networkInterface?: pulumi.Input<inputs.devtestlab.v20180915.NetworkInterfaceProperties>;
    /**
     * The notes of the virtual machine.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * The OS type of the virtual machine.
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The object identifier of the owner of the virtual machine.
     */
    readonly ownerObjectId?: pulumi.Input<string>;
    /**
     * The user principal name of the virtual machine owner.
     */
    readonly ownerUserPrincipalName?: pulumi.Input<string>;
    /**
     * The password of the virtual machine administrator.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The id of the plan associated with the virtual machine image
     */
    readonly planId?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Virtual Machine schedules to be created
     */
    readonly scheduleParameters?: pulumi.Input<pulumi.Input<inputs.devtestlab.v20180915.ScheduleCreationParameter>[]>;
    /**
     * The size of the virtual machine.
     */
    readonly size?: pulumi.Input<string>;
    /**
     * The SSH key of the virtual machine administrator.
     */
    readonly sshKey?: pulumi.Input<string>;
    /**
     * Storage type to use for virtual machine (i.e. Standard, Premium).
     */
    readonly storageType?: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The user name of the virtual machine.
     */
    readonly userName?: pulumi.Input<string>;
    /**
     * Tells source of creation of lab virtual machine. Output property only.
     */
    readonly virtualMachineCreationSource?: pulumi.Input<string>;
}

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Contains information about a pool.
 */
export declare class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pool;
    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Pool;
    readonly allocationState: pulumi.Output<string>;
    readonly allocationStateTransitionTime: pulumi.Output<string>;
    /**
     * The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
     */
    readonly applicationLicenses: pulumi.Output<string[] | undefined>;
    /**
     * Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
     */
    readonly applicationPackages: pulumi.Output<outputs.batch.v20200501.ApplicationPackageReferenceResponse[] | undefined>;
    /**
     * This property is set only if the pool automatically scales, i.e. autoScaleSettings are used.
     */
    readonly autoScaleRun: pulumi.Output<outputs.batch.v20200501.AutoScaleRunResponse>;
    /**
     * For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
     */
    readonly certificates: pulumi.Output<outputs.batch.v20200501.CertificateReferenceResponse[] | undefined>;
    readonly creationTime: pulumi.Output<string>;
    readonly currentDedicatedNodes: pulumi.Output<number>;
    readonly currentLowPriorityNodes: pulumi.Output<number>;
    /**
     * Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
     */
    readonly deploymentConfiguration: pulumi.Output<outputs.batch.v20200501.DeploymentConfigurationResponse | undefined>;
    /**
     * The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
     */
    readonly interNodeCommunication: pulumi.Output<string | undefined>;
    /**
     * This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state.
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
     */
    readonly maxTasksPerNode: pulumi.Output<number | undefined>;
    /**
     * The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
     */
    readonly metadata: pulumi.Output<outputs.batch.v20200501.MetadataItemResponse[] | undefined>;
    /**
     * This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
     */
    readonly mountConfiguration: pulumi.Output<outputs.batch.v20200501.MountConfigurationResponse[] | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The network configuration for a pool.
     */
    readonly networkConfiguration: pulumi.Output<outputs.batch.v20200501.NetworkConfigurationResponse | undefined>;
    readonly provisioningState: pulumi.Output<string>;
    readonly provisioningStateTransitionTime: pulumi.Output<string>;
    /**
     * Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
     */
    readonly resizeOperationStatus: pulumi.Output<outputs.batch.v20200501.ResizeOperationStatusResponse>;
    /**
     * Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
     */
    readonly scaleSettings: pulumi.Output<outputs.batch.v20200501.ScaleSettingsResponse | undefined>;
    /**
     * In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
     */
    readonly startTask: pulumi.Output<outputs.batch.v20200501.StartTaskResponse | undefined>;
    /**
     * If not specified, the default is spread.
     */
    readonly taskSchedulingPolicy: pulumi.Output<outputs.batch.v20200501.TaskSchedulingPolicyResponse | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    readonly userAccounts: pulumi.Output<outputs.batch.v20200501.UserAccountResponse[] | undefined>;
    /**
     * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    readonly vmSize: pulumi.Output<string | undefined>;
    /**
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
     */
    readonly applicationLicenses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
     */
    readonly applicationPackages?: pulumi.Input<pulumi.Input<inputs.batch.v20200501.ApplicationPackageReference>[]>;
    /**
     * For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
     */
    readonly certificates?: pulumi.Input<pulumi.Input<inputs.batch.v20200501.CertificateReference>[]>;
    /**
     * Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
     */
    readonly deploymentConfiguration?: pulumi.Input<inputs.batch.v20200501.DeploymentConfiguration>;
    /**
     * The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
     */
    readonly interNodeCommunication?: pulumi.Input<string>;
    /**
     * The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
     */
    readonly maxTasksPerNode?: pulumi.Input<number>;
    /**
     * The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
     */
    readonly metadata?: pulumi.Input<pulumi.Input<inputs.batch.v20200501.MetadataItem>[]>;
    /**
     * This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
     */
    readonly mountConfiguration?: pulumi.Input<pulumi.Input<inputs.batch.v20200501.MountConfiguration>[]>;
    /**
     * The network configuration for a pool.
     */
    readonly networkConfiguration?: pulumi.Input<inputs.batch.v20200501.NetworkConfiguration>;
    /**
     * The pool name. This must be unique within the account.
     */
    readonly poolName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
     */
    readonly scaleSettings?: pulumi.Input<inputs.batch.v20200501.ScaleSettings>;
    /**
     * In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
     */
    readonly startTask?: pulumi.Input<inputs.batch.v20200501.StartTask>;
    /**
     * If not specified, the default is spread.
     */
    readonly taskSchedulingPolicy?: pulumi.Input<inputs.batch.v20200501.TaskSchedulingPolicy>;
    readonly userAccounts?: pulumi.Input<pulumi.Input<inputs.batch.v20200501.UserAccount>[]>;
    /**
     * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    readonly vmSize?: pulumi.Input<string>;
}

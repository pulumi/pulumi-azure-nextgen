// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Batch.V20190401
{
    public static class GetPool
    {
        public static Task<GetPoolResult> InvokeAsync(GetPoolArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPoolResult>("azure-nextgen:batch/v20190401:getPool", args ?? new GetPoolArgs(), options.WithVersion());
    }


    public sealed class GetPoolArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Batch account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The pool name. This must be unique within the account.
        /// </summary>
        [Input("poolName", required: true)]
        public string PoolName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the Batch account.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPoolArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPoolResult
    {
        public readonly string AllocationState;
        public readonly string AllocationStateTransitionTime;
        /// <summary>
        /// The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
        /// </summary>
        public readonly ImmutableArray<string> ApplicationLicenses;
        /// <summary>
        /// Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationPackageReferenceResponse> ApplicationPackages;
        /// <summary>
        /// This property is set only if the pool automatically scales, i.e. autoScaleSettings are used.
        /// </summary>
        public readonly Outputs.AutoScaleRunResponse AutoScaleRun;
        /// <summary>
        /// For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
        /// </summary>
        public readonly ImmutableArray<Outputs.CertificateReferenceResponse> Certificates;
        public readonly string CreationTime;
        public readonly int CurrentDedicatedNodes;
        public readonly int CurrentLowPriorityNodes;
        /// <summary>
        /// Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
        /// </summary>
        public readonly Outputs.DeploymentConfigurationResponse? DeploymentConfiguration;
        /// <summary>
        /// The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// The ETag of the resource, used for concurrency statements.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The ID of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
        /// </summary>
        public readonly string? InterNodeCommunication;
        /// <summary>
        /// This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state.
        /// </summary>
        public readonly string LastModified;
        /// <summary>
        /// The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
        /// </summary>
        public readonly int? MaxTasksPerNode;
        /// <summary>
        /// The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
        /// </summary>
        public readonly ImmutableArray<Outputs.MetadataItemResponse> Metadata;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The network configuration for a pool.
        /// </summary>
        public readonly Outputs.NetworkConfigurationResponse? NetworkConfiguration;
        public readonly string ProvisioningState;
        public readonly string ProvisioningStateTransitionTime;
        /// <summary>
        /// Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
        /// </summary>
        public readonly Outputs.ResizeOperationStatusResponse ResizeOperationStatus;
        /// <summary>
        /// Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
        /// </summary>
        public readonly Outputs.ScaleSettingsResponse? ScaleSettings;
        /// <summary>
        /// In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
        /// </summary>
        public readonly Outputs.StartTaskResponse? StartTask;
        /// <summary>
        /// If not specified, the default is spread.
        /// </summary>
        public readonly Outputs.TaskSchedulingPolicyResponse? TaskSchedulingPolicy;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;
        public readonly ImmutableArray<Outputs.UserAccountResponse> UserAccounts;
        /// <summary>
        /// For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
        /// </summary>
        public readonly string? VmSize;

        [OutputConstructor]
        private GetPoolResult(
            string allocationState,

            string allocationStateTransitionTime,

            ImmutableArray<string> applicationLicenses,

            ImmutableArray<Outputs.ApplicationPackageReferenceResponse> applicationPackages,

            Outputs.AutoScaleRunResponse autoScaleRun,

            ImmutableArray<Outputs.CertificateReferenceResponse> certificates,

            string creationTime,

            int currentDedicatedNodes,

            int currentLowPriorityNodes,

            Outputs.DeploymentConfigurationResponse? deploymentConfiguration,

            string? displayName,

            string etag,

            string id,

            string? interNodeCommunication,

            string lastModified,

            int? maxTasksPerNode,

            ImmutableArray<Outputs.MetadataItemResponse> metadata,

            string name,

            Outputs.NetworkConfigurationResponse? networkConfiguration,

            string provisioningState,

            string provisioningStateTransitionTime,

            Outputs.ResizeOperationStatusResponse resizeOperationStatus,

            Outputs.ScaleSettingsResponse? scaleSettings,

            Outputs.StartTaskResponse? startTask,

            Outputs.TaskSchedulingPolicyResponse? taskSchedulingPolicy,

            string type,

            ImmutableArray<Outputs.UserAccountResponse> userAccounts,

            string? vmSize)
        {
            AllocationState = allocationState;
            AllocationStateTransitionTime = allocationStateTransitionTime;
            ApplicationLicenses = applicationLicenses;
            ApplicationPackages = applicationPackages;
            AutoScaleRun = autoScaleRun;
            Certificates = certificates;
            CreationTime = creationTime;
            CurrentDedicatedNodes = currentDedicatedNodes;
            CurrentLowPriorityNodes = currentLowPriorityNodes;
            DeploymentConfiguration = deploymentConfiguration;
            DisplayName = displayName;
            Etag = etag;
            Id = id;
            InterNodeCommunication = interNodeCommunication;
            LastModified = lastModified;
            MaxTasksPerNode = maxTasksPerNode;
            Metadata = metadata;
            Name = name;
            NetworkConfiguration = networkConfiguration;
            ProvisioningState = provisioningState;
            ProvisioningStateTransitionTime = provisioningStateTransitionTime;
            ResizeOperationStatus = resizeOperationStatus;
            ScaleSettings = scaleSettings;
            StartTask = startTask;
            TaskSchedulingPolicy = taskSchedulingPolicy;
            Type = type;
            UserAccounts = userAccounts;
            VmSize = vmSize;
        }
    }
}

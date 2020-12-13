// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.V20160515
{
    public static class GetVirtualMachine
    {
        public static Task<GetVirtualMachineResult> InvokeAsync(GetVirtualMachineArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualMachineResult>("azure-nextgen:devtestlab/v20160515:getVirtualMachine", args ?? new GetVirtualMachineArgs(), options.WithVersion());
    }


    public sealed class GetVirtualMachineArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public string LabName { get; set; } = null!;

        /// <summary>
        /// The name of the virtual machine.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetVirtualMachineArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualMachineResult
    {
        /// <summary>
        /// Indicates whether another user can take ownership of the virtual machine
        /// </summary>
        public readonly bool? AllowClaim;
        /// <summary>
        /// The applicable schedule for the virtual machine.
        /// </summary>
        public readonly Outputs.ApplicableScheduleResponse? ApplicableSchedule;
        /// <summary>
        /// The artifact deployment status for the virtual machine.
        /// </summary>
        public readonly Outputs.ArtifactDeploymentStatusPropertiesResponse? ArtifactDeploymentStatus;
        /// <summary>
        /// The artifacts to be installed on the virtual machine.
        /// </summary>
        public readonly ImmutableArray<Outputs.ArtifactInstallPropertiesResponse> Artifacts;
        /// <summary>
        /// The resource identifier (Microsoft.Compute) of the virtual machine.
        /// </summary>
        public readonly string ComputeId;
        /// <summary>
        /// The compute virtual machine properties.
        /// </summary>
        public readonly Outputs.ComputeVmPropertiesResponse? ComputeVm;
        /// <summary>
        /// The email address of creator of the virtual machine.
        /// </summary>
        public readonly string? CreatedByUser;
        /// <summary>
        /// The object identifier of the creator of the virtual machine.
        /// </summary>
        public readonly string? CreatedByUserId;
        /// <summary>
        /// The creation date of the virtual machine.
        /// </summary>
        public readonly string? CreatedDate;
        /// <summary>
        /// The custom image identifier of the virtual machine.
        /// </summary>
        public readonly string? CustomImageId;
        /// <summary>
        /// Indicates whether the virtual machine is to be created without a public IP address.
        /// </summary>
        public readonly bool? DisallowPublicIpAddress;
        /// <summary>
        /// The resource ID of the environment that contains this virtual machine, if any.
        /// </summary>
        public readonly string? EnvironmentId;
        /// <summary>
        /// The expiration date for VM.
        /// </summary>
        public readonly string? ExpirationDate;
        /// <summary>
        /// The fully-qualified domain name of the virtual machine.
        /// </summary>
        public readonly string? Fqdn;
        /// <summary>
        /// The Microsoft Azure Marketplace image reference of the virtual machine.
        /// </summary>
        public readonly Outputs.GalleryImageReferenceResponse? GalleryImageReference;
        /// <summary>
        /// The identifier of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Indicates whether this virtual machine uses an SSH key for authentication.
        /// </summary>
        public readonly bool? IsAuthenticationWithSshKey;
        /// <summary>
        /// The lab subnet name of the virtual machine.
        /// </summary>
        public readonly string? LabSubnetName;
        /// <summary>
        /// The lab virtual network identifier of the virtual machine.
        /// </summary>
        public readonly string? LabVirtualNetworkId;
        /// <summary>
        /// The location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The network interface properties.
        /// </summary>
        public readonly Outputs.NetworkInterfacePropertiesResponse? NetworkInterface;
        /// <summary>
        /// The notes of the virtual machine.
        /// </summary>
        public readonly string? Notes;
        /// <summary>
        /// The OS type of the virtual machine.
        /// </summary>
        public readonly string? OsType;
        /// <summary>
        /// The object identifier of the owner of the virtual machine.
        /// </summary>
        public readonly string? OwnerObjectId;
        /// <summary>
        /// The user principal name of the virtual machine owner.
        /// </summary>
        public readonly string? OwnerUserPrincipalName;
        /// <summary>
        /// The password of the virtual machine administrator.
        /// </summary>
        public readonly string? Password;
        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The size of the virtual machine.
        /// </summary>
        public readonly string? Size;
        /// <summary>
        /// The SSH key of the virtual machine administrator.
        /// </summary>
        public readonly string? SshKey;
        /// <summary>
        /// Storage type to use for virtual machine (i.e. Standard, Premium).
        /// </summary>
        public readonly string? StorageType;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        public readonly string? UniqueIdentifier;
        /// <summary>
        /// The user name of the virtual machine.
        /// </summary>
        public readonly string? UserName;
        /// <summary>
        /// Tells source of creation of lab virtual machine. Output property only.
        /// </summary>
        public readonly string? VirtualMachineCreationSource;

        [OutputConstructor]
        private GetVirtualMachineResult(
            bool? allowClaim,

            Outputs.ApplicableScheduleResponse? applicableSchedule,

            Outputs.ArtifactDeploymentStatusPropertiesResponse? artifactDeploymentStatus,

            ImmutableArray<Outputs.ArtifactInstallPropertiesResponse> artifacts,

            string computeId,

            Outputs.ComputeVmPropertiesResponse? computeVm,

            string? createdByUser,

            string? createdByUserId,

            string? createdDate,

            string? customImageId,

            bool? disallowPublicIpAddress,

            string? environmentId,

            string? expirationDate,

            string? fqdn,

            Outputs.GalleryImageReferenceResponse? galleryImageReference,

            string id,

            bool? isAuthenticationWithSshKey,

            string? labSubnetName,

            string? labVirtualNetworkId,

            string? location,

            string name,

            Outputs.NetworkInterfacePropertiesResponse? networkInterface,

            string? notes,

            string? osType,

            string? ownerObjectId,

            string? ownerUserPrincipalName,

            string? password,

            string? provisioningState,

            string? size,

            string? sshKey,

            string? storageType,

            ImmutableDictionary<string, string>? tags,

            string type,

            string? uniqueIdentifier,

            string? userName,

            string? virtualMachineCreationSource)
        {
            AllowClaim = allowClaim;
            ApplicableSchedule = applicableSchedule;
            ArtifactDeploymentStatus = artifactDeploymentStatus;
            Artifacts = artifacts;
            ComputeId = computeId;
            ComputeVm = computeVm;
            CreatedByUser = createdByUser;
            CreatedByUserId = createdByUserId;
            CreatedDate = createdDate;
            CustomImageId = customImageId;
            DisallowPublicIpAddress = disallowPublicIpAddress;
            EnvironmentId = environmentId;
            ExpirationDate = expirationDate;
            Fqdn = fqdn;
            GalleryImageReference = galleryImageReference;
            Id = id;
            IsAuthenticationWithSshKey = isAuthenticationWithSshKey;
            LabSubnetName = labSubnetName;
            LabVirtualNetworkId = labVirtualNetworkId;
            Location = location;
            Name = name;
            NetworkInterface = networkInterface;
            Notes = notes;
            OsType = osType;
            OwnerObjectId = ownerObjectId;
            OwnerUserPrincipalName = ownerUserPrincipalName;
            Password = password;
            ProvisioningState = provisioningState;
            Size = size;
            SshKey = sshKey;
            StorageType = storageType;
            Tags = tags;
            Type = type;
            UniqueIdentifier = uniqueIdentifier;
            UserName = userName;
            VirtualMachineCreationSource = virtualMachineCreationSource;
        }
    }
}

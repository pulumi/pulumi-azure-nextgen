// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HybridCompute.V20200802
{
    public static class GetMachine
    {
        public static Task<GetMachineResult> InvokeAsync(GetMachineArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetMachineResult>("azure-nextgen:hybridcompute/v20200802:getMachine", args ?? new GetMachineArgs(), options.WithVersion());
    }


    public sealed class GetMachineArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The expand expression to apply on the operation.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the hybrid machine.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetMachineArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetMachineResult
    {
        /// <summary>
        /// Specifies the AD fully qualified display name.
        /// </summary>
        public readonly string AdFqdn;
        /// <summary>
        /// The hybrid machine agent full version.
        /// </summary>
        public readonly string AgentVersion;
        /// <summary>
        /// Public Key that the client provides to be used during initial resource onboarding
        /// </summary>
        public readonly string? ClientPublicKey;
        /// <summary>
        /// Specifies the hybrid machine display name.
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// Specifies the DNS fully qualified display name.
        /// </summary>
        public readonly string DnsFqdn;
        /// <summary>
        /// Specifies the Windows domain name.
        /// </summary>
        public readonly string DomainName;
        /// <summary>
        /// Details about the error state.
        /// </summary>
        public readonly ImmutableArray<Outputs.ErrorDetailResponse> ErrorDetails;
        /// <summary>
        /// Machine Extensions information
        /// </summary>
        public readonly ImmutableArray<Outputs.MachineExtensionInstanceViewResponse> Extensions;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        public readonly Outputs.MachineResponseIdentity? Identity;
        /// <summary>
        /// The time of the last status change.
        /// </summary>
        public readonly string LastStatusChange;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Metadata pertaining to the geographic location of the resource.
        /// </summary>
        public readonly Outputs.LocationDataResponse? LocationData;
        /// <summary>
        /// Specifies the hybrid machine FQDN.
        /// </summary>
        public readonly string MachineFqdn;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The Operating System running on the hybrid machine.
        /// </summary>
        public readonly string OsName;
        /// <summary>
        /// Specifies the operating system settings for the hybrid machine.
        /// </summary>
        public readonly Outputs.MachinePropertiesResponseOsProfile? OsProfile;
        /// <summary>
        /// Specifies the Operating System product SKU.
        /// </summary>
        public readonly string OsSku;
        /// <summary>
        /// The version of Operating System running on the hybrid machine.
        /// </summary>
        public readonly string OsVersion;
        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The status of the hybrid machine agent.
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Specifies the hybrid machine unique ID.
        /// </summary>
        public readonly string? VmId;
        /// <summary>
        /// Specifies the Arc Machine's unique SMBIOS ID
        /// </summary>
        public readonly string VmUuid;

        [OutputConstructor]
        private GetMachineResult(
            string adFqdn,

            string agentVersion,

            string? clientPublicKey,

            string displayName,

            string dnsFqdn,

            string domainName,

            ImmutableArray<Outputs.ErrorDetailResponse> errorDetails,

            ImmutableArray<Outputs.MachineExtensionInstanceViewResponse> extensions,

            string id,

            Outputs.MachineResponseIdentity? identity,

            string lastStatusChange,

            string location,

            Outputs.LocationDataResponse? locationData,

            string machineFqdn,

            string name,

            string osName,

            Outputs.MachinePropertiesResponseOsProfile? osProfile,

            string osSku,

            string osVersion,

            string provisioningState,

            string status,

            ImmutableDictionary<string, string>? tags,

            string type,

            string? vmId,

            string vmUuid)
        {
            AdFqdn = adFqdn;
            AgentVersion = agentVersion;
            ClientPublicKey = clientPublicKey;
            DisplayName = displayName;
            DnsFqdn = dnsFqdn;
            DomainName = domainName;
            ErrorDetails = errorDetails;
            Extensions = extensions;
            Id = id;
            Identity = identity;
            LastStatusChange = lastStatusChange;
            Location = location;
            LocationData = locationData;
            MachineFqdn = machineFqdn;
            Name = name;
            OsName = osName;
            OsProfile = osProfile;
            OsSku = osSku;
            OsVersion = osVersion;
            ProvisioningState = provisioningState;
            Status = status;
            Tags = tags;
            Type = type;
            VmId = vmId;
            VmUuid = vmUuid;
        }
    }
}

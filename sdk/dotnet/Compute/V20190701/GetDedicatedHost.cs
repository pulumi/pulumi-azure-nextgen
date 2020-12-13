// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20190701
{
    public static class GetDedicatedHost
    {
        public static Task<GetDedicatedHostResult> InvokeAsync(GetDedicatedHostArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDedicatedHostResult>("azure-nextgen:compute/v20190701:getDedicatedHost", args ?? new GetDedicatedHostArgs(), options.WithVersion());
    }


    public sealed class GetDedicatedHostArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The expand expression to apply on the operation.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the dedicated host group.
        /// </summary>
        [Input("hostGroupName", required: true)]
        public string HostGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the dedicated host.
        /// </summary>
        [Input("hostName", required: true)]
        public string HostName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDedicatedHostArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDedicatedHostResult
    {
        /// <summary>
        /// Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
        /// </summary>
        public readonly bool? AutoReplaceOnFailure;
        /// <summary>
        /// A unique id generated and assigned to the dedicated host by the platform. &lt;br&gt;&lt;br&gt; Does not change throughout the lifetime of the host.
        /// </summary>
        public readonly string HostId;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The dedicated host instance view.
        /// </summary>
        public readonly Outputs.DedicatedHostInstanceViewResponse InstanceView;
        /// <summary>
        /// Specifies the software license type that will be applied to the VMs deployed on the dedicated host. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **None** &lt;br&gt;&lt;br&gt; **Windows_Server_Hybrid** &lt;br&gt;&lt;br&gt; **Windows_Server_Perpetual** &lt;br&gt;&lt;br&gt; Default: **None**
        /// </summary>
        public readonly string? LicenseType;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Fault domain of the dedicated host within a dedicated host group.
        /// </summary>
        public readonly int? PlatformFaultDomain;
        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The date when the host was first provisioned.
        /// </summary>
        public readonly string ProvisioningTime;
        /// <summary>
        /// SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
        /// </summary>
        public readonly Outputs.SkuResponse Sku;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// A list of references to all virtual machines in the Dedicated Host.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceReadOnlyResponse> VirtualMachines;

        [OutputConstructor]
        private GetDedicatedHostResult(
            bool? autoReplaceOnFailure,

            string hostId,

            string id,

            Outputs.DedicatedHostInstanceViewResponse instanceView,

            string? licenseType,

            string location,

            string name,

            int? platformFaultDomain,

            string provisioningState,

            string provisioningTime,

            Outputs.SkuResponse sku,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<Outputs.SubResourceReadOnlyResponse> virtualMachines)
        {
            AutoReplaceOnFailure = autoReplaceOnFailure;
            HostId = hostId;
            Id = id;
            InstanceView = instanceView;
            LicenseType = licenseType;
            Location = location;
            Name = name;
            PlatformFaultDomain = platformFaultDomain;
            ProvisioningState = provisioningState;
            ProvisioningTime = provisioningTime;
            Sku = sku;
            Tags = tags;
            Type = type;
            VirtualMachines = virtualMachines;
        }
    }
}

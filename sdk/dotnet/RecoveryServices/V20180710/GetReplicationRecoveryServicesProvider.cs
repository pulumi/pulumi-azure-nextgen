// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180710
{
    public static class GetReplicationRecoveryServicesProvider
    {
        public static Task<GetReplicationRecoveryServicesProviderResult> InvokeAsync(GetReplicationRecoveryServicesProviderArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetReplicationRecoveryServicesProviderResult>("azure-nextgen:recoveryservices/v20180710:getReplicationRecoveryServicesProvider", args ?? new GetReplicationRecoveryServicesProviderArgs(), options.WithVersion());
    }


    public sealed class GetReplicationRecoveryServicesProviderArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Fabric name.
        /// </summary>
        [Input("fabricName", required: true)]
        public string FabricName { get; set; } = null!;

        /// <summary>
        /// Recovery services provider name
        /// </summary>
        [Input("providerName", required: true)]
        public string ProviderName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group where the recovery services vault is present.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the recovery services vault.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public GetReplicationRecoveryServicesProviderArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetReplicationRecoveryServicesProviderResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource Location
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource Name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provider properties.
        /// </summary>
        public readonly Outputs.RecoveryServicesProviderPropertiesResponse Properties;
        /// <summary>
        /// Resource Type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetReplicationRecoveryServicesProviderResult(
            string id,

            string? location,

            string name,

            Outputs.RecoveryServicesProviderPropertiesResponse properties,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}

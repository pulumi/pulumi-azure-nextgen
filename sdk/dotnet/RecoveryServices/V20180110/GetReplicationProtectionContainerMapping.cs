// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180110
{
    public static class GetReplicationProtectionContainerMapping
    {
        public static Task<GetReplicationProtectionContainerMappingResult> InvokeAsync(GetReplicationProtectionContainerMappingArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetReplicationProtectionContainerMappingResult>("azure-nextgen:recoveryservices/v20180110:getReplicationProtectionContainerMapping", args ?? new GetReplicationProtectionContainerMappingArgs(), options.WithVersion());
    }


    public sealed class GetReplicationProtectionContainerMappingArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Fabric name.
        /// </summary>
        [Input("fabricName", required: true)]
        public string FabricName { get; set; } = null!;

        /// <summary>
        /// Protection Container mapping name.
        /// </summary>
        [Input("mappingName", required: true)]
        public string MappingName { get; set; } = null!;

        /// <summary>
        /// Protection container name.
        /// </summary>
        [Input("protectionContainerName", required: true)]
        public string ProtectionContainerName { get; set; } = null!;

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

        public GetReplicationProtectionContainerMappingArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetReplicationProtectionContainerMappingResult
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
        /// The custom data.
        /// </summary>
        public readonly Outputs.ProtectionContainerMappingPropertiesResponse Properties;
        /// <summary>
        /// Resource Type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetReplicationProtectionContainerMappingResult(
            string id,

            string? location,

            string name,

            Outputs.ProtectionContainerMappingPropertiesResponse properties,

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

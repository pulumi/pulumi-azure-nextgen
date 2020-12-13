// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180710
{
    public static class GetReplicationFabric
    {
        public static Task<GetReplicationFabricResult> InvokeAsync(GetReplicationFabricArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetReplicationFabricResult>("azure-nextgen:recoveryservices/v20180710:getReplicationFabric", args ?? new GetReplicationFabricArgs(), options.WithVersion());
    }


    public sealed class GetReplicationFabricArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Fabric name.
        /// </summary>
        [Input("fabricName", required: true)]
        public string FabricName { get; set; } = null!;

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

        public GetReplicationFabricArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetReplicationFabricResult
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
        /// Fabric related data.
        /// </summary>
        public readonly Outputs.FabricPropertiesResponse Properties;
        /// <summary>
        /// Resource Type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetReplicationFabricResult(
            string id,

            string? location,

            string name,

            Outputs.FabricPropertiesResponse properties,

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

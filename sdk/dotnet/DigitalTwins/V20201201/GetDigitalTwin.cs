// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DigitalTwins.V20201201
{
    public static class GetDigitalTwin
    {
        public static Task<GetDigitalTwinResult> InvokeAsync(GetDigitalTwinArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDigitalTwinResult>("azure-nextgen:digitaltwins/v20201201:getDigitalTwin", args ?? new GetDigitalTwinArgs(), options.WithVersion());
    }


    public sealed class GetDigitalTwinArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group that contains the DigitalTwinsInstance.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the DigitalTwinsInstance.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public GetDigitalTwinArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDigitalTwinResult
    {
        /// <summary>
        /// Time when DigitalTwinsInstance was created.
        /// </summary>
        public readonly string CreatedTime;
        /// <summary>
        /// Api endpoint to work with DigitalTwinsInstance.
        /// </summary>
        public readonly string HostName;
        /// <summary>
        /// The resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The managed identity for the DigitalTwinsInstance.
        /// </summary>
        public readonly Outputs.DigitalTwinsIdentityResponse? Identity;
        /// <summary>
        /// Time when DigitalTwinsInstance was updated.
        /// </summary>
        public readonly string LastUpdatedTime;
        /// <summary>
        /// The resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The resource name.
        /// </summary>
        public readonly string Name;
        public readonly ImmutableArray<Outputs.PrivateEndpointConnectionResponse> PrivateEndpointConnections;
        /// <summary>
        /// The provisioning state.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Public network access for the DigitalTwinsInstance.
        /// </summary>
        public readonly string? PublicNetworkAccess;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDigitalTwinResult(
            string createdTime,

            string hostName,

            string id,

            Outputs.DigitalTwinsIdentityResponse? identity,

            string lastUpdatedTime,

            string location,

            string name,

            ImmutableArray<Outputs.PrivateEndpointConnectionResponse> privateEndpointConnections,

            string provisioningState,

            string? publicNetworkAccess,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            CreatedTime = createdTime;
            HostName = hostName;
            Id = id;
            Identity = identity;
            LastUpdatedTime = lastUpdatedTime;
            Location = location;
            Name = name;
            PrivateEndpointConnections = privateEndpointConnections;
            ProvisioningState = provisioningState;
            PublicNetworkAccess = publicNetworkAccess;
            Tags = tags;
            Type = type;
        }
    }
}
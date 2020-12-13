// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Peering.V20201001
{
    public static class GetPrefix
    {
        public static Task<GetPrefixResult> InvokeAsync(GetPrefixArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPrefixResult>("azure-nextgen:peering/v20201001:getPrefix", args ?? new GetPrefixArgs(), options.WithVersion());
    }


    public sealed class GetPrefixArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The properties to be expanded.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the peering service.
        /// </summary>
        [Input("peeringServiceName", required: true)]
        public string PeeringServiceName { get; set; } = null!;

        /// <summary>
        /// The name of the prefix.
        /// </summary>
        [Input("prefixName", required: true)]
        public string PrefixName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPrefixArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPrefixResult
    {
        /// <summary>
        /// The error message for validation state
        /// </summary>
        public readonly string ErrorMessage;
        /// <summary>
        /// The list of events for peering service prefix
        /// </summary>
        public readonly ImmutableArray<Outputs.PeeringServicePrefixEventResponse> Events;
        /// <summary>
        /// The ID of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The prefix learned type
        /// </summary>
        public readonly string LearnedType;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The peering service prefix key
        /// </summary>
        public readonly string? PeeringServicePrefixKey;
        /// <summary>
        /// The prefix from which your traffic originates.
        /// </summary>
        public readonly string? Prefix;
        /// <summary>
        /// The prefix validation state
        /// </summary>
        public readonly string PrefixValidationState;
        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetPrefixResult(
            string errorMessage,

            ImmutableArray<Outputs.PeeringServicePrefixEventResponse> events,

            string id,

            string learnedType,

            string name,

            string? peeringServicePrefixKey,

            string? prefix,

            string prefixValidationState,

            string provisioningState,

            string type)
        {
            ErrorMessage = errorMessage;
            Events = events;
            Id = id;
            LearnedType = learnedType;
            Name = name;
            PeeringServicePrefixKey = peeringServicePrefixKey;
            Prefix = prefix;
            PrefixValidationState = prefixValidationState;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    public static class GetExperiment
    {
        public static Task<GetExperimentResult> InvokeAsync(GetExperimentArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetExperimentResult>("azure-nextgen:network/latest:getExperiment", args ?? new GetExperimentArgs(), options.WithVersion());
    }


    public sealed class GetExperimentArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Experiment identifier associated with the Experiment
        /// </summary>
        [Input("experimentName", required: true)]
        public string ExperimentName { get; set; } = null!;

        /// <summary>
        /// The Profile identifier associated with the Tenant and Partner
        /// </summary>
        [Input("profileName", required: true)]
        public string ProfileName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetExperimentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetExperimentResult
    {
        /// <summary>
        /// The description of the details or intents of the Experiment
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The state of the Experiment
        /// </summary>
        public readonly string? EnabledState;
        /// <summary>
        /// The endpoint A of an experiment
        /// </summary>
        public readonly Outputs.EndpointResponse? EndpointA;
        /// <summary>
        /// The endpoint B of an experiment
        /// </summary>
        public readonly Outputs.EndpointResponse? EndpointB;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource status.
        /// </summary>
        public readonly string ResourceState;
        /// <summary>
        /// The uri to the Script used in the Experiment
        /// </summary>
        public readonly string ScriptFileUri;
        /// <summary>
        /// The description of Experiment status from the server side
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetExperimentResult(
            string? description,

            string? enabledState,

            Outputs.EndpointResponse? endpointA,

            Outputs.EndpointResponse? endpointB,

            string id,

            string? location,

            string name,

            string resourceState,

            string scriptFileUri,

            string status,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Description = description;
            EnabledState = enabledState;
            EndpointA = endpointA;
            EndpointB = endpointB;
            Id = id;
            Location = location;
            Name = name;
            ResourceState = resourceState;
            ScriptFileUri = scriptFileUri;
            Status = status;
            Tags = tags;
            Type = type;
        }
    }
}

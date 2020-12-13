// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.V20160515
{
    public static class GetPolicy
    {
        public static Task<GetPolicyResult> InvokeAsync(GetPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPolicyResult>("azure-nextgen:devtestlab/v20160515:getPolicy", args ?? new GetPolicyArgs(), options.WithVersion());
    }


    public sealed class GetPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Specify the $expand query. Example: 'properties($select=description)'
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public string LabName { get; set; } = null!;

        /// <summary>
        /// The name of the policy.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The name of the policy set.
        /// </summary>
        [Input("policySetName", required: true)]
        public string PolicySetName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPolicyResult
    {
        /// <summary>
        /// The creation date of the policy.
        /// </summary>
        public readonly string CreatedDate;
        /// <summary>
        /// The description of the policy.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
        /// </summary>
        public readonly string? EvaluatorType;
        /// <summary>
        /// The fact data of the policy.
        /// </summary>
        public readonly string? FactData;
        /// <summary>
        /// The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
        /// </summary>
        public readonly string? FactName;
        /// <summary>
        /// The identifier of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The status of the policy.
        /// </summary>
        public readonly string? Status;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
        /// </summary>
        public readonly string? Threshold;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        public readonly string? UniqueIdentifier;

        [OutputConstructor]
        private GetPolicyResult(
            string createdDate,

            string? description,

            string? evaluatorType,

            string? factData,

            string? factName,

            string id,

            string? location,

            string name,

            string? provisioningState,

            string? status,

            ImmutableDictionary<string, string>? tags,

            string? threshold,

            string type,

            string? uniqueIdentifier)
        {
            CreatedDate = createdDate;
            Description = description;
            EvaluatorType = evaluatorType;
            FactData = factData;
            FactName = factName;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Status = status;
            Tags = tags;
            Threshold = threshold;
            Type = type;
            UniqueIdentifier = uniqueIdentifier;
        }
    }
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.LabServices.Latest
{
    public static class GetEnvironment
    {
        public static Task<GetEnvironmentResult> InvokeAsync(GetEnvironmentArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetEnvironmentResult>("azure-nextgen:labservices/latest:getEnvironment", args ?? new GetEnvironmentArgs(), options.WithVersion());
    }


    public sealed class GetEnvironmentArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the environment.
        /// </summary>
        [Input("environmentName", required: true)]
        public string EnvironmentName { get; set; } = null!;

        /// <summary>
        /// The name of the environment Setting.
        /// </summary>
        [Input("environmentSettingName", required: true)]
        public string EnvironmentSettingName { get; set; } = null!;

        /// <summary>
        /// Specify the $expand query. Example: 'properties($expand=networkInterface)'
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the lab Account.
        /// </summary>
        [Input("labAccountName", required: true)]
        public string LabAccountName { get; set; } = null!;

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public string LabName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetEnvironmentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetEnvironmentResult
    {
        /// <summary>
        /// The name or email address of the user who has claimed the environment
        /// </summary>
        public readonly string ClaimedByUserName;
        /// <summary>
        /// The AAD object Id of the user who has claimed the environment
        /// </summary>
        public readonly string ClaimedByUserObjectId;
        /// <summary>
        /// The user principal Id of the user who has claimed the environment
        /// </summary>
        public readonly string ClaimedByUserPrincipalId;
        /// <summary>
        /// The identifier of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Is the environment claimed or not
        /// </summary>
        public readonly bool IsClaimed;
        /// <summary>
        /// Last known power state of the environment
        /// </summary>
        public readonly string LastKnownPowerState;
        /// <summary>
        /// The details of the latest operation. ex: status, error
        /// </summary>
        public readonly Outputs.LatestOperationResultResponse LatestOperationResult;
        /// <summary>
        /// The location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Network details of the environment
        /// </summary>
        public readonly Outputs.NetworkInterfaceResponse NetworkInterface;
        /// <summary>
        /// When the password was last reset on the environment.
        /// </summary>
        public readonly string PasswordLastReset;
        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The set of a VM and the setting id it was created for
        /// </summary>
        public readonly Outputs.ResourceSetResponse? ResourceSets;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// How long the environment has been used by a lab user
        /// </summary>
        public readonly string TotalUsage;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        public readonly string? UniqueIdentifier;

        [OutputConstructor]
        private GetEnvironmentResult(
            string claimedByUserName,

            string claimedByUserObjectId,

            string claimedByUserPrincipalId,

            string id,

            bool isClaimed,

            string lastKnownPowerState,

            Outputs.LatestOperationResultResponse latestOperationResult,

            string? location,

            string name,

            Outputs.NetworkInterfaceResponse networkInterface,

            string passwordLastReset,

            string? provisioningState,

            Outputs.ResourceSetResponse? resourceSets,

            ImmutableDictionary<string, string>? tags,

            string totalUsage,

            string type,

            string? uniqueIdentifier)
        {
            ClaimedByUserName = claimedByUserName;
            ClaimedByUserObjectId = claimedByUserObjectId;
            ClaimedByUserPrincipalId = claimedByUserPrincipalId;
            Id = id;
            IsClaimed = isClaimed;
            LastKnownPowerState = lastKnownPowerState;
            LatestOperationResult = latestOperationResult;
            Location = location;
            Name = name;
            NetworkInterface = networkInterface;
            PasswordLastReset = passwordLastReset;
            ProvisioningState = provisioningState;
            ResourceSets = resourceSets;
            Tags = tags;
            TotalUsage = totalUsage;
            Type = type;
            UniqueIdentifier = uniqueIdentifier;
        }
    }
}

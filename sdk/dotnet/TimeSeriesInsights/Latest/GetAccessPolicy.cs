// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.TimeSeriesInsights.Latest
{
    public static class GetAccessPolicy
    {
        public static Task<GetAccessPolicyResult> InvokeAsync(GetAccessPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAccessPolicyResult>("azure-nextgen:timeseriesinsights/latest:getAccessPolicy", args ?? new GetAccessPolicyArgs(), options.WithVersion());
    }


    public sealed class GetAccessPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Time Series Insights access policy associated with the specified environment.
        /// </summary>
        [Input("accessPolicyName", required: true)]
        public string AccessPolicyName { get; set; } = null!;

        /// <summary>
        /// The name of the Time Series Insights environment associated with the specified resource group.
        /// </summary>
        [Input("environmentName", required: true)]
        public string EnvironmentName { get; set; } = null!;

        /// <summary>
        /// Name of an Azure Resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAccessPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAccessPolicyResult
    {
        /// <summary>
        /// An description of the access policy.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The objectId of the principal in Azure Active Directory.
        /// </summary>
        public readonly string? PrincipalObjectId;
        /// <summary>
        /// The list of roles the principal is assigned on the environment.
        /// </summary>
        public readonly ImmutableArray<string> Roles;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAccessPolicyResult(
            string? description,

            string id,

            string name,

            string? principalObjectId,

            ImmutableArray<string> roles,

            string type)
        {
            Description = description;
            Id = id;
            Name = name;
            PrincipalObjectId = principalObjectId;
            Roles = roles;
            Type = type;
        }
    }
}

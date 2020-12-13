// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Management.V20180301Preview
{
    public static class GetManagementGroup
    {
        public static Task<GetManagementGroupResult> InvokeAsync(GetManagementGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetManagementGroupResult>("azure-nextgen:management/v20180301preview:getManagementGroup", args ?? new GetManagementGroupArgs(), options.WithVersion());
    }


    public sealed class GetManagementGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The $expand=children query string parameter allows clients to request inclusion of children in the response payload.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// A filter which allows the exclusion of subscriptions from results (i.e. '$filter=children.childType ne Subscription')
        /// </summary>
        [Input("filter")]
        public string? Filter { get; set; }

        /// <summary>
        /// Management Group ID.
        /// </summary>
        [Input("groupId", required: true)]
        public string GroupId { get; set; } = null!;

        /// <summary>
        /// The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. Note that  $expand=children must be passed up if $recurse is set to true.
        /// </summary>
        [Input("recurse")]
        public bool? Recurse { get; set; }

        public GetManagementGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetManagementGroupResult
    {
        /// <summary>
        /// The list of children.
        /// </summary>
        public readonly ImmutableArray<Outputs.ManagementGroupChildInfoResponse> Children;
        /// <summary>
        /// The details of a management group.
        /// </summary>
        public readonly Outputs.ManagementGroupDetailsResponse? Details;
        /// <summary>
        /// The friendly name of the management group.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the management group. For example, 00000000-0000-0000-0000-000000000000
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The role definitions associated with the management group.
        /// </summary>
        public readonly ImmutableArray<string> Roles;
        /// <summary>
        /// The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000
        /// </summary>
        public readonly string? TenantId;
        /// <summary>
        /// The type of the resource.  For example, /providers/Microsoft.Management/managementGroups
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetManagementGroupResult(
            ImmutableArray<Outputs.ManagementGroupChildInfoResponse> children,

            Outputs.ManagementGroupDetailsResponse? details,

            string? displayName,

            string id,

            string name,

            ImmutableArray<string> roles,

            string? tenantId,

            string type)
        {
            Children = children;
            Details = details;
            DisplayName = displayName;
            Id = id;
            Name = name;
            Roles = roles;
            TenantId = tenantId;
            Type = type;
        }
    }
}

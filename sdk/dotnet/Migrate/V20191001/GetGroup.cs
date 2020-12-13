// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Migrate.V20191001
{
    public static class GetGroup
    {
        public static Task<GetGroupResult> InvokeAsync(GetGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetGroupResult>("azure-nextgen:migrate/v20191001:getGroup", args ?? new GetGroupArgs(), options.WithVersion());
    }


    public sealed class GetGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Unique name of a group within a project.
        /// </summary>
        [Input("groupName", required: true)]
        public string GroupName { get; set; } = null!;

        /// <summary>
        /// Name of the Azure Migrate project.
        /// </summary>
        [Input("projectName", required: true)]
        public string ProjectName { get; set; } = null!;

        /// <summary>
        /// Name of the Azure Resource Group that project is part of.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetGroupResult
    {
        /// <summary>
        /// For optimistic concurrency control.
        /// </summary>
        public readonly string? ETag;
        /// <summary>
        /// Path reference to this group. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Name of the group.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Properties of the group.
        /// </summary>
        public readonly Outputs.GroupPropertiesResponse Properties;
        /// <summary>
        /// Type of the object = [Microsoft.Migrate/assessmentProjects/groups].
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetGroupResult(
            string? eTag,

            string id,

            string name,

            Outputs.GroupPropertiesResponse properties,

            string type)
        {
            ETag = eTag;
            Id = id;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}

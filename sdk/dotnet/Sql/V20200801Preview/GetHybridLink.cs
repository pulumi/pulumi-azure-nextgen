// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview
{
    public static class GetHybridLink
    {
        public static Task<GetHybridLinkResult> InvokeAsync(GetHybridLinkArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetHybridLinkResult>("azure-nextgen:sql/v20200801preview:getHybridLink", args ?? new GetHybridLinkArgs(), options.WithVersion());
    }


    public sealed class GetHybridLinkArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The distributed availability group name.
        /// </summary>
        [Input("distributedAvailabilityGroupName", required: true)]
        public string DistributedAvailabilityGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the managed instance.
        /// </summary>
        [Input("managedInstanceName", required: true)]
        public string ManagedInstanceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetHybridLinkArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetHybridLinkResult
    {
        /// <summary>
        /// The distributed availability group id
        /// </summary>
        public readonly string DistributedAvailabilityGroupId;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The primary availability group name
        /// </summary>
        public readonly string? PrimaryAvailabilityGroupName;
        /// <summary>
        /// The replication mode of hybrid link. Parameter will be ignored during link creation.
        /// </summary>
        public readonly string? ReplicationMode;
        /// <summary>
        /// The secondary availability group name
        /// </summary>
        public readonly string? SecondaryAvailabilityGroupName;
        /// <summary>
        /// The source endpoint
        /// </summary>
        public readonly string? SourceEndpoint;
        /// <summary>
        /// The source replica id
        /// </summary>
        public readonly string SourceReplicaId;
        /// <summary>
        /// The name of the target database
        /// </summary>
        public readonly string? TargetDatabase;
        /// <summary>
        /// The target replica id
        /// </summary>
        public readonly string TargetReplicaId;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetHybridLinkResult(
            string distributedAvailabilityGroupId,

            string id,

            string name,

            string? primaryAvailabilityGroupName,

            string? replicationMode,

            string? secondaryAvailabilityGroupName,

            string? sourceEndpoint,

            string sourceReplicaId,

            string? targetDatabase,

            string targetReplicaId,

            string type)
        {
            DistributedAvailabilityGroupId = distributedAvailabilityGroupId;
            Id = id;
            Name = name;
            PrimaryAvailabilityGroupName = primaryAvailabilityGroupName;
            ReplicationMode = replicationMode;
            SecondaryAvailabilityGroupName = secondaryAvailabilityGroupName;
            SourceEndpoint = sourceEndpoint;
            SourceReplicaId = sourceReplicaId;
            TargetDatabase = targetDatabase;
            TargetReplicaId = targetReplicaId;
            Type = type;
        }
    }
}

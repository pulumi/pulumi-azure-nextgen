// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Kusto.Latest
{
    public static class GetClusterPrincipalAssignment
    {
        public static Task<GetClusterPrincipalAssignmentResult> InvokeAsync(GetClusterPrincipalAssignmentArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetClusterPrincipalAssignmentResult>("azure-nextgen:kusto/latest:getClusterPrincipalAssignment", args ?? new GetClusterPrincipalAssignmentArgs(), options.WithVersion());
    }


    public sealed class GetClusterPrincipalAssignmentArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Kusto cluster.
        /// </summary>
        [Input("clusterName", required: true)]
        public string ClusterName { get; set; } = null!;

        /// <summary>
        /// The name of the Kusto principalAssignment.
        /// </summary>
        [Input("principalAssignmentName", required: true)]
        public string PrincipalAssignmentName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group containing the Kusto cluster.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetClusterPrincipalAssignmentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetClusterPrincipalAssignmentResult
    {
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
        /// </summary>
        public readonly string PrincipalId;
        /// <summary>
        /// The principal name
        /// </summary>
        public readonly string PrincipalName;
        /// <summary>
        /// Principal type.
        /// </summary>
        public readonly string PrincipalType;
        /// <summary>
        /// The provisioned state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Cluster principal role.
        /// </summary>
        public readonly string Role;
        /// <summary>
        /// The tenant id of the principal
        /// </summary>
        public readonly string? TenantId;
        /// <summary>
        /// The tenant name of the principal
        /// </summary>
        public readonly string TenantName;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetClusterPrincipalAssignmentResult(
            string id,

            string name,

            string principalId,

            string principalName,

            string principalType,

            string provisioningState,

            string role,

            string? tenantId,

            string tenantName,

            string type)
        {
            Id = id;
            Name = name;
            PrincipalId = principalId;
            PrincipalName = principalName;
            PrincipalType = principalType;
            ProvisioningState = provisioningState;
            Role = role;
            TenantId = tenantId;
            TenantName = tenantName;
            Type = type;
        }
    }
}

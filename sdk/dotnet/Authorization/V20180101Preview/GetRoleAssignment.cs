// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Authorization.V20180101Preview
{
    public static class GetRoleAssignment
    {
        public static Task<GetRoleAssignmentResult> InvokeAsync(GetRoleAssignmentArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRoleAssignmentResult>("azure-nextgen:authorization/v20180101preview:getRoleAssignment", args ?? new GetRoleAssignmentArgs(), options.WithVersion());
    }


    public sealed class GetRoleAssignmentArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the role assignment to get.
        /// </summary>
        [Input("roleAssignmentName", required: true)]
        public string RoleAssignmentName { get; set; } = null!;

        /// <summary>
        /// The scope of the role assignment.
        /// </summary>
        [Input("scope", required: true)]
        public string Scope { get; set; } = null!;

        public GetRoleAssignmentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRoleAssignmentResult
    {
        /// <summary>
        /// The Delegation flag for the role assignment
        /// </summary>
        public readonly bool? CanDelegate;
        /// <summary>
        /// The role assignment ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The role assignment name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The principal ID.
        /// </summary>
        public readonly string? PrincipalId;
        /// <summary>
        /// The role definition ID.
        /// </summary>
        public readonly string? RoleDefinitionId;
        /// <summary>
        /// The role assignment scope.
        /// </summary>
        public readonly string? Scope;
        /// <summary>
        /// The role assignment type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetRoleAssignmentResult(
            bool? canDelegate,

            string id,

            string name,

            string? principalId,

            string? roleDefinitionId,

            string? scope,

            string type)
        {
            CanDelegate = canDelegate;
            Id = id;
            Name = name;
            PrincipalId = principalId;
            RoleDefinitionId = roleDefinitionId;
            Scope = scope;
            Type = type;
        }
    }
}

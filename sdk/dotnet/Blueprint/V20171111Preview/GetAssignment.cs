// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Blueprint.V20171111Preview
{
    public static class GetAssignment
    {
        public static Task<GetAssignmentResult> InvokeAsync(GetAssignmentArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAssignmentResult>("azure-nextgen:blueprint/v20171111preview:getAssignment", args ?? new GetAssignmentArgs(), options.WithVersion());
    }


    public sealed class GetAssignmentArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// name of the assignment.
        /// </summary>
        [Input("assignmentName", required: true)]
        public string AssignmentName { get; set; } = null!;

        public GetAssignmentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAssignmentResult
    {
        /// <summary>
        /// ID of the Blueprint definition resource.
        /// </summary>
        public readonly string? BlueprintId;
        /// <summary>
        /// Multi-line explain this resource.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// One-liner string explain this resource.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// String Id used to locate any resource on Azure.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Managed Service Identity for this Blueprint assignment
        /// </summary>
        public readonly Outputs.ManagedServiceIdentityResponse Identity;
        /// <summary>
        /// The location of this Blueprint assignment.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Defines how Blueprint-managed resources will be locked.
        /// </summary>
        public readonly Outputs.AssignmentLockSettingsResponse? Locks;
        /// <summary>
        /// Name of this resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Blueprint parameter values.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterValueBaseResponse> Parameters;
        /// <summary>
        /// State of the assignment.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Names and locations of resource group placeholders.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ResourceGroupValueResponse> ResourceGroups;
        /// <summary>
        /// Status of Blueprint assignment. This field is readonly.
        /// </summary>
        public readonly Outputs.AssignmentStatusResponse Status;
        /// <summary>
        /// Type of this resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAssignmentResult(
            string? blueprintId,

            string? description,

            string? displayName,

            string id,

            Outputs.ManagedServiceIdentityResponse identity,

            string location,

            Outputs.AssignmentLockSettingsResponse? locks,

            string name,

            ImmutableDictionary<string, Outputs.ParameterValueBaseResponse> parameters,

            string provisioningState,

            ImmutableDictionary<string, Outputs.ResourceGroupValueResponse> resourceGroups,

            Outputs.AssignmentStatusResponse status,

            string type)
        {
            BlueprintId = blueprintId;
            Description = description;
            DisplayName = displayName;
            Id = id;
            Identity = identity;
            Location = location;
            Locks = locks;
            Name = name;
            Parameters = parameters;
            ProvisioningState = provisioningState;
            ResourceGroups = resourceGroups;
            Status = status;
            Type = type;
        }
    }
}

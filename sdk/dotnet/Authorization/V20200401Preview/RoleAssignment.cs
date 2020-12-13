// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Authorization.V20200401Preview
{
    /// <summary>
    /// Role Assignments
    /// </summary>
    public partial class RoleAssignment : Pulumi.CustomResource
    {
        /// <summary>
        /// The Delegation flag for the role assignment
        /// </summary>
        [Output("canDelegate")]
        public Output<bool?> CanDelegate { get; private set; } = null!;

        /// <summary>
        /// The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
        /// </summary>
        [Output("condition")]
        public Output<string?> Condition { get; private set; } = null!;

        /// <summary>
        /// Version of the condition. Currently accepted value is '2.0'
        /// </summary>
        [Output("conditionVersion")]
        public Output<string?> ConditionVersion { get; private set; } = null!;

        /// <summary>
        /// Id of the user who created the assignment
        /// </summary>
        [Output("createdBy")]
        public Output<string?> CreatedBy { get; private set; } = null!;

        /// <summary>
        /// Time it was created
        /// </summary>
        [Output("createdOn")]
        public Output<string?> CreatedOn { get; private set; } = null!;

        /// <summary>
        /// Id of the delegated managed identity resource
        /// </summary>
        [Output("delegatedManagedIdentityResourceId")]
        public Output<string?> DelegatedManagedIdentityResourceId { get; private set; } = null!;

        /// <summary>
        /// Description of role assignment
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The role assignment name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The principal ID.
        /// </summary>
        [Output("principalId")]
        public Output<string?> PrincipalId { get; private set; } = null!;

        /// <summary>
        /// The principal type of the assigned principal ID.
        /// </summary>
        [Output("principalType")]
        public Output<string?> PrincipalType { get; private set; } = null!;

        /// <summary>
        /// The role definition ID.
        /// </summary>
        [Output("roleDefinitionId")]
        public Output<string?> RoleDefinitionId { get; private set; } = null!;

        /// <summary>
        /// The role assignment scope.
        /// </summary>
        [Output("scope")]
        public Output<string?> Scope { get; private set; } = null!;

        /// <summary>
        /// The role assignment type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Id of the user who updated the assignment
        /// </summary>
        [Output("updatedBy")]
        public Output<string?> UpdatedBy { get; private set; } = null!;

        /// <summary>
        /// Time it was updated
        /// </summary>
        [Output("updatedOn")]
        public Output<string?> UpdatedOn { get; private set; } = null!;


        /// <summary>
        /// Create a RoleAssignment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RoleAssignment(string name, RoleAssignmentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:authorization/v20200401preview:RoleAssignment", name, args ?? new RoleAssignmentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private RoleAssignment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:authorization/v20200401preview:RoleAssignment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/latest:RoleAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20150701:RoleAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20171001preview:RoleAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20180101preview:RoleAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20180901preview:RoleAssignment"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing RoleAssignment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RoleAssignment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new RoleAssignment(name, id, options);
        }
    }

    public sealed class RoleAssignmentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The delegation flag used for creating a role assignment
        /// </summary>
        [Input("canDelegate")]
        public Input<bool>? CanDelegate { get; set; }

        /// <summary>
        /// The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
        /// </summary>
        [Input("condition")]
        public Input<string>? Condition { get; set; }

        /// <summary>
        /// Version of the condition. Currently accepted value is '2.0'
        /// </summary>
        [Input("conditionVersion")]
        public Input<string>? ConditionVersion { get; set; }

        /// <summary>
        /// Description of role assignment
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
        /// </summary>
        [Input("principalId", required: true)]
        public Input<string> PrincipalId { get; set; } = null!;

        /// <summary>
        /// The principal type of the assigned principal ID.
        /// </summary>
        [Input("principalType")]
        public InputUnion<string, Pulumi.AzureNextGen.Authorization.V20200401Preview.PrincipalType>? PrincipalType { get; set; }

        /// <summary>
        /// The name of the role assignment to create. It can be any valid GUID.
        /// </summary>
        [Input("roleAssignmentName", required: true)]
        public Input<string> RoleAssignmentName { get; set; } = null!;

        /// <summary>
        /// The role definition ID used in the role assignment.
        /// </summary>
        [Input("roleDefinitionId", required: true)]
        public Input<string> RoleDefinitionId { get; set; } = null!;

        /// <summary>
        /// The scope of the role assignment to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
        /// </summary>
        [Input("scope", required: true)]
        public Input<string> Scope { get; set; } = null!;

        public RoleAssignmentArgs()
        {
        }
    }
}

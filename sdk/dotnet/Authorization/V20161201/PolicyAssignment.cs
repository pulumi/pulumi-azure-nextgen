// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Authorization.V20161201
{
    /// <summary>
    /// The policy assignment.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:authorization/v20161201:PolicyAssignment")]
    public partial class PolicyAssignment : Pulumi.CustomResource
    {
        /// <summary>
        /// This message will be part of response in case of policy violation.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The display name of the policy assignment.
        /// </summary>
        [Output("displayName")]
        public Output<string?> DisplayName { get; private set; } = null!;

        /// <summary>
        /// The name of the policy assignment.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// Required if a parameter is used in policy rule.
        /// </summary>
        [Output("parameters")]
        public Output<object?> Parameters { get; private set; } = null!;

        /// <summary>
        /// The ID of the policy definition.
        /// </summary>
        [Output("policyDefinitionId")]
        public Output<string?> PolicyDefinitionId { get; private set; } = null!;

        /// <summary>
        /// The scope for the policy assignment.
        /// </summary>
        [Output("scope")]
        public Output<string?> Scope { get; private set; } = null!;

        /// <summary>
        /// The type of the policy assignment.
        /// </summary>
        [Output("type")]
        public Output<string?> Type { get; private set; } = null!;


        /// <summary>
        /// Create a PolicyAssignment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PolicyAssignment(string name, PolicyAssignmentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:authorization/v20161201:PolicyAssignment", name, args ?? new PolicyAssignmentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PolicyAssignment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:authorization/v20161201:PolicyAssignment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/latest:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20151001preview:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20151101:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20160401:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20170601preview:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20180301:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20180501:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20190101:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20190601:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20190901:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20200301:PolicyAssignment"},
                    new Pulumi.Alias { Type = "azure-nextgen:authorization/v20200901:PolicyAssignment"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PolicyAssignment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PolicyAssignment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PolicyAssignment(name, id, options);
        }
    }

    public sealed class PolicyAssignmentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// This message will be part of response in case of policy violation.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The display name of the policy assignment.
        /// </summary>
        [Input("displayName")]
        public Input<string>? DisplayName { get; set; }

        /// <summary>
        /// The name of the policy assignment.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Required if a parameter is used in policy rule.
        /// </summary>
        [Input("parameters")]
        public Input<object>? Parameters { get; set; }

        /// <summary>
        /// The name of the policy assignment.
        /// </summary>
        [Input("policyAssignmentName", required: true)]
        public Input<string> PolicyAssignmentName { get; set; } = null!;

        /// <summary>
        /// The ID of the policy definition.
        /// </summary>
        [Input("policyDefinitionId")]
        public Input<string>? PolicyDefinitionId { get; set; }

        /// <summary>
        /// The scope for the policy assignment.
        /// </summary>
        [Input("scope", required: true)]
        public Input<string> Scope { get; set; } = null!;

        /// <summary>
        /// The type of the policy assignment.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public PolicyAssignmentArgs()
        {
        }
    }
}

// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20190601Preview
{
    /// <summary>
    /// Workspace active directory administrator
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:synapse/v20190601preview:WorkspaceAadAdmin")]
    public partial class WorkspaceAadAdmin : Pulumi.CustomResource
    {
        /// <summary>
        /// Workspace active directory administrator type
        /// </summary>
        [Output("administratorType")]
        public Output<string?> AdministratorType { get; private set; } = null!;

        /// <summary>
        /// Login of the workspace active directory administrator
        /// </summary>
        [Output("login")]
        public Output<string?> Login { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Object ID of the workspace active directory administrator
        /// </summary>
        [Output("sid")]
        public Output<string?> Sid { get; private set; } = null!;

        /// <summary>
        /// Tenant ID of the workspace active directory administrator
        /// </summary>
        [Output("tenantId")]
        public Output<string?> TenantId { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a WorkspaceAadAdmin resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public WorkspaceAadAdmin(string name, WorkspaceAadAdminArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:synapse/v20190601preview:WorkspaceAadAdmin", name, args ?? new WorkspaceAadAdminArgs(), MakeResourceOptions(options, ""))
        {
        }

        private WorkspaceAadAdmin(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:synapse/v20190601preview:WorkspaceAadAdmin", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing WorkspaceAadAdmin resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static WorkspaceAadAdmin Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new WorkspaceAadAdmin(name, id, options);
        }
    }

    public sealed class WorkspaceAadAdminArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Workspace active directory administrator type
        /// </summary>
        [Input("administratorType")]
        public Input<string>? AdministratorType { get; set; }

        /// <summary>
        /// Login of the workspace active directory administrator
        /// </summary>
        [Input("login")]
        public Input<string>? Login { get; set; }

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Object ID of the workspace active directory administrator
        /// </summary>
        [Input("sid")]
        public Input<string>? Sid { get; set; }

        /// <summary>
        /// Tenant ID of the workspace active directory administrator
        /// </summary>
        [Input("tenantId")]
        public Input<string>? TenantId { get; set; }

        /// <summary>
        /// The name of the workspace
        /// </summary>
        [Input("workspaceName", required: true)]
        public Input<string> WorkspaceName { get; set; } = null!;

        public WorkspaceAadAdminArgs()
        {
        }
    }
}

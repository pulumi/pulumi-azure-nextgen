// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.V20200601Preview
{
    /// <summary>
    /// A notebook workspace resource
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:documentdb/v20200601preview:NotebookWorkspace")]
    public partial class NotebookWorkspace : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the database account.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Specifies the endpoint of Notebook server.
        /// </summary>
        [Output("notebookServerEndpoint")]
        public Output<string> NotebookServerEndpoint { get; private set; } = null!;

        /// <summary>
        /// Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// The type of Azure resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a NotebookWorkspace resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public NotebookWorkspace(string name, NotebookWorkspaceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:documentdb/v20200601preview:NotebookWorkspace", name, args ?? new NotebookWorkspaceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private NotebookWorkspace(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:documentdb/v20200601preview:NotebookWorkspace", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:documentdb/latest:NotebookWorkspace"},
                    new Pulumi.Alias { Type = "azure-nextgen:documentdb/v20190801:NotebookWorkspace"},
                    new Pulumi.Alias { Type = "azure-nextgen:documentdb/v20191212:NotebookWorkspace"},
                    new Pulumi.Alias { Type = "azure-nextgen:documentdb/v20200301:NotebookWorkspace"},
                    new Pulumi.Alias { Type = "azure-nextgen:documentdb/v20200401:NotebookWorkspace"},
                    new Pulumi.Alias { Type = "azure-nextgen:documentdb/v20200901:NotebookWorkspace"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing NotebookWorkspace resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static NotebookWorkspace Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new NotebookWorkspace(name, id, options);
        }
    }

    public sealed class NotebookWorkspaceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Cosmos DB database account name.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the notebook workspace resource.
        /// </summary>
        [Input("notebookWorkspaceName", required: true)]
        public Input<string> NotebookWorkspaceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public NotebookWorkspaceArgs()
        {
        }
    }
}

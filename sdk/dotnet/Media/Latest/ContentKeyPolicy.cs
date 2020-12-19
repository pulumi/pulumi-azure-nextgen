// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.Latest
{
    /// <summary>
    /// A Content Key Policy resource.
    /// Latest API Version: 2020-05-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:media/latest:ContentKeyPolicy")]
    public partial class ContentKeyPolicy : Pulumi.CustomResource
    {
        /// <summary>
        /// The creation date of the Policy
        /// </summary>
        [Output("created")]
        public Output<string> Created { get; private set; } = null!;

        /// <summary>
        /// A description for the Policy.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The last modified date of the Policy
        /// </summary>
        [Output("lastModified")]
        public Output<string> LastModified { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The Key Policy options.
        /// </summary>
        [Output("options")]
        public Output<ImmutableArray<Outputs.ContentKeyPolicyOptionResponse>> Options { get; private set; } = null!;

        /// <summary>
        /// The legacy Policy ID.
        /// </summary>
        [Output("policyId")]
        public Output<string> PolicyId { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ContentKeyPolicy resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ContentKeyPolicy(string name, ContentKeyPolicyArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:media/latest:ContentKeyPolicy", name, args ?? new ContentKeyPolicyArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ContentKeyPolicy(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:media/latest:ContentKeyPolicy", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180330preview:ContentKeyPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180601preview:ContentKeyPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180701:ContentKeyPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20200501:ContentKeyPolicy"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ContentKeyPolicy resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ContentKeyPolicy Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ContentKeyPolicy(name, id, options);
        }
    }

    public sealed class ContentKeyPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Media Services account name.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The Content Key Policy name.
        /// </summary>
        [Input("contentKeyPolicyName", required: true)]
        public Input<string> ContentKeyPolicyName { get; set; } = null!;

        /// <summary>
        /// A description for the Policy.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        [Input("options", required: true)]
        private InputList<Inputs.ContentKeyPolicyOptionArgs>? _options;

        /// <summary>
        /// The Key Policy options.
        /// </summary>
        public InputList<Inputs.ContentKeyPolicyOptionArgs> Options
        {
            get => _options ?? (_options = new InputList<Inputs.ContentKeyPolicyOptionArgs>());
            set => _options = value;
        }

        /// <summary>
        /// The name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public ContentKeyPolicyArgs()
        {
        }
    }
}

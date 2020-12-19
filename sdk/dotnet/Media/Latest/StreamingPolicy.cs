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
    /// A Streaming Policy resource
    /// Latest API Version: 2020-05-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:media/latest:StreamingPolicy")]
    public partial class StreamingPolicy : Pulumi.CustomResource
    {
        /// <summary>
        /// Configuration of CommonEncryptionCbcs
        /// </summary>
        [Output("commonEncryptionCbcs")]
        public Output<Outputs.CommonEncryptionCbcsResponse?> CommonEncryptionCbcs { get; private set; } = null!;

        /// <summary>
        /// Configuration of CommonEncryptionCenc
        /// </summary>
        [Output("commonEncryptionCenc")]
        public Output<Outputs.CommonEncryptionCencResponse?> CommonEncryptionCenc { get; private set; } = null!;

        /// <summary>
        /// Creation time of Streaming Policy
        /// </summary>
        [Output("created")]
        public Output<string> Created { get; private set; } = null!;

        /// <summary>
        /// Default ContentKey used by current Streaming Policy
        /// </summary>
        [Output("defaultContentKeyPolicyName")]
        public Output<string?> DefaultContentKeyPolicyName { get; private set; } = null!;

        /// <summary>
        /// Configuration of EnvelopeEncryption
        /// </summary>
        [Output("envelopeEncryption")]
        public Output<Outputs.EnvelopeEncryptionResponse?> EnvelopeEncryption { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Configurations of NoEncryption
        /// </summary>
        [Output("noEncryption")]
        public Output<Outputs.NoEncryptionResponse?> NoEncryption { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a StreamingPolicy resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public StreamingPolicy(string name, StreamingPolicyArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:media/latest:StreamingPolicy", name, args ?? new StreamingPolicyArgs(), MakeResourceOptions(options, ""))
        {
        }

        private StreamingPolicy(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:media/latest:StreamingPolicy", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180330preview:StreamingPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180601preview:StreamingPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180701:StreamingPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20200501:StreamingPolicy"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing StreamingPolicy resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static StreamingPolicy Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new StreamingPolicy(name, id, options);
        }
    }

    public sealed class StreamingPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Media Services account name.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// Configuration of CommonEncryptionCbcs
        /// </summary>
        [Input("commonEncryptionCbcs")]
        public Input<Inputs.CommonEncryptionCbcsArgs>? CommonEncryptionCbcs { get; set; }

        /// <summary>
        /// Configuration of CommonEncryptionCenc
        /// </summary>
        [Input("commonEncryptionCenc")]
        public Input<Inputs.CommonEncryptionCencArgs>? CommonEncryptionCenc { get; set; }

        /// <summary>
        /// Default ContentKey used by current Streaming Policy
        /// </summary>
        [Input("defaultContentKeyPolicyName")]
        public Input<string>? DefaultContentKeyPolicyName { get; set; }

        /// <summary>
        /// Configuration of EnvelopeEncryption
        /// </summary>
        [Input("envelopeEncryption")]
        public Input<Inputs.EnvelopeEncryptionArgs>? EnvelopeEncryption { get; set; }

        /// <summary>
        /// Configurations of NoEncryption
        /// </summary>
        [Input("noEncryption")]
        public Input<Inputs.NoEncryptionArgs>? NoEncryption { get; set; }

        /// <summary>
        /// The name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The Streaming Policy name.
        /// </summary>
        [Input("streamingPolicyName", required: true)]
        public Input<string> StreamingPolicyName { get; set; } = null!;

        public StreamingPolicyArgs()
        {
        }
    }
}

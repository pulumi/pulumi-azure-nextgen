// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.V20201120
{
    public partial class ResourceTypeRegistration : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        [Output("properties")]
        public Output<Outputs.ResourceTypeRegistrationResponseProperties> Properties { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ResourceTypeRegistration resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ResourceTypeRegistration(string name, ResourceTypeRegistrationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:providerhub/v20201120:ResourceTypeRegistration", name, args ?? new ResourceTypeRegistrationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ResourceTypeRegistration(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:providerhub/v20201120:ResourceTypeRegistration", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:providerhub/latest:ResourceTypeRegistration"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ResourceTypeRegistration resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ResourceTypeRegistration Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ResourceTypeRegistration(name, id, options);
        }
    }

    public sealed class ResourceTypeRegistrationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the resource provider hosted within ProviderHub.
        /// </summary>
        [Input("providerNamespace", required: true)]
        public Input<string> ProviderNamespace { get; set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Input("resourceType", required: true)]
        public Input<string> ResourceType { get; set; } = null!;

        public ResourceTypeRegistrationArgs()
        {
        }
    }
}

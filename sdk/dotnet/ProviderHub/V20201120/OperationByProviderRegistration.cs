// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.V20201120
{
    [AzureNextGenResourceType("azure-nextgen:providerhub/v20201120:OperationByProviderRegistration")]
    public partial class OperationByProviderRegistration : Pulumi.CustomResource
    {
        [Output("actionType")]
        public Output<string?> ActionType { get; private set; } = null!;

        /// <summary>
        /// Display information of the operation.
        /// </summary>
        [Output("display")]
        public Output<Outputs.OperationsDefinitionResponseDisplay> Display { get; private set; } = null!;

        /// <summary>
        /// Indicates whether the operation applies to data-plane.
        /// </summary>
        [Output("isDataAction")]
        public Output<bool?> IsDataAction { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        [Output("origin")]
        public Output<string?> Origin { get; private set; } = null!;

        [Output("properties")]
        public Output<object> Properties { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a OperationByProviderRegistration resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public OperationByProviderRegistration(string name, OperationByProviderRegistrationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:providerhub/v20201120:OperationByProviderRegistration", name, args ?? new OperationByProviderRegistrationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private OperationByProviderRegistration(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:providerhub/v20201120:OperationByProviderRegistration", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:providerhub/latest:OperationByProviderRegistration"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing OperationByProviderRegistration resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static OperationByProviderRegistration Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new OperationByProviderRegistration(name, id, options);
        }
    }

    public sealed class OperationByProviderRegistrationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the resource provider hosted within ProviderHub.
        /// </summary>
        [Input("providerNamespace", required: true)]
        public Input<string> ProviderNamespace { get; set; } = null!;

        public OperationByProviderRegistrationArgs()
        {
        }
    }
}

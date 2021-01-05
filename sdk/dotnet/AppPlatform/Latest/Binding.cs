// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AppPlatform.Latest
{
    /// <summary>
    /// Binding resource payload
    /// Latest API Version: 2020-07-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:appplatform/latest:Binding")]
    public partial class Binding : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Properties of the Binding resource
        /// </summary>
        [Output("properties")]
        public Output<Outputs.BindingResourcePropertiesResponse> Properties { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Binding resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Binding(string name, BindingArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:appplatform/latest:Binding", name, args ?? new BindingArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Binding(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:appplatform/latest:Binding", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:appplatform/v20190501preview:Binding"},
                    new Pulumi.Alias { Type = "azure-nextgen:appplatform/v20200701:Binding"},
                    new Pulumi.Alias { Type = "azure-nextgen:appplatform/v20201101preview:Binding"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Binding resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Binding Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Binding(name, id, options);
        }
    }

    public sealed class BindingArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the App resource.
        /// </summary>
        [Input("appName", required: true)]
        public Input<string> AppName { get; set; } = null!;

        /// <summary>
        /// The name of the Binding resource.
        /// </summary>
        [Input("bindingName", required: true)]
        public Input<string> BindingName { get; set; } = null!;

        /// <summary>
        /// Properties of the Binding resource
        /// </summary>
        [Input("properties")]
        public Input<Inputs.BindingResourcePropertiesArgs>? Properties { get; set; }

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Service resource.
        /// </summary>
        [Input("serviceName", required: true)]
        public Input<string> ServiceName { get; set; } = null!;

        public BindingArgs()
        {
        }
    }
}

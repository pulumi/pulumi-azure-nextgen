// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101
{
    /// <summary>
    /// A domain specific resource identifier.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:web/v20181101:WebAppDomainOwnershipIdentifier")]
    public partial class WebAppDomainOwnershipIdentifier : Pulumi.CustomResource
    {
        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Resource Name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a WebAppDomainOwnershipIdentifier resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public WebAppDomainOwnershipIdentifier(string name, WebAppDomainOwnershipIdentifierArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20181101:WebAppDomainOwnershipIdentifier", name, args ?? new WebAppDomainOwnershipIdentifierArgs(), MakeResourceOptions(options, ""))
        {
        }

        private WebAppDomainOwnershipIdentifier(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20181101:WebAppDomainOwnershipIdentifier", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:web/latest:WebAppDomainOwnershipIdentifier"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20160801:WebAppDomainOwnershipIdentifier"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20180201:WebAppDomainOwnershipIdentifier"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20190801:WebAppDomainOwnershipIdentifier"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200601:WebAppDomainOwnershipIdentifier"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200901:WebAppDomainOwnershipIdentifier"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing WebAppDomainOwnershipIdentifier resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static WebAppDomainOwnershipIdentifier Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new WebAppDomainOwnershipIdentifier(name, id, options);
        }
    }

    public sealed class WebAppDomainOwnershipIdentifierArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of domain ownership identifier.
        /// </summary>
        [Input("domainOwnershipIdentifierName", required: true)]
        public Input<string> DomainOwnershipIdentifierName { get; set; } = null!;

        /// <summary>
        /// String representation of the identity.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Input("kind")]
        public Input<string>? Kind { get; set; }

        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public WebAppDomainOwnershipIdentifierArgs()
        {
        }
    }
}

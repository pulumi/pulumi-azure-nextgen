// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20150601
{
    /// <summary>
    /// CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:cdn/v20150601:Origin")]
    public partial class Origin : Pulumi.CustomResource
    {
        /// <summary>
        /// The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
        /// </summary>
        [Output("hostName")]
        public Output<string> HostName { get; private set; } = null!;

        /// <summary>
        /// The value of the HTTP port. Must be between 1 and 65535.
        /// </summary>
        [Output("httpPort")]
        public Output<int?> HttpPort { get; private set; } = null!;

        /// <summary>
        /// The value of the https port. Must be between 1 and 65535.
        /// </summary>
        [Output("httpsPort")]
        public Output<int?> HttpsPort { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Provisioning status of the origin.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource status of the origin.
        /// </summary>
        [Output("resourceState")]
        public Output<string> ResourceState { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Origin resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Origin(string name, OriginArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:cdn/v20150601:Origin", name, args ?? new OriginArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Origin(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:cdn/v20150601:Origin", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/latest:Origin"},
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/v20160402:Origin"},
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/v20191231:Origin"},
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/v20200331:Origin"},
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/v20200415:Origin"},
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/v20200901:Origin"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Origin resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Origin Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Origin(name, id, options);
        }
    }

    public sealed class OriginArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the endpoint within the CDN profile.
        /// </summary>
        [Input("endpointName", required: true)]
        public Input<string> EndpointName { get; set; } = null!;

        /// <summary>
        /// The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
        /// </summary>
        [Input("hostName", required: true)]
        public Input<string> HostName { get; set; } = null!;

        /// <summary>
        /// The value of the HTTP port. Must be between 1 and 65535.
        /// </summary>
        [Input("httpPort")]
        public Input<int>? HttpPort { get; set; }

        /// <summary>
        /// The value of the HTTPS port. Must be between 1 and 65535.
        /// </summary>
        [Input("httpsPort")]
        public Input<int>? HttpsPort { get; set; }

        /// <summary>
        /// Name of the origin, an arbitrary value but it needs to be unique under endpoint
        /// </summary>
        [Input("originName", required: true)]
        public Input<string> OriginName { get; set; } = null!;

        /// <summary>
        /// Name of the CDN profile within the resource group.
        /// </summary>
        [Input("profileName", required: true)]
        public Input<string> ProfileName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public OriginArgs()
        {
        }
    }
}

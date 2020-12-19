// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.Latest
{
    /// <summary>
    /// Backend details.
    /// Latest API Version: 2019-12-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:apimanagement/latest:Backend")]
    public partial class Backend : Pulumi.CustomResource
    {
        /// <summary>
        /// Backend Credentials Contract Properties
        /// </summary>
        [Output("credentials")]
        public Output<Outputs.BackendCredentialsContractResponse?> Credentials { get; private set; } = null!;

        /// <summary>
        /// Backend Description.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Backend Properties contract
        /// </summary>
        [Output("properties")]
        public Output<Outputs.BackendPropertiesResponse> Properties { get; private set; } = null!;

        /// <summary>
        /// Backend communication protocol.
        /// </summary>
        [Output("protocol")]
        public Output<string> Protocol { get; private set; } = null!;

        /// <summary>
        /// Backend Proxy Contract Properties
        /// </summary>
        [Output("proxy")]
        public Output<Outputs.BackendProxyContractResponse?> Proxy { get; private set; } = null!;

        /// <summary>
        /// Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
        /// </summary>
        [Output("resourceId")]
        public Output<string?> ResourceId { get; private set; } = null!;

        /// <summary>
        /// Backend Title.
        /// </summary>
        [Output("title")]
        public Output<string?> Title { get; private set; } = null!;

        /// <summary>
        /// Backend TLS Properties
        /// </summary>
        [Output("tls")]
        public Output<Outputs.BackendTlsPropertiesResponse?> Tls { get; private set; } = null!;

        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Runtime Url of the Backend.
        /// </summary>
        [Output("url")]
        public Output<string> Url { get; private set; } = null!;


        /// <summary>
        /// Create a Backend resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Backend(string name, BackendArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/latest:Backend", name, args ?? new BackendArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Backend(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/latest:Backend", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20160707:Backend"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20161010:Backend"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20170301:Backend"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:Backend"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:Backend"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20190101:Backend"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201:Backend"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201preview:Backend"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20200601preview:Backend"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Backend resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Backend Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Backend(name, id, options);
        }
    }

    public sealed class BackendArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Identifier of the Backend entity. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("backendId", required: true)]
        public Input<string> BackendId { get; set; } = null!;

        /// <summary>
        /// Backend Credentials Contract Properties
        /// </summary>
        [Input("credentials")]
        public Input<Inputs.BackendCredentialsContractArgs>? Credentials { get; set; }

        /// <summary>
        /// Backend Description.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Backend Properties contract
        /// </summary>
        [Input("properties")]
        public Input<Inputs.BackendPropertiesArgs>? Properties { get; set; }

        /// <summary>
        /// Backend communication protocol.
        /// </summary>
        [Input("protocol", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.ApiManagement.Latest.BackendProtocol> Protocol { get; set; } = null!;

        /// <summary>
        /// Backend Proxy Contract Properties
        /// </summary>
        [Input("proxy")]
        public Input<Inputs.BackendProxyContractArgs>? Proxy { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
        /// </summary>
        [Input("resourceId")]
        public Input<string>? ResourceId { get; set; }

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public Input<string> ServiceName { get; set; } = null!;

        /// <summary>
        /// Backend Title.
        /// </summary>
        [Input("title")]
        public Input<string>? Title { get; set; }

        /// <summary>
        /// Backend TLS Properties
        /// </summary>
        [Input("tls")]
        public Input<Inputs.BackendTlsPropertiesArgs>? Tls { get; set; }

        /// <summary>
        /// Runtime Url of the Backend.
        /// </summary>
        [Input("url", required: true)]
        public Input<string> Url { get; set; } = null!;

        public BackendArgs()
        {
        }
    }
}

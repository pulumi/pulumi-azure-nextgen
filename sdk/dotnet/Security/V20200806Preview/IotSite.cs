// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20200806Preview
{
    /// <summary>
    /// IoT site model
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:security/v20200806preview:IotSite")]
    public partial class IotSite : Pulumi.CustomResource
    {
        /// <summary>
        /// Display name of the IoT site
        /// </summary>
        [Output("displayName")]
        public Output<string> DisplayName { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Tags of the IoT site
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a IotSite resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IotSite(string name, IotSiteArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:security/v20200806preview:IotSite", name, args ?? new IotSiteArgs(), MakeResourceOptions(options, ""))
        {
        }

        private IotSite(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:security/v20200806preview:IotSite", name, null, MakeResourceOptions(options, id))
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
        /// Get an existing IotSite resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IotSite Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new IotSite(name, id, options);
        }
    }

    public sealed class IotSiteArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Display name of the IoT site
        /// </summary>
        [Input("displayName", required: true)]
        public Input<string> DisplayName { get; set; } = null!;

        /// <summary>
        /// Scope of the query (IoT Hub, /providers/Microsoft.Devices/iotHubs/myHub)
        /// </summary>
        [Input("scope", required: true)]
        public Input<string> Scope { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Tags of the IoT site
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public IotSiteArgs()
        {
        }
    }
}

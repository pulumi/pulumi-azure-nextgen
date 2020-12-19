// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20200501
{
    /// <summary>
    /// The streaming endpoint.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:media/v20200501:StreamingEndpoint")]
    public partial class StreamingEndpoint : Pulumi.CustomResource
    {
        /// <summary>
        /// The access control definition of the streaming endpoint.
        /// </summary>
        [Output("accessControl")]
        public Output<Outputs.StreamingEndpointAccessControlResponse?> AccessControl { get; private set; } = null!;

        /// <summary>
        /// This feature is deprecated, do not set a value for this property.
        /// </summary>
        [Output("availabilitySetName")]
        public Output<string?> AvailabilitySetName { get; private set; } = null!;

        /// <summary>
        /// The CDN enabled flag.
        /// </summary>
        [Output("cdnEnabled")]
        public Output<bool?> CdnEnabled { get; private set; } = null!;

        /// <summary>
        /// The CDN profile name.
        /// </summary>
        [Output("cdnProfile")]
        public Output<string?> CdnProfile { get; private set; } = null!;

        /// <summary>
        /// The CDN provider name.
        /// </summary>
        [Output("cdnProvider")]
        public Output<string?> CdnProvider { get; private set; } = null!;

        /// <summary>
        /// The exact time the streaming endpoint was created.
        /// </summary>
        [Output("created")]
        public Output<string> Created { get; private set; } = null!;

        /// <summary>
        /// The streaming endpoint access policies.
        /// </summary>
        [Output("crossSiteAccessPolicies")]
        public Output<Outputs.CrossSiteAccessPoliciesResponse?> CrossSiteAccessPolicies { get; private set; } = null!;

        /// <summary>
        /// The custom host names of the streaming endpoint
        /// </summary>
        [Output("customHostNames")]
        public Output<ImmutableArray<string>> CustomHostNames { get; private set; } = null!;

        /// <summary>
        /// The streaming endpoint description.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The free trial expiration time.
        /// </summary>
        [Output("freeTrialEndTime")]
        public Output<string> FreeTrialEndTime { get; private set; } = null!;

        /// <summary>
        /// The streaming endpoint host name.
        /// </summary>
        [Output("hostName")]
        public Output<string> HostName { get; private set; } = null!;

        /// <summary>
        /// The exact time the streaming endpoint was last modified.
        /// </summary>
        [Output("lastModified")]
        public Output<string> LastModified { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Max cache age
        /// </summary>
        [Output("maxCacheAge")]
        public Output<int?> MaxCacheAge { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the streaming endpoint.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The resource state of the streaming endpoint.
        /// </summary>
        [Output("resourceState")]
        public Output<string> ResourceState { get; private set; } = null!;

        /// <summary>
        /// The number of scale units. Use the Scale operation to adjust this value.
        /// </summary>
        [Output("scaleUnits")]
        public Output<int> ScaleUnits { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a StreamingEndpoint resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public StreamingEndpoint(string name, StreamingEndpointArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:media/v20200501:StreamingEndpoint", name, args ?? new StreamingEndpointArgs(), MakeResourceOptions(options, ""))
        {
        }

        private StreamingEndpoint(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:media/v20200501:StreamingEndpoint", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:media/latest:StreamingEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180330preview:StreamingEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180601preview:StreamingEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180701:StreamingEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20190501preview:StreamingEndpoint"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing StreamingEndpoint resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static StreamingEndpoint Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new StreamingEndpoint(name, id, options);
        }
    }

    public sealed class StreamingEndpointArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The access control definition of the streaming endpoint.
        /// </summary>
        [Input("accessControl")]
        public Input<Inputs.StreamingEndpointAccessControlArgs>? AccessControl { get; set; }

        /// <summary>
        /// The Media Services account name.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The flag indicates if the resource should be automatically started on creation.
        /// </summary>
        [Input("autoStart")]
        public Input<bool>? AutoStart { get; set; }

        /// <summary>
        /// This feature is deprecated, do not set a value for this property.
        /// </summary>
        [Input("availabilitySetName")]
        public Input<string>? AvailabilitySetName { get; set; }

        /// <summary>
        /// The CDN enabled flag.
        /// </summary>
        [Input("cdnEnabled")]
        public Input<bool>? CdnEnabled { get; set; }

        /// <summary>
        /// The CDN profile name.
        /// </summary>
        [Input("cdnProfile")]
        public Input<string>? CdnProfile { get; set; }

        /// <summary>
        /// The CDN provider name.
        /// </summary>
        [Input("cdnProvider")]
        public Input<string>? CdnProvider { get; set; }

        /// <summary>
        /// The streaming endpoint access policies.
        /// </summary>
        [Input("crossSiteAccessPolicies")]
        public Input<Inputs.CrossSiteAccessPoliciesArgs>? CrossSiteAccessPolicies { get; set; }

        [Input("customHostNames")]
        private InputList<string>? _customHostNames;

        /// <summary>
        /// The custom host names of the streaming endpoint
        /// </summary>
        public InputList<string> CustomHostNames
        {
            get => _customHostNames ?? (_customHostNames = new InputList<string>());
            set => _customHostNames = value;
        }

        /// <summary>
        /// The streaming endpoint description.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Max cache age
        /// </summary>
        [Input("maxCacheAge")]
        public Input<int>? MaxCacheAge { get; set; }

        /// <summary>
        /// The name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The number of scale units. Use the Scale operation to adjust this value.
        /// </summary>
        [Input("scaleUnits", required: true)]
        public Input<int> ScaleUnits { get; set; } = null!;

        /// <summary>
        /// The name of the streaming endpoint, maximum length is 24.
        /// </summary>
        [Input("streamingEndpointName", required: true)]
        public Input<string> StreamingEndpointName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public StreamingEndpointArgs()
        {
        }
    }
}

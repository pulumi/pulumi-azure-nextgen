// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AVS.V20200717Preview
{
    /// <summary>
    /// ExpressRoute Circuit Authorization
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:avs/v20200717preview:Authorization")]
    public partial class Authorization : Pulumi.CustomResource
    {
        /// <summary>
        /// The ID of the ExpressRoute Circuit Authorization
        /// </summary>
        [Output("expressRouteAuthorizationId")]
        public Output<string> ExpressRouteAuthorizationId { get; private set; } = null!;

        /// <summary>
        /// The key of the ExpressRoute Circuit Authorization
        /// </summary>
        [Output("expressRouteAuthorizationKey")]
        public Output<string> ExpressRouteAuthorizationKey { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The state of the  ExpressRoute Circuit Authorization provisioning
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Authorization resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Authorization(string name, AuthorizationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:avs/v20200717preview:Authorization", name, args ?? new AuthorizationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Authorization(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:avs/v20200717preview:Authorization", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:avs/latest:Authorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:avs/v20200320:Authorization"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Authorization resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Authorization Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Authorization(name, id, options);
        }
    }

    public sealed class AuthorizationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the ExpressRoute Circuit Authorization in the private cloud
        /// </summary>
        [Input("authorizationName", required: true)]
        public Input<string> AuthorizationName { get; set; } = null!;

        /// <summary>
        /// The name of the private cloud.
        /// </summary>
        [Input("privateCloudName", required: true)]
        public Input<string> PrivateCloudName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public AuthorizationArgs()
        {
        }
    }
}

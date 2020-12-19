// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20191101
{
    /// <summary>
    /// Authorization in an ExpressRouteCircuit resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20191101:ExpressRouteCircuitAuthorization")]
    public partial class ExpressRouteCircuitAuthorization : Pulumi.CustomResource
    {
        /// <summary>
        /// The authorization key.
        /// </summary>
        [Output("authorizationKey")]
        public Output<string?> AuthorizationKey { get; private set; } = null!;

        /// <summary>
        /// The authorization use status.
        /// </summary>
        [Output("authorizationUseStatus")]
        public Output<string?> AuthorizationUseStatus { get; private set; } = null!;

        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the authorization resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ExpressRouteCircuitAuthorization resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ExpressRouteCircuitAuthorization(string name, ExpressRouteCircuitAuthorizationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20191101:ExpressRouteCircuitAuthorization", name, args ?? new ExpressRouteCircuitAuthorizationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ExpressRouteCircuitAuthorization(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20191101:ExpressRouteCircuitAuthorization", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20150501preview:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20150615:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160330:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160601:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160901:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20161201:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170301:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170601:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170801:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170901:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171001:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171101:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180101:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180201:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180401:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180601:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180701:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180801:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181001:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181101:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181201:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190201:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190401:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190901:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:ExpressRouteCircuitAuthorization"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:ExpressRouteCircuitAuthorization"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ExpressRouteCircuitAuthorization resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ExpressRouteCircuitAuthorization Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ExpressRouteCircuitAuthorization(name, id, options);
        }
    }

    public sealed class ExpressRouteCircuitAuthorizationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The authorization key.
        /// </summary>
        [Input("authorizationKey")]
        public Input<string>? AuthorizationKey { get; set; }

        /// <summary>
        /// The name of the authorization.
        /// </summary>
        [Input("authorizationName", required: true)]
        public Input<string> AuthorizationName { get; set; } = null!;

        /// <summary>
        /// The authorization use status.
        /// </summary>
        [Input("authorizationUseStatus")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20191101.AuthorizationUseStatus>? AuthorizationUseStatus { get; set; }

        /// <summary>
        /// The name of the express route circuit.
        /// </summary>
        [Input("circuitName", required: true)]
        public Input<string> CircuitName { get; set; } = null!;

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public ExpressRouteCircuitAuthorizationArgs()
        {
        }
    }
}

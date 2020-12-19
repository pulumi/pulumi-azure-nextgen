// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.Latest
{
    /// <summary>
    /// Virtual Network route contract used to pass routing information for a Virtual Network.
    /// Latest API Version: 2020-09-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:web/latest:AppServicePlanRouteForVnet")]
    public partial class AppServicePlanRouteForVnet : Pulumi.CustomResource
    {
        /// <summary>
        /// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
        /// </summary>
        [Output("endAddress")]
        public Output<string?> EndAddress { get; private set; } = null!;

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
        /// The type of route this is:
        /// DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
        /// INHERITED - Routes inherited from the real Virtual Network routes
        /// STATIC - Static route set on the app only
        /// 
        /// These values will be used for syncing an app's routes with those from a Virtual Network.
        /// </summary>
        [Output("routeType")]
        public Output<string?> RouteType { get; private set; } = null!;

        /// <summary>
        /// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        /// </summary>
        [Output("startAddress")]
        public Output<string?> StartAddress { get; private set; } = null!;

        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a AppServicePlanRouteForVnet resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AppServicePlanRouteForVnet(string name, AppServicePlanRouteForVnetArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/latest:AppServicePlanRouteForVnet", name, args ?? new AppServicePlanRouteForVnetArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AppServicePlanRouteForVnet(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/latest:AppServicePlanRouteForVnet", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20150801:AppServicePlanRouteForVnet"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20160901:AppServicePlanRouteForVnet"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20180201:AppServicePlanRouteForVnet"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20190801:AppServicePlanRouteForVnet"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200601:AppServicePlanRouteForVnet"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200901:AppServicePlanRouteForVnet"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing AppServicePlanRouteForVnet resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AppServicePlanRouteForVnet Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new AppServicePlanRouteForVnet(name, id, options);
        }
    }

    public sealed class AppServicePlanRouteForVnetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
        /// </summary>
        [Input("endAddress")]
        public Input<string>? EndAddress { get; set; }

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Input("kind")]
        public Input<string>? Kind { get; set; }

        /// <summary>
        /// Name of the App Service plan.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the Virtual Network route.
        /// </summary>
        [Input("routeName", required: true)]
        public Input<string> RouteName { get; set; } = null!;

        /// <summary>
        /// The type of route this is:
        /// DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
        /// INHERITED - Routes inherited from the real Virtual Network routes
        /// STATIC - Static route set on the app only
        /// 
        /// These values will be used for syncing an app's routes with those from a Virtual Network.
        /// </summary>
        [Input("routeType")]
        public InputUnion<string, Pulumi.AzureNextGen.Web.Latest.RouteType>? RouteType { get; set; }

        /// <summary>
        /// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        /// </summary>
        [Input("startAddress")]
        public Input<string>? StartAddress { get; set; }

        /// <summary>
        /// Name of the Virtual Network.
        /// </summary>
        [Input("vnetName", required: true)]
        public Input<string> VnetName { get; set; } = null!;

        public AppServicePlanRouteForVnetArgs()
        {
        }
    }
}
